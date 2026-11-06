(function () {
  const DB_NAME = 'routine-nirmata';
  const DB_VERSION = 1;
  const STORE_NAME = 'records';
  const STATE_KEY = 'school-routine';
  const LEGACY_KEY = 'rdalsc_routine_v1';

  let dbPromise;
  let initializedState;
  let initialized = false;
  const channel = typeof BroadcastChannel === 'function' ? new BroadcastChannel('routine-nirmata-state') : null;
  if (channel) channel.onmessage = async (event) => {
    if (!event.data || event.data.type !== 'updated') return;
    try {
      const current = normalizeState(await readRecord());
      if (!current) return;
      initializedState = current;
      initialized = true;
      if (window.RoutineNirmata && window.RoutineNirmata.setState) window.RoutineNirmata.setState(current);
      window.dispatchEvent(new CustomEvent('routine-local-update'));
    } catch (error) { console.warn('Could not read an update from another tab.', error); }
  };

  function openDatabase() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) {
        reject(new Error('এই ব্রাউজারে IndexedDB সমর্থিত নয়।'));
        return;
      }
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(STORE_NAME)) {
          request.result.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error('ব্রাউজারের ডেটাবেস খোলা যায়নি।'));
      request.onblocked = () => reject(new Error('অন্য একটি ট্যাবে ডেটাবেস আপডেট আটকে আছে।'));
    });
    return dbPromise;
  }

  async function readRecord() {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const request = transaction.objectStore(STORE_NAME).get(STATE_KEY);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error || new Error('ব্রাউজারের ডেটা পড়া যায়নি।'));
    });
  }

  async function writeRecord(value) {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      transaction.objectStore(STORE_NAME).put(value, STATE_KEY);
      transaction.oncomplete = () => resolve(value);
      transaction.onerror = () => reject(transaction.error || new Error('ব্রাউজারের ডেটা সংরক্ষণ করা যায়নি.'));
      transaction.onabort = () => reject(transaction.error || new Error('ব্রাউজারের ডেটা সংরক্ষণ বাতিল হয়েছে।'));
    });
  }

  function makeGrid(sections) {
    return Object.fromEntries((sections || []).map((section) => [
      section.id,
      Array.from({ length: 5 }, () => Array(6).fill(null))
    ]));
  }

  function normalizeState(value, fallback) {
    const source = value && Array.isArray(value.sections) && Array.isArray(value.teachers) ? value : fallback;
    if (!source || !Array.isArray(source.sections) || !Array.isArray(source.teachers)) return null;

    const sections = source.sections.map((section) => ({
      ...section,
      teacherCode: section.teacherCode || '',
      subjects: Array.isArray(section.subjects) ? section.subjects.map((subject) => ({
        ...subject,
        teachers: Array.isArray(subject.teachers) ? subject.teachers : [''],
        count: Number(subject.count) || 0,
        religion: Boolean(subject.religion)
      })) : []
    }));
    const blankGrid = makeGrid(sections);
    const grid = { ...blankGrid };

    for (const section of sections) {
      const inputDays = source.grid && source.grid[section.id];
      if (!Array.isArray(inputDays)) continue;
      for (let day = 0; day < 5; day += 1) {
        if (!Array.isArray(inputDays[day])) continue;
        for (let period = 0; period < 6; period += 1) {
          const cell = inputDays[day][period];
          if (!cell || !cell.subject) continue;
          grid[section.id][day][period] = {
            ...cell,
            sectionId: section.id,
            teachers: Array.isArray(cell.teachers) ? cell.teachers : [],
            religion: Boolean(cell.religion),
            version: Number(cell.version) || 1
          };
        }
      }
    }

    let subjects = Array.isArray(source.subjects) ? source.subjects.map((subject) => typeof subject === 'string'
      ? { name: subject, teachers: [] }
      : { ...subject, teachers: Array.isArray(subject.teachers) ? subject.teachers : [] }) : null;
    if (!subjects) {
      const pools = new Map();
      for (const section of sections) for (const item of section.subjects) {
        if (!pools.has(item.subject)) pools.set(item.subject, new Set());
        for (const teacher of item.teachers || []) if (teacher) pools.get(item.subject).add(teacher);
      }
      subjects = Array.from(pools, ([name, pool]) => ({ name, teachers: Array.from(pool) }));
    }

    return {
      ...source,
      teachers: source.teachers.map((teacher) => ({ ...teacher })),
      subjects,
      sections,
      grid,
      generated: Boolean(source.generated),
      unplaced: Number(source.unplaced) || 0,
      version: Number(source.version) || 1
    };
  }

  async function readLegacyLocalState() {
    try {
      const raw = localStorage.getItem(LEGACY_KEY);
      return raw ? normalizeState(JSON.parse(raw)) : null;
    } catch (_) {
      return null;
    }
  }

  async function fetchInitialState() {
    try {
      const response = await fetch('/routine-initial-state.json', { cache: 'force-cache' });
      if (!response.ok) return null;
      return normalizeState(await response.json());
    } catch (_) {
      return null;
    }
  }

  async function getState(fallback) {
    if (initialized) return initializedState;
    let saved = null;
    try {
      saved = await readRecord();
    } catch (error) {
      console.warn('IndexedDB is unavailable; trying browser storage fallback.', error);
      try {
        const raw = localStorage.getItem('routine-nirmata-fallback');
        if (raw) saved = JSON.parse(raw);
      } catch (_) {}
    }

    initializedState = normalizeState(saved)
      || await readLegacyLocalState()
      || await fetchInitialState()
      || normalizeState(fallback);
    if (!initializedState) throw new Error('রুটিনের প্রাথমিক ডেটা লোড করা যায়নি।');
    initialized = true;

    try {
      await writeRecord(initializedState);
      if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persist().catch(() => {});
      }
    } catch (error) {
      try { localStorage.setItem('routine-nirmata-fallback', JSON.stringify(initializedState)); } catch (_) {}
      console.warn('Could not initialize IndexedDB; using browser storage fallback.', error);
    }
    return initializedState;
  }

  async function saveState(value) {
    const normalized = normalizeState(value);
    if (!normalized) throw new Error('সংরক্ষণের জন্য রুটিনের ডেটা সঠিক নয়।');
    initializedState = normalized;
    initialized = true;
    try {
      await writeRecord(normalized);
      try { localStorage.removeItem('routine-nirmata-fallback'); } catch (_) {}
    } catch (error) {
      try {
        localStorage.setItem('routine-nirmata-fallback', JSON.stringify(normalized));
      } catch (_) {
        throw error;
      }
    }
    if (channel) channel.postMessage({ type: 'updated', version: normalized.version });
    window.dispatchEvent(new CustomEvent('routine-local-saved'));
    return normalized;
  }

  function liveState() {
    return window.RoutineNirmata && window.RoutineNirmata.getState
      ? window.RoutineNirmata.getState()
      : initializedState;
  }


  function routeError(message, status, extra) {
    const error = new Error(message);
    error.status = status || 400;
    error.data = { success: false, error: message, ...(extra || {}) };
    throw error;
  }

  function copySectionConfig(state, incoming, now) {
    if (!incoming || !incoming.id) return null;
    const section = state.sections.find((item) => item.id === incoming.id);
    if (!section) routeError('শাখাটি পাওয়া যায়নি।', 404);
    if (incoming.teacherCode !== undefined) section.teacherCode = incoming.teacherCode || '';
    if (Array.isArray(incoming.subjects)) {
      section.subjects = incoming.subjects.map((subject) => ({
        ...subject,
        subject: String(subject.subject || '').trim(),
        teachers: Array.isArray(subject.teachers) ? subject.teachers.map((teacher) => String(teacher || '').trim()) : [''],
        count: Math.max(0, Math.min(30, Number(subject.count) || 0)),
        religion: Boolean(subject.religion)
      })).filter((subject) => subject.subject);
      for (const subject of section.subjects) {
        for (const day of state.grid[section.id] || []) {
          for (const cell of day || []) {
            if (cell && cell.subject === subject.subject) {
              cell.teachers = subject.teachers.filter(Boolean);
              cell.religion = subject.religion;
              cell.version = (Number(cell.version) || 0) + 1;
            }
          }
        }
      }
    }
    section.updatedAt = now;
    state.version = Date.now();
    return section;
  }

  function cellConflict(state, sectionId, day, period, teachers) {
    for (const section of state.sections) {
      if (section.id === sectionId) continue;
      const cell = state.grid[section.id] && state.grid[section.id][day] && state.grid[section.id][day][period];
      const duplicate = cell && (cell.teachers || []).find((teacher) => teachers.includes(teacher));
      if (!duplicate) continue;
      const person = state.teachers.find((teacher) => teacher.code === duplicate);
      const className = ({ '6': '৬ষ্ঠ', '7': '৭ম', '8': '৮ম', '9': '৯ম', '10': '১০ম' })[section.cls] || section.cls;
      const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার'];
      const periods = ['১ম', '২য়', '৩য়', '৪র্থ', '৫ম', '৬ষ্ঠ'];
      return {
        teacherCode: duplicate,
        teacherName: person ? person.name : duplicate,
        conflictingSectionId: section.id,
        conflictingSectionName: `${className} শ্রেণি - ${section.sec} শাখা`,
        conflictingSubject: cell.subject,
        day,
        period,
        error: `দ্বন্দ্ব শনাক্ত হয়েছে: শিক্ষক ${person ? person.name : duplicate} (${duplicate}) একই সময়ে (${days[day]}, ${periods[period]} ঘণ্টা) "${className} শ্রেণি - ${section.sec} শাখা"-এ "${cell.subject}" ক্লাসে নিযুক্ত আছেন.`
      };
    }
    return null;
  }

  function listConflicts(state) {
    const seen = new Map();
    const conflicts = [];
    for (const section of state.sections) {
      const days = state.grid[section.id] || [];
      days.forEach((periods, day) => (periods || []).forEach((cell, period) => {
        if (!cell) return;
        for (const teacher of cell.teachers || []) {
          if (!teacher) continue;
          const key = `${day}|${period}|${teacher}`;
          if (seen.has(key)) {
            const previous = seen.get(key);
            const person = state.teachers.find((item) => item.code === teacher);
            conflicts.push({ teacher, teacherName: person ? person.name : teacher, day, period, sectionA: previous.sectionId, sectionB: section.id, subjectA: previous.subject, subjectB: cell.subject });
          } else {
            seen.set(key, { sectionId: section.id, subject: cell.subject });
          }
        }
      }));
    }
    return conflicts;
  }

  async function request(endpoint, options) {
    const requestOptions = options || {};
    const method = String(requestOptions.method || 'GET').toUpperCase();
    const path = new URL(endpoint, location.origin).pathname;
    let body = {};
    try { body = requestOptions.body ? JSON.parse(requestOptions.body) : {}; } catch (_) {}

    if (path === '/api/auth/login' && method === 'POST') {
      const role = body.username === 'admin' ? 'admin' : body.username === 'teacher' ? 'teacher' : null;
      if (!role) routeError('admin অথবা teacher প্রোফাইল বেছে নিন', 401);
      return { success: true, token: `local-${role}-${Date.now()}`, user: { username: role, role, name: role === 'admin' ? 'প্রধান প্রশাসক' : 'শিক্ষক (Teacher)' } };
    }
    if (path === '/api/auth/me') {
      let token = '';
      try { token = localStorage.getItem('routine_auth_token') || ''; } catch (_) {}
      const role = token.match(/^local-(admin|teacher)-/)?.[1];
      return role
        ? { success: true, user: { username: role, role, name: role === 'admin' ? 'প্রধান প্রশাসক' : 'শিক্ষক (Teacher)' } }
        : { success: false, error: 'অনুগ্রহ করে প্রবেশ করুন।' };
    }

    let state;
    if (!initialized) {
      state = await getState(liveState());
      if (window.RoutineNirmata && window.RoutineNirmata.setState) window.RoutineNirmata.setState(state);
    } else {
      state = liveState() || initializedState;
    }

    if (path === '/api/state' && method === 'GET') return { success: true, state };
    if ((path === '/api/state/import' || path === '/api/state/migrate') && method === 'POST') {
      const imported = normalizeState(body);
      if (!imported) routeError('অবৈধ ডেটা ফাইল: শাখা এবং শিক্ষকের তথ্য অনুপস্থিত।', 400);
      imported.version = Date.now();
      await saveState(imported);
      if (window.RoutineNirmata && window.RoutineNirmata.setState) window.RoutineNirmata.setState(imported);
      return { success: true, message: 'ডেটা এই ব্রাউজারে ইমপোর্ট হয়েছে।', state: imported };
    }
    if (path === '/api/state/export' && method === 'GET') return { success: true, state };

    if (path === '/api/network-info') return { success: true, port: location.port || (location.protocol === 'https:' ? 443 : 80), lanIps: [] };

    if (path === '/api/teachers' && method === 'GET') return { success: true, teachers: state.teachers };
    if (path === '/api/teachers' && method === 'POST') {
      const code = String(body.code || '').trim().toUpperCase();
      const name = String(body.name || '').trim();
      if (!code || !name) routeError('শিক্ষকের কোড ও নাম প্রদান করুন।', 400);
      if (state.teachers.some((teacher) => teacher.code === code)) routeError(`কোড "${code}" ইতিমধ্যে অন্য শিক্ষকের জন্য ব্যবহৃত হচ্ছে।`, 400);
      return { success: true, teacher: { code, name } };
    }
    const teacherMatch = path.match(/^\/api\/teachers\/([^/]+)$/);
    if (teacherMatch) {
      const code = decodeURIComponent(teacherMatch[1]);
      const teacher = state.teachers.find((item) => item.code === code);
      if (method === 'PUT') {
        const name = String(body.name || '').trim();
        if (!name) routeError('শিক্ষকের নাম প্রদান করুন।', 400);
        if (teacher) teacher.name = name;
        await saveState(state);
        return { success: true, teacher: { code, name } };
      }
      if (method === 'DELETE') {
        state.teachers = state.teachers.filter((item) => item.code !== code);
        for (const subject of state.subjects) subject.teachers = (subject.teachers || []).filter((item) => item !== code);
        for (const section of state.sections) if (section.teacherCode === code) section.teacherCode = '';
        await saveState(state);
        return { success: true, message: 'শিক্ষক মুছে ফেলা হয়েছে।' };
      }
    }

    if (path === '/api/subjects' && method === 'GET') return { success: true, subjects: state.subjects };
    if (path === '/api/subjects' && method === 'POST') {
      const name = String(body.name || '').trim();
      if (!name) routeError('বিষয়ের নাম প্রদান করুন।', 400);
      if (state.subjects.some((subject) => subject.name === name)) routeError('এই বিষয়টি ইতিমধ্যে বিদ্যমান।', 400);
      return { success: true, subject: { name, teachers: [] } };
    }
    const subjectMatch = path.match(/^\/api\/subjects\/([^/]+)(?:\/teachers)?$/);
    if (subjectMatch) {
      const name = decodeURIComponent(subjectMatch[1]);
      const isPool = path.endsWith('/teachers');
      const subject = state.subjects.find((item) => item.name === name);
      if (isPool && method === 'PUT') {
        if (subject) subject.teachers = Array.isArray(body.teachers) ? body.teachers.filter(Boolean) : [];
        await saveState(state);
        return { success: true, message: 'বিষয়ের শিক্ষক তালিকা আপডেট হয়েছে।' };
      }
      if (!isPool && method === 'PUT') {
        const newName = String(body.newName || '').trim();
        if (!newName) routeError('নতুন বিষয়ের নাম প্রদান করুন।', 400);
        if (state.subjects.some((item) => item.name === newName && item.name !== name)) routeError('এই নামের একটি বিষয় ইতিমধ্যে বিদ্যমান।', 400);
        if (subject) subject.name = newName;
        for (const section of state.sections) for (const item of section.subjects || []) if (item.subject === name) item.subject = newName;
        for (const days of Object.values(state.grid)) for (const periods of days || []) for (const cell of periods || []) if (cell && cell.subject === name) cell.subject = newName;
        await saveState(state);
        return { success: true, message: 'বিষয় সফলভাবে পুনঃনামকরণ করা হয়েছে।', name: newName };
      }
      if (!isPool && method === 'DELETE') {
        return { success: true, message: 'বিষয় মুছে ফেলা হয়েছে।' };
      }
    }

    if (path === '/api/sections/bulk-update' && method === 'POST') {
      const now = new Date().toISOString();
      if (!Array.isArray(body.sections)) routeError('শাখার তালিকা সঠিক নয়।', 400);
      for (const section of body.sections) copySectionConfig(state, section, now);
      state.version = Date.now();
      await saveState(state);
      return { success: true, message: 'শাখাগুলো এই ব্রাউজারে সংরক্ষিত হয়েছে।', sections: state.sections, grid: state.grid };
    }
    const sectionMatch = path.match(/^\/api\/sections\/([^/]+)$/);
    if (sectionMatch && method === 'PUT') {
      const sectionId = decodeURIComponent(sectionMatch[1]);
      const currentSection = state.sections.find((item) => item.id === sectionId);
      if (!currentSection) routeError('শাখাটি পাওয়া যায়নি।', 404);
      if (body.clientVersion && currentSection.updatedAt && body.clientVersion !== currentSection.updatedAt) {
        routeError('এই শাখাটি অন্য ট্যাবে পরিবর্তিত হয়েছে। সর্বশেষ তথ্য নিয়ে আবার চেষ্টা করুন।', 409, { conflictType: 'STALE_SECTION' });
      }
      const incoming = { ...body, id: sectionId };
      const section = copySectionConfig(state, incoming, new Date().toISOString());
      await saveState(state);
      return { success: true, message: 'শাখার তথ্য সংরক্ষিত হয়েছে।', section, grid: state.grid };
    }
    if (sectionMatch && method === 'DELETE') {
      const sectionId = decodeURIComponent(sectionMatch[1]);
      state.sections = state.sections.filter((item) => item.id !== sectionId);
      delete state.grid[sectionId];
      state.version = Date.now();
      await saveState(state);
      return { success: true, state };
    }

    if (path === '/api/routine/save-generated' && method === 'POST') {
      const generatedGrid = body.grid;
      if (!generatedGrid || typeof generatedGrid !== 'object') routeError('অবৈধ রুটিন গ্রিড।', 400);
      state.grid = { ...makeGrid(state.sections), ...generatedGrid };
      state.generated = true;
      state.unplaced = Number(body.unplaced) || 0;
      state.version = Date.now();
      await saveState(state);
      return { success: true, message: 'রুটিন তৈরি ও এই ব্রাউজারে সংরক্ষিত হয়েছে।', version: state.version };
    }
    if (path === '/api/routine/cell' && method === 'PUT') {
      const { sectionId, day, period } = body;
      if (!sectionId || !Number.isInteger(Number(day)) || !Number.isInteger(Number(period))) routeError('শাখা, দিন এবং পিরিয়ড প্রদান করুন।', 400);
      const d = Number(day);
      const p = Number(period);
      if (d < 0 || d > 4) routeError('দিন অবশ্যই রবিবার থেকে বৃহস্পতিবারের (০-৪) মধ্যে হতে হবে।', 422);
      if (p < 0 || p > 5) routeError('পিরিয়ড অবশ্যই ১ম থেকে ৬ষ্ঠ ঘণ্টার (০-৫) মধ্যে হতে হবে।', 422);
      if (!state.grid[sectionId]) routeError(`শাখা "${sectionId}" খুঁজে পাওয়া যায়নি।`, 404);
      const teachers = (Array.isArray(body.teachers) ? body.teachers : []).filter(Boolean);
      const conflict = cellConflict(state, sectionId, d, p, teachers);
      if (conflict) routeError(conflict.error, 422, { conflictType: 'TEACHER_CONFLICT', conflict });
      const existing = state.grid[sectionId][d][p];
      const clientVersion = body.clientVersion === undefined || body.clientVersion === null ? null : Number(body.clientVersion);
      if ((existing && clientVersion !== null && clientVersion !== Number(existing.version)) || (!existing && clientVersion > 0)) {
        routeError('এই ঘরটি অন্য ট্যাবে পরিবর্তিত হয়েছে। সর্বশেষ তথ্য নিয়ে আবার চেষ্টা করুন।', 409, { conflictType: 'STALE_VERSION' });
      }
      const cell = { sectionId, day: d, period: p, subject: String(body.subject || ''), teachers, religion: Boolean(body.religion), version: (Number(existing && existing.version) || 0) + 1 };
      state.grid[sectionId][d][p] = cell;
      state.generated = true;
      state.version = Date.now();
      await saveState(state);
      return { success: true, cell };
    }
    if (path === '/api/routine/cell' && method === 'DELETE') {
      const sectionId = String(body.sectionId || '');
      const day = Number(body.day);
      const period = Number(body.period);
      if (!state.grid[sectionId] || day < 0 || day > 4 || period < 0 || period > 5) routeError('শাখা, দিন এবং পিরিয়ড সঠিকভাবে দিন।', 400);
      state.grid[sectionId][day][period] = null;
      state.version = Date.now();
      await saveState(state);
      return { success: true, message: 'ঘর খালি করা হয়েছে।' };
    }
    if (path === '/api/routine/conflicts' && method === 'GET') return { success: true, conflicts: listConflicts(state) };
    if (path === '/api/backup' && method === 'POST') {
      return { success: true, message: 'এই ব্রাউজারের JSON ব্যাকআপ বাটন ব্যবহার করুন।' };
    }
    if (path === '/api/backup/list' && method === 'GET') return { success: true, backups: [] };

    return { success: true };
  }

  window.RoutineLocalApi = { getState, saveState, request };
})();

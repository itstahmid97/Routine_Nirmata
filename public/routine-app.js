/* ============================================================
   রুটিন নির্মাতা — RDALSC Bogura  |  single-file, no build
   ============================================================ */


/* ---------- COMPREHENSIVE TRANSLATION DICTIONARIES ---------- */
const SEC_EN = {
  'ক': 'A',
  'খ': 'B',
  'গ': 'C',
  'ঘ': 'D',
  'মানবিক ও ব্যবসায়': 'Humanities & Business'
};

const SUBJECTS_EN = {
  'বাংলা': 'Bangla',
  'ইংরেজি': 'English',
  'গণিত': 'Mathematics',
  'সাধারণ গণিত': 'General Math',
  'উচ্চতর গণিত': 'Higher Math',
  'বিজ্ঞান': 'Science',
  'পদার্থবিজ্ঞান': 'Physics',
  'রসায়ন': 'Chemistry',
  'জীববিজ্ঞান': 'Biology',
  'আইসিটি': 'ICT',
  'ধর্ম': 'Religion',
  'বাংলাদেশ ও বিশ্ব পরিচয়': 'Bangladesh & Global Studies',
  'চারু ও কারুকলা': 'Arts & Crafts',
  'শারীরিক শিক্ষা': 'Physical Education',
  'ভূগোল': 'Geography',
  'ইতিহাস': 'History',
  'ব্যবসায় উদ্যোগ': 'Business Entrepreneurship',
  'হিসাব বিজ্ঞান': 'Accounting',
  'কৃষিশিক্ষা': 'Agriculture',
  'গার্হস্থ্য বিজ্ঞান': 'Home Economics',
  'অর্থনীতি': 'Economics',
  'পৌরনীতি': 'Civics',
  'নতুন বিষয়': 'New Subject'
};

const SUBJECTS_SHORT_EN = {
  'বাংলা': 'Bangla',
  'ইংরেজি': 'English',
  'গণিত': 'Math',
  'সাধারণ গণিত': 'Gen. Math',
  'উচ্চতর গণিত': 'Higher Math',
  'বিজ্ঞান': 'Science',
  'পদার্থবিজ্ঞান': 'Physics',
  'রসায়ন': 'Chemistry',
  'জীববিজ্ঞান': 'Biology',
  'আইসিটি': 'ICT',
  'ধর্ম': 'Religion',
  'বাংলাদেশ ও বিশ্ব পরিচয়': 'BGS',
  'চারু ও কারুকলা': 'Arts & Crafts',
  'শারীরিক শিক্ষা': 'Physical Ed.',
  'ভূগোল': 'Geography',
  'ইতিহাস': 'History',
  'ব্যবসায় উদ্যোগ': 'Business Ent.',
  'হিসাব বিজ্ঞান': 'Accounting',
  'কৃষিশিক্ষা': 'Agriculture',
  'গার্হস্থ্য বিজ্ঞান': 'Home Econ.',
  'অর্থনীতি': 'Economics',
  'পৌরনীতি': 'Civics',
  'নতুন বিষয়': 'New Subject'
};

const TEACHERS_EN = {
  "P": "Principal",
  "AHT": "Md. Asaduzzaman",
  "HZ": "Md. Helaluzzaman",
  "GM": "Md. Golam Mostafa",
  "KZ": "A.H.M. Kamruzzaman",
  "RKG": "Ratan Kumar Ghosh",
  "IH": "Md. Iqbal Hossain",
  "AS": "Md. Abdus Salam",
  "BSU": "Bonosree Urmi",
  "SJ": "Md. Saju Mia",
  "ATE": "Abu Talha Md. Ershaduzzaman",
  "NI": "Md. Nazrul Islam",
  "MAR": "Mst. Makfa Akter",
  "ICD": "Indrajit Chandra Das",
  "BKD": "Biddut Kumar Dutta",
  "SRK": "Swati Rani Kundu",
  "SI": "Md. Sirajul Islam",
  "MH": "Md. Mahbub Hossain",
  "HA": "Md. Hashim Ali",
  "NY": "Mst. Nilufar Yasmin",
  "TA1": "Mst. Tanzila Akter",
  "TMM": "ATM Murshedul Hasan",
  "SAM": "Md. Samsul Alam",
  "YA": "Yamin Akter Jahan",
  "SPC": "Sampa Parvin Chitra",
  "MSR": "Md. Saidur Rahman",
  "RR": "Rezwana Rashdi",
  "SIS": "Md. Shafiqul Islam Sheikh",
  "RB": "Md. Ripon Babu",
  "SNU": "Md. Sanaullah",
  "AMF": "Abu Obaida Md. Faisal",
  "PKD": "Paritosh Kumar Debnath",
  "FA": "Mst. Ferdousi Akter",
  "DCM": "Dhanapati Chandra Mandal",
  "ANR": "Md. Anisur Rahman",
  "SHR": "Md. Sohanur Rahman",
  "PA": "Mst. Parvin Sultana",
  "EP": "Mst. Elora Parvin",
  "SM": "Soumik Mahfuz",
  "AH": "Md. Abdul Hannan",
  "RFA": "Md. Rafiqul Aziz",
  "RKN": "Mst. Rina Khatun",
  "JA": "Md. Jahangir Alam",
  "MP": "Manzila Parvin",
  "UTT": "Umme Tania Tofa",
  "EK": "Md. Imran Khan",
  "RH": "Md. Rajiul Haque",
  "SZ": "Md. Shamsuzzaman",
  "SS": "Mst. Sharmin Sultana",
  "GCG": "Goutam Chandra Goswami",
  "NUR": "Md. Nurislam",
  "FF": "Sekh Farzana Ferdousi",
  "MHR": "Md. Harunur Rashid",
  "BS": "Md. Biddut Sarkar",
  "OB": "Md. Obaidur Rahman",
  "AHD": "Md. Aolad Haque Dewan",
  "ANH": "A.M. Anwar Hossain",
  "RK": "Raihan Kabiraj",
  "MAH": "Md. Adol Hossain",
  "SR": "Md. Selim Reza",
  "SKB": "Md. Sakib Hossain",
  "PS": "Palash Sarkar",
  "TI": "Md. Tarikul Islam",
  "SAH": "Md. Shakil Ahmed"
};

const TEMPLATES_EN = {
  A: {
    bus: { in: '10:30 AM', out: '03:50 PM' },
    periods: ['11:00-11:40', '12:00-12:40', '12:40-01:20', '01:50-02:30', '02:30-03:10', '03:10-03:50'],
    breaksAfter: [1, 3]
  },
  B: {
    bus: { in: '11:20 AM', out: '04:30 PM' },
    periods: ['12:00-12:40', '12:40-01:20', '01:50-02:30', '02:30-03:10', '03:10-03:50', '03:50-04:30'],
    breaksAfter: [2]
  }
};

function getTemplate(tmplKey) {
  if (currentLang === 'en') {
    return TEMPLATES_EN[tmplKey] || TEMPLATES[tmplKey];
  }
  return TEMPLATES[tmplKey];
}

function subjectName(name) {
  if (!name) return '';
  if (currentLang === 'en') {
    return SUBJECTS_EN[name] || name;
  }
  return name;
}

function cellSubjectName(name) {
  if (!name) return '';
  if (currentLang === 'en') {
    return SUBJECTS_SHORT_EN[name] || SUBJECTS_EN[name] || name;
  }
  return name;
}

function teacherName(code) {
  if (!code) return '';
  const tch = state.teachers.find(x => x.code === code);
  if (currentLang === 'en') {
    if (TEACHERS_EN[code]) return TEACHERS_EN[code];
    return tch ? tch.name : code;
  }
  return tch ? tch.name : code;
}

/* ---------- I18N Translations Engine & Theme Management ---------- */
const I18N = {
  bn: {
    brand_title: 'রুটিন নির্মাতা',
    brand_sub: 'পল্লী উন্নয়ন একাডেমী ল্যাবরেটরী স্কুল এন্ড কলেজ, বগুড়া',
    tab_setup: 'শিক্ষক ও বিষয়',
    tab_generate: 'রুটিন তৈরি',
    tab_routine: 'রুটিন দেখুন',
    tab_dashboard: 'ভারসাম্য যাচাই',
    tnum_1: '১',
    tnum_2: '২',
    tnum_3: '৩',
    tnum_4: '৪',
    wifi_link: 'ডেটা সংরক্ষণ',
    import_btn: 'JSON আনুন',
    export_btn: 'JSON নামান',
    pdf_btn: 'PDF ডাউনলোড',
    add_teacher_btn: '+ শিক্ষক যোগ করুন',
    add_subject_btn: '+ বিষয় যোগ করুন',
    guest: 'অতিথি',
    login_btn: 'অ্যাডমিন মোড',
    logout_btn: 'শিক্ষক মোড',
    role_admin: 'প্রধান প্রশাসক (Admin)',
    role_teacher: 'শিক্ষক (Teacher)',
    role_hint_title: 'প্রোফাইল সম্পর্কে:',
    auth_local_note: 'এই মোড শুধু এই ব্রাউজারে সম্পাদনা বা দেখার সুবিধা ঠিক করে। এটি পাসওয়ার্ড সুরক্ষা বা আলাদা ব্যবহারকারী অ্যাকাউন্ট নয়.',
    profile_admin: '✏️ প্রশাসক মোড',
    profile_teacher: '👨‍🏫 শিক্ষক মোড',
    profile_continue: 'চালু করুন',
    profile_label: 'প্রোফাইল',
    profile_placeholder: 'admin অথবা teacher বেছে নিন',
    hint_admin: 'প্রধান প্রশাসক: সম্পূর্ণ রুটিন তৈরি, শিক্ষক ও বিষয় পরিবর্তন, সেল এডিট ও ব্যাকআপ (সব ক্ষমতা)',
    hint_teacher: 'শিক্ষক: শুধুমাত্র রুটিন দেখা ও প্রিন্ট করার অনুমতি (অন্য কোনো এক্সেস নেই)',
    teacher_mode_title: 'শিক্ষক মোড (Teacher Mode)',
    teacher_filter_lbl: 'শিক্ষক ফিল্টার:',
    all_teachers: 'সকল শিক্ষক',
    conn_online: 'সংযুক্ত',
    conn_saving: 'সংরক্ষণ হচ্ছে…',
    conn_saved: 'সংরক্ষিত',
    conn_offline: 'সংযোগ বিচ্ছিন্ন',
    conn_connecting: 'সংযুক্ত হচ্ছে…',
    class_teacher_lbl: 'শ্রেণিশিক্ষক',
    bus_lbl: 'গাড়ি',
    sec_cls_suffix: 'শ্রেণি',
    sec_branch_suffix: 'শাখা',
    tmpl_lbl: 'সময়সূচি',
    classes_cnt: 'ক্লাস',
    subject_lbl: 'বিষয়',
    teacher_lbl: 'শিক্ষক',
    weekly_cls_lbl: 'সাপ্তাহিক ক্লাস',
    action_lbl: 'অ্যাকশন',
    remove: 'সরান',
    no_teacher: '— শিক্ষক নেই —',
    relig_parallel_note: 'ইসলাম + হিন্দু (দুই শিক্ষক একসাথে)',
    gen_stage_title: 'স্বয়ংক্রিয় রুটিন তৈরি',
    gen_stage_desc: 'সব শর্ত এবং নিয়ম মেনে কম্পিউটার স্বয়ংক্রিয়ভাবে রুটিন সাজাবে',
    gen_btn_lbl: 'রুটিন তৈরি করুন',
    gen_btn_viewer: 'রুটিন তৈরির জন্য প্রধান প্রশাসক হিসেবে লগইন করুন',
    all_classes_opt: 'সব শ্রেণি',
    empty_routine_title: 'এখনো রুটিন তৈরি হয়নি। ধাপ ২-এ গিয়ে "রুটিন তৈরি করুন" চাপুন।',
    go_to_gen_btn: 'রুটিন তৈরিতে যান',
    auto_distribute_btn: 'শিক্ষক বণ্টন',
    sec_list_title: 'শাখা ও বিষয়সমূহ',
    sec_count_badge: '২২টি শাখা',
    viewer_mode_title: 'শিক্ষক মোড (Teacher Mode)',
    viewer_setup_desc: 'শুধুমাত্র দেখার অনুমতি রয়েছে। তথ্য পরিবর্তনের জন্য প্রধান প্রশাসক হিসেবে লগইন করুন:',
    viewer_ed_notice_title: 'শিক্ষক মোড:',
    viewer_ed_notice_desc: 'আপনি কেবল দেখতে পারবেন। কোনো তথ্য সংরক্ষণ বা মুছে ফেলা যাবে না।',
    break_lbl: 'বিরতি',
    period_suffix: 'ম ঘণ্টা',
    avg_load_lbl: 'গড় ভার',
    classes_per_week: 'ক্লাস/সপ্তাহ',
    max_possible_30: 'সর্বোচ্চ সম্ভব ৩০',
    auth_title: 'প্রোফাইল বদলান',
    username_lbl: 'ইউজারনেম',
    username_ph: 'যেমন: admin বা teacher',
    password_lbl: 'পাসওয়ার্ড',
    password_ph: 'পাসওয়ার্ড দিন',
    cancel: 'বাতিল',
    sign_in: 'প্রবেশ করুন',
    pk_title: 'শিক্ষক নির্বাচন',
    pk_search_ph: 'নাম বা কোড লিখে খুঁজুন…',
    pk_subj_pool: 'এই বিষয়ের শিক্ষক',
    pk_other_teachers: 'অন্যান্য শিক্ষক',
    pk_all_teachers: 'সব শিক্ষক',
    pk_busy_teachers: 'অন্য ক্লাসে ব্যস্ত শিক্ষক',
    ed_title: 'ঘর সম্পাদনা',
    ed_subj_lbl: 'বিষয় নির্বাচন',
    ed_main_teacher: 'প্রধান শিক্ষক',
    ed_teacher_2: 'দ্বিতীয় শিক্ষক (ধর্মীয় সমান্তরাল)',
    ed_clear_btn: 'ঘর খালি করুন',
    ed_save_btn: 'সংরক্ষণ',
    toast_welcome: 'স্বাগতম',
    toast_logout: 'লগআউট করা হয়েছে',
    toast_viewer_blocked: 'শিক্ষক হিসেবে কেবল দেখার অনুমতি রয়েছে। পরিবর্তনের জন্য প্রধান প্রশাসক হিসেবে লগইন করুন।',
    toast_admin_required: 'এই কাজের জন্য প্রধান প্রশাসক (Admin) হিসেবে লগইন করা প্রয়োজন।',
    feas_all_30: 'সব শাখায় ঠিক ৩০টি ক্লাস',
    feas_bad_30: 'টি শাখায় ৩০-এর কম/বেশি ক্লাস',
    feas_no_overload: 'কোনো শিক্ষক অতিরিক্ত বোঝাই নন',
    feas_overload: 'জন শিক্ষকের ২৪-এর বেশি ক্লাস — বসানো কঠিন হতে পারে',
    feas_all_assigned: 'সব বিষয়ে শিক্ষক বসানো আছে',
    feas_unassigned: 'টি বিষয়ে শিক্ষক বসানো নেই (তবু চলবে)',
    no_conflicts_msg: 'কোনো দ্বন্দ্ব নেই — রুটিন সম্পূর্ণ নির্ভুল!',
    p1_eyebrow: 'ধাপ ১ — ইনপুট',
    p1_title: 'প্রতিটি শাখায় কে কোন বিষয় পড়ান',
    p1_desc: 'প্রতিটি শাখা নির্বাচন করে বিষয়, শিক্ষক ও সাপ্তাহিক ক্লাসের সংখ্যা ঠিক করুন। ডানপাশে মোট ৩০টি ক্লাসের হিসাব মিললে শাখাটি সবুজ দেখাবে।',
    p1_tlist_title: 'শিক্ষক তালিকা',
    p1_tlist_desc: 'রুটিনে ব্যবহৃত সংক্ষিপ্ত কোড ও পূর্ণ নাম। নতুন শিক্ষক যোগ করা বা নাম ঠিক করা যাবে।',
    p1_slist_title: 'বিষয় ও যোগ্য শিক্ষক',
    p1_slist_desc: 'প্রতিটি বিষয়ে কোন কোন শিক্ষক পড়াতে পারেন তা নির্ধারণ করুন। সুষম বণ্টনের মাধ্যমে শিক্ষক সংকট দূর করুন।',
    auto_balance_btn: '🪄 ৬০+ শিক্ষক দিয়ে সব বিষয়ে সুষম বণ্টন করুন',
    p2_eyebrow: 'ধাপ ২ — স্বয়ংক্রিয় তৈরি',
    p2_title: 'এক ক্লিকে দ্বন্দ্বমুক্ত রুটিন',
    p2_desc: 'প্রোগ্রাম নিজে থেকে সব শাখার ক্লাস এমনভাবে সাজাবে যেন একজন শিক্ষক একই সময়ে দুই শাখায় না পড়েন, একই বিষয় দিনে দুবার না আসে, আর প্রতিদিনের বোঝা সমান থাকে।',
    p2_ready_title: 'রুটিন তৈরির জন্য প্রস্তুত',
    p2_ready_desc: 'নিচের বাটনে ক্লিক করলে প্রোগ্রাম নিজে থেকে সমাধান শুরু করবে। সাধারণত ১–২ সেকেন্ডে সম্পূর্ণ রুটিন তৈরি হয়ে যায়।',
    p2_feas_title: 'সম্ভাব্যতা যাচাই (Feasibility Check)',
    p3_eyebrow: 'ধাপ ৩ — ফলাফল',
    p3_title: 'তৈরি রুটিন — দেখুন ও ঠিক করুন',
    p3_desc: 'যেকোনো ঘরে ক্লিক করে বিষয় বা শিক্ষক বদলানো যায়। কোনো শিক্ষক দুই শাখায় একসাথে পড়ে গেলে ঘরটি লাল হয়ে যাবে।',
    filter_lbl: 'দেখান:',
    leg_relig: 'ধর্ম (সমান্তরাল)',
    leg_conflict: 'দ্বন্দ্ব',
    leg_empty: 'খালি ঘর',
    leg_needs_teacher: 'শিক্ষক প্রয়োজন',
    p4_eyebrow: 'ধাপ ৪ — ভারসাম্য',
    p4_title: 'সবার ভার সমান কিনা যাচাই',
    p4_load_title: 'শিক্ষকদের মোট ক্লাস লোড',
    p4_fill_title: 'শাখাভিত্তিক পূরণ',
    p4_conflict_title: 'দ্বন্দ্ব রিপোর্ট',
    all_sections_lbl: 'সব শাখা',
    add_subj_action: '+ বিষয় যোগ করুন',
    toggle_relig_action: 'ধর্ম সারি টগল',
    distribute_sec_action: '⚡ শিক্ষক বণ্টন',
    copy_from_action: 'অন্য শাখা থেকে কপি',
    close_btn: 'বন্ধ করুন',
    pdf_modal_title: 'রুটিন প্রিন্ট ও PDF ডাউনলোড',
    pdf_modal_desc: 'আপনি সম্পূর্ণ রুটিন অথবা ফিল্টার করা নির্দিষ্ট শ্রেণির রুটিন PDF হিসেবে সেভ বা সরাসরি প্রিন্ট করতে পারেন:',
    pdf_scope_title: 'কী প্রিন্ট করতে চান?',
    pdf_scope_all: 'সব শাখা (২২টি পৃষ্ঠা) — সম্পূর্ণ বিদ্যালয়ের রুটিন',
    pdf_scope_filtered: 'বর্তমান ফিল্টার করা শাখা — (রুটিন পেজে প্রদর্শিত তালিকা)',
    pdf_btn_print: 'প্রিন্ট / Save as PDF শুরু করুন',
    pdf_btn_new_tab: 'নতুন ট্যাবে প্রাকদর্শন',
    pdf_btn_html: 'অফলাইন HTML রুটিন',
  },
  en: {
    brand_title: 'Routine Nirmata',
    brand_sub: 'Rural Development Academy Laboratory School and College, Bogura',
    tab_setup: 'Teachers & Subjects',
    tab_generate: 'Generate Routine',
    tab_routine: 'View Routine',
    tab_dashboard: 'Workload Balance',
    tnum_1: '1',
    tnum_2: '2',
    tnum_3: '3',
    tnum_4: '4',
    wifi_link: 'Data Storage',
    import_btn: 'Import JSON',
    export_btn: 'Export JSON',
    pdf_btn: 'Download PDF',
    add_teacher_btn: '+ Add Teacher',
    add_subject_btn: '+ Add Subject',
    guest: 'Guest',
    login_btn: 'Admin mode',
    logout_btn: 'Teacher mode',
    role_admin: 'Admin (Full Control)',
    role_teacher: 'Teacher (View Only)',
    role_hint_title: 'Profile Permissions:',
    hint_admin: 'Principal Admin: Full control over routine generation, setup, cell editing, and backups',
    hint_teacher: 'Teacher: Can only view and print routine (no other access)',
    teacher_mode_title: 'Teacher Mode (View Only)',
    teacher_filter_lbl: 'Find Teacher:',
    all_teachers: 'All Teachers',
    conn_online: 'Connected',
    conn_saving: 'Saving…',
    conn_saved: 'Saved',
    conn_offline: 'Offline',
    conn_connecting: 'Connecting…',
    class_teacher_lbl: 'Class Teacher',
    bus_lbl: 'Bus',
    sec_cls_suffix: 'Class',
    sec_branch_suffix: 'Section',
    tmpl_lbl: 'Schedule',
    classes_cnt: 'Classes',
    subject_lbl: 'Subject',
    teacher_lbl: 'Teacher',
    weekly_cls_lbl: 'Weekly Classes',
    action_lbl: 'Action',
    remove: 'Remove',
    no_teacher: '— No Teacher —',
    relig_parallel_note: 'Islam + Hindu (Parallel Dual Teachers)',
    gen_stage_title: 'Automated Routine Generation',
    gen_stage_desc: 'The scheduler arranges timetable slots while satisfying all rules and constraints',
    gen_btn_lbl: 'Generate Routine Now',
    gen_btn_viewer: 'Login as Admin to generate routine',
    all_classes_opt: 'All Classes',
    empty_routine_title: 'Routine has not been generated yet. Go to Step 2 and click "Generate Routine Now".',
    go_to_gen_btn: 'Go to Routine Generation',
    auto_distribute_btn: 'Distribute Teachers',
    sec_list_title: 'Sections & Subjects',
    sec_count_badge: '22 Sections',
    viewer_mode_title: 'Teacher Mode (View Only)',
    viewer_setup_desc: 'View-only mode. Please log in as Admin to make changes:',
    viewer_ed_notice_title: 'Teacher Mode:',
    viewer_ed_notice_desc: 'View-only mode. Changes cannot be saved or deleted.',
    break_lbl: 'Break',
    period_suffix: 'Period',
    avg_load_lbl: 'Average Load',
    classes_per_week: 'classes/week',
    max_possible_30: 'Max possible 30',
    auth_title: 'Switch profile',
    username_lbl: 'Username',
    username_ph: 'e.g. admin or teacher',
    password_lbl: 'Password',
    password_ph: 'Enter password',
    cancel: 'Cancel',
    sign_in: 'Sign In',
    pk_title: 'Select Teacher',
    pk_search_ph: 'Search teacher by name or code…',
    pk_subj_pool: 'Eligible Subject Teachers',
    pk_other_teachers: 'Other Teachers',
    pk_all_teachers: 'All Teachers',
    pk_busy_teachers: 'Teachers Busy in Another Class',
    ed_title: 'Edit Routine Cell',
    ed_subj_lbl: 'Select Subject',
    ed_main_teacher: 'Main Teacher',
    ed_teacher_2: 'Second Teacher (Religion Parallel)',
    ed_clear_btn: 'Clear Cell',
    ed_save_btn: 'Save Cell',
    toast_welcome: 'Welcome',
    toast_logout: 'Logged out successfully',
    toast_viewer_blocked: 'Teacher mode has read-only access. Please log in as Admin to make changes.',
    toast_admin_required: 'This action requires Principal Admin permissions.',
    feas_all_30: 'All sections have exactly 30 classes',
    feas_bad_30: 'sections have class count != 30',
    feas_no_overload: 'No teacher is overloaded (>24 classes)',
    feas_overload: 'teachers have >24 classes — placement may be difficult',
    feas_all_assigned: 'Teachers assigned for all subjects',
    feas_unassigned: 'subjects missing assigned teachers',
    no_conflicts_msg: 'No conflicts detected — Timetable is valid!',
    p1_eyebrow: 'Step 1 — Setup',
    p1_title: 'Subject & Teacher Assignments per Section',
    p1_desc: 'Configure subjects, teachers, and weekly periods for each section. Meeting 30 periods turns the status badge green.',
    p1_tlist_title: 'Teachers Directory',
    p1_tlist_desc: 'Short codes and full names of registered teachers. Add or rename teachers anytime.',
    p1_slist_title: 'Subjects & Eligible Teachers',
    p1_slist_desc: 'Define eligible teachers for each subject. Auto-balance ensures conflict-free scheduling.',
    auto_balance_btn: '🪄 Auto-Balance 60+ Teachers Across All Subjects',
    p2_eyebrow: 'Step 2 — Timetable Generator',
    p2_title: 'Conflict-Free Routine Generation',
    p2_desc: 'The intelligent scheduler arranges classes across all sections so that no teacher has double-bookings, subjects are evenly spaced, and weekly workload is balanced.',
    p2_ready_title: 'Ready to Generate Routine',
    p2_ready_desc: 'Click the button below to start conflict-free timetable scheduling.',
    p2_feas_title: 'Feasibility Check',
    p3_eyebrow: 'Step 3 — Results',
    p3_title: 'Generated Timetable — View & Edit',
    p3_desc: 'Click any cell to edit subject or teacher. Any teacher conflicts will be highlighted in red.',
    filter_lbl: 'Filter:',
    leg_relig: 'Religion (Parallel)',
    leg_conflict: 'Conflict',
    leg_empty: 'Empty Slot',
    leg_needs_teacher: 'Needs Teacher',
    p4_eyebrow: 'Step 4 — Workload Balance',
    p4_title: 'Teacher Workload & Equity Analysis',
    p4_load_title: 'Teacher Workload Distribution',
    p4_fill_title: 'Section Schedule Completion',
    p4_conflict_title: 'Conflict Report',
    all_sections_lbl: 'All Sections',
    add_subj_action: '+ Add Subject',
    toggle_relig_action: 'Toggle Religion Row',
    distribute_sec_action: '⚡ Distribute Teachers',
    copy_from_action: 'Copy From Section',
    close_btn: 'Close',
    pdf_modal_title: 'Print & Download PDF Routine',
    pdf_modal_desc: 'You can save the entire timetable or filtered sections as PDF, or print directly:',
    pdf_scope_title: 'Select Print Scope:',
    pdf_scope_all: 'All Sections (22 pages) — Complete School Timetable',
    pdf_scope_filtered: 'Currently Filtered Sections — (Displayed on Routine Page)',
    pdf_btn_print: 'Start Print / Save as PDF',
    pdf_btn_new_tab: 'Preview in New Tab',
    pdf_btn_html: 'Offline Standalone HTML',
  }
};

let currentLang = localStorage.getItem('routine_lang') || 'bn';
let currentTheme = localStorage.getItem('routine_theme') || 'light';

function t(key, ...args) {
  let val = (I18N[currentLang] && I18N[currentLang][key]) || (I18N['bn'] && I18N['bn'][key]) || key;
  if (typeof val === 'function') return val(...args);
  return val;
}

function setLanguage(lang) {
  currentLang = (lang === 'en') ? 'en' : 'bn';
  localStorage.setItem('routine_lang', currentLang);
  document.documentElement.setAttribute('lang', currentLang);

  // Update button label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = currentLang === 'bn' ? 'English' : 'বাংলা';

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (I18N[currentLang] && I18N[currentLang][k]) {
      el.textContent = I18N[currentLang][k];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if (I18N[currentLang] && I18N[currentLang][k]) {
      el.setAttribute('placeholder', I18N[currentLang][k]);
    }
  });

  // Re-render UI components with new language
  renderAll();
  renderRoutine();
  renderDashboard();
  renderFeas();
}

function setTheme(theme) {
  currentTheme = (theme === 'dark') ? 'dark' : 'light';
  localStorage.setItem('routine_theme', currentTheme);
  const darkIco = document.getElementById('themeIconDark');
  const lightIco = document.getElementById('themeIconLight');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (darkIco) darkIco.style.display = 'none';
    if (lightIco) lightIco.style.display = 'block';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (darkIco) darkIco.style.display = 'block';
    if (lightIco) lightIco.style.display = 'none';
  }
  window.dispatchEvent(new Event('routine-theme-change'));
}

const CLASS_EN = { '6': 'Class 6', '7': 'Class 7', '8': 'Class 8', '9': 'Class 9', '10': 'Class 10' };
const DAY_NAMES_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
const DAY_NAMES_BN = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার'];
const DAY_NAMES_SHORT_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const DAY_NAMES_SHORT_BN = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ'];


/* ---------- scheduler engine ---------- */
const DAYS = 5, PERIODS = 6;
const DAY_NAMES = ['রবি','সোম','মঙ্গল','বুধ','বৃহঃ'];

function makeRand(seed){let a=seed>>>0;return function(){a|=0;a=(a+0x6D2B79F5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296;};}
function shuffle(arr,rand){for(let i=arr.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}

function pickLeastLoadedTeacher(pool, teacherLoad) {
  if (!pool || pool.length === 0) return '';
  let bestT = pool[0];
  let minLoad = teacherLoad[bestT] || 0;
  for (let i = 1; i < pool.length; i++) {
    const t = pool[i];
    const load = teacherLoad[t] || 0;
    if (load < minLoad) {
      minLoad = load;
      bestT = t;
    }
  }
  return bestT;
}

/* ---------- BALANCED SUBJECT TEACHERS POOL (65 TEACHERS) ---------- */
const BALANCED_SUBJECT_TEACHERS = {
  'ইংরেজি': ['AS', 'TA1', 'UTT', 'EK', 'SHR', 'MP', 'ANH'],
  'বাংলা': ['NY', 'MAR', 'SRK', 'RR', 'FA', 'RKN', 'MAH'],
  'গণিত': ['IH', 'AHT', 'PKD', 'DCM', 'MHR', 'AHD'],
  'সাধারণ গণিত': ['AHT', 'PKD', 'DCM'],
  'উচ্চতর গণিত': ['IH', 'ANR'],
  'বিজ্ঞান': ['ATE', 'SIS', 'MSR', 'KZ', 'SR'],
  'পদার্থবিজ্ঞান': ['SJ', 'RH', 'OB'],
  'রসায়ন': ['ICD', 'FF', 'BS'],
  'জীববিজ্ঞান': ['BSU', 'SZ'],
  'আইসিটি': ['HZ', 'RB', 'SM', 'RK', 'GM'],
  'ধর্ম': ['HA', 'SI', 'MH', 'SAM', 'NUR', 'GCG', 'PS'],
  'বাংলাদেশ ও বিশ্ব পরিচয়': ['YA', 'AH', 'SS', 'SAH'],
  'চারু ও কারুকলা': ['BKD', 'PA', 'SKB'],
  'শারীরিক শিক্ষা': ['TMM', 'SNU', 'TI'],
  'ভূগোল': ['ATE', 'YA'],
  'ইতিহাস': ['YA', 'SS'],
  'ব্যবসায় উদ্যোগ': ['NI', 'RFA', 'JA', 'EP'],
  'হিসাব বিজ্ঞান': ['NI', 'JA', 'RFA'],
  'কৃষিশিক্ষা': ['ATE', 'AMF'],
  'গার্হস্থ্য বিজ্ঞান': ['EP', 'SPC'],
  'অর্থনীতি': ['YA', 'NI'],
  'পৌরনীতি': ['YA', 'SS']
};

function distributeTeachersFromPool(sections, subjects, force = false) {
  let changed = false;
  const poolMap = {};
  for (const s of (subjects || (state ? state.subjects : []) || [])) {
    if (s && s.name && Array.isArray(s.teachers) && s.teachers.length > 0) {
      poolMap[s.name] = s.teachers.filter(Boolean);
    }
  }

  const teacherLoad = {};
  for (const sec of sections) {
    for (const sub of (sec.subjects || [])) {
      for (const t of (sub.teachers || [])) {
        if (t && (!force || !poolMap[sub.subject] || !poolMap[sub.subject].includes(t))) {
          teacherLoad[t] = (teacherLoad[t] || 0) + (Number(sub.count) || 0);
        }
      }
    }
  }

  for (const sec of sections) {
    for (const sub of (sec.subjects || [])) {
      const pool = poolMap[sub.subject];
      if (!pool || pool.length === 0) continue;

      const hasTeacher = Array.isArray(sub.teachers) && sub.teachers.some(t => Boolean(t && t.trim()));
      if (hasTeacher && !force) continue;

      if (sub.religion) {
        const t0 = pickLeastLoadedTeacher(pool, teacherLoad);
        const remainingPool = pool.filter(t => t !== t0);
        const t1 = remainingPool.length > 0 ? pickLeastLoadedTeacher(remainingPool, teacherLoad) : (pool[0] || '');
        sub.teachers = [t0 || '', t1 || ''];
        if (t0) teacherLoad[t0] = (teacherLoad[t0] || 0) + (Number(sub.count) || 0);
        if (t1) teacherLoad[t1] = (teacherLoad[t1] || 0) + (Number(sub.count) || 0);
        changed = true;
      } else {
        const bestTeacher = pickLeastLoadedTeacher(pool, teacherLoad);
        if (bestTeacher) {
          sub.teachers = [bestTeacher];
          teacherLoad[bestTeacher] = (teacherLoad[bestTeacher] || 0) + (Number(sub.count) || 0);
          changed = true;
        }
      }
    }
  }

  return changed;
}

async function syncSectionsBulk(sections) {
  try {
    setSaveStatus('saving', currentLang === 'en' ? 'Saving sections...' : 'শাখা সংরক্ষণ হচ্ছে...');
    const res = await apiFetch('/api/sections/bulk-update', {
      method: 'POST',
      body: JSON.stringify({ sections })
    });
    if (res && res.success) {
      if (res.sections) {
        state.sections = res.sections;
      }
      if (res.grid) {
        state.grid = res.grid;
        renderRoutine();
        renderDashboard();
      }
      setSaveStatus('saved', '✓ ' + (currentLang === 'en' ? 'Saved' : 'সংরক্ষিত'));
      return true;
    }
  } catch (err) {
    console.warn('Bulk section save fallback to individual sync:', err);
    try {
      for (const sec of sections) {
        await saveSectionImmediately(sec.id);
      }
      setSaveStatus('saved', '✓ ' + (currentLang === 'en' ? 'Saved' : 'সংরক্ষিত'));
      return true;
    } catch (e2) {
      console.warn('Individual sync note:', e2);
    }
  }
  setSaveStatus('saved', currentLang === 'en' ? 'Saved in this browser' : 'এই ব্রাউজারে সংরক্ষিত');
  return false;
}

function buildLessons(sections){
  const lessons=[];
  for(const sec of sections){
    for(const sub of sec.subjects){
      let teachers=(sub.teachers||[]).filter(Boolean);
      if(teachers.length === 0 && typeof getSubjectPool === 'function'){
        const pool = getSubjectPool(sub.subject);
        if(pool.length > 0) teachers = [pool[0]];
      }
      for(let i=0;i<(sub.count||0);i++) lessons.push({sectionId:sec.id,subject:sub.subject,teachers,religion:!!sub.religion});
    }
  }
  return lessons;
}

function attempt(sections,seed){
  const rand=makeRand(seed);
  const grid={},dailySub={},dailyLoad={};
  for(const sec of sections){
    grid[sec.id]=Array.from({length:DAYS},()=>Array(PERIODS).fill(null));
    dailySub[sec.id]=Array.from({length:DAYS},()=>({}));
    dailyLoad[sec.id]=Array(DAYS).fill(0);
  }
  const teacherBusy=Array.from({length:DAYS},()=>Array.from({length:PERIODS},()=>new Set()));
  let lessons=buildLessons(sections);
  const load={};for(const l of lessons)for(const t of l.teachers)load[t]=(load[t]||0)+1;
  shuffle(lessons,rand);
  lessons.sort((a,b)=>{const la=Math.max(0,...a.teachers.map(t=>load[t]||0));const lb=Math.max(0,...b.teachers.map(t=>load[t]||0));return lb-la;});
  const unplaced=[];
  for(const lesson of lessons){
    const sg=grid[lesson.sectionId];let best=null,bs=-1e9;
    for(let d=0;d<DAYS;d++)for(let p=0;p<PERIODS;p++){
      if(sg[d][p]!==null)continue;
      let clash=false;for(const t of lesson.teachers)if(teacherBusy[d][p].has(t)){clash=true;break;}
      if(clash)continue;
      const same=dailySub[lesson.sectionId][d][lesson.subject]||0;
      let sc=-same*100 - dailyLoad[lesson.sectionId][d]*3 + rand()*0.5;
      if(sc>bs){bs=sc;best={d,p};}
    }
    if(!best){unplaced.push(lesson);continue;}
    sg[best.d][best.p]=lesson;
    for(const t of lesson.teachers)teacherBusy[best.d][best.p].add(t);
    dailySub[lesson.sectionId][best.d][lesson.subject]=(dailySub[lesson.sectionId][best.d][lesson.subject]||0)+1;
    dailyLoad[lesson.sectionId][best.d]++;
  }
  // repair pass
  if(unplaced.length){
    const still=[];
    for(const lesson of unplaced){
      const sg=grid[lesson.sectionId];let placed=false;
      for(let d=0;d<DAYS&&!placed;d++)for(let p=0;p<PERIODS&&!placed;p++){
        if(sg[d][p]!==null)continue;
        const blocker=lesson.teachers.find(t=>teacherBusy[d][p].has(t));
        if(!blocker){sg[d][p]=lesson;for(const t of lesson.teachers)teacherBusy[d][p].add(t);dailyLoad[lesson.sectionId][d]++;placed=true;break;}
        for(const sec of sections){
          if(sec.id===lesson.sectionId)continue;
          const bc=grid[sec.id][d][p];if(!bc||!bc.teachers.includes(blocker))continue;
          for(let d2=0;d2<DAYS&&!placed;d2++)for(let p2=0;p2<PERIODS&&!placed;p2++){
            if(grid[sec.id][d2][p2]!==null)continue;
            let ok=true;for(const t of bc.teachers)if(teacherBusy[d2][p2].has(t)){ok=false;break;}
            if(!ok)continue;
            grid[sec.id][d][p]=null;for(const t of bc.teachers)teacherBusy[d][p].delete(t);
            grid[sec.id][d2][p2]=bc;for(const t of bc.teachers)teacherBusy[d2][p2].add(t);
            let fit=true;for(const t of lesson.teachers)if(teacherBusy[d][p].has(t)){fit=false;break;}
            if(fit){sg[d][p]=lesson;for(const t of lesson.teachers)teacherBusy[d][p].add(t);dailyLoad[lesson.sectionId][d]++;placed=true;}
            else{grid[sec.id][d2][p2]=null;for(const t of bc.teachers)teacherBusy[d2][p2].delete(t);grid[sec.id][d][p]=bc;for(const t of bc.teachers)teacherBusy[d][p].add(t);}
          }
          if(placed)break;
        }
      }
      if(!placed)still.push(lesson);
    }
    unplaced.length=0;for(const l of still)unplaced.push(l);
  }

  // Pass 2: Fallback slotting for unplaced lessons due to teacher shortage
  // Places the class into any available period in that section with needsTeacher: true
  const impossibleSlots = [];
  let fallbackCount = 0;
  for(const lesson of unplaced){
    const sg = grid[lesson.sectionId];
    let bestSlot = null, bestScore = -1e9;
    for(let d = 0; d < DAYS; d++){
      for(let p = 0; p < PERIODS; p++){
        if(sg[d][p] !== null) continue;
        const same = dailySub[lesson.sectionId][d][lesson.subject] || 0;
        const score = -same * 50 - dailyLoad[lesson.sectionId][d] * 2 + rand() * 0.1;
        if(score > bestScore){
          bestScore = score;
          bestSlot = { d, p };
        }
      }
    }
    if(bestSlot){
      sg[bestSlot.d][bestSlot.p] = {
        sectionId: lesson.sectionId,
        subject: lesson.subject,
        teachers: [],
        religion: Boolean(lesson.religion),
        needsTeacher: true,
        intendedTeachers: lesson.teachers || []
      };
      dailySub[lesson.sectionId][bestSlot.d][lesson.subject] = (dailySub[lesson.sectionId][bestSlot.d][lesson.subject] || 0) + 1;
      dailyLoad[lesson.sectionId][bestSlot.d]++;
      fallbackCount++;
    } else {
      impossibleSlots.push(lesson);
    }
  }

  let score = -impossibleSlots.length * 2000 - fallbackCount * 30;
  for(const sec of sections)for(let d=0;d<DAYS;d++){const m=dailySub[sec.id][d];for(const k in m)if(m[k]>1)score-=(m[k]-1)*10;}
  return{grid,unplaced:impossibleSlots,rawUnplaced:unplaced.length,fallbackCount,score};
}

function generate(sections,maxAttempts){
  maxAttempts=maxAttempts||150;let best=null;
  for(let i=0;i<maxAttempts;i++){const r=attempt(sections,1+i*7919);if(!best||r.score>best.score)best=r;if(best.unplaced.length===0&&best.score===0)break;}
  return best;
}

function findConflicts(sections,grid){
  const out=[];
  for(let d=0;d<DAYS;d++)for(let p=0;p<PERIODS;p++){
    const seen={};
    for(const sec of sections){
      const c=grid[sec.id]&&grid[sec.id][d][p];if(!c)continue;
      for(const t of (c.teachers||[])){
        if(seen[t]&&seen[t]!==sec.id) out.push({teacher:t,day:d,period:p,a:seen[t],b:sec.id});
        else seen[t]=sec.id;
      }
    }
  }
  return out;
}

/* ---------- seed data ---------- */
const TEACHERS_SEED=[
 ["P","অধ্যক্ষ"],["AHT","মোঃ আসাদুজ্জামান"],["HZ","মোঃ হেলালুজ্জামান"],["GM","মোঃ গোলাম মোস্তফা"],
 ["KZ","এ এইচ এম কামরুজ্জামান"],["RKG","রতন কুমার ঘোষ"],["IH","মোঃ ইকবাল হোসেন"],["AS","মোঃ আব্দুস ছালাম"],
 ["BSU","বনশ্রী ঊর্মি"],["SJ","মোঃ সাজু মিয়া"],["ATE","আবু তালহা মোঃ এরশাদুজ্জামান"],["NI","মোঃ নজরুল ইসলাম"],
 ["MAR","মোছাঃ মাকফা আক্তার"],["ICD","ইন্দ্রজিৎ চন্দ্র দাস"],["BKD","বিদ্যুৎ কুমার দত্ত"],["SRK","স্বাতী রানী কুন্ডু"],
 ["SI","মোঃ সিরাজুল ইসলাম"],["MH","মোঃ মাহবুব হোসেন"],["HA","মোঃ হাসিম আলী"],["NY","মোছাঃ নিলুফার ইয়াসমিন"],
 ["TA1","মোছাঃ তানজিলা আক্তার"],["TMM","এটিএম মোশেঁদুল হাসান"],["SAM","মোঃ সামছুল আলম"],["YA","ইয়ামিন আখতার জাহান"],
 ["SPC","সম্পা পারভীন চিত্র"],["MSR","মোঃ সাইদুর রহমান"],["RR","রেজওয়ানা রশদী"],["SIS","মোঃ শফিকুল ইসলাম শেখ"],
 ["RB","মোঃ রিপন বাবু"],["SNU","মোঃ ছানাউল্লাহ"],["AMF","আবু ওবায়দা মোঃ ফয়সাল"],["PKD","পরিতোষ কুমার দেবনাথ"],
 ["FA","মোছাঃ ফেরদৌসী আক্তার"],["DCM","ধনপতি চন্দ্র মন্ডল"],["ANR","মোঃ আনিসুর রহমান"],["SHR","মোঃ সোহানুর রহমান"],
 ["PA","মোছাঃ পারভীন সুলতানা"],["EP","মোছাঃ ইলোরা পারভীন"],["SM","সৌমিক মাহফুজ"],["AH","মোঃ আব্দুল হান্নান"],
 ["RFA","মোঃ রফিকুল আজিজ"],["RKN","মোছাঃ রীনা খাতুন"],["JA","মোঃ জাহাঙ্গীর আলম"],["MP","মঞ্জিলা পারভীন"],
 ["UTT","উম্মে তানিয়া তোফা"],["EK","মোঃ ইমরান খান"],["RH","মোঃ রাজিউল হক"],["SZ","মোঃ শামসুজ্জামান"],
 ["SS","মোছাঃ শারমিন সুলতানা"],["GCG","গৌতম চন্দ্র গোস্বামী"],["NUR","মোঃ নুরইসলাম"],["FF","সেঁখ ফারজানা ফেরদৌসী"],
 ["MHR","মোঃ হারুনুর রশীদ"],["BS","মোঃ বিদ্যুৎ সরকার"],["OB","মোঃ ওবাইদুর রহমান"],["AHD","মোঃ আওলাদ হক দেওয়ান"],
 ["ANH","এ এম আনোয়ার হোসেন"],["RK","রায়হান কবিরাজ"],["MAH","মোঃ আদল হোসেন"],["SR","মোঃ সেলিম রেজা"],
 ["SKB","মোঃ সাকিব হোসাইন"],["PS","পলাশ সরকার"],["TI","মোঃ তরিকুল ইসলাম"],["SAH","মোঃ শাকিল আহমেদ"],
 ["SOM","(নাম যোগ করুন)"]
];

// time templates
const TEMPLATES={
  A:{ bus:{in:'সকাল ১০:৩০',out:'বিকাল ০৩:৫০'},
      periods:['১১.০০-১১.৪০','১২.০০-১২.৪০','১২.৪০-১.২০','১.৫০-২.৩০','২.৩০-৩.১০','৩.১০-৩.৫০'],
      breaksAfter:[1,3] },   // break after period index 0 and 2 (1-based 1 & 3)
  B:{ bus:{in:'সকাল ১১:২০',out:'বিকাল ০৪:৩০'},
      periods:['১২.০০-১২.৪০','১২.৪০-১.২০','১.৫০-২.৩০','২.৩০-৩.১০','৩.১০-৩.৫০','৩.৫০-৪.৩০'],
      breaksAfter:[2] }      // break after period 2
};

const DEFAULT_BUS_TIMES = {
  A: { in: 'সকাল ১০:৩০', out: 'বিকাল ০৩:৫০' },
  B: { in: 'সকাল ১১:২০', out: 'বিকাল ০৪:৩০' }
};

function normalizeBusTimes(value) {
  const source = value && typeof value === 'object' ? (value.busTimes || value) : {};
  return Object.fromEntries(['A', 'B'].map(key => {
    const item = source[key] && typeof source[key] === 'object' ? source[key] : {};
    return [key, {
      in: item.in === undefined ? DEFAULT_BUS_TIMES[key].in : String(item.in),
      out: item.out === undefined ? DEFAULT_BUS_TIMES[key].out : String(item.out)
    }];
  }));
}

function busTimesFor(templateKey) {
  const times = normalizeBusTimes(state && state.busTimes);
  return times[templateKey] || DEFAULT_BUS_TIMES.A;
}

// default subject templates (each sums to 30)
function tmplA_subjects(){return [
  {subject:'বাংলা',teachers:[''],count:5},
  {subject:'ইংরেজি',teachers:[''],count:5},
  {subject:'গণিত',teachers:[''],count:5},
  {subject:'বিজ্ঞান',teachers:[''],count:4},
  {subject:'বাংলাদেশ ও বিশ্ব পরিচয়',teachers:[''],count:3},
  {subject:'আইসিটি',teachers:[''],count:2},
  {subject:'ধর্ম',teachers:['',''],count:2,religion:true},
  {subject:'চারু ও কারুকলা',teachers:[''],count:2},
  {subject:'শারীরিক শিক্ষা',teachers:[''],count:2},
];}
function tmplB_sci(){return [
  {subject:'বাংলা',teachers:[''],count:4},
  {subject:'ইংরেজি',teachers:[''],count:5},
  {subject:'উচ্চতর গণিত',teachers:[''],count:3},
  {subject:'সাধারণ গণিত',teachers:[''],count:3},
  {subject:'পদার্থবিজ্ঞান',teachers:[''],count:3},
  {subject:'রসায়ন',teachers:[''],count:3},
  {subject:'জীববিজ্ঞান',teachers:[''],count:3},
  {subject:'আইসিটি',teachers:[''],count:3},
  {subject:'ধর্ম',teachers:['',''],count:3,religion:true},
];}
function tmplB_arts(){return [
  {subject:'বাংলা',teachers:[''],count:4},
  {subject:'ইংরেজি',teachers:[''],count:5},
  {subject:'সাধারণ গণিত',teachers:[''],count:4},
  {subject:'আইসিটি',teachers:[''],count:3},
  {subject:'ধর্ম',teachers:['',''],count:3,religion:true},
  {subject:'ভূগোল',teachers:[''],count:3},
  {subject:'ইতিহাস',teachers:[''],count:3},
  {subject:'ব্যবসায় উদ্যোগ',teachers:[''],count:3},
  {subject:'হিসাব বিজ্ঞান',teachers:[''],count:2},
];}

// 22 sections with class-teacher codes read from routine
const SECTION_SEED=[
  ['6','ক','PS','A'],['6','খ','TI','A'],['6','গ','SNU','A'],['6','ঘ','SAH','A'],
  ['7','ক','RKG','A'],['7','খ','ANR','A'],['7','গ','TA1','A'],['7','ঘ','DCM','A'],
  ['8','ক','ATE','A'],['8','খ','PKD','A'],['8','গ','SR','A'],['8','ঘ','SAM','A'],
  ['9','ক','YA','B'],['9','খ','BSU','B'],['9','গ','KZ','B'],['9','ঘ','RR','B'],['9','মানবিক ও ব্যবসায়','GM','B'],
  ['10','ক','AS','B'],['10','খ','ICD','B'],['10','গ','SJ','B'],['10','ঘ','HA','B'],['10','মানবিক ও ব্যবসায়','RB','B'],
];
const CLASS_BN={'6':'৬ষ্ঠ','7':'৭ম','8':'৮ম','9':'৯ম','10':'১০ম'};

function defaultSubjectsFor(cls,sec){
  if(cls==='6'||cls==='7'||cls==='8')return tmplA_subjects();
  if(sec.indexOf('মানবিক')>-1)return tmplB_arts();
  return tmplB_sci();
}

/* ---------- state & browser storage ---------- */
let state = null;
let authToken = localStorage.getItem('routine_auth_token') || '';
let currentUser = { role: 'teacher', username: 'teacher', name: 'শিক্ষক (Teacher)' };

// Canonical subject names (editable in-app)
const SUBJECT_SEED=[
  'বাংলা','ইংরেজি','গণিত','উচ্চতর গণিত','সাধারণ গণিত','বিজ্ঞান','পদার্থবিজ্ঞান','রসায়ন','জীববিজ্ঞান',
  'আইসিটি','বাংলাদেশ ও বিশ্ব পরিচয়','ধর্ম','চারু ও কারুকলা','শারীরিক শিক্ষা','ভূগোল','ইতিহাস',
  'ব্যবসায় উদ্যোগ','হিসাব বিজ্ঞান','কৃষিশিক্ষা','পৌরনীতি','অর্থনীতি','গার্হস্থ্য বিজ্ঞান'
];

function freshState(){
  const teachers=TEACHERS_SEED.map(([code,name])=>({code,name}));
  const sections=SECTION_SEED.map(([cls,sec,tch,tmpl])=>({
    id:cls+'-'+sec, cls, sec, teacherCode:tch, template:tmpl,
    subjects:defaultSubjectsFor(cls,sec)
  }));
  const subjects=SUBJECT_SEED.map(name=>({name,teachers:[]}));
  return {teachers,sections,subjects,grid:null,generated:false,unplaced:0,version:1,busTimes:normalizeBusTimes()};
}

function migrate(s){
  if(!s.subjects||!Array.isArray(s.subjects)){
    const map={};
    for(const sec of (s.sections||[])) for(const sub of sec.subjects){
      if(!map[sub.subject])map[sub.subject]=new Set();
      for(const t of (sub.teachers||[])) if(t)map[sub.subject].add(t);
    }
    for(const n of SUBJECT_SEED) if(!map[n])map[n]=new Set();
    s.subjects=Object.keys(map).map(name=>({name,teachers:[...map[name]]}));
  }
  return s;
}

// The browser's IndexedDB is the source of truth.
function saveLocal(){
  if (window.RoutineLocalApi && state) return window.RoutineLocalApi.saveState(state);
  return Promise.resolve();
}
function loadLocal(){ return null; }
function save(){ return saveLocal(); }

state = freshState();
window.RoutineNirmata = {
  getState: () => state,
  setState: (nextState) => { state = nextState; },
  setSaveError: (error) => setSaveStatus('error', error && error.message ? error.message : 'সংরক্ষণ ব্যর্থ')
};

/* ---------- local data adapter ---------- */
async function apiFetch(endpoint, options = {}) {
  try {
    return await window.RoutineLocalApi.request(endpoint, options);
  } catch (err) {
    if (!err.data) {
      err.data = { success: false, error: err.message || 'অনুরোধ ব্যর্থ হয়েছে' };
    }
    throw err;
  }
}

function setSaveStatus() {}

function updateUserBadge() {
  const nameEl = $('#userNameTxt');
  const roleEl = $('#userRoleTag');
  const btnEl = $('#authBtn');
  const userBadge = $('#userBadge');
  if (userBadge) userBadge.style.display = 'inline-flex';
  if (!nameEl) return;

  const isAdmin = (currentUser && currentUser.role === 'admin');

  if (isAdmin) {
    document.body.classList.add('role-admin');
    document.body.classList.remove('role-teacher');
  } else {
    document.body.classList.add('role-teacher');
    document.body.classList.remove('role-admin');
  }

  const rawName = currentUser.name || (isAdmin ? 'প্রধান প্রশাসক' : 'শিক্ষক');
  const cleanName = rawName.replace(/\s*\((?:Admin|Teacher|প্রধান প্রশাসক|শিক্ষক)\)/gi, '').trim() || (isAdmin ? 'প্রধান প্রশাসক' : 'শিক্ষক');
  nameEl.textContent = cleanName;
  roleEl.className = 'role-tag ' + (isAdmin ? 'admin' : 'teacher');
  roleEl.textContent = isAdmin ? 'Admin' : 'Teacher';

  if (isAdmin) {
    btnEl.textContent = t('logout_btn');
    btnEl.className = 'btn small danger';
    btnEl.title = 'লগআউট করে শিক্ষক মোডে যান';
    btnEl.onclick = doLogout;
  } else {
    btnEl.textContent = '👑 ' + t('login_btn');
    btnEl.className = 'btn small primary';
    btnEl.title = 'প্রশাসক মোডে বদলান';
    btnEl.onclick = openAuthModal;
  }

  // Teacher profile: can ONLY see routine!
  if (!isAdmin) {
    const routineTabBtn = $('#tabs button[data-tab="routine"]');
    if (routineTabBtn) {
      $$('#tabs button').forEach(x => x.classList.remove('active'));
      routineTabBtn.classList.add('active');
    }
    $$('.panel').forEach(p => p.classList.remove('active'));
    const routinePanel = $('#panel-routine');
    if (routinePanel) routinePanel.classList.add('active');

    const subHead = $('#routineSubHead');
    if (subHead) {
      subHead.textContent = currentLang === 'en'
        ? 'Weekly class timetable for all sections. Select your name in the teacher filter to find your classes.'
        : 'সকল শ্রেণির সাপ্তাহিক পূর্ণাঙ্গ ক্লাস রুটিন। আপনার ক্লাস দেখতে শিক্ষক ফিল্টার থেকে নাম নির্বাচন করুন।';
    }
    const headTitle = $('#routineHeadTitle');
    if (headTitle) {
      headTitle.textContent = currentLang === 'en' ? 'Class Timetable' : 'ক্লাস রুটিন';
    }
  } else {
    const subHead = $('#routineSubHead');
    if (subHead) {
      subHead.textContent = t('p3_desc');
    }
    const headTitle = $('#routineHeadTitle');
    if (headTitle) {
      headTitle.textContent = t('p3_title');
    }
  }

  // Admin-only features
  const importBtn = $('#importBtn');
  if (importBtn) importBtn.style.display = isAdmin ? 'inline-flex' : 'none';
  const exportBtn = $('#exportBtn');
  if (exportBtn) exportBtn.style.display = isAdmin ? 'inline-flex' : 'none';

  const migBanner = $('#migrationBanner');
  if (migBanner) migBanner.style.display = 'none';

  const setupNotice = $('#setupViewerNotice');
  if (setupNotice) setupNotice.style.display = 'none';
}

/* ---------- subject-pool helpers ---------- */
function getSubject(name){return state.subjects.find(s=>s.name===name);}
function getSubjectPool(name){const s=getSubject(name);return s?s.teachers.slice():[];}
function learnAssignment(name,code){
  if(!name||!code)return;
  let s=getSubject(name);
  if(!s){s={name,teachers:[]};state.subjects.push(s);}
  if(!s.teachers.includes(code))s.teachers.push(code);
}
function subjectNames(){return state.subjects.map(s=>s.name);}

/* ---------- helpers ---------- */
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
function sectionTotal(sec){return sec.subjects.reduce((a,s)=>a+(Number(s.count)||0),0);}
function sectionById(id){return state.sections.find(s=>s.id===id);}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2200);}
function bn(n){
  if (n === null || n === undefined) return '';
  if (currentLang === 'en') return String(n);
  return String(n).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[d]);
}

/* ---------- tabs ---------- */
$$('#tabs button').forEach(b=>b.addEventListener('click',()=>{
  if (currentUser.role === 'teacher' && b.dataset.tab !== 'routine') {
    return; // Teachers cannot navigate away from routine
  }
  $$('#tabs button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  $$('.panel').forEach(p=>p.classList.remove('active'));
  $('#panel-'+b.dataset.tab).classList.add('active');
  if(b.dataset.tab==='generate')renderFeas();
  if(b.dataset.tab==='routine')renderRoutine();
  if(b.dataset.tab==='dashboard')renderDashboard();
}));

/* ============================================================
   SETUP TAB
   ============================================================ */
let activeSectionId=state.sections[0].id;

function renderSecList(){
  const el=$('#secList');el.innerHTML='';
  let lastCls=null;
  for(const sec of state.sections){
    if(sec.cls!==lastCls){
      lastCls=sec.cls;
      const lab=document.createElement('div');lab.className='sec-group-label';
      const cName = currentLang === 'en' ? (CLASS_EN[sec.cls] || 'Class ' + sec.cls) : (CLASS_BN[sec.cls] + ' শ্রেণি');
      lab.textContent=cName;el.appendChild(lab);
    }
    const tot=sectionTotal(sec);
    const btn=document.createElement('button');
    btn.className='sec-item'+(sec.id===activeSectionId?' active':'');
    const cLabel = currentLang === 'en' ? (CLASS_EN[sec.cls] || 'Class ' + sec.cls) : CLASS_BN[sec.cls];
    btn.innerHTML=`<span>${cLabel}-${sec.sec}</span>
      <span class="badge ${tot===30?'ok':'bad'}">${bn(tot)}/${bn(30)}</span>`;
    btn.onclick=()=>{activeSectionId=sec.id;renderSecList();renderSecDetail();};
    el.appendChild(btn);
  }
}

function teacherOptions(selected){
  let h=`<option value="">— শিক্ষক নেই —</option>`;
  for(const t of state.teachers){
    h+=`<option value="${t.code}" ${t.code===selected?'selected':''}>${t.name} (${t.code})</option>`;
  }
  return h;
}
function teacherPickBtn(code,i,slot,disabled=false){
  const tch=state.teachers.find(x=>x.code===code);
  const tName = tch ? (currentLang === 'en' ? (TEACHERS_EN[tch.code] || tch.name) : tch.name) : '';
  const label=tch?`${escapeHtml(tName)}<span class="code">${tch.code}</span>`:t('no_teacher');
  return `<button type="button" class="teacher-pick ${tch?'':'none'}" data-i="${i}" data-slot="${slot}" ${disabled?'disabled style="cursor:default;opacity:0.85"':''}>${label}</button>`;
}
function subjectSelect(current,i,disabled=false){
  const names=subjectNames();
  const has=names.includes(current);
  let opts=names.map(n=>`<option value="${escapeHtml(n)}" ${n===current?'selected':''}>${escapeHtml(subjectName(n))}</option>`).join('');
  if(current&&!has)opts=`<option value="${escapeHtml(current)}" selected>${escapeHtml(current)}</option>`+opts;
  return `<select class="subj-select" data-i="${i}" ${disabled?'disabled style="cursor:default"':''}>${opts}${disabled?'':`<option value="__add__">➕ ${t('add_subject_btn')}…</option>`}</select>`;
}

function propagateSectionSubjectTeachersToGrid(secId, subjectName, cleanTeachers, isReligion) {
  if (!state.grid || !state.grid[secId]) return;
  for (let d = 0; d < 5; d++) {
    if (!state.grid[secId][d]) continue;
    for (let p = 0; p < 6; p++) {
      const cell = state.grid[secId][d][p];
      if (cell && cell.subject === subjectName) {
        cell.teachers = cleanTeachers.slice();
        if (isReligion !== undefined) cell.religion = Boolean(isReligion);
        if (cleanTeachers.length > 0 && cleanTeachers.some(Boolean)) {
          cell.needsTeacher = false;
        }
      }
    }
  }
}

function propagateAllSectionTeachersToGrid(sections) {
  if (!state.grid || !sections) return;
  for (const s of sections) {
    if (!state.grid[s.id]) continue;
    const subMap = {};
    for (const sub of (s.subjects || [])) {
      if (sub && sub.subject) {
        const cleanT = (sub.teachers || []).filter(Boolean);
        subMap[sub.subject] = { teachers: cleanT, religion: Boolean(sub.religion) };
      }
    }
    for (let d = 0; d < 5; d++) {
      if (!state.grid[s.id][d]) continue;
      for (let p = 0; p < 6; p++) {
        const cell = state.grid[s.id][d][p];
        if (cell && cell.subject && subMap[cell.subject]) {
          cell.teachers = subMap[cell.subject].teachers.slice();
          cell.religion = subMap[cell.subject].religion;
          if (cell.teachers.length > 0 && cell.teachers.some(Boolean)) {
            cell.needsTeacher = false;
          }
        }
      }
    }
  }
}

function renderSecDetail(){
  const sec=sectionById(activeSectionId);const el=$('#secDetail');
  if(!sec) return;
  const tot=sectionTotal(sec);const tmpl=TEMPLATES[sec.template];const busTimes=busTimesFor(sec.template);
  const isViewer = (currentUser.role !== 'admin');
  let rows='';
  sec.subjects.forEach((s,i)=>{
    const relig=!!s.religion;
    rows+=`<tr>
      <td>${subjectSelect(s.subject,i,isViewer)}</td>
      <td class="tsel">${teacherPickBtn(s.teachers[0]||'',i,0,isViewer)}
        ${relig?`<div style="margin-top:4px">${teacherPickBtn(s.teachers[1]||'',i,1,isViewer)}</div><div class="relig-note">${t('relig_parallel_note')}</div>`:''}
      </td>
      <td><input type="number" min="0" max="30" value="${s.count}" data-i="${i}" data-f="count" ${isViewer?'disabled':''}/></td>
      <td>${isViewer ? '' : `<button class="row-del" data-del="${i}" title="${t('remove')}"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg></button>`}</td>
    </tr>`;
  });
  const cTitle = currentLang === 'en' ? (CLASS_EN[sec.cls] || 'Class ' + sec.cls) : CLASS_BN[sec.cls];
  const busInfo = currentLang === 'en' ? `Schedule ${sec.template} · Bus ${escapeHtml(busTimes.in)}` : `সময়সূচি ${sec.template} · গাড়ি ${escapeHtml(busTimes.in)}`;
  el.innerHTML=`
    <div class="sec-detail-head">
      <h3>${cTitle} — ${currentLang === 'en' ? 'Section ' + (SEC_EN[sec.sec] || sec.sec) : sec.sec + ' শাখা'}</h3>
      <span class="pill tmpl">${busInfo}</span>
      <span class="tot-pill ${tot===30?'ok':'bad'}">${currentLang === 'en' ? 'Total ' + bn(tot) + '/' + bn(30) + ' ' + t('classes_cnt') : 'মোট ' + bn(tot) + '/৩০ ক্লাস'}</span>
    </div>
    <div style="font-size:12.5px;color:var(--muted);display:flex;align-items:center;gap:8px;margin-top:2px">
      <span>${t('class_teacher_lbl')}:</span>
      <button type="button" id="secClassTeacherBtn" class="teacher-pick ${sec.teacherCode?'':'none'}" ${isViewer?'disabled style="cursor:default;opacity:0.85"':''} style="padding:2px 9px;font-size:12px;border-radius:14px">
        ${teacherName(sec.teacherCode) || t('no_teacher')}
      </button>
    </div>
    <div class="subj-table-scroll"><table class="subj">
      <thead><tr>
        <th>${t('subject_lbl')}</th>
        <th>${t('teacher_lbl')}</th>
        <th>${t('weekly_cls_lbl')}</th>
        <th></th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
    ${isViewer ? '' : `<div class="add-row">
      <button class="btn small" id="addSubjBtn">${t('add_subj_action')}</button>
      <button class="btn small ghost" id="toggleReligBtn">${t('toggle_relig_action')}</button>
      <button class="btn small ghost" id="distributeSecBtn" style="color:var(--green-d); font-weight:600;" title="যোগ্য শিক্ষক থেকে শাখায় বসান">${t('distribute_sec_action')}</button>
      <button class="btn small ghost" id="copyFromBtn">${t('copy_from_action')}</button>
    </div>`}
    ${tot!==30?`<div class="banner warn" style="margin-top:14px;margin-bottom:0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg><div>${currentLang === 'en' ? 'Total ' + bn(tot) + ' classes in this section — ' + (tot < 30 ? 'less' : 'more') + ' than 30. Keep exactly 30 for a complete schedule.' : 'এই শাখায় মোট <b>' + bn(tot) + '</b>টি ক্লাস — ৩০ থেকে ' + (tot<30?'কম':'বেশি') + '। সমান পূর্ণ রুটিনের জন্য ঠিক ৩০ রাখুন।'}</div></div>`:''}
  `;

  if (isViewer) return;

  // Wire Class Teacher Picker
  const ctBtn = $('#secClassTeacherBtn');
  if(ctBtn){
    ctBtn.onclick = () => {
      openTeacherPicker(sec.teacherCode || '', async code => {
        sec.teacherCode = code;
        renderSecDetail();
        renderRoutine();
        const saved = await saveSectionImmediately(sec.id);
        if (saved) {
          const tName = teacherName(code) || (currentLang === 'en' ? 'No Teacher' : 'শিক্ষক নির্ধারিত নেই');
          toast((currentLang === 'en' ? 'Class Teacher saved: ' : 'শ্রেণিশিক্ষক সংরক্ষিত: ') + tName);
        }
      }, {});
    };
  }

  // Wire inputs (weekly count)
  $$('#secDetail input').forEach(inp=>{
    inp.addEventListener('input', e=>{
      const i=+e.target.dataset.i, f=e.target.dataset.f;
      const s=sec.subjects[i];
      if(f==='count'){
        s.count=Math.max(0,Math.min(30,+e.target.value||0));
        renderSecList();
        syncSectionDebounced(sec.id, 350);
      }
    });
    inp.addEventListener('change', async e=>{
      const i=+e.target.dataset.i, f=e.target.dataset.f;
      const s=sec.subjects[i];
      if(f==='count'){
        s.count=Math.max(0,Math.min(30,+e.target.value||0));
        renderSecDetail();
        renderSecList();
        await saveSectionImmediately(sec.id);
      }
    });
  });

  // Wire subject select dropdown
  $$('#secDetail .subj-select').forEach(sel=>sel.addEventListener('change', async e=>{
    const i=+e.target.dataset.i, s=sec.subjects[i];
    const oldSubject = s.subject;
    if(e.target.value==='__add__'){
      const name=prompt(currentLang === 'en' ? 'Enter new subject name:' : 'নতুন বিষয়ের নাম:');
      if(name && name.trim()){
        const cleanName = name.trim();
        await addSubjectToMaster(cleanName);
        s.subject=cleanName;
        if (oldSubject && oldSubject !== cleanName && state.grid && state.grid[sec.id]) {
          for(let d=0; d<5; d++){
            for(let p=0; p<6; p++){
              if(state.grid[sec.id][d] && state.grid[sec.id][d][p] && state.grid[sec.id][d][p].subject === oldSubject){
                state.grid[sec.id][d][p].subject = cleanName;
              }
            }
          }
        }
        renderSecDetail();
        renderSecList();
        renderRoutine();
        await saveSectionImmediately(sec.id);
      }
      return;
    }
    const newName = e.target.value;
    s.subject=newName;
    if (oldSubject && oldSubject !== newName && state.grid && state.grid[sec.id]) {
      for(let d=0; d<5; d++){
        for(let p=0; p<6; p++){
          if(state.grid[sec.id][d] && state.grid[sec.id][d][p] && state.grid[sec.id][d][p].subject === oldSubject){
            state.grid[sec.id][d][p].subject = newName;
          }
        }
      }
    }
    renderSecDetail();
    renderSecList();
    renderRoutine();
    await saveSectionImmediately(sec.id);
  }));

  // Wire teacher pick button
  $$('#secDetail .teacher-pick[data-slot]').forEach(btn=>btn.addEventListener('click',()=>{
    const i=+btn.dataset.i, slot=+btn.dataset.slot;
    openTeacherPicker(sec.subjects[i].teachers[slot]||'', async code=>{
      sec.subjects[i].teachers[slot]=code;
      learnAssignment(sec.subjects[i].subject,code);
      const cleanTchs = (sec.subjects[i].teachers || []).filter(Boolean);
      propagateSectionSubjectTeachersToGrid(sec.id, sec.subjects[i].subject, cleanTchs, sec.subjects[i].religion);
      renderSecDetail();
      renderSecList();
      renderRoutine();
      renderDashboard();
      await saveSectionImmediately(sec.id);
    },{subject:sec.subjects[i].subject});
  }));

  // Wire delete subject row
  $$('#secDetail [data-del]').forEach(b=>b.onclick=async ()=>{
    sec.subjects.splice(+b.dataset.del, 1);
    renderSecDetail();
    renderSecList();
    await saveSectionImmediately(sec.id);
  });

  // Wire add subject row
  $('#addSubjBtn').onclick=async ()=>{
    sec.subjects.push({subject: currentLang === 'en' ? 'New Subject' : 'নতুন বিষয়',teachers:[''],count:1});
    renderSecDetail();
    renderSecList();
    await saveSectionImmediately(sec.id);
  };

  // Wire toggle religion row
  $('#toggleReligBtn').onclick=async ()=>{
    const idx=sec.subjects.findIndex(s=>s.religion);
    if(idx>-1){
      sec.subjects[idx].religion=false;
      sec.subjects[idx].teachers=[sec.subjects[idx].teachers[0]||''];
    } else {
      sec.subjects.push({subject:'ধর্ম',teachers:['',''],count:2,religion:true});
    }
    const religSub = sec.subjects.find(s => s.religion || s.subject === 'ধর্ম');
    if (religSub) {
      propagateSectionSubjectTeachersToGrid(sec.id, religSub.subject, (religSub.teachers || []).filter(Boolean), religSub.religion);
    }
    renderSecDetail();
    renderSecList();
    renderRoutine();
    await saveSectionImmediately(sec.id);
  };

  // Wire copy from section
  const dSecBtn = $('#distributeSecBtn');
  if (dSecBtn) {
    dSecBtn.onclick = async () => {
      const changed = distributeTeachersFromPool(state.sections, state.subjects, false);
      if (changed) {
        propagateAllSectionTeachersToGrid(state.sections);
        renderSecDetail();
        renderSecList();
        renderRoutine();
        renderFeas();
        await syncSectionsBulk(state.sections);
        toast(currentLang === 'en' ? 'Eligible teachers distributed to all sections!' : 'বিষয়ভিত্তিক শিক্ষক থেকে সফলভাবে শাখায় শিক্ষক বণ্টন করা হয়েছে!');
      } else {
        toast(currentLang === 'en' ? 'All sections already have teachers assigned.' : 'সব শাখায় ইতোমধ্যে শিক্ষক নির্ধারিত আছে।');
      }
    };
  }

  $('#copyFromBtn').onclick=async ()=>{
    const opts=state.sections.filter(s=>s.id!==sec.id).map(s=>`${CLASS_BN[s.cls]}-${s.sec}`);
    const promptMsg = currentLang === 'en' ? ('Copy subjects/teachers from which section?\n\n' + opts.join(', ') + '\n\n(e.g. 6-A)') : ('কোন শাখা থেকে বিষয়/শিক্ষক কপি করবেন?\n\n' + opts.join(', ') + '\n\n(যেমন লিখুন: ৬ষ্ঠ-ক)');
    const pick = prompt(promptMsg);
    if(!pick) return;
    const src=state.sections.find(s=>`${CLASS_BN[s.cls]}-${s.sec}`===pick.trim());
    if(!src){ toast(currentLang === 'en' ? 'Section not found' : 'শাখা খুঁজে পাওয়া যায়নি'); return; }
    sec.subjects=JSON.parse(JSON.stringify(src.subjects));
    propagateAllSectionTeachersToGrid([sec]);
    renderSecDetail();
    renderSecList();
    renderRoutine();
    await saveSectionImmediately(sec.id);
    toast(currentLang === 'en' ? 'Configuration copied and saved' : 'কপি করে এই ব্রাউজারে সংরক্ষণ করা হয়েছে');
  };
}


function escapeHtml(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}

async function addSubjectToMaster(name){
  if(!name || !name.trim()) return;
  const cleanName = name.trim();
  if(getSubject(cleanName)) return;

  setSaveStatus('saving', 'নতুন বিষয় সংরক্ষণ হচ্ছে…');
  try {
    const res = await apiFetch('/api/subjects', {
      method: 'POST',
      body: JSON.stringify({ name: cleanName })
    });
    if (res && res.success) {
      state.subjects.push({ name: cleanName, teachers: [] });
      await saveLocal();
      renderSubjectsManager();
      setSaveStatus('saved', '✓ সংরক্ষিত');
    }
  } catch (err) {
    setSaveStatus('error', 'সংরক্ষণ ব্যর্থ');
    toast(err.message || 'বিষয় যোগ করতে ব্যর্থ');
  }
}

async function syncSubjectPool(subjectName, teachers) {
  setSaveStatus('saving', 'শিক্ষক পুল সংরক্ষণ হচ্ছে…');
  try {
    const res = await apiFetch('/api/subjects/' + encodeURIComponent(subjectName) + '/teachers', {
      method: 'PUT',
      body: JSON.stringify({ teachers })
    });
    if (res && res.success) {
      setSaveStatus('saved', '✓ সংরক্ষিত');
    }
  } catch (err) {
    setSaveStatus('error', 'সংরক্ষণ ব্যর্থ');
    toast(err.message || 'শিক্ষক পুল আপডেট ব্যর্থ');
  }
}

function renderSubjectsManager(){
  const el=$('#subjectsManager');
  const isViewer = (currentUser.role !== 'admin');
  const isAdmin = (currentUser.role === 'admin');

  // Compute total weekly classes per subject across all sections
  const subWeeklyLoads = {};
  for(const sec of state.sections){
    for(const sub of (sec.subjects || [])){
      subWeeklyLoads[sub.subject] = (subWeeklyLoads[sub.subject] || 0) + (Number(sub.count) || 0);
    }
  }

  el.innerHTML=state.subjects.map((s,si)=>{
    const weeklyCount = subWeeklyLoads[s.name] || 0;
    const minNeeded = weeklyCount > 0 ? Math.ceil(weeklyCount / 20) : 1;
    const currentTeachersCount = (s.teachers || []).length;
    let badgeHtml = '';
    if(weeklyCount > 0){
      if(currentTeachersCount === 0){
        badgeHtml = `<span style="font-size:11px; padding:2px 8px; border-radius:12px; background:#fee2e2; color:#b91c1c; font-weight:600;">⚠️ ${currentLang === 'en' ? 'Missing Teachers (' + bn(weeklyCount) + ' classes | min ' + bn(minNeeded) + ' needed)' : 'শিক্ষক নেই (' + bn(weeklyCount) + ' ক্লাস | নূন্যতম ' + bn(minNeeded) + ' জন প্রয়োজন)'}</span>`;
      } else if(currentTeachersCount < minNeeded){
        badgeHtml = `<span style="font-size:11px; padding:2px 8px; border-radius:12px; background:#fef3c7; color:#b45309; font-weight:600;">⚠️ ${currentLang === 'en' ? 'Teacher Shortage: ' + bn(currentTeachersCount) + ' (need ' + bn(minNeeded) + ' | ' + bn(weeklyCount) + ' classes)' : 'শিক্ষক সংকট: ' + bn(currentTeachersCount) + ' জন (প্রয়োজন ' + bn(minNeeded) + ' জন | ' + bn(weeklyCount) + ' ক্লাস)'}</span>`;
      } else {
        badgeHtml = `<span style="font-size:11px; padding:2px 8px; border-radius:12px; background:#dcfce7; color:#15803d; font-weight:600;">✓ ${currentLang === 'en' ? 'Adequate Teachers: ' + bn(currentTeachersCount) + ' (' + bn(weeklyCount) + ' classes)' : 'পর্যাপ্ত শিক্ষক: ' + bn(currentTeachersCount) + ' জন (' + bn(weeklyCount) + ' ক্লাস)'}</span>`;
      }
    }

    const chips=s.teachers.map(code=>{
      const tDisplay = teacherName(code) || code;
      return `<span class="pool-chip">${escapeHtml(tDisplay)}<span class="code mono" style="font-size:10px;opacity:.7">${code}</span>${isViewer ? '' : `<button data-si="${si}" data-code="${code}" title="${t('remove')}">✕</button>`}</span>`;
    }).join('');
    return `<div class="subjrow" style="margin-bottom:12px; padding:10px; border:1px solid var(--border); border-radius:8px;">
      <div class="subjrow-head" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <div style="display:flex; align-items:center; flex-wrap:wrap; gap:8px;">
          <input value="${escapeHtml(s.name)}" data-si="${si}" data-role="name" ${isViewer?'disabled':''} style="font-weight:600; min-width:140px;"/>${currentLang === 'en' && SUBJECTS_EN[s.name] ? `<span style="font-size:12px; color:var(--muted); font-weight:600;">(${SUBJECTS_EN[s.name]})</span>` : ''}
          ${badgeHtml}
        </div>
        ${isAdmin ? `<button class="row-del" data-delsubj="${si}" title="${t('remove')}"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg></button>` : ''}
      </div>
      <div class="subj-pool" style="margin-top:8px;">${chips}${isViewer ? '' : `<button class="pool-add" data-addpool="${si}">+ ${t('teacher_lbl')}</button>`}</div>
    </div>`;
  }).join('');

  // Rename subject
  $$('#subjectsManager input[data-role=name]').forEach(inp=>inp.addEventListener('change', async e=>{
    const si=+e.target.dataset.si, old=state.subjects[si].name, nv=e.target.value.trim();
    if(!nv || nv===old){ e.target.value=old; return; }

    setSaveStatus('saving', 'বিষয় নাম পরিবর্তন হচ্ছে…');
    try {
      const res = await apiFetch('/api/subjects/' + encodeURIComponent(old), {
        method: 'PUT',
        body: JSON.stringify({ newName: nv })
      });
      if (res && res.success) {
        state.subjects[si].name=nv;
        for(const sec of state.sections)for(const sub of sec.subjects)if(sub.subject===old)sub.subject=nv;
        if (state.grid) {
          for (const secId in state.grid) {
            if (!state.grid[secId]) continue;
            for (let d = 0; d < 5; d++) {
              if (!state.grid[secId][d]) continue;
              for (let p = 0; p < 6; p++) {
                if (state.grid[secId][d][p] && state.grid[secId][d][p].subject === old) {
                  state.grid[secId][d][p].subject = nv;
                }
              }
            }
          }
        }
        renderSubjectsManager();
        renderSecDetail();
        renderRoutine();
        setSaveStatus('saved', '✓ সংরক্ষিত');
        toast('বিষয় নাম পরিবর্তন হয়েছে: ' + nv);
      }
    } catch (err) {
      e.target.value = old;
      setSaveStatus('error', 'পুনঃনামকরণ ব্যর্থ');
      toast(err.message || 'বিষয় পরিবর্তন করতে ব্যর্থ');
    }
  }));

  // Delete subject
  $$('#subjectsManager [data-delsubj]').forEach(b=>b.onclick=async ()=>{
    const si = +b.dataset.delsubj;
    const name = state.subjects[si].name;
    if(!confirm(`"${name}" বিষয়টি তালিকা থেকে মুছবেন? (শাখায় বসানো থাকলে সেটা থেকে যাবে)`)) return;

    setSaveStatus('saving', 'বিষয় মুছে ফেলা হচ্ছে…');
    try {
      const res = await apiFetch('/api/subjects/' + encodeURIComponent(name), { method: 'DELETE' });
      if (res && res.success) {
        state.subjects.splice(si, 1);
        await saveLocal();
        renderSubjectsManager();
        renderSecDetail();
        setSaveStatus('saved', '✓ সংরক্ষিত');
        toast('বিষয় মুছে ফেলা হয়েছে: ' + name);
      }
    } catch (err) {
      setSaveStatus('error', 'মুছে ফেলা ব্যর্থ');
      toast(err.message || 'বিষয় মুছে ফেলতে ব্যর্থ');
    }
  });

  // Remove teacher from subject pool
  $$('#subjectsManager .pool-chip button').forEach(b=>b.onclick=async ()=>{
    const si=+b.dataset.si, code=b.dataset.code;
    state.subjects[si].teachers=state.subjects[si].teachers.filter(c=>c!==code);
    renderSubjectsManager();
    await syncSubjectPool(state.subjects[si].name, state.subjects[si].teachers);
  });

  // Add teacher to subject pool
  $$('#subjectsManager [data-addpool]').forEach(b=>b.onclick=()=>{
    const si=+b.dataset.addpool;
    openTeacherPicker('', async code=>{
      if(code && !state.subjects[si].teachers.includes(code)){
        state.subjects[si].teachers.push(code);
        renderSubjectsManager();
        await syncSubjectPool(state.subjects[si].name, state.subjects[si].teachers);
      }
    },{});
  });
}


async function autoBalanceTeachers(silent = false) {
  if (!silent && !confirm('আপনি কি ৬০+ শিক্ষক তালিকা থেকে সব বিষয়ের জন্য প্রয়োজনীয় শিক্ষক বণ্টন করতে চান?\n\nএটি প্রতিটি বিষয়ের ক্লাসের সংখ্যার অনুপাতে পর্যাপ্ত শিক্ষক বণ্টন করবে এবং কোনো শিক্ষকের ওপর অতিরিক্ত ক্লাসের চাপ (সপ্তাহে ২০টির বেশি) থাকবে না।')) {
    return false;
  }

  setSaveStatus('saving', currentLang === 'en' ? 'Balancing teachers...' : 'শিক্ষক সুষম বণ্টন হচ্ছে…');
  try {
    for (const [subName, tList] of Object.entries(BALANCED_SUBJECT_TEACHERS)) {
      let subj = state.subjects.find(x => x.name === subName);
      if (!subj) {
        subj = { name: subName, teachers: [] };
        state.subjects.push(subj);
      }
      subj.teachers = Array.from(new Set([...(subj.teachers || []), ...tList]));
    }

    for (const s of state.subjects) {
      if (s.name && Array.isArray(s.teachers)) {
        await syncSubjectPool(s.name, s.teachers);
      }
    }

    distributeTeachersFromPool(state.sections, state.subjects, true);
    propagateAllSectionTeachersToGrid(state.sections);
    renderRoutine();
    await syncSectionsBulk(state.sections);

    renderSubjectsManager();
    renderSecDetail();
    renderSecList();
    renderFeas();

    setSaveStatus('saved', '✓ ' + (currentLang === 'en' ? 'Teachers Balanced' : 'সুষম বণ্টন সম্পন্ন'));
    toast(currentLang === 'en' ? 'Teachers successfully balanced across all subjects!' : '✓ ৬০+ শিক্ষক সব বিষয়ে সুষমভাবে বণ্টন করা হয়েছে!');
    return true;
  } catch (err) {
    console.error('Auto balance error:', err);
    setSaveStatus('error', currentLang === 'en' ? 'Failed' : 'বণ্টন ব্যর্থ');
    toast(err.message || (currentLang === 'en' ? 'Failed to balance teachers' : 'শিক্ষক বণ্টন ব্যর্থ হয়েছে'));
    return false;
  }
}

const autoBalBtn = $('#autoBalanceTeachersBtn');
if (autoBalBtn) {
  autoBalBtn.onclick = () => autoBalanceTeachers(false);
}

$('#addSubjectBtn').onclick=async ()=>{
  const name=prompt('নতুন বিষয়ের নাম:');
  if(!name || !name.trim()) return;
  if(getSubject(name.trim())){ toast('এই বিষয় আগেই আছে'); return; }
  await addSubjectToMaster(name.trim());
};

function renderTeacherChips(){
  const el=$('#teacherChips');el.innerHTML='';
  const isViewer = (currentUser.role !== 'admin');
  state.teachers.forEach((tch,i)=>{
    const chip=document.createElement('div');
    chip.className='tch-chip';
    chip.style.cssText='display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:20px;padding:4px 6px 4px 11px;font-size:12.5px;background:var(--surface-2)';
    const isAdmin = (currentUser.role === 'admin');
    chip.innerHTML=`<span class="mono" style="font-size:10.5px;color:var(--green-d);font-weight:600">${tch.code}</span>
      <input value="${escapeHtml(tch.name)}" data-ti="${i}" ${isViewer?'disabled':''} style="border:none;background:none;font-family:var(--bn);font-size:12.5px;width:${Math.max(70,tch.name.length*8)}px;color:var(--ink)"/>
      ${isAdmin ? `<button class="chip-del" data-delcode="${tch.code}" title="${t('remove')}" style="border:none;background:none;cursor:pointer;color:var(--muted);padding:0 3px;font-size:11px">✕</button>` : ''}`;
    el.appendChild(chip);
  });

  // Wire Admin delete teacher button
  $$('#teacherChips button.chip-del').forEach(btn => btn.onclick = async () => {
    const code = btn.dataset.delcode;
    const confirmMsg = currentLang === 'en' ? ('Are you sure you want to delete teacher ' + code + '?') : ('আপনি কি শিক্ষক ' + code + '-কে মুছে ফেলতে চান?');
    if (!confirm(confirmMsg)) return;

    setSaveStatus('saving', currentLang === 'en' ? 'Deleting teacher…' : 'শিক্ষক মুছে ফেলা হচ্ছে…');
    try {
      const res = await apiFetch('/api/teachers/' + encodeURIComponent(code), { method: 'DELETE' });
      if (res && res.success) {
        setSaveStatus('saved', '✓ ' + (currentLang === 'en' ? 'Saved' : 'সংরক্ষিত'));
        toast(currentLang === 'en' ? ('Teacher ' + code + ' deleted') : ('শিক্ষক ' + code + ' মুছে ফেলা হয়েছে'));
        await loadBrowserState();
      }
    } catch (err) {
      setSaveStatus('error', err.message || (currentLang === 'en' ? 'Delete failed' : 'মুছে ফেলা ব্যর্থ'));
      toast(err.message || (currentLang === 'en' ? 'Delete failed' : 'মুছে ফেলা ব্যর্থ'));
    }
  });

  // Rename teacher
  $$('#teacherChips input').forEach(inp=>inp.addEventListener('change', async e=>{
    const ti = +e.target.dataset.ti;
    const t = state.teachers[ti];
    const newName = e.target.value.trim();
    if(!newName){ e.target.value = t.name; return; }
    t.name = newName;
    setSaveStatus('saving', 'শিক্ষকের নাম সংরক্ষণ হচ্ছে…');
    try {
      const res = await apiFetch('/api/teachers/' + encodeURIComponent(t.code), {
        method: 'PUT',
        body: JSON.stringify({ name: newName })
      });
      if (res && res.success) {
        setSaveStatus('saved', '✓ সংরক্ষিত');
        renderRoutine();
        updateTeacherFilterOptions();
        toast(`শিক্ষক ${t.code}-এর নাম আপডেট হয়েছে`);
      }
    } catch (err) {
      setSaveStatus('error', 'সংরক্ষণ ব্যর্থ');
      toast(err.message || 'শিক্ষকের নাম আপডেট ব্যর্থ');
    }
  }));
}

// Add new teacher
$('#addTeacherBtn').onclick=async ()=>{
  const code=prompt(currentLang === 'en' ? 'Teacher Short Code (e.g. XY):' : 'শিক্ষকের সংক্ষিপ্ত কোড (যেমন: XY):');
  if(!code || !code.trim()) return;
  const cleanCode = code.trim().toUpperCase();
  if(state.teachers.find(t=>t.code===cleanCode)){ toast(currentLang === 'en' ? 'This code already exists' : 'এই কোড আগেই আছে'); return; }
  const name=prompt(currentLang === 'en' ? 'Full Name:' : 'পূর্ণ নাম:')||(currentLang === 'en' ? 'New Teacher' : 'নতুন শিক্ষক');
  
  setSaveStatus('saving', currentLang === 'en' ? 'Adding teacher…' : 'শিক্ষক যোগ হচ্ছে…');
  try {
    const res = await apiFetch('/api/teachers', {
      method: 'POST',
      body: JSON.stringify({ code: cleanCode, name: name.trim() })
    });
    if (res && res.success) {
      state.teachers.push({ code: cleanCode, name: name.trim() });
      await saveLocal();
      renderTeacherChips();
      renderSecDetail();
      renderSubjectsManager();
      updateTeacherFilterOptions();
      setSaveStatus('saved', '✓ ' + (currentLang === 'en' ? 'Saved' : 'সংরক্ষিত'));
      toast(currentLang === 'en' ? `Teacher ${cleanCode} saved in this browser` : `শিক্ষক ${cleanCode} এই ব্রাউজারে সংরক্ষিত হয়েছে`);
    }
  } catch (err) {
    setSaveStatus('error', 'যোগ করতে ব্যর্থ');
    toast(err.message || 'শিক্ষক যোগ করতে ব্যর্থ');
  }
};

/* ============================================================
   GENERATE TAB
   ============================================================ */
function computeTeacherLoad(){
  const load={};
  for(const sec of state.sections)for(const s of sec.subjects)for(const t of s.teachers)if(t)load[t]=(load[t]||0)+(Number(s.count)||0);
  return load;
}
function renderFeas(){
  const el=$('#feasList');const load=computeTeacherLoad();
  const over=Object.entries(load).filter(([,n])=>n>24);
  const badTotals=state.sections.filter(s=>sectionTotal(s)!==30);
  const unassigned=state.sections.reduce((a,s)=>a+s.subjects.filter(x=>!x.teachers[0]).length,0);
  const items=[];
  items.push({ok:badTotals.length===0, txt: badTotals.length===0?t('feas_all_30'):`${bn(badTotals.length)} ${t('feas_bad_30')}`});
  items.push({ok:over.length===0, warn:over.length>0, txt: over.length===0?t('feas_no_overload'):`${bn(over.length)} ${t('feas_overload')}`});
  items.push({ok:unassigned===0, warn:unassigned>0, txt: unassigned===0?t('feas_all_assigned'):`${bn(unassigned)} ${t('feas_unassigned')}`});
  el.innerHTML=items.map(it=>{
    const cls=it.ok?'ok':(it.warn?'warn':'bad');
    const ico=it.ok?'✓':(it.warn?'!':'✕');
    return `<div class="feas-item"><span class="ico ${cls}">${ico}</span><span>${it.txt}</span></div>`;
  }).join('');
  if(over.length){
    el.innerHTML+=`<div style="margin-top:12px; padding:10px; background:#fffbeb; border:1px solid #fde68a; border-radius:8px; font-size:12.5px; color:#92400e;">
      <b>${currentLang === 'en' ? 'Severe Teacher Overload (> 24 periods)' : 'অতিরিক্ত ক্লাসের চাপ (সপ্তাহে ২৪টির বেশি)'}:</b> ${over.map(([t,n])=>`${teacherName(t)} (${bn(n)} পিরিয়ড)`).join(', ')}
      <div style="margin-top:8px;">
        <button class="btn secondary small" id="feasAutoBalBtn" type="button" style="font-size:11.5px; border-color:var(--brand); color:var(--brand); font-weight:600; cursor:pointer;">
          🪄 ৬০+ শিক্ষক দিয়ে সুষম বণ্টন করুন
        </button>
      </div>
    </div>`;
    setTimeout(()=>{
      const fBtn = $('#feasAutoBalBtn');
      if(fBtn) fBtn.onclick = () => autoBalanceTeachers(false);
    }, 0);
  }
  renderGenerateStage();
}

let isGeneratingRoutine = false;

function renderGenerateStage(){
  if (isGeneratingRoutine) return;
  const stage = $('#genStage');
  if (!stage) return;

  let filled = 0, total = 0, needsTeacherCount = 0;
  if (state.grid && state.sections) {
    for (const sec of state.sections) {
      if (!state.grid[sec.id]) continue;
      for (let d = 0; d < DAYS; d++) {
        for (let p = 0; p < PERIODS; p++) {
          total++;
          const c = state.grid[sec.id][d] && state.grid[sec.id][d][p];
          if (c) {
            filled++;
            if (c.needsTeacher || (c.teachers && c.teachers.length === 0)) needsTeacherCount++;
          }
        }
      }
    }
  }

  if ((state.generated || filled > 0) && total > 0) {
    const pct = Math.round(filled / total * 100);
    const conflicts = findConflicts(state.sections, state.grid);
    const unplacedCount = Number(state.unplaced) || (total - filled);
    const hasUnplaced = unplacedCount > 0;

    let shortageBannerHtml = '';
    if (needsTeacherCount > 0) {
      shortageBannerHtml = `
      <div class="shortage-banner">
        <div style="font-weight:700; font-size:14px; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
          <span>⚠️ ${currentLang === 'en' ? 'Teacher Shortage Detected in Some Subjects' : 'কিছু বিষয়ে শিক্ষক সংকট পরিলক্ষিত হয়েছে'}</span>
        </div>
        <div class="subtext">
          ${currentLang === 'en' 
            ? `A teacher cannot physically take more than 30 classes per week. With only 1 teacher assigned to certain subjects, <b>${bn(needsTeacherCount)} classes</b> have been placed without an assigned teacher (marked as <b>[+ Assign Teacher]</b> in the routine).` 
            : `১ জন শিক্ষকের পক্ষে সপ্তাহে সর্বোচ্চ ৩০টির বেশি ক্লাস নেওয়া শারীরিকভাবে অসম্ভব। কিছু বিষয়ে মাত্র ১ জন শিক্ষক নিযুক্ত থাকায় <b>${bn(needsTeacherCount)}টি ক্লাস</b> শিক্ষক ছাড়া রুটিনে বসানো হয়েছে (রুটিনে <b>[+ শিক্ষক যোগ করুন]</b> চিহ্নিত)।`}
        </div>
        <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
          <button class="btn primary" id="autoBalQuickFixBtn" type="button" style="font-size:12.5px; padding:7px 16px; cursor:pointer;">
            🪄 ${currentLang === 'en' ? 'Auto-Balance 60+ Teachers and Generate Complete Routine' : '৬০+ শিক্ষক দিয়ে সুষম বণ্টন করে সম্পূর্ণ রুটিন তৈরি করুন'}
          </button>
        </div>
      </div>`;
    }

    stage.innerHTML = `<div class="result-hero">
      <div class="big">${bn(pct)}%</div>
      <div class="lbl">${currentLang === 'en' ? `Placed Classes (${bn(filled)}/${bn(total)})` : `পূরণকৃত ক্লাস (${bn(filled)}/${bn(total)})`}</div>
      <div class="result-stats">
        <div class="stat"><div class="n ${conflicts.length?'bad':'good'}">${bn(conflicts.length)}</div><div class="k">${currentLang === 'en' ? 'Teacher Conflicts' : 'শিক্ষক দ্বন্দ্ব'}</div></div>
        <div class="stat"><div class="n ${needsTeacherCount?'bad':'good'}">${bn(needsTeacherCount)}</div><div class="k">${currentLang === 'en' ? 'Needs Teacher' : 'শিক্ষক প্রয়োজন'}</div></div>
        <div class="stat"><div class="n ${hasUnplaced?'bad':'good'}">${bn(unplacedCount)}</div><div class="k">${currentLang === 'en' ? 'Remaining Slots' : 'বাকি ক্লাস'}</div></div>
      </div>
    </div>
    <div style="display:flex; justify-content:center; align-items:center; gap:12px; margin-top:16px; flex-wrap:wrap;">
      <button class="btn primary" id="viewGenRoutineBtn" type="button" style="padding:10px 22px; font-size:14px; display:inline-flex; align-items:center; gap:8px; cursor:pointer;">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        <span>${currentLang === 'en' ? 'View Complete Routine →' : '📅 তৈরি করা রুটিন দেখুন →'}</span>
      </button>
      <button class="btn" id="reGenBtn" type="button" style="padding:10px 20px; font-size:14px; display:inline-flex; align-items:center; gap:8px; cursor:pointer; font-weight:600; border-color:var(--line-strong);">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
        <span>${currentLang === 'en' ? 'Regenerate Routine' : '🔄 আবার তৈরি করুন'}</span>
      </button>
    </div>
    ${shortageBannerHtml}
    <div class="feas" style="margin-top:14px;text-align:left">
      <div class="feas-item ${conflicts.length===0?'ok':'bad'}"><span class="ico ${conflicts.length===0?'ok':'bad'}">${conflicts.length===0?'✓':'✗'}</span><span>${conflicts.length===0 ? (currentLang === 'en' ? 'All teachers have conflict-free schedules' : 'কোনো শিক্ষক একই সময়ে দুটি ক্লাসে পড়েননি') : `${bn(conflicts.length)} ${currentLang === 'en' ? 'conflicts detected' : 'জন শিক্ষকের একই সময়ে একাধিক ক্লাস পড়েছে'}`}</span></div>
      <div class="feas-item ${!hasUnplaced?'ok':'bad'}"><span class="ico ${!hasUnplaced?'ok':'bad'}">${!hasUnplaced?'✓':'✗'}</span><span>${!hasUnplaced ? (currentLang === 'en' ? 'All section classes successfully placed in timetable' : 'সব শাখার সব ক্লাস রুটিনে স্থান পেয়েছে') : `${bn(unplacedCount)} ${currentLang === 'en' ? 'classes could not be placed' : 'টি ক্লাস বসানো যায়নি'}`}</span></div>
    </div>`;

    const fixBtn = $('#autoBalQuickFixBtn');
    if (fixBtn) {
      fixBtn.onclick = async () => {
        const ok = await autoBalanceTeachers(true);
        if (ok) {
          runGenerate();
        }
      };
    }

    const vBtn = $('#viewGenRoutineBtn');
    if (vBtn) {
      vBtn.onclick = () => {
        const rTab = $('#tabs button[data-tab="routine"]');
        if (rTab) rTab.click();
      };
    }

    const reBtn = $('#reGenBtn');
    if (reBtn) {
      reBtn.onclick = () => {
        const msg = currentLang === 'en'
          ? 'Are you sure you want to regenerate the entire routine? All class periods will be automatically recalculated.'
          : 'আপনি কি আবার নতুন করে সম্পূর্ণ রুটিন তৈরি করতে চান? বর্তমান রুটিন পুনরায় স্বয়ংক্রিয়ভাবে সাজানো হবে।';
        if (confirm(msg)) {
          runGenerate();
        }
      };
    }
  } else {
    stage.innerHTML = `
      <div class="gen-idle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>
        <h3>${currentLang === 'en' ? 'Ready to Generate Routine' : 'রুটিন তৈরির জন্য প্রস্তুত'}</h3>
        <p>${currentLang === 'en' ? 'Click the button below to generate a conflict-free routine in a few seconds.' : 'নিচের বোতামে চাপ দিন। কয়েক সেকেন্ডে সম্পূর্ণ রুটিন তৈরি হবে।'}</p>
        <button class="btn primary" id="genBtn" style="margin-top:18px; padding:11px 22px; font-size:15px">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          <span>${currentLang === 'en' ? 'Generate Routine' : 'রুটিন তৈরি করুন'}</span>
        </button>
      </div>`;
    const gBtn = $('#genBtn');
    if (gBtn) gBtn.onclick = runGenerate;
  }
}

if ($('#genBtn')) $('#genBtn').onclick = runGenerate;

async function runGenerate(){
  isGeneratingRoutine = true;
  // 1. Automatically distribute eligible teachers from subject pool to any section missing teachers
  const assignedAny = distributeTeachersFromPool(state.sections, state.subjects, false);
  if (assignedAny) {
    await syncSectionsBulk(state.sections);
    renderSecDetail();
    renderSecList();
    renderFeas();
  }

  const stage = $('#genStage');
  stage.innerHTML = `<div class="solver">
    <div class="solver-grid">${Array.from({length:18}).map((_,i)=>`<span style="animation-delay:${i*60}ms"></span>`).join('')}</div>
    <p>${currentLang === 'en' ? 'Generating conflict-free routine...' : 'চলছে গণনা...'}</p></div>`;

  setTimeout(async () => {
    try {
      const res = generate(state.sections, 180);
      state.grid = res.grid;
      state.generated = true;
      state.unplaced = res.unplaced.length;

      setSaveStatus('saving', currentLang === 'en' ? 'Saving routine...' : 'এই ব্রাউজারে রুটিন সংরক্ষণ হচ্ছে...');
      try {
        const srvRes = await apiFetch('/api/routine/save-generated', {
          method: 'POST',
          body: JSON.stringify({ grid: res.grid, unplaced: res.unplaced.length })
        });
        if (srvRes && srvRes.success) {
          setSaveStatus('saved', '✓ ' + (currentLang === 'en' ? 'Saved' : 'সংরক্ষিত'));
          toast(currentLang === 'en' ? 'Routine generated and saved successfully!' : 'রুটিন তৈরি ও এই ব্রাউজারে সংরক্ষিত হয়েছে');
        }
      } catch(err) {
        setSaveStatus('error', currentLang === 'en' ? 'Save Failed' : 'সংরক্ষণ ব্যর্থ');
        console.warn('Browser save note:', err);
        toast(currentLang === 'en' ? 'Browser save failed' : 'ব্রাউজারে সংরক্ষণ ব্যর্থ হয়েছে');
      }

      isGeneratingRoutine = false;
      renderGenerateStage();
      renderRoutine();
      renderDashboard();
    } catch(err) {
      isGeneratingRoutine = false;
      console.error(err);
      renderGenerateStage();
    }
  }, 40);
}

/* ============================================================
   ROUTINE TAB
   ============================================================ */
let conflictSet=new Set();
function conflictKey(secId,d,p,tch){return `${secId}|${d}|${p}|${tch}`;}

function computeConflictCells(){
  conflictSet=new Set();
  if(!state.grid)return;
  const cf=findConflicts(state.sections,state.grid);
  for(const c of cf){
    // mark both sections' cells at (day,period) that use this teacher
    for(const sid of [c.a,c.b]){
      const cell=state.grid[sid][c.day][c.period];
      if(cell&&cell.teachers.includes(c.teacher))conflictSet.add(`${sid}|${c.day}|${c.period}`);
    }
  }
}

function renderRoutine(){
  const area=$('#routineArea');
  if(!state.generated||!state.grid){
    area.innerHTML=`<div class="card card-pad empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      <p>${t('empty_routine_title')}</p>
      ${currentUser.role === 'admin' ? `<button class="btn primary admin-only" style="margin-top:8px" onclick="document.querySelector('#tabs button[data-tab=generate]').click()">${t('go_to_gen_btn')}</button>` : `<p style="color:var(--muted);font-size:13px;margin-top:8px">প্রধান প্রশাসক এখনও কোনো রুটিন প্রকাশ করেননি।</p>`}
    </div>`;return;
  }
  computeConflictCells();
  updateTeacherFilterOptions();
  const filter=$('#routineFilter').value;
  const secs=state.sections.filter(s=>filter==='all'||s.cls===filter);
  area.innerHTML=secs.map(sec=>routineCardHTML(sec)).join('');
  if (!area._delegated) {
    area._delegated = true;
    area.addEventListener('click', (e) => {
      if (currentUser.role !== 'admin') return;
      const td = e.target.closest('td.cell');
      if (td && td.dataset.sid && td.dataset.d !== undefined && td.dataset.p !== undefined) {
        openEditor(td.dataset.sid, +td.dataset.d, +td.dataset.p);
      }
    });
  }
  applyTeacherHighlight();
}

function updateTeacherFilterOptions() {
  const select = $('#teacherHighlightFilter');
  if (!select) return;
  const currentVal = select.value || 'all';
  const cacheKey = (state.teachers ? state.teachers.length : 0) + '_' + currentLang;
  if (select.dataset.cacheKey !== cacheKey) {
    select.dataset.cacheKey = cacheKey;
    let opts = `<option value="all">${t('all_teachers')}</option>`;
    if (state.teachers && state.teachers.length > 0) {
      const sorted = state.teachers.slice().sort((a,b) => {
        const na = currentLang === 'en' ? (TEACHERS_EN[a.code] || a.name || '') : (a.name || '');
        const nb = currentLang === 'en' ? (TEACHERS_EN[b.code] || b.name || '') : (b.name || '');
        return na.localeCompare(nb, currentLang === 'en' ? 'en' : 'bn');
      });
      for (const tch of sorted) {
        const tName = currentLang === 'en' ? (TEACHERS_EN[tch.code] || tch.name) : tch.name;
        opts += `<option value="${tch.code}">${escapeHtml(tName)} (${tch.code})</option>`;
      }
    }
    select.innerHTML = opts;
  }
  select.value = currentVal;
  select.onchange = applyTeacherHighlight;
}

function applyTeacherHighlight() {
  const select = $('#teacherHighlightFilter');
  const code = select ? select.value : 'all';
  $$('#routineArea td.cell').forEach(td => {
    td.classList.remove('hl-teacher', 'dim-teacher');
    if (code && code !== 'all') {
      const tchs = (td.dataset.tchs || '').split(',').filter(Boolean);
      if (tchs.includes(code)) {
        td.classList.add('hl-teacher');
      } else if (!td.classList.contains('empty')) {
        td.classList.add('dim-teacher');
      }
    }
  });
}

function routineCardHTML(sec){
  const tmpl = getTemplate(sec.template);
  const busTimes = busTimesFor(sec.template);
  const secLetter = currentLang === 'en' ? (SEC_EN[sec.sec] || sec.sec) : sec.sec;
  const cTitle = currentLang === 'en' ? (CLASS_EN[sec.cls] || 'Class ' + sec.cls) : CLASS_BN[sec.cls];

  let head = `<tr><th></th>`;
  for(let p = 0; p < PERIODS; p++){
    const pTitle = currentLang === 'en' ? `${p+1}${['st','nd','rd','th','th','th'][p]} Period` : `${bn(p+1)}ম ঘণ্টা`;
    head += `<th>${pTitle}<span class="time mono">${tmpl.periods[p]}</span></th>`;
    if(tmpl.breaksAfter.includes(p+1)) {
      head += `<th style="width:20px;padding:2px">${t('break_lbl')}</th>`;
    }
  }
  head += `</tr>`;

  let body = '';
  for(let d = 0; d < DAYS; d++){
    const dTitle = (currentLang === 'en' ? DAY_NAMES_SHORT_EN : DAY_NAMES_SHORT_BN)[d];
    body += `<tr><th>${dTitle}</th>`;
    for(let p = 0; p < PERIODS; p++){
      const cell = state.grid[sec.id][d][p];
      const conf = conflictSet.has(`${sec.id}|${d}|${p}`);
      if(!cell){
        body += `<td class="cell empty" data-sid="${sec.id}" data-d="${d}" data-p="${p}" data-tchs=""></td>`;
      } else {
        const relig = cell.religion;
        const isNeedsTch = Boolean(cell.needsTeacher || !cell.teachers || cell.teachers.length === 0 || !cell.teachers.some(Boolean));
        const subDisplayName = cellSubjectName(cell.subject);
        const tnames = (cell.teachers || []).filter(Boolean).map(t => currentLang === 'en' ? (TEACHERS_EN[t] || t) : (teacherName(t) || t)).join(' / ');
        const tchDisplay = isNeedsTch
          ? `<span class="tch warn" style="color:#d97706;font-weight:600;font-size:11px;">⚠️ ${currentLang === 'en' ? '[+ Assign Teacher]' : '[+ শিক্ষক যোগ করুন]'}</span>`
          : `<span class="tch">${escapeHtml(tnames||'—')}</span>`;
        body += `<td class="cell ${conf?'conflict':''} ${relig?'relig':''} ${isNeedsTch?'needs-teacher':''}" data-sid="${sec.id}" data-d="${d}" data-p="${p}" data-tchs="${(cell.teachers || []).filter(Boolean).join(',')}">
          <span class="subj">${escapeHtml(subDisplayName)}</span>
          ${tchDisplay}</td>`;
      }
      if(tmpl.breaksAfter.includes(p+1)) body += `<td class="brk">${t('break_lbl')}</td>`;
    }
    body += `</tr>`;
  }

  const busDisplay = currentLang === 'en' 
    ? `Bus: ${escapeHtml(busTimes.in)} → ${escapeHtml(busTimes.out)}`
    : `${t('bus_lbl')}: ${escapeHtml(busTimes.in)} → ${escapeHtml(busTimes.out)}`;

  const headerTitle = currentLang === 'en'
    ? `${cTitle} — Section ${secLetter}`
    : `${cTitle} — ${sec.sec} শাখা`;

  return `<div class="card routine-card">
    <div class="rt-title">
      <h3>${headerTitle}</h3>
      <span class="sub">${t('class_teacher_lbl')}: ${teacherName(sec.teacherCode) || '—'}</span>
      <span class="bus">${busDisplay}</span>
    </div>
    <table class="grid"><thead>${head}</thead><tbody>${body}</tbody></table>
  </div>`;
}
$('#routineFilter').addEventListener('change',renderRoutine);

/* ---------- cell editor ---------- */
let editCtx=null;
function openEditor(sid,d,p){
  if (currentUser.role !== 'admin') {
    return; // Teachers cannot edit cells
  }
  editCtx={sid,d,p};
  const sec=sectionById(sid);const cell=state.grid[sid][d][p];
  const clsName = currentLang === 'en' ? (CLASS_EN[sec.cls] || 'Class ' + sec.cls) : CLASS_BN[sec.cls];
  const dayStr = (currentLang === 'en' ? DAY_NAMES_EN : DAY_NAMES_BN)[d];
  const periodStr = currentLang === 'en' ? `${p+1}th Period` : `${bn(p+1)}ম ঘণ্টা`;
  $('#edTitle').textContent=`${clsName}-${sec.sec} · ${dayStr} · ${periodStr}`;

  const isViewer = (currentUser.role !== 'admin');

  // subject dropdown from master list (+ any current value not in list)
  const cur=cell?cell.subject:'';
  const names=subjectNames().slice();
  if(cur&&!names.includes(cur))names.unshift(cur);
  $('#edSubject').innerHTML=names.map(n=>`<option value="${escapeHtml(n)}" ${n===cur?'selected':''}>${escapeHtml(n)}</option>`).join('');
  $('#edSubject').disabled = isViewer;

  setPickBtn($('#edTeacher'),cell&&cell.teachers[0]||'');
  $('#edTeacher').disabled = isViewer;
  $('#edTeacher').style.cursor = isViewer ? 'default' : 'pointer';

  const isRelig=cell&&cell.religion;
  $('#edTeacher2Wrap').style.display=isRelig?'block':'none';
  setPickBtn($('#edTeacher2'),cell&&cell.teachers[1]||'');
  $('#edTeacher2').disabled = isViewer;
  $('#edTeacher2').style.cursor = isViewer ? 'default' : 'pointer';

  $('#edConflict').classList.remove('show');

  // Viewer mode restrictions in modal
  const vNotice = $('#edViewerNotice');
  if (vNotice) vNotice.style.display = isViewer ? 'block' : 'none';
  $('#edClear').style.display = isViewer ? 'none' : 'inline-block';
  $('#edSave').style.display = isViewer ? 'none' : 'inline-block';

  $('#editorBack').classList.add('show');
  checkEditorConflict();
}
function setPickBtn(el,code){
  const tch=state.teachers.find(x=>x.code===code);
  el.dataset.code=code||'';
  el.classList.toggle('none',!tch);
  el.innerHTML=tch?`${escapeHtml(tch.name)}<span class="code">${tch.code}</span>`:t('no_teacher');
}
function checkEditorConflict(){
  const t0=$('#edTeacher').dataset.code;const {sid,d,p}=editCtx;
  if(!t0){$('#edConflict').classList.remove('show');return;}
  // is t0 busy elsewhere at d,p?
  for(const sec of state.sections){
    if(sec.id===sid)continue;
    const c=state.grid[sec.id][d][p];
    if(c&&c.teachers.includes(t0)){
      $('#edConflict').textContent=`সতর্কতা: ${teacherName(t0)} এই সময়ে ${CLASS_BN[sec.cls]}-${sec.sec} শাখায় ${c.subject} পড়াচ্ছেন।`;
      $('#edConflict').classList.add('show');return;
    }
  }
  $('#edConflict').classList.remove('show');
}
$('#edTeacher').addEventListener('click',()=>openTeacherPicker($('#edTeacher').dataset.code,code=>{setPickBtn($('#edTeacher'),code);checkEditorConflict();},{subject:$('#edSubject').value,day:editCtx.d,period:editCtx.p,sectionId:editCtx.sid}));
$('#edTeacher2').addEventListener('click',()=>openTeacherPicker($('#edTeacher2').dataset.code,code=>setPickBtn($('#edTeacher2'),code),{subject:$('#edSubject').value,day:editCtx.d,period:editCtx.p,sectionId:editCtx.sid}));
$('#edClose').onclick=()=>$('#editorBack').classList.remove('show');
$('#editorBack').addEventListener('click',e=>{if(e.target===$('#editorBack'))$('#editorBack').classList.remove('show');});
$('#edClear').onclick = async () => {
  // Admin mode: direct allow
  const { sid, d, p } = editCtx;
  const currentCell = state.grid && state.grid[sid] ? state.grid[sid][d][p] : null;
  const clientVersion = currentCell ? currentCell.version : 0;

  try {
    setSaveStatus('saving', 'ঘর খালি করা হচ্ছে…');
    const res = await apiFetch('/api/routine/cell', {
      method: 'DELETE',
      body: JSON.stringify({ sectionId: sid, day: d, period: p, clientVersion })
    });
    state.grid[sid][d][p] = null;
    $('#editorBack').classList.remove('show');
    renderRoutine();
    setSaveStatus('saved', '✓ সংরক্ষিত');
    toast('ঘর খালি করা হয়েছে');
  } catch (err) {
    setSaveStatus('saved', '✓ সংরক্ষিত');
    if (err.status === 409) {
      toast('এই তথ্যটি ইতিমধ্যে অন্য কেউ পরিবর্তন করেছেন! রুটিন রিফ্রেশ করা হচ্ছে…');
      await loadBrowserState();
      $('#editorBack').classList.remove('show');
      renderRoutine();
    } else {
      toast(err.message || 'ঘর খালি করতে ব্যর্থ হয়েছে');
    }
  }
};

$('#edSave').onclick = async () => {
  // Admin mode: direct allow
  const { sid, d, p } = editCtx;
  const subject = $('#edSubject').value.trim();
  if (!subject) { toast('বিষয়ের নাম দিন'); return; }

  const t0 = $('#edTeacher').dataset.code;
  const isRelig = $('#edTeacher2Wrap').style.display !== 'none';
  const teachers = isRelig ? [t0, $('#edTeacher2').dataset.code] : [t0];
  const cleanTeachers = teachers.filter((x, i) => i === 0 || x);

  const currentCell = state.grid && state.grid[sid] ? state.grid[sid][d][p] : null;
  const clientVersion = currentCell ? currentCell.version : 0;

  try {
    setSaveStatus('saving', 'ঘর সংরক্ষণ হচ্ছে…');
    const res = await apiFetch('/api/routine/cell', {
      method: 'PUT',
      body: JSON.stringify({
        sectionId: sid,
        day: d,
        period: p,
        subject,
        teachers: cleanTeachers,
        religion: isRelig,
        clientVersion
      })
    });

    if (t0) learnAssignment(subject, t0);
    state.grid[sid][d][p] = res.cell;
    await saveLocal();
    $('#editorBack').classList.remove('show');
    renderRoutine();
    setSaveStatus('saved', '✓ সংরক্ষিত');
    toast('ঘর এই ব্রাউজারে সংরক্ষিত হয়েছে');
  } catch (err) {
    setSaveStatus('saved', '✓ সংরক্ষিত');
    if (err.status === 409) {
      toast('অন্য ব্যবহারকারী ইতিমধ্যে এটি পরিবর্তন করেছেন! সর্বশেষ ডেটা লোড হচ্ছে…');
      await loadBrowserState();
      $('#editorBack').classList.remove('show');
      renderRoutine();
    } else if (err.status === 422) {
      $('#edConflict').textContent = err.data.error || 'শিক্ষক দ্বন্দ্ব পাওয়া গেছে';
      $('#edConflict').classList.add('show');
    } else {
      toast(err.message || 'সংরক্ষণ ব্যর্থ হয়েছে');
    }
  }
};

/* ---------- searchable teacher picker (subject + time aware) ---------- */
let pickerCb=null, pkCurrent='', pkCtx={};
function openTeacherPicker(current,cb,ctx){
  pickerCb=cb; pkCurrent=current||''; pkCtx=ctx||{};
  $('#pkSearch').value='';
  renderPickerList('');
  $('#pickerBack').classList.add('show');
  setTimeout(()=>$('#pkSearch').focus(),60);
}
function busyAt(day,period,exceptSid){
  // map teacherCode -> "class-section" where they teach at this slot
  const map={};
  if(day==null||period==null||!state.grid)return map;
  for(const sec of state.sections){
    if(sec.id===exceptSid)continue;
    const c=state.grid[sec.id]&&state.grid[sec.id][day][period];
    if(!c)continue;
    const cLabel = currentLang === 'en' ? (CLASS_EN[sec.cls] || 'Class ' + sec.cls) : CLASS_BN[sec.cls];
    for(const t of (c.teachers||[]))if(t)map[t]=`${cLabel}-${sec.sec}`;
  }
  return map;
}
function renderPickerList(q){
  q=(q||'').trim().toLowerCase();
  const {subject,day,period,sectionId}=pkCtx;
  const pool=subject?getSubjectPool(subject):[];
  const busy=busyAt(day,period,sectionId);
  const match=t=>{
    const nameMatch = (t.name || '').toLowerCase().includes(q);
    const enName = (TEACHERS_EN[t.code] || '').toLowerCase();
    const codeMatch = (t.code || '').toLowerCase().includes(q);
    return !q || nameMatch || enName.includes(q) || codeMatch;
  };
  const suggest=[],others=[],busyList=[];
  for(const t of state.teachers){
    if(!match(t))continue;
    if(busy[t.code])busyList.push(t);
    else if(pool.includes(t.code))suggest.push(t);
    else others.push(t);
  }
  const row=(t,cls,extra='')=>{
    const tDisplayName = currentLang === 'en' ? (TEACHERS_EN[t.code] || t.name) : t.name;
    return `<button type="button" class="pk-item ${cls} ${t.code===pkCurrent?'sel':''}" data-code="${t.code}" ${cls.includes('busy')?'data-busy="1"':''}>
      <span class="pk-name">${escapeHtml(tDisplayName)}</span>${extra}<span class="pk-code">${t.code}</span></button>`;
  };
  let html='';
  if(!q)html+=`<button type="button" class="pk-item ${pkCurrent===''?'sel':''}" data-code=""><span class="pk-name">${t('no_teacher')}</span></button>`;
  if(suggest.length)html+=`<div class="pk-group">${t('pk_subj_pool')}</div>`+suggest.map(t=>row(t,'suggest')).join('');
  if(others.length)html+=`<div class="pk-group">${suggest.length?t('pk_other_teachers'):t('pk_all_teachers')}</div>`+others.map(t=>row(t,'')).join('');
  if(busyList.length)html+=`<div class="pk-group">${t('pk_busy_teachers')}</div>`+busyList.map(t=>row(t,'busy',`<span class="pk-busy">${busy[t.code]}</span>`)).join('');
  if(!suggest.length&&!others.length&&!busyList.length)html=`<div style="padding:22px;text-align:center;color:var(--muted)">${currentLang === 'en' ? 'No teachers found' : 'কেউ পাওয়া যায়নি'}</div>`;
  
  const pkListEl = $('#pkList');
  pkListEl.innerHTML=html;
  if (!pkListEl._delegated) {
    pkListEl._delegated = true;
    pkListEl.addEventListener('click', (e) => {
      const b = e.target.closest('.pk-item');
      if (!b) return;
      if (b.dataset.busy) {
        toast(currentLang === 'en' ? 'This teacher is busy in another class at this time' : 'এই শিক্ষক এই সময়ে অন্য শাখায় ব্যস্ত');
        return;
      }
      $('#pickerBack').classList.remove('show');
      if (pickerCb) pickerCb(b.dataset.code);
    });
  }
}
$('#pkSearch').addEventListener('input',e=>renderPickerList(e.target.value));
$('#pkClose').onclick=()=>$('#pickerBack').classList.remove('show');
$('#pickerBack').addEventListener('click',e=>{if(e.target===$('#pickerBack'))$('#pickerBack').classList.remove('show');});

/* ============================================================
   DASHBOARD TAB
   ============================================================ */
function renderDashboard(){
  if(!state.generated||!state.grid){
    $('#loadChart').innerHTML=`<div class="empty-state" style="padding:20px"><p>${t('empty_routine_title')}</p></div>`;
    $('#fillChart').innerHTML='';$('#conflictList').innerHTML='';return;
  }
  // teacher load from grid
  const load={};
  for(const sec of state.sections)for(let d=0;d<DAYS;d++)for(let p=0;p<PERIODS;p++){
    const c=state.grid[sec.id][d][p];if(c)for(const t of (c.teachers||[]))if(t)load[t]=(load[t]||0)+1;
  }
  const entries=Object.entries(load).sort((a,b)=>b[1]-a[1]);
  const max=Math.max(30,...entries.map(e=>e[1]));
  const avg=entries.length?entries.reduce((a,e)=>a+e[1],0)/entries.length:0;
  $('#loadChart').innerHTML=entries.map(([code,n])=>{
    const cls=n>24?'over':(n>18?'hi':'');
    return `<div class="load-row">
      <div class="load-name">${teacherName(code)} <span class="code">${code}</span></div>
      <div class="load-bar"><i class="${cls}" style="width:${n/max*100}%"></i></div>
      <div class="load-n">${bn(n)}</div></div>`;
  }).join('')+`<div style="margin-top:10px;font-size:12px;color:var(--muted)">${t('avg_load_lbl')}: <b>${bn(avg.toFixed(1))}</b> ${t('classes_per_week')} · ${t('max_possible_30')}</div>`;

  // section fill
  $('#fillChart').innerHTML=state.sections.map(sec=>{
    let filled=0;for(let d=0;d<DAYS;d++)for(let p=0;p<PERIODS;p++)if(state.grid[sec.id][d][p])filled++;
    const full=filled===30;
    const cTitle = currentLang === 'en' ? (CLASS_EN[sec.cls] || 'Class ' + sec.cls) : CLASS_BN[sec.cls];
    return `<div class="fill-chip ${full?'full':''}">
      <div class="top"><b>${cTitle}-${sec.sec}</b><span class="st mono" style="color:${full?'var(--green-d)':'var(--amber)'}">${bn(filled)}/${bn(30)}</span></div>
      <div class="mini"><i style="width:${filled/30*100}%;background:${full?'var(--green)':'var(--amber)'}"></i></div></div>`;
  }).join('');

  // conflicts
  const cf=findConflicts(state.sections,state.grid);
  if(cf.length===0){
    $('#conflictList').innerHTML=`<div class="empty-state" style="padding:16px 0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg><p style="margin:0">${t('no_conflicts_msg')}</p></div>`;
  }else{
    const seen=new Set();const uniq=[];
    for(const c of cf){const k=`${c.teacher}|${c.day}|${c.period}`;if(!seen.has(k)){seen.add(k);uniq.push(c);}}
    $('#conflictList').innerHTML=uniq.map(c=>{
      const sa=sectionById(c.a),sb=sectionById(c.b);
      const dName = (currentLang === 'en' ? DAY_NAMES_EN : DAY_NAMES_BN)[c.day];
      const pName = currentLang === 'en' ? `${c.period+1}th Period` : `${bn(c.period+1)}ম ঘণ্টা`;
      const saTitle = sa ? (currentLang === 'en' ? (CLASS_EN[sa.cls] || 'Class ' + sa.cls) : CLASS_BN[sa.cls]) : (c.a || '');
      const sbTitle = sb ? (currentLang === 'en' ? (CLASS_EN[sb.cls] || 'Class ' + sb.cls) : CLASS_BN[sb.cls]) : (c.b || '');
      const saSec = sa ? '-' + sa.sec : '';
      const sbSec = sb ? '-' + sb.sec : '';
      return `<div class="cl-item"><span class="cl-ico">⚠</span><div>
        <b>${teacherName(c.teacher)}</b> — ${dName}, ${pName}<br>
        <span style="color:var(--muted);font-size:12px">${saTitle}${saSec} & ${sbTitle}${sbSec}</span></div></div>`;
    }).join('');
  }
}

/* ============================================================
   PDF / PRINT & EXPORT MODAL
   ============================================================ */
function getSelectedPdfScope() {
  const checked = document.querySelector('input[name="pdfScope"]:checked');
  return checked ? checked.value : 'all';
}

function getSectionsForPrint(scope = 'all') {
  if (scope === 'filtered') {
    const filter = $('#routineFilter') ? $('#routineFilter').value : 'all';
    if (filter !== 'all') {
      return state.sections.filter(s => s.cls === filter);
    }
  }
  return state.sections;
}

function generatePrintCardsHTML(sections) {
  return sections.map(sec => {
    const tmpl = getTemplate(sec.template);
    const busTimes = busTimesFor(sec.template);
    const secLetter = currentLang === 'en' ? (SEC_EN[sec.sec] || sec.sec) : sec.sec;
    const cTitle = currentLang === 'en' ? (CLASS_EN[sec.cls] || 'Class ' + sec.cls) : (CLASS_BN[sec.cls] + ' শ্রেণি');
    
    let head = `<tr><th></th>`;
    for(let p = 0; p < PERIODS; p++){
      const pHeader = currentLang === 'en' ? `${p+1}${['st','nd','rd','th','th','th'][p]} Period` : `${bn(p+1)}ম`;
      head += `<th>${pHeader}<span class="time mono">${tmpl.periods[p]}</span></th>`;
      if(tmpl.breaksAfter.includes(p+1)) {
        head += `<th style="width:20px; font-size:11px;">${currentLang === 'en' ? 'Break' : 'বি'}</th>`;
      }
    }
    head += `</tr>`;

    let body = '';
    for(let d = 0; d < DAYS; d++){
      const dName = currentLang === 'en' ? DAY_NAMES_EN[d] : DAY_NAMES_BN[d];
      body += `<tr><th>${dName}</th>`;
      for(let p = 0; p < PERIODS; p++){
        const c = state.grid[sec.id][d][p];
        if(!c){
          body += `<td class="cell empty"></td>`;
        } else {
          const subDisplayName = cellSubjectName(c.subject);
          const tnamesShort = (c.teachers || []).filter(Boolean).map(t => currentLang === 'en' ? (TEACHERS_EN[t] || t) : (teacherName(t) || t)).join(' / ');
          body += `<td class="cell ${c.religion?'relig':''}">
            <span class="subj">${escapeHtml(subDisplayName)}</span>
            <span class="tch">${escapeHtml(tnamesShort || '—')}</span>
          </td>`;
        }
        if(tmpl.breaksAfter.includes(p+1)) body += `<td class="brk">${t('break_lbl')}</td>`;
      }
      body += `</tr>`;
    }

    const schoolTitle = currentLang === 'en' 
      ? 'Rural Development Academy Laboratory School and College, Bogura' 
      : 'পল্লী উন্নয়ন একাডেমী ল্যাবরেটরী স্কুল এন্ড কলেজ, বগুড়া';
    
    const subTitle = currentLang === 'en'
      ? `Secondary Section Timetable · <b>${cTitle} — Section ${secLetter}</b>`
      : `মাধ্যমিক শাখার সময়সূচী · <b>${cTitle} — ${secLetter} শাখা</b>`;

    const rightInfo = currentLang === 'en'
      ? `Bus: In ${escapeHtml(busTimes.in)} | Out ${escapeHtml(busTimes.out)}<br>Class Teacher: ${teacherName(sec.teacherCode) || '—'}`
      : `গাড়ি: আগমন ${escapeHtml(busTimes.in)} → প্রস্থান ${escapeHtml(busTimes.out)}<br>শ্রেণিশিক্ষক: ${teacherName(sec.teacherCode) || '—'}`;

    return `<div class="routine-card" style="page-break-after:always; margin-bottom:28px;">
      <div class="p-head">
        <div>
          <div class="sch">${schoolTitle}</div>
          <div class="yr">${subTitle}</div>
        </div>
        <div class="yr" style="text-align:right">${rightInfo}</div>
      </div>
      <table class="grid"><thead>${head}</thead><tbody>${body}</tbody></table>
    </div>`;
  }).join('');
}

function buildPrintArea(scope = 'all'){
  const pa = $('#printArea');
  const sections = getSectionsForPrint(scope);
  pa.innerHTML = generatePrintCardsHTML(sections);
}

function getStandalonePrintHTML(scope = 'all') {
  const sections = getSectionsForPrint(scope);
  const cardsHTML = generatePrintCardsHTML(sections);
  const schoolTitle = currentLang === 'en' 
    ? 'Rural Development Academy Laboratory School and College, Bogura' 
    : 'পল্লী উন্নয়ন একাডেমী ল্যাবরেটরী স্কুল এন্ড কলেজ, বগুড়া';
  const printBtnText = currentLang === 'en' ? '🖨️ Print / Save as PDF' : '🖨️ প্রিন্ট / Save as PDF';
  const tipText = currentLang === 'en' 
    ? 'Ready for A4 Landscape printing or Save as PDF' 
    : 'A4 Landscape প্রিন্ট বা PDF সেভ করার জন্য প্রস্তুত';

  return `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
  <meta charset="UTF-8">
  <title>${schoolTitle} - Timetable</title>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Hind Siliguri', -apple-system, sans-serif; background: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
    .print-bar { position: sticky; top: 0; z-index: 999; background: #0f172a; color: #fff; padding: 12px 20px; border-radius: 8px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
    .print-btn { background: #16a34a; color: #fff; border: none; font-weight: 700; font-size: 14px; padding: 10px 22px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: background .15s; }
    .print-btn:hover { background: #15803d; }
    .routine-card { background: #fff; border: 1px solid #cbd5e1; border-radius: 10px; padding: 20px; margin-bottom: 28px; page-break-inside: avoid; break-inside: avoid; page-break-after: always; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    .routine-card:last-child { page-break-after: auto; }
    .p-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
    .p-head .sch { font-weight: 700; font-size: 16px; color: #0f172a; }
    .p-head .yr { font-size: 12.5px; color: #475569; margin-top: 3px; }
    table.grid { width: 100%; border-collapse: collapse; font-size: 12px; }
    table.grid th, table.grid td { border: 1px solid #cbd5e1; padding: 7px 5px; text-align: center; }
    table.grid th { background: #f1f5f9; color: #334155; font-weight: 600; }
    table.grid th .time { display: block; font-size: 10px; color: #64748b; font-weight: 400; margin-top: 2px; }
    table.grid td.cell { vertical-align: middle; height: 50px; background: #fff; }
    table.grid td.cell .subj { display: block; font-weight: 600; color: #0f172a; font-size: 12.5px; }
    table.grid td.cell .tch { display: block; font-size: 10.5px; color: #64748b; margin-top: 2px; }
    table.grid td.relig { background: #fffbeb; }
    table.grid td.brk { background: #f8fafc; color: #94a3b8; font-size: 11px; width: 22px; }
    @media print {
      @page { size: A4 landscape; margin: 8mm; }
      body { background: #fff; padding: 0; }
      .print-bar { display: none !important; }
      .routine-card { border: 1px solid #000; box-shadow: none; border-radius: 0; padding: 8px; margin-bottom: 0; }
      table.grid th, table.grid td { border: 1px solid #333; }
      .p-head { border-bottom: 1px solid #000; }
    }
  </style>
</head>
<body>
  <div class="print-bar">
    <div>
      <b>${schoolTitle} — Routine</b>
      <span style="font-size:12px; color:#cbd5e1; margin-left:12px;">(${tipText})</span>
    </div>
    <button class="print-btn" onclick="window.print()">${printBtnText}</button>
  </div>
  ${cardsHTML}
</body>
</html>`;
}

function openPdfModal() {
  if(!state.generated||!state.grid){
    if (currentUser.role === 'admin') {
      toast(currentLang === 'en' ? 'Please generate routine first' : 'আগে রুটিন তৈরি করুন');
      const genTab = $('#tabs button[data-tab="generate"]');
      if (genTab) genTab.click();
    } else {
      toast(currentLang === 'en' ? 'Routine is not available to print yet.' : 'রুটিন এখনো তৈরি বা প্রকাশ করা হয়নি।');
    }
    return;
  }
  $('#pdfModal').classList.add('show');
}

function closePdfModal() {
  $('#pdfModal').classList.remove('show');
}

$('#pdfBtn').onclick = openPdfModal;
$('#pdfClose').onclick = closePdfModal;
$('#pdfModal').addEventListener('click', e => { if (e.target === $('#pdfModal')) closePdfModal(); });

$('#pdfDoPrint').onclick = () => {
  const scope = getSelectedPdfScope();
  buildPrintArea(scope);
  closePdfModal();
  toast(currentLang === 'en' 
    ? 'Print window opened. Select "Save as PDF" and choose your Downloads folder.' 
    : 'প্রিন্ট উইন্ডো খোলা হয়েছে। Destination এ "Save as PDF" নির্বাচন করে Downloads ফোল্ডারে সেভ করুন।');
  setTimeout(() => window.print(), 200);
};

$('#pdfOpenTab').onclick = () => {
  const scope = getSelectedPdfScope();
  const htmlContent = getStandalonePrintHTML(scope);
  const w = window.open('', '_blank');
  if (w) {
    w.document.open();
    w.document.write(htmlContent);
    w.document.close();
    closePdfModal();
    toast(currentLang === 'en' ? 'Opened routine in new tab' : 'নতুন ট্যাবে রুটিন প্রাকদর্শন খোলা হয়েছে');
  } else {
    toast(currentLang === 'en' ? 'Pop-up blocked. Please allow pop-ups for this site.' : 'পপ-আপ ব্লক করা আছে। ব্রাউজার সেটিংসে পপ-আপ অনুমতি দিন।');
  }
};

$('#pdfExportHtml').onclick = () => {
  const scope = getSelectedPdfScope();
  const htmlContent = getStandalonePrintHTML(scope);
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `routine-rdalsc-${scope}.html`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
  closePdfModal();
  toast(currentLang === 'en' ? 'Standalone offline routine saved to Downloads folder' : 'অফলাইন রুটিন ফাইলটি Downloads ফোল্ডারে সেভ হয়েছে');
};

/* ============================================================
   SAVE / LOAD FILE
   ============================================================ */
$('#exportBtn').onclick=()=>{
  const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download='routine-data-'+new Date().toISOString().slice(0,10)+'.json';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1500);
  toast(currentLang === 'en' ? 'Routine data file exported successfully' : 'ফাইল সফলভাবে সেভ হয়েছে');
};

function renderBusSettings() {
  const times = normalizeBusTimes(state && state.busTimes);
  for (const key of ['A', 'B']) {
    const inField = $(`#bus${key}In`);
    const outField = $(`#bus${key}Out`);
    if (inField && document.activeElement !== inField) inField.value = times[key].in;
    if (outField && document.activeElement !== outField) outField.value = times[key].out;
  }
}

function renderWelcome() {
  const stats = $('#welcomeStats');
  if (stats && state) {
    const sections = state.sections?.length || 0;
    stats.innerHTML = `<div><strong>${bn(sections)}</strong><span>টি শাখা</span></div><div><strong>${bn(DAYS)}</strong><span>কর্মদিবস</span></div><div><strong>${bn(PERIODS * DAYS)}</strong><span>ক্লাস / শাখা</span></div>`;
    stats.setAttribute('aria-label', `${sections}টি শাখা, ${DAYS} কর্মদিবস, প্রতি শাখায় ${PERIODS * DAYS}টি ক্লাস`);
    const status = $('#welcomeSaveStatus');
    if (status) status.innerHTML = `<span class="welcome-save-dot"></span>${state.generated ? 'শিক্ষার্থীদের রুটিন প্রস্তুত · চাইলে সম্পাদনা করুন' : 'শিক্ষক ও বিষয় যাচাই করে রুটিন শুরু করুন'}`;
    const loginButton = $('#welcomeLoginBtn');
    if (loginButton) loginButton.textContent = currentUser.role === 'admin' ? 'প্রশাসক প্যানেলে যান' : 'প্রশাসক মোড';
  }
}

$('#saveBusTimesBtn').addEventListener('click', async () => {
  const next = {};
  for (const key of ['A', 'B']) {
    next[key] = {
      in: $(`#bus${key}In`).value.trim() || '—',
      out: $(`#bus${key}Out`).value.trim() || '—'
    };
  }
  state.busTimes = next;
  try {
    await saveLocal();
    renderBusSettings();
    renderSecDetail();
    renderRoutine();
    const hint = $('#busSaveHint');
    hint.textContent = 'বাসের সময় সংরক্ষিত হয়েছে এবং প্রিন্টে যুক্ত হয়েছে।';
    toast('বাসের সময় সংরক্ষিত হয়েছে');
  } catch (error) {
    toast(error.message || 'বাসের সময় সংরক্ষণ করা যায়নি');
  }
});

$('#uploadBusTimesBtn').addEventListener('click', () => $('#busTimesFileInput').click());
$('#busTimesFileInput').addEventListener('change', event => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    try {
      let incoming = {};
      const text = String(reader.result || '').replace(/^\uFEFF/, '').trim();
      if (/\.csv$/i.test(file.name)) {
        const lines = text.split(/\r?\n/).filter(Boolean);
        if (lines.length < 2) throw new Error('CSV ফাইলে শিরোনামসহ অন্তত একটি সারি থাকতে হবে।');
        const parseRow = line => (line.match(/("(?:[^"]|"")*"|[^,]*)(,|$)/g) || []).map(value => value.replace(/,$/, '').trim().replace(/^"|"$/g, '').replace(/""/g, '"'));
        const headers = parseRow(lines[0]).map(value => value.toLowerCase());
        const index = (...names) => names.map(name => headers.indexOf(name)).find(i => i >= 0);
        const templateIndex = index('template', 'schedule', 'সময়সূচি', 'শিডিউল');
        const inIndex = index('in', 'departure', 'leave', 'ছাড়ে', 'যাত্রা');
        const outIndex = index('out', 'return', 'arrive', 'ফেরে', 'ফেরত');
        if ([templateIndex, inIndex, outIndex].some(i => i === undefined)) throw new Error('CSV কলাম হবে: template,in,out');
        for (const line of lines.slice(1)) {
          const row = parseRow(line);
          const key = String(row[templateIndex] || '').trim().toUpperCase();
          if (['A', 'ক', '1'].includes(key)) incoming.A = { in: row[inIndex] || '', out: row[outIndex] || '' };
          if (['B', 'খ', '2'].includes(key)) incoming.B = { in: row[inIndex] || '', out: row[outIndex] || '' };
        }
      } else {
        const parsed = JSON.parse(text);
        incoming = parsed.busTimes || parsed;
      }
      if (!incoming.A && !incoming.B) throw new Error('ফাইলে ক বা খ সময়সূচির বাসের সময় পাওয়া যায়নি।');
      const current = normalizeBusTimes(state.busTimes);
      state.busTimes = normalizeBusTimes({
        A: incoming.A ? { in: incoming.A.in ?? current.A.in, out: incoming.A.out ?? current.A.out } : current.A,
        B: incoming.B ? { in: incoming.B.in ?? current.B.in, out: incoming.B.out ?? current.B.out } : current.B
      });
      await saveLocal();
      renderBusSettings();
      renderSecDetail();
      renderRoutine();
      $('#busSaveHint').textContent = 'ফাইল থেকে বাসের সময় এনে সংরক্ষণ করা হয়েছে।';
      toast('বাসের সময় আমদানি হয়েছে');
    } catch (error) {
      toast(error.message || 'বাসের সময়ের ফাইল পড়া যায়নি');
    } finally {
      event.target.value = '';
    }
  };
  reader.readAsText(file);
});

$('#exportBusTimesBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify({ busTimes: normalizeBusTimes(state.busTimes) }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'bus-times.json';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
});

$('#welcomeLoginBtn').addEventListener('click', () => {
  if (currentUser.role === 'admin') $('#tabs button[data-tab="setup"]').click();
  else $('#authBtn').click();
});
$$('[data-go-tab]').forEach(button => button.addEventListener('click', () => {
  const tab = button.dataset.goTab;
  const target = $(`#tabs button[data-tab="${tab}"]`);
  if (target && currentUser.role === 'admin') target.click();
  else if (tab === 'routine' && target) target.click();
  else $('#authBtn').click();
}));

$('#importBtn').onclick=()=>$('#fileInput').click();
$('#fileInput').addEventListener('change', e => {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = async () => {
    try {
      const d = JSON.parse(r.result);
      if (!d.sections || !d.teachers) {
        throw new Error(currentLang === 'en' ? 'Invalid routine data format' : 'অবৈধ ডেটা ফাইল: শাখা এবং শিক্ষকের তথ্য অনুপস্থিত।');
      }
      setSaveStatus('saving', currentLang === 'en' ? 'Importing data…' : 'ডেটা ইমপোর্ট হচ্ছে…');
      const res = await apiFetch('/api/state/import', {
        method: 'POST',
        body: JSON.stringify(d)
      });
      if (res && res.success) {
        setSaveStatus('saved', '✓ ' + (currentLang === 'en' ? 'Saved' : 'সংরক্ষিত'));
        toast(currentLang === 'en' ? 'Imported into this browser successfully' : 'ফাইল থেকে এই ব্রাউজারে সফলভাবে ইমপোর্ট হয়েছে');
        await loadBrowserState();
      }
    } catch (err) {
      setSaveStatus('error', err.message || (currentLang === 'en' ? 'Import Failed' : 'ইমপোর্ট ব্যর্থ'));
      toast(err.message || (currentLang === 'en' ? 'Import failed' : 'ইমপোর্ট করতে ব্যর্থ হয়েছে'));
    }
  };
  r.readAsText(f);
  e.target.value = '';
});

let syncDebounceTimer = null;
let sectionSyncTimers = {};

async function saveSectionImmediately(sectionId) {
  const sec = sectionById(sectionId);
  if (!sec) return false;

  if (sectionSyncTimers[sectionId]) {
    clearTimeout(sectionSyncTimers[sectionId]);
    delete sectionSyncTimers[sectionId];
  }

  setSaveStatus('saving', currentLang === 'en' ? 'Saving section…' : 'শাখা সংরক্ষণ হচ্ছে…');
  try {
    const res = await apiFetch('/api/sections/' + encodeURIComponent(sectionId), {
      method: 'PUT',
      body: JSON.stringify({
        subjects: sec.subjects,
        teacherCode: sec.teacherCode || '',
        clientVersion: sec.updatedAt || undefined
      })
    });
    if (res && res.success) {
      if (res.section && res.section.updatedAt) {
        sec.updatedAt = res.section.updatedAt;
      }
      if (res.section && res.section.teacherCode !== undefined) {
        sec.teacherCode = res.section.teacherCode;
      }
      if (res.grid) {
        state.grid = res.grid;
        renderRoutine();
        renderDashboard();
      }
      setSaveStatus('saved', '✓ ' + (currentLang === 'en' ? 'Saved' : 'সংরক্ষিত'));
      return true;
    } else {
      setSaveStatus('error', currentLang === 'en' ? 'Save Failed' : 'সংরক্ষণ ব্যর্থ');
      return false;
    }
  } catch (err) {
    console.error('Section save error:', err);
    if (err.status === 409) {
      // Concurrency conflict: fetch fresh state, refresh timestamp and retry saving once
      try {
        const freshRes = await apiFetch('/api/state');
        if (freshRes && freshRes.state && freshRes.state.sections) {
          const freshSec = freshRes.state.sections.find(s => s.id === sectionId);
          if (freshSec) {
            sec.updatedAt = freshSec.updatedAt;
            const retryRes = await apiFetch('/api/sections/' + encodeURIComponent(sectionId), {
              method: 'PUT',
              body: JSON.stringify({
                subjects: sec.subjects,
                teacherCode: sec.teacherCode || '',
                clientVersion: freshSec.updatedAt
              })
            });
            if (retryRes && retryRes.success) {
              if (retryRes.section && retryRes.section.updatedAt) {
                sec.updatedAt = retryRes.section.updatedAt;
              }
              if (retryRes.grid) {
                state.grid = retryRes.grid;
                renderRoutine();
                renderDashboard();
              }
              setSaveStatus('saved', '✓ ' + (currentLang === 'en' ? 'Saved' : 'সংরক্ষিত'));
              return true;
            }
          }
        }
      } catch (retryErr) {
        console.warn('Section save retry notice:', retryErr);
      }
      setSaveStatus('error', currentLang === 'en' ? 'Conflict Detected' : 'দ্বন্দ্ব শনাক্ত');
      toast(currentLang === 'en' ? 'This section was modified by another user. Reloading fresh data…' : 'এই শাখার তথ্য অন্য একজন ইতিমধ্যে পরিবর্তন করেছেন। সর্বশেষ তথ্য পুনরায় লোড করা হচ্ছে…');
      await loadBrowserState();
      return false;
    } else if (err.status >= 400 && err.status < 500) {
      setSaveStatus('error', err.message || (currentLang === 'en' ? 'Save Failed' : 'সংরক্ষণ ব্যর্থ'));
      toast(err.message || (currentLang === 'en' ? 'Section save failed' : 'শাখা সংরক্ষণ ব্যর্থ হয়েছে'));
      return false;
    } else {
      setSaveStatus('error', currentLang === 'en' ? 'Local save unavailable' : 'ব্রাউজারে সংরক্ষণ ব্যর্থ');
      toast(currentLang === 'en' ? 'Browser storage is unavailable' : 'ব্রাউজারের সংরক্ষণ ব্যবস্থা পাওয়া যাচ্ছে না');
      return false;
    }
  }
}

function syncSectionDebounced(sectionId) {
  // Save the section in browser storage immediately
  saveSectionImmediately(sectionId);
}

function saveSection(sectionId) {
  saveSectionImmediately(sectionId);
}

/* ---------- browser state initialization ---------- */
async function loadBrowserState() {
  try {
    setSaveStatus('saving', currentLang === 'en' ? 'Loading data…' : 'ডেটা লোড হচ্ছে…');
    const res = await apiFetch('/api/state');
    if (res && res.state) {
      state = migrate(res.state);
      state.busTimes = normalizeBusTimes(state.busTimes);
      if (!state.grid) {
        state.grid = {};
        for (const s of (state.sections || [])) {
          state.grid[s.id] = Array.from({ length: 5 }, () => Array(6).fill(null));
        }
      }
      currentSaveCount = 0;
      renderAll();
      renderRoutine();
      renderDashboard();
      renderFeas();
      setSaveStatus('saved', currentLang === 'en' ? 'Saved in this browser' : 'এই ব্রাউজারে সংরক্ষিত');
      const migrationBanner = $('#migrationBanner');
      if (migrationBanner) migrationBanner.style.display = 'none';
    }
  } catch (err) {
    console.warn('Browser state load note:', err);
    currentSaveCount = 0;
    setSaveStatus('error', currentLang === 'en' ? 'Local save unavailable' : 'ব্রাউজারে সংরক্ষণ ব্যর্থ');
  }
}

async function checkAuthMe() {
  authToken = localStorage.getItem('routine_auth_token') || '';
  currentUser = { role: 'teacher', username: 'teacher', name: 'শিক্ষক (Teacher)' };

  if (authToken) {
    try {
      const res = await apiFetch('/api/auth/me');
      if (res && res.user && (res.user.role === 'admin' || res.user.role === 'teacher')) {
        currentUser = res.user;
      } else {
        authToken = '';
        localStorage.removeItem('routine_auth_token');
      }
    } catch (e) {
      authToken = '';
      localStorage.removeItem('routine_auth_token');
    }
  }
  updateUserBadge();
}

function openAuthModal() {
  $('#authError').style.display = 'none';
  $('#loginUsername').value = '';
  $('#authModal').classList.add('show');
  setTimeout(() => $('#loginUsername').focus(), 80);
}

function closeAuthModal() {
  $('#authModal').classList.remove('show');
}

async function quickLogin(role) {
  if (role === 'admin') {
    $('#loginUsername').value = 'admin';
  } else {
    $('#loginUsername').value = 'teacher';
  }
  await doLogin();
}

async function doLogin() {
  const username = $('#loginUsername').value.trim();
  const errEl = $('#authError');
  errEl.style.display = 'none';

  if (!username) {
    errEl.textContent = 'admin অথবা teacher প্রোফাইল নির্বাচন করুন';
    errEl.style.display = 'block';
    return;
  }

  try {
    const res = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username })
    });
    if (res && res.token) {
      authToken = res.token;
      localStorage.setItem('routine_auth_token', authToken);
      currentUser = res.user;
      updateUserBadge();
      renderAll();
      renderRoutine();
      if (currentUser.role === 'admin') {
        renderDashboard();
        renderFeas();
      }
      closeAuthModal();
      toast((currentLang === 'en' ? 'Welcome, ' : 'স্বাগতম, ') + (currentUser.name || currentUser.username));
    }
  } catch (err) {
    errEl.textContent = err.message || 'admin অথবা teacher প্রোফাইল বেছে নিন';
    errEl.style.display = 'block';
  }
}

function doLogout() {
  authToken = '';
  localStorage.removeItem('routine_auth_token');
  currentUser = { role: 'teacher', username: 'teacher', name: 'শিক্ষক (Teacher)' };
  updateUserBadge();
  renderAll();
  renderRoutine();
  toast(currentLang === 'en' ? 'Switched to Teacher mode (Read-only)' : 'শিক্ষক মোডে আছেন (শুধুমাত্র রুটিন দর্শন)');
}

$('#authBtn').onclick = openAuthModal;
$('#authClose').onclick = closeAuthModal;
$('#authCancel').onclick = closeAuthModal;
$('#authForm').onsubmit = (e) => { e.preventDefault(); doLogin(); };
if ($('#authSubmit')) $('#authSubmit').onclick = doLogin;
$('#authModal').addEventListener('click', e => { if (e.target === $('#authModal')) closeAuthModal(); });

const bDistBtn = $('#bulkDistributeBtn');
if (bDistBtn) {
  bDistBtn.onclick = async () => {
    const changed = distributeTeachersFromPool(state.sections, state.subjects, false);
    if (changed) {
      propagateAllSectionTeachersToGrid(state.sections);
      renderSecDetail();
      renderSecList();
      renderRoutine();
      renderFeas();
      await syncSectionsBulk(state.sections);
      toast(currentLang === 'en' ? 'Eligible teachers distributed to all sections!' : 'বিষয়ভিত্তিক যোগ্য শিক্ষক থেকে সফলভাবে শাখায় শিক্ষক বণ্টন করা হয়েছে!');
    } else {
      toast(currentLang === 'en' ? 'All sections already have teachers assigned.' : 'সব শাখায় ইতোমধ্যে শিক্ষক নির্ধারিত আছে।');
    }
  };
}

// Theme and Language toggle event handlers
const langBtn = $('#langToggleBtn');
if (langBtn) langBtn.onclick = () => setLanguage(currentLang === 'bn' ? 'en' : 'bn');

const themeBtn = $('#themeToggleBtn');
if (themeBtn) themeBtn.onclick = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark');

// Admin mode: genBtn directly triggers runGenerate
// Guard importBtn for non-Admin
const origImportClick = $('#importBtn').onclick;
$('#importBtn').onclick = () => {
  if (currentUser.role !== 'admin') {
    toast(t('toast_admin_required'));
    openAuthModal();
    return;
  }
  if (typeof origImportClick === 'function') origImportClick();
};

/* ---------- initial render & boot ---------- */

function updateRoutineFilterOptions() {
  const rf = $('#routineFilter');
  if (!rf) return;
  const curVal = rf.value || 'all';
  rf.innerHTML = `
    <option value="all">${currentLang === 'en' ? 'All Sections' : 'সব শাখা'}</option>
    <option value="6">${currentLang === 'en' ? 'Class 6' : '৬ষ্ঠ শ্রেণি'}</option>
    <option value="7">${currentLang === 'en' ? 'Class 7' : '৭ম শ্রেণি'}</option>
    <option value="8">${currentLang === 'en' ? 'Class 8' : '৮ম শ্রেণি'}</option>
    <option value="9">${currentLang === 'en' ? 'Class 9' : '৯ম শ্রেণি'}</option>
    <option value="10">${currentLang === 'en' ? 'Class 10' : '১০ম শ্রেণি'}</option>
  `;
  rf.value = curVal;
}

function renderAll(){
  updateRoutineFilterOptions();
  renderSecList();
  renderSecDetail();
  renderTeacherChips();
  renderSubjectsManager();
  renderFeas();
  renderRoutine();
  renderDashboard();
  updateUserBadge();
  renderBusSettings();
  renderWelcome();
}

window.addEventListener('routine-local-update', () => {
  state = window.RoutineNirmata.getState();
  renderAll();
});

async function bootApp() {
  const startedAt = performance.now();
  try {
    setTheme(currentTheme);
    setLanguage(currentLang);
    renderAll();
    await checkAuthMe();
    await loadBrowserState();
    const requestedTab = new URLSearchParams(window.location.search).get('tab');
    const requestedTabButton = requestedTab && $$('#tabs button').find(button => button.dataset.tab === requestedTab);
    if (requestedTabButton && currentUser.role === 'admin') requestedTabButton.click();
  } finally {
    const minimumSplash = 720;
    const remaining = Math.max(0, minimumSplash - (performance.now() - startedAt));
    if (remaining) await new Promise(resolve => setTimeout(resolve, remaining));
    const loader = $('#appLoader');
    if (loader) {
      loader.classList.add('is-hidden');
      setTimeout(() => loader.remove(), 500);
    }
  }
}

bootApp();

// Keyboard accessibility: Close open modals on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modals = ['#pickerBack', '#editorBack', '#authModal'];
    for (const selector of modals) {
      const el = $(selector);
      if (el && el.classList.contains('show')) {
        el.classList.remove('show');
        break;
      }
    }
  }
});

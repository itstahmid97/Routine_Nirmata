'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sync = () => {
      const nextDark = localStorage.getItem('routine_theme') === 'dark';
      if (nextDark) document.documentElement.setAttribute('data-theme', 'dark');
      else document.documentElement.removeAttribute('data-theme');
      setDark(nextDark);
    };
    sync();
    window.addEventListener('storage', sync);
    window.addEventListener('routine-theme-change', sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('routine-theme-change', sync);
    };
  }, []);

  function toggleTheme() {
    const next = !dark;
    if (next) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('routine_theme', next ? 'dark' : 'light');
    setDark(next);
    window.dispatchEvent(new Event('routine-theme-change'));
  }

  return (
    <button
      className="manual-theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? 'হালকা থিম চালু করুন' : 'ডার্ক থিম চালু করুন'}
      title={dark ? 'হালকা থিম' : 'ডার্ক থিম'}
    >
      <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
      <span>থিম</span>
    </button>
  );
}

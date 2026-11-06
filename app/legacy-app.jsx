'use client';

import { useEffect } from 'react';

function loadClassicScript(src, id) {
  return new Promise((resolve, reject) => {
    const existing = document.getElementById(id);
    if (existing?.dataset.loaded === 'true') {
      resolve();
      return;
    }

    const script = existing || document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = () => reject(new Error(`অ্যাপ স্ক্রিপ্ট লোড করা যায়নি: ${src}`));
    if (!existing) document.body.appendChild(script);
  });
}

export default function LegacyApp({ markup }) {
  useEffect(() => {
    loadClassicScript('/routine-store.js', 'routine-store-script')
      .then(() => loadClassicScript('/routine-app.js', 'routine-app-script'))
      .catch((error) => {
        console.error(error);
        const loader = document.getElementById('appLoader');
        if (loader) loader.remove();
        const root = document.getElementById('routine-root');
        if (root) root.insertAdjacentHTML('afterbegin', '<div class="banner warn" role="alert">অ্যাপ লোড করা যায়নি। পেজটি রিফ্রেশ করে আবার চেষ্টা করুন।</div>');
      });
  }, []);

  return <div id="routine-root" dangerouslySetInnerHTML={{ __html: markup }} />;
}

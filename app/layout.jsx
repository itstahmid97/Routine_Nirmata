import './globals.css';
import ScrollToTop from './scroll-to-top';

export const metadata = {
  title: 'রুটিন নির্মাতা — RDALSC বগুড়া',
  description: 'শিক্ষক ও প্রশাসকের জন্য শিক্ষার্থীদের সাপ্তাহিক ক্লাস রুটিন দেখা, তৈরি ও পরিচালনা করুন।',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('routine_theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');var l=localStorage.getItem('routine_lang');if(l==='en'||l==='bn')document.documentElement.setAttribute('lang',l)}catch(e){}` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}<ScrollToTop /></body>
    </html>
  );
}

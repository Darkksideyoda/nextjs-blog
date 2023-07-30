'use client';

import { redirect } from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  const bkLocaleKey = 'bk_locale';
  const defaultLocale = 'en';
  let translationLocaleStorage = localStorage.getItem(bkLocaleKey) || defaultLocale;

  if (!localStorage.getItem(bkLocaleKey)) {
    localStorage.setItem(bkLocaleKey, defaultLocale);
  }

  localStorage.setItem('bk_useSound', 'true');

  redirect(translationLocaleStorage);
}

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>hello world</h1>
//     </main>
//   );
// }

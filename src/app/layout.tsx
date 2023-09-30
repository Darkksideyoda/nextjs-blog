// import './globals.css';

// import clsx from 'clsx';
// import { NextFont } from 'next/dist/compiled/@next/font';
// import { Inter } from 'next/font/google';
// import { notFound } from 'next/navigation';
// import { createTranslator, NextIntlClientProvider } from 'next-intl';
// import { ReactNode } from 'react';

// import KrausNavbar from '../../components/ui/KrausNavbar/KrausNavbar';
// import NextThemeProvider from '../../utils/next-themes/NextThemeProvider';
// import { NextUiProvider } from '../../utils/next-ui/NextUiProvider';

// const inter: NextFont = Inter({ subsets: ['latin'] });

// type Props = {
//   children: ReactNode;
//   params: { locale: string };
// };

// async function getMessages(locale: string) {
//   try {
//     return (await import(`../../translation/${locale}.json`)).default;
//   } catch (error) {
//     notFound();
//   }
// }

// export async function generateStaticParams() {
//   return ['en', 'tr'].map((locale) => ({ locale }));
// }

// export async function generateMetadata({ params: { locale } }: Props) {
//   const messages = await getMessages(locale);

//   // You can use the core (non-React) APIs when you have to use next-intl
//   // outside of components. Potentially this will be simplified in the future
//   // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
//   const t = createTranslator({ locale, messages });

//   return {
//     title: t('LocaleLayout.title')
//   };
// }

// export default async function LocaleLayout({ children, params: { locale } }: Props) {
//   const messages = await getMessages(locale);

//   return (
//     <html className="h-full" lang={locale}>
//       <body className={clsx(inter.className, 'flex h-full flex-col')}>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <NextUiProvider>
//             <NextThemeProvider>
//               <KrausNavbar />
//               {children}
//             </NextThemeProvider>
//           </NextUiProvider>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

// import clsx from 'clsx';
// import { NextFont } from 'next/dist/compiled/@next/font';
// import { Inter } from 'next/font/google';
// import { notFound } from 'next/navigation';
// import { NextIntlClientProvider } from 'next-intl';
// import React from 'react';

// import KrausNavbar from '../../components/ui/KrausNavbar/KrausNavbar';
// import NextThemeProvider from '../../utils/Providers/next-themes/NextThemeProvider';
// import { NextUiProvider } from '../../utils/Providers/next-ui/NextUiProvider';

// const inter: NextFont = Inter({ subsets: ['latin'] });

// export function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'tr' }];
// }

// type Props = {
//   children: React.ReactNode;
//   params: { locale: string };
// };

// export default async function LocaleLayout(props: Props) {
//   const {
//     children,
//     params: { locale }
//   } = props;

//   let messages;
//   try {
//     messages = (await import(`../../translation/${locale}.json`)).default;
//   } catch (error) {
//     notFound();
//   }
//   return (
//     <html className="h-full" lang={locale}>
//       <body className={clsx(inter.className, 'flex h-full flex-col')}>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <NextUiProvider>
//             <NextThemeProvider>
//               <KrausNavbar />
//               {children}
//             </NextThemeProvider>
//           </NextUiProvider>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

import './globals.css';

import clsx from 'clsx';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import React from 'react';

import { Providers } from '../utils/Providers/Providers';

const inter: NextFont = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

export default async function LocaleLayout(props: Props) {
  const { children } = props;

  return (
    <html className="h-full" lang={'en'}>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

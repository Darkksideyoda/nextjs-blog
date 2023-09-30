// 'use client';

// import { DropdownItem } from '@nextui-org/react';
// import clsx from 'clsx';
// import { redirect, usePathname } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import { useLocale, useTranslations } from 'next-intl';
// import React, { useEffect, useMemo, useTransition } from 'react';
// import { MdTranslate } from 'react-icons/md';
// import { useLocalStorage } from 'react-use';

// import TurkeyFlagIcon from '../../../../public/Images/turkey_flag.png';
// import UsaFlagIcon from '../../../../public/Images/usa_flag.png';
// import { useLanguageStore } from '../../../store/slices/languageSlice';
// import KrausIconDropdown from '../KrausIconDropdown/KrausIconDropdown';
// import TransilationLoader from '../KrausTranslationLoader/TransilationLoader';
// import KrausLocaleDropdownMenuItem from './KrausLocaleDropdownMenuItem';

// function KrausLocaleDropdown() {
//   const t = useTranslations('navbar.settings_layout.locale_dropdown');

//   const [isPending, startTransition] = useTransition();
//   const locale = useLocale();
//   const router = useRouter();
//   const pathname = usePathname();
//   const [localTranslation, setLocalTranslation] = useLocalStorage<string>('bk_locale', 'en');
//   const { setUserLanguage } = useLanguageStore();

//   const onLanguageChange = (selectedLanguage: string) => {
//     const currentPath = pathname;
//     const newPath = currentPath.replace(/^\/\w+/, `/${selectedLanguage}`);
//     startTransition(() => {
//       router.replace(newPath);
//     });
//     setUserLanguage(selectedLanguage);
//     setLocalTranslation(selectedLanguage);
//   };

//   useEffect(() => {
//     if (localTranslation !== locale) {
//       if (locale === 'tr' || locale === 'en') {
//         setUserLanguage(locale);
//         setLocalTranslation(locale);
//       }
//       return redirect('/');
//     }
//   }, [localTranslation, locale, pathname, setLocalTranslation, setUserLanguage]);

//   const disabledKeys = useMemo(() => (locale === 'en' ? 'English Dropdown Item' : 'Turkish Dropdown Item'), [locale]);

//   return (
//     <div role="button" aria-label="Locale Dropdown" className="flex items-center justify-center text-center">
//       <KrausIconDropdown
//         name={t('tooltip')}
//         isBackDrop="blur"
//         className="font-inter font-bold"
//         disabledKeys={[disabledKeys]}
//         dropDownItems={[
//           <DropdownItem
//             className={clsx({
//               'bg-default-500/50': locale === 'en'
//             })}
//             onClick={() => onLanguageChange('en')}
//             key="English Dropdown Item"
//           >
//             <KrausLocaleDropdownMenuItem flagIcon={UsaFlagIcon} flagAltText="USA Flag" languageOption="en" />
//           </DropdownItem>,

//           <DropdownItem
//             color="secondary"
//             className={clsx(
//               {
//                 'bg-success-500/50': locale === 'tr'
//               },
//               'font-bold'
//             )}
//             onClick={() => onLanguageChange('tr')}
//             key="Turkish Dropdown Item"
//           >
//             <KrausLocaleDropdownMenuItem flagIcon={TurkeyFlagIcon} flagAltText="Turkey Flag" languageOption="tr" />
//           </DropdownItem>
//         ]}
//         iconComponent={<MdTranslate className="text-white" size={19} />}
//       />
//       {isPending && <TransilationLoader isOpen={isPending} />}
//     </div>
//   );
// }

// export default KrausLocaleDropdown;

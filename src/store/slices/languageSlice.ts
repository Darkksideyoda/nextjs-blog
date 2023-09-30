/* eslint-disable no-unused-vars */
import { create } from 'zustand';

type LanguageProps = {
  locale: string | undefined;
  setUserLanguage: (locale: string | undefined) => void;
};

export const useLanguageStore = create<LanguageProps>((set) => ({
  locale: '',

  setUserLanguage: (locale: string | undefined) => set({ locale: locale })
}));

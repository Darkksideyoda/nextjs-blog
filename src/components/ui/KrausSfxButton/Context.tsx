import { createContext } from 'react';

export type KrausSfxContextParams = {
  isSfxEnabled: string;
};

export const KrausSfxContext = createContext<KrausSfxContextParams>({
  isSfxEnabled: localStorage.getItem('bk_useSound') as string
});

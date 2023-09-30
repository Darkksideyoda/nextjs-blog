// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';

import KrausNavbar from '../../components/ui/KrausNavbar/KrausNavbar';

type Props = {
  children: React.ReactNode;
};

export function Providers(props: Props) {
  const { children } = props;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="dark">
        <KrausNavbar />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

'use client';

import { ThemeProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function NextThemeProvider(props: Props) {
  const { children } = props;
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ThemeProvider defaultTheme={'light'}>{children}</ThemeProvider>;
}

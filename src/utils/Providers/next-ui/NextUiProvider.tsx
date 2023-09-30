// app/providers.tsx
'use client';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

import { NextUIProvider } from '@nextui-org/react';

export function NextUiProvider(props: Props) {
  const { children } = props;

  return <NextUIProvider>{children}</NextUIProvider>;
}

'use client';

import { Link as NextUILink, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  href?: string;
  linkContent?: string;
  linkColorString?: string;
};

function KrausNavLink(props: Props) {
  const { href = '/', linkColorString = ' from-emerald-400 to-cyan-500 ', linkContent = 'Link' } = props;

  const pathname = usePathname();
  const isActive = pathname === `/${href}`;
  const ariaCurrent = isActive === true ? 'page' : 'false';

  return (
    <NavbarItem>
      <NextUILink
        className={`text-lg font-semibold ${
          isActive === true
            ? 'bg-gradient-to-tr bg-clip-text text-transparent' + linkColorString
            : 'text-foreground-800'
        }`}
        as={Link}
        href={`/${href}`}
        aria-current={ariaCurrent}
      >
        {linkContent}
      </NextUILink>
    </NavbarItem>
  );
}

export default KrausNavLink;

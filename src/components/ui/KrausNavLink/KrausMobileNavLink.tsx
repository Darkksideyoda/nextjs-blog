import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  href?: string;
  linkContent?: string;
  linkColorString?: string;
  iconComponent?: any;
  className?: string;
};

function KrausMobileNavLink(props: Props) {
  const { href = '/', iconComponent, linkColorString = ' from-emerald-400 to-cyan-500 ', linkContent = 'Link' } = props;
  const pathname = usePathname();
  const isActive = pathname === `/${href}`;
  const ariaCurrent = isActive === true ? 'page' : 'false';

  return (
    <Link href={`/${href}`} aria-current={ariaCurrent}>
      <section
        className={clsx('grid h-11 w-14 items-center justify-items-center rounded-xl text-[10px] font-semibold ', {
          'bg-foreground-100': isActive,
          'bg-foreground-50': !isActive
        })}
      >
        <span className="-mb-2">{iconComponent}</span>

        <span
          className={` ${
            isActive === true
              ? 'bg-gradient-to-tr bg-clip-text text-transparent' + linkColorString
              : 'text-foreground-800'
          }`}
        >
          {linkContent}
        </span>
      </section>
    </Link>
  );
}

export default KrausMobileNavLink;

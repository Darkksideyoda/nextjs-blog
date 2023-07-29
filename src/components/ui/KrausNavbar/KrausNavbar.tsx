import React, { FC } from 'react';

interface KrausNavbarProps {
  centerChildren: React.ReactNode;
  rightChildren: React.ReactNode;
}

const KrausNavbar: FC<KrausNavbarProps> = (props: KrausNavbarProps) => {
  const { centerChildren, rightChildren } = props;

  return (
    <nav className="navbar w-full bg-base-300 font-semibold">
      <div className="flex-1">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div className="mx-2 px-2">Navbar Title</div>
      </div>
      <div>
        <div className="hidden flex-1 lg:block ">
          <ul className="menu menu-horizontal">
            {React.Children.map(centerChildren, (centerChild, index: number) => (
              <li key={index}>{centerChild}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 justify-end">
        <div className="mx-2 hidden px-2 lg:block">
          <ul className="menu menu-horizontal">
            {React.Children.map(rightChildren, (rightChild, index) => (
              <li key={index}>{rightChild}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default KrausNavbar;

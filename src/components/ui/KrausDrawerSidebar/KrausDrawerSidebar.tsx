// import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

interface krausDrawerSidebarProps {}

// const krausNavbarVariants = cva('');

const KrausDrawerSidebar: FC<krausDrawerSidebarProps> = () => {
  return (
    <nav className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu h-full w-80 bg-base-200 p-4">
        {/* Sidebar content here */}
        <li>
          <a>Sidebar Item 1ere</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </nav>
  );
};

export default KrausDrawerSidebar;

import { FC } from 'react';

import KrausDrawerSidebar from '../KrausDrawerSidebar/KrausDrawerSidebar';
import KrausNavbar from '../KrausNavbar/KrausNavbar';
import KrausSettingsLayout from '../KrausSettingsLayout/KrausSettingsLayout';

interface KrausNavLayoutProps {}

const KrausNavLayout: FC<KrausNavLayoutProps> = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <KrausNavbar
          centerChildren={
            <>
              <a>Navlink</a>
            </>
          }
          rightChildren={
            <>
              <KrausSettingsLayout />
            </>
          }
        />
        {/* Page content here */}
        Content
      </div>
      <KrausDrawerSidebar />
    </div>
  );
};

export default KrausNavLayout;

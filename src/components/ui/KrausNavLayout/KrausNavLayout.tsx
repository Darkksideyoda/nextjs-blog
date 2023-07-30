import { FC } from 'react';

import KrausDrawerSidebar from '../KrausDrawerSidebar/KrausDrawerSidebar';
import KrausNavbar from '../KrausNavbar/KrausNavbar';
import KrausSettingsLayout from '../KrausSettingsLayout/KrausSettingsLayout';

interface KrausNavLayoutProps {}

const KrausNavLayout: FC<KrausNavLayoutProps> = () => {
  return (
    <div className="drawer">
      <input aria-label="Left Menu Toggle" id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <KrausNavbar
          centerChildren={[
            <li key="1">
              <a>Ana Sayfa</a>
            </li>,

            <li key="2">
              <a>Ana Sayfa</a>
            </li>
          ]}
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

'use client';

import { useTranslations } from 'next-intl';

import PageLayout from '../../../components/example/PageLayout';
import KrausDrawerSidebar from '../../../components/ui/KrausDrawerSidebar/KrausDrawerSidebar';
import KrausThemeSwitcher from '../../../components/ui/KrausThemeSwitcher/KrausThemeSwitcher';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[460px]">
        {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => <code className="font-mono text-white">{chunks}</code>
        })}
        <div className="bg-red-500">
          <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <KrausThemeSwitcher />
              {/* Page content here */}
              Content
            </div>
            <KrausDrawerSidebar />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

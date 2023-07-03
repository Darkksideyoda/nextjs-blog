import { ButtonHTMLAttributes, FC } from 'react';

interface KrausLocaleToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const KrausLocaleToggle: FC<KrausLocaleToggleProps> = () => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-800"
    >
      Button
    </button>
  );
};

export default KrausLocaleToggle;

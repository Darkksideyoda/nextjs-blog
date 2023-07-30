import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'tr'],
  defaultLocale: 'easdsad'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix } from './src/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix
});

export const config = {
  matcher: ['/', '/(ru|en)/:path*']
}; 
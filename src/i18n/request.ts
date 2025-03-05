import { getRequestConfig } from 'next-intl/server';
import { requestLocale } from './server';
import { defaultLocale } from './config';

export default getRequestConfig(async () => {
  const locale = await requestLocale();
  return {
    locale,
    defaultLocale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Asia/Dubai',
    now: new Date()
  };
}); 
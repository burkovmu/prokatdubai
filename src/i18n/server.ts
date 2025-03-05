import { headers } from 'next/headers';
import { locales, defaultLocale } from './config';

export async function requestLocale() {
  const headersList = await headers();
  const locale = headersList.get('x-next-intl-locale') || defaultLocale;
  return locale;
}

export async function getLocale() {
  return await requestLocale();
} 
import { Manrope } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import Navigation from '@/components/Navigation';
import './globals.css';

const manrope = Manrope({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope'
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const locale = params.locale;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <head>
        <title>RentDubai - Аренда премиальных автомобилей в Дубае</title>
        <meta name="description" content="Аренда премиальных и люксовых автомобилей в Дубае. Широкий выбор элитных авто для незабываемых впечатлений." />
      </head>
      <body className={`${manrope.variable} font-sans`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          <main>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    template: '%s | RentDubai',
    default: 'RentDubai - Аренда премиальных автомобилей в Дубае'
  },
  description: 'Аренда премиальных и люксовых автомобилей в Дубае. Широкий выбор элитных авто для незабываемых впечатлений.',
} 
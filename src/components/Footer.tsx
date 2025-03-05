import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations();
  
  return (
    <footer className="bg-primary-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-xl font-bold bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                Rent
              </span>
              <span className="text-xl font-light text-white">
                Dubai
              </span>
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 RentDubai. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
} 
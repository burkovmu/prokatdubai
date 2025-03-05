'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { locales } from '@/i18n/locales';
import { Link, useRouter } from '@/i18n/navigation';
import { Menu, X } from 'lucide-react';

const languageNames = {
  en: { name: 'English', flag: '🇬🇧' },
  ru: { name: 'Русский', flag: '🇷🇺' }
};

export default function Navigation() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleLanguageChange = (newLocale: typeof locales[number]) => {
    setIsMenuOpen(false);
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.replace(pathWithoutLocale, { locale: newLocale });
  };

  const links = [
    { href: '/', label: 'home' },
    { href: '/catalog', label: 'catalog' },
    { href: '/about', label: 'about' },
    { href: '/contact', label: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-950/95 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative group">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                Rent
              </span>
              <span className="text-2xl font-light text-white">
                Dubai
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-500 transition-all duration-300 group-hover:w-full" />
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <span className="text-sm uppercase tracking-wider text-primary-300 transition-colors duration-300 group-hover:text-white">
                  {t(link.label)}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Language selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 text-primary-300 hover:text-white transition-colors duration-300 px-3 py-1 rounded-md border border-primary-800/50 hover:border-accent-400/50 bg-primary-900/30"
              >
                <span className="text-sm font-medium">
                  {locale === 'ru' ? 'RU' : 'EN'}
                </span>
                <span className="text-primary-500">\</span>
                <span className="text-sm font-medium opacity-50">
                  {locale === 'ru' ? 'EN' : 'RU'}
                </span>
              </button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-32 bg-primary-900/95 backdrop-blur-lg rounded-lg overflow-hidden border border-primary-800"
                  >
                    {locales.map((l) => (
                      <button
                        key={l}
                        onClick={() => handleLanguageChange(l)}
                        className={`flex items-center justify-center w-full px-4 py-2 text-sm ${
                          l === locale
                            ? 'text-accent-400 bg-primary-800/50'
                            : 'text-primary-300 hover:text-white hover:bg-primary-800/30'
                        } transition-colors duration-300`}
                      >
                        {l === 'ru' ? 'Русский' : 'English'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-900/95 backdrop-blur-lg border-t border-primary-800"
          >
            <div className="px-4 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-primary-300 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.label)}
                </Link>
              ))}

              {/* Mobile language selector */}
              <div className="pt-4 border-t border-primary-800 flex justify-center">
                <button
                  onClick={() => handleLanguageChange(locale === 'ru' ? 'en' : 'ru')}
                  className="flex items-center space-x-2 text-primary-300 hover:text-white transition-colors duration-300 px-3 py-1 rounded-md border border-primary-800/50 hover:border-accent-400/50 bg-primary-900/30"
                >
                  <span className="text-sm font-medium">
                    {locale === 'ru' ? 'RU' : 'EN'}
                  </span>
                  <span className="text-primary-500">\</span>
                  <span className="text-sm font-medium opacity-50">
                    {locale === 'ru' ? 'EN' : 'RU'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const t = useTranslations();

  const features = [
    {
      title: t('features.items.service.title'),
      description: t('features.items.service.description')
    },
    {
      title: t('features.items.delivery.title'),
      description: t('features.items.delivery.description')
    },
    {
      title: t('features.items.booking.title'),
      description: t('features.items.booking.description')
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-950">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-car.jpg"
            alt="Luxury car"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/50 to-primary-950" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-200 mb-12 max-w-3xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/catalog"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white overflow-hidden rounded-lg transition-transform hover:scale-105"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-shine animate-shine" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-white"
          >
            <ArrowRight className="w-6 h-6 rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-primary-950">
        <div className="absolute inset-0 bg-gradient-radial from-accent-500/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              {t('features.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-primary-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="relative text-xl font-medium text-white mb-4">
                  {feature.title}
                </h3>
                <p className="relative text-primary-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 bg-primary-900">
        <div className="absolute inset-0 bg-gradient-radial from-accent-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Main Content */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                  {t('about.hero.title')}
                </h2>
                <p className="text-primary-300 leading-relaxed mb-8">
                  {t('about.hero.subtitle')}
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-primary-800/30 rounded-lg backdrop-blur-sm border border-primary-700/30">
                    <h3 className="text-xl text-accent-400 mb-3">
                      {t('about.mission.values.0')}
                    </h3>
                    <p className="text-primary-300">
                      {t('about.mission.description')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats and Additional Info */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-primary-800/30 rounded-lg backdrop-blur-sm border border-primary-700/30"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light text-accent-400">{t('about.stats.items.0.number')}</span>
                  </div>
                  <p className="mt-2 text-primary-200">{t('about.stats.items.0.label')}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-6 bg-primary-800/30 rounded-lg backdrop-blur-sm border border-primary-700/30"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light text-accent-400">{t('about.stats.items.1.number')}</span>
                  </div>
                  <p className="mt-2 text-primary-200">{t('about.stats.items.1.label')}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="p-6 bg-primary-800/30 rounded-lg backdrop-blur-sm border border-primary-700/30"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light text-accent-400">{t('about.stats.items.2.number')}</span>
                  </div>
                  <p className="mt-2 text-primary-200">{t('about.stats.items.2.label')}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 bg-primary-800/30 rounded-lg backdrop-blur-sm border border-primary-700/30"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light text-accent-400">{t('about.stats.items.3.number')}</span>
                  </div>
                  <p className="mt-2 text-primary-200">{t('about.stats.items.3.label')}</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors"
                >
                  {t('about.viewMore')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
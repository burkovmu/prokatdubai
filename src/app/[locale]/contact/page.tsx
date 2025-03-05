'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'instagram',
    icon: Instagram,
    href: 'https://instagram.com/rentdubai',
    color: 'from-pink-500 to-purple-500'
  },
  {
    name: 'telegram',
    icon: MessageCircle,
    href: 'https://t.me/rentdubai',
    color: 'from-blue-400 to-blue-500'
  },
  {
    name: 'whatsapp',
    icon: Phone,
    href: 'https://wa.me/971581234567',
    color: 'from-green-400 to-green-500'
  }
];

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    // Здесь будет логика отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormStatus('success');
  };

  return (
    <div className="relative min-h-screen bg-primary-950">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-primary-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Основная информация */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-primary-900/30 backdrop-blur-sm rounded-xl border border-primary-800/50"
              >
                <Phone className="w-8 h-8 text-accent-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">{t('phone.title')}</h3>
                <p className="text-primary-300">{t('phone.value')}</p>
                <p className="text-sm text-primary-400 mt-2">{t('phone.description')}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-primary-900/30 backdrop-blur-sm rounded-xl border border-primary-800/50"
              >
                <Mail className="w-8 h-8 text-accent-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">{t('email.title')}</h3>
                <p className="text-primary-300">{t('email.value')}</p>
                <p className="text-sm text-primary-400 mt-2">{t('email.description')}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-primary-900/30 backdrop-blur-sm rounded-xl border border-primary-800/50"
              >
                <MapPin className="w-8 h-8 text-accent-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">{t('address.title')}</h3>
                <p className="text-primary-300">{t('address.value')}</p>
                <p className="text-sm text-primary-400 mt-2">{t('address.description')}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-primary-900/30 backdrop-blur-sm rounded-xl border border-primary-800/50"
              >
                <Clock className="w-8 h-8 text-accent-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">{t('hours.title')}</h3>
                <p className="text-sm text-primary-400">{t('hours.description')}</p>
                <div className="mt-4 space-y-2">
                  {t.raw('hours.schedule').map((item: any, index: number) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-primary-300">{item.days}</span>
                      <span className="text-white">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Социальные сети */}
            <div className="p-6 bg-primary-900/30 backdrop-blur-sm rounded-xl border border-primary-800/50">
              <h3 className="text-xl font-light text-white mb-4">{t('social.title')}</h3>
              <p className="text-primary-300 mb-6">{t('social.description')}</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${social.color} text-white transform transition-transform hover:shadow-lg`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Карта */}
            <div className="p-6 bg-primary-900/30 backdrop-blur-sm rounded-xl border border-primary-800/50">
              <h3 className="text-xl font-light text-white mb-4">{t('map.title')}</h3>
              <p className="text-primary-300 mb-6">{t('map.description')}</p>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8894152563135!2d55.1336685!3d25.0875752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sDubai%20Marina%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1709667547932!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-24">
              <div className="p-8 bg-primary-900/30 backdrop-blur-sm rounded-xl border border-primary-800/50">
                <h3 className="text-2xl font-light text-white mb-2">{t('form.title')}</h3>
                <p className="text-primary-300 mb-8">{t('form.description')}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-300 mb-2">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-primary-900/50 border border-primary-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400 text-white placeholder-primary-400"
                      placeholder={t('form.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-300 mb-2">
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-primary-900/50 border border-primary-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400 text-white placeholder-primary-400"
                      placeholder={t('form.emailPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-300 mb-2">
                      {t('form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-primary-900/50 border border-primary-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400 text-white placeholder-primary-400 resize-none"
                      placeholder={t('form.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="group relative w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-500 text-white overflow-hidden rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center">
                      {formStatus === 'sending' ? (
                        t('form.sending')
                      ) : (
                        <>
                          {t('form.submit')}
                          <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-shine animate-shine" />
                  </button>

                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                    >
                      <p className="text-green-400 text-center">
                        {t('form.success')}
                      </p>
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                    >
                      <p className="text-red-400 text-center">
                        {t('form.error')}
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
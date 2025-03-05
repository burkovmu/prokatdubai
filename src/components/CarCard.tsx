'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Car } from '@/types/car';
import { motion } from 'framer-motion';
import { Calendar, GaugeCircle, Zap, ChevronDown, CheckCircle2, Clock, Shield, CreditCard, Users, Fuel, Cog } from 'lucide-react';

interface CarCardProps {
  car: Car;
  locale: string;
}

export default function CarCard({ car, locale }: CarCardProps) {
  const t = useTranslations();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [showHowToBook, setShowHowToBook] = useState(false);

  const handleBooking = () => {
    if (!startDate || !endDate) return;
    // Здесь будет логика бронирования
    console.log('Booking:', { car, startDate, endDate });
  };

  const benefits = [
    {
      icon: <Shield className="w-5 h-5 text-accent-400" />,
      title: t('car.benefits.insurance.title'),
      description: t('car.benefits.insurance.description')
    },
    {
      icon: <Clock className="w-5 h-5 text-accent-400" />,
      title: t('car.benefits.delivery.title'),
      description: t('car.benefits.delivery.description')
    },
    {
      icon: <CreditCard className="w-5 h-5 text-accent-400" />,
      title: t('car.benefits.payment.title'),
      description: t('car.benefits.payment.description')
    }
  ];

  const bookingSteps = [
    t('car.howToBook.steps.dates'),
    t('car.howToBook.steps.contact'),
    t('car.howToBook.steps.payment'),
    t('car.howToBook.steps.confirmation')
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-800/50 hover:border-accent-500/50 transition-all duration-300 shadow-xl hover:shadow-accent-500/10"
    >
      <div className="relative h-72 w-full group overflow-hidden">
        <Image
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-3xl font-light mb-1">
            {car.brand} <span className="font-medium">{car.model}</span>
          </h3>
          <div className="flex items-center gap-4 text-primary-200">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {car.specifications.seats} мест
            </span>
            <span className="flex items-center gap-1">
              <Fuel className="w-4 h-4" />
              {car.specifications.engine}
            </span>
            <span className="flex items-center gap-1">
              <Cog className="w-4 h-4" />
              {car.specifications.transmission}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <p className="text-primary-200 leading-relaxed">{car.description[locale as 'en' | 'ru']}</p>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-4xl font-light text-white">
                ${car.price}
                <span className="text-sm font-normal text-primary-400 ml-1">
                  {t('catalog.price.perDay')}
                </span>
              </p>
              {car.oldPrice && (
                <p className="text-sm text-primary-400 line-through">
                  ${car.oldPrice} {t('catalog.price.perDay')}
                </p>
              )}
            </div>
            <button
              onClick={() => setIsSpecsOpen(!isSpecsOpen)}
              className="flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
            >
              {t('car.specifications')}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isSpecsOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>

        {isSpecsOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="grid grid-cols-2 gap-4 py-4 border-t border-primary-800/50"
          >
            <div className="flex items-center gap-3 text-primary-200">
              <Zap className="w-5 h-5 text-accent-400" />
              <div>
                <p className="text-xs text-primary-400">{t('car.specs.power')}</p>
                <p>{car.specifications.power} л.с.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-200">
              <GaugeCircle className="w-5 h-5 text-accent-400" />
              <div>
                <p className="text-xs text-primary-400">{t('car.specs.acceleration')}</p>
                <p>{car.specifications.acceleration} сек</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-200">
              <Fuel className="w-5 h-5 text-accent-400" />
              <div>
                <p className="text-xs text-primary-400">{t('car.specs.engine')}</p>
                <p>{car.specifications.engine}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-200">
              <Cog className="w-5 h-5 text-accent-400" />
              <div>
                <p className="text-xs text-primary-400">{t('car.specs.transmission')}</p>
                <p>{car.specifications.transmission}</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-3 gap-4 py-4 border-t border-primary-800/50">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-3 rounded-lg bg-primary-800/30 hover:bg-primary-800/50 transition-colors">
              <div className="flex justify-center mb-2">{benefit.icon}</div>
              <h4 className="text-sm font-medium text-white mb-1">{benefit.title}</h4>
              <p className="text-xs text-primary-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {isBookingOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 pt-4 border-t border-primary-800/50"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-2">
                  {t('car.booking.startDate')}
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date | null) => setStartDate(date)}
                  selectsStart
                  startDate={startDate || undefined}
                  endDate={endDate || undefined}
                  minDate={new Date()}
                  className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholderText={t('car.booking.selectDates')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-200 mb-2">
                  {t('car.booking.endDate')}
                </label>
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date | null) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate || undefined}
                  endDate={endDate || undefined}
                  minDate={startDate || undefined}
                  className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholderText={t('car.booking.selectDates')}
                />
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setShowHowToBook(!showHowToBook)}
                className="text-sm text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-1"
              >
                {t('car.howToBook.title')}
                <ChevronDown className={`w-4 h-4 transition-transform ${showHowToBook ? 'rotate-180' : ''}`} />
              </button>
              
              {showHowToBook && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-primary-800/30 rounded-lg p-4"
                >
                  <ul className="space-y-2">
                    {bookingSteps.map((step, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-primary-200">
                        <CheckCircle2 className="w-4 h-4 text-accent-400" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            <button
              onClick={handleBooking}
              disabled={!startDate || !endDate}
              className="group relative w-full flex items-center justify-center px-6 py-3 bg-accent-500 text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              <span className="relative z-10">{t('car.booking.submit')}</span>
              <div className="absolute inset-0 bg-gradient-shine animate-shine" />
            </button>
          </motion.div>
        ) : (
          <button
            onClick={() => setIsBookingOpen(true)}
            className="group relative w-full flex items-center justify-center px-6 py-3 bg-accent-500 text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">{t('car.booking.selectDates')}</span>
            <div className="absolute inset-0 bg-gradient-shine animate-shine" />
          </button>
        )}
      </div>
    </motion.div>
  );
} 
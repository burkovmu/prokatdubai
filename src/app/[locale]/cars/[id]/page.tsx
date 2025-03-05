'use client';

import { use } from 'react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import { Shield, Clock, CreditCard, Users, Fuel, Cog, ChevronDown, CheckCircle2 } from 'lucide-react';

const cars = {
  'rolls-royce-cullinan': {
    name: 'Rolls-Royce Cullinan',
    price: 4000,
    images: ['/images/cars/rolls-royce-cullinan.jpg'],
    description: {
      en: "Experience unparalleled luxury with the Rolls-Royce Cullinan. This SUV combines legendary comfort with outstanding performance.",
      ru: "Испытайте непревзойденную роскошь Rolls-Royce Cullinan. Этот внедорожник сочетает в себе легендарный комфорт и выдающиеся характеристики."
    },
    specifications: {
      engine: '6.75L V12',
      power: '563 hp',
      acceleration: '0-100 km/h in 5.2s',
      transmission: '8-speed automatic',
      seats: 5
    }
  },
  'lamborghini-urus': {
    name: 'Lamborghini Urus',
    price: 3500,
    images: ['/images/cars/lamborghini-urus.jpg'],
    description: {
      en: "The world's first Super Sport Utility Vehicle, the Lamborghini Urus combines supercar soul with SUV functionality.",
      ru: "Первый в мире суперспортивный внедорожник Lamborghini Urus сочетает в себе душу суперкара с функциональностью внедорожника."
    },
    specifications: {
      engine: '4.0L V8 Twin-Turbo',
      power: '650 hp',
      acceleration: '0-100 km/h in 3.6s',
      transmission: '8-speed automatic',
      seats: 5
    }
  },
  'mercedes-maybach': {
    name: 'Mercedes-Maybach S-Class',
    price: 2800,
    images: ['/images/cars/mercedes-maybach.jpg'],
    description: {
      en: "The Mercedes-Maybach S-Class represents the ultimate in luxury, comfort and technological innovation.",
      ru: "Mercedes-Maybach S-Class представляет собой вершину роскоши, комфорта и технологических инноваций."
    },
    specifications: {
      engine: '4.0L V8 Biturbo',
      power: '496 hp',
      acceleration: '0-100 km/h in 4.8s',
      transmission: '9-speed automatic',
      seats: 4
    }
  },
  'bentley-bentayga': {
    name: 'Bentley Bentayga',
    price: 3200,
    images: ['/images/cars/bentley-bentayga.jpg'],
    description: {
      en: "The Bentley Bentayga combines unparalleled luxury with effortless performance and everyday usability.",
      ru: "Bentley Bentayga сочетает в себе непревзойденную роскошь с легкой производительностью и повседневной практичностью."
    },
    specifications: {
      engine: '4.0L V8 Twin-Turbo',
      power: '542 hp',
      acceleration: '0-100 km/h in 4.5s',
      transmission: '8-speed automatic',
      seats: 5
    }
  },
  'porsche-911': {
    name: 'Porsche 911 GT3',
    price: 2500,
    images: ['/images/cars/porsche-911.jpg'],
    description: {
      en: "The Porsche 911 GT3 represents the pinnacle of driving performance and precision engineering.",
      ru: "Porsche 911 GT3 представляет собой вершину водительского мастерства и точной инженерии."
    },
    specifications: {
      engine: '4.0L Flat-6',
      power: '502 hp',
      acceleration: '0-100 km/h in 3.4s',
      transmission: '7-speed PDK',
      seats: 2
    }
  },
  'ferrari-sf90': {
    name: 'Ferrari SF90',
    price: 4500,
    images: ['/images/cars/ferrari-sf90.jpg'],
    description: {
      en: "The Ferrari SF90 Stradale is the most powerful Ferrari ever, combining hybrid technology with pure performance.",
      ru: "Ferrari SF90 Stradale - самый мощный Ferrari всех времен, сочетающий гибридные технологии с чистой производительностью."
    },
    specifications: {
      engine: '4.0L V8 + 3 Electric Motors',
      power: '986 hp',
      acceleration: '0-100 km/h in 2.5s',
      transmission: '8-speed dual-clutch',
      seats: 2
    }
  }
};

export default function CarPage({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const resolvedParams = use(params);
  const t = useTranslations('car');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHowToBook, setShowHowToBook] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  const car = cars[resolvedParams.id as keyof typeof cars];
  
  if (!car) return null;

  const calculateTotalPrice = () => {
    if (!startDate || !endDate) return 0;
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return days * car.price;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate) return;
    setIsSubmitted(true);
  };

  const benefits = [
    {
      icon: <Shield className="w-5 h-5 text-accent-400" />,
      title: t('benefits.insurance.title'),
      description: t('benefits.insurance.description')
    },
    {
      icon: <Clock className="w-5 h-5 text-accent-400" />,
      title: t('benefits.delivery.title'),
      description: t('benefits.delivery.description')
    },
    {
      icon: <CreditCard className="w-5 h-5 text-accent-400" />,
      title: t('benefits.payment.title'),
      description: t('benefits.payment.description')
    }
  ];

  const bookingSteps = [
    t('howToBook.steps.dates'),
    t('howToBook.steps.contact'),
    t('howToBook.steps.payment'),
    t('howToBook.steps.confirmation')
  ];

  return (
    <div className="min-h-screen bg-primary-950 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Изображение автомобиля */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden group">
            <Image
              src={car.images[0]}
              alt={car.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-light text-white mb-2">
                {car.name}
              </h1>
              <div className="flex items-center gap-6 text-primary-200">
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {car.specifications.seats} мест
                </span>
                <span className="flex items-center gap-2">
                  <Fuel className="w-5 h-5" />
                  {car.specifications.engine}
                </span>
                <span className="flex items-center gap-2">
                  <Cog className="w-5 h-5" />
                  {car.specifications.transmission}
                </span>
              </div>
            </div>
          </div>

          {/* Информация и форма бронирования */}
          <div className="space-y-8">
            <div className="bg-primary-900/50 backdrop-blur-sm rounded-xl p-8 border border-primary-800/50">
              <p className="text-primary-200 text-lg leading-relaxed mb-6">
                {car.description[resolvedParams.locale as 'en' | 'ru']}
              </p>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-2xl font-semibold text-white">
                    ${car.price}
                    <span className="text-sm font-normal text-primary-400 ml-1">
                      / {t('booking.perDay')}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                  className="flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
                >
                  {t('specifications')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSpecsOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {isSpecsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-2 gap-4 py-4 border-t border-primary-800/50"
                >
                  {Object.entries(car.specifications).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-3 text-primary-200">
                      <div>
                        <p className="text-xs text-primary-400">{t(`specs.${key}`)}</p>
                        <p>{value}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Преимущества */}
            <div className="grid grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-900/50 backdrop-blur-sm rounded-xl p-6 border border-primary-800/50"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-white text-center font-medium mb-2">{benefit.title}</h3>
                  <p className="text-primary-300 text-sm text-center">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Форма бронирования */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-primary-900/50 backdrop-blur-sm rounded-xl p-8 border border-primary-800/50 space-y-6">
                <h2 className="text-2xl font-light text-white mb-6">
                  {t('booking.title')}
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">
                      {t('booking.startDate')}
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date: Date | null) => setStartDate(date)}
                      selectsStart
                      startDate={startDate || undefined}
                      endDate={endDate || undefined}
                      minDate={new Date()}
                      className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholderText={t('booking.selectDates')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-200 mb-2">
                      {t('booking.endDate')}
                    </label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date: Date | null) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate || undefined}
                      endDate={endDate || undefined}
                      minDate={startDate || undefined}
                      className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholderText={t('booking.selectDates')}
                    />
                  </div>
                </div>

                {startDate && endDate && (
                  <div className="bg-primary-800/30 rounded-lg p-4">
                    <p className="text-primary-200">
                      {t('booking.totalPrice')}:{' '}
                      <span className="text-white font-semibold">
                        ${calculateTotalPrice()} ({Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} {t('booking.days')})
                      </span>
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => setShowHowToBook(!showHowToBook)}
                    className="text-sm text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-1"
                  >
                    {t('howToBook.title')}
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
                  type="submit"
                  disabled={!startDate || !endDate}
                  className="group relative w-full flex items-center justify-center px-6 py-3 bg-accent-500 text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <span className="relative z-10">{t('booking.submit')}</span>
                  <div className="absolute inset-0 bg-gradient-shine animate-shine" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary-900/50 backdrop-blur-sm rounded-xl p-8 border border-primary-800/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-500/20 text-accent-500 mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">
                  {t('booking.success.title')}
                </h3>
                <p className="text-primary-300">
                  {t('booking.success.message')}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
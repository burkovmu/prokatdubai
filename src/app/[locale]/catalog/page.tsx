'use client';

import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Car } from '@/types/car';
import { cars } from '@/data/cars';
import { Loading } from '@/components/ui/loading';

function CarCard({ car }: { car: Car }) {
  const t = useTranslations('catalog');

  const formatPrice = (price: number) => {
    return (
      <p className="text-2xl font-semibold text-white">
        ${price.toLocaleString('en-US', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
          useGrouping: false
        })}
        <span className="text-lg font-normal text-primary-300">
          /{t('price.perDay')}
        </span>
      </p>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link
        href={`/cars/${car.id}`}
        className="block bg-primary-900/50 rounded-xl overflow-hidden hover:bg-primary-900/70 transition-all duration-300 border border-primary-800/50 hover:border-accent-500/50"
      >
        <div className="relative h-[250px] overflow-hidden">
          <Image
            src={car.images[0]}
            alt={`${car.brand} ${car.model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl font-light text-white mb-1">
              {car.brand} <span className="font-medium">{car.model}</span>
            </h2>
            <p className="text-primary-200">{car.year}</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-primary-400">Двигатель</p>
              <p className="text-sm text-primary-200">{car.specifications.engine}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-primary-400">Мощность</p>
              <p className="text-sm text-primary-200">{car.specifications.power} л.с.</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-primary-400">Разгон</p>
              <p className="text-sm text-primary-200">{car.specifications.acceleration} сек</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-primary-400">Места</p>
              <p className="text-sm text-primary-200">{car.specifications.seats} мест</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-primary-800/50">
            <div>
              {formatPrice(car.price)}
              {car.oldPrice && (
                <p className="text-sm text-primary-400 line-through">
                  {formatPrice(car.oldPrice)}
                </p>
              )}
            </div>
            <span className="inline-flex items-center text-accent-400 group-hover:text-accent-300 transition-colors">
              {t('viewDetails')}
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CatalogPage() {
  const t = useTranslations('catalog');

  return (
    <div className="min-h-screen bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-primary-400 mb-12">
            {t('subtitle')}
          </p>
        </motion.div>
        
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
} 
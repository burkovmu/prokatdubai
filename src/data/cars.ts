import { Car } from '@/types/car';

export const cars: Car[] = [
  {
    id: 'rolls-royce-cullinan',
    brand: 'Rolls-Royce',
    model: 'Cullinan',
    year: 2023,
    price: 4000,
    images: ['/images/cars/rolls-royce-cullinan.jpg'],
    description: {
      en: 'The epitome of luxury SUV driving',
      ru: 'Эталон роскошных внедорожников'
    },
    specifications: {
      engine: '6.75L V12',
      power: '563',
      acceleration: '4.8',
      transmission: '8-ступенчатая автомат',
      seats: 5
    },
    available: true
  },
  {
    id: 'lamborghini-urus',
    brand: 'Lamborghini',
    model: 'Urus',
    year: 2023,
    price: 3500,
    images: ['/images/cars/lamborghini-urus.jpg'],
    description: {
      en: 'Super SUV with unmatched performance',
      ru: 'Супер-внедорожник с непревзойденной производительностью'
    },
    specifications: {
      engine: '4.0L V8 Twin-Turbo',
      power: '641',
      acceleration: '3.5',
      transmission: '8-ступенчатая автомат',
      seats: 5
    },
    available: true
  },
  {
    id: 'mercedes-maybach',
    brand: 'Mercedes-Maybach',
    model: 'S-Class',
    year: 2023,
    price: 2800,
    images: ['/images/cars/mercedes-maybach.jpg'],
    description: {
      en: 'Ultimate luxury sedan with unmatched comfort',
      ru: 'Непревзойденный роскошный седан с максимальным комфортом'
    },
    specifications: {
      engine: '6.0L V12',
      power: '621',
      acceleration: '4.5',
      transmission: '9-ступенчатая автомат',
      seats: 4
    },
    available: true
  },
  {
    id: 'bentley-bentayga',
    brand: 'Bentley',
    model: 'Bentayga',
    year: 2023,
    price: 3200,
    images: ['/images/cars/bentley-bentayga.jpg'],
    description: {
      en: 'Luxury SUV with exceptional craftsmanship',
      ru: 'Роскошный внедорожник с исключительным качеством исполнения'
    },
    specifications: {
      engine: '4.0L V8 Twin-Turbo',
      power: '542',
      acceleration: '4.4',
      transmission: '8-ступенчатая автомат',
      seats: 5
    },
    available: true
  },
  {
    id: 'porsche-911',
    brand: 'Porsche',
    model: '911 GT3',
    year: 2023,
    price: 2500,
    images: ['/images/cars/porsche-911.jpg'],
    description: {
      en: 'Track-focused sports car with racing DNA',
      ru: 'Спортивный автомобиль с гоночной ДНК'
    },
    specifications: {
      engine: '4.0L Flat-6',
      power: '502',
      acceleration: '3.2',
      transmission: '7-ступенчатая PDK',
      seats: 2
    },
    available: true
  },
  {
    id: 'ferrari-sf90',
    brand: 'Ferrari',
    model: 'SF90 Stradale',
    year: 2023,
    price: 4500,
    images: ['/images/cars/ferrari-sf90.jpg'],
    description: {
      en: 'Hybrid hypercar with Formula 1 technology',
      ru: 'Гибридный гиперкар с технологиями Формулы 1'
    },
    specifications: {
      engine: '4.0L V8 Hybrid',
      power: '986',
      acceleration: '2.5',
      transmission: '8-ступенчатая DCT',
      seats: 2
    },
    available: true
  },
]; 
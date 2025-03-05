export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  oldPrice?: number;
  images: string[];
  description: {
    en: string;
    ru: string;
  };
  specifications: {
    engine: string;
    power: string;
    acceleration: string;
    transmission: string;
    seats: number;
  };
  available: boolean;
} 
export type Locale = 'ru' | 'en' | 'tr';

export type PropertyCategory = 'new' | 'hot' | 'investment';
export type PropertyType =
  | 'apartment'
  | 'villa'
  | 'penthouse'
  | 'land'
  | 'commercial';
export type PropertyStatus = 'ready' | 'construction' | 'planned';

export interface Property {
  id: string;
  ref: string;
  title: Record<Locale, string>;
  type: PropertyType;
  category: PropertyCategory[];
  projectId: string;
  city: string;
  district: Record<Locale, string>;
  price: number; // EUR
  rooms: string; // e.g. "2+1"
  area: number; // m²
  floor: number;
  totalFloors: number;
  distanceToSea: number; // meters
  seaView: boolean;
  furnished: boolean;
  completionYear: number;
  status: PropertyStatus;
  image: string;
  gallery: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  name: string;
  location: Record<Locale, string>;
  beach: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  status: PropertyStatus;
  completion: string; // e.g. "July 2026"
  layouts: string; // e.g. "1+1, 2+1, 3+1"
  areaFrom: number; // m²
  areaTo: number; // m²
  complexArea?: number; // m²
  distanceToSea: number; // meters
  priceFrom: number; // EUR
  badge?: Record<Locale, string>;
  image: string;
  gallery: string[];
  amenities: Record<Locale, string>[];
}

export interface Service {
  id: string;
  icon: string; // lucide icon name
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export interface PropertyTypeCard {
  type: PropertyType;
  count: number;
  image: string;
}

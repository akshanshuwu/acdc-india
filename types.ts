
import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'hi';

export interface Translation {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    trust: string;
  };
  services: {
    title: string;
    subtitle: string;
    categories: ServiceCategory[];
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    reviews: Review[];
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    cta_whatsapp: string;
    form_title: string;
    send_btn: string;
  };
  footer: {
    rights: string;
    disclaimer: string;
  };
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string; // We map this to actual icons in the component
  priceRange?: string;
  features: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface StatData {
  name: string;
  value: number;
}

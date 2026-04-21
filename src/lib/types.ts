export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'plumbing' | 'heating' | 'cooling' | 'emergency';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'google' | 'yelp';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Office {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  mapUrl: string;
}

export interface PromoOffer {
  id: string;
  title: string;
  description: string;
  code: string;
  expires?: string;
}

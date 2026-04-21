import { Service, Review, FAQ, Office, PromoOffer } from './types';

export const COMPANY_INFO = {
  name: 'Thelen Plumbing, Heating, and Air',
  phone: '(763) 220-1064',
  email: 'admin@thelenmechanical.com',
  tagline: 'Trusted Comfort for Your Twin Cities Home.',
  emergencyTagline: '24/7 Same-Day Guarantee or $100 Off',
  stats: {
    rating: 4.9,
    reviewCount: 500,
    recommendRate: 98,
  },
  serviceAreas: ['Minneapolis', 'St. Paul', 'Big Lake', 'Brooklyn Center', 'Elk River', 'Plymouth', 'Maple Grove'],
};

export const OFFICES: Office[] = [
  {
    name: 'Main Office',
    address: '19950 177th St, Suite 650',
    city: 'Big Lake',
    state: 'MN',
    zip: '55309',
    phone: '(763) 220-1064',
    mapUrl: 'https://goo.gl/maps/placeholder1',
  },
  {
    name: 'Minneapolis Hub',
    address: 'Coming Soon - Twin Cities Central',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55401',
    phone: '(763) 220-1064',
    mapUrl: 'https://goo.gl/maps/placeholder2',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'plumbing-repair',
    title: 'Expert Plumbing Repair',
    description: 'From leaky faucets to burst pipes, we handle all plumbing emergencies with speed and precision.',
    icon: 'Droplets',
    category: 'plumbing',
  },
  {
    id: 'drain-cleaning',
    title: 'Professional Drain Cleaning',
    description: 'Slow drains? We use advanced technology to clear blockages and restore flow instantly.',
    icon: 'Waves',
    category: 'plumbing',
  },
  {
    id: 'ac-repair',
    title: 'AC Repair & Install',
    description: 'Stay cool with our expert air conditioning services, including maintenance and new system installs.',
    icon: 'Snowflake',
    category: 'cooling',
  },
  {
    id: 'heating-repair',
    title: 'Heating System Repair',
    description: 'Specializing in furnace and boiler repairs to keep your home warm during MN winters.',
    icon: 'Flame',
    category: 'heating',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    text: 'Thelen saved us when our water heater burst on a Sunday. Fast, professional, and fair pricing!',
    date: '2024-01-15',
    source: 'google',
  },
  {
    id: '2',
    author: 'James K.',
    rating: 5,
    text: 'Best HVAC service in the Twin Cities. They explained everything clearly and the tech was great.',
    date: '2024-02-01',
    source: 'google',
  },
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Do you offer emergency 24/7 services?',
    answer: 'Yes! We offer 24/7 emergency services for both plumbing and HVAC issues. If we don\'t arrive same-day, we\'ll give you $100 off.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'What areas in Minnesota do you serve?',
    answer: 'We serve the entire Twin Cities area, including Minneapolis, St. Paul, Big Lake, Plymouth, and Maple Grove.',
    category: 'Service Area',
  },
];

export const OFFERS: PromoOffer[] = [
  {
    id: 'new-customer',
    title: '$50 Off First Service',
    description: 'Valid for new residential customers on any repair over $250.',
    code: 'WELCOME50',
  },
];

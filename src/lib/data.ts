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

export const ESTIMATE_DATA = {
  services: [
    { id: 'plumbing', label: 'Plumbing' },
    { id: 'heating', label: 'Heating' },
    { id: 'cooling', label: 'Cooling' },
    { id: 'drain', label: 'Drain' },
  ],
  issues: {
    plumbing: ['Water heater', 'Burst pipe', 'Leaky faucet', 'Toilet issue', 'Other'],
    heating: ['Furnace repair', 'Furnace install', 'Maintenance', 'No heat emergency'],
    cooling: ['AC repair', 'AC install', 'Not cooling', 'Maintenance'],
    drain: ['Slow drain', 'Fully clogged', 'Sewer backup', 'Camera inspection'],
  },
  urgency: [
    { id: 'urgent', label: "Today — it's urgent", multiplier: 1.2 },
    { id: 'week', label: 'This week', multiplier: 1.0 },
    { id: 'planning', label: 'Just planning ahead', multiplier: 0.9 },
  ],
  baseRanges: {
    'Water heater': [600, 2500],
    'Burst pipe': [300, 1500],
    'Leaky faucet': [150, 450],
    'Toilet issue': [149, 600],
    'Other': [149, 1000],
    'Furnace repair': [250, 1200],
    'Furnace install': [3500, 8000],
    'Maintenance': [89, 189],
    'No heat emergency': [289, 1500],
    'AC repair': [250, 1500],
    'AC install': [4000, 9000],
    'Not cooling': [189, 1200],
    'Slow drain': [129, 350],
    'Fully clogged': [189, 500],
    'Sewer backup': [350, 2500],
    'Camera inspection': [250, 500],
  } as Record<string, [number, number]>
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

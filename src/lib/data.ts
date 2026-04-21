import { Service, Review, FAQ, Office, PromoOffer, Technician } from './types';

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
    name: 'Big Lake Office',
    address: '19950 177th St, Suite 650',
    city: 'Big Lake',
    state: 'MN',
    zip: '55309',
    phone: '(763) 220-1064',
    mapUrl: 'https://goo.gl/maps/placeholder1',
  },
  {
    name: 'Minneapolis Service Hub',
    address: 'Twin Cities Central',
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
    author: 'Jessica L.',
    rating: 5,
    text: "I was without heat and they came out same day. Taylor had it running in 2 hours. 100% recommend.",
    date: 'Feb 2026',
    source: 'google',
  },
  {
    id: '2',
    author: 'Mark T.',
    rating: 5,
    text: "Furnace died on Christmas Eve. They answered the phone. They showed up. Enough said.",
    date: 'Dec 2025',
    source: 'google',
  },
  {
    id: '3',
    author: 'Sarah B.',
    rating: 5,
    text: "Had a major leak under the sink. Called Thelen and they were here within an hour. Professional and clean.",
    date: 'Jan 2026',
    source: 'google',
  },
  {
    id: '4',
    author: 'David R.',
    rating: 5,
    text: "Taylor replaced our old water heater. Fair price and he even fixed a small issue with our laundry drain for free.",
    date: 'Feb 2026',
    source: 'google',
  },
  {
    id: '5',
    author: 'Emily W.',
    rating: 5,
    text: "Best HVAC service in the cities. No hidden fees, just straightforward honest work.",
    date: 'March 2026',
    source: 'google',
  },
  {
    id: '6',
    author: 'Mike S.',
    rating: 5,
    text: "Clear communication from start to finish. They texted when they were on their way. 5 stars.",
    date: 'Jan 2026',
    source: 'google',
  },
  {
    id: '7',
    author: 'Lisa K.',
    rating: 5,
    text: "Finally found a plumber I can trust. Cleaned up everything after fixing my clogged main line.",
    date: 'Feb 2026',
    source: 'google',
  },
  {
    id: '8',
    author: 'John P.',
    rating: 5,
    text: "Needed a full AC install. These guys were competitive on price and did a much cleaner job than the previous company.",
    date: 'March 2026',
    source: 'google',
  },
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Do you charge for the diagnosis visit?',
    answer: 'No. Diagnosis is always free. You only pay if you approve the work. No pressure.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: "What's the Minnesota Cold Guarantee?",
    answer: 'If you call before 2pm about no-heat or no-hot-water and we can\'t be there same day, the following visit gets $100 off. Minneapolis-St. Paul metro only.',
    category: 'Guarantee',
  },
  {
    id: 'faq-3',
    question: 'Are you licensed?',
    answer: 'Yes. Master Plumber and Mechanical Contractor licensed in MN. Every tech is background-checked and we carry $2M in liability insurance.',
    category: 'Trust',
  },
  {
    id: 'faq-4',
    question: 'Do you charge after-hours fees?',
    answer: 'No. 24/7 flat rate for members (Happy Home Club+). Non-members pay standard rate between 6pm-8am, no "emergency surcharge" gimmick.',
    category: 'Pricing',
  },
  {
    id: 'faq-5',
    question: 'Do you do financing?',
    answer: 'Yes — Synchrony HOME. Approved in 60 seconds on your phone. 6-24 month terms. Starting 0% APR on qualified installs.',
    category: 'Pricing',
  },
  {
    id: 'faq-6',
    question: 'Will you give a firm price before working?',
    answer: 'Yes. Flat-rate menu pricing after diagnosis. You sign off before anything starts. If the tech finds more issues mid-job, we stop and re-quote.',
    category: 'Pricing',
  },
  {
    id: 'faq-7',
    question: 'How fast can you come out for emergency?',
    answer: 'Our average same-day ETA in Twin Cities is 2.5 hrs from call. Big Lake area under 90 min.',
    category: 'Emergency',
  },
  {
    id: 'faq-8',
    question: 'Residential only or commercial too?',
    answer: 'Mostly residential. Light commercial (small offices, restaurants) — yes. Heavy industrial or multi-unit apartments — we refer out.',
    category: 'General',
  },
  {
    id: 'faq-9',
    question: 'What brands do you install?',
    answer: 'Bryant, Trane, Carrier for HVAC. Rheem, AO Smith, Navien for water heaters. Happy to match what\'s already there if parts available.',
    category: 'Service',
  },
  {
    id: 'faq-10',
    question: '1-year workmanship warranty — what does it cover?',
    answer: 'If our install or repair fails due to our workmanship, we come back free of charge. Manufacturer parts warranties separate (usually 5-10 yrs).',
    category: 'Guarantee',
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

export const TECHNICIANS: Technician[] = [
  {
    id: 'tech-1',
    name: 'Taylor',
    role: 'Lead Plumber',
    yearsExperience: 12,
    photoUrl: 'https://picsum.photos/seed/tech-taylor/800/1066',
    certifications: [
      'MN Master Plumber #PM123456',
      'Gas Piping Certified',
      'Backflow Assembly Tester',
    ],
    specialties: ['Tankless Water Heaters', 'Gas Lines', 'Boilers'],
    quote: "If I wouldn't do it in my own house, I won't sell it to yours.",
  },
  {
    id: 'tech-2',
    name: 'Mike',
    role: 'Senior HVAC Tech',
    yearsExperience: 9,
    photoUrl: 'https://picsum.photos/seed/tech-mike/800/1066',
    certifications: [
      'EPA 608 Universal',
      'NATE Certified',
      'High Efficiency Systems Specialist',
    ],
    specialties: ['Furnace Repair', 'AC Installation', 'Heat Pumps'],
    quote: "Precision isn't just a goal; it's the standard for every home I enter.",
  },
  {
    id: 'tech-3',
    name: 'Sarah',
    role: 'Service Manager',
    yearsExperience: 8,
    photoUrl: 'https://picsum.photos/seed/tech-sarah/800/1066',
    certifications: [
      'Advanced Customer Service Lead',
      'Operational Efficiency Expert',
      'Safety & Compliance Officer',
    ],
    specialties: ['System Diagnostics', 'Project Management', 'Quality Assurance'],
    quote: "My job is to ensure every service call ends with a homeowner breathing a sigh of relief.",
  },
];

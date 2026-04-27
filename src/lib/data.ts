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
  issues: [
    { id: 'clogged-drain', label: 'CLOGGED DRAIN', sub: 'KITCHEN / BATH', base: [150, 450] },
    { id: 'active-leak', label: 'ACTIVE LEAK', sub: 'PIPE / FIXTURE', base: [200, 600] },
    { id: 'water-heater', label: 'WATER HEATER', sub: 'REPAIR OR SWAP', base: [800, 2500] },
    { id: 'sewer-line', label: 'SEWER LINE', sub: 'MAIN DRAIN', base: [350, 1500] },
    { id: 'sump-pump', label: 'SUMP PUMP', sub: 'INSTALL / REPLACE', base: [400, 1200] },
    { id: 'remodel', label: 'REMODEL', sub: 'KITCHEN / BATH', base: [1500, 5000] },
  ],
  homeSizes: [
    { id: 'small', label: 'CONDO / TOWNHOME', sub: 'UNDER 1,400 SQFT', mult: 0.8 },
    { id: 'medium', label: 'TYPICAL HOME', sub: '1,400 - 2,800 SQFT', mult: 1.0 },
    { id: 'large', label: 'LARGE / MULTI-LEVEL', sub: '2,800+', mult: 1.3 },
  ],
  urgency: [
    { id: 'normal', label: 'SCHEDULE NORMALLY', sub: 'NEXT 2 DAYS', mult: 1.0 },
    { id: 'same-day', label: 'SAME-DAY', sub: 'TODAY, BUSINESS HRS', mult: 1.2 },
    { id: 'emergency', label: 'EMERGENCY', sub: 'AFTER-HOURS / 24/7', mult: 1.5 },
  ],
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

export const TECHNICIANS: Technician[] = [
  {
    id: 'ray',
    name: 'RAY THELEN',
    role: "FOUNDER P'B- MASTER PLUMBER",
    bio: '24 years in Twin Cities pipe. Cold Spring hockey kid. Still does ride-alongs on Fridays.',
    since: 'SINCE 2002',
    location: 'NE MPLS',
    photoUrl: 'https://picsum.photos/seed/ray/600/800',
    color: 'rgba(75, 45, 35, 0.7)',
    filename: 'RAY.JPG'
  },
  {
    id: 'hannah',
    name: 'HANNAH THELEN',
    role: 'OPERATIONS + DISPATCH',
    bio: "Runs the board. Knows every tech's voice, every van's mileage, and every ZIP's drive time.",
    since: 'JOINED 2014',
    location: 'ST. PAUL',
    photoUrl: 'https://picsum.photos/seed/hannah/600/800',
    color: 'rgba(35, 55, 75, 0.7)',
    filename: 'HANNAH.JPG'
  },
  {
    id: 'miguel',
    name: 'MIGUEL CARRANZA',
    role: "MASTER PLUMBER P'B- 9 YRS",
    bio: 'Hydro-jet specialist. Breaks tie with a chess clock and a clean invoice.',
    since: 'PIBUBh: 4.96',
    location: 'ROSEVILLE',
    photoUrl: 'https://picsum.photos/seed/miguel/600/800',
    color: 'rgba(65, 55, 35, 0.7)',
    filename: 'MIGUEL.JPG'
  },
  {
    id: 'eli',
    name: 'ELI THELEN',
    role: "MASTER PLUMBER P'B- 6 YRS",
    bio: 'Re-pipes, remodels, and the person who translates your contractor\'s hand-waving into a real scope.',
    since: 'SINCE 2019',
    location: 'MINNEAPOLIS',
    photoUrl: 'https://picsum.photos/seed/eli/600/800',
    color: 'rgba(35, 75, 55, 0.7)',
    filename: 'ELI.JPG'
  }
];

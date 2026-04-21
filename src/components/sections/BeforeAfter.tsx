'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ImageComparison } from '@/components/ui/image-comparison';
import { cn } from '@/lib/utils';

const cases = [
  {
    id: 'case-1',
    location: 'St. Paul, MN',
    date: 'Feb 2026',
    title: 'Frozen pipe. 3 AM call.',
    description: 'Customer woke up to water pouring through the ceiling. We had a tech on-site in 45 minutes, located the burst behind drywall, replaced 6 feet of copper, patched and sealed. Homeowner was back in bed by 5 AM.',
    stats: { time: '2 hrs on-site', cost: '$740 total', rating: '5-star review' },
    before: 'https://picsum.photos/seed/pipe-before/800/600',
    after: 'https://picsum.photos/seed/pipe-after/800/600',
  },
  {
    id: 'case-2',
    location: 'Big Lake, MN',
    date: 'Jan 2026',
    title: 'Rusted water heater replace.',
    description: 'A 15-year-old unit finally gave out, flooding the utility room. We arrived same-day, hauled away the rusted dinosaur, and installed a high-efficiency power-vent unit with a new thermal expansion tank.',
    stats: { time: '4 hrs on-site', cost: '$2,400 total', rating: '5-star review' },
    before: 'https://picsum.photos/seed/heater-before/800/600',
    after: 'https://picsum.photos/seed/heater-after/800/600',
  },
  {
    id: 'case-3',
    location: 'Minneapolis, MN',
    date: 'March 2026',
    title: 'Sewer line camera + snake.',
    description: 'Persistent basement backups were driving this family crazy. Our camera identified a massive root intrusion 40 feet out. We cleared it with a heavy-duty mechanical snake and treated the line to prevent regrowth.',
    stats: { time: '1.5 hrs on-site', cost: '$380 total', rating: '5-star review' },
    before: 'https://picsum.photos/seed/drain-before/800/600',
    after: 'https://picsum.photos/seed/drain-after/800/600',
  }
];

export const BeforeAfter = () => {
  return (
    <section className="py-24 bg-dark text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24">
          <p className="font-code uppercase text-xs tracking-widest text-white/60 font-black mb-4">
            RECENT WORK — NO CHERRY-PICKING
          </p>
          <h2 className="text-white leading-none">
            What we walked into.<br className="hidden md:block" /> What we left.
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32 divide-y divide-white/10">
          {cases.map((item, idx) => (
            <div 
              key={item.id} 
              className={cn(
                "pt-24 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center",
                idx % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              {/* Image Column */}
              <motion.div 
                className={cn(
                  "lg:col-span-7 w-full",
                  idx % 2 !== 0 ? "lg:order-last" : "lg:order-first"
                )}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <ImageComparison
                  beforeImage={item.before}
                  afterImage={item.after}
                  className="aspect-[4/3] md:aspect-video rounded-2xl shadow-2xl border border-white/5"
                />
              </motion.div>

              {/* Text Column */}
              <motion.div 
                className="lg:col-span-5 space-y-6"
                initial={{ opacity: 0, x: idx % 2 !== 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <div className="space-y-2">
                  <p className="font-code text-xs text-secondary font-bold uppercase tracking-widest">
                    {item.location} · {item.date}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-headline leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-white/70 font-body text-lg leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 flex flex-wrap gap-4 text-[10px] md:text-xs font-code uppercase tracking-widest text-white/50 font-bold">
                  <span className="flex items-center gap-1.5">⏱️ {item.stats.time}</span>
                  <span className="flex items-center gap-1.5 border-l border-white/10 pl-4">💵 {item.stats.cost}</span>
                  <span className="flex items-center gap-1.5 border-l border-white/10 pl-4">⭐ {item.stats.rating}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

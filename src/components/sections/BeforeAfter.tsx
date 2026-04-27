'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ImageComparison } from '@/components/ui/image-comparison';
import { cn } from '@/lib/utils';

const cases = [
  {
    id: 'case-1',
    location: 'St. Paul, MN',
    title: '3 AM Frozen Pipe Burst',
    stats: { time: '45m Response', status: 'Repaired' },
    before: 'https://picsum.photos/seed/pipe-before/800/600',
    after: 'https://picsum.photos/seed/pipe-after/800/600',
  },
  {
    id: 'case-2',
    location: 'Big Lake, MN',
    title: 'Rusted Tank Replacement',
    stats: { time: 'Same-Day', status: 'Upgraded' },
    before: 'https://picsum.photos/seed/heater-before/800/600',
    after: 'https://picsum.photos/seed/heater-after/800/600',
  }
];

export const BeforeAfter = () => {
  return (
    <section className="py-24 bg-[#F5F1EA] border-t border-black px-4">
      <div className="container mx-auto">
        <div className="mb-16 space-y-4">
          <p className="font-code text-[11px] uppercase tracking-widest font-black text-muted-foreground">
            06 / PROOF OF WORK
          </p>
          <h2 className="text-black font-black leading-[0.85] tracking-tighter uppercase m-0" style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}>
            WHAT WE WALKED INTO.<br />
            WHAT WE LEFT.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cases.map((item) => (
            <div key={item.id} className="space-y-6">
              <div className="relative border-2 border-black bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group">
                <ImageComparison
                  beforeImage={item.before}
                  afterImage={item.after}
                  className="aspect-[4/3] w-full"
                />
              </div>
              
              <div className="flex justify-between items-start pt-2">
                <div className="space-y-1">
                  <h3 className="font-headline text-2xl uppercase tracking-tight m-0">{item.title}</h3>
                  <p className="font-code text-[10px] uppercase font-black text-primary tracking-widest">{item.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-code text-[10px] uppercase font-black text-muted-foreground/60 tracking-widest">{item.stats.time}</p>
                  <p className="font-code text-[10px] uppercase font-black text-black tracking-widest">{item.stats.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-12 border-t border-black/10 flex justify-center">
          <p className="font-code text-[11px] uppercase font-black text-muted-foreground text-center max-w-lg leading-relaxed">
            * All photos taken by Thelen technicians on-site. Slide the handle to compare the mess with the fix.
          </p>
        </div>
      </div>
    </section>
  );
};

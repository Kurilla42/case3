'use client';

import React from 'react';
import { ImageComparison } from '@/components/ui/image-comparison';

const cases = [
  {
    id: 'case-1',
    location: 'Edina · January 2026',
    title: '3 AM FROZEN PIPE BURST',
    desc: '"Polar vortex took out a 1956 galvanized line behind the dryer. We re-piped to copper, dried the wall cavity, and were out by 6:40 AM."',
    before: 'https://picsum.photos/seed/pipe-before/800/600',
    after: 'https://picsum.photos/seed/pipe-after/800/600',
  },
  {
    id: 'case-2',
    location: 'St. Paul · March 2026',
    title: 'RUSTED TANK REPLACEMENT',
    desc: '"40-gallon tank failed at year 13. Same-day Bradford White install. Old tank hauled. Insurance got the photos in their inbox by lunch."',
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
            What we walked into.<br />
            What we left.
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
              
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <h3 className="font-headline text-2xl uppercase tracking-tight m-0">{item.title}</h3>
                  <p className="font-code text-[10px] uppercase font-black text-primary tracking-widest">{item.location}</p>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

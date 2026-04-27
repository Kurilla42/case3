'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: '01',
    title: 'YOU CALL OR BOOK.',
    description: 'Real human on the phone — not a bot, not a call-center in another state. Our dispatcher knows the metro and your neighborhood.',
    footer: '~ 2 MINUTES',
  },
  {
    id: '02',
    title: 'WE QUOTE FLAT-RATE.',
    description: "Before any wrench turns, you see the price from our book. No hourly meter, no \"while-I'm-in-there\" surprises on the invoice.",
    footer: '~ 10 MINUTES ON-SITE',
  },
  {
    id: '03',
    title: 'THE FIX HAPPENS.',
    description: 'Same-visit 92% of the time. Shoe covers, drop cloth, and we leave the space cleaner than we found it. Photo-doc before and after.',
    footer: 'AVG. 74 MINUTES',
  },
  {
    id: '04',
    title: 'YOU PAY WHAT WE SAID.',
    description: 'Not a dollar more. Card, ACH, financing via Synchrony PIP — your call. 1-year labor warranty on everything we touch, 5-year on re-pipes.',
    footer: '2-YEAR SATISFACTION GUARANTEE',
  },
];

export const Process = () => {
  return (
    <section className="py-24 bg-background overflow-hidden border-b border-black">
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Header Block */}
        <div className="mb-20 space-y-8">
          <div className="flex items-center gap-4">
            <p className="font-code text-[11px] uppercase tracking-widest font-black text-muted-foreground">
              04 / HOW IT WORKS
            </p>
          </div>
          <h2 className="text-black font-black leading-[0.85] tracking-tighter uppercase m-0 max-w-4xl" style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}>
            FOUR STEPS.<br />
            THAT'S THE WHOLE THING.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-black divide-y md:divide-y-0 md:divide-x divide-black">
          {steps.map((step) => (
            <div key={step.id} className="p-8 lg:p-12 space-y-8 flex flex-col justify-between group hover:bg-black/5 transition-colors">
              <div className="space-y-6">
                <p className="font-code text-[11px] uppercase font-black text-primary tracking-widest">
                  STEP {step.id}
                </p>
                <h3 className="font-headline text-2xl lg:text-3xl leading-none tracking-tight uppercase">
                  {step.title}
                </h3>
                <p className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className="pt-8">
                <p className="font-code text-[10px] uppercase font-black text-muted-foreground/60 tracking-widest">
                  {step.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { val: "24", unit: "YRS", sub: "TWIN CITIES, SAME FAMILY", primary: true },
  { val: "3,412", unit: "", sub: "5-STAR REVIEWS / 4.9 AVG", primary: false },
  { val: "47", unit: "MIN", sub: "MEDIAN RESPONSE, METRO", primary: false },
  { val: "11,400", unit: "", sub: "JOBS COMPLETED SINCE '22", primary: true },
];

export const EmergencyGuarantee = () => {
  return (
    <section className="bg-background overflow-hidden py-12 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Main Promise Box */}
        <div className="bg-primary border border-black p-8 lg:p-20 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Heading */}
          <div className="space-y-6 lg:space-y-10">
            <p className="font-code text-[11px] uppercase tracking-widest font-black text-white/80">
              THE 89-MINUTE PROMISE
            </p>
            <h2 className="text-white font-black leading-[0.85] tracking-tighter uppercase m-0" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}>
              IF OUR PLUMBER<br />
              ISN'T AT YOUR DOOR<br />
              WITHIN 89 MINUTES<br />
              THE DIAGNOSTIC'S<br />
              ON US.
            </h2>
          </div>

          {/* Right Column: Steps & Disclaimer */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="font-body text-white/90 text-lg leading-relaxed max-w-md">
                We built our dispatch around Twin Cities traffic, weather, and skyways. When you book a same-day slot between 7am and 7pm:
              </p>
              
              <div className="space-y-4 border-t border-white/20 pt-6">
                {[
                  { id: '01', text: 'We confirm by text inside 2 minutes.' },
                  { id: '02', text: 'You get a live tracker the second we dispatch.' },
                  { id: '03', text: 'If we\'re late past the 89-min window, the $89 diagnostic fee is waived every time.' },
                ].map((item) => (
                  <div key={item.id} className="flex gap-4 items-start group">
                    <span className="font-code text-[11px] font-black text-white/40 group-hover:text-white transition-colors">{item.id}</span>
                    <p className="font-code text-xs uppercase font-black text-white tracking-wide">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-code text-[9px] uppercase font-black text-white/40 tracking-[0.05em] leading-relaxed max-w-md">
              *Applies to same-day residential within our standard service area. Weather holds &gt; 4" snow/ice may pause promise with text notice.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-x border-b border-black divide-y lg:divide-y-0 md:divide-x divide-black bg-background">
          {stats.map((stat, i) => (
            <div key={i} className="p-10 space-y-2">
              <div className="flex items-baseline gap-2">
                <span className={`font-headline text-5xl tracking-tighter ${stat.primary ? 'text-primary' : 'text-black'}`}>
                  {stat.val}
                </span>
                {stat.unit && (
                  <span className="font-headline text-xl text-black">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="font-code text-[10px] uppercase font-black text-muted-foreground/60 tracking-widest">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO, OFFICES, SERVICE_CITIES } from '@/lib/data';
import Link from 'next/link';

export const ServiceAreas = () => {
  return (
    <section id="areas" className="py-24 bg-background overflow-hidden border-t border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="font-code uppercase text-[11px] tracking-widest text-muted-foreground font-black mb-4">
            09 / GEOGRAPHY
          </p>
          <h2 className="text-black font-black leading-[0.85] tracking-tighter uppercase m-0" style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}>
            We show up here.
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6 max-w-2xl">
            Serving the Twin Cities and Central Minnesota with industrial-strength plumbing since 1962.
          </p>
        </div>

        {/* 12-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Map Column (Left 5) */}
          <motion.div 
            className="lg:col-span-5 relative aspect-[4/5] bg-black border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* SVG Illustration of abstract map */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#F5F1EA]">
              <svg viewBox="0 0 200 200" className="w-full h-full p-12">
                <path d="M40,50 Q100,20 160,50 Q180,100 160,150 Q100,180 40,150 Q20,100 40,50" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
                {[
                  [60, 70], [85, 45], [130, 60], [150, 95], [120, 140], [80, 160], [50, 120], [100, 100]
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="2" fill="hsl(var(--primary))" />
                ))}
              </svg>
            </div>
          </motion.div>

          {/* City Table Column (Right 7) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="grid grid-cols-3 gap-x-8 gap-y-1">
              {SERVICE_CITIES.map((city) => (
                <div 
                  key={city.name}
                  className="flex justify-between items-end border-b border-black/10 py-2 group hover:bg-black/[0.02] transition-colors"
                >
                  <span className="font-code text-[10px] font-black tracking-tight uppercase">
                    {city.name}
                  </span>
                </div>
              ))}
              <div className="col-span-3 pt-4">
                <p className="font-code text-[11px] uppercase font-black text-muted-foreground">
                  + 32 more · <Link href="#" className="text-primary underline">ZIP lookup →</Link>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {OFFICES.map((office, idx) => (
                <div key={idx} className="bg-white border border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-lg font-headline mb-2 uppercase tracking-tight">{office.name}</h3>
                  <p className="font-code text-[10px] font-black text-muted-foreground leading-tight uppercase tracking-widest">
                    {office.address}<br />
                    {office.city}, {office.state} {office.zip}
                  </p>
                  <p className="font-code text-[11px] text-primary font-black uppercase mt-3">
                    {office.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

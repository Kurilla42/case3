'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Navigation } from 'lucide-react';
import { OFFICES, SERVICE_CITIES } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

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
            className="lg:col-span-5 relative aspect-[4/5] bg-black border border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Map Image with Grayscale Filter */}
            <div className="absolute inset-0 w-full h-full grayscale opacity-90 contrast-125">
              <Image 
                src="https://picsum.photos/seed/map-area/800/1000" 
                alt="Service Area Map" 
                fill 
                className="object-cover"
                data-ai-hint="topographic map"
              />
            </div>

            {/* Map Overlay Card (Matches Screenshot) */}
            <div className="absolute top-4 left-4 w-64 bg-[#f8f8f8]/95 backdrop-blur-sm border border-black/10 shadow-lg p-4 flex justify-between items-start z-10">
              <div className="space-y-0.5">
                <h4 className="font-headline text-[16px] uppercase tracking-tight leading-none text-black">Big Lake</h4>
                <p className="font-body text-[12px] text-muted-foreground">Big Lake, MN</p>
              </div>
              <div className="flex gap-4 text-muted-foreground/60">
                <ExternalLink size={18} className="cursor-pointer hover:text-primary transition-colors" />
                <Navigation size={18} className="cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>

            {/* Google-style bottom bar elements */}
            <div className="absolute bottom-2 left-2 z-10">
              <div className="w-8 h-8 border border-black/20 bg-white/10 backdrop-blur-sm overflow-hidden rounded-sm">
                <Image src="https://picsum.photos/seed/satellite/100/100" alt="Satellite" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 left-0 bg-white/20 backdrop-blur-[2px] h-4 flex items-center justify-end px-2 gap-2">
              <span className="text-[7px] font-code uppercase text-black/40">Map data ©2026 Google</span>
              <span className="text-[7px] font-code uppercase text-black/40">Terms</span>
              <span className="text-[7px] font-code uppercase text-black/40">Report a map error</span>
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
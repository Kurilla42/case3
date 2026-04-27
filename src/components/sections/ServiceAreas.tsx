'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Navigation, Plus, Minus, Layers, Maximize2 } from 'lucide-react';
import { OFFICES, SERVICE_CITIES } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

const mapMarkers = [
  { id: 1, top: '42%', left: '38%', label: 'Big Lake', active: true },
  { id: 2, top: '65%', left: '58%', label: 'Minneapolis', active: false },
  { id: 3, top: '72%', left: '72%', label: 'St. Paul', active: false },
  { id: 4, top: '55%', left: '52%', label: 'Plymouth', active: false },
];

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
            className="lg:col-span-5 relative aspect-[4/5] bg-[#e5e3df] border border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Map Background (Street map feel with filters) */}
            <div className="absolute inset-0 w-full h-full grayscale-[1] contrast-[1.1] brightness-[0.95] opacity-80">
              <Image 
                src="https://picsum.photos/seed/twincities-map/800/1000" 
                alt="Stylized Street Map" 
                fill 
                className="object-cover"
                data-ai-hint="street map"
              />
            </div>

            {/* Map Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            {/* Map Markers (Pins) */}
            {mapMarkers.map((marker) => (
              <div 
                key={marker.id}
                className="absolute z-20 group/marker"
                style={{ top: marker.top, left: marker.left }}
              >
                <div className={`relative flex items-center justify-center w-4 h-4 rounded-full border-2 border-white shadow-lg transition-transform hover:scale-125 cursor-pointer ${marker.active ? 'bg-primary' : 'bg-black'}`}>
                  {marker.active && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                  )}
                  {/* Tooltip for marker */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white font-code text-[8px] uppercase tracking-widest whitespace-nowrap opacity-0 group-hover/marker:opacity-100 transition-opacity">
                    {marker.label}
                  </div>
                </div>
              </div>
            ))}

            {/* Top Right Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-1 z-30">
              <div className="bg-white border border-black/10 shadow-sm flex flex-col">
                <button className="p-2 hover:bg-muted transition-colors border-b border-black/5"><Plus size={14} /></button>
                <button className="p-2 hover:bg-muted transition-colors"><Minus size={14} /></button>
              </div>
              <button className="bg-white border border-black/10 p-2 shadow-sm hover:bg-muted transition-colors"><Maximize2 size={14} /></button>
            </div>

            {/* Map Style Toggle */}
            <div className="absolute bottom-8 left-4 z-30 flex items-center gap-2">
              <div className="relative w-12 h-12 border-2 border-white shadow-md overflow-hidden rounded-sm cursor-pointer group/sat">
                <Image src="https://picsum.photos/seed/satellite-view/100/100" alt="Satellite" fill className="object-cover grayscale transition-transform group-hover/sat:scale-110" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Layers size={14} className="text-white" />
                </div>
              </div>
            </div>

            {/* Primary Location Card (Matches Screenshot) */}
            <div className="absolute top-4 left-4 w-64 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex justify-between items-start z-30">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h4 className="font-headline text-[14px] uppercase tracking-tight leading-none text-black">BIG LAKE HEADQUARTERS</h4>
                </div>
                <p className="font-body text-[11px] text-muted-foreground uppercase font-medium">Main Office & Dispatch</p>
                <p className="font-code text-[9px] text-primary font-black uppercase tracking-widest pt-1">Open 24/7</p>
              </div>
              <div className="flex gap-3 text-black/40">
                <Navigation size={16} className="cursor-pointer hover:text-primary transition-colors" />
                <ExternalLink size={16} className="cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>

            {/* Bottom Technical Footer */}
            <div className="absolute bottom-0 right-0 left-0 bg-white/60 backdrop-blur-[2px] h-5 flex items-center justify-between px-3 z-30">
              <div className="flex gap-2">
                <span className="text-[7px] font-code uppercase text-black/50">45.3341° N, 93.7483° W</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[7px] font-code uppercase text-black/40">Map data ©2026 Google</span>
                <span className="text-[7px] font-code uppercase text-black/40">Terms</span>
                <span className="text-[7px] font-code uppercase text-black/40">Report an error</span>
              </div>
            </div>
          </motion.div>

          {/* City Table Column (Right 7) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-0 border-y border-black/10">
              {SERVICE_CITIES.map((city) => (
                <div 
                  key={city.name}
                  className="flex justify-between items-center border-b border-black/10 py-3 group hover:bg-black/[0.02] transition-colors px-2"
                >
                  <span className="font-code text-[11px] font-black tracking-tighter uppercase">
                    {city.name}
                  </span>
                  <span className="font-code text-[9px] text-muted-foreground/60">
                    {city.zips.split('—')[0].split(',')[0]}...
                  </span>
                </div>
              ))}
            </div>
            
            <div className="pt-2">
              <p className="font-code text-[11px] uppercase font-black text-muted-foreground">
                + 32 more service locations · <Link href="#" className="text-primary underline hover:text-primary/80 transition-colors">ZIP lookup →</Link>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {OFFICES.map((office, idx) => (
                <div key={idx} className="bg-white border border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <h3 className="text-lg font-headline mb-3 uppercase tracking-tight">{office.name}</h3>
                  <p className="font-code text-[10px] font-black text-muted-foreground leading-relaxed uppercase tracking-widest">
                    {office.address}<br />
                    {office.city}, {office.state} {office.zip}
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <p className="font-code text-[12px] text-primary font-black uppercase">
                      {office.phone}
                    </p>
                    <div className="h-px flex-1 bg-black/5" />
                    <Navigation size={14} className="text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
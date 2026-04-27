'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Droplet, Waves, Settings, Flame, Search, Building2 } from 'lucide-react';

const services = [
  { id: '01', icon: Droplet, label: "REPAIR", title: "Pipe Repair", desc: "Burst lines, slow leaks, and hidden seepage. We re-route, re-pipe, or patch — your choice.", price: "189", note: "Most-booked 2 AM – 6 AM" },
  { id: '02', icon: Settings, label: "SWAP", title: "Water Heaters", desc: "Tank or tankless, gas or electric. Same-day install if we have it on the truck. Old unit hauled.", price: "1,200" },
  { id: '03', icon: Waves, label: "CLEAR", title: "Drain Clearing", desc: "Camera inspection included. Snake, hydrojet, or rooter — we use what the clog deserves.", price: "149", prefix: "Flat" },
  { id: '04', icon: Flame, label: "FIX", title: "Fixtures & Faucets", desc: "Toilets, faucets, garbage disposals, shutoff valves. The boring ones we do well.", price: "129" },
  { id: '05', icon: Search, label: "FIND", title: "Leak Detection", desc: "Sub-slab, behind walls, in the yard. Non-invasive listening tools before we cut into anything.", price: "275", note: "Free if we do the repair same visit" },
  { id: '06', icon: Building2, label: "B2B", title: "Commercial", desc: "Restaurants, salons, clinics. NET-30 terms, single dispatch line, multi-location accounts.", price: "BID", prefix: "Call for" },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-8 mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-ink font-extrabold uppercase leading-[1.02] tracking-[-0.015em]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              CORE SERVICES
            </h2>
            <p className="font-body text-[15px] font-medium text-graphite uppercase tracking-widest">
              6 things we do · all flat-rate · all in writing
            </p>
          </div>
          <span className="font-body text-[12px] uppercase text-graphite font-semibold tracking-[0.12em]">REF: SEC-02</span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-black p-8 group relative flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="font-body text-[11px] uppercase font-semibold tracking-[0.1em]">
                    <span className="text-brass">{s.id} /</span> <span className="text-graphite uppercase">{s.label}</span>
                  </span>
                  <s.icon className="h-5 w-5 text-ink" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] font-headline font-extrabold leading-[1.15] uppercase">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-[15px] leading-[1.55]">{s.desc}</p>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-black border-dashed flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="font-body text-[12px] font-medium text-ink-soft">{s.prefix || "Starts at"}</span>
                  <span className="font-code text-[20px] font-medium text-brass leading-none mt-1">
                    {s.price === "BID" ? "QUOTE" : `$${s.price}`}
                  </span>
                  {s.note && (
                    <span className="font-code text-[9px] uppercase font-black text-muted-foreground/60 mt-2 tracking-tighter">
                      · {s.note}
                    </span>
                  )}
                </div>
                <div className="w-8 h-8 border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none">
                  <Plus className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

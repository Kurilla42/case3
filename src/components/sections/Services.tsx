'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Droplet, Waves, Settings, Flame, Search, Building2 } from 'lucide-react';

const services = [
  { id: '01', icon: Droplet, title: "PIPE REPAIR", desc: "Burst pipes, slow leaks, and complete repiping. We use industrial-grade materials.", price: "120" },
  { id: '02', icon: Settings, title: "WATER HEATERS", desc: "Installation and repair of tankless and traditional systems. Same-day service available.", price: "850" },
  { id: '03', icon: Waves, title: "DRAIN CLEARING", desc: "Heavy-duty snaking and hydro-jetting to clear the most stubborn blockages.", price: "150" },
  { id: '04', icon: Flame, title: "FIXTURES", desc: "Faucets, toilets, and sinks installed to spec. Commercial and residential.", price: "110" },
  { id: '05', icon: Search, title: "LEAK DETECTION", desc: "Advanced acoustic and thermal imaging to find hidden leaks behind walls or slabs.", price: "200" },
  { id: '06', icon: Building2, title: "COMMERCIAL", desc: "Large-scale plumbing infrastructure maintenance, grease traps, and code compliance.", price: "BID" },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background px-4">
      <div className="container mx-auto">
        <div className="flex items-end justify-between border-b-2 border-black pb-8 mb-12">
          <h2 className="text-ink font-extrabold uppercase leading-[1.02] tracking-[-0.015em]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            CORE SERVICES
          </h2>
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
                    <span className="text-brass">{s.id}</span> <span className="text-graphite">/ SERVICE</span>
                  </span>
                  <s.icon className="h-5 w-5 text-ink" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] font-headline font-extrabold leading-[1.15] uppercase">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-[15px] leading-[1.55]">{s.desc}</p>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-black border-dashed flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-body text-[12px] font-medium text-ink-soft">Starts at</span>
                  <span className="font-code text-[20px] font-medium text-brass leading-none">
                    {s.price === "BID" ? "CALL FOR BID" : `$${s.price}`}
                  </span>
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

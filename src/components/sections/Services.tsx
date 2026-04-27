'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Droplet, Snowflake, Flame, Waves, Settings, Search, Building2 } from 'lucide-react';

const services = [
  { id: '01', icon: Droplet, title: "PIPE REPAIR", desc: "Burst pipes, slow leaks, and complete repiping. We use industrial-grade materials.", price: "STARTING AT $120" },
  { id: '02', icon: Settings, title: "WATER HEATERS", desc: "Installation and repair of tankless and traditional systems. Same-day service available.", price: "STARTING AT $850" },
  { id: '03', icon: Waves, title: "DRAIN CLEARING", desc: "Heavy-duty snaking and hydro-jetting to clear the most stubborn blockages.", price: "FLAT RATE $150" },
  { id: '04', icon: Flame, title: "FIXTURES", desc: "Faucets, toilets, and sinks installed to spec. Commercial and residential.", price: "HOURLY $110/HR" },
  { id: '05', icon: Search, title: "LEAK DETECTION", desc: "Advanced acoustic and thermal imaging to find hidden leaks behind walls or slabs.", price: "INSPECTION $200" },
  { id: '06', icon: Building2, title: "COMMERCIAL", desc: "Large-scale plumbing infrastructure maintenance, grease traps, and code compliance.", price: "CALL FOR BID" },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background px-4">
      <div className="container mx-auto">
        <div className="flex items-end justify-between border-b-2 border-black pb-8 mb-12">
          <h2 className="text-black font-black leading-none m-0">CORE SERVICES</h2>
          <span className="font-code text-[11px] uppercase text-muted-foreground font-black tracking-widest">REF: SEC-02</span>
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
                  <span className="font-code text-[11px] text-muted-foreground font-black">{s.id}</span>
                  <s.icon className="h-5 w-5 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-headline m-0 uppercase">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-black border-dashed flex justify-between items-center">
                <span className="font-code text-[11px] uppercase font-black tracking-widest">{s.price}</span>
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

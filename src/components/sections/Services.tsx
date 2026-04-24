'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: "Plumbing Repair", desc: "Leaky faucets to burst pipes. Fixed fast." },
  { title: "AC Installation", desc: "Energy efficient cooling for MN summers." },
  { title: "Furnace Rescue", desc: "No heat emergency? We're on the way." },
  { title: "Water Heaters", desc: "Tankless or traditional. Hot water tonight." },
  { title: "Drain Cleaning", desc: "Clear clogs with high-pressure jetting." },
  { title: "Boiler Service", desc: "Specialized care for older St. Paul homes." },
];

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="leading-none">EVERY PIPE, DRAIN, AND WATER HEATER <br/><span className="text-primary">WE TOUCH, WE OWN.</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 border border-black/5 shadow-sm group hover:border-primary transition-colors cursor-pointer"
            >
              <h3 className="text-2xl font-headline mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-muted-foreground font-body leading-tight">{s.desc}</p>
              <div className="mt-8 flex items-center gap-2 font-code text-[10px] font-black text-primary">
                LEARN MORE <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

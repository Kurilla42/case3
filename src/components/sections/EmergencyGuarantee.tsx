'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export const EmergencyGuarantee = () => {
  return (
    <section className="bg-primary py-24 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8">
          <p className="font-code text-xs uppercase tracking-[0.4em] font-black text-white/60">OUR NAME ON THE LINE. LITERALLY.</p>
          <h2 className="text-white leading-[0.85] font-black italic">
            IF OUR PLUMBER ISN'T AT YOUR DOOR WITHIN <span className="text-dark not-italic underline">90 MINUTES</span>, WE PAY THE DIAGNOSTIC.
          </h2>
          <p className="text-2xl font-body max-w-2xl text-white/80">
            We're homeowners too. We know waiting for a tech is stressful. That's why we're the only ones in the Twin Cities that pay you for our tardiness.
          </p>
        </div>
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <motion.a 
            href={`tel:${COMPANY_INFO.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-64 h-64 bg-white rounded-full flex flex-col items-center justify-center text-primary shadow-2xl border-8 border-primary/20"
          >
            <Phone size={48} className="mb-4" fill="currentColor" />
            <span className="font-headline text-2xl">CALL NOW</span>
            <span className="font-code text-xs font-black">{COMPANY_INFO.phone}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

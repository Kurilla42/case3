'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/lib/data';

export const FinalCta = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden px-4 py-24">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />

      <div className="container mx-auto max-w-6xl relative z-10 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-white font-headline leading-[0.9] tracking-tighter uppercase" style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}>
            ENOUGH READING.<br />CALL US.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            asChild
            className="h-14 px-8 text-sm font-code bg-black text-white hover:bg-black/90 rounded-none border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Phone className="mr-2 h-3 w-3 fill-current" />
              {COMPANY_INFO.phone}
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 text-sm font-code border border-white text-white bg-transparent hover:bg-white/10 rounded-none uppercase tracking-widest"
          >
            Book Online B+'
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-8"
        >
          <p className="font-code text-[10px] uppercase tracking-[0.2em] text-black/40 font-black">
            DISPATCHER ONLINE B- REPLY IN 2 MIN B- 7 DAYS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

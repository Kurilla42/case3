'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/lib/data';

export const FinalCta = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden px-4 py-24">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />

      <div className="container mx-auto max-w-6xl relative z-10 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-signal-ink font-headline font-extrabold leading-[0.95] tracking-tighter uppercase" style={{ fontSize: 'clamp(4rem, 14vw, 9rem)' }}>
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
            className="h-14 px-8 text-[16px] font-headline font-bold bg-black text-white hover:bg-black/90 rounded-none border border-black shadow-[4px_4px_0px_0px_rgba(251,248,242,0.2)] active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase tracking-[0.02em]"
          >
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Phone className="mr-2 h-3 w-3 fill-current" />
              {COMPANY_INFO.phone}
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 text-[16px] font-headline font-bold border border-white text-white bg-transparent hover:bg-white/10 rounded-none uppercase tracking-widest"
          >
            Book Online
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-8"
        >
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-signal-ink/40 font-bold">
            DISPATCHER ONLINE • REPLY IN 2 MIN • 7 DAYS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

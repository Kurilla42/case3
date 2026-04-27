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
            Enough reading.<br />Call us.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <a 
            href={`tel:${COMPANY_INFO.phone}`}
            className="text-signal-ink font-code text-4xl md:text-6xl font-black tracking-tighter hover:text-white transition-colors"
          >
            {COMPANY_INFO.phone} · 24/7
          </a>
          <p className="font-body text-xl text-signal-ink/80">
            Or <button className="underline hover:text-white transition-colors">book online →</button> if it's not bleeding.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

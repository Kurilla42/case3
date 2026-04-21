'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/lib/data';

export const FinalCta = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden px-4 py-24">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="font-code text-xs uppercase tracking-[0.3em] text-white font-black">
            LAST THING
          </p>
          <h2 className="text-white font-headline leading-[0.9] tracking-tighter uppercase" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
            You've read enough. <br /> Call us.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed"
        >
          We answer the phone. A human. Between 7:30am and 4:30pm, usually in 3 rings. 
          After hours, voicemail gets returned in under 20 minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            size="lg"
            asChild
            className="h-20 px-12 text-xl font-headline bg-white text-primary hover:bg-white/95 w-full sm:w-auto shadow-2xl"
          >
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Phone className="mr-3 h-6 w-6" />
              {COMPANY_INFO.phone}
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-20 px-10 text-xl font-body font-bold border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
          >
            Book Online Instead <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-12 border-t border-white/20"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 font-code text-[10px] md:text-xs uppercase tracking-widest text-white/60 font-black">
            <span>LICENSED MN</span>
            <span className="opacity-40">•</span>
            <span>BBB A+</span>
            <span className="opacity-40">•</span>
            <span>GOOGLE 4.9</span>
            <span className="opacity-40">•</span>
            <span>BIG LAKE + TWIN CITIES</span>
            <span className="opacity-40">•</span>
            <span>SINCE 2012</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

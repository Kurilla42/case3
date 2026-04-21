'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Siren, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { cn } from '@/lib/utils';

export const EmergencyStrip = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient & Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D94F2E] to-[#E63946]" />
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          width: '50%'
        }}
      />

      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className={cn(
          "relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8",
          "h-auto md:h-[72px] py-4 md:py-0 px-4",
          "cursor-pointer md:cursor-default"
        )}
      >
        <div className="flex items-center gap-3">
          <Siren className="h-6 w-6 text-white animate-pulse" />
          <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-2 text-center md:text-left">
            <span className="font-headline text-white text-base md:text-xl lg:text-2xl tracking-tight leading-none uppercase">
              MINNESOTA COLD GUARANTEE
            </span>
            <span className="hidden md:inline text-white/60">—</span>
            <span className="font-body font-bold text-white/90 text-sm md:text-lg uppercase">
              SAME DAY OR $100 OFF
            </span>
          </div>
        </div>

        <motion.div
          className="md:block"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="bg-white text-[#D94F2E] px-6 py-2 rounded-full font-headline text-sm md:text-base flex items-center gap-2 shadow-xl hover:bg-white/95 transition-colors cursor-pointer">
            <Phone className="h-4 w-4" />
            CALL {COMPANY_INFO.phone}
          </div>
        </motion.div>
      </a>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

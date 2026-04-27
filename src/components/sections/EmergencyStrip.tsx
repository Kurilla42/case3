'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

const tickerItems = [
  "WATER HEATER INSTALL: $850+",
  "DRAIN CLEARING: $150",
  "LEAK DETECTION: $120/HR",
  "FURNACE TUNE-UP: $89",
  "EMERGENCY DISPATCH: READY",
];

export const EmergencyStrip = () => {
  return (
    <div className="relative bg-black h-14 flex items-center overflow-hidden border-b border-black">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="flex items-center px-8">
                <span className="font-code text-[11px] uppercase font-black text-white tracking-widest">
                  {item}
                </span>
                <Zap className="h-3 w-3 text-primary ml-16 fill-current" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
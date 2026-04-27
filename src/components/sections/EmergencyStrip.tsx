'use client';

import React from 'react';
import { Zap } from 'lucide-react';

const tickerItems = [
  "NO SURPRISE PRICING",
  "WATER HEATER INSTALL: $850+",
  "DRAIN CLEARING: $150",
  "LEAK DETECTION: $120/HR",
  "EMERGENCY DISPATCH: READY",
  "FURNACE TUNE-UP: $89",
];

export const EmergencyStrip = () => {
  return (
    <div className="relative bg-[#1a2230] h-14 flex items-center overflow-hidden border-y border-black">
      {/* Container for the marquee animation */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render multiple sets for seamless looping */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <div className="flex items-center px-12">
                  <Zap className="h-4 w-4 text-primary fill-current mr-8" />
                  <span className="font-code text-[11px] uppercase font-black text-white tracking-[0.2em]">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

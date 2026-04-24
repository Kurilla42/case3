'use client';

import React from 'react';

const stats = [
  { val: "24YRS", label: "COMBINED EXPERIENCE" },
  { val: "3,412", label: "JOBS COMPLETED" },
  { val: "47 MIN", label: "AVG ARRIVAL TIME" },
  { val: "11,400", label: "GALLONS PUMPED" },
];

export const StatsStats = () => {
  return (
    <div className="bg-background py-20 border-b">
      <div className="container mx-auto px-4 flex flex-wrap justify-between gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none">{stat.val}</h3>
            <p className="font-code text-[10px] uppercase font-black tracking-widest text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

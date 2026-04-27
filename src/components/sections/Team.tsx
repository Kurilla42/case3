'use client';

import React from 'react';
import Image from 'next/image';
import { TECHNICIANS } from '@/lib/data';

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-[#F5F1EA] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-code text-[11px] uppercase tracking-widest text-muted-foreground font-black mb-4">
            05 / TEAM
          </p>
          <h2 className="text-black font-black leading-[0.85] tracking-tighter uppercase m-0" style={{ fontSize: 'clamp(3rem, 6vw, 7rem)' }}>
            THE PEOPLE WHO'LL<br />ACTUALLY SHOW UP.
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-8 max-w-2xl leading-relaxed">
            Every one of our techs is background-checked, licensed, and has been with 
            Thelen for 3+ years. <span className="text-black font-bold italic">No subcontractors ever.</span>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECHNICIANS.map((tech) => (
            <div 
              key={tech.id} 
              className="bg-white border border-black flex flex-col group cursor-pointer transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Portrait Header */}
              <div className="relative aspect-[3/4] overflow-hidden border-b border-black">
                <Image
                  src={tech.photoUrl}
                  alt={tech.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Diagonal Stripes Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none mix-blend-multiply" 
                  style={{
                    backgroundColor: tech.color,
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)`
                  }}
                />

                {/* Portrait Technical Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-code text-[8px] uppercase font-black text-white/60 tracking-widest truncate">
                    PORTRAIT P'B- PLACEHOLDER P'B- {tech.filename}
                  </p>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-headline text-2xl tracking-tighter uppercase leading-none mb-1">
                      {tech.name}
                    </h3>
                    <p className="font-code text-[10px] uppercase font-black text-primary tracking-widest">
                      {tech.role}
                    </p>
                  </div>
                  
                  <p className="font-body text-sm text-black leading-relaxed">
                    {tech.bio}
                  </p>
                </div>

                {/* Footer Row */}
                <div className="pt-8 flex justify-between items-end">
                  <p className="font-code text-[10px] uppercase font-black text-muted-foreground/60 tracking-widest">
                    {tech.since}
                  </p>
                  <p className="font-code text-[10px] uppercase font-black text-black tracking-widest">
                    {tech.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative bg-background border-b border-black overflow-hidden px-4 py-16 lg:py-24">
      <div className="container mx-auto grid lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-12">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-white border border-black">
            <AlertTriangle className="h-4 w-4 text-primary" />
            <span className="font-code text-[11px] uppercase font-black tracking-widest">24/7 Dispatch Ready</span>
          </div>

          <h1 className="text-black font-black leading-[0.85] tracking-tighter">
            STUCK WITH A LEAK?<br />
            CALL THELEN.
          </h1>

          <div className="space-y-2">
            <p className="font-code text-[11px] uppercase tracking-widest text-muted-foreground font-black">Direct Line to Foreman:</p>
            <p className="text-4xl md:text-5xl font-headline tracking-tighter">{COMPANY_INFO.phone}</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              className="h-16 px-10 bg-primary text-white font-headline text-lg rounded-none border-2 border-black hover:bg-primary/90 flex gap-4"
              asChild
            >
              <a href={`tel:${COMPANY_INFO.phone}`}>
                EMERGENCY DISPATCH <span className="text-xl">→</span>
              </a>
            </Button>
            <Button 
              variant="outline"
              className="h-16 px-10 border-2 border-black bg-white text-black font-headline text-lg rounded-none hover:bg-muted"
            >
              BOOK ROUTINE
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full border-2 border-black bg-black group overflow-hidden">
             <Image 
                src="https://picsum.photos/seed/crew/800/1000" 
                alt="Thelen Crew" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="plumbing team"
             />
             <div className="absolute bottom-4 left-4 right-4 bg-white border border-black p-3 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-success" />
                <span className="font-code text-[11px] uppercase font-black tracking-widest">Licensed & Insured</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
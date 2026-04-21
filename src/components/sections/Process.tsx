'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Phone, Search, CheckCircle, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: '01',
    title: 'CALL OR CLICK',
    description: 'Tell us the issue. 30 seconds max. No upfront quote form BS.',
    icon: Phone,
  },
  {
    id: '02',
    title: 'WE DIAGNOSE',
    description: "Tech shows up when we said. Assesses in person. Real price, not 'starting at'.",
    icon: Search,
  },
  {
    id: '03',
    title: 'YOU APPROVE',
    description: 'Full breakdown before any work. You say go or walk. Either way, diagnosis is free.',
    icon: CheckCircle,
  },
  {
    id: '04',
    title: 'WE FIX IT',
    description: 'Most jobs same-day. We clean up. You get a 1-year workmanship warranty on everything.',
    icon: Wrench,
  },
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineScale = useSpring(useTransform(scrollYProgress, [0.2, 0.6], [0, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <p className="font-code uppercase text-xs tracking-widest text-muted-foreground font-black mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-foreground leading-none">
            Four steps. <br className="hidden md:block" /> That's the whole thing.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-[2px]">
            <div className="w-full h-full border-t-2 border-dashed border-muted/30" />
            <motion.div 
              className="absolute top-0 left-0 h-full border-t-2 border-dashed border-primary"
              style={{ scaleX: lineScale, originX: 0 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Mobile Connecting Line */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 bottom-[-40px] w-[2px]">
                    <div className="h-full border-l-2 border-dashed border-muted/30" />
                    <motion.div 
                      className="absolute top-0 left-0 w-full border-l-2 border-dashed border-primary"
                      style={{ scaleY: lineScale, originY: 0 }}
                    />
                  </div>
                )}

                {/* Step Number (Background) */}
                <span 
                  className="absolute -top-12 -left-4 font-headline text-[8rem] md:text-[10rem] leading-none opacity-5 pointer-events-none select-none transition-opacity group-hover:opacity-10"
                  style={{ WebkitTextStroke: '2px currentColor', color: 'transparent' }}
                >
                  {step.id}
                </span>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <div className="bg-white w-20 h-20 rounded-2xl shadow-xl flex items-center justify-center border border-black/5 group-hover:scale-110 transition-transform duration-500">
                    <step.icon size={40} strokeWidth={1} className="text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-headline tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-[280px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Row */}
        <div className="mt-24 pt-12 border-t border-muted/20 text-center">
          <div className="inline-flex flex-wrap justify-center gap-x-6 gap-y-4 font-code text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-black">
            <span>LICENSED MN</span>
            <span className="opacity-20 hidden sm:inline">|</span>
            <span>INSURED</span>
            <span className="opacity-20 hidden sm:inline">|</span>
            <span>BBB A+</span>
            <span className="opacity-20 hidden sm:inline">|</span>
            <span>BACKGROUND-CHECKED TECHS</span>
            <span className="opacity-20 hidden sm:inline">|</span>
            <span>1-YEAR WARRANTY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

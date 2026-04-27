'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Plus } from 'lucide-react';
import { FAQS } from '@/lib/data';
import { cn } from '@/lib/utils';

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background overflow-hidden border-t">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-16">
          <p className="font-code text-[11px] uppercase tracking-widest text-muted-foreground font-black pt-4">
            10 / FAQ
          </p>
          <h2 className="text-black font-black leading-[0.85] tracking-tighter uppercase m-0 flex-1" style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}>
            THE QUESTIONS <br />
            WE GET <span className="text-primary">EVERY</span> <br />
            WEEK.
          </h2>
        </div>

        <div className="border-y-[1px] border-black">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id} 
                className="border-b border-black/10 last:border-none"
              >
                <AccordionTrigger className={cn(
                  "hover:no-underline group py-8 [&[data-state=open]>div>div]:rotate-45",
                  "[&>svg]:hidden" // Hide the default chevron
                )}>
                  <div className="flex items-center justify-between w-full">
                    <span className="font-headline text-lg md:text-xl tracking-tight uppercase text-left pr-8">
                      {faq.question}
                    </span>
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300">
                      <Plus className="h-4 w-4 text-primary" strokeWidth={3} />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-base lg:text-lg leading-relaxed max-w-3xl pb-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

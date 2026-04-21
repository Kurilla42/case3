'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Plus } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '@/lib/data';
import { cn } from '@/lib/utils';

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background overflow-hidden border-t">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <p className="font-code uppercase text-xs tracking-widest text-muted-foreground font-black">
                BEFORE YOU ASK
              </p>
              <h2 className="text-foreground leading-[0.95] font-black tracking-tighter">
                The questions we get every week.
              </h2>
            </div>
            
            <motion.div 
              className="bg-white p-8 rounded-3xl border border-black/5 shadow-xl space-y-4 relative overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Phone size={80} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-headline relative z-10">Not answered?</h3>
              <p className="text-sm font-body text-muted-foreground relative z-10">
                Our office team is local and actually answers the phone.
              </p>
              <Button 
                className="w-full h-12 bg-dark text-white font-headline text-xs tracking-widest uppercase hover:bg-dark/90 relative z-10"
                asChild
              >
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  Call us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full divide-y divide-black/10">
              {FAQS.map((faq, index) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id} 
                  className="border-none py-2 first:pt-0"
                >
                  <AccordionTrigger className={cn(
                    "hover:no-underline group text-left",
                    "[&[data-state=open]]:pb-4"
                  )}>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-headline text-lg md:text-xl lg:text-2xl tracking-tight pr-8">
                        {faq.question}
                      </span>
                      <div className="shrink-0 w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center transition-transform duration-300 group-data-[state=open]:rotate-45">
                        <Plus className="h-5 w-5 text-foreground" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-base lg:text-lg leading-relaxed max-w-prose pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

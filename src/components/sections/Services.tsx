
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const services = [
  {
    number: '01',
    title: 'PLUMBING',
    description: 'Leaky faucets, burst pipes, water heaters. Residential focus.',
    price: '$149',
    imageId: 'plumbing-service'
  },
  {
    number: '02',
    title: 'HVAC',
    description: "Furnace dying mid-January? AC down in July? We carry most parts on-truck.",
    price: '$189',
    imageId: 'hvac-service'
  },
  {
    number: '03',
    title: 'DRAIN CLEANING',
    description: 'Slow drains, backed-up sewers, camera inspection if needed.',
    price: '$129',
    imageId: 'drain-service'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background px-4">
      <div className="container mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-code uppercase text-xs tracking-widest text-muted-foreground font-bold mb-4">
            WHAT WE FIX
          </p>
          <h2 className="text-foreground leading-none mb-6">
            Three things we're <br className="hidden md:block" /> known for
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-body leading-relaxed">
            Emergency repair, planned installs, or that weird pipe noise that's bugging you — 
            we show up, diagnose, fix. <span className="text-foreground font-semibold">No sales pitch on the driveway.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === service.imageId);
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer aspect-[4/5]"
              >
                {/* Image Section (60%) */}
                <div className="h-[60%] relative overflow-hidden">
                  <Image
                    src={imageData?.imageUrl || 'https://picsum.photos/seed/1/800/1000'}
                    alt={service.title}
                    fill
                    className="object-cover grayscale-[0.2] transition-transform duration-700 ease-out group-hover:scale-105"
                    data-ai-hint={imageData?.imageHint || 'service repair'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content Section (40%) */}
                <div className="h-[40%] bg-white p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-code text-xs text-muted-foreground font-black tracking-widest">
                      {service.number}
                    </span>
                    <h3 className="text-2xl font-headline text-foreground leading-none">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <div className="h-px bg-border w-full my-4" />
                    <div className="flex items-center justify-between">
                      <div className="font-code text-sm">
                        <span className="text-muted-foreground">Starting at</span>
                        <span className="ml-2 font-black text-foreground">{service.price}</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary font-bold text-sm transition-all group-hover:gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 py-4 px-8 rounded-full border border-border bg-white shadow-sm">
            <span className="text-muted-foreground font-body text-base">Not sure what you need?</span>
            <Button 
              variant="link" 
              className="p-0 h-auto text-primary font-bold text-base hover:no-underline flex items-center gap-2 group"
            >
              Get Free Estimate
              <span className="text-muted-foreground font-normal text-sm group-hover:text-primary transition-colors">
                — takes 60 seconds
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

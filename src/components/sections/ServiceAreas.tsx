'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, OFFICES } from '@/lib/data';
import { cn } from '@/lib/utils';

const cities = [
  "Minneapolis", "St. Paul", "Big Lake",
  "Brooklyn Center", "Elk River", "Plymouth",
  "Maple Grove", "Blaine", "Coon Rapids",
  "Anoka", "Andover", "Buffalo"
];

export const ServiceAreas = () => {
  return (
    <section id="areas" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="font-code uppercase text-xs tracking-widest text-muted-foreground font-black mb-4">
            WE SHOW UP HERE
          </p>
          <h2 className="text-foreground leading-none">
            Serving the Twin Cities <br className="hidden md:block" /> and Central Minnesota.
          </h2>
        </div>

        {/* 12-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Map Column (Left 7) */}
          <motion.div 
            className="lg:col-span-7 relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-black/5 shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180491.13961555027!2d-93.85662754999999!3d45.3304191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b365859733c707%3A0x6734139e55938d27!2sBig%20Lake%2C%20MN!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1) opacity(0.9)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay Gradient to blend with page slightly */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10" />
          </motion.div>

          {/* City List Column (Right 5) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="font-code text-[10px] uppercase tracking-widest text-primary font-black mb-6">
                PRIMARY SERVICE AREAS
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
                {cities.map((city, idx) => (
                  <motion.div 
                    key={city}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
                      <span className="font-display text-lg md:text-xl tracking-tight leading-none uppercase">
                        {city}
                      </span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-muted/20">
              <p className="text-sm font-body text-muted-foreground mb-4 italic">
                Not seeing your city? We probably still come out.
              </p>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 font-headline text-primary hover:underline group"
              >
                CALL US {COMPANY_INFO.phone}
                <span className="text-muted-foreground group-hover:text-primary transition-colors">— takes 30s</span>
              </a>
            </div>
          </div>
        </div>

        {/* Address Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICES.map((office, idx) => (
            <motion.div
              key={office.name}
              className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4">
                  <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline mb-1 uppercase">{office.name}</h3>
                    <p className="font-body text-muted-foreground leading-tight">
                      {office.address}, {office.city}, {office.state} {office.zip}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm md:text-right">
                  <div className="space-y-1">
                    <p className="font-code text-[10px] uppercase font-black text-muted-foreground/60 tracking-widest flex items-center md:justify-end gap-2">
                      <Clock className="h-3 w-3" /> OFFICE HOURS
                    </p>
                    <p className="font-body font-bold text-foreground">
                      Mon-Fri 7:30–4:30
                    </p>
                    <p className="font-body text-destructive font-black text-xs uppercase italic">
                      Sat-Sun Emergency Only
                    </p>
                  </div>
                  <div className="pt-2">
                    <a 
                      href={`tel:${office.phone}`}
                      className="font-headline text-lg hover:text-primary transition-colors flex items-center md:justify-end gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      {office.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

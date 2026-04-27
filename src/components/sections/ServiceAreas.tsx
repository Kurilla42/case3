'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { COMPANY_INFO, OFFICES, SERVICE_CITIES } from '@/lib/data';

export const ServiceAreas = () => {
  // Split cities into two columns
  const midPoint = Math.ceil(SERVICE_CITIES.length / 2);
  const leftCol = SERVICE_CITIES.slice(0, midPoint);
  const rightCol = SERVICE_CITIES.slice(midPoint);

  return (
    <section id="areas" className="py-24 bg-background overflow-hidden border-t border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="font-code uppercase text-[11px] tracking-widest text-muted-foreground font-black mb-4">
            09 / GEOGRAPHY
          </p>
          <h2 className="text-black font-black leading-[0.85] tracking-tighter uppercase m-0" style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}>
            WE SHOW UP HERE.
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6 max-w-2xl">
            Serving the Twin Cities and Central Minnesota with industrial-strength plumbing and HVAC care.
          </p>
        </div>

        {/* 12-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Map Column (Left 7) */}
          <motion.div 
            className="lg:col-span-7 relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] bg-black border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
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
          </motion.div>

          {/* City Table Column (Right 5) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-12">
              <div className="space-y-0">
                <div className="flex flex-col">
                  {SERVICE_CITIES.map((city, idx) => (
                    <div 
                      key={city.name}
                      className="flex justify-between items-end border-b border-black/10 py-3 group hover:bg-black/[0.02] transition-colors"
                    >
                      <span className="font-code text-xs font-black tracking-tight uppercase">
                        {city.name}
                      </span>
                      <span className="font-code text-[10px] text-muted-foreground font-black tracking-widest flex items-center gap-2">
                        {city.zips}
                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-black/10">
              <p className="font-code text-[11px] uppercase font-black text-muted-foreground mb-4">
                Not listed? Call <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary underline">{COMPANY_INFO.phone}</a>
              </p>
              <p className="font-code text-[10px] uppercase font-black text-muted-foreground/60 leading-relaxed">
                We cover Stillwater, Hudson, and most of Dakota County too. If you're within 45 miles of the Metro, we're likely dispatched near you right now.
              </p>
            </div>
          </div>
        </div>

        {/* Address Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICES.map((office, idx) => (
            <motion.div
              key={office.name}
              className="bg-white border border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4">
                  <div className="bg-primary border border-black w-12 h-12 flex items-center justify-center text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline mb-1 uppercase tracking-tight">{office.name}</h3>
                    <p className="font-code text-xs font-black text-muted-foreground leading-tight uppercase tracking-widest">
                      {office.address}, {office.city}, {office.state} {office.zip}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm md:text-right">
                  <div className="space-y-1">
                    <p className="font-code text-[10px] uppercase font-black text-muted-foreground/60 tracking-widest flex items-center md:justify-end gap-2">
                      <Clock className="h-3 w-3" /> HOURS
                    </p>
                    <p className="font-code text-xs font-black uppercase">
                      Mon-Fri 7:30–4:30
                    </p>
                    <p className="font-code text-[10px] text-primary font-black uppercase italic tracking-widest">
                      Sat-Sun Emergency Only
                    </p>
                  </div>
                  <div className="pt-2">
                    <a 
                      href={`tel:${office.phone}`}
                      className="font-headline text-lg hover:text-primary transition-colors flex items-center md:justify-end gap-2"
                    >
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

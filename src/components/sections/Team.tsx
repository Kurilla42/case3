'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { RotateCcw, ShieldCheck, Star, Award, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TECHNICIANS } from '@/lib/data';
import { cn } from '@/lib/utils';

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <p className="font-code uppercase text-xs tracking-widest text-muted-foreground font-black mb-4">
            MEET THE CREW
          </p>
          <h2 className="text-foreground leading-none mb-6">
            The people who'll <br className="hidden md:block" /> actually show up.
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body leading-relaxed">
            Every one of our techs is background-checked, licensed, and has been with 
            Thelen for 3+ years. <span className="text-foreground font-bold italic">No subcontractors ever.</span>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {TECHNICIANS.map((tech) => (
            <TeamCard key={tech.id} tech={tech} />
          ))}
        </div>

        {/* Trust signal footer */}
        <div className="mt-20 pt-10 border-t border-muted/20 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3 text-muted-foreground font-code text-xs font-black uppercase tracking-widest">
            <ShieldCheck className="text-primary h-5 w-5" />
            Background Checked
          </div>
          <div className="flex items-center gap-3 text-muted-foreground font-code text-xs font-black uppercase tracking-widest">
            <UserCheck className="text-primary h-5 w-5" />
            Drug Tested
          </div>
          <div className="flex items-center gap-3 text-muted-foreground font-code text-xs font-black uppercase tracking-widest">
            <Award className="text-primary h-5 w-5" />
            Licensed & Insured
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ tech }: { tech: (typeof TECHNICIANS)[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative aspect-[3/4] cursor-pointer group [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
          <Image
            src={tech.photoUrl}
            alt={tech.name}
            fill
            className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
            data-ai-hint="technician portrait"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white space-y-1">
            <h3 className="text-3xl font-headline leading-tight tracking-tight">
              {tech.name}
            </h3>
            <p className="font-code text-[10px] uppercase tracking-[0.2em] text-white/70 font-black">
              {tech.role} · {tech.yearsExperience} YRS
            </p>
            <div className="pt-4 flex items-center justify-between">
              <div className="flex text-primary gap-1">
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
              </div>
              <button className="flex items-center gap-2 font-code text-[10px] uppercase font-black text-white/50 hover:text-white transition-colors">
                View Profile <RotateCcw className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Back side */}
        <div 
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-dark rounded-[2rem] p-8 flex flex-col justify-between text-white shadow-2xl overflow-hidden"
        >
          {/* Subtle bg detail */}
          <div className="absolute -top-12 -right-12 h-40 w-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div>
              <p className="font-code text-[10px] uppercase tracking-widest text-primary font-black mb-1">
                {tech.role}
              </p>
              <h3 className="text-2xl font-headline">{tech.name}</h3>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-code uppercase font-black text-white/40 tracking-widest">
                CERTIFICATIONS
              </p>
              <ul className="space-y-2">
                {tech.certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-body text-white/80">
                    <span className="text-primary mt-0.5">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-code uppercase font-black text-white/40 tracking-widest">
                SPECIALTIES
              </p>
              <div className="flex flex-wrap gap-2">
                {tech.specialties.map((spec, i) => (
                  <Badge key={i} variant="outline" className="bg-white/5 border-white/10 text-[10px] text-white/90">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-sm font-body italic text-white/60 leading-relaxed">
                "{tech.quote}"
              </p>
            </div>
          </div>

          <Button 
            className="w-full h-12 bg-primary text-white font-headline text-xs tracking-widest uppercase hover:bg-primary/90 mt-4"
            onClick={(e) => {
              e.stopPropagation();
              // Trigger booking logic or scroll to contact
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            REQUEST {tech.name}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

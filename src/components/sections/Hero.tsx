
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark text-white -mt-20 md:-mt-24">
      {/* Background Media Placeholder (Representing a dark video background) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/hvac/1920/1080" 
          alt="Modern HVAC System"
          fill
          className="object-cover opacity-40 grayscale"
          priority
          data-ai-hint="HVAC mechanical"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-8">
          <div className="flex text-primary">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-bold tracking-wider uppercase">Rated 4.9/5 in Twin Cities</span>
        </div>

        <h1 className="max-w-5xl mx-auto mb-8 text-white">
          Expert Comfort <span className="text-primary italic">Guaranteed</span> For Your MN Home.
        </h1>
        
        <p className="max-w-2xl mx-auto mb-12 text-lg md:text-xl text-white/80 font-body">
          From emergency plumbing to high-efficiency HVAC installs, we provide the reliable service your family deserves. Serving Minneapolis, St. Paul, and surrounding areas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="h-16 px-10 text-lg font-headline bg-primary text-white hover:scale-105 transition-transform uppercase tracking-wider">
            Schedule Same-Day Service
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="flex flex-col items-center sm:items-start text-sm uppercase tracking-widest font-bold text-white/60">
            <span>24/7 Emergency Support</span>
            <span className="text-primary">Licensed & Bonded</span>
          </div>
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '@/lib/data';
import { cn } from '@/lib/utils';

export const ReviewsMarquee = () => {
  // Double the reviews for a seamless loop
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden border-t border-black">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <p className="font-code text-[11px] uppercase tracking-widest font-black text-muted-foreground">
              08 / VERIFIED PROOF
            </p>
            <h2 className="text-black font-black leading-[0.85] tracking-tighter uppercase m-0" style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}>
              TWIN CITIES HOMEOWNERS <br className="hidden md:block" /> SAY THIS STUFF.
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <div className="flex items-center justify-end gap-1 text-primary mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-code text-[10px] uppercase font-black text-muted-foreground tracking-widest">
                4.9 AVG / 500+ GOOGLE REVIEWS
              </p>
            </div>
            <a 
              href="#" 
              className="h-12 px-6 border border-black bg-white flex items-center justify-center font-code text-[11px] uppercase font-black tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              READ ALL REVIEWS →
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden group">
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] py-8">
          {duplicatedReviews.map((review, idx) => (
            <ReviewCard key={`${review.id}-${idx}`} review={review} />
          ))}
        </div>
        
        {/* Faded edges for the marquee */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

const ReviewCard = ({ review }: { review: (typeof REVIEWS)[0] }) => {
  return (
    <div className="w-[420px] flex-shrink-0 mx-6 bg-white border border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
      <div className="space-y-6">
        {/* Industrial Rating Display */}
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="font-code text-[12px] font-black text-primary tracking-tighter">
              PIB&#9744;b&#295;;
            </span>
          ))}
        </div>

        {/* Quote */}
        <p className="font-body text-lg text-black leading-relaxed italic">
          "{review.text}"
        </p>
      </div>
      
      <div className="mt-10">
        <div className="w-full h-px bg-black/10 mb-6" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Square Placeholder Avatar */}
            <div className="w-10 h-10 bg-[#E5E0D5] border border-black/10 shrink-0" />
            
            <div>
              <h4 className="font-headline text-sm tracking-tight uppercase m-0 leading-none mb-1">
                {review.author}
              </h4>
              <p className="font-code text-[9px] uppercase font-black text-muted-foreground tracking-widest leading-none">
                ST. PAUL P'B- HIGHLAND PARK
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <span className="font-code text-[9px] uppercase font-black text-muted-foreground/40 tracking-[0.2em]">
              {review.source}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

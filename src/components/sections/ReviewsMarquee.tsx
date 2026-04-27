'use client';

import React from 'react';
import { REVIEWS } from '@/lib/data';

export const ReviewsMarquee = () => {
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden border-t border-black">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <p className="font-body text-[12px] uppercase tracking-[0.12em] font-semibold text-graphite">
              08 / VERIFIED PROOF
            </p>
            <h2 className="text-ink font-extrabold leading-[1.02] tracking-[-0.015em] uppercase m-0" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              TWIN CITIES HOMEOWNERS <br className="hidden md:block" /> SAY THIS STUFF.
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="font-body text-[11px] uppercase font-semibold text-graphite tracking-widest">
                4.9 AVG / 500+ GOOGLE REVIEWS
              </p>
            </div>
            <a 
              href="#" 
              className="h-12 px-6 border border-black bg-white flex items-center justify-center font-body text-[11px] uppercase font-semibold tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              READ ALL REVIEWS →
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-fit animate-marquee py-8">
          {duplicatedReviews.map((review, idx) => (
            <ReviewCard key={`${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }: { review: (typeof REVIEWS)[0] }) => {
  return (
    <div className="w-[420px] flex-shrink-0 mx-6 bg-white border border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between group">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-primary text-[14px]">★</span>
            ))}
          </div>
          <span className="font-body text-[11px] uppercase font-semibold text-graphite">{review.date}</span>
        </div>

        <p className="font-body text-[18px] text-ink leading-[1.5] italic">
          "{review.text}"
        </p>
      </div>
      
      <div className="mt-10 pt-6 border-t border-black/10">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-headline text-[15px] font-bold uppercase m-0 leading-none mb-1">
              {review.author}
            </h4>
            <p className="font-body text-[13px] font-medium text-graphite leading-none">
              ST. PAUL • HIGHLAND PARK
            </p>
          </div>
          <span className="font-body text-[11px] uppercase font-semibold text-graphite/40 tracking-[0.1em]">
            {review.source}
          </span>
        </div>
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '@/lib/data';
import { cn } from '@/lib/utils';

const avatarColors = [
  'bg-red-100 text-red-700',
  'bg-blue-100 text-blue-700',
  'bg-green-100 text-green-700',
  'bg-yellow-100 text-yellow-700',
  'bg-purple-100 text-purple-700',
  'bg-orange-100 text-orange-700',
  'bg-pink-100 text-pink-700',
  'bg-cyan-100 text-cyan-700',
];

export const ReviewsMarquee = () => {
  // Double the reviews for a seamless loop
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {/* Google Logo Mock */}
              <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center p-2 border">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 font-headline text-lg text-foreground">4.9</span>
                </div>
                <p className="font-code text-[10px] uppercase tracking-widest text-muted-foreground font-black">
                  500+ VERIFIED GOOGLE REVIEWS
                </p>
              </div>
            </div>
            <h2 className="text-foreground leading-none">
              Twin Cities homeowners <br className="hidden md:block" /> say this stuff.
            </h2>
          </div>
          <a 
            href="#" 
            className="font-code text-xs uppercase font-black text-primary hover:underline flex items-center gap-2 group"
          >
            SEE ALL ON GOOGLE 
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
      </div>

      <div className="relative w-full overflow-hidden mask-marquee group">
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] py-4">
          {duplicatedReviews.map((review, idx) => (
            <ReviewCard key={`${review.id}-${idx}`} review={review} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review, idx }: { review: (typeof REVIEWS)[0], idx: number }) => {
  const colorClass = avatarColors[idx % avatarColors.length];
  
  return (
    <div className="w-[360px] flex-shrink-0 mx-4 bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-headline text-sm", colorClass)}>
            {review.author.charAt(0)}
          </div>
          <div>
            <h4 className="font-body font-bold text-sm text-foreground">{review.author}</h4>
            <p className="font-code text-[10px] text-muted-foreground uppercase tracking-wider">{review.date}</p>
          </div>
        </div>
        <div className="text-muted-foreground">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current opacity-20">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          </svg>
        </div>
      </div>
      
      <div className="flex text-yellow-500 gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-current" />
        ))}
      </div>

      <p className="text-sm font-body text-foreground/80 leading-relaxed line-clamp-4 italic">
        "{review.text}"
      </p>
    </div>
  );
};

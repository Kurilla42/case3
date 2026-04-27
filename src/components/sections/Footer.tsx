'use client';

import React from 'react';
import { COMPANY_INFO } from '@/lib/data';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-black/10 py-20 px-4">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start mb-20">
          
          {/* Column 1: Identity */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-headline text-xl">T</div>
              <h2 className="text-lg font-headline m-0 italic tracking-tighter uppercase">THELEN PLUMBING</h2>
            </div>
            
            <p className="font-body text-xs text-muted-foreground max-w-[280px] leading-relaxed uppercase font-medium">
              Twin Cities' straight-talking plumbers. Family-owned since 2002. Licensed, bonded, and locally dispatched.
            </p>

            <div className="space-y-4 pt-4">
              <div className="space-y-1">
                <p className="font-code text-[10px] font-black uppercase tracking-widest">THELEN PLUMBING, INC.</p>
                <p className="font-code text-[10px] font-black text-muted-foreground uppercase tracking-widest">427 HARRISON ST NE B- SUITE 200</p>
                <p className="font-code text-[10px] font-black text-muted-foreground uppercase tracking-widest">MINNEAPOLIS, MN 55413</p>
              </div>
              
              <div className="space-y-1">
                <p className="font-code text-[10px] font-black uppercase tracking-widest">
                  DISPATCH B- <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-primary">{COMPANY_INFO.phone}</a>
                </p>
                <p className="font-code text-[10px] font-black text-muted-foreground uppercase tracking-widest">MONB-SUN B- 24 / 7</p>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <p className="font-code text-[11px] uppercase font-black tracking-[0.2em] text-muted-foreground">SERVICES</p>
            <ul className="space-y-3">
              {['EMERGENCY PLUMBING', 'DRAIN CLEANING', 'WATER HEATERS', 'SUMP PUMPS', 'RE-PIPE', 'WATER SOFTENERS'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-code text-[10px] font-black text-muted-foreground hover:text-black uppercase tracking-widest transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-6">
            <p className="font-code text-[11px] uppercase font-black tracking-[0.2em] text-muted-foreground">COMPANY</p>
            <ul className="space-y-3">
              {['OUR TEAM', 'THE 89 PROMISE', 'CAREERS B- HIRING', 'REVIEWS', 'BLOG / NOTES'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-code text-[10px] font-black text-muted-foreground hover:text-black uppercase tracking-widest transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Area */}
          <div className="space-y-6">
            <p className="font-code text-[11px] uppercase font-black tracking-[0.2em] text-muted-foreground">SERVICE AREA</p>
            <ul className="space-y-3">
              {['MINNEAPOLIS', 'ST. PAUL', 'EDINA', 'BLOOMINGTON', 'FULL METRO LIST'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-code text-[10px] font-black text-muted-foreground hover:text-black uppercase tracking-widest transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-code text-[9px] font-black text-muted-foreground uppercase tracking-widest">
            B- 2026 THELEN PLUMBING, INC. B- ALL RIGHTS RESERVED.
          </p>
          
          <p className="font-code text-[9px] font-black text-muted-foreground uppercase tracking-widest">
            MN MASTER PLUMBER LICENSE <span className="text-primary">#PM061478</span> B- MN CONTRACTOR BC00214
          </p>

          <div className="flex gap-6">
            {['PRIVACY', 'TERMS', 'ACCESSIBILITY'].map((item) => (
              <Link key={item} href="#" className="font-code text-[9px] font-black text-muted-foreground hover:text-black uppercase tracking-widest">
                {item} B-
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

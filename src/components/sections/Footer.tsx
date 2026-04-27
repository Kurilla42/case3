'use client';

import React from 'react';
import { COMPANY_INFO } from '@/lib/data';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-black py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start mb-20">
          <div className="md:col-span-6 space-y-6">
            <h2 className="text-xl font-headline m-0 italic">THELEN PLUMBING CO.</h2>
            <p className="font-body text-sm text-muted-foreground max-w-sm leading-relaxed">
              Industrial strength plumbing solutions for residential and commercial sites. Licensed, bonded, and ready to dispatch.
            </p>
            <p className="font-code text-[10px] uppercase font-black tracking-widest text-muted-foreground">
              © 2026 THELEN PLUMBING CO. ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="font-code text-[11px] uppercase font-black tracking-widest">Contact Information</p>
            <div className="space-y-2">
              <a href={`tel:${COMPANY_INFO.phone}`} className="block font-code text-sm font-bold hover:text-primary">
                24/7 EMERGENCY: {COMPANY_INFO.phone}
              </a>
              <p className="font-code text-sm text-muted-foreground">
                LICENSE: #PM123456
              </p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="font-code text-[11px] uppercase font-black tracking-widest">Company Protocol</p>
            <ul className="space-y-2">
              <li><Link href="#" className="font-code text-sm text-muted-foreground hover:text-black">SAFETY PROTOCOLS</Link></li>
              <li><Link href="#" className="font-code text-sm text-muted-foreground hover:text-black">TERMS OF SERVICE</Link></li>
              <li><Link href="#" className="font-code text-sm text-muted-foreground hover:text-black">PRIVACY POLICY</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
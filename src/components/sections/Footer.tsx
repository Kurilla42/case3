'use client';

import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO, OFFICES } from '@/lib/data';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  services: [
    { name: 'Plumbing Repair', href: '#services' },
    { name: 'Drain Cleaning', href: '#services' },
    { name: 'Water Heaters', href: '#services' },
    { name: 'Furnace Repair', href: '#services' },
    { name: 'AC Installation', href: '#services' },
    { name: 'Emergency HVAC', href: '#services' },
  ],
  company: [
    { name: 'Why Us', href: '#stats' },
    { name: 'Careers', href: '#' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Blog', href: '#' },
    { name: 'Sitemap', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-24 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="font-headline text-3xl tracking-tighter">
              THELEN
            </Link>
            <p className="text-white/50 font-body text-sm leading-relaxed max-w-xs">
              Plumbing, Heating, and Air. Done right. Twin Cities comfort experts since 2012.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="space-y-6">
            <h4 className="font-code text-xs uppercase tracking-widest text-primary font-black">SERVICES</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="space-y-6">
            <h4 className="font-code text-xs uppercase tracking-widest text-primary font-black">COMPANY</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-code text-xs uppercase tracking-widest text-primary font-black">CONTACT</h4>
              <a href={`tel:${COMPANY_INFO.phone}`} className="block font-headline text-2xl hover:text-primary transition-colors">
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
                <Mail size={16} className="text-primary" />
                {COMPANY_INFO.email}
              </a>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <p>{OFFICES[0].address}<br />{OFFICES[0].city}, {OFFICES[0].state} {OFFICES[0].zip}</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Clock size={16} className="text-primary shrink-0" />
                <p>Mon-Fri 7:30am–4:30pm</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs font-medium">
            © 2026 {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-white/40 text-xs font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Giant Decorative Wordmark */}
      <div className="relative w-full overflow-hidden pointer-events-none select-none mt-12 pb-4">
        <h2 className="font-headline text-white/[0.03] leading-none text-center whitespace-nowrap tracking-tighter" style={{ fontSize: '25vw' }}>
          THELEN
        </h2>
      </div>
    </footer>
  );
};

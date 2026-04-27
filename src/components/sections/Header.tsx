'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { COMPANY_INFO } from '@/lib/data';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Emergency', href: '#emergency' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'About', href: '#team' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-black bg-background"
      animate={{
        height: isScrolled ? '64px' : '80px',
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="font-headline text-2xl tracking-tighter">
          THELEN PLUMBING CO.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-code text-[11px] uppercase font-bold tracking-widest hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="px-4 py-1 border border-black font-code text-[11px] uppercase font-bold bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            LIC #PM123456
          </div>
          <Button
            className="bg-black text-white hover:bg-black/90 font-code text-[11px] h-10 px-6 uppercase tracking-widest rounded-none border border-black flex gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
            asChild
          >
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Phone className="h-3 w-3" />
              {COMPANY_INFO.phone}
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background border-l-2 border-black rounded-none">
              <div className="flex flex-col h-full py-12 px-6 space-y-8">
                {navItems.map((item) => (
                  <SheetClose key={item.name} asChild>
                    <Link
                      href={item.href}
                      className="text-4xl font-headline border-b border-black pb-4"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

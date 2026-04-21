
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  { name: 'Why Us', href: '#stats' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Areas', href: '#contact' },
  { name: 'FAQ', href: '#faq' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = isScrolled ? 'rgba(245, 241, 234, 0.95)' : 'rgba(245, 241, 234, 0)';
  // Adjusted to foreground (dark) for light Hero background visibility
  const textColorClass = isScrolled ? 'text-foreground' : 'text-foreground';
  const logoColorClass = isScrolled ? 'text-foreground' : 'text-foreground';

  return (
    <motion.header
      className="sticky top-0 z-50 w-full"
      initial={false}
      animate={{
        backgroundColor: bgColor,
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        boxShadow: isScrolled ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : 'none',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={cn("font-headline text-2xl md:text-3xl tracking-tighter transition-colors duration-300", logoColorClass)}>
          THELEN
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn("font-body text-base font-medium transition-colors duration-300 hover:text-primary", textColorClass)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className={cn("font-bold border-2 transition-all duration-300 h-12 px-6", 
              isScrolled 
                ? "border-foreground text-foreground hover:bg-foreground hover:text-background" 
                : "border-foreground text-foreground hover:bg-foreground hover:text-background"
            )}
            asChild
          >
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              {COMPANY_INFO.phone}
            </a>
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90 font-bold h-12 px-8 uppercase tracking-wide">
            Get Free Quote
          </Button>
        </div>

        {/* Mobile View: Hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className={cn("p-2 transition-colors duration-300", textColorClass)}>
                <Menu className="h-8 w-8" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col bg-background">
              <div className="p-6 flex items-center justify-between border-b">
                <span className="font-headline text-2xl text-foreground">THELEN</span>
                <SheetClose className="p-2 rounded-full bg-muted/20 hover:bg-muted/40 transition-colors">
                  <X className="h-6 w-6" />
                </SheetClose>
              </div>

              <div className="flex-1 overflow-y-auto py-10 px-6 space-y-4">
                {navItems.map((item) => (
                  <SheetClose key={item.name} asChild>
                    <Link
                      href={item.href}
                      className="block w-full text-left py-6 text-2xl font-headline border-b border-muted transition-colors hover:text-primary hover:pl-2"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <div className="p-6 bg-white border-t space-y-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1 py-7 border-2 border-dark font-headline text-dark text-lg" asChild>
                    <a href={`tel:${COMPANY_INFO.phone}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      CALL NOW
                    </a>
                  </Button>
                  <Button className="flex-1 py-7 bg-primary text-white font-headline text-lg uppercase">
                    GET FREE QUOTE
                  </Button>
                </div>
                <div className="text-center text-sm font-medium pt-2 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  Twin Cities · Licensed & Insured
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

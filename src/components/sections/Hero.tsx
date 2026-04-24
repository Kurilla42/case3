'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

export const Hero = () => {
  const [zip, setZip] = useState('');
  const [isZipValid, setIsZipValid] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (zip.length === 5 && /^\d+$/.test(zip)) {
      setIsZipValid(true);
      toast({
        title: "Availability Found!",
        description: `We serve ${zip}. Next available slot: 2:30 PM Today.`,
      });
    } else {
      setIsZipValid(false);
      toast({
        variant: "destructive",
        title: "Invalid ZIP",
        description: "Please enter a valid 5-digit ZIP code.",
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden px-4 py-20 lg:py-32">
      <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline */}
        <div className="lg:col-span-7 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-foreground font-black tracking-tighter"
          >
            NO HEAT.<br />
            NO LEAKS.<br />
            <span className="text-primary italic">NO NONSENSE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-xl max-w-xl font-body leading-tight"
          >
            Twin Cities' fastest plumbing & HVAC rescue. Same-day service or $100 off — guaranteed. <span className="text-foreground font-bold underline">Fixed in one visit or the diagnostic is on us.</span>
          </motion.p>
        </div>

        {/* Right Column: ZIP Card */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark text-white p-8 lg:p-12 shadow-2xl space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-headline leading-tight">WE CAN BE THERE TODAY.</h3>
              <p className="font-code text-xs uppercase tracking-widest text-white/50">CHECK YOUR ZIP FOR 2HR DISPATCH</p>
            </div>

            <form onSubmit={handleZipCheck} className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter ZIP Code" 
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="h-16 bg-white/10 border-white/20 text-white text-xl placeholder:text-white/30"
                  maxLength={5}
                />
                <Button type="submit" className="h-16 bg-primary text-white font-headline px-8 hover:bg-primary/90">
                  GO
                </Button>
              </div>
              {isZipValid && (
                <p className="text-sm font-bold text-success flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Available in {zip} — Next slot: 2:30 PM today
                </p>
              )}
            </form>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <p className="font-code text-[10px] uppercase tracking-[0.3em] text-white/40">EMERGENCY HOTLINE</p>
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-4 text-3xl font-headline hover:text-primary transition-colors">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white animate-pulse">
                  <Phone size={24} fill="currentColor" />
                </div>
                {COMPANY_INFO.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

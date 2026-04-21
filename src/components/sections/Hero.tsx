'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Star, CheckCircle, ShieldCheck, Zap, Home, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const rotatingWords = ["Hot Water", "Cold AC", "Clogged Drain", "Burst Pipe"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [zip, setZip] = useState('');
  const [isZipValid, setIsZipValid] = useState<boolean | null>(null);
  const [weather, setWeather] = useState<{ temp: number; city: string } | null>(null);
  const { toast } = useToast();

  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 500], [0, 30]);

  useEffect(() => {
    setIsMounted(true);
    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);

    const fetchWeather = async () => {
      try {
        // Mocking weather for the Twin Cities
        setWeather({ temp: -5, city: "MINNEAPOLIS" });
      } catch (e) {
        setWeather({ temp: 32, city: "TWIN CITIES" });
      }
    };
    fetchWeather();

    return () => clearInterval(wordInterval);
  }, []);

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

  if (!isMounted) return <div className="min-h-screen bg-background" />;

  return (
    <section className="relative min-h-[100vh] lg:min-h-0 lg:max-h-[900px] flex items-center bg-background overflow-hidden px-4 py-6 md:py-24">
      {/* Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />

      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Top/Right Column: Video (Top on Mobile) */}
        <motion.div 
          className="order-first lg:order-last lg:col-span-5 relative w-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div 
            style={{ y: videoY }}
            className="relative w-full aspect-video md:aspect-[4/5] overflow-hidden shadow-2xl border-4 border-white/50 h-[35vh] md:h-auto"
            style={{ borderRadius: "2rem 0 2rem 0" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
              poster="https://picsum.photos/seed/tech/800/1000"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-professional-plumber-working-in-a-kitchen-40748-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div 
            className="absolute -bottom-4 left-4 lg:bottom-[-24px] lg:right-[-40px] lg:left-auto bg-background rounded-2xl p-4 lg:p-6 shadow-xl border-2 border-primary/10 rotate-[-2deg] lg:rotate-[-3deg] z-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="space-y-0.5 lg:space-y-1">
              <p className="text-lg lg:text-xl font-headline leading-tight">12+ YEARS</p>
              <p className="text-[10px] lg:text-sm font-bold text-primary">500+ JOBS THIS YEAR</p>
              <div className="flex text-primary gap-1">
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <span className="text-[10px] text-muted-foreground ml-1 font-bold">4.9/5</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom/Left Column: Content */}
        <motion.div 
          className="lg:col-span-7 space-y-6 lg:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Authority Strip - Horizontal Scroll on Mobile */}
          <motion.div variants={itemVariants} className="flex overflow-x-auto pb-2 scrollbar-hide lg:flex-wrap gap-4 text-[10px] md:text-xs font-code uppercase tracking-widest text-muted-foreground font-bold whitespace-nowrap">
            <span className="flex items-center gap-1.5 shrink-0"><Star className="h-3 w-3 fill-primary text-primary" /> Google 4.9 · 500+ Reviews</span>
            <span className="flex items-center gap-1.5 shrink-0 border-l border-muted pl-4 lg:border-0 lg:pl-0"><ShieldCheck className="h-3 w-3 text-success" /> Licensed MN</span>
            <span className="flex items-center gap-1.5 shrink-0 border-l border-muted pl-4 lg:border-0 lg:pl-0"><Zap className="h-3 w-3 text-primary" /> 24/7 Emergency</span>
            <span className="flex items-center gap-1.5 shrink-0 border-l border-muted pl-4 lg:border-0 lg:pl-0"><Home className="h-3 w-3 text-secondary" /> Local Since 2012</span>
          </motion.div>

          {/* H1 Headline */}
          <motion.h1 variants={itemVariants} className="text-foreground leading-[0.95] font-black tracking-tighter">
            No Heat?<br />
            <div className="h-[1.1em] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[index]}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute left-0 text-primary italic inline-block"
                  style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)' }}
                >
                  {rotatingWords[index]}?
                </motion.span>
              </AnimatePresence>
            </div>
            No Problem.
          </motion.h1>

          {/* Subheadline - Hidden on very small mobile if space is tight, but here clamped */}
          <motion.p variants={itemVariants} className="text-muted-foreground text-base md:text-xl max-w-xl font-body leading-relaxed">
            Twin Cities' fastest plumbing & HVAC rescue. Same-day service or $100 off — guaranteed. <span className="text-foreground font-bold italic">No BS, no upsells, just fixed.</span>
          </motion.p>

          {/* Weather-aware CTA Card */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-border/50 max-w-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-code font-black tracking-widest uppercase text-muted-foreground/60">
                <span>IT'S {weather?.temp || 0}°F IN {weather?.city || 'MINNEAPOLIS'}</span>
                <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              </div>
              <h3 className="text-xl lg:text-2xl font-headline text-foreground">We can be there in 2 hrs</h3>
              <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-2">
                <Input 
                  placeholder="Enter ZIP Code" 
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="flex-1 h-12 bg-muted/20 border-border text-lg"
                  maxLength={5}
                />
                <Button type="submit" className="h-12 bg-dark text-white font-headline px-6 hover:bg-dark/90 w-full sm:w-auto">
                  CHECK AVAILABILITY
                </Button>
              </form>
              {isZipValid && (
                <p className="text-sm font-bold text-success flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
                  <CheckCircle className="h-4 w-4" /> Available in {zip} — Next slot: 2:30 PM today
                </p>
              )}
            </div>
          </motion.div>

          {/* Dual CTA Row */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button 
              size="lg" 
              asChild
              className="h-16 px-8 text-lg font-headline bg-destructive text-white hover:bg-destructive/90 animate-pulse-glow w-full"
            >
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                CALL NOW {COMPANY_INFO.phone}
              </a>
            </Button>
            <Button variant="ghost" className="h-14 lg:h-16 text-lg font-body font-bold text-muted-foreground hover:text-foreground w-full">
              Book Online Instead <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calculator, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ESTIMATE_DATA, COMPANY_INFO } from '@/lib/data';
import { cn } from '@/lib/utils';

export const CostEstimator = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    service: '',
    issue: '',
    urgency: '',
  });
  const [showResult, setShowResult] = useState(false);

  const currentIssues = useMemo(() => {
    return selections.service ? ESTIMATE_DATA.issues[selections.service as keyof typeof ESTIMATE_DATA.issues] : [];
  }, [selections.service]);

  const priceRange = useMemo(() => {
    if (!selections.issue || !selections.urgency) return [0, 0];
    const base = ESTIMATE_DATA.baseRanges[selections.issue] || [0, 0];
    const urgencyObj = ESTIMATE_DATA.urgency.find(u => u.id === selections.urgency);
    const multiplier = urgencyObj?.multiplier || 1.0;
    return [Math.round(base[0] * multiplier), Math.round(base[1] * multiplier)];
  }, [selections.issue, selections.urgency]);

  const handleSelect = (key: string, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    if (key === 'service') {
      setSelections(prev => ({ ...prev, issue: '', urgency: '' }));
      setStep(2);
    } else if (key === 'issue') {
      setStep(3);
    } else if (key === 'urgency') {
      setShowResult(true);
    }
  };

  const reset = () => {
    setStep(1);
    setSelections({ service: '', issue: '', urgency: '' });
    setShowResult(false);
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="font-code text-xs uppercase tracking-widest text-white/60 font-black mb-4">
            NO GUESSING GAME
          </p>
          <h2 className="text-white leading-none mb-6">
            Get your price range <br className="hidden md:block" /> in 60 seconds.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-body">
            Three questions. Real numbers. No email gate.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            layout
            className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10"
          >
            {!showResult ? (
              <div className="space-y-10">
                {/* Step Indicators */}
                <div className="flex justify-between max-w-xs mx-auto mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center font-code text-xs font-bold transition-colors",
                        step >= s ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                      )}>
                        {s}
                      </div>
                      {s < 3 && <div className={cn("w-12 h-0.5", step > s ? "bg-primary" : "bg-muted")} />}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-headline text-center">What can we help with?</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {ESTIMATE_DATA.services.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleSelect('service', s.id)}
                            className={cn(
                              "py-6 px-4 rounded-2xl border-2 font-headline text-sm transition-all hover:scale-105 active:scale-95",
                              selections.service === s.id 
                                ? "bg-primary border-primary text-white" 
                                : "bg-background border-border text-foreground hover:border-primary/50"
                            )}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-headline">What's the issue?</h3>
                        <Button variant="ghost" onClick={() => setStep(1)} className="text-xs font-bold">BACK</Button>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {currentIssues.map((issue) => (
                          <button
                            key={issue}
                            onClick={() => handleSelect('issue', issue)}
                            className={cn(
                              "py-4 px-8 rounded-full border-2 font-body font-bold text-sm transition-all hover:border-primary",
                              selections.issue === issue 
                                ? "bg-primary border-primary text-white" 
                                : "bg-background border-border text-foreground"
                            )}
                          >
                            {issue}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-headline">How soon?</h3>
                        <Button variant="ghost" onClick={() => setStep(2)} className="text-xs font-bold">BACK</Button>
                      </div>
                      <div className="grid gap-4">
                        {ESTIMATE_DATA.urgency.map((u) => (
                          <button
                            key={u.id}
                            onClick={() => handleSelect('urgency', u.id)}
                            className={cn(
                              "flex items-center justify-between py-6 px-8 rounded-2xl border-2 transition-all hover:border-primary text-left",
                              selections.urgency === u.id 
                                ? "bg-primary border-primary text-white" 
                                : "bg-background border-border text-foreground"
                            )}
                          >
                            <span className="font-headline text-lg">{u.label}</span>
                            {u.id === 'urgent' && (
                              <span className="bg-destructive/10 text-destructive text-[10px] font-black tracking-widest px-3 py-1 rounded-full border border-destructive/20">
                                RUSH FEE APPLIES
                              </span>
                            )}
                            <ArrowRight className="h-5 w-5 opacity-50" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-8"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-success/10 text-success p-4 rounded-full border-2 border-success/20 animate-bounce">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-code font-black text-muted-foreground uppercase tracking-widest">
                    Estimated range for {selections.issue}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl md:text-6xl lg:text-8xl font-headline text-primary tracking-tighter">
                      ${priceRange[0]} – ${priceRange[1]}
                    </span>
                  </div>
                  <p className="text-xs font-code text-muted-foreground uppercase tracking-wider mt-4">
                    Based on 500+ similar jobs in {COMPANY_INFO.serviceAreas[0]} area.
                  </p>
                </div>

                <div className="bg-accent/50 p-6 rounded-2xl border-2 border-primary/10 max-w-md mx-auto">
                  <p className="text-sm font-bold text-foreground flex items-center justify-center gap-2">
                    <Zap className="h-4 w-4 text-primary fill-primary" />
                    $25 OFF if you book today
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Valid for all services booked through this tool.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="h-16 px-10 text-lg font-headline bg-primary text-white hover:bg-primary/90 w-full sm:w-auto"
                    onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
                  >
                    BOOK FREE QUOTE
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={reset}
                    className="h-16 px-10 text-lg font-headline border-2 border-dark w-full sm:w-auto"
                  >
                    START OVER
                  </Button>
                </div>
                
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                  * Final price is always confirmed in-person before work begins. No surprises.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

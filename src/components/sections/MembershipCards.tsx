'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: "TUNE-UP CLUB",
    price: "12",
    features: ["2 HVAC Tune-ups", "1 Plumbing Inspection", "15% Service Discount", "Priority Scheduling"],
    color: "bg-white",
    textColor: "text-dark"
  },
  {
    name: "PLATINUM PLAN",
    price: "29",
    features: ["4 Total Tune-ups", "2 Plumbing Inspections", "25% Service Discount", "Zero Dispatch Fees", "Free Sewer Camera"],
    color: "bg-dark",
    textColor: "text-white",
    highlight: true
  }
];

export const MembershipCards = () => {
  return (
    <section className="py-24 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="leading-none">THE <span className="text-primary">HOME CLUB.</span><br/>BECAUSE PIPES DON'T FAIL POLITELY.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`${plan.color} ${plan.textColor} p-12 border border-black/5 shadow-xl relative`}>
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 font-code text-[10px] font-black">MOST POPULAR</div>
              )}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-headline mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black">${plan.price}</span>
                    <span className="font-code text-xs uppercase opacity-50">/ month</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check size={18} className="text-primary" />
                      <span className="font-bold text-lg">{f}</span>
                    </div>
                  ))}
                </div>
                <Button className={`w-full h-16 text-lg font-headline uppercase ${plan.highlight ? 'bg-primary text-white hover:bg-primary/90' : 'bg-dark text-white'}`}>
                  JOIN THE CLUB
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

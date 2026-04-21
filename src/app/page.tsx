import React from 'react';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { EmergencyStrip } from '@/components/sections/EmergencyStrip';
import { Services } from '@/components/sections/Services';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { StickyMobileCTA } from '@/components/floating/StickyMobileCTA';
import { AIChatbot } from '@/components/floating/AIChatbot';
import { ExitIntentModal } from '@/components/floating/ExitIntentModal';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <EmergencyStrip />
      <Services />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating UI Elements */}
      <StickyMobileCTA />
      <AIChatbot />
      <ExitIntentModal />
    </main>
  );
}

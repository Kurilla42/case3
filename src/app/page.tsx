import React from 'react';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { Services } from '@/components/sections/Services';
import { CostEstimator } from '@/components/sections/CostEstimator';
import { EmergencyGuarantee } from '@/components/sections/EmergencyGuarantee';
import { StatsStats } from '@/components/sections/StatsStats';
import { Process } from '@/components/sections/Process';
import { Team } from '@/components/sections/Team';
import { RealTimeTracker } from '@/components/sections/RealTimeTracker';
import { MembershipCards } from '@/components/sections/MembershipCards';
import { ReviewsMarquee } from '@/components/sections/ReviewsMarquee';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { StickyMobileCTA } from '@/components/floating/StickyMobileCTA';
import { LiveChat } from '@/components/floating/LiveChat';
import { ExitIntentModal } from '@/components/floating/ExitIntentModal';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <CostEstimator />
      <EmergencyGuarantee />
      <StatsStats />
      <Process />
      <Team />
      <RealTimeTracker />
      <MembershipCards />
      <ReviewsMarquee />
      <ServiceAreas />
      <FAQ />
      <FinalCta />
      <Footer />
      
      {/* Floating UI Elements */}
      <StickyMobileCTA />
      <LiveChat />
      <ExitIntentModal />
    </main>
  );
}

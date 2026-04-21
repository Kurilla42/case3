import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ContactModalProvider } from '@/context/contact-modal-context';
import { ContactModal } from '@/components/floating/ContactModal';
import { StickyMobileCTA } from '@/components/floating/StickyMobileCTA';
import { SocialProof } from '@/components/floating/SocialProof';
import { ExitIntentModal } from '@/components/floating/ExitIntentModal';
import { LiveChat } from '@/components/floating/LiveChat';

export const metadata: Metadata = {
  title: 'Thelen Plumbing, Heating, and Air | Twin Cities Comfort Experts',
  description: 'Thelen Plumbing, Heating, and Air provides expert HVAC and plumbing services in Minneapolis, St. Paul, and surrounding areas. 24/7 emergency service guaranteed.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body noise-overlay">
        <ContactModalProvider>
          {children}
          
          {/* Floating UI Elements */}
          <ContactModal />
          <StickyMobileCTA />
          <SocialProof />
          <LiveChat />
          <ExitIntentModal />
          
          <Toaster />
        </ContactModalProvider>
      </body>
    </html>
  );
}

'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Amenities from '@/components/Amenities';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import HoursContact from '@/components/HoursContact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import useReveal from '@/hooks/useReveal';

export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Amenities />
      <Pricing />
      <Reviews />
      <HoursContact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

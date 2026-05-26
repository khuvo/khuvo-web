"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingModal from "@/components/BookingModal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState("solar");

  const openBooking = (service: string) => {
    setBookingService(service);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen relative bg-khuvo-navy text-white overflow-x-hidden selection:bg-khuvo-cyan selection:text-khuvo-navy">
      
      {/* 1. HERO SECTION & NAV */}
      <Hero onOpenBooking={openBooking} />

      {/* 2. SERVICES LIST */}
      <Services onOpenBooking={openBooking} />

      {/* 3. WHY CHOOSE US - ELITE STANDARDS */}
      <WhyChooseUs />

      {/* 4. CUSTOMER FEEDBACK CAROUSEL */}
      <Testimonials />

      {/* 5. FAQ ACCORDION stacked */}
      <FAQ />

      {/* 6. DYNAMIC SYSTEM BACKEND-READY FLOATING SUPPORT */}
      <WhatsAppCTA />

      {/* 7. DYNAMIC MODULAR BOOKING CHECKOUT MODAL */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialService={bookingService}
      />

      {/* 8. EXPANSIVE SITE DIRECTORY FOOTER */}
      <Footer onOpenBooking={openBooking} />

    </main>
  );
}

"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = [
    {
      name: "Amitabh Chaturvedi",
      role: "Residential Solar & Villa Owner",
      city: "Lucknow",
      quote: "Our 10kW rooftop solar system output had collapsed by 30% due to dust storm layers. Khuvo dispatched two certified specialists within 4 hours. They used specialized soft-brush demineralized water washes. Output popped back to 100% instantly! Meticulous digital reporting too.",
      stars: 5,
      service: "Solar Panel Detailing",
    },
    {
      name: "Meera Raghunandan",
      role: "Society Secretary (Omaxe Heights)",
      city: "Kanpur",
      quote: "Managing community tank hygiene was a nightmare until we partnered with Khuvo for our society AMC. They vacuumed tons of sludge and applied anti-bacterial UV treatments without polluting the distribution pipes. Absolute professionals who prioritize pure water safety.",
      stars: 5,
      service: "Water Tank Sanitizing",
    },
    {
      name: "Vikram Malhotra",
      role: "Luxury Sedan Owner",
      city: "Unnao",
      quote: "Finding a scratch-free doorstep wash that respects ceramic coatings is rare. Khuvo's crew brought specialized low-water pressure foam sprayers and dry microfiber sheets. They glazed my sedan directly in my driveway under 40 minutes. Simply outstanding convenience.",
      stars: 5,
      service: "Doorstep Car Detailing",
    },
    {
      name: "Sanjay Singhania",
      role: "Fleet Operations Manager",
      city: "Kanpur",
      quote: "We run a delivery fleet of 40 vehicles. Partnering with Khuvo under their commercial contract AMC saved us thousands in fuel and manual labor. They detailed 10 bikes/cars every Sunday night at our dispatch lot. Zero downtime, top-tier efficiency.",
      stars: 5,
      service: "Commercial B2B AMC",
    },
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const active = reviews[activeIdx];

  return (
    <section className="section-padding bg-khuvo-navy relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full glow-orb-cyan blur-[150px] -z-10 opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center justify-center gap-1.5 font-display">
            <ShieldCheck className="w-4 h-4" /> Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            What Modern India Says
          </h2>
          <p className="text-sm text-khuvo-slate leading-relaxed font-light font-sans">
            Read certified case study accounts from our residential, society, and B2B fleet customers.
          </p>
        </div>

        {/* Carousel Content Card */}
        <div className="relative rounded-2xl glass-panel p-6 md:p-10 shadow-blueGlow border border-white/10 overflow-hidden min-h-[320px] flex flex-col justify-between">
          {/* Glowing tech background details */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full glow-orb-cyan blur-2xl opacity-20 pointer-events-none"></div>
          <Quote className="absolute top-6 left-6 w-14 h-14 text-white/5 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Stars & Category */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center text-amber-400 gap-0.5">
                {[...Array(active.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-khuvo-cyan bg-khuvo-cyan/10">
                {active.service}
              </span>
            </div>

            {/* Quote content */}
            <p className="text-sm md:text-base text-white leading-relaxed font-light italic">
              "{active.quote}"
            </p>
          </div>

          {/* User profile details & navigation controls */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between mt-8 relative z-10">
            <div className="text-left w-full sm:w-auto">
              <span className="text-base font-bold text-white block font-display">
                {active.name}
              </span>
              <span className="text-xs text-khuvo-slate block font-sans">
                {active.role} • <span className="text-khuvo-cyan font-semibold">{active.city}</span>
              </span>
            </div>

            {/* Slider arrows */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-khuvo-cyan/30 active:scale-90 transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-khuvo-cyan/30 active:scale-90 transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIdx === idx ? "bg-khuvo-cyan w-6" : "bg-white/10"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Sun, Droplets, Car, Bike, Check, ArrowRight, ShieldCheck } from "lucide-react";

interface ServicesProps {
  onOpenBooking: (service: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const serviceList = [
    {
      id: "solar",
      title: "Solar Panel Cleaning",
      icon: Sun,
      tag: "Output Restored",
      price: "₹999",
      bullets: [
        "Increases efficiency up to 30%",
        "Specialized AR-Coating Safe formula",
        "Soft water demineralization rinse",
        "Dust, bird dropping, and soot removal"
      ],
      ctaText: "Book Solar Cleaning",
      highlight: true,
    },
    {
      id: "tank",
      title: "Water Tank Cleaning",
      icon: Droplets,
      tag: "Bacteria Free",
      price: "₹1,299",
      bullets: [
        "High pressure mud and sludge vacuuming",
        "Anti-bacterial UV & chemical sanitizing",
        "Prevents skin infection and scale buildup",
        "Residential & commercial AMC plans"
      ],
      ctaText: "Book Tank Sanitizing",
      highlight: false,
    },
    {
      id: "car",
      title: "Doorstep Car Wash",
      icon: Car,
      tag: "Premium Detailing",
      price: "₹499",
      bullets: [
        "Pressure wash + dual foam detailing",
        "Interior vacuuming + dash glaze",
        "Scratch-safe microfiber hand dry",
        "Water-efficient doorstep dispatch"
      ],
      ctaText: "Book Doorstep Wash",
      highlight: false,
    },
    {
      id: "bike",
      title: "Doorstep Bike Wash",
      icon: Bike,
      tag: "Premium Chain Lube",
      price: "₹249",
      bullets: [
        "Premium foam coat & high-pressure rinse",
        "Engine block degreasing & shining",
        "High-performance chain cleaning & lubing",
        "Complete doorstep execution in 30 mins"
      ],
      ctaText: "Book Bike Detailing",
      highlight: false,
    },
  ];

  return (
    <section id="services" className="section-padding bg-khuvo-navy relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full glow-orb-cyan blur-[150px] -z-10 opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center justify-center gap-1.5 font-display">
            <ShieldCheck className="w-4 h-4" /> Elite Service Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            Smart Cleaning for Homes & Systems
          </h2>
          <p className="text-sm sm:text-base text-khuvo-slate leading-relaxed font-light">
            Engineered with high-tech water conservation, safe organic solutions, and certified operators.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl glass-panel p-6 flex flex-col justify-between transition-all duration-300 group overflow-hidden ${
                  srv.highlight 
                    ? "border-khuvo-cyan/30 shadow-glow" 
                    : "hover:border-white/20"
                }`}
              >
                {/* Visual glow element on card hover */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full glow-orb-cyan -z-10 blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-khuvo-cyan/30 group-hover:bg-white/10 text-khuvo-cyan transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-khuvo-cyan bg-khuvo-cyan/10">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Pricing / Title */}
                  <span className="text-xs text-khuvo-slate block font-semibold uppercase">Starting From</span>
                  <span className="text-2xl font-black text-white font-display block mb-4">
                    {srv.price} <span className="text-xs text-khuvo-slate font-medium">/ service</span>
                  </span>

                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-khuvo-cyan transition-colors font-display">
                    {srv.title}
                  </h3>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-8">
                    {srv.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-khuvo-slate leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-khuvo-cyan shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Trigger */}
                <button
                  onClick={() => onOpenBooking(srv.id)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 group/btn ${
                    srv.highlight
                      ? "bg-gradient-to-r from-khuvo-blue to-khuvo-cyan text-white hover:shadow-blueGlow"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-khuvo-cyan/30"
                  }`}
                >
                  {srv.ctaText}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

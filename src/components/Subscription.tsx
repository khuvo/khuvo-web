"use client";

import React from "react";
import { Check, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

interface SubscriptionProps {
  onOpenBooking: (service: string) => void;
}

export default function Subscription({ onOpenBooking }: SubscriptionProps) {
  const plans = [
    {
      id: "basic",
      name: "Basic Shield",
      price: "₹499",
      period: "month",
      desc: "Perfect for single vehicle owners or small households looking for periodic washes.",
      savings: "Save 10% on yearly bill",
      bullets: [
        "1 Detailed Doorstep Car/Bike Wash",
        "Quarterly Water Tank inspection",
        "Eco-safe standard surfactants",
        "Next-day booking priority",
        "Digital photo-proof report"
      ],
      ctaText: "Choose Basic Plan",
      popular: false,
    },
    {
      id: "smart",
      name: "Smart Care",
      price: "₹1,499",
      period: "month",
      desc: "Designed for modern homes with active solar systems (up to 15 panels) and vehicles.",
      savings: "Save 25% on yearly bill",
      bullets: [
        "1 Solar Panel Detailed Clean / month",
        "2 Premium Doorstep Car/Bike washes",
        "Bi-annual deep Water Tank clean",
        "AR-Coating safe brushes & formulas",
        "Same-day dispatch booking priority",
        "Detailed performance audit report",
        "Free system structural checkup"
      ],
      ctaText: "Activate Smart Care",
      popular: true,
    },
    {
      id: "premium",
      name: "Elite Estate",
      price: "₹2,999",
      period: "month",
      desc: "Complete operational peace of mind for luxury properties, solar grids, and multi-car households.",
      savings: "Save 30% on yearly bill",
      bullets: [
        "Bi-weekly Solar Panel Detailed Clean",
        "4 Premium Doorstep vehicle details",
        "Unlimited Water Tank sanitization checks",
        "Quarterly physical tank mud vacuuming",
        "VIP same-day priority dispatch",
        "Advanced thermal efficiency solar scan",
        "Dedicated account operations lead"
      ],
      ctaText: "Acquire Premium Shield",
      popular: false,
    },
  ];

  return (
    <section id="subscriptions" className="section-padding bg-khuvo-navy relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full glow-orb-blue blur-[150px] -z-10 opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center justify-center gap-1.5 font-display">
            <ShieldCheck className="w-4 h-4" /> Subscription Plans
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            Automate Your Property Upkeep
          </h2>
          <p className="text-sm text-khuvo-slate leading-relaxed font-light font-sans">
            Set and forget. Select a recurring care package for constant solar efficiency, pure water, and gleaming vehicles. Cancel anytime with a tap.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl glass-panel p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden ${
                plan.popular
                  ? "border-khuvo-cyan/40 shadow-blueGlow lg:scale-105 z-10 bg-gradient-to-b from-khuvo-navyLight to-khuvo-navy"
                  : "hover:border-white/20"
              }`}
            >
              {/* Highlight badge for Smart plan */}
              {plan.popular && (
                <span className="absolute top-4 right-4 px-2.5 py-1 text-[9px] font-bold tracking-wider text-khuvo-cyan bg-khuvo-cyan/15 rounded-full flex items-center gap-1 uppercase font-display border border-khuvo-cyan/30">
                  <Sparkles className="w-3 h-3 animate-pulse" /> MOST POPULAR
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {plan.name}
                </h3>
                <p className="text-xs text-khuvo-slate mb-6 leading-relaxed font-light">
                  {plan.desc}
                </p>

                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-black text-white font-display">
                    {plan.price}
                  </span>
                  <span className="text-xs text-khuvo-slate font-medium">/{plan.period}</span>
                </div>

                <div className="mb-6">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-khuvo-cyan bg-khuvo-cyan/10 px-2.5 py-1 rounded-full">
                    {plan.savings}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 pt-6 border-t border-white/5">
                  {plan.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-khuvo-slate leading-relaxed">
                      <Check className="w-4 h-4 text-khuvo-cyan shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenBooking(plan.id)}
                className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 group/btn ${
                  plan.popular
                    ? "bg-gradient-to-r from-khuvo-blue to-khuvo-cyan text-white hover:shadow-glow"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {plan.ctaText}
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

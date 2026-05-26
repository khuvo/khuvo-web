"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ShieldCheck } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does water pressure washing damage solar panel coatings?",
      a: "Absolutely not. We never use hard abrasives or metal scrubbers. Khuvo uses specialized demineralized soft water and zero-scratch microfiber brush heads specifically engineered to preserve the solar anti-reflective (AR) coating.",
    },
    {
      q: "How often should water tanks be vacuumed and cleaned?",
      a: "According to WHO sanitization guidelines, residential drinking water tanks must be detailed and sterilized every six months. This prevents toxic sediment sheets, iron rust scale, and pathogenic bacterial breeding.",
    },
    {
      q: "Are the chemicals used safe for pets, crops, and children?",
      a: "Yes. Khuvo uses only eco-safe, pH 7 neutral, completely biodegradable organic cleaning compounds. Our solution contains zero heavy caustic soda or acid bases, ensuring that lawns, pets, and children remain completely secure.",
    },
    {
      q: "How do I modify or reschedule my technician booking slot?",
      a: "Rescheduling is effortless. Open your instant SMS tracking link, click reschedule, or send a prompt to our WhatsApp dispatch line. Rescheduling is free of charge up to 2 hours before the technician's scheduled arrival.",
    },
    {
      q: "Do you offer society AMC billing and bulk contracts?",
      a: "Yes, we specialize in high-efficiency B2B society and solar farm AMC operations. Societies in Kanpur, Lucknow, and Unnao get volume discount slabs up to 40% along with dedicated account operators and GST e-invoices.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding bg-khuvo-navyLight relative">
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full glow-orb-blue blur-[150px] -z-10 opacity-15 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center justify-center gap-1.5 font-display">
            <ShieldCheck className="w-4 h-4" /> FAQ Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-khuvo-slate leading-relaxed font-light">
            Everything you need to know about the science, scheduling, and billing behind Khuvo.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-gradient-to-r from-white/5 to-white/0 border-khuvo-cyan/30 shadow-glow" 
                    : "bg-white/5 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="flex gap-3 items-start text-sm sm:text-base font-bold text-white font-display">
                    <HelpCircle className={`w-6 h-6 text-khuvo-cyan shrink-0 mt-0.5 transition-transform ${isOpen ? "rotate-12" : ""}`} />
                    <span>{faq.q}</span>
                  </span>
                  <span className="p-2 rounded-lg bg-white/5 text-khuvo-slate group-hover:text-white transition-colors shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Content block */}
                {isOpen && (
                  <div className="px-6 pb-6 pl-14 text-xs sm:text-sm text-khuvo-slate leading-relaxed font-light font-sans border-t border-white/5 pt-4 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

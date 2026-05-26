"use client";

import React from "react";
import { Compass, UserCheck, Search, Sparkles, CheckSquare, Camera, HeartHandshake, ShieldCheck } from "lucide-react";

export default function Timeline() {
  const steps = [
    {
      title: "30-Sec Digital Booking",
      desc: "Select a custom package and book your date slot on our smart dashboard or via WhatsApp in under 30 seconds.",
      icon: Compass,
    },
    {
      title: "Technician Allocation",
      desc: "Our automated dispatch matching engine assigns a certified local operations specialist with GPS tracking details.",
      icon: UserCheck,
    },
    {
      title: "Scientific Diagnostic",
      desc: "Our specialist arrives on-site and runs physical checks (e.g. solar structural scan, tank leakage testing).",
      icon: Search,
    },
    {
      title: "Eco-Tech Detailing",
      desc: "Clean is executed using demineralized soft water, specialized pH 7 surfactants, and scratch-proof brushes.",
      icon: Sparkles,
    },
    {
      title: "System Quality Check",
      desc: "A meticulous post-cleaning checklist verification ensures zero chemical residue, perfect flow seals, and structure stability.",
      icon: CheckSquare,
    },
    {
      title: "Before / After Report",
      desc: "A digitized report containing high-res before/after photographs is sent directly to your phone to confirm transparency.",
      icon: Camera,
    },
    {
      title: "Secured Closure",
      desc: "Confirm results, make secure digital payments, and activate your ongoing custom society or household AMC plan.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="section-padding bg-khuvo-navyLight relative overflow-hidden">
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] rounded-full glow-orb-blue blur-[150px] -z-10 opacity-15 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center justify-center gap-1.5 font-display">
            <ShieldCheck className="w-4 h-4" /> Operational Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            The Khuvo Service Standard
          </h2>
          <p className="text-sm text-khuvo-slate leading-relaxed font-light">
            Every technician dispatch is tracked, standardized, and audited digitally for total quality assurance.
          </p>
        </div>

        {/* Timeline Line & Grid Items */}
        <div className="relative mt-12">
          {/* Central Vertical Connector for larger screens */}
          <div className="absolute left-[50%] -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-khuvo-blue via-khuvo-cyan to-transparent hidden lg:block"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col lg:flex-row items-center justify-between w-full relative ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outer spacing columns to perfectly align nodes center */}
                  <div className="w-full lg:w-[45%]"></div>

                  {/* Icon Node Center Anchor */}
                  <div className="absolute left-4 lg:left-[50%] lg:-translate-x-1/2 top-0 z-10 w-10 h-10 rounded-xl bg-khuvo-navy border border-khuvo-cyan/40 text-khuvo-cyan flex items-center justify-center shadow-glow">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content Box */}
                  <div className="w-full lg:w-[45%] pl-16 lg:pl-0">
                    <div className="p-6 rounded-2xl glass-panel relative group hover:border-khuvo-cyan/20 hover:shadow-glow transition-all duration-300">
                      {/* Glow elements on hover */}
                      <div className="absolute top-0 right-0 w-24 h-24 rounded-full glow-orb-cyan -z-10 blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      
                      <span className="text-[10px] font-black text-khuvo-cyan font-display tracking-widest uppercase block mb-1">
                        STEP 0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-white mb-2 font-display">
                        {step.title}
                      </h3>
                      <p className="text-xs text-khuvo-slate leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

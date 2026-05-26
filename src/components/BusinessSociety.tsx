"use client";

import React from "react";
import { Building2, School, Factory, Sun, Truck, ShieldCheck, FileText, Wrench, CheckCircle2 } from "lucide-react";

interface BusinessSocietyProps {
  onOpenBooking: (service: string) => void;
}

export default function BusinessSociety({ onOpenBooking }: BusinessSocietyProps) {
  const sectors = [
    { name: "Apartment Societies", icon: Building2, detail: "Deep tank disinfection & regular solar maintenance arrays for housing clusters." },
    { name: "Schools & Colleges", icon: School, detail: "Ensuring pure clean drinking water tanks and green solar roof compliance." },
    { name: "Industrial Factories", icon: Factory, detail: "Heavy pressure silt suction and dust removal panels under hazardous safety protocols." },
    { name: "MW Solar Farms", icon: Sun, detail: "Megawatt-scale soft demineralized automated washing to maximize corporate PPA output." },
    { name: "Commercial Fleets", icon: Truck, detail: "Scheduled doorstep overnight foam washes for logistic cars, auto fleets, and cabs." },
  ];

  return (
    <section className="section-padding bg-khuvo-navyLight relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full glow-orb-cyan blur-[120px] -z-10 opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typographic & Sector grids */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center gap-1.5 font-display">
                <ShieldCheck className="w-4 h-4" /> Enterprise Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Corporate & Society Bulk AMC Maintenance
              </h2>
              <p className="text-sm sm:text-base text-khuvo-slate leading-relaxed font-light">
                Minimize overheads and protect multi-million rupee assets. We design highly compliant, insured, and structured Annual Maintenance Contracts (AMC) with dedicated service squads.
              </p>
            </div>

            {/* Micro grid of sectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectors.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-khuvo-navy border border-white/5 flex gap-3.5 hover:border-khuvo-cyan/20 transition-colors group">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-khuvo-cyan group-hover:bg-khuvo-cyan/10 transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-display">{sec.name}</h4>
                      <p className="text-[11px] text-khuvo-slate leading-relaxed font-light">{sec.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-conversion B2B Pitch card with Checkmarks */}
          <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl glass-panel border border-white/10 shadow-blueGlow relative">
            {/* Glow accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full glow-orb-blue blur-2xl opacity-30 pointer-events-none"></div>

            <h3 className="text-xl font-bold tracking-tight text-white mb-6 font-display">
              Enterprise AMC Partnership
            </h3>

            <div className="space-y-4 mb-8">
              {[
                { title: "Custom Corporate Slabs", desc: "Volume discounts up to 40% on bulk solar or fleet washing.", icon: FileText },
                { title: "Designated Field Lead", desc: "Single point operations manager for slot coordination.", icon: ShieldCheck },
                { title: "ISO Tool Compliance", desc: "Rigorous high-pressure harness audits & pH neutral surfactants.", icon: Wrench },
                { title: "E-Bill & GST Reporting", desc: "Clean ledger summaries, audit checklists & instant reports.", icon: CheckCircle2 },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-3">
                    <Icon className="w-5 h-5 text-khuvo-cyan shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-white block uppercase tracking-wider font-display">{item.title}</span>
                      <span className="text-[11px] text-khuvo-slate block">{item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => onOpenBooking("society")}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-khuvo-blue to-khuvo-cyan text-white font-bold uppercase tracking-wider text-xs shadow-glow hover:shadow-blueGlow transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Request Enterprise Inspection
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

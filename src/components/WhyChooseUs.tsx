"use client";

import React from "react";
import { ShieldAlert, Leaf, CheckSquare, Droplet, Clock, DollarSign, Camera, Wrench, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Verified Professionals",
      desc: "Background-checked, trained, and uniform-wearing specialists equipped with safety harnesses and certified tools.",
      icon: ShieldAlert,
    },
    {
      title: "Eco-Safe Formula",
      desc: "We use only biodegradable, pH-balanced cleaning agents that leave zero harsh chemical runoff on your lawns or roofs.",
      icon: Leaf,
    },
    {
      title: "AR-Coating Protection",
      desc: "Scratch-free specialized microfiber brushes protect the anti-reflective coating on solar panels, securing peak longevity.",
      icon: CheckSquare,
    },
    {
      title: "Water Efficient Tech",
      desc: "Advanced spray guns and sludge suction pumps save up to 70% water compared to standard garden hose manual washes.",
      icon: Droplet,
    },
    {
      title: "Same-Day Dispatch",
      desc: "Urgent cleanup requests accepted. Instant mobile slots and on-site dispatcher tracking on booking confirmation.",
      icon: Clock,
    },
    {
      title: "No Hidden Costs",
      desc: "Upfront pricing calculations with direct digital quotes. You only pay for active services and verified results.",
      icon: DollarSign,
    },
    {
      title: "Photo-Proof Audits",
      desc: "Technicians upload before and after high-res photographs of your solar panels, tanks, or vehicle to guarantee results.",
      icon: Camera,
    },
    {
      title: "Industrial Machinery",
      desc: "High-pressure washer systems, demineralization kits, and deep tank scrub vacuum units operated under strict safety codes.",
      icon: Wrench,
    },
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-khuvo-navyLight relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full glow-orb-blue blur-[120px] -z-10 opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full glow-orb-cyan blur-[120px] -z-10 opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center justify-center gap-1.5 font-display">
            <ShieldCheck className="w-4 h-4" /> Operational Standards
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            The Technology Behind Clean
          </h2>
          <p className="text-sm sm:text-base text-khuvo-slate leading-relaxed font-light">
            We are not just a cleaning service. Khuvo is a tech-enabled infrastructure maintenance platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-khuvo-navy border border-white/5 hover:border-khuvo-cyan/20 hover:shadow-glow transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-khuvo-cyan flex items-center justify-center mb-6 group-hover:bg-khuvo-cyan/10 group-hover:border-khuvo-cyan/30 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 font-display group-hover:text-khuvo-cyan transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-khuvo-slate leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

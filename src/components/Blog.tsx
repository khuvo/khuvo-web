"use client";

import React from "react";
import { ArrowUpRight, Calendar, User, ShieldCheck } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      title: "How Dirty Solar Panels Slash Grid Energy Output by 30%",
      desc: "Dust storm films and industrial soot create solid blocking layers. Learn how demineralized soft brushing restores peak generation efficiency.",
      category: "Solar Tech",
      date: "May 24, 2026",
      author: "Dr. R. K. Varma",
    },
    {
      title: "Water Tank Contamination: The Silent Pathogen Breeding Threat",
      desc: "WHO reports show iron sediment scales and mud sheets breed toxic biological colonies. Discover vacuum sludge suction sanitation standards.",
      category: "Home Hygiene",
      date: "May 18, 2026",
      author: "Aditi Sharma",
    },
    {
      title: "Dual Foam vs Street Rubs: Protecting Your Luxury Paint Glaze",
      desc: "Why roadside cheap bucket washes leave permanent circular swirl marks. The science of pH-neutral soap sheeting and premium microfiber.",
      category: "Vehicle Detailing",
      date: "May 10, 2026",
      author: "Rohit Saxena",
    },
  ];

  return (
    <section className="section-padding bg-khuvo-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full glow-orb-cyan blur-[150px] -z-10 opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div className="space-y-4 text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center gap-1.5 font-display">
              <ShieldCheck className="w-4 h-4" /> Educational Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white leading-tight">
              Knowledge Hub & Solar Guides
            </h2>
            <p className="text-sm text-khuvo-slate leading-relaxed font-light">
              Meticulous guides explaining the physics, hygiene standards, and maintenance technology behind property care.
            </p>
          </div>

          <button className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-khuvo-cyan/30 text-xs font-bold uppercase tracking-wider text-white transition-all flex items-center gap-1.5 self-start md:self-auto">
            View All Guides <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="p-6 rounded-2xl bg-khuvo-navyLight border border-white/5 hover:border-khuvo-cyan/20 hover:shadow-glow transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-khuvo-cyan bg-khuvo-cyan/10">
                    {art.category}
                  </span>
                  <div className="flex gap-3 text-[10px] text-khuvo-slate">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {art.date}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-3 group-hover:text-khuvo-cyan transition-colors font-display line-clamp-2">
                  {art.title}
                </h3>
                
                <p className="text-xs text-khuvo-slate leading-relaxed font-light mb-6 line-clamp-3">
                  {art.desc}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-khuvo-slate">
                <span className="flex items-center gap-1 uppercase font-semibold"><User className="w-3 h-3 text-khuvo-cyan" /> {art.author}</span>
                <span className="text-khuvo-cyan opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase tracking-wider flex items-center gap-0.5">
                  Read <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { MapPin, Search, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function Coverage() {
  const [pinCode, setPinCode] = useState("");
  const [checkResult, setCheckResult] = useState<{ status: "idle" | "active" | "inactive"; msg: string }>({
    status: "idle",
    msg: "",
  });

  const activeHubs = [
    {
      city: "Kanpur",
      status: "Operational Hub",
      details: "Full fleet support: Doorstep vehicle detailing, solar arrays, & deep water tank sanitizing units.",
      postalCode: "208001 - 208027",
    },
    {
      city: "Lucknow",
      status: "Regional Headquarters",
      details: "Megawatt solar grid diagnostics, multi-society water AMC setups, and premium detailing slots.",
      postalCode: "226001 - 226028",
    },
    {
      city: "Unnao",
      status: "Express Wash Zone",
      details: "Rapid dispatch doorstep wash units, residential water tank scrubbers, and rooftop solar care.",
      postalCode: "209801 - 209805",
    },
  ];

  const handlePinCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinCode) return;
    
    // Check pin-code prefix (208 for Kanpur, 226 for Lucknow, 209 for Unnao)
    const cleaned = pinCode.trim();
    if (cleaned.startsWith("208") || cleaned.startsWith("226") || cleaned.startsWith("209")) {
      setCheckResult({
        status: "active",
        msg: "✅ Service Active! Certified technicians are currently active in your postal block.",
      });
    } else {
      setCheckResult({
        status: "inactive",
        msg: "❌ We are expanding! Your block is currently in queue. Register for pre-launch discounts.",
      });
    }
  };

  return (
    <section className="section-padding bg-khuvo-navy relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full glow-orb-blue blur-[150px] -z-10 opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Local SEO City Cards */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center gap-1.5 font-display">
                <ShieldCheck className="w-4 h-4" /> Operational Zones
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white leading-tight">
                Active Service Coverage Areas
              </h2>
              <p className="text-sm text-khuvo-slate leading-relaxed font-light">
                Our technicians are stationed locally to guarantee a under 4-hour dispatch. We currently serve residential estates, solar grids, and vehicles across three key regions in Uttar Pradesh.
              </p>
            </div>

            {/* Hub list */}
            <div className="space-y-4">
              {activeHubs.map((hub, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:border-khuvo-cyan/20 transition-all group">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-khuvo-cyan/10 border border-khuvo-cyan/30 text-khuvo-cyan group-hover:bg-khuvo-cyan group-hover:text-khuvo-navy transition-all shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                        {hub.city}
                        <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          ACTIVE HUB
                        </span>
                      </h3>
                      <p className="text-xs text-khuvo-slate leading-relaxed mt-1 font-light">{hub.details}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right text-xs text-khuvo-slate">
                    <span className="block font-bold text-white uppercase tracking-wider font-display">{hub.status}</span>
                    <span className="block text-[10px] mt-0.5">{hub.postalCode}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pin Code Verification Widget */}
          <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl glass-panel border border-white/10 shadow-blueGlow relative order-1 lg:order-2">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full glow-orb-cyan blur-2xl opacity-20 pointer-events-none"></div>

            <div className="space-y-4 text-center mb-8">
              <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider text-khuvo-cyan bg-khuvo-cyan/10 border border-khuvo-cyan/30 rounded-full inline-flex items-center gap-1 uppercase">
                <Sparkles className="w-3 h-3" /> Live Dispatch Check
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white font-display">
                Check Area Pin Code
              </h3>
              <p className="text-xs text-khuvo-slate font-light leading-relaxed">
                Input your 6-digit pin code to check if our smart operations vans are active in your sector.
              </p>
            </div>

            <form onSubmit={handlePinCheck} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  required
                  pattern="[0-9]{6}"
                  maxLength={6}
                  placeholder="Enter 6-digit area pin (e.g. 208005)"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="w-full pl-4 pr-12 py-3.5 text-sm text-white bg-white/5 border border-white/10 rounded-xl focus:border-khuvo-cyan focus:outline-none transition-all placeholder:text-khuvo-slate/50"
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 text-khuvo-cyan hover:bg-white/5 rounded-lg transition-colors"
                  aria-label="Verify Pin code"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Stateful Result Block */}
              {checkResult.status !== "idle" && (
                <div 
                  className={`p-4 rounded-xl text-xs font-semibold leading-relaxed border ${
                    checkResult.status === "active"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                  }`}
                >
                  {checkResult.msg}
                </div>
              )}
            </form>

            <div className="mt-8 pt-4 border-t border-white/5 flex justify-between text-[10px] text-khuvo-slate uppercase font-semibold">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-khuvo-cyan" /> 4-Hour SLA</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-khuvo-cyan" /> GPS Inspected</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

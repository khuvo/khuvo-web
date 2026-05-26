"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Eye, ShieldCheck, Play, Pause, Sun, Flame, ShieldAlert, Coins, Award, ArrowRight, Droplets, Zap, Shield } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState("solar");
  const [isSweeping, setIsSweeping] = useState(true);
  const sweepDirection = useRef(1); // 1 = right, -1 = left
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Benefits ROI Calculator state
  const [systemCapacity, setSystemCapacity] = useState(10); // kW
  const [monthlyBill, setMonthlyBill] = useState(5000); // ₹
  const [activeBenefitTab, setActiveBenefitTab] = useState("efficiency");

  const tabs = [
    { id: "solar", label: "Solar System" },
    { id: "tank", label: "Water Tank" },
    { id: "car", label: "Premium Vehicle" },
  ];

  // Auto-Sweep Engine logic
  useEffect(() => {
    if (!isSweeping) return;
    let frameId: number;
    const animate = () => {
      setSliderPosition((prev) => {
        let next = prev + sweepDirection.current * 0.45;
        if (next >= 85) {
          next = 85;
          sweepDirection.current = -1;
        } else if (next <= 15) {
          next = 15;
          sweepDirection.current = 1;
        }
        return next;
      });
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isSweeping]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Left click only
    if (e.button !== 0) return;
    setIsSweeping(false); // Pause sweep immediately on user interaction
    isDragging.current = true;
    handleMove(e.clientX);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsSweeping(false); // Pause sweep immediately on user interaction
    isDragging.current = true;
    handleMove(e.touches[0].clientX);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Calculator computations
  const efficiencyLoss = 34.2; // % loss
  const monthlyRecovered = Math.round(monthlyBill * (efficiencyLoss / 100));
  const annualRecovered = Math.round(monthlyRecovered * 12);
  const lifetimeSavings = Math.round(annualRecovered * 10);
  const annualCo2Saved = Math.round(systemCapacity * 365 * 4.2 * 0.342 * 0.85); // kg CO2 saved per year

  return (
    <section id="before-after" className="section-padding bg-khuvo-navy relative overflow-hidden">
      {/* Custom Styles Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer-sweep {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
        .animate-shimmer-sweep {
          animation: shimmer-sweep 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes float-dust {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-5px) scale(1.1); opacity: 0.5; }
        }
        .animate-float-dust {
          animation: float-dust 4s ease-in-out infinite;
        }
        @keyframes pulse-energy {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.25); }
        }
        .animate-pulse-energy {
          animation: pulse-energy 2s ease-in-out infinite;
        }
        @keyframes water-bubbles {
          0% { transform: translateY(10px) translateX(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-30px) translateX(5px); opacity: 0; }
        }
        .animate-bubble-1 {
          animation: water-bubbles 3s ease-in infinite;
        }
        .animate-bubble-2 {
          animation: water-bubbles 4s ease-in 1s infinite;
        }
        .animate-bubble-3 {
          animation: water-bubbles 2.5s ease-in 1.8s infinite;
        }
      ` }} />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full glow-orb-cyan blur-[150px] -z-10 opacity-15 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full glow-orb-blue blur-[150px] -z-10 opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center justify-center gap-1.5 font-display">
            <ShieldCheck className="w-4 h-4" /> Proof of Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white leading-tight">
            See the Khuvo Transformation
          </h2>
          <p className="text-sm text-khuvo-slate leading-relaxed font-light">
            Slide the controller or toggle Auto-Sweep to view dirty structures restored to peak factory output and efficiency.
          </p>
        </div>

        {/* Dynamic Tabs & Play/Pause */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-6 bg-white/[0.02] border border-white/5 p-2 rounded-2xl">
          <div className="flex gap-2 w-full sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSliderPosition(50); }}
                className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 font-display ${
                  activeTab === tab.id
                    ? "bg-khuvo-cyan text-khuvo-navy shadow-glow"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsSweeping(!isSweeping)}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 border ${
              isSweeping
                ? "bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20"
                : "bg-khuvo-cyan/10 border-khuvo-cyan/30 text-khuvo-cyan hover:bg-khuvo-cyan/20 shadow-glow"
            }`}
          >
            {isSweeping ? (
              <>
                <Pause className="w-4 h-4 fill-current" /> Pause Auto-Sweep
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" /> Play Auto-Sweep
              </>
            )}
          </button>
        </div>

        {/* Drag Canvas Container */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/9] max-w-4xl mx-auto rounded-3xl border border-white/10 overflow-hidden select-none cursor-ew-resize bg-khuvo-navyLight shadow-glow"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* UNDERLAYER: THE GLEAMING "AFTER" RESULT (RIGHT SIDE REVEALED) */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            {/* SOLAR AFTER */}
            {activeTab === "solar" && (
              <div className="w-full h-full bg-gradient-to-tr from-khuvo-navy via-slate-900 to-sky-950 flex items-center justify-center relative">
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:24px_24px] opacity-80"></div>
                
                {/* High Fidelity Solar Panel SVG */}
                <div className="w-[85%] h-[80%] border border-slate-700/80 p-2.5 rounded-2xl bg-slate-950/80 relative flex items-center justify-center shadow-2xl">
                  {/* Silicon Cells Grid */}
                  <div className="grid grid-cols-4 grid-rows-3 gap-2.5 w-full h-full">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="relative rounded-lg overflow-hidden border border-cyan-500/30 bg-gradient-to-br from-blue-900 via-sky-950 to-blue-950 shadow-[inset_0_0_15px_rgba(6,182,212,0.25)]">
                        {/* Wafers */}
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_48%,rgba(255,255,255,0.06)_50%,transparent_52%)] bg-[size:8px_100%]"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(255,255,255,0.06)_50%,transparent_52%)] bg-[size:100%_8px]"></div>
                        {/* Sparkle energy dots */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 animate-pulse-energy" style={{ animationDelay: `${i * 150}ms` }}></span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Silver busbars */}
                  <div className="absolute inset-x-0 inset-y-12 pointer-events-none flex flex-col justify-around py-2">
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
                  </div>

                  {/* Gleaming Sweeping Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer-sweep pointer-events-none"></div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
                  <div className="absolute bottom-[25%] right-[25%] w-2 h-2 bg-white rounded-full animate-ping [animation-delay:1.5s]"></div>
                </div>

                <div className="absolute top-6 right-6 z-20 space-y-2 flex flex-col items-end">
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest shadow-glow backdrop-blur-md flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 animate-bounce" /> RESTORED OUTPUT: +34.2%
                  </span>
                </div>
              </div>
            )}

            {/* WATER TANK AFTER */}
            {activeTab === "tank" && (
              <div className="w-full h-full bg-gradient-to-br from-khuvo-navy via-cyan-950 to-emerald-950 flex items-center justify-center relative">
                {/* Visual Tank Outline */}
                <div className="w-[70%] h-[75%] border border-cyan-500/40 rounded-t-[100px] rounded-b-3xl bg-cyan-950/40 relative overflow-hidden flex flex-col justify-end p-2 shadow-2xl">
                  {/* Crystalline Water Layer */}
                  <div className="w-full h-[85%] rounded-b-2xl bg-gradient-to-t from-cyan-600/30 via-emerald-600/20 to-sky-400/10 border-t border-cyan-400/40 relative overflow-hidden">
                    {/* Water shine overlays */}
                    <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white/10 to-transparent"></div>
                    
                    {/* UV Light sterilization beam */}
                    <div className="absolute inset-x-1/3 inset-y-0 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent blur-md"></div>
                    
                    {/* Rising Clean Bubbles */}
                    <div className="absolute bottom-4 left-[20%] w-2.5 h-2.5 bg-white/40 rounded-full animate-bubble-1"></div>
                    <div className="absolute bottom-8 left-[45%] w-2 h-2 bg-white/30 rounded-full animate-bubble-2"></div>
                    <div className="absolute bottom-2 left-[70%] w-3 h-3 bg-white/40 rounded-full animate-bubble-3"></div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 z-20 space-y-2 flex flex-col items-end">
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest shadow-glow backdrop-blur-md flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} /> PATHOGENS: 0.00% STERILE
                  </span>
                </div>
              </div>
            )}

            {/* VEHICLE AFTER */}
            {activeTab === "car" && (
              <div className="w-full h-full bg-gradient-to-tr from-khuvo-navy via-slate-900 to-blue-950 flex items-center justify-center relative">
                {/* Tech Clean Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.08)_1px,transparent_1px)] bg-[size:30px_30px] opacity-80"></div>
                
                {/* Sleek metallic panels with shiny gloss reflections */}
                <div className="w-[80%] h-[70%] bg-gradient-to-r from-slate-800 via-blue-950 to-slate-900 border border-blue-500/30 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl">
                  {/* Dynamic Gradient Reflection representing absolute mirror gloss */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent -translate-x-full animate-shimmer-sweep pointer-events-none"></div>
                  
                  {/* Gloss shine reflection line */}
                  <div className="absolute top-1/4 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-khuvo-cyan">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                      <span className="text-xs uppercase tracking-widest font-extrabold font-display">Mirror Finish Detailing</span>
                    </div>
                  </div>

                  <div className="relative z-10 self-end text-right">
                    <span className="text-[10px] text-white/50 block">Showroom Nano-Gleam Seal</span>
                    <span className="text-sm font-bold text-white font-display">Hydrophobic Protection Active</span>
                  </div>

                  {/* Sparkle lens flares */}
                  <div className="absolute top-[20%] right-[30%] w-4 h-4 text-cyan-300 animate-ping">✦</div>
                  <div className="absolute bottom-[30%] left-[25%] w-4 h-4 text-white animate-ping [animation-delay:1.8s]">✦</div>
                </div>

                <div className="absolute top-6 right-6 z-20 space-y-2 flex flex-col items-end">
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest shadow-glow backdrop-blur-md">
                    SURFACE GLAZE: 100% SECURE
                  </span>
                </div>
              </div>
            )}

            {/* "AFTER" LABEL */}
            <span className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-emerald-500/25 border border-emerald-500/40 text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 backdrop-blur-md">
              AFTER KHUVO
            </span>
          </div>

          {/* OVERLAYER: THE DUSTY/DIRTY "BEFORE" RESULT (LEFT SIDE CLIPPED) */}
          <div 
            className="absolute inset-y-0 left-0 h-full overflow-hidden z-10 border-r border-khuvo-cyan/50"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* Must span exact container width to prevent stretching */}
            <div className="absolute inset-y-0 left-0 w-full h-full min-w-[320px] md:min-w-[896px] flex items-center justify-center bg-zinc-950">
              
              {/* SOLAR BEFORE */}
              {activeTab === "solar" && (
                <div className="w-full h-full bg-gradient-to-tr from-neutral-950 via-neutral-900 to-amber-950/20 flex items-center justify-center relative">
                  {/* Dim light pattern overlay */}
                  <div className="absolute inset-0 bg-black/60 z-[2]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(120,80,30,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(120,80,30,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-60"></div>
                  
                  {/* High Fidelity Solar Panel (Dusty) */}
                  <div className="w-[85%] h-[80%] border border-neutral-800/80 p-2.5 rounded-2xl bg-neutral-900/80 relative flex items-center justify-center shadow-lg z-[3]">
                    <div className="grid grid-cols-4 grid-rows-3 gap-2.5 w-full h-full opacity-60">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="relative rounded-lg overflow-hidden border border-amber-950/30 bg-gradient-to-br from-neutral-900 via-zinc-950 to-neutral-950">
                          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_48%,rgba(255,255,255,0.02)_50%,transparent_52%)] bg-[size:8px_100%]"></div>
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(255,255,255,0.02)_50%,transparent_52%)] bg-[size:100%_8px]"></div>
                        </div>
                      ))}
                    </div>

                    {/* Thick Grime & Soot Overlay splatters */}
                    <div className="absolute inset-0 bg-amber-950/40 backdrop-brightness-[0.6] flex flex-col justify-between p-4 pointer-events-none rounded-2xl overflow-hidden">
                      <div className="absolute top-[10%] left-[25%] w-24 h-16 rounded-full bg-yellow-950/60 blur-md animate-float-dust"></div>
                      <div className="absolute top-[40%] right-[10%] w-32 h-20 rounded-full bg-neutral-950/80 blur-lg"></div>
                      <div className="absolute bottom-[20%] left-[30%] w-40 h-16 rounded-full bg-yellow-950/50 blur-xl animate-float-dust" style={{ animationDelay: "2s" }}></div>
                      <div className="absolute top-[50%] left-[5%] w-16 h-12 rounded-full bg-zinc-900/70 blur-md"></div>
                      {/* Bird droppings representation */}
                      <div className="absolute top-[25%] right-[35%] w-6 h-6 rounded-full bg-white/20 blur-[2px]"></div>
                      <div className="absolute bottom-[35%] left-[15%] w-8 h-4 rounded-full bg-white/10 blur-[1px]"></div>
                    </div>
                  </div>

                  <div className="absolute top-6 left-6 z-20 space-y-2 flex flex-col items-start">
                    <span className="px-3 py-1.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400" /> TOTAL SYSTEM LOSS: -34.2%
                    </span>
                  </div>
                </div>
              )}

              {/* WATER TANK BEFORE */}
              {activeTab === "tank" && (
                <div className="w-full h-full bg-gradient-to-br from-zinc-950 via-neutral-900 to-amber-950/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/50 z-[2]"></div>
                  
                  {/* Dirty Tank Outline */}
                  <div className="w-[70%] h-[75%] border border-neutral-800 rounded-t-[100px] rounded-b-3xl bg-neutral-950/60 relative overflow-hidden flex flex-col justify-end p-2 shadow-inner z-[3]">
                    {/* Grimy Sludge Water Layer */}
                    <div className="w-full h-[85%] rounded-b-2xl bg-gradient-to-t from-yellow-950/60 via-amber-900/30 to-amber-950/20 border-t border-yellow-950/50 relative overflow-hidden">
                      {/* Sludge build-up at bottom */}
                      <div className="absolute bottom-0 inset-x-0 h-12 bg-neutral-950/90 blur-[3px]"></div>
                      <div className="absolute bottom-2 left-[20%] w-[35%] h-8 bg-amber-950/90 rounded-full blur-[4px]"></div>
                      <div className="absolute bottom-1 right-[15%] w-[45%] h-10 bg-yellow-950/80 rounded-full blur-[5px]"></div>
                      
                      {/* Stagnant bacteria nodes */}
                      <div className="absolute top-1/4 left-[30%] w-3 h-3 rounded-full bg-emerald-950/50 border border-emerald-900/30 animate-float-dust"></div>
                      <div className="absolute top-1/2 right-[25%] w-4 h-4 rounded-full bg-yellow-900/30 border border-yellow-800/20 animate-float-dust" style={{ animationDelay: "2s" }}></div>
                    </div>
                  </div>

                  <div className="absolute top-6 left-6 z-20 space-y-2 flex flex-col items-start">
                    <span className="px-3 py-1.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md">
                      SANITIZATION CRITICAL
                    </span>
                  </div>
                </div>
              )}

              {/* VEHICLE BEFORE */}
              {activeTab === "car" && (
                <div className="w-full h-full bg-gradient-to-tr from-zinc-950 via-neutral-900 to-amber-950/15 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/40 z-[2]"></div>
                  
                  {/* Mud splattered body panel */}
                  <div className="w-[80%] h-[70%] bg-gradient-to-r from-neutral-800 via-neutral-900 to-amber-950/20 border border-neutral-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-lg z-[3]">
                    <div className="relative z-10 opacity-40">
                      <div className="flex items-center gap-2 text-amber-500">
                        <Eye className="w-5 h-5" />
                        <span className="text-xs uppercase tracking-widest font-bold">Corroded Surface Layer</span>
                      </div>
                    </div>

                    {/* Thick Mud splatters */}
                    <div className="absolute inset-0 bg-amber-950/20 pointer-events-none rounded-3xl">
                      <div className="absolute top-[20%] left-[15%] w-32 h-16 rounded-full bg-amber-900/30 blur-md"></div>
                      <div className="absolute bottom-[10%] right-[20%] w-44 h-24 rounded-full bg-neutral-950/80 blur-xl"></div>
                      
                      {/* Mud stains */}
                      <div className="absolute top-1/2 left-[40%] w-12 h-12 bg-amber-950/60 rounded-full blur-[2px]"></div>
                      <div className="absolute top-[30%] right-[30%] w-8 h-8 bg-yellow-950/40 rounded-full blur-[1px]"></div>
                    </div>

                    <div className="relative z-10 self-end text-right opacity-50">
                      <span className="text-[10px] text-rose-400 block">Acid Rain & Grime Coating</span>
                      <span className="text-xs font-semibold text-neutral-400 font-display">Paint Layer Exposed</span>
                    </div>
                  </div>

                  <div className="absolute top-6 left-6 z-20 space-y-2 flex flex-col items-start">
                    <span className="px-3 py-1.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md">
                      PAINT CORROSION DANGER
                    </span>
                  </div>
                </div>
              )}

              {/* "BEFORE" LABEL */}
              <span className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-700 text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 backdrop-blur-md">
                UNTOUCHED BEFORE
              </span>
            </div>
          </div>

          {/* SLIDER LINE & HANDLE */}
          <div 
            className="absolute inset-y-0 z-30 w-1 bg-gradient-to-b from-khuvo-blue via-khuvo-cyan to-khuvo-blue pointer-events-none animate-pulse-energy"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-khuvo-navy border-2 border-khuvo-cyan slider-handle flex items-center justify-center cursor-ew-resize">
              <span className="flex gap-0.5 text-khuvo-cyan">
                <span className="w-0.5 h-3 bg-current rounded-full"></span>
                <span className="w-0.5 h-3 bg-current rounded-full"></span>
              </span>
            </div>
          </div>
        </div>

        {/* ==================== BENEFITS & ROI CALCULATOR DASHBOARD ==================== */}
        <div className="mt-16 pt-16 border-t border-white/5 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3 py-1 text-[10px] font-bold tracking-wider text-khuvo-cyan bg-khuvo-cyan/15 rounded-full inline-flex items-center gap-1.5 uppercase font-display border border-khuvo-cyan/20">
              <Sparkles className="w-3.5 h-3.5" /> Environmental & Financial Science
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
              Why Routine Solar Cleaning is Non-Negotiable
            </h3>
            <p className="text-sm text-khuvo-slate font-light">
              Dirty panels do more than just drop generation. They damage equipment, invalidate warranties, and leak capital.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Key Scientific Benefits */}
            <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
              {[
                {
                  id: "efficiency",
                  title: "Peak Energy Capture (+34.2% Boost)",
                  desc: "Atmospheric soot, pollen, mud layers, and bird droppings form a physical solar filter. Khuvo pH-neutral washing clears this opaque sheet completely, allowing full solar irradiance penetration straight to the active silicon cell layer.",
                  icon: Sun,
                },
                {
                  id: "hotspot",
                  title: "Hotspot & Cell Failure Mitigation",
                  desc: "Soiling is never perfectly uniform. Shaded cells in a circuit act as resistors rather than power producers, dissipating electricity as intensive heat. This creates thermal 'hotspots' that can crack front glass, burn backsheets, or trigger roof fires.",
                  icon: Flame,
                },
                {
                  id: "coating",
                  title: "AR Glass Coating Preservation",
                  desc: "Raw rainwater isn't clean; it mixes with chemical soot to form acidic film. Leaving this crusted layer permanently etches the micro-porous Anti-Reflective (AR) glass coating. Our scratch-free specialized microfiber sweeps protect this layer completely.",
                  icon: Shield,
                },
                {
                  id: "warranty",
                  title: "Manufacturer Warranty Protection",
                  desc: "Top solar tier warranties (Tata, Waaree, Adani, etc.) explicitly mandate routine professional cleaning to keep performance warranties active. Unclean installations risk immediate voiding of performance drop claims.",
                  icon: Award,
                },
              ].map((benefit) => {
                const Icon = benefit.icon;
                const isActive = activeBenefitTab === benefit.id;
                return (
                  <div
                    key={benefit.id}
                    onClick={() => setActiveBenefitTab(benefit.id)}
                    className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                      isActive
                        ? "bg-khuvo-cyan/5 border-khuvo-cyan/40 shadow-glow"
                        : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                    }`}
                  >
                    <div className={`p-3 rounded-xl border shrink-0 transition-colors ${
                      isActive ? "bg-khuvo-cyan/10 border-khuvo-cyan/30 text-khuvo-cyan" : "bg-white/5 border-white/10 text-khuvo-slate"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className={`text-sm font-bold font-display transition-colors ${isActive ? "text-khuvo-cyan" : "text-white"}`}>
                        {benefit.title}
                      </h4>
                      <p className={`text-xs leading-relaxed font-light transition-all ${isActive ? "text-white/80" : "text-khuvo-slate line-clamp-2"}`}>
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Live Interactive ROI Calculator Card */}
            <div className="lg:col-span-5 p-6 md:p-8 rounded-3xl bg-gradient-to-tr from-khuvo-blue to-sky-950 border border-white/10 shadow-blueGlow text-center flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full glow-orb-cyan blur-2xl opacity-20 pointer-events-none"></div>

              <div className="space-y-6 text-left">
                <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider text-khuvo-cyan bg-khuvo-cyan/15 border border-khuvo-cyan/30 rounded-full inline-flex items-center gap-1 uppercase font-display">
                  <Coins className="w-3 h-3 animate-spin" style={{ animationDuration: "10s" }} /> Live Returns Engine
                </span>
                
                <h4 className="text-xl font-bold font-display text-white">
                  Khuvo Energy Gains Calculator
                </h4>
                
                <p className="text-xs text-khuvo-slate font-light leading-relaxed">
                  Enter your rooftop installation specifics to view the immediate monthly savings and carbon footprint reductions recovered.
                </p>

                {/* Slider 1: System Capacity */}
                <div className="space-y-2 pt-4">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-khuvo-slate">
                    <span>1. Array Capacity</span>
                    <span className="text-white font-bold">{systemCapacity} kW</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="50"
                    step="1"
                    value={systemCapacity}
                    onChange={(e) => setSystemCapacity(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-khuvo-cyan"
                  />
                  <div className="flex justify-between text-[10px] text-khuvo-slate">
                    <span>Residential (3kW)</span>
                    <span>Commercial (50kW)</span>
                  </div>
                </div>

                {/* Slider 2: Average Monthly Bill */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-khuvo-slate">
                    <span>2. Monthly Energy Bill</span>
                    <span className="text-white font-bold">₹{monthlyBill.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1500"
                    max="30000"
                    step="500"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-khuvo-cyan"
                  />
                  <div className="flex justify-between text-[10px] text-khuvo-slate">
                    <span>Min: ₹1,500</span>
                    <span>Max: ₹30,000+</span>
                  </div>
                </div>
              </div>

              {/* Outputs display */}
              <div className="py-6 my-6 border-y border-white/10 space-y-4">
                <div className="flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] text-rose-400 font-extrabold uppercase tracking-widest block">Dirty Loss Sheet</span>
                    <span className="text-xs font-light text-khuvo-slate">34.2% solar rays blocked</span>
                  </div>
                  <span className="text-lg font-bold text-rose-400 font-display">₹{Math.round(monthlyBill * 0.342)} /mo lost</span>
                </div>

                <div className="flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] text-khuvo-cyan font-extrabold uppercase tracking-widest block">Annual Capital Restored</span>
                    <span className="text-xs font-light text-khuvo-slate">Recovered solar power credits</span>
                  </div>
                  <span className="text-2xl font-black text-white font-display">₹{annualRecovered.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest block">10-Yr Yield Return</span>
                    <span className="text-xs font-light text-khuvo-slate">System lifetime longevity gains</span>
                  </div>
                  <span className="text-lg font-bold text-emerald-400 font-display">₹{lifetimeSavings.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between text-left pt-2">
                  <div>
                    <span className="text-[10px] text-cyan-300 font-extrabold uppercase tracking-widest block">Annual Carbon Offset</span>
                    <span className="text-xs font-light text-khuvo-slate">Grid equivalent offset</span>
                  </div>
                  <span className="text-xs font-bold text-cyan-300 font-display">{annualCo2Saved.toLocaleString()} kg CO₂</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 text-xs font-bold text-left flex items-start gap-2.5">
                  <Coins className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 animate-pulse" />
                  <span>Khuvo Smart Clean pays for itself within just 45 days of generation recovery!</span>
                </div>

                <button
                  onClick={() => {
                    const priceSection = document.getElementById("calculator");
                    if (priceSection) priceSection.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-4 bg-white text-khuvo-navy font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-khuvo-cyan hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                >
                  Estimate Service Clean Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

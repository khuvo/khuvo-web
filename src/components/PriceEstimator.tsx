"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Sparkles, ShieldCheck, ArrowRight, Sun, Droplets, Car, Bike } from "lucide-react";

interface PriceEstimatorProps {
  onOpenBooking: (service: string) => void;
}

export default function PriceEstimator({ onOpenBooking }: PriceEstimatorProps) {
  const [activeTab, setActiveTab] = useState("solar");
  const [frequency, setFrequency] = useState("onetime"); // onetime, quarterly, monthly
  
  // Custom Service Options
  const [solarPanels, setSolarPanels] = useState(15);
  const [tankLiters, setTankLiters] = useState(1000);
  const [carType, setCarType] = useState("sedan"); // hatchback, sedan, suv
  const [bikeType, setBikeType] = useState("sports"); // standard, sports

  const [price, setPrice] = useState(0);
  const [savings, setSavings] = useState(0);

  // Compute live price
  useEffect(() => {
    let basePrice = 0;
    
    if (activeTab === "solar") {
      // Solar Panel Math: Base ₹499 + ₹40 per panel
      basePrice = 499 + solarPanels * 40;
    } else if (activeTab === "tank") {
      // Tank Math: ₹1.2 per liter with bulk discount
      if (tankLiters <= 500) basePrice = 799;
      else if (tankLiters <= 1000) basePrice = 1299;
      else if (tankLiters <= 2000) basePrice = 1999;
      else basePrice = 3999;
    } else if (activeTab === "car") {
      // Car Math: hatchback=399, sedan=499, suv=699
      if (carType === "hatchback") basePrice = 399;
      else if (carType === "sedan") basePrice = 499;
      else basePrice = 699;
    } else if (activeTab === "bike") {
      // Bike Math: standard=199, sports=299
      basePrice = bikeType === "standard" ? 199 : 299;
    }

    // Apply Frequency Discounts: monthly=20% off, quarterly=10% off
    let finalPrice = basePrice;
    let savedAmt = 0;

    if (frequency === "monthly") {
      savedAmt = basePrice * 0.20;
      finalPrice = basePrice - savedAmt;
    } else if (frequency === "quarterly") {
      savedAmt = basePrice * 0.10;
      finalPrice = basePrice - savedAmt;
    }

    setPrice(Math.round(finalPrice));
    setSavings(Math.round(savedAmt));
  }, [activeTab, frequency, solarPanels, tankLiters, carType, bikeType]);

  const handleBookingRedirect = () => {
    // Escalate current state values to the main modular Booking modal
    onOpenBooking(activeTab);
  };

  return (
    <section id="calculator" className="section-padding bg-khuvo-navyLight relative">
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full glow-orb-cyan blur-[120px] -z-10 opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-khuvo-cyan flex items-center justify-center gap-1.5 font-display">
            <ShieldCheck className="w-4 h-4" /> Live Calculation
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            KHUVO Smart Pricing Engine
          </h2>
          <p className="text-sm text-khuvo-slate leading-relaxed font-light">
            Zero guess-work. Custom calculate your service quote in real-time. No emails, no phone callbacks required.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Parametric Controls */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl glass-panel flex flex-col justify-between space-y-6">
            {/* Service Category tabs */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-khuvo-slate mb-3">
                1. Select Service Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "solar", label: "Solar Panel", icon: Sun },
                  { id: "tank", label: "Water Tank", icon: Droplets },
                  { id: "car", label: "Car Wash", icon: Car },
                  { id: "bike", label: "Bike Wash", icon: Bike },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-2 ${
                        activeTab === item.id
                          ? "bg-khuvo-blue/15 border-khuvo-blue text-khuvo-cyan shadow-glow"
                          : "bg-white/5 border-white/10 text-khuvo-slate hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Controls based on Service Category Selection */}
            <div className="py-4 border-y border-white/5 space-y-6">
              {activeTab === "solar" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-semibold uppercase tracking-wider text-khuvo-slate">
                      2. Adjust Solar Panel Count
                    </label>
                    <span className="px-3 py-1 bg-khuvo-cyan/15 text-khuvo-cyan rounded-full font-bold font-display">
                      {solarPanels} Panels
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={solarPanels}
                    onChange={(e) => setSolarPanels(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-khuvo-cyan"
                  />
                  <div className="flex justify-between text-[10px] text-khuvo-slate">
                    <span>Min: 5 Panels</span>
                    <span>Max: 100+ Panels</span>
                  </div>
                </div>
              )}

              {activeTab === "tank" && (
                <div className="space-y-4">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-khuvo-slate">
                    2. Select Water Tank Volume
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[500, 1000, 2000, 5000].map((vol) => (
                      <button
                        key={vol}
                        onClick={() => setTankLiters(vol)}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                          tankLiters === vol
                            ? "bg-khuvo-cyan/15 border-khuvo-cyan text-white"
                            : "bg-white/5 border-white/10 text-khuvo-slate hover:text-white"
                        }`}
                      >
                        {vol >= 1000 ? `${vol / 1000}k Liters` : `${vol}L`}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "car" && (
                <div className="space-y-4">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-khuvo-slate">
                    2. Select Car Segment
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "hatchback", label: "Hatchback" },
                      { id: "sedan", label: "Sedan" },
                      { id: "suv", label: "SUV / Luxury" },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setCarType(type.id)}
                        className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                          carType === type.id
                            ? "bg-khuvo-cyan/15 border-khuvo-cyan text-white"
                            : "bg-white/5 border-white/10 text-khuvo-slate hover:text-white"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "bike" && (
                <div className="space-y-4">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-khuvo-slate">
                    2. Select Bike Category
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "standard", label: "Commuter / Scooter" },
                      { id: "sports", label: "Premium / Cruiser" },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setBikeType(type.id)}
                        className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                          bikeType === type.id
                            ? "bg-khuvo-cyan/15 border-khuvo-cyan text-white"
                            : "bg-white/5 border-white/10 text-khuvo-slate hover:text-white"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Maintenance Frequency settings */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-khuvo-slate mb-3">
                3. Choose Maintenance Cycle
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: "onetime", label: "One-Time Clean", discount: "0%" },
                  { id: "quarterly", label: "Quarterly AMC", discount: "Save 10%" },
                  { id: "monthly", label: "Monthly AMC", discount: "Save 20%" },
                ].map((freq) => (
                  <button
                    key={freq.id}
                    onClick={() => setFrequency(freq.id)}
                    className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all flex justify-between items-center ${
                      frequency === freq.id
                        ? "bg-khuvo-cyan/15 border-khuvo-cyan text-white"
                        : "bg-white/5 border-white/10 text-khuvo-slate hover:text-white"
                    }`}
                  >
                    <span>{freq.label}</span>
                    <span className="text-[9px] font-bold text-khuvo-cyan bg-khuvo-cyan/10 px-1.5 py-0.5 rounded-full">
                      {freq.discount}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Live Pricing Display and Checkout */}
          <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-khuvo-blue to-sky-950 border border-white/10 shadow-blueGlow flex flex-col justify-between text-center relative overflow-hidden">
            {/* Background Glow effects inside pricing box */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full glow-orb-cyan blur-2xl opacity-30 pointer-events-none"></div>

            <div className="space-y-4">
              <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider text-khuvo-cyan bg-khuvo-cyan/10 border border-khuvo-cyan/30 rounded-full inline-flex items-center gap-1 uppercase">
                <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: "8s" }} /> Instant Quote
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white font-display">
                Estimated Clean Price
              </h3>
              
              <div className="py-6">
                <span className="text-4xl md:text-5xl font-black text-white font-display block">
                  ₹{price}
                </span>
                <span className="text-[10px] text-khuvo-slate block mt-1 uppercase font-semibold">
                  Includes Eco surfactants & tools
                </span>
              </div>

              {savings > 0 && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold inline-block">
                  Frequency Subscription Saved: ₹{savings}!
                </div>
              )}
            </div>

            <div className="space-y-4 mt-8 lg:mt-0">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-left text-xs text-khuvo-slate space-y-2">
                <div className="flex justify-between">
                  <span>Chemical formula:</span>
                  <span className="text-white font-medium">AR-coating friendly pH 7</span>
                </div>
                <div className="flex justify-between">
                  <span>Equipment:</span>
                  <span className="text-white font-medium">Soft Microfiber + Pressure wash</span>
                </div>
                <div className="flex justify-between">
                  <span>Operator:</span>
                  <span className="text-white font-medium">Certified Khuvo Technician</span>
                </div>
              </div>

              <button
                onClick={handleBookingRedirect}
                className="w-full py-4 bg-white text-khuvo-navy font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-khuvo-cyan hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

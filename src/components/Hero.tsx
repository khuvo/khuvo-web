"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Star, Calendar, MessageSquare, ArrowUpRight, Cpu, Compass, Activity } from "lucide-react";

interface HeroProps {
  onOpenBooking: (service: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <header className="relative w-full min-h-screen bg-khuvo-navy tech-grid overflow-hidden flex flex-col justify-between">
      {/* Decorative Radial Background Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full glow-orb-cyan blur-[120px] -z-10 pointer-events-none opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full glow-orb-blue blur-[120px] -z-10 pointer-events-none opacity-40"></div>

      {/* Floating Header Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-khuvo-blue to-khuvo-cyan flex items-center justify-center font-display font-extrabold text-xl tracking-tighter shadow-glow select-none">
            K
          </div>
          <span className="font-display font-black text-2xl tracking-widest text-white">
            KHUVO<span className="text-khuvo-cyan font-bold">.</span>
          </span>
        </div>

        {/* Desktop Quick Directory links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-khuvo-slate">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#why-choose-us" className="hover:text-white transition-colors">Technology</a>
          <a href="#calculator" className="hover:text-white transition-colors">Pricing Engine</a>
          <a href="#subscriptions" className="hover:text-white transition-colors">Subscriptions</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => onOpenBooking("solar")}
            className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-khuvo-cyan/40 text-xs font-bold uppercase tracking-wider text-white transition-all flex items-center gap-1.5"
          >
            B2B Portal <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Main Hero Column */}
      <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow z-10">
        {/* Left Grid: Typographic Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Micro Trust Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white"
          >
            <span className="flex items-center text-amber-400 gap-0.5 bg-amber-400/10 px-2 py-0.5 rounded-full font-semibold">
              <Star className="w-3 h-3 fill-current" /> 4.9
            </span>
            <span className="text-khuvo-slate font-medium">Trusted Cleaning Partner of Modern India</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white leading-[1.1]"
          >
            Smart Cleaning <br />
            Services for <br />
            <span className="bg-gradient-to-r from-khuvo-blue via-khuvo-cyan to-white bg-clip-text text-transparent">
              Modern India
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-khuvo-slate max-w-xl leading-relaxed font-light"
          >
            Solar Panel Cleaning, Water Tank Sanitizing, and Doorstep Vehicle Wash — structured for high performance, operational efficiency, and eco-safe execution.
          </motion.p>

          {/* Action Trigger Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none"
          >
            <button 
              onClick={() => onOpenBooking("solar")}
              className="px-8 py-4 bg-gradient-to-r from-khuvo-blue to-khuvo-cyan rounded-xl text-white font-bold uppercase tracking-wider text-xs shadow-glow hover:shadow-blueGlow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Service Now
            </button>
            <button 
              onClick={() => window.open("https://wa.me/919999999999?text=Hi%20Khuvo!%20I'm%20interested%20in%20arranging%20a%20professional%20solar%20panel/tank%20cleaning%20inspection.", "_blank")}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold uppercase tracking-wider text-xs hover:bg-white/10 hover:border-khuvo-cyan/40 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Dispatch
            </button>
          </motion.div>

          {/* Value Pillars List */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5 max-w-lg"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-khuvo-cyan shrink-0" />
              <span className="text-xs font-semibold text-white">Verified Pros Only</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-khuvo-cyan shrink-0" />
              <span className="text-xs font-semibold text-white">Same-Day Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-khuvo-cyan shrink-0" />
              <span className="text-xs font-semibold text-white">Eco-Safe Formula</span>
            </div>
          </motion.div>
        </div>

        {/* Right Grid: High-Tech Service Dashboard Mockup Visual */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[420px] aspect-[9/10] rounded-2xl glass-panel shadow-blueGlow border border-white/10 p-6 flex flex-col justify-between overflow-hidden animate-float"
          >
            {/* Glowing Tech Accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-khuvo-blue via-khuvo-cyan to-transparent"></div>

            {/* Dashboard Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-khuvo-cyan animate-pulse" />
                <div>
                  <span className="text-[10px] text-khuvo-slate uppercase font-semibold tracking-wider block">Real-time Telemetry</span>
                  <span className="text-xs font-bold text-white">Dispatch Node: KHV-77</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-khuvo-cyan bg-khuvo-cyan/10">
                ACTIVE
              </span>
            </div>

            {/* Simulated Live Solar Panel cleaning metric */}
            <div className="py-6 space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-khuvo-slate flex items-center gap-1"><Compass className="w-3.5 h-3.5 text-khuvo-cyan" /> Solar Output Delta</span>
                  <span className="text-emerald-400 font-bold">+34% Output</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-khuvo-blue to-khuvo-cyan w-[84%] rounded-full"></div>
                </div>
                <span className="text-[9px] text-khuvo-slate block">Output efficiency recovered after chemical-free wash.</span>
              </div>

              {/* Simulated Vehicle detailing queue */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-khuvo-slate flex items-center gap-1"><Activity className="w-3.5 h-3.5 text-khuvo-cyan" /> Doorstep Detailing Queue</span>
                  <span className="text-xs text-white font-bold">Lucknow Hub</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white">Active Order #492</span>
                    <span className="text-khuvo-cyan">Technician On Route</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white/60">Active Order #491</span>
                    <span className="text-emerald-400 font-medium">Completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action bar inside dashboard */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-khuvo-slate block">Eco-Water Consumed</span>
                <span className="text-xs font-bold text-white">Save 70% vs manual wash</span>
              </div>
              <button 
                onClick={() => onOpenBooking("solar")}
                className="px-4 py-2 text-[10px] uppercase font-bold tracking-wider rounded-lg bg-khuvo-cyan text-khuvo-navy hover:bg-white transition-colors"
              >
                Instant AMC quote
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Section Bottom Anchors */}
      <div className="w-full max-w-7xl mx-auto px-6 py-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between z-10 text-[11px] text-khuvo-slate uppercase font-semibold tracking-wider">
        <span>KHUVO OPERATIONS (NORTH INDIA ZONE)</span>
        <div className="flex gap-4">
          <span>KANPUR</span>
          <span>•</span>
          <span>LUCKNOW</span>
          <span>•</span>
          <span>UNNAO</span>
        </div>
      </div>
    </header>
  );
}

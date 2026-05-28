"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send, ShieldCheck, Zap } from "lucide-react";

export default function WhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: "Solar Panel Cleaning", msg: "Hi Khuvo, I'm looking to book professional Solar Panel cleaning for my property. Please share availability." },
    { name: "Water Tank Cleaning", msg: "Hi Khuvo, I want to schedule hygienic Water Tank vacuuming & sanitizing. Let me know the slots." },
    { name: "Doorstep Vehicle Wash", msg: "Hi Khuvo, I would like to get a premium doorstep foam wash for my car/bike today." },
  ];

  const handleWhatsAppSend = (text: string) => {
    const encoded = encodeURIComponent(text);
    // Directly connects to the official Khuvo WhatsApp number
    window.open(`https://wa.me/919473747808?text=${encoded}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans flex flex-col items-end">
      {/* Action Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] max-w-[calc(100vw-2rem)] rounded-2xl glass-panel shadow-blueGlow border border-white/10 p-5 overflow-hidden animate-float bg-[#0f172a]/95 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
              <h4 className="font-bold text-white text-sm font-display uppercase tracking-wider flex items-center gap-1.5">
                Khuvo Instant Support
              </h4>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-khuvo-slate hover:text-white hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-khuvo-slate mb-4 leading-relaxed">
            Need pricing help, AMC society quotes, or same-day technician dispatch? Pick an action:
          </p>

          <div className="space-y-2">
            {services.map((srv, idx) => (
              <button
                key={idx}
                onClick={() => handleWhatsAppSend(srv.msg)}
                className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/5 hover:border-khuvo-cyan/30 hover:bg-white/10 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-khuvo-cyan transition-colors">
                  {srv.name}
                </span>
                <Send className="w-3.5 h-3.5 text-khuvo-slate group-hover:text-khuvo-cyan group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-khuvo-slate">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-500" /> Official WhatsApp</span>
            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-500" /> Direct Connect</span>
          </div>
        </div>
      )}

      {/* Primary Toggle Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-lg hover:shadow-blueGlow hover:scale-110 active:scale-95 transition-all relative group"
        aria-label="WhatsApp support"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-khuvo-navy text-[8px] font-bold flex items-center justify-center text-white">
          1
        </span>
        <MessageSquare className="w-6 h-6 animate-pulse" />
      </button>
    </div>
  );
}

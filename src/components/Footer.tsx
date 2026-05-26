"use client";

import React from "react";
import { MessageSquare, Phone, Mail, MapPin, Sparkles, Send, Facebook, Instagram, Linkedin, Heart } from "lucide-react";

interface FooterProps {
  onOpenBooking: (service: string) => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! You have been subscribed to Khuvo maintenance alerts.");
  };

  return (
    <footer className="bg-khuvo-navy text-khuvo-slate border-t border-white/5 font-sans relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] rounded-full glow-orb-blue blur-[120px] -z-10 opacity-20 pointer-events-none"></div>

      {/* Corporate Summary & Newsletter Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5">
        
        {/* Company Pitch */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-khuvo-blue to-khuvo-cyan flex items-center justify-center font-display font-extrabold text-lg tracking-tighter text-white shadow-glow">
              K
            </div>
            <span className="font-display font-black text-xl tracking-widest text-white uppercase">
              KHUVO<span className="text-khuvo-cyan font-bold">.</span>
            </span>
          </div>
          <p className="text-xs leading-relaxed font-light">
            Khuvo is a tech-enabled, premium property maintenance and ecological cleaning platform. We streamline certified solar grid washing, sterilized tank cleaning, and doorstep vehicle care.
          </p>
          
          {/* Social Channels */}
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "https://facebook.com/khuvo.in" },
              { icon: Instagram, href: "https://instagram.com/khuvo.in" },
              { icon: Linkedin, href: "https://linkedin.com/company/khuvo" },
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-khuvo-cyan/40 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Links Column 1: Services */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Services Directory</h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <button onClick={() => onOpenBooking("solar")} className="hover:text-white transition-colors text-left">
                Solar Panel Cleaning
              </button>
            </li>
            <li>
              <button onClick={() => onOpenBooking("tank")} className="hover:text-white transition-colors text-left">
                Water Tank Sanitizing
              </button>
            </li>
            <li>
              <button onClick={() => onOpenBooking("car")} className="hover:text-white transition-colors text-left">
                Doorstep Car Detailing
              </button>
            </li>
            <li>
              <button onClick={() => onOpenBooking("bike")} className="hover:text-white transition-colors text-left">
                Doorstep Bike Washing
              </button>
            </li>
            <li>
              <button onClick={() => onOpenBooking("society")} className="hover:text-white transition-colors text-left">
                B2B Bulk AMC Slabs
              </button>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Hubs */}
        <div className="md:col-span-3 space-y-4 text-left">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Operations Zones</h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-khuvo-cyan shrink-0" /> Kanpur Central Hub</li>
            <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-khuvo-cyan shrink-0" /> Lucknow Regional Hub</li>
            <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-khuvo-cyan shrink-0" /> Unnao Express Hub</li>
            <li className="text-[10px] text-khuvo-slate font-light mt-4 leading-normal">
              *Certified technicians dispatched via operations vans.
            </li>
          </ul>
        </div>

        {/* Links Column 3: Newsletter */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-khuvo-cyan animate-pulse" /> Maintenance Alert
          </h4>
          <p className="text-[11px] leading-relaxed font-light">
            Subscribe to receive periodic weather warnings, dust storms alerts, solar efficiency tips, and pre-launch seasonal codes.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full px-3.5 py-2.5 text-xs text-white bg-white/5 border border-white/10 rounded-xl focus:border-khuvo-cyan focus:outline-none transition-all placeholder:text-khuvo-slate/40"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-gradient-to-r from-khuvo-blue to-khuvo-cyan text-white hover:scale-105 active:scale-95 transition-transform"
              aria-label="Submit newsletter subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Contact Details Grid bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold uppercase tracking-wider">
        <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone className="w-4 h-4 text-khuvo-cyan" /> +91 99999 99999
        </a>
        <a href="mailto:support@khuvo.in" className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail className="w-4 h-4 text-khuvo-cyan" /> support@khuvo.in
        </a>
        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
          <MessageSquare className="w-4 h-4 text-khuvo-cyan" /> WhatsApp Operations Support
        </a>
      </div>

      {/* Legal Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-4 items-center justify-between text-[11px] text-khuvo-slate">
        <span>© {new Date().getFullYear()} KHUVO Technologies Private Limited. All rights reserved.</span>
        <div className="flex gap-6 uppercase font-semibold">
          <a href="#" className="hover:text-white transition-colors">Terms of Dispatch</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Shield</a>
          <a href="#" className="hover:text-white transition-colors">GST Filings</a>
        </div>
      </div>
    </footer>
  );
}

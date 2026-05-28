"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ShieldCheck, Zap, Bot, User, Loader2 } from "lucide-react";

export default function WhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }>([
    { role: "bot", text: "Hi! I'm the Khuvo AI Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const GEMINI_API_KEY = "AIzaSyB44INmWLBLif1uPchJM4L_VQ27peKRChs";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `You are an AI assistant for Khuvo, a company providing Solar Panel cleaning, Water Tank cleaning, and Doorstep Vehicle Wash services. The official contact number is +91 94737 47808 and the website is khuvo.vercel.in. Answer politely and concisely.\n\nUser: ${userText}` }] }],
          }),
        }
      );

      const data = await response.json();
      const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that.";
      setMessages((prev) => [...prev, { role: "bot", text: botText }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages((prev) => [...prev, { role: "bot", text: "Sorry, there was an error connecting to the server." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans flex flex-col items-end">
      {/* Action Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] h-[450px] max-h-[calc(100vh-100px)] max-w-[calc(100vw-2rem)] rounded-2xl glass-panel shadow-blueGlow border border-white/10 flex flex-col overflow-hidden animate-float bg-[#0f172a]/95 backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
              <h4 className="font-bold text-white text-sm font-display uppercase tracking-wider flex items-center gap-1.5">
                Khuvo AI Chat
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-khuvo-slate hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-khuvo-cyan to-blue-600 text-white"
                      : "bg-white/10 text-emerald-400"
                  }`}
                >
                  {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div
                  className={`max-w-[75%] rounded-2xl p-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-khuvo-cyan/20 text-white rounded-tr-sm border border-khuvo-cyan/30"
                      : "bg-white/5 text-khuvo-slate rounded-tl-sm border border-white/5"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 flex-row">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white/10 text-emerald-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="max-w-[75%] rounded-2xl p-3 text-sm bg-white/5 text-khuvo-slate rounded-tl-sm border border-white/5 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-khuvo-cyan" />
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-white/10 bg-white/5">
            <div className="flex items-center gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-12 text-sm text-white placeholder-khuvo-slate focus:outline-none focus:border-khuvo-cyan/50 focus:bg-white/10 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-1 top-1 bottom-1 w-8 h-8 rounded-full bg-khuvo-cyan text-khuvo-navy flex items-center justify-center hover:bg-khuvo-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-center gap-4 text-[10px] text-khuvo-slate/70">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500/70" /> AI Assistant
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-500/70" /> Instant Replies
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Primary Toggle Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-khuvo-cyan to-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-blueGlow hover:scale-110 active:scale-95 transition-all relative group"
        aria-label="AI Chat support"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-khuvo-navy text-[8px] font-bold flex items-center justify-center text-white shadow-sm">
          1
        </span>
        <Bot className="w-6 h-6 animate-pulse" />
      </button>
    </div>
  );
}

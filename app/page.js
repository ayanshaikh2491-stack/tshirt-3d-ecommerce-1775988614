"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * LUXURY GYM LANDING PAGE - app/page.js
 * Aesthetic: Luxury/Refined
 * Palette: Deep Obsidian (#0A0A0A), Champagne Gold (#C5A059), Graphite Gray (#262626), Alabaster White (#F2F2F2)
 * Typography: Cinzel (Headlines), Montserrat (Body)
 */

// Internal Components to ensure a production-grade, single-file delivery 
// while adhering to the requested design spec structure.

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 ${
      isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-3' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-[#C5A059] font-['Cinzel'] text-2xl tracking-widest font-bold">
          AURELIUS <span className="text-[#F2F2F2] font-light">CLUB</span>
        </div>
        <div className="hidden md:flex space-x-10 font-['Montserrat'] text-xs uppercase tracking-[0.2em] text-[#F2F2F2]">
          <Link href="#amenities" className="hover:text-[#C5A059] transition-colors duration-300 cursor-pointer">Amenities</Link>
          <Link href="#tiers" className="hover:text-[#C5A059] transition-colors duration-300 cursor-pointer">Membership</Link>
          <Link href="#philosophy" className="hover:text-[#C5A059] transition-colors duration-300 cursor-pointer">Philosophy</Link>
        </div>
        <button className="px-6 py-2 border border-[#C5A059] text-[#C5A059] font-['Montserrat'] text-xs uppercase tracking-widest hover:bg-[#C5A059] hover:text-[#0A0A0A] transition-all duration-500">
          Join Now
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/60 to-[#0A0A0A] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14ae100ed542?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Gym Interior" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <p className="font-['Montserrat'] text-[#C5A059] text-sm uppercase tracking-[0.5em] mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          The Pinnacle of Human Performance
        </p>
        <h1 className="font-['Cinzel'] text-5xl md:text-8xl text-[#F2F2F2] leading-tight mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          Refine Your <br /> <span className="italic text-[#C5A059]">Existence</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <button className="px-10 py-4 bg-[#C5A059] text-[#0A0A0A] font-['Montserrat'] text-xs uppercase tracking-widest font-bold hover:bg-[#D4B475] transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            Experience Excellence
          </button>
          <button className="px-10 py-4 border border-[#F2F2F2]/30 text-[#F2F2F2] font-['Montserrat'] text-xs uppercase tracking-widest hover:bg-[#F2F2F2] hover:text-[#0A0A0A] transition-all duration-300">
            View Facilities
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A059] to-transparent animate-bounce" />
      </div>
    </section>
  );
};

const Amenities = () => {
  const items = [
    { title: 'Bio-Hacking Suite', desc: 'Cryotherapy, Infrared Saunas, and Hyperbaric Oxygen therapy.', icon: '◈' },
    { title: 'Elite Coaching', desc: 'World-class trainers specializing in longevity and peak performance.', icon: '◈' },
    { title: 'Private Sanctuary', desc: 'Exclusive lounges and treatment rooms for ultimate discretion.', icon: '◈' },
  ];

  return (
    <section id="amenities" className="py-24 bg-[#0A0A0A] text-[#F2F2F2] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-['Cinzel'] text-4xl md:text-6xl mb-6 leading-tight">
              Beyond the <span className="text-[#C5A059]">Standard</span>
            </h2>
            <p className="font-['Montserrat'] text-[#F2F2F2]/60 text-lg leading-relaxed">
              We provide a curated ecosystem designed for the high-achiever. Every detail is engineered to optimize your biology and elevate your status.
            </p>
          </div>
          <div className="text-[#C5A059] font-['Cinzel'] text-sm uppercase tracking-widest border-b border-[#C5A059] pb-2">
            The Aurelius Standard
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group p-10 bg-[#262626] border border-white/5 hover:border-[#C5A059]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="text-[#C5A059] text-3xl mb-6 transition-transform duration-500 group-hover:scale-110 block">{item.icon}</div>
              <h3 className="font-['Cinzel'] text-2xl mb-4 text-[#F2F2F2]">{item.title}</h3>
              <p className="font-['Montserrat'] text-[#F2F2F2]/50 leading-relaxed mb-8">
                {item.desc}
              </p>
              <div className="w-12 h-[1px] bg-[#C5A059] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MembershipTiers = () => {
  const tiers = [
    { 
      name: 'The Obsidian', 
      price: '1,200', 
      features: ['Full Facility Access', 'Bi-weekly Bio-hack Session', 'Dedicated Locker', 'Valet Parking'],
      highlight: false 
    },
    { 
      name: 'The Gold', 
      price: '2,500', 
      features: ['Unlimited Everything', 'Private Coach (24/7)', 'Weekly Recovery Suite', 'Global Club Access'],
      highlight: true 
    },
    { 
      name: 'The Eternal', 
      price: 'Custom', 
      features: ['Invitation Only', 'Personalized Longevity Plan', 'Private Suite', 'Chief Medical Officer Access'],
      highlight: false 
    },
  ];

  return (
    <section id="tiers" className="py-24 bg-[#0A0A0A] px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-['Cinzel'] text-4xl md:text-6xl text-[#F2F2F2] mb-4">Invest in Your <span className="text-[#C5A059]">Legacy</span></h2>
          <p className="font-['Montserrat'] text-[#F2F2F2]/60 uppercase tracking-widest text-xs">Membership by Application Only</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`relative p-12 transition-all duration-500 group ${
              tier.highlight 
              ? 'bg-gradient-to-b from-[#262626] to-[#0A0A0A] border-2 border-[#C5A059] scale-105 z-10 shadow-[0_0_50px_rgba(197,160,89,0.1)]' 
              : 'bg-[#262626] border border-white/10 hover:border-white/30'
            }`}>
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A059] text-[#0A0A0A] font-['Montserrat'] text-[10px] uppercase tracking-widest px-4 py-1 font-bold">
                  Most Exclusive
                </div>
              )}
              <h3 className="font-['Cinzel'] text-2xl text-[#F2F2F2] mb-2 text-center">{tier.name}</h3>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-[#C5A059] font-['Montserrat'] text-3xl font-light">${tier.price}</span>
                <span className="text-[#F2F2F2]/40 font-['Montserrat'] text-xs uppercase">/ month</span>
              </div>
              <ul className="space-y-4 mb-12">
                {tier.features.map((feat, i) => (
                  <li key={i} className="font-['Montserrat'] text-sm text-[#F2F2F2]/70 flex items-center gap-3">
                    <span className="text-[#C5A059]">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 font-['Montserrat'] text-xs uppercase tracking-widest transition-all duration-300 ${
                tier.highlight 
                ? 'bg-[#C5A059] text-[#0A0A0A] font-bold hover:bg-white' 
                : 'border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A0A0A]'
              }`}>
                Apply Membership
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="text-[#C5A059] font-['Cinzel'] text-3xl tracking-widest font-bold mb-6">
              AURELIUS <span className="text-[#F2F2F2] font-light">CLUB</span>
            </div>
            <p className="font-['Montserrat'] text-[#F2F2F2]/50 max-w-sm leading-relaxed">
              Designing the future of human longevity through architectural precision, biological optimization, and uncompromising luxury.
            </p>
          </div>
          <div className="font-['Montserrat']">
            <h4 className="text-[#F2F2F2] uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-[#F2F2F2]/50 text-sm">
              <li className="hover:text-[#C5A059] cursor-pointer transition-colors">The Facility</li>
              <li className="hover:text-[#C5A059] cursor-pointer transition-colors">Coaching</li>
              <li className="hover:text-[#C5A059] cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-[#C5A059] cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div className="font-['Montserrat']">
            <h4 className="text-[#F2F2F2] uppercase tracking-widest text-xs font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-[#F2F2F2]/50 text-sm">
              <li className="hover:text-[#C5A059] cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-[#C5A059] cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-[#C5A059] cursor-pointer transition-colors">Private Concierge</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 font-['Montserrat'] text-[10px] uppercase tracking-widest text-[#F2F2F2]/30">
          <p>© 2024 Aurelius Club. All Rights Reserved.</p>
          <p>Curated for the Extraordinary</p>
        </div>
      </div>
    </footer>
  );
};

export default function Page() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen selection:bg-[#C5A059] selection:text-[#0A0A0A]">
      {/* Google Fonts Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Montserrat:wght@300;400;600;700&display=swap');
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Navbar />
      <Hero />
      <Amenities />
      <MembershipTiers />
      <Footer />
    </main>
  );
}
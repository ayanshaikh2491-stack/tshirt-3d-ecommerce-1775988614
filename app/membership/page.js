"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const plans = [
  {
    name: "STARTER",
    price: "49",
    period: "MO",
    description: "Perfect for those starting their journey. Access to the iron and the energy.",
    features: [
      "Full Gym Access",
      "Locker Room & Showers",
      "Basic Workout Plan",
      "Mobile App Access",
      "1 Guest Pass / Month"
    ],
    popular: false,
  },
  {
    name: "PRO",
    price: "89",
    period: "MO",
    description: "For the dedicated. Advanced tools and guided progress for maximum gains.",
    features: [
      "All Starter Features",
      "Unlimited Group Classes",
      "Monthly PT Session",
      "Nutrition Guide",
      "Priority Booking",
      "Recovery Zone Access"
    ],
    popular: true,
  },
  {
    name: "ELITE",
    price: "149",
    period: "MO",
    description: "The ultimate powerhouse experience. No limits. No excuses. Total dominance.",
    features: [
      "All Pro Features",
      "Unlimited Personal Training",
      "Custom Meal Planning",
      "Biometric Tracking",
      "VIP Lounge Access",
      "Dedicated Locker"
    ],
    popular: false,
  },
];
export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-['Plus_Jakarta_Sans'] selection:bg-[#C0FF00] selection:text-black">
      {/* Custom Font Injection via Style Tag for Demo Purposes */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10"
          >
            <h1 className="font-syne text-6xl md:text-9xl uppercase leading-none tracking-tighter">
              Choose Your <br />
              <span className="text-[#C0FF00]">Power</span>
            </h1>
            <p className="mt-8 max-w-xl text-muted-slate text-[#A1A1AA] text-lg md:text-xl font-medium leading-relaxed">
              Stop settling for average. Invest in your physical evolution with our high-performance membership tiers. 
              No contracts. No bullshit. Just results.
            </p>
          </motion.div>
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 -z-0 opacity-20 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-[#C0FF00] blur-[120px] rounded-full -mr-40 -mt-20"></div>
          </div>
        </div>
      </section>
      {/* Pricing Toggle */}
      <div className="flex justify-center mb-16">
        <div className="bg-[#2D2D2D] p-1 flex border-2 border-[#C0FF00] shadow-[4px_4px_0px_0px_rgba(192,255,0,1)]">
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 text-sm font-bold uppercase transition-all ${billingCycle === 'monthly' ? 'bg-[#C0FF00] text-black' : 'text-white hover:text-[#C0FF00]'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 text-sm font-bold uppercase transition-all ${billingCycle === 'yearly' ? 'bg-[#C0FF00] text-black' : 'text-white hover:text-[#C0FF00]'}`}
          >
            Yearly <span className="text-[10px] opacity-70 ml-1">(-20%)</span>
          </button>
        </div>
      </div>
      {/* Pricing Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`group relative flex flex-col p-8 border-4 transition-all duration-300 ${
                plan.popular 
                ? 'border-[#C0FF00] bg-[#1A1A1A] scale-105 z-10' 
                : 'border-[#2D2D2D] bg-[#0A0A0A] hover:border-[#C0FF00]'
              } shadow-[8px_8px_0px_0px_rgba(45,45,45,1)] hover:shadow-[8px_8px_0px_0px_rgba(192,255,0,1)]`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-8 bg-[#C0FF00] text-black font-syne text-xs font-black px-3 py-1 uppercase tracking-widest">
                  Most Powerful
                </div>
              )}
              <div className="mb-8">
                <h3 className="font-syne text-3xl uppercase tracking-tight mb-2">{plan.name}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed h-12">
                  {plan.description}
                </p>
              </div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-syne text-6xl text-white group-hover:text-[#C0FF00] transition-colors">
                  ${billingCycle === 'monthly' ? plan.price : Math.round(plan.price * 0.8)}
                </span>
                <span className="text-[#A1A1AA] font-bold uppercase text-sm tracking-widest">
                  /{plan.period}
                </span>
              </div>
              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <div className="w-5 h-5 border-2 border-[#C0FF00] flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-[#C0FF00]"></div>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
              <Link 
                href="/booking"
                className={`w-full py-4 text-center font-syne uppercase tracking-wider transition-all duration-200 border-2 ${
                  plan.popular 
                  ? 'bg-[#C0FF00] text-black border-black hover:bg-white' 
                  : 'bg-transparent text-[#C0FF00] border-[#C0FF00] hover:bg-[#C0FF00] hover:text-black'
                }`}
              >
                Join the Elite
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Comparison Table / Brutalist Footer Section */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="border-t-4 border-[#2D2D2D] pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-syne text-5xl uppercase leading-none mb-6">
                  Still <br />
                  <span className="text-[#C0FF00]">Unsure?</span>
                </h2>
                <p className="text-[#A1A1AA] text-lg mb-8 max-w-md">
                  We don't believe in locking you in. No long-term contracts, no hidden fees. Just a commitment to your own growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/faq" className="px-8 py-3 border-2 border-[#2D2D2D] font-bold uppercase text-xs tracking-widest hover:bg-[#2D2D2D] transition-colors">
                    Read the FAQ
                  </Link>
                  <Link href="/contact" className="px-8 py-3 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-[#C0FF00] transition-colors">
                    Talk to a Trainer
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-[#C0FF00] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                <div className="relative bg-[#0A0A0A] border-4 border-black p-8 text-white">
                  <h4 className="font-syne text-2xl uppercase mb-4">The Guarantee</h4>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    Join any plan today. If you don't feel the surge of adrenaline and the shift in your performance within the first 14 days, we'll refund your membership fee in full. No questions asked.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#C0FF00] font-bold uppercase text-xs tracking-tighter">
                    <span>100% Risk Free</span>
                    <span className="w-8 h-[2px] bg-[#C0FF00]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
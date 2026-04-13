"use client";
import React, { useState } from 'react';
const plans = [
  {
    name: 'BASIC',
    price: { monthly: '29', yearly: '24' },
    description: 'Essential access for those starting their journey.',
    features: [
      'Access to Gym Floor',
      'Locker Room Access',
      'Free Guest Pass (1/mo)',
      'Basic Workout Plan',
    ],
    highlighted: false,
  },
  {
    name: 'PRO',
    price: { monthly: '59', yearly: '49' },
    description: 'The gold standard for dedicated athletes.',
    features: [
      '24/7 All-Access',
      'Unlimited Group Classes',
      'Sauna & Steam Room',
      'Nutrition Guide',
      'Priority Support',
    ],
    highlighted: true,
  },
  {
    name: 'ELITE',
    price: { monthly: '99', yearly: '79' },
    description: 'Peak performance with personalized guidance.',
    features: [
      'Everything in PRO',
      '1-on-1 Personal Training',
      'Custom Meal Plans',
      'Recovery Suite Access',
      'Dedicated Coach',
    ],
    highlighted: false,
  },
];
export default function PricingCards() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  return (
    <section className="py-24 px-6 bg-[#121212] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-['Archivo_Black'] text-5xl md:text-7xl uppercase italic tracking-tighter leading-none mb-6">
            Choose Your <span className="text-[#D9FF00]">Level</span>
          </h2>
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-[#4B5563]'}`}>MONTHLY</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-[#4B5563] rounded-full p-1 transition-colors duration-300 hover:bg-[#6B7280]"
            >
              <div className={`w-5 h-5 bg-[#D9FF00] rounded-full transition-transform duration-300 ease-out ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-white' : 'text-[#4B5563]'}`}>YEARLY <span className="text-[#D9FF00] ml-1">(-20%)</span></span>
          </div>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`group relative transition-all duration-300 ease-out hover:-translate-y-4 
                ${plan.highlighted 
                  ? 'bg-[#1A1A1A] border-4 border-[#D9FF00] scale-105 z-10' 
                  : 'bg-[#1A1A1A] border-4 border-[#4B5563] hover:border-[#D9FF00]'
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D9FF00] text-[#121212] font-['Archivo_Black'] text-xs px-4 py-1 uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="font-['Archivo_Black'] text-3xl uppercase italic mb-2 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[#B0B0B0] text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="font-['Archivo_Black'] text-6xl italic">
                    ${plan.price[billingCycle]}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[#B0B0B0] uppercase text-xs tracking-widest">
                    /month
                  </span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 font-['Plus_Jakarta_Sans'] text-sm">
                      <svg 
                        className="w-5 h-5 text-[#D9FF00] shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlighted ? 'text-white' : 'text-[#E0E0E0]'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`
                  font-['Archivo_Black'] uppercase italic py-4 px-8 transition-all duration-200 
                  ${plan.highlighted 
                    ? 'bg-[#D9FF00] text-[#121212] hover:bg-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]' 
                    : 'bg-transparent border-2 border-[#D9FF00] text-[#D9FF00] hover:bg-[#D9FF00] hover:text-[#121212]'
                  }
                `}>
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D9FF00] opacity-5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D9FF00] opacity-5 blur-[100px] rounded-full" />
      </div>
    </section>
  );
}
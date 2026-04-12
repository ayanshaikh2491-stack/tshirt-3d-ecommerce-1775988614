"use client";
import React, { useState } from 'react';
const MembershipTiers = () => {
  const [activeTier, setActiveTier] = useState('Elite');
  const tiers = [
    {
      name: 'The Essential',
      price: '199',
      description: 'A curated entry into the world of peak performance.',
      features: [
        'Unlimited Access to State-of-the-Art Gym',
        'Luxury Locker Room & Steam Room',
        'Complimentary Towel Service',
        'Basic Wellness Assessment',
        'Digital Training Portal Access'
      ],
      cta: 'Begin Journey',
      highlighted: false
    },
    {
      name: 'The Elite',
      price: '349',
      description: 'The definitive standard for those who demand excellence.',
      features: [
        'Everything in The Essential',
        'Weekly Personal Training Session',
        'Full Access to Recovery Suite (Cryotherapy & Sauna)',
        'Priority Booking for Specialized Classes',
        'Monthly Nutrition Consultation',
        'Guest Pass for One Companion'
      ],
      cta: 'Enter The Elite',
      highlighted: true
    },
    {
      name: 'The Sovereign',
      price: '599',
      description: 'An uncompromising sanctuary of health and prestige.',
      features: [
        'Everything in The Elite',
        'Daily Dedicated Private Coaching',
        '24/7 Concierge Wellness Management',
        'Private Lounge & Recovery Suite Access',
        'Customized Bio-Hacking Protocol',
        'Unlimited Guest Privileges'
      ],
      cta: 'Claim Sovereignty',
      highlighted: false
    }
  ];
  return (
    <section className="relative py-24 px-6 bg-[#0A0A0A] overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-['Cinzel'] text-4xl md:text-6xl text-[#F2F2F2] mb-6 tracking-wide">
            Membership <span className="text-[#C5A059]">Tiers</span>
          </h2>
          <div className="w-24 h-px bg-[#C5A059] mx-auto mb-8" />
          <p className="font-['Montserrat'] text-[#F2F2F2]/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Select the level of refinement that matches your ambition. From essential access to an all-encompassing wellness sanctuary.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-700 ease-out transform hover:-translate-y-4 ${
                tier.highlighted 
                ? 'scale-105 z-20' 
                : 'scale-100 z-10'
              }`}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                tier.highlighted 
                ? 'opacity-30 group-hover:opacity-50 bg-[#C5A059] blur-xl' 
                : 'opacity-0 group-hover:opacity-20 bg-[#C5A059] blur-xl'
              }`} />
              <div className={`relative h-full rounded-2xl p-8 md:p-10 border transition-all duration-500 ${
                tier.highlighted 
                ? 'bg-[#1A1A1A] border-[#C5A059] shadow-[0_0_40px_rgba(197,160,89,0.1)]' 
                : 'bg-[#262626] border-[#C5A059]/20 hover:border-[#C5A059]/60'
              }`}>
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A059] text-[#0A0A0A] font-['Montserrat'] text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-4 rounded-full">
                    Most Coveted
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="font-['Cinzel'] text-2xl text-[#F2F2F2] mb-4 tracking-widest">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-['Cinzel'] text-5xl text-[#C5A059]">${tier.price}</span>
                    <span className="font-['Montserrat'] text-[#F2F2F2]/40 text-sm uppercase tracking-widest">/ month</span>
                  </div>
                  <p className="font-['Montserrat'] text-[#F2F2F2]/60 text-sm leading-relaxed italic">
                    {tier.description}
                  </p>
                </div>
                <div className="space-y-5 mb-12">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-4 group/item">
                      <div className="mt-1.5">
                        <svg 
                          className="w-4 h-4 text-[#C5A059] transition-transform duration-300 group-hover/item:scale-125" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-['Montserrat'] text-[#F2F2F2]/80 text-sm leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <button 
                  className={`w-full py-4 px-8 rounded-lg font-['Montserrat'] text-xs uppercase tracking-[0.2em] transition-all duration-500 font-bold ${
                    tier.highlighted 
                    ? 'bg-[#C5A059] text-[#0A0A0A] hover:bg-white hover:text-[#0A0A0A] shadow-lg' 
                    : 'bg-transparent border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A0A0A]'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="font-['Montserrat'] text-[#F2F2F2]/40 text-sm tracking-widest">
            * ALL MEMBERSHIPS INCLUDE COMPLIMENTARY VALET PARKING & SPA ACCESS
          </p>
        </div>
      </div>
    </section>
  );
};
export default MembershipTiers;
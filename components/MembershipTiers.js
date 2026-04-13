"use client";

import React from 'react';

const MembershipTiers = () => {
  const tiers = [
    {
      name: "BASIC",
      price: "29",
      description: "ESSENTIAL ACCESS FOR THE DISCIPLINED.",
      features: [
        "Access to Weight Room",
        "Locker Room & Showers",
        "Basic Workout Plan",
        "Community Access",
      ],
      highlight: false,
      cta: "START NOW",
    },
    {
      name: "PRO",
      price: "59",
      description: "OPTIMIZED FOR MAXIMUM PERFORMANCE.",
      features: [
        "24/7 Full Access",
        "Group Training Classes",
        "Nutrition Guide",
        "Monthly Progress Scan",
        "Priority Equipment Booking",
      ],
      highlight: true,
      cta: "GO PRO",
    },
    {
      name: "ELITE",
      price: "99",
      description: "THE PINNACLE OF ATHLETIC DOMINANCE.",
      features: [
        "Everything in Pro",
        "1-on-1 Personal Coaching",
        "Private Recovery Suite",
        "Custom Macro Plan",
        "Guest Passes (2/mo)",
      ],
      highlight: false,
      cta: "JOIN ELITE",
    },
  ];

  return (
    <section className="bg-[#000000] text-[#F8FAFC] py-24 px-6 font-['Space_Grotesk'] overflow-hidden">
      {/* Typography Import for the specific Brutal look */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;700&display=swap');
        
        @keyframes neonPulse {
          0% { box-shadow: 0 0 0 0 rgba(206, 255, 0, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(206, 255, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(206, 255, 0, 0); }
        }
        .animate-neon-pulse {
          animation: neonPulse 2s infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 relative">
          <h2 className="text-7xl md:text-9xl font-['Bebas_Neue'] leading-none tracking-tighter text-[#F8FAFC]">
            CHOOSE YOUR <span className="text-[#CEFF00]">LEVEL</span>
          </h2>
          <div className="absolute -bottom-4 left-0 w-32 h-2 bg-[#CEFF00]"></div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-[#4B5563]">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`group relative p-8 md:p-12 transition-all duration-300 cursor-pointer
                ${index !== tiers.length - 1 ? 'md:border-r-4 border-[#4B5563]' : ''}
                ${tier.highlight ? 'bg-[#CEFF00] text-[#000000]' : 'bg-[#000000] text-[#F8FAFC] hover:bg-[#111111]'}
                flex flex-col justify-between
              `}
            >
              {/* Card Hover Effect: Aggressive Scale/Shift */}
              <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <p className={`text-sm font-bold tracking-widest mb-2 ${tier.highlight ? 'text-black' : 'text-[#4B5563]'}`}>
                  MEMBERSHIP
                </p>
                <h3 className="text-5xl font-['Bebas_Neue'] mb-4 leading-none">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-6xl font-['Bebas_Neue']">${tier.price}</span>
                  <span className={`text-sm uppercase font-bold ${tier.highlight ? 'text-black/70' : 'text-[#4B5563]'}`}>/mo</span>
                </div>
                <p className={`text-sm leading-relaxed mb-10 font-medium ${tier.highlight ? 'text-black/80' : 'text-[#F8FAFC]/70'}`}>
                  {tier.description}
                </p>

                <ul className="space-y-4 mb-12">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium">
                      <span className={`mt-1 flex-shrink-0 w-4 h-4 border-2 flex items-center justify-center ${tier.highlight ? 'border-black' : 'border-[#CEFF00]'}`}>
                        <span className={`w-1.5 h-1.5 ${tier.highlight ? 'bg-black' : 'bg-[#CEFF00]'}`}></span>
                      </span>
                      <span className={tier.highlight ? 'text-black' : 'text-[#F8FAFC]'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10">
                <button 
                  className={`w-full py-4 px-8 text-lg font-['Bebas_Neue'] tracking-wider transition-all duration-200 
                    ${tier.highlight 
                      ? 'bg-black text-[#CEFF00] animate-neon-pulse hover:bg-white hover:text-black' 
                      : 'bg-[#CEFF00] text-black hover:bg-white hover:scale-105'
                    }
                    border-2 border-transparent
                  `}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer Tech Detail */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4 items-center text-[10px] uppercase tracking-widest text-[#4B5563]">
            <span className="w-8 h-px bg-[#4B5563]"></span>
            <span>No contracts. Cancel anytime.</span>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-[#4B5563] font-bold">
            Secure Checkout / Encrypted Payment
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipTiers;
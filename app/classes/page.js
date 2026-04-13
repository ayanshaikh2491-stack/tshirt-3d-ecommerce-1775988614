"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CLASSES_DATA = [
  {
    id: 1,
    name: "NEON HIIT",
    category: "High Intensity",
    duration: "45 MIN",
    intensity: "Extreme",
    trainer: "Marcus Vane",
    description: "A high-octane metabolic blast designed to shred fat and build explosive power.",
    time: "08:00 AM",
    image: "https://images.unsplash.com/photo-1534438327276-14ae100f555c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "ZEN FLOW",
    category: "Mind & Body",
    duration: "60 MIN",
    intensity: "Low",
    trainer: "Sasha Grey",
    description: "Restore balance and flexibility with a focused fusion of Vinyasa and mindful breathwork.",
    time: "09:30 AM",
    image: "https://images.unsplash.com/photo-1544367567-0f2fc5c78e17?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "IRON CORE",
    category: "Strength",
    duration: "60 MIN",
    intensity: "High",
    trainer: "Jaxson Steel",
    description: "Heavy compounds and progressive overload focused on maximizing raw strength.",
    time: "11:00 AM",
    image: "https://images.unsplash.com/photo-1534367553788-52da9070a995?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "BOXING BLITZ",
    category: "Combat",
    duration: "45 MIN",
    intensity: "Extreme",
    trainer: "Leo 'The Lion'",
    description: "Technical striking drills paired with grueling conditioning circuits.",
    time: "05:00 PM",
    image: "https://images.unsplash.com/photo-1549719386-707868f99543?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "POWER YOGA",
    category: "Mind & Body",
    duration: "60 MIN",
    intensity: "Medium",
    trainer: "Maya Lin",
    description: "Strength meets spirituality in this challenging sequence of balance and hold.",
    time: "06:30 PM",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ed6 આન8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "KINETIC STRENGTH",
    category: "Strength",
    duration: "50 MIN",
    intensity: "High",
    trainer: "Elena Rossi",
    description: "Functional movement training focused on athletic longevity and power.",
    time: "07:15 PM",
    image: "https://images.unsplash.com/photo-1583454157416-f7a47e1f85d7?q=80&w=800&auto=format&fit=crop"
  }
];

const CATEGORIES = ["All", "High Intensity", "Strength", "Mind & Body", "Combat"];

export default function ClassesPage() {
  const [filter, setFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredClasses = filter === "All" 
    ? CLASSES_DATA 
    : CLASSES_DATA.filter(cls => cls.category === filter);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-['Plus_Jakarta_Sans'] selection:bg-[#C0FF00] selection:text-[#0A0A0A]">
      {/* Custom Font Injector */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <h1 className="font-['Syne'] text-6xl md:text-9xl font-extrabold uppercase leading-none tracking-tighter">
              Choose Your <br />
              <span className="text-[#C0FF00] italic">Battle.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-[#A1A1AA] uppercase tracking-wide font-medium">
              Stop exercising. Start evolving. High-performance training for those who refuse to be average.
            </p>
          </div>
          
          {/* Decorative Background Element */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#C0FF00] opacity-10 blur-3xl rounded-full pointer-events-none" />
        </div>
      </section>

      {/* Filter System */}
      <nav className="sticky top-0 z-30 bg-[#0A0A0A]/80 backdrop-blur-md border-b-4 border-[#2D2D2D] px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm font-bold uppercase transition-all duration-300 border-2 
                  ${filter === cat 
                    ? 'bg-[#C0FF00] text-[#0A0A0A] border-[#C0FF00]' 
                    : 'bg-transparent text-white border-[#2D2D2D] hover:border-[#C0FF00] hover:text-[#C0FF00]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden md:block text-[#A1A1AA] text-xs font-bold uppercase tracking-widest">
            {filteredClasses.length} Classes Available
          </div>
        </div>
      </nav>

      {/* Class Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((item, index) => (
            <div 
              key={item.id}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
              className="group relative bg-[#2D2D2D] border-4 border-[#2D2D2D] hover:border-[#C0FF00] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#0A0A0A] text-white px-3 py-1 text-xs font-bold border border-[#C0FF00] uppercase">
                  {item.intensity}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-['Syne'] text-2xl font-extrabold uppercase group-hover:text-[#C0FF00] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[#C0FF00] font-bold text-sm uppercase tracking-tighter">
                    {item.duration}
                  </span>
                </div>

                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <span className="block text-[10px] text-[#A1A1AA] uppercase font-bold">Trainer</span>
                    <span className="text-sm font-bold uppercase">{item.trainer}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#A1A1AA] uppercase font-bold">Time</span>
                    <span className="text-sm font-bold uppercase">{item.time}</span>
                  </div>
                </div>

                <Link 
                  href={`/booking?classId=${item.id}`}
                  className="block w-full py-4 text-center font-['Syne'] font-extrabold uppercase tracking-wider 
                    bg-[#0A0A0A] text-white border-2 border-[#C0FF00] 
                    hover:bg-[#C0FF00] hover:text-[#0A0A0A] 
                    transition-all duration-300 transform active:scale-95"
                >
                  Book Now
                </Link>
              </div>

              {/* Hover Accents */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#C0FF00] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h3 className="font-['Syne'] text-4xl uppercase font-extrabold mb-4">No Matches Found</h3>
            <p className="text-[#A1A1AA] mb-8">We don't have that specific battle today. Try another category.</p>
            <button 
              onClick={() => setFilter("All")}
              className="px-8 py-3 bg-[#C0FF00] text-[#0A0A0A] font-bold uppercase hover:bg-white transition-colors"
            >
              Show All Classes
            </button>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="px-6 py-24 border-t-4 border-[#2D2D2D] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto bg-[#C0FF00] p-8 md:p-16 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-[#0A0A0A]">
              <h2 className="font-['Syne'] text-4xl md:text-6xl font-extrabold uppercase leading-none">
                Ready to <br /> Break Limits?
              </h2>
              <p className="mt-4 font-bold uppercase tracking-tight text-[#0A0A0A]/70 max-w-md">
                Join the elite. Experience the most aggressive training facility in the city.
              </p>
            </div>
            <Link 
              href="/membership"
              className="bg-[#0A0A0A] text-[#C0FF00] px-10 py-5 font-['Syne'] font-extrabold uppercase tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 whitespace-nowrap"
            >
              Get Membership
            </Link>
          </div>
          
          {/* Background Text Overlay */}
          <div className="absolute -bottom-10 -right-10 font-['Syne'] text-[12rem] font-extrabold text-[#0A0A0A] opacity-10 pointer-events-none select-none leading-none">
            GYM
          </div>
        </div>
      </section>
    </div>
  );
}
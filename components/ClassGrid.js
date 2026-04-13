"use client";

import React from 'react';
import { ArrowRight, Clock, Flame } from 'lucide-react';

const CLASSES = [
  {
    id: 1,
    title: "HIGHT-INTENSITY HIIT",
    trainer: "Marcus Thorne",
    duration: "45 Min",
    intensity: "Extreme",
    category: "Cardio",
    image: "https://images.unsplash.com/photo-1534438327276-14ae100ed692?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "POWER LIFTING",
    trainer: "Sarah Jenkins",
    duration: "60 Min",
    intensity: "High",
    category: "Strength",
    image: "https://images.unsplash.com/photo-1581009146145-b44262463613?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "DYNAMIC YOGA",
    trainer: "Elena Rossi",
    duration: "60 Min",
    intensity: "Medium",
    category: "Flexibility",
    image: "https://images.unsplash.com/photo-1544367567-0f2fc577971f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "BOXING CORE",
    trainer: "Andre Volkov",
    duration: "30 Min",
    intensity: "Extreme",
    category: "Combat",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7db55?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "KETTLEBELL FLOW",
    trainer: "Marcus Thorne",
    duration: "45 Min",
    intensity: "High",
    category: "Strength",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "METABOLIC BURN",
    trainer: "Sarah Jenkins",
    duration: "50 Min",
    intensity: "High",
    category: "Cardio",
    image: "https://images.unsplash.com/photo-1571019613454-1c8a427d7c8c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ClassGrid() {
  return (
    <section className="bg-[#121212] py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#D9FF00] text-sm font-bold tracking-widest uppercase mb-4 font-sans">
              The Schedule
            </h2>
            <h3 className="text-white text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              Push Your <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Limits</span> <br />
              Every Single Day.
            </h3>
          </div>
          <div className="hidden md:block">
            <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase tracking-tight transition-all hover:bg-[#D9FF00] active:scale-95">
              View Full Calendar
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#4B5563] border border-[#4B5563]">
          {CLASSES.map((cls, index) => (
            <div 
              key={cls.id}
              className="group relative bg-[#121212] overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-[#D9FF00] text-black px-3 py-1 text-xs font-black uppercase tracking-wider">
                  {cls.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white text-2xl font-black uppercase tracking-tight group-hover:text-[#D9FF00] transition-colors" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                    {cls.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-[#B0B0B0] text-sm font-medium">
                    <Clock className="w-4 h-4 text-[#D9FF00]" />
                    {cls.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[#B0B0B0] text-sm font-medium">
                    <Flame className="w-4 h-4 text-[#D9FF00]" />
                    {cls.intensity}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[#4B5563]">
                  <div className="flex flex-col">
                    <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-widest">Lead Coach</span>
                    <span className="text-white font-bold text-sm">{cls.trainer}</span>
                  </div>
                  <button className="w-12 h-12 rounded-full border-2 border-[#4B5563] flex items-center justify-center group-hover:border-[#D9FF00] group-hover:bg-[#D9FF00] transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                  </button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-0 border-[#D9FF00] group-hover:border-2 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 md:hidden">
          <button className="w-full flex items-center justify-center gap-3 bg-white text-black px-8 py-5 font-bold uppercase tracking-tight transition-all active:scale-95">
            View Full Calendar
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
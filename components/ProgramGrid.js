"use client";
import React from 'react';
import { ArrowUpRight, Dumbbell, Zap, Wind, Target } from 'lucide-react';
const programs = [
  {
    title: "IRON TEMPLE",
    description: "Pure powerlifting and hypertrophy. Designed for those who want to move mountains and shatter plateaus.",
    duration: "12 WEEKS",
    level: "ADVANCED",
    icon: <Dumbbell className="w-8 h-8" />,
    color: "#CEFF00",
  },
  {
    title: "NEON PULSE",
    description: "High-intensity metabolic conditioning. Burn fat and increase endurance through explosive movement.",
    duration: "8 WEEKS",
    level: "INTERMEDIATE",
    icon: <Zap className="w-8 h-8" />,
    color: "#CEFF00",
  },
  {
    title: "ZEN FLOW",
    description: "Mobility and mindful strength. Balance your nervous system while building a flexible, resilient core.",
    duration: "6 WEEKS",
    level: "ALL LEVELS",
    icon: <Wind className="w-8 h-8" />,
    color: "#CEFF00",
  },
  {
    title: "APEX PREDATOR",
    description: "The ultimate hybrid athlete program. Combining strength, speed, and agility for total dominance.",
    duration: "16 WEEKS",
    level: "ELITE",
    icon: <Target className="w-8 h-8" />,
    color: "#CEFF00",
  },
];
export default function ProgramGrid() {
  return (
    <section className="bg-[#000000] py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black text-[#F8FAFC] leading-none tracking-tighter uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Training <span className="text-[#CEFF00]">Systems</span>
            </h2>
            <p className="mt-6 text-[#4B5563] text-lg md:text-xl max-w-md" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              No fluff. No shortcuts. Just scientifically backed programming to push your biology to the absolute limit.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-[#CEFF00] font-bold text-sm tracking-widest uppercase border-b-2 border-[#CEFF00] pb-2">
              Explore all tracks / 2024
            </div>
          </div>
        </div>
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[#CEFF00]">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="group relative bg-[#000000] p-8 border-[#CEFF00] border-t-0 border-l-0 last:border-r-0 first:border-l-0 md:border-l md:border-t-0 transition-all duration-300 hover:bg-[#CEFF00] cursor-pointer overflow-hidden"
            >
              {/* Background Decorative Text */}
              <span className="absolute -right-4 -bottom-4 text-9xl font-black text-white/5 group-hover:text-black/10 transition-colors select-none pointer-events-none" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                0{index + 1}
              </span>
              {/* Icon */}
              <div className="text-[#CEFF00] group-hover:text-[#000000] transition-colors duration-300 mb-8">
                {program.icon}
              </div>
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-[#F8FAFC] group-hover:text-[#000000] transition-colors duration-300 mb-4 uppercase leading-none" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  {program.title}
                </h3>
                <p className="text-[#4B5563] group-hover:text-black/80 transition-colors duration-300 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {program.description}
                </p>
                <div className="flex flex-col gap-2 mb-10">
                  <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase text-[#4B5563] group-hover:text-black/60">
                    <span>Duration</span>
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase text-[#4B5563] group-hover:text-black/60">
                    <span>Difficulty</span>
                    <span>{program.level}</span>
                  </div>
                </div>
                {/* CTA Button */}
                <div className="flex items-center gap-2 text-[#CEFF00] group-hover:text-[#000000] font-bold uppercase text-xs tracking-tighter transition-colors duration-300" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  <span>Initialize Program</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
              {/* Hover Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#CEFF00] group-hover:bg-[#000000] transition-colors" />
            </div>
          ))}
        </div>
        {/* Bottom Tagline */}
        <div className="mt-12 flex justify-center">
          <div className="bg-[#CEFF00] text-[#000000] px-4 py-1 font-black uppercase text-xs tracking-widest animate-pulse" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Limited Slots Available for Q3
          </div>
        </div>
      </div>
    </section>
  );
}
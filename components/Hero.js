"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#121212] overflow-hidden flex items-center">
      {/* Background Design Elements */}
      <div className="absolute inset-0 z-0">
        {/* Large Background Text - Brutalist Style */}
        <div className="absolute -top-20 -left-10 text-[20vw] font-black text-white/[0.03] leading-none select-none pointer-events-none uppercase font-['Archivo_Black']">
          POWER
        </div>
        <div className="absolute -bottom-20 -right-10 text-[20vw] font-black text-white/[0.03] leading-none select-none pointer-events-none uppercase font-['Archivo_Black']">
          GRIND
        </div>
        {/* Accent Glow */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#D9FF00] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#D9FF00] opacity-5 blur-[120px] rounded-full"></div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block mb-6"
            >
              <span className="bg-[#D9FF00] text-[#121212] px-4 py-1 text-sm font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">
                Elite Performance Center
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.9] font-['Archivo_Black'] tracking-tighter"
            >
              BREAK THE <br />
              <span className="text-[#D9FF00]">BARRIER</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-8 text-lg md:text-xl text-[#FFFFFF] max-w-xl font-['Plus_Jakarta_Sans'] leading-relaxed text-white/80"
            >
              No excuses. No shortcuts. Just raw intensity and scientific training 
              designed to push your physique and mental fortitude to the absolute limit.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="#pricing" 
                className="group relative px-8 py-4 bg-[#D9FF00] text-[#121212] font-black uppercase tracking-tight font-['Archivo_Black'] transition-all duration-200 hover:bg-white hover:-translate-y-1 flex items-center justify-center"
              >
                Join The Elite
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link 
                href="#classes" 
                className="px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-tight font-['Archivo_Black'] transition-all duration-200 hover:border-[#D9FF00] hover:text-[#D9FF00] hover:-translate-y-1 flex items-center justify-center"
              >
                View Classes
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-4 relative"
          >
            <div className="relative z-10 aspect-square overflow-hidden border-4 border-[#D9FF00]">
              {/* Replace with actual athletic image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14ae100f555c?q=80&w=1000&auto=format&fit=crop" 
                alt="Athlete Training" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Brutalist Frame Elements */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-white/10 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#D9FF00]/30 -z-10"></div>
            {/* Floating Stat Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-30 bg-[#D9FF00] text-[#121212] p-6 shadow-2xl"
            >
              <p className="text-xs font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans'] opacity-70">Current Streak</p>
              <p className="text-4xl font-black font-['Archivo_Black']">30 DAYS</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Bottom Decorative Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#D9FF00]"></div>
    </section>
  );
};
export default Hero;
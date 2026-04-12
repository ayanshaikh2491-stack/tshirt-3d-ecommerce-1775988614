"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]">
      {/* Cinematic Background Image with Parallax-like scaling */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14dd926fc84a?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Gradient Overlays for Luxury Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 lg:px-12">
        <div className="max-w-5xl text-center">
          
          {/* Eyebrow Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <span className="font-montserrat text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase">
              Exclusivity Redefined
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-[#F2F2F2] leading-tight mb-8 tracking-tight"
          >
            The Pinnacle of <br />
            <span className="italic text-[#C5A059]">Human Performance</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-montserrat text-lg md:text-xl text-[#F2F2F2]/70 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
          >
            A sanctuary for those who demand the absolute best. Experience a fusion of 
            world-class training, architectural elegance, and bespoke wellness.
          </motion.p>

          {/* CTA Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/membership" 
              className="group relative px-10 py-4 bg-[#C5A059] text-[#0A0A0A] font-montserrat font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-[#D4B475] hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] overflow-hidden"
            >
              <span className="relative z-10">Begin Your Journey</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Link>

            <Link 
              href="/explore" 
              className="px-10 py-4 border border-[#C5A059]/30 text-[#F2F2F2] font-montserrat font-medium uppercase tracking-wider text-sm transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059] backdrop-blur-sm bg-[#262626]/20"
            >
              Explore the Club
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#F2F2F2]/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C5A059] to-transparent" />
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C5A059]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-[#C5A059]/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
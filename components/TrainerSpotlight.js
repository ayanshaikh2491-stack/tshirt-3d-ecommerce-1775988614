"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TRAINERS = [
  {
    name: "Marcus 'Iron' Thorne",
    specialty: "Hypertrophy & Powerlifting",
    image: "https://images.unsplash.com/photo-1534438327276-14ae100f5558?q=80&w=800&auto=format&fit=crop",
    bio: "Pushing human limits through scientific load management and raw intensity."
  },
  {
    name: "Sasha Volkov",
    specialty: "Olympic Weightlifting",
    image: "https://images.unsplash.com/photo-1541534741688-60y6769194d4?q=80&w=800&auto=format&fit=crop",
    bio: "Technical precision meets explosive power. Specializing in snatch and clean & jerk."
  },
  {
    name: "Elena Rodriguez",
    specialty: "Functional Athletics",
    image: "https://images.unsplash.com/photo-1518310318662-77a5bfbe3a5f?q=80&w=800&auto=format&fit=crop",
    bio: "Bridging the gap between aesthetic physique and elite athletic performance."
  },
  {
    name: "Jaxson Reed",
    specialty: "Combat Conditioning",
    image: "https://images.unsplash.com/photo-1491757733367-d28506b121d1?q=80&w=800&auto=format&fit=crop",
    bio: "Endurance and explosive strength tailored for the octagon and the ring."
  }
];

export default function TrainerSpotlight() {
  return (
    <section className="bg-[#000000] py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#CEFF00] opacity-5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-[#CEFF00] opacity-5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ x: -100, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.6, ease: "easeOut" }} 
              className="inline-block bg-[#CEFF00] text-[#000000] font-['Space_Grotesk'] font-bold px-3 py-1 mb-4 text-sm uppercase tracking-widest"
            >
              The Elite Force
            </motion.div>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="text-6xl md:text-8xl font-['Bebas_Neue'] text-[#F8FAFC] leading-none tracking-tight"
            >
              MEET THE <span className="text-[#CEFF00]">ARCHITECTS</span> OF STRENGTH
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.4 }} 
            className="hidden md:block text-[#4B5563] font-['Space_Grotesk'] text-right max-w-xs"
          >
            Our trainers don't just provide workouts; they engineer biological breakthroughs.
          </motion.div>
        </div>

        {/* Trainer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t-2 border-l-2 border-[#4B5563]">
          {TRAINERS.map((trainer, index) => (
            <motion.div 
              key={index} 
              initial={{ y: 100, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              whileHover={{ scale: 1.02 }} 
              className="group relative bg-[#000000] border-r-2 border-b-2 border-[#4B5563] overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                {/* Neon Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#CEFF00] group-hover:w-full transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 relative z-20">
                <h3 className="text-3xl font-['Bebas_Neue'] text-[#F8FAFC] group-hover:text-[#CEFF00] transition-colors duration-300">
                  {trainer.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#CEFF00]" />
                  <p className="text-[#4B5563] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold">
                    {trainer.specialty}
                  </p>
                </div>
                <p className="text-[#F8FAFC]/60 font-['Space_Grotesk'] text-sm leading-relaxed group-hover:text-[#F8FAFC] transition-colors duration-300">
                  {trainer.bio}
                </p>
                <motion.button 
                  whileTap={{ scale: 0.95 }} 
                  className="inline-flex items-center gap-2 text-[#CEFF00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest group/btn"
                >
                  View Profile
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>

              {/* Hover Background Shift */}
              <div className="absolute inset-0 bg-[#CEFF00]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.8 }} 
          className="mt-16 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#CEFF00] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <button className="relative px-8 py-4 bg-[#CEFF00] text-[#000000] font-['Bebas_Neue'] text-2xl tracking-wider hover:bg-[#F8FAFC] transition-colors duration-300">
              BOOK A STRATEGY SESSION
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;700&display=swap');
      `}</style>
    </section>
  );
}
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Wind, 
  Sparkles, 
  Utensils, 
  ShowerHead, 
  UserCheck 
} from 'lucide-react';

const amenities = [
  {
    title: "Olympic Grade Gear",
    description: "Precision-engineered equipment from the world's finest manufacturers for elite performance.",
    icon: <Dumbbell className="w-6 h-6" />,
  },
  {
    title: "Cryotherapy Suite",
    description: "Advanced thermal recovery chambers designed to reduce inflammation and accelerate healing.",
    icon: <Wind className="w-6 h-6" />,
  },
  {
    title: "Himalayan Salt Sauna",
    description: "Detoxify in our curated heat sanctuaries featuring authentic salt walls and ambient lighting.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Bespoke Nutrition",
    description: "One-on-one consultations with Michelin-starred nutritional consultants for optimized fuel.",
    icon: <Utensils className="w-6 h-6" />,
  },
  {
    title: "Italian Marble Spas",
    description: "Luxury locker rooms featuring Carrara marble and premium organic grooming products.",
    icon: <ShowerHead className="w-6 h-6" />,
  },
  {
    title: "Private Mentorship",
    description: "Exclusive access to world-class athletes and certified master coaches for personalized growth.",
    icon: <UserCheck className="w-6 h-6" />,
  },
];

export default function Amenities() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C5A059]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C5A059]/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <span className="h-px w-12 bg-[#C5A059] self-center" />
            <span className="mx-4 text-[#C5A059] uppercase tracking-[0.3em] text-xs font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              The Standard of Excellence
            </span>
            <span className="h-px w-12 bg-[#C5A059] self-center" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-[#F2F2F2] mb-6" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Curated <span className="text-[#C5A059]">Sanctuaries</span> of Wellness
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[#F2F2F2]/60 text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Beyond a fitness center, we provide a tailored ecosystem where luxury meets longevity. 
            Every detail is engineered for the uncompromising individual.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-[#262626] border border-[#C5A059]/10 hover:border-[#C5A059]/40 transition-all duration-500 ease-out"
            >
              {/* Subtle Gold Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0A0A0A] border border-[#C5A059]/30 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0A0A0A] transition-all duration-500">
                  {amenity.icon}
                </div>
                
                <h3 
                  className="text-xl text-[#F2F2F2] mb-3 group-hover:text-[#C5A059] transition-colors duration-300"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {amenity.title}
                </h3>
                
                <p 
                  className="text-[#F2F2F2]/50 leading-relaxed group-hover:text-[#F2F2F2]/80 transition-colors duration-300"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {amenity.description}
                </p>

                <div className="mt-6 flex items-center text-xs uppercase tracking-widest text-[#C5A059] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  Explore Detail 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="mt-24 flex justify-center opacity-20">
        <div className="w-px h-32 bg-gradient-to-b from-[#C5A059] to-transparent" />
      </div>
    </section>
  );
}
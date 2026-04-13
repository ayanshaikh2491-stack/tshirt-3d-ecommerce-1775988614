"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const TRAINERS = [
  {
    id: 1,
    name: "Marcus 'Iron' Thorne",
    specialty: "Hypertrophy & Strength",
    image: "https://images.unsplash.com/photo-1567013353736-175572983978?q=80&w=800&auto=format&fit=crop",
    bio: "12+ years of competitive bodybuilding and strength coaching.",
    social: "@ironthorne"
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    specialty: "High-Intensity Interval",
    image: "https://images.unsplash.com/photo-1548694659-2f96fc77775e?q=80&w=800&auto=format&fit=crop",
    bio: "Certified HIIT specialist focusing on fat loss and explosive power.",
    social: "@elenafit"
  },
  {
    id: 3,
    name: "Jaxson Reed",
    specialty: "Mobility & Recovery",
    image: "https://images.unsplash.com/photo-1534438327276-14ae100ed542?q=80&w=800&auto=format&fit=crop",
    bio: "Former pro athlete specializing in joint longevity and flexibility.",
    social: "@jaxmobility"
  },
  {
    id: 4,
    name: "Sasha Volkov",
    specialty: "Olympic Lifting",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fe9a865d?q=80&w=800&auto=format&fit=crop",
    bio: "Master of technique and power. Specializing in Snatch and Clean & Jerk.",
    social: "@volkovlift"
  },
  {
    id: 5,
    name: "Maya Chen",
    specialty: "Holistic Wellness",
    image: "https://images.unsplash.com/photo-1518310318676-7 the-6a7-c80?q=80&w=800&auto=format&fit=crop",
    bio: "Blending mindfulness with movement to optimize mental and physical health.",
    social: "@maya.flow"
  }
];

export default function TrainerCarousel() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 1.5 
        : scrollLeft + clientWidth / 1.5;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#121212] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter text-white font-archivo">
              Meet the <span className="text-[#D9FF00]">Elites</span>
            </h2>
            <p className="mt-6 text-lg text-[#4B5563] max-w-md font-plus-jakarta">
              Don't just train. Evolve. Our certified specialists push you beyond your perceived limits using science-backed methodology.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 flex items-center justify-center border-2 border-[#4B5563] text-white hover:border-[#D9FF00] hover:text-[#121212] transition-all duration-200 group"
              aria-label="Scroll Left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 flex items-center justify-center border-2 border-[#4B5563] text-white hover:border-[#D9FF00] hover:text-[#121212] transition-all duration-200 group"
              aria-label="Scroll Right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TRAINERS.map((trainer) => (
            <div 
              key={trainer.id}
              onMouseEnter={() => setIsHovered(trainer.id)}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative flex-shrink-0 w-[300px] md:w-[400px] snap-start"
            >
              {/* Card Wrapper */}
              <div className="relative h-[500px] w-full bg-[#1c1c1c] border-b-8 border-[#4B5563] group-hover:border-[#D9FF00] transition-colors duration-300 overflow-hidden">
                
                {/* Image Container */}
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src={trainer.image} 
                    alt={trainer.name} 
                    fill 
                    className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out ${isHovered === trainer.id ? 'scale-110' : 'scale-100'}`}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content Area */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  {/* Specialty Tag */}
                  <div className="inline-block bg-[#D9FF00] text-[#121212] font-black text-xs uppercase tracking-widest px-3 py-1 mb-4 skew-x-[-12deg]">
                    {trainer.specialty}
                  </div>

                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tight leading-tight font-archivo">
                    {trainer.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mt-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-plus-jakarta">
                    {trainer.bio}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[#D9FF00] font-bold text-sm uppercase tracking-tighter">
                      {trainer.social}
                    </span>
                    <button className="bg-white text-black p-2 hover:bg-[#D9FF00] transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Background Accent Decor */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D9FF00] -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        
        .font-archivo {
          font-family: 'Archivo Black', sans-serif;
        }
        .font-plus-jakarta {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
    </section>
  );
}
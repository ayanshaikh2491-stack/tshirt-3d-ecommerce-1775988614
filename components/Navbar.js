"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'CLASSES', href: '#classes' },
    { name: 'MEMBERSHIPS', href: '#pricing' },
    { name: 'TRAINERS', href: '#trainers' },
    { name: 'ABOUT', href: '#about' },
  ];
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-[#121212]/95 backdrop-blur-md border-b-4 border-[#D9FF00]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-[#D9FF00] flex items-center justify-center rotate-45 group-hover:rotate-180 transition-transform duration-500">
              <span className="text-[#121212] font-black text-xl -rotate-45 group-hover:-rotate-180 transition-transform duration-500">IC</span>
            </div>
            <span className="text-white font-black text-2xl tracking-tighter uppercase italic" style={{ fontFamily: '"Archivo Black", sans-serif' }}>
              Iron<span className="text-[#D9FF00]">Core</span>
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="px-4 py-2 text-sm font-bold text-white hover:text-[#D9FF00] transition-colors duration-200 uppercase tracking-widest"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link 
              href="#join" 
              className="bg-[#D9FF00] text-[#121212] px-6 py-3 font-black text-sm uppercase tracking-tighter hover:bg-white transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: '"Archivo Black", sans-serif' }}
            >
              Join Now
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-8 h-1.5 bg-white mb-1.5 transition-all duration-300" style={{ backgroundColor: isOpen ? '#D9FF00' : 'white' }}></div>
              <div className="w-8 h-1.5 bg-white mb-1.5 transition-all duration-300" style={{ backgroundColor: isOpen ? '#D9FF00' : 'white', opacity: isOpen ? 0.5 : 1 }}></div>
              <div className="w-8 h-1.5 bg-white transition-all duration-300" style={{ backgroundColor: isOpen ? '#D9FF00' : 'white' }}></div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#121212] z-[-1] transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center gap-12 p-6">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black text-white uppercase tracking-tighter transition-all duration-300 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                fontFamily: '"Archivo Black", sans-serif',
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <span className="hover:text-[#D9FF00] transition-colors">{link.name}</span>
            </Link>
          ))}
          <Link 
            href="#join" 
            onClick={() => setIsOpen(false)}
            className={`mt-8 bg-[#D9FF00] text-[#121212] px-12 py-5 font-black text-xl uppercase tracking-tighter transition-all duration-500 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ 
              fontFamily: '"Archivo Black", sans-serif',
              transitionDelay: `${navLinks.length * 100}ms` 
            }}
          >
            Start Training
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'The Sanctuary', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Memberships', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-4 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#C5A059]/20' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-[#C5A059] rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
            <span className="text-[#C5A059] -rotate-45 group-hover:-rotate-90 transition-transform duration-500 font-serif text-xl font-bold">
              A
            </span>
          </div>
          <span className="font-serif text-2xl tracking-[0.2em] text-[#F2F2F2] uppercase ml-2">
            Aurelius <span className="text-[#C5A059]">Gym</span>
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-[#F2F2F2]/80 hover:text-[#C5A059] text-xs uppercase tracking-[0.3em] font-sans transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href="#membership" 
            className="px-6 py-3 bg-[#C5A059] text-[#0A0A0A] text-xs uppercase tracking-widest font-bold hover:bg-[#F2F2F2] hover:text-[#0A0A0A] transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.3)] hover:shadow-[0_0_25px_rgba(242,242,242,0.5)]"
          >
            Join the Elite
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#F2F2F2] p-2 z-[60]"
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-[#C5A059] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-[#F2F2F2] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-[#C5A059] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0A0A0A] transition-all duration-700 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-10px]'
      }`}>
        <div className="h-screen flex flex-col items-center justify-center gap-12 px-6">
          <ul className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link, idx) => (
              <li 
                key={link.name}
                className={`transition-all duration-500 delay-[${idx * 100}ms] ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <Link 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-[#F2F2F2] hover:text-[#C5A059] uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href="#membership" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`px-10 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm uppercase tracking-widest font-bold transition-all duration-700 delay-500 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Join the Elite
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    experience: [
      { name: 'Private Training', href: '#' },
      { name: 'Recovery Suite', href: '#' },
      { name: 'Nutrition Coaching', href: '#' },
      { name: 'Bespoke Programs', href: '#' },
    ],
    theClub: [
      { name: 'Membership Tiers', href: '#' },
      { name: 'Our Facilities', href: '#' },
      { name: 'The Lounge', href: '#' },
      { name: 'Corporate Wellness', href: '#' },
    ],
    connect: [
      { name: 'Visit Us', href: '#' },
      { name: 'Contact Concierge', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press & Media', href: '#' },
    ],
  };

  const socials = [
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'X', href: '#', icon: '🐦' },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-[#F2F2F2] pt-24 pb-12 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C5A059] opacity-5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-8">
            <Link href="/" className="group inline-block">
              <span className="text-3xl font-serif tracking-widest uppercase text-[#C5A059] transition-colors duration-500 group-hover:text-white cursor-pointer" style={{ fontFamily: 'Cinzel, serif' }}>
                Aurelian<span className="text-[#F2F2F2]">Gym</span>
              </span>
            </Link>
            <p className="text-[#F2F2F2]/60 font-sans leading-relaxed max-w-sm text-sm tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Redefining the intersection of peak athletic performance and uncompromising luxury. A sanctuary for those who demand excellence in every facet of their existence.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059] hover:-translate-y-1 bg-[#1A1A1A]"
                  aria-label={social.name}
                >
                  <span className="text-xs">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-3">
            <div className="space-y-6">
              <h4 className="text-[#C5A059] font-serif uppercase tracking-widest text-xs font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                Experience
              </h4>
              <ul className="space-y-4">
                {footerLinks.experience.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[#F2F2F2]/70 text-sm transition-all duration-300 hover:text-[#C5A059] hover:translate-x-1 flex items-center group"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <span className="w-0 h-px bg-[#C5A059] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[#C5A059] font-serif uppercase tracking-widest text-xs font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                The Club
              </h4>
              <ul className="space-y-4">
                {footerLinks.theClub.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[#F2F2F2]/70 text-sm transition-all duration-300 hover:text-[#C5A059] hover:translate-x-1 flex items-center group"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <span className="w-0 h-px bg-[#C5A059] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[#C5A059] font-serif uppercase tracking-widest text-xs font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                Connect
              </h4>
              <ul className="space-y-4">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[#F2F2F2]/70 text-sm transition-all duration-300 hover:text-[#C5A059] hover:translate-x-1 flex items-center group"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <span className="w-0 h-px bg-[#C5A059] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[#C5A059] font-serif uppercase tracking-widest text-xs font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                Location
              </h4>
              <div className="text-sm text-[#F2F2F2]/70 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <p>1200 Obsidian Plaza</p>
                <p>Upper East Side, NY 10021</p>
                <p className="mt-4 text-[#C5A059] font-medium">
                  +1 (212) 555-0198
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#F2F2F2]/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            © {currentYear} Aurelian Gym. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs tracking-widest uppercase text-[#F2F2F2]/40" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <Link href="#" className="hover:text-[#C5A059] transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#C5A059] transition-colors duration-300">Terms of Service</Link>
            <Link href="#" className="hover:text-[#C5A059] transition-colors duration-300">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
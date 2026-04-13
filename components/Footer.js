"use client";
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Trainers', href: '/trainers' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    programs: [
      { name: 'Weight Lifting', href: '/classes/weights' },
      { name: 'HIIT Training', href: '/classes/hiit' },
      { name: 'Yoga & Flow', href: '/classes/yoga' },
      { name: 'Boxing', href: '/classes/boxing' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Membership Agreement', href: '/agreement' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };
  return (
    <footer className="bg-[#121212] text-white pt-20 pb-10 border-t-[12px] border-[#D9FF00] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="group">
              <span className="text-4xl font-black italic uppercase tracking-tighter leading-none block">
                IRON<span className="text-[#D9FF00] group-hover:text-white transition-colors duration-200">CORE</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#4B5563] font-bold">
                Push Past Your Limits
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs font-medium">
              The ultimate destination for those who refuse to settle. High-performance training for high-performance humans.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, idx) => (
                <Link 
                  key={idx} 
                  href={href} 
                  className="p-2 bg-[#4B5563]/20 hover:bg-[#D9FF00] hover:text-[#121212] transition-all duration-200 rounded-none border border-transparent hover:border-white group"
                >
                  <Icon size={20} strokeWidth={2.5} />
                </Link>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-tight mb-8 text-white border-l-4 border-[#D9FF00] pl-3">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-[#D9FF00] transition-colors duration-200 uppercase text-sm font-bold tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Programs */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-tight mb-8 text-white border-l-4 border-[#D9FF00] pl-3">
              Programs
            </h4>
            <ul className="space-y-4">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-[#D9FF00] transition-colors duration-200 uppercase text-sm font-bold tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter/CTA */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-white border-l-4 border-[#D9FF00] pl-3">
              Join the Elite
            </h4>
            <p className="text-slate-400 text-sm font-medium">
              Get exclusive training tips and early access to new class schedules.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-[#1A1A1A] border-2 border-slate-700 px-4 py-3 text-sm font-bold uppercase placeholder:text-slate-600 focus:outline-none focus:border-[#D9FF00] transition-all duration-200 text-white"
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 bottom-0 bg-[#D9FF00] text-[#121212] px-4 font-black uppercase text-xs hover:bg-white transition-colors duration-200"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {currentYear} IRONCORE ATHLETICS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-8">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-slate-300 transition-colors duration-200 text-[10px] font-black uppercase tracking-tighter"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
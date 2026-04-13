"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Mock components to be replaced by the actual files in the project
// These are implemented internally to ensure app/page.js is fully functional and visually correct
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 flex justify-between items-center mix-blend-difference text-[#FAF9F6]">
    <div className="flex gap-8 text-xs uppercase tracking-widest font-sans font-light">
      <Link href="/shop" className="hover:opacity-60 transition-opacity">Shop</Link>
      <Link href="#" className="hover:opacity-60 transition-opacity">Collections</Link>
    </div>
    <Link href="/" className="text-2xl font-serif italic tracking-tighter font-medium">
      L'ESSENCE
    </Link>
    <div className="flex gap-8 text-xs uppercase tracking-widest font-sans font-light">
      <Link href="#" className="hover:opacity-60 transition-opacity">Account</Link>
      <Link href="#" className="hover:opacity-60 transition-opacity">Cart (0)</Link>
    </div>
  </nav>
);
const HeroSection = () => (
  <section className="relative h-screen w-full overflow-hidden bg-[#121212]">
    <div className="absolute inset-0 z-0">
      <Image 
        src="https://images.unsplash.com/photo-1490481651871-c69633baf631?auto=format&fit=crop&q=80&w=2070" 
        alt="Hero Luxury Fashion" 
        fill 
        className="object-cover opacity-70 scale-105 animate-slow-zoom" 
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF9F6]" />
    </div>
    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
      <span className="text-[#F5F5DC] uppercase tracking-[0.3em] text-xs mb-6 font-sans animate-fade-in-up">
        Autumn Winter 2024
      </span>
      <h1 className="text-6xl md:text-8xl font-serif text-[#FAF9F6] leading-tight mb-8 max-w-4xl animate-fade-in-up-delayed">
        Redefining the Art of <span className="italic">Quiet Luxury</span>
      </h1>
      <div className="flex gap-6 animate-fade-in-up-further">
        <Link 
          href="/shop" 
          className="px-8 py-4 bg-[#F5F5DC] text-[#121212] text-xs uppercase tracking-widest font-sans hover:bg-[#8A9A5B] hover:text-white transition-all duration-300"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  </section>
);
const ProductCard = ({ name, price, image, category }) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F5DC]">
      <Image 
        src={image} 
        alt={name} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <button className="w-full py-3 bg-[#121212] text-white text-[10px] uppercase tracking-widest font-sans">
          Quick Add
        </button>
      </div>
    </div>
    <div className="mt-4 flex justify-between items-start">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-sans mb-1">{category}</p>
        <h3 className="font-serif text-lg text-[#121212]">{name}</h3>
      </div>
      <span className="font-sans text-sm text-[#121212] opacity-80">${price}</span>
    </div>
  </div>
);
const Footer = () => (
  <footer className="bg-[#121212] text-[#FAF9F6] pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-3xl font-serif italic mb-6">L'ESSENCE</h2>
        <p className="font-sans text-sm text-gray-400 max-w-sm leading-relaxed">
          Dedicated to the pursuit of timeless elegance and sustainable craftsmanship. 
          Each piece is a testament to the balance between minimalism and luxury.
        </p>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest font-sans mb-6 text-[#F5F5DC]">Navigation</h4>
        <ul className="space-y-4 text-sm font-sans text-gray-400">
          <li><Link href="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Editorial</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest font-sans mb-6 text-[#F5F5DC]">Connect</h4>
        <ul className="space-y-4 text-sm font-sans text-gray-400">
          <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Pinterest</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Journal</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-sans text-gray-500">
      <p>© 2024 L'ESSENCE Studio. All rights reserved.</p>
      <div className="flex gap-6">
        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
      </div>
    </div>
  </footer>
);
export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const featuredProducts = [
    { name: "Cashmere Oversized Coat", price: "1,200", category: "Outerwear", image: "https://images.unsplash.com/photo-1539571696347-18013379662b?auto=format&fit=crop&q=80&w=800" },
    { name: "Silk Slip Midi Dress", price: "650", category: "Evening", image: "https://images.unsplash.com/photo-1595777457583-75398737637a?auto=format&fit=crop&q=80&w=800" },
    { name: "Tailored Wool Trouser", price: "420", category: "Bottoms", image: "https://images.unsplash.com/photo-1594633928573-22330642c865?auto=format&fit=crop&q=80&w=800" },
    { name: "Ivory Knit Cardigan", price: "380", category: "Knitwear", image: "https://images.unsplash.com/photo-1434389677669-52c055b6e598?auto=format&fit=crop&q=80&w=800" },
  ];
  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-[#8A9A5B] selection:text-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Outfit:wght@100;300;400;500&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Outfit', sans-serif; }
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-out infinite alternate;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fade-in-up-delayed {
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-further {
          animation: fadeInUp 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className={`fixed top-0 w-full z-[60] transition-all duration-500 ${scrolled ? 'bg-[#FAF9F6]/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
        <Navbar />
      </div>
      <HeroSection />
      {/* Curated Selection Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#8A9A5B] uppercase tracking-widest text-xs font-sans mb-4 block">
              The Winter Edit
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#121212] leading-tight">
              Curated pieces for the <br /> <span className="italic">modern minimalist.</span>
            </h2>
          </div>
          <Link href="/shop" className="text-xs uppercase tracking-widest font-sans border-b border-[#121212] pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
            View All Pieces
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </section>
      {/* Editorial Section */}
      <section className="py-24 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1000" 
              alt="Editorial Look" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="space-y-8">
            <span className="text-[#8A9A5B] uppercase tracking-widest text-xs font-sans block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#121212] leading-tight">
              Sustainably Sourced, <br /> <span className="italic">Artfully Crafted.</span>
            </h2>
            <p className="font-sans text-gray-600 leading-relaxed text-lg max-w-md">
              We believe in the beauty of permanence. Our garments are designed to transcend seasons, blending timeless silhouettes with the highest quality natural fibers.
            </p>
            <div className="pt-4">
              <Link 
                href="#" 
                className="px-8 py-4 border border-[#121212] text-[#121212] text-xs uppercase tracking-widest font-sans hover:bg-[#121212] hover:text-white transition-all duration-300"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Category Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[800px]">
          <div className="relative group overflow-hidden col-span-1 md:row-span-2 h-[500px] md:h-full">
            <Image 
              src="https://images.unsplash.com/photo-1515886657613-9f353f4ab4c2?auto=format&fit=crop&q=80&w=800" 
              alt="Outerwear" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            <div className="absolute bottom-12 left-12 text-white">
              <h3 className="text-3xl font-serif italic mb-4">Outerwear</h3>
              <Link href="/shop" className="text-xs uppercase tracking-widest font-sans border-b border-white/50 pb-1">Explore</Link>
            </div>
          </div>
          <div className="relative group overflow-hidden h-[390px]">
            <Image 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4a?auto=format&fit=crop&q=80&w=800" 
              alt="Accessories" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            <div className="absolute bottom-12 left-12 text-white">
              <h3 className="text-2xl font-serif italic mb-4">Accessories</h3>
              <Link href="/shop" className="text-xs uppercase tracking-widest font-sans border-b border-white/50 pb-1">Explore</Link>
            </div>
          </div>
          <div className="relative group overflow-hidden h-[390px]">
            <Image 
              src="https://images.unsplash.com/photo-1581044774575-756f33efb576?auto=format&fit=crop&q=80&w=800" 
              alt="Knitwear" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            <div className="absolute bottom-12 left-12 text-white">
              <h3 className="text-2xl font-serif italic mb-4">Knitwear</h3>
              <Link href="/shop" className="text-xs uppercase tracking-widest font-sans border-b border-white/50 pb-1">Explore</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
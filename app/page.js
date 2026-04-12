import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      {/* Hero Section */}
      <section className="bg-[#3B2D70] text-white py-20 md:py-24 lg:py-28">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-playfair font-bold text-center mb-4 md:mb-6 lg:mb-8">
          Fitness Hub
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center mb-8 md:mb-10 lg:mb-12">
          Unleash your potential with our state-of-the-art gym equipment and expert trainers.
        </p>
        <Link href="#features">
          <a className="bg-[#7E22CE] hover:bg-[#06B6D4] text-white font-bold py-2 px-4 rounded">
            Explore Our Features
          </a>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-playfair font-bold text-center mb-4 md:mb-6 lg:mb-8">
          Our Features
        </h2>
        <div className="flex flex-wrap justify-center mb-8 md:mb-10 lg:mb-12">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">
              Training Programs
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl">
              Our expert trainers will guide you through personalized fitness programs.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">
              Equipment
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl">
              State-of-the-art gym equipment for a comprehensive workout experience.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">
              Nutrition Advice
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl">
              Get personalized nutrition advice from our expert dietitians.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F8FAFC] py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-playfair font-bold text-center mb-4 md:mb-6 lg:mb-8">
          What Our Members Say
        </h2>
        <div className="flex flex-wrap justify-center mb-8 md:mb-10 lg:mb-12">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <p className="text-lg md:text-xl lg:text-2xl">
              "Fitness Hub has helped me achieve my fitness goals and more!"
            </p>
            <p className="text-sm md:text-lg lg:text-xl font-bold">
              - John Doe
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <p className="text-lg md:text-xl lg:text-2xl">
              "The trainers at Fitness Hub are knowledgeable and supportive."
            </p>
            <p className="text-sm md:text-lg lg:text-xl font-bold">
              - Jane Doe
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <p className="text-lg md:text-xl lg:text-2xl">
              "I've seen significant improvements in my overall health and fitness."
            </p>
            <p className="text-sm md:text-lg lg:text-xl font-bold">
              - Bob Smith
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-playfair font-bold text-center mb-4 md:mb-6 lg:mb-8">
          Membership Plans
        </h2>
        <div className="flex flex-wrap justify-center mb-8 md:mb-10 lg:mb-12">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">
              Basic
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl">
              $29.99/month
            </p>
            <ul>
              <li>Access to gym equipment</li>
              <li>Group fitness classes</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">
              Premium
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl">
              $49.99/month
            </p>
            <ul>
              <li>Access to gym equipment</li>
              <li>Group fitness classes</li>
              <li>Personalized training programs</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">
              Elite
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl">
              $99.99/month
            </p>
            <ul>
              <li>Access to gym equipment</li>
              <li>Group fitness classes</li>
              <li>Personalized training programs</li>
              <li>Nutrition advice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0F172A] text-white py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-playfair font-bold text-center mb-4 md:mb-6 lg:mb-8">
          Get in Touch
        </h2>
        <div className="flex flex-wrap justify-center mb-8 md:mb-10 lg:mb-12">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <p className="text-lg md:text-xl lg:text-2xl">
              Address: 123 Main St, Anytown, USA
            </p>
            <p className="text-lg md:text-xl lg:text-2xl">
              Phone: 555-555-5555
            </p>
            <p className="text-lg md:text-xl lg:text-2xl">
              Email: <a href="mailto:info@fitnesshub.com" className="text-white">info@fitnesshub.com</a>
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12">
            <form>
              <input type="text" placeholder="Name" className="w-full mb-4 md:mb-6 lg:mb-8" />
              <input type="email" placeholder="Email" className="w-full mb-4 md:mb-6 lg:mb-8" />
              <textarea placeholder="Message" className="w-full mb-4 md:mb-6 lg:mb-8" />
              <button className="bg-[#7E22CE] hover:bg-[#06B6D4] text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0F172A] text-white py-4 md:py-6 lg:py-8">
        <p className="text-sm md:text-lg lg:text-xl text-center">
          &copy; 2023 Fitness Hub. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
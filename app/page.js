import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Hero Section */}
      <div className="h-screen flex justify-center items-center bg-[#212121] text-white">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-black mb-4">Unleash Your Potential</h1>
          <p className="text-lg mb-8">Join our gym and start your fitness journey today!</p>
          <Link href="/join">
            <a className="bg-[#FF8C00] hover:bg-[#FFA07A] text-white font-bold py-2 px-4 rounded">
              Join Now
            </a>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#F8FAFC] py-12">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Our Features</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-xl font-bold mb-2">State-of-the-Art Equipment</h3>
              <p className="text-lg">Our gym is equipped with the latest and greatest equipment to help you reach your fitness goals.</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
              <p className="text-lg">Our trainers are experienced and dedicated to helping you achieve your fitness goals.</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-xl font-bold mb-2">Clean and Safe Environment</h3>
              <p className="text-lg">We pride ourselves on maintaining a clean and safe environment for all our members.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#0F172A] py-12">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4 text-white">What Our Members Say</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <p className="text-lg text-white">"I've never felt more motivated to work out! The trainers are amazing and the equipment is top-notch."</p>
              <p className="text-lg text-white font-bold">- John D.</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <p className="text-lg text-white">"I was hesitant to join a gym, but the staff at this gym made me feel so welcome and supported. I love it here!"</p>
              <p className="text-lg text-white font-bold">- Emily K.</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <p className="text-lg text-white">"I've seen amazing results since joining this gym. The classes are fun and challenging, and the trainers are always available to help."</p>
              <p className="text-lg text-white font-bold">- David L.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-[#F8FAFC] py-12">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-lg">$29.99/month</p>
              <ul>
                <li>Access to gym equipment</li>
                <li>Group fitness classes</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-lg">$49.99/month</p>
              <ul>
                <li>Access to gym equipment</li>
                <li>Group fitness classes</li>
                <li>Personal training sessions</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-xl font-bold mb-2">Elite</h3>
              <p className="text-lg">$99.99/month</p>
              <ul>
                <li>Access to gym equipment</li>
                <li>Group fitness classes</li>
                <li>Personal training sessions</li>
                <li>Priority access to equipment and classes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="bg-[#212121] py-12">
        <div className="container mx-auto p-4">
          <Link href="/join">
            <a className="bg-[#FF8C00] hover:bg-[#FFA07A] text-white font-bold py-2 px-4 rounded">
              Join Now
            </a>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0F172A] py-4">
        <div className="container mx-auto p-4">
          <p className="text-lg text-white">&copy; 2024 Gym Website</p>
        </div>
      </div>
    </div>
  );
}
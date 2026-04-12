import { useState } from 'react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Hero Section */}
      <div className="h-screen bg-[#3B2D70] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl text-[#F8FAFC] font-playfair">UNLEASH YOUR POTENTIAL</h1>
          <p className="text-2xl text-[#F8FAFC] font-inter mt-4">Motivation is what gets you started. Habit is what keeps you going.</p>
          <button className="bg-[#7E22CE] hover:bg-[#06B6D4] text-[#F8FAFC] font-inter py-2 px-4 rounded-md mt-8">Get Started</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#F8FAFC] py-12">
        <h2 className="text-4xl text-[#3B2D70] font-playfair text-center mb-8">Our Facilities</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h3 className="text-2xl text-[#3B2D70] font-inter mb-2">Cardio Equipment</h3>
            <p className="text-[#3B2D70] font-inter">State-of-the-art treadmills, ellipticals, and stationary bikes.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h3 className="text-2xl text-[#3B2D70] font-inter mb-2">Free Weights</h3>
            <p className="text-[#3B2D70] font-inter">Dumbbells, kettlebells, and barbells for strength training.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h3 className="text-2xl text-[#3B2D70] font-inter mb-2">Group Fitness Classes</h3>
            <p className="text-[#3B2D70] font-inter">Yoga, Pilates, spinning, and more.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#0F172A] py-12 text-[#F8FAFC]">
        <h2 className="text-4xl font-playfair text-center mb-8">What Our Members Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <p className="font-inter mb-2">I've never felt more motivated to reach my fitness goals.</p>
            <p className="font-inter text-sm">- John D.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <p className="font-inter mb-2">The staff is friendly and knowledgeable, and the facilities are top-notch.</p>
            <p className="font-inter text-sm">- Emily K.</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-[#F8FAFC] py-12">
        <h2 className="text-4xl font-playfair text-center mb-8">Membership Plans</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border border-[#3B2D70] rounded-md">
            <h3 className="text-2xl font-inter mb-2">Basic</h3>
            <p className="font-inter mb-2">$29.99/month</p>
            <ul className="font-inter">
              <li>Access to cardio equipment and free weights</li>
              <li>Group fitness classes</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border border-[#3B2D70] rounded-md">
            <h3 className="text-2xl font-inter mb-2">Premium</h3>
            <p className="font-inter mb-2">$49.99/month</p>
            <ul className="font-inter">
              <li>Everything in Basic</li>
              <li>Personal training sessions</li>
              <li>Small group training</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#0F172A] py-12 text-[#F8FAFC]">
        <h2 className="text-4xl font-playfair text-center mb-8">Get in Touch</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <p className="font-inter mb-2">Address: 123 Main St, Anytown, USA</p>
            <p className="font-inter mb-2">Phone: 555-555-5555</p>
            <p className="font-inter mb-2">Email: <a href="mailto:info@example.com">info@example.com</a></p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#3B2D70] py-4 text-[#F8FAFC] text-center">
        <p className="font-inter">&copy; 2023 Example Gym. All rights reserved.</p>
      </div>
    </div>
  );
}
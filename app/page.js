'use client';

export default function Page() {
  return (
    <div className="h-screen flex flex-col overflow-y-scroll">
      {/* Hero Section */}
      <div className="h-screen flex justify-center items-center bg-[#3B2D70] text-white">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          <h1 className="text-5xl font-bold mb-4">Get Fit with Us</h1>
          <p className="text-xl mb-8">Join our gym and start your fitness journey today!</p>
          <button className="bg-[#7E22CE] hover:bg-[#06B6D4] text-white font-bold py-2 px-4 rounded">
            Join Now
          </button>
        </div>
      </div>

      {/* About Us */}
      <div className="bg-[#F8FAFC] text-[#0F172A] p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-xl mb-8">We are a state-of-the-art gym with experienced trainers and a supportive community.</p>
        </div>
      </div>

      {/* Classes and Schedules */}
      <div className="bg-[#0F172A] text-white p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Classes and Schedules</h2>
          <ul className="list-none mb-8">
            <li className="mb-4">Monday: Yoga (6:00 AM - 7:00 AM)</li>
            <li className="mb-4">Tuesday: Weightlifting (7:00 AM - 8:00 AM)</li>
            <li className="mb-4">Wednesday: Cardio (8:00 AM - 9:00 AM)</li>
          </ul>
        </div>
      </div>

      {/* Membership Plans */}
      <div className="bg-[#F8FAFC] text-[#0F172A] p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Membership Plans</h2>
          <ul className="list-none mb-8">
            <li className="mb-4">Basic: $29.99/month</li>
            <li className="mb-4">Premium: $49.99/month</li>
            <li className="mb-4">Elite: $99.99/month</li>
          </ul>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#0F172A] text-white p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl mb-8">"I've lost 20 pounds since joining this gym! The trainers are amazing and the community is so supportive." - John D.</p>
        </div>
      </div>

      {/* Contact Us */}
      <div className="bg-[#F8FAFC] text-[#0F172A] p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl mb-8">Phone: 555-555-5555 | Email: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#3B2D70] text-white p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="container mx-auto">
          <p className="text-xl mb-8">&copy; 2024 Example Gym. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
import Head from 'next/head';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Luxury Gym</title>
      </Head>

      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://example.com/gym-video.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl font-playfair text-white">Luxury Gym</h1>
        </div>
      </div>

      {/* Membership Plans Section */}
      <div className="py-20 bg-gray-100">
        <h2 className="text-3xl font-montserrat text-gray-600 text-center mb-10">
          Membership Plans
        </h2>
        <div className="flex justify-center">
          <div className="bg-white shadow-md p-10 w-80 mx-5">
            <h3 className="text-2xl font-montserrat text-gray-600 mb-5">
              Basic
            </h3>
            <p className="text-gray-600 mb-5">$99/month</p>
            <button className="bg-gray-900 text-white py-2 px-5 rounded hover:bg-gray-700">
              Sign Up
            </button>
          </div>
          <div className="bg-white shadow-md p-10 w-80 mx-5">
            <h3 className="text-2xl font-montserrat text-gray-600 mb-5">
              Premium
            </h3>
            <p className="text-gray-600 mb-5">$199/month</p>
            <button className="bg-gray-900 text-white py-2 px-5 rounded hover:bg-gray-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Facilities Showcase Section */}
      <div className="py-20 bg-white">
        <h2 className="text-3xl font-montserrat text-gray-600 text-center mb-10">
          Facilities
        </h2>
        <div className="flex justify-center">
          <div className="w-80 mx-5">
            <img
              src="https://example.com/gym-facilities.jpg"
              alt="Gym Facilities"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="w-80 mx-5">
            <img
              src="https://example.com/gym-facilities-2.jpg"
              alt="Gym Facilities"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-100">
        <h2 className="text-3xl font-montserrat text-gray-600 text-center mb-10">
          Testimonials
        </h2>
        <div className="flex justify-center">
          <div className="bg-white shadow-md p-10 w-80 mx-5">
            <p className="text-gray-600 mb-5">
              "I've never felt better since joining this gym!"
            </p>
            <p className="text-gray-600">- John Doe</p>
          </div>
          <div className="bg-white shadow-md p-10 w-80 mx-5">
            <p className="text-gray-600 mb-5">
              "The trainers are amazing and the facilities are top-notch!"
            </p>
            <p className="text-gray-600">- Jane Doe</p>
          </div>
        </div>
      </div>

      {/* Call-to-action Button */}
      <div className="py-10 bg-gray-900 text-center">
        <button className="bg-gray-100 text-gray-900 py-2 px-5 rounded hover:bg-gray-200">
          Get Started
        </button>
      </div>

      {/* Footer Section */}
      <div className="py-10 bg-gray-100 text-center">
        <p className="text-gray-600 mb-5">
          2023 Luxury Gym. All rights reserved.
        </p>
        <p className="text-gray-600">
          Contact us: <a href="mailto:info@luxurygym.com">info@luxurygym.com</a>
        </p>
      </div>
    </div>
  );
}
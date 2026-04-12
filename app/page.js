import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luxury Gym</title>
        <meta name="description" content="Luxury Gym Website" />
      </Head>
      <div className="h-screen flex flex-col">
        {/* Hero Section */}
        <div className="h-screen flex justify-center items-center bg-[#333333] text-[#F5F5F5]">
          <div className="container mx-auto p-4">
            <h1 className="text-5xl font-playfair font-bold mb-4">Luxury Gym</h1>
            <p className="text-2xl font-montserrat mb-8">Experience the finest in fitness</p>
            <button className="bg-[#8B0A1A] hover:bg-[#8B0A1A] text-[#F5F5F5] font-bold py-2 px-4 rounded">Join Now</button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="h-screen flex justify-center items-center bg-[#F5F5F5] text-[#333333]">
          <div className="container mx-auto p-4">
            <h2 className="text-3xl font-playfair font-bold mb-4">What Our Members Say</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <p className="text-xl font-montserrat mb-2">"Best gym I've ever been to!"</p>
                <p className="text-lg font-montserrat">- John D.</p>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <p className="text-xl font-montserrat mb-2">"The equipment is top-notch!"</p>
                <p className="text-lg font-montserrat">- Jane D.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing and Membership Plans Section */}
        <div className="h-screen flex justify-center items-center bg-[#B1B1B1] text-[#333333]">
          <div className="container mx-auto p-4">
            <h2 className="text-3xl font-playfair font-bold mb-4">Membership Plans</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-[#F5F5F5] rounded">
                <h3 className="text-2xl font-montserrat font-bold mb-2">Basic</h3>
                <p className="text-lg font-montserrat mb-2">$99/month</p>
                <button className="bg-[#8B0A1A] hover:bg-[#8B0A1A] text-[#F5F5F5] font-bold py-2 px-4 rounded">Sign Up</button>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-[#F5F5F5] rounded">
                <h3 className="text-2xl font-montserrat font-bold mb-2">Premium</h3>
                <p className="text-lg font-montserrat mb-2">$199/month</p>
                <button className="bg-[#8B0A1A] hover:bg-[#8B0A1A] text-[#F5F5F5] font-bold py-2 px-4 rounded">Sign Up</button>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="h-screen flex justify-center items-center bg-[#333333] text-[#F5F5F5]">
          <div className="container mx-auto p-4">
            <h2 className="text-3xl font-playfair font-bold mb-4">Get Started Today!</h2>
            <button className="bg-[#8B0A1A] hover:bg-[#8B0A1A] text-[#F5F5F5] font-bold py-2 px-4 rounded">Join Now</button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="h-20 flex justify-center items-center bg-[#0F0F0F] text-[#F5F5F5]">
          <div className="container mx-auto p-4">
            <p className="text-lg font-montserrat mb-2">&copy; 2024 Luxury Gym</p>
            <div className="flex flex-wrap justify-center">
              <a href="#" className="text-lg font-montserrat mx-2">Contact Us</a>
              <a href="#" className="text-lg font-montserrat mx-2">Facebook</a>
              <a href="#" className="text-lg font-montserrat mx-2">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
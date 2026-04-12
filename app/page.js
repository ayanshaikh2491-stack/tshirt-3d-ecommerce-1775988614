'use client';
import TShirt3D from '../components/TShirt3D';
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-6">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-lg font-bold text-blue-500">T-Shirt Business</a>
          <ul className="flex items-center space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Products</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 pt-12 pb-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to our premium e-commerce website</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Explore our latest collection of 3D animated t-shirts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 3D animated t-shirt products */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Classic Blue T-Shirt</h3>
            <p className="text-gray-600 mb-2">Premium cotton t-shirt in classic blue</p>
            <p className="text-xl font-bold text-green-600 mb-3">₹799</p>
            <TShirt3D color="blue" />
            <button 
              className="w-full mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert('Added to cart!')}
            >
              Buy Now
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Black T-Shirt</h3>
            <p className="text-gray-600 mb-2">Luxury fabric in black color</p>
            <p className="text-xl font-bold text-green-600 mb-3">₹999</p>
            <TShirt3D color="black" />
            <button 
              className="w-full mt-3 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert('Added to cart!')}
            >
              Buy Now
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Trendy Red T-Shirt</h3>
            <p className="text-gray-600 mb-2">Fashionable red t-shirt</p>
            <p className="text-xl font-bold text-green-600 mb-3">₹899</p>
            <TShirt3D color="red" />
            <button 
              className="w-full mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert('Added to cart!')}
            >
              Buy Now
            </button>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us for Bulk Orders</h2>
          <form 
            className="space-y-4" 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for contacting us! We will email you soon.');
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-md"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded-md"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                className="w-full p-3 border rounded-md h-32"
                placeholder="Tell us about your requirements..."
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <footer className="bg-white shadow-md p-6 mt-12">
        <p className="text-gray-600 mb-2">&copy; 2023 T-Shirt Business</p>
        <ul className="flex justify-between items-center space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default LandingPage;
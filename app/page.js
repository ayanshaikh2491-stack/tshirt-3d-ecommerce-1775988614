export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="logo.png"
              alt="Logo"
              className="h-8 w-8 object-cover rounded-full"
            />
            <h1 className="text-lg font-bold">Fashionable</h1>
          </div>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Checkout
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section className="bg-white shadow-md mb-4">
          <h2 className="text-lg font-bold mb-2">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow-md p-4 rounded-md">
              <img
                src="product1.jpg"
                alt="Product 1"
                className="h-64 w-full object-cover rounded-md"
              />
              <h3 className="text-lg font-bold">Product 1</h3>
              <p className="text-gray-600">$19.99</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <img
                src="product2.jpg"
                alt="Product 2"
                className="h-64 w-full object-cover rounded-md"
              />
              <h3 className="text-lg font-bold">Product 2</h3>
              <p className="text-gray-600">$29.99</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <img
                src="product3.jpg"
                alt="Product 3"
                className="h-64 w-full object-cover rounded-md"
              />
              <h3 className="text-lg font-bold">Product 3</h3>
              <p className="text-gray-600">$39.99</p>
            </div>
          </div>
        </section>
        <section className="bg-white shadow-md mb-4">
          <h2 className="text-lg font-bold mb-2">About Us</h2>
          <p className="text-gray-600">
            We are a passionate team of fashion enthusiasts dedicated to providing the latest trends and styles.
          </p>
        </section>
        <section className="bg-white shadow-md mb-4">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            Phone: 555-555-5555
            <br />
            Email: [info@fashionable.com](mailto:info@fashionable.com)
            <br />
            Address: 123 Main St, Anytown USA
          </p>
        </section>
      </main>
      <footer className="bg-white shadow-md p-4">
        <p className="text-gray-600">&copy; 2024 Fashionable</p>
      </footer>
    </div>
  );
}
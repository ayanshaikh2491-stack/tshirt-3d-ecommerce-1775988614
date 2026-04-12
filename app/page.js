import React from 'react';

export default function Page() {
  return (
    <main className="bg-parchment h-screen">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-[#FFC499]">Frontend Generation Skill</h1>
          <p className="text-lg text-gray-600">Unlock Your Potential with Next.js</p>
        </section>

        <section className="mt-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-2xl font-bold text-[#FFC499]">Analytics</h2>
              <p className="text-lg text-gray-600">Track Your Progress and Optimize Your Workflow</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-2xl font-bold text-[#FFC499]">User Management</h2>
              <p className="text-lg text-gray-600">Effortlessly Manage Your Team and Users</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-2xl font-bold text-[#FFC499]">Billing</h2>
              <p className="text-lg text-gray-600">Streamline Your Invoicing and Payment Processes</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <button className="bg-[#FFC499] hover:bg-[#FF9900] text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </section>
      </div>
    </main>
  );
}

import React from "react";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Revolutionize Your E-Waste Management</h1>
        <p className="text-lg mt-4">Sustainable solutions for a greener tomorrow.</p>
        <button className="bg-white text-blue-600 px-6 py-3 mt-6 rounded shadow">
          Request a Pickup
        </button>
      </header>

      {/* Services Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center">Our Services</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {[
            { name: "E-Waste Recycling", description: "Safe and secure recycling for all types of e-waste.", icon: "♻️" },
            { name: "ITAD Solutions", description: "Secure data destruction and asset recovery.", icon: "💾" },
            { name: "CSR Initiatives", description: "Join hands in redeveloping lakes and creating impact.", icon: "🌊" },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg max-w-sm text-center"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-bold mt-4">{service.name}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
    

import React, { useState } from "react";

const ServiceRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/request-service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <form className="bg-white shadow-md rounded px-8 py-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Request a Service</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 border rounded"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full px-3 py-2 border rounded"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Service Type</label>
        <select
          name="serviceType"
          className="w-full px-3 py-2 border rounded"
          onChange={handleChange}
          required
        >
          <option value="">Select a Service</option>
          <option value="E-Waste Recycling">E-Waste Recycling</option>
          <option value="ITAD Solutions">ITAD Solutions</option>
          <option value="CSR Initiatives">CSR Initiatives</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Details</label>
        <textarea
          name="details"
          className="w-full px-3 py-2 border rounded"
          rows="4"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Request
      </button>
    </form>
  );
};

export default ServiceRequest;
    
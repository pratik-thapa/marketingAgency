"use client"; // We need this because we use 'onSubmit' (interactivity)

import { useState } from "react";

export default function ContactPage() {
  // Simple state to show a success message after submitting
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from reloading
    setSubmitted(true); // Show the success message
    // In a real app, you would send data to a backend here
  };

  return (
    <main className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600">
            Have a project in mind? Lets talk about how we can help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left Side: Contact Info */}
          <div className="bg-blue-600 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8 text-blue-100">
                Fill up the form and our team will get back to you within 24
                hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📧</span>
                  <span>hello@agency.io</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📍</span>
                  <span>123 Innovation Dr, Tech City</span>
                </div>
              </div>
            </div>

            {/* Social Circles (Decorative) */}
            <div className="mt-12 flex space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-400 transition">
                tw
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-400 transition">
                in
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-400 transition">
                ig
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thanks for reaching out. We will be in touch shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-blue-600 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

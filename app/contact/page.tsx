"use client";
import ParticleBackground from "../components/Particles";
import Link from "next/link";
import { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 2000);
  };

  return (
    <main className="bg-[#0A0118] min-h-screen relative overflow-hidden">
      <ParticleBackground />
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-button/10 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex justify-center" data-aos="fade-down">
          <span className="text-white font-medium tracking-widest uppercase text-sm mb-3 block border rounded-full w-fit justify-center border-button px-4 py-2">
            Get In Touch
          </span>
        </div>
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          data-aos="fade-up"
        >
          Let&apos;s Scale Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-button to-lightbutton">
            Brand Together
          </span>
        </h1>
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Ready to stop guessing and start growing? Fill out the form below or
          drop us a line directly. We typically respond within 24 hours.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN: Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              We are based in the digital cloud, but our HQ is grounded in
              reality. Whether you need a full audit or just advice, our door is
              open.
            </p>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-button/20 rounded-full flex items-center justify-center text-button group-hover:scale-110 transition-transform">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <a
                    href="mailto:hello@yetimetrix.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    hello@yetimetrix.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Office Card */}
              <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit HQ</h4>
                  <p className="text-gray-400">
                    3 Kent Avenue, Ealing
                    <br />
                    London, England
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10">
              <h4 className="text-white font-bold mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-button hover:text-white hover:border-button transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-button hover:text-white hover:border-button transition-all duration-300"
                >
                  <FaTwitter size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div data-aos="fade-left" className="relative group">
            {/* Form Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-button via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-[#130b24] border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Book Your Free Audit
              </h3>
              <p className="text-gray-400 mb-8 text-sm">
                Fill out the form below and Pratik will be in touch shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-button focus:ring-1 focus:ring-button transition-all"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-button focus:ring-1 focus:ring-button transition-all"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">
                    I&apos;m interested in...
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-button focus:ring-1 focus:ring-button transition-all appearance-none cursor-pointer">
                    <option className="bg-[#130b24]">
                      Complete Brand Audit
                    </option>
                    <option className="bg-[#130b24]">SEO & Analytics</option>
                    <option className="bg-[#130b24]">
                      Social Media Management
                    </option>
                    <option className="bg-[#130b24]">PPC / Paid Ads</option>
                    <option className="bg-[#130b24]">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project goals..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-button focus:ring-1 focus:ring-button transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={
                    formStatus === "submitting" || formStatus === "success"
                  }
                  className="w-full py-4 bg-button hover:bg-button/80 text-white font-bold rounded-xl transition-all shadow-lg shadow-button/20 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    "Sending..."
                  ) : formStatus === "success" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

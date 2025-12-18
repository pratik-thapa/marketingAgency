"use client";

import ParticleBackground from "@/app/components/Particles";
import Link from "next/link";
import {
  FaPalette,
  FaMobileAlt,
  FaLayerGroup,
  FaMousePointer,
  FaPencilRuler,
  FaFingerprint,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function UiUxPage() {
  return (
    <main className="bg-dark min-h-screen overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <ParticleBackground />
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span
            className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700"
            data-aos="fade-down"
          >
            Design & Experience
          </span>
          <h1
            className="text-5xl font-extrabold text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100"
            data-aos="fade-up"
          >
            We Don&apos;t Just Make It Pretty. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              We Make It Work.
            </span>
          </h1>
          <p
            className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
            data-aos="fade-down"
          >
            Your users decide in 0.05 seconds if they trust you. We craft
            intuitive, stunning interfaces that hook users instantly and guide
            them effortlessly to the <q>Buy</q>button.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
            data-aos="fade-up"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-button text-white font-bold rounded-full hover:bg-button/80 transition-all shadow-lg hover:scale-105"
            >
              Start Your Design Project
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM (The 15-Second Rule) */}
      <section className="py-20 bg-[#110a1f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div
              className="relative h-[400px] bg-white/5 rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden order-last lg:order-first group"
              data-aos="fade-left"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-20 group-hover:opacity-40 transition-opacity" />
              {/* Abstract UI Mockup */}
              <div className="relative w-64 h-80 bg-dark border border-gray-700 rounded-2xl shadow-2xl rotate-[-6deg] group-hover:rotate-0 transition-all duration-500 flex flex-col p-4">
                <div className="w-full h-32 bg-gray-800 rounded-lg mb-4 animate-pulse"></div>
                <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-700 rounded mb-8"></div>
                <div className="mt-auto w-full h-10 bg-button rounded-lg"></div>
              </div>
            </div>

            {/* Content */}
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Is Bad Design Killing Your Sales?
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                You might have the best product in the world, but if your
                website is confusing, slow, or ugly, users will bounce.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 font-bold text-xl shrink-0">
                    88%
                  </div>
                  <p className="text-gray-300">
                    of online consumers are less likely to return to a site
                    after a bad experience.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 font-bold text-xl shrink-0">
                    75%
                  </div>
                  <p className="text-gray-300">
                    of users judge a company&apos;s credibility based solely on
                    their website design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR DESIGN SERVICES */}
      <section
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="fade-down"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Design That Converts
          </h2>
          <p className="text-gray-400">
            A blend of art, psychology, and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div
            className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all group hover:-translate-y-2"
            data-aos="fade-left"
          >
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 text-purple-400 group-hover:text-white transition-all">
              <FaFingerprint size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              UX Research & Audits
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We don&apos;t guess. We analyze heatmaps, user flows, and
              analytics to understand exactly where users are getting stuck.
            </p>
          </div>

          {/* Service 2 */}
          <div
            className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all group hover:-translate-y-2"
            data-aos="fade-up"
          >
            <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 text-pink-400 group-hover:text-white transition-all">
              <FaLayerGroup size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Wireframing & Prototyping
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The blueprint of success. We build interactive clickable
              prototypes so you can test the flow before we write a single line
              of code.
            </p>
          </div>

          {/* Service 3 */}
          <div
            className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all group hover:-translate-y-2"
            data-aos="fade-right"
          >
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 text-blue-400 group-hover:text-white transition-all">
              <FaPalette size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Visual (UI) Design
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pixel-perfect aesthetics. We create stunning visual systems, from
              typography and color palettes to custom iconography.
            </p>
          </div>

          {/* Service 4 */}
          <div
            className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-teal-500/50 transition-all group hover:-translate-y-2"
            data-aos="fade-left"
          >
            <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 text-teal-400 group-hover:text-white transition-all">
              <FaMobileAlt size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Mobile-First Design
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Over 60% of traffic is mobile. We design for the smallest screen
              first, ensuring a flawless experience on any device.
            </p>
          </div>

          {/* Service 5 */}
          <div
            className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all group hover:-translate-y-2"
            data-aos="fade-down"
          >
            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 text-orange-400 group-hover:text-white transition-all">
              <FaPencilRuler size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Design Systems
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Scalable consistency. We build a library of reusable components so
              your brand looks consistent across every new page you launch.
            </p>
          </div>

          {/* Service 6 */}
          <div
            className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all group hover:-translate-y-2"
            data-aos="fade-right"
          >
            <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 text-indigo-400 group-hover:text-white transition-all">
              <FaMousePointer size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Interaction Design
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Micro-interactions that delight. Subtle animations and hover
              states that make your digital product feel alive and responsive.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DESIGN PROCESS (Horizontal Steps) */}
      <section className="py-20 bg-[#110a1f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              Our Design Thinking
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Empathize",
                text: "We learn about your users and their pain points.",
              },
              {
                step: "02",
                title: "Define",
                text: "We structure the information architecture and user flows.",
              },
              {
                step: "03",
                title: "Prototype",
                text: "We design high-fidelity interactive mockups.",
              },
              {
                step: "04",
                title: "Test",
                text: "We validate the design with real users and iterate.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-extrabold text-white/10 absolute top-4 right-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 text-center px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-12 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-button/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
            Stop Losing Customers to Bad Design
          </h2>
          <p className="text-gray-300 mb-8 text-lg relative z-10">
            Let&apos;s create an experience they&apos;ll never forget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-button text-white font-bold rounded-full hover:bg-button/80 transition-all relative z-10 hover:scale-105"
          >
            Start Your Redesign <HiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

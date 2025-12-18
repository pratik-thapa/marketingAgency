"use client";

import Link from "next/link";
import {
  FaChessKnight,
  FaSearchDollar,
  FaChartLine,
  FaBullseye,
  FaLightbulb,
  FaNetworkWired,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import ParticleBackground from "../components/Particles";

export default function DigitalStrategyPage() {
  return (
    <main className="bg-dark min-h-screen overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <ParticleBackground />
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-button/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="text-button font-bold tracking-widest uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">
            Service Focus
          </span>
          <h1 className="text-5xl font-extrabold text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Strategy Without Data is Just{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-button to-lightbutton">
              Guesswork.
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            We stop the random acts of marketing. We build precision-engineered
            digital roadmaps that align your budget with your business goals,
            ensuring every dollar spent drives measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link
              href="/contact"
              className="px-8 py-4 bg-button text-white font-bold rounded-full hover:bg-button/80 transition-all shadow-lg hover:scale-105"
            >
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM (Why they need you) */}
      <section className="py-20 bg-[#110a1f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Are You Flying Blind?
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Most businesses fail online not because their product is bad,
                but because their message is lost in the noise.
              </p>
              <ul className="space-y-4">
                {[
                  "Inconsistent messaging across channels",
                  "Wasted ad spend on the wrong audience",
                  "High traffic but low conversion rates",
                  "No clear way to measure ROI",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-full min-h-[300px] mx-auto bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden group flex items-center justify-center">
              {/* 1. Hover Glow Effect */}
              <div className="absolute inset-0 bg-button/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* 2. Abstract Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-button/20 to-transparent opacity-20" />

              {/* 3. The Icon (Centered by parent Flex) */}
              <FaChessKnight className="text-9xl text-white/10 group-hover:scale-110 transition-transform duration-500" />

              {/* 4. Text Overlay (Sits on top) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  The Yeti Fix
                </h3>
                <p className="text-gray-400">
                  We turn chaos into a calculated plan of attack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STRATEGIC PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What We Cover
          </h2>
          <p className="text-gray-400">
            A holistic approach to your digital ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-button/50 transition-all group">
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 text-blue-400 group-hover:text-white transition-all">
              <FaSearchDollar size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Market & Competitor Analysis
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We spy on your competitors so you don&apos;t have to. We identify
              gaps in the market and uncover opportunities they missed.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-button/50 transition-all group">
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 text-purple-400 group-hover:text-white transition-all">
              <FaBullseye size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Customer Persona Mapping
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stop selling to <q>everyone. </q>We define exactly who your ideal
              customer is, what they fear, and what they crave.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-button/50 transition-all group">
            <div className="w-14 h-14 bg-button/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-button text-button group-hover:text-white transition-all">
              <FaChartLine size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Growth Roadmap
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A quarter-by-quarter execution plan. We define KPIs, budget
              allocation, and channel strategy for sustainable growth.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-button/50 transition-all group">
            <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 text-teal-400 group-hover:text-white transition-all">
              <FaLightbulb size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Brand Positioning
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Defining your unique value proposition. Why should customers
              choose you over the giant competitor next door?
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-button/50 transition-all group">
            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 text-orange-400 group-hover:text-white transition-all">
              <FaNetworkWired size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Tech Stack Consulting
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Audit of your current tools. We recommend the best CRM, analytics,
              and marketing automation software for your needs.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-button/50 transition-all group">
            <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 text-indigo-400 group-hover:text-white transition-all">
              <FaChessKnight size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Omnichannel Strategy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting the dots between Social Media, Email, SEO, and Paid Ads
              to create a unified customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE PROCESS STEPS */}
      <section className="py-20 bg-[#110a1f]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              How We Build Your Strategy
            </h2>
          </div>

          <div className="space-y-12 relative">
            {/* Vertical Line */}
            <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-1 bg-white/10 transform -translate-x-1/2 hidden lg:block" />

            {[
              {
                title: "Discovery & Audit",
                text: "We tear everything apart. We audit your current website, social channels, and data to find what's broken.",
              },
              {
                title: "Research & Insight",
                text: "We dive deep into your industry. Who is winning? Why? Where is the white space for you to dominate?",
              },
              {
                title: "Strategy Formulation",
                text: "The Master Plan. We deliver a PDF document outlining your new voice, channels, and 6-month roadmap.",
              },
              {
                title: "Execution & Pivot",
                text: "We help you launch. Then, we watch the data like hawks and adjust the sails.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 text-left lg:text-right">
                  {i % 2 === 0 && (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-2 lg:pl-8">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 lg:pl-8">{step.text}</p>
                    </>
                  )}
                  {i % 2 !==
                    0 /* Mobile logic handled differently via CSS usually, but simple here */ && (
                    <div className="lg:text-left">
                      <h3 className="text-2xl font-bold text-white mb-2 lg:pr-8">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 lg:pr-8">{step.text}</p>
                    </div>
                  )}
                </div>

                {/* Circle Number */}
                <div className="relative z-10 w-12 h-12 bg-button rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(236,72,153,0.5)] shrink-0">
                  {i + 1}
                </div>

                <div className="flex-1 lg:text-left text-center">
                  {i % 2 !== 0 && <div className="hidden lg:block" />}
                  {i % 2 === 0 && (
                    <div className="lg:text-left hidden lg:block">
                      {/* Empty space for alternate side */}
                    </div>
                  )}
                  {/* Mobile Text (Visible only on small screens) */}
                  <div className="block lg:hidden text-left pl-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 text-center px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-button/20 to-purple-600/20 p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to stop guessing?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's build a roadmap that actually leads somewhere.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-gray-200 transition-all"
          >
            Get Your Strategy <HiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

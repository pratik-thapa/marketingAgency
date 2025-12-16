import Link from "next/link";
import Services from "@/app/components/Service";
import LogoSlider from "@/app/components/LogoSlider";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { PiTargetDuotone } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import Testimonials from "./components/Testomonials";
import TypewriterText from "./components/Typewriter";
import HeroInteractive from "./components/Interactive";

export default function Home() {
  return (
    <main className="bg-dark">
      {/* 1. HERO SECTION: The "Agency" Hook */}
      <section className="bg-dark py-[80px] lg:py-[119px] relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        {/* Background Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-button/20 rounded-full blur-[120px] pointer-events-none"></div>

        {/* 👇 FIXED: Added px-4 sm:px-6 lg:px-8 to align with rest of site */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT COLUMN: Text Content */}
            {/* 👇 REMOVED 'max-w' restrictions so it fills the available space */}
            <div className="text-center lg:text-left w-full">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                Revolutionizing <br />
                <span className="text-button inline-block align-top">
                  <TypewriterText
                    strings={["Digital Growth.", "Brand Strategy."]}
                  />
                </span>
              </h1>

              {/* 👇 REMOVED 'max-w-lg' here. Now it uses the full column width. */}
              <p className="text-md text-gray-400 mb-10 mx-auto lg:mx-0 leading-relaxed">
                We help businesses grow with data-driven digital marketing
                strategies. From increasing brand awareness to boosting
                conversions, we tailor solutions that drive real results.
                Whether you’re a startup or an established brand, our expertise
                ensures you stay ahead in the competitive digital landscape.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-button text-white font-semibold rounded-2xl hover:bg-button/80 transition-all duration-300 shadow-lg shadow-button/50 hover:scale-105 w-full sm:w-auto text-center"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/team"
                  className="px-6 py-3 bg-white/10 text-white font-light rounded-2xl hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/10 hover:scale-105 w-full sm:w-auto text-center"
                >
                  Meet the Consultants
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: The Interactive Character */}
            <div className="relative w-full h-full mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <HeroInteractive />
            </div>
          </div>
        </div>
      </section> 
      <div className="max-w-7xl mx-auto bg-dark py-20  text-justify">
        <div className="flex gap-12 text-white">
          <div className="flex-col-1" data-aos="fade-right">
            <h1 className="border-2 border-lightbutton p-1 mb-4 px-4 rounded-3xl font-semibold w-fit">
              Yeti Metrix
            </h1>
            <h1 className="text-4xl font-bold py-4">Our Core Principles</h1>
            <h1 className="text-gray-500 max-w-[75rem]">
              Data-Driven, Not Just Driven. Our work is defined by the
              intersection of academic rigor and commercial agility. We
              prioritize precision, ensuring that every strategy is backed by
              verifiable data rather than guesswork. Innovation is our standard,
              but only when it serves a measurable purpose.
            </h1>
            <div className="flex gap-6">
              <div className=" ">
                <h1 className="text-lightbutton font-bold pt-6 pb-2 text-3xl">
                  100+
                </h1>
                <p className="text-button">Completed Projects</p>
              </div>
              <div className="">
                <h1 className="text-lightbutton font-bold pt-6 pb-2 text-3xl">
                  3+
                </h1>
                <p className="text-button">Years of Experience</p>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden w-full h-[25rem] relative flex justify-center items-center p-4"
            data-aos="fade-up"
          >
            <img
              src="/age.webp"
              alt=""
              className="w-[95%] h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105 hover:grayscale" /* 👈 2. Keep the Hover on the Image */
            />
          </div>
          <div className="" data-aos="fade-left ">
            <h1 className="font-semibold text-xl">
              Clarity in Strategy & Style
            </h1>
            <h2 className="py-4 text-gray-500 max-w-[75rem]">
              True excellence is rooted in clarity. Drawing on the Sage
              archetype, we believe a clean mindset fosters innovation, while a
              refined style ensures your brand message cuts through the noise.
              We dont just add noise; we provide signal.
            </h2>
            <h1 className="font-semibold text-xl">
              Commitment Beyond the Clock
            </h1>
            <h2 className="py-4 text-gray-500 max-w-[70rem]">
              Digital markets never sleep, and neither does our dedication. We
              are committed to Continuous Professional Development (CPD),
              constantly refining our skills in Next.js, SEO, and consumer
              psychology to ensure our clients stay ahead of the curve.
            </h2>
          </div>
        </div>
      </div>
      {/* Why us? */}
      <main className="bg-dark relative">
        <section className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ================= LEFT COLUMN (Image Card) ================= */}
            <div
              className="relative h-[600px] rounded-3xl w-[90%] overflow-hidden group z-10 border border-gray-200"
              data-aos="fade-right"
            >
              {/* Background Image */}
              <img
                src="/second.png" //
                alt="Yeti Metrix Team at work"
                className="object-cover h-[600px] transition-transform rounded-3xl duration-700  group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-dark/70 z-1"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-16 left-0 p-8 sm:p-12 z-10">
                <span className="inline-block border border-lightbutton text-white text-sm font-bold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
                  Key Feature
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Enhance Your Digital Impact With
                  <span className="text-button pl-2 ">
                    Yeti Metrix Expertise
                  </span>
                </h2>
                <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                  At Yeti Metrix, we empower brands with cutting-edge digital
                  solutions that drive engagement and growth. From innovative
                  design to strategic marketing, our expertise ensures a
                  powerful online presence.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-button text-white font-semibold text-sm rounded-full hover:bg-button/80 transition-all shadow-lg shadow-button/30 tracking-wider hover:scale-105"
                >
                  GET STARTED
                </Link>
              </div>
            </div>

            {/* ================= RIGHT COLUMN (Text Content) ================= */}
            <div data-aos="fade-left" data-aos-delay="200">
              <span className="inline-block border border-button text-button text-sm font-bold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
                WHY US?
              </span>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Designs That{" "}
                <span className="text-button">
                  <TypewriterText
                    strings={[
                      "Captivate", // Keeps the original
                      "Convert", // Focus on Sales
                      "Engage", // Focus on Audience
                      "Scale", // Focus on Growth
                      "Inspire", // Focus on Branding
                    ]}
                  />
                </span>
              </h2>
              <p className="text-md text-gray-400 mb-12 leading-relaxed font-medium">
                We help brands stand out with compelling and persuasive designs
                that leave a lasting impact. By blending creativity with
                strategy, we craft visuals that not only capture attention but
                also drive action.
              </p>

              {/* Feature Block 1 */}
              <div className="flex gap-6 mb-10">
                <div className="flex-shrink-0 w-16 h-16 bg-lightbutton hover:bg-button rounded-full flex items-center justify-center">
                  <LuChartNoAxesCombined className="text-white text-3xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Strategic Creativity
                  </h3>
                  <p className="text-gray-400  leading-relaxed">
                    We combine aesthetics with purpose, ensuring every design
                    not only looks stunning but also aligns with your brand’s
                    goals and messaging.
                  </p>
                </div>
              </div>

              {/* Feature Block 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-lightbutton rounded-full flex items-center justify-center hover:bg-button">
                  {/* Replace with an SVG icon if you have one */}
                  <IoRocketOutline className="text-white text-3xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Engagement-Driven Approach
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our designs are crafted to capture attention, evoke
                    emotions, and drive user actions, helping brands create
                    meaningful connections with their audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Glowing Circle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-button/40 rounded-full blur-3xl"
            style={{ transform: "translate(270%, -20%)" }}
          ></div>

          {/* Optional: A second, different colored glow */}
          <div
            className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-yeti-DEFAULT/30 rounded-full blur-3xl"
            style={{ transform: "translate(50%, 50%)" }}
          ></div>
        </div>
      </main>

      {/* 2. VISION & MISSION */}
      <section className="bg-dark relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-20 mb-12">
            <h2 className="text-4xl font-bold text-white pt-8">
              Our Philosophy
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We dont just execute campaigns; we build sustainable digital
              ecosystems based on core branding principles.
            </p>
          </div>

          {/* Mission and Vision Card */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="hover:-translate-y-2 duration-500 transition lg:mt-60">
              <div className="relative w-full" data-aos="fade-right">
                {/* 1. The Glow Effect (Behind the glass) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-button via-purple-500 to-lightbutton rounded-2xl blur-2xl opacity-30"></div>

                {/* 2. The Glass Box */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl rounded-xl">
                  <div className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="flex-shrink-0 w-12 h-12 bg-lightbutton rounded-full flex items-center justify-center hover:bg-button">
                      {/* Replace with an SVG icon if you have one */}
                      <FaRegEye className="text-white text-3xl" />
                    </div>
                    Our Vision
                  </div>{" "}
                  <p className="text-gray-200 italic font-extralight text-md leading-relaxed">
                    To be the most trusted boutique consultancy for SMEs,
                    recognized for bridging the gap between technical innovation
                    and ethical marketing practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="hover:-translate-y-2 duration-500 transition">
              <div
                className="relative w-full hover:-translate-y-2 duration-500 transition"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                {/* 1. The Glow Effect (Behind the glass) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-button via-purple-500 to-lightbutton rounded-2xl blur-2xl opacity-30"></div>

                {/* 2. The Glass Box */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl rounded-xl">
                  <div className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="flex-shrink-0 w-12 h-12 bg-lightbutton rounded-full flex items-center justify-center hover:bg-button">
                      {/* Replace with an SVG icon if you have one */}
                      <PiTargetDuotone className="text-white text-3xl" />
                    </div>{" "}
                    Our Mission
                  </div>
                  <p className="text-gray-200 text-md leading-relaxed font-extralight italic">
                    To empower businesses with data-driven clarity. We strip
                    away the jargon and deliver measurable, sustainable growth
                    strategies tailored to the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}

      <section className="relative overflow-hidden mt-20">
        <div className="mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12 relative">
            <h1 className="text-4xl font-semibold text-white">Our Partners</h1>
            <p className="text-sm text-gray-400 mt-3 tracking-widest uppercase">
              Trusted by Industry Leaders
            </p>
          </div>

          {/* THE GLOWING GLASS CONTAINER */}
          <div className="relative w-full">
            {/* 1. The Glow Effect (Behind the glass) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-button via-purple-500 to-lightbutton rounded-2xl blur-2xl opacity-30"></div>

            {/* 2. The Glass Box */}
            <div className="relative bg-white/5 backdrop-blur-xl border-y border-white/10 p-8 shadow-2xl">
              <LogoSlider />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (Imported Component) */}
      <Services />

      <section className="bg-dark py-20">
        <Testimonials />
      </section>

      {/* 4. FINAL CTA / TRUST INDICATORS */}
      <section className="bg-dark pb-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-semibold text-button uppercase tracking-widest mb-8">
            Methodologies Backed By
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
            <span className="text-2xl font-bold text-white flex items-center gap-2">
              📊 Google Analytics 4
            </span>
            <span className="text-2xl font-bold text-white flex items-center gap-2">
              ⚛️ React Next.js
            </span>
            <span className="text-2xl font-bold text-white flex items-center gap-2">
              🎓 CIM Standards
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

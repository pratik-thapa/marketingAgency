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
import ParticleBackground from "./components/Particles";

export default function Home() {
  return (
    <main className="bg-dark overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="bg-dark py-[80px] lg:py-[119px] relative overflow-hidden min-h-[90vh] flex items-center">
        <ParticleBackground />
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
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
                Whether you&apos;re a startup or an established brand, our
                expertise ensures you stay ahead in the competitive digital
                landscape.
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
                  href="/about#team"
                  className="px-6 py-3 bg-white/10 text-white font-light rounded-2xl hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/10 hover:scale-105 w-full sm:w-auto text-center"
                >
                  Meet the Consultants
                </Link>
              </div>
            </div>
            <div className="relative w-full h-full mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <HeroInteractive />
            </div>
          </div>
        </div>
      </section>
      {/* 2. CORE PRINCIPLES SECTION (Fully Responsive) */}
      <div className="max-w-7xl mx-auto bg-dark py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* 👇 FIXED: Changed 'flex' to 'grid-cols-3' for exact equal spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 text-white items-center">
          {/* Column 1: Intro */}
          <div data-aos="fade-right">
            <h1 className="border-2 border-lightbutton p-1 mb-4 px-4 rounded-3xl font-semibold w-fit text-sm sm:text-base">
              Yeti Metrix
            </h1>
            <h1 className="text-3xl sm:text-4xl font-bold py-4">
              Our Core Principles
            </h1>
            <h1 className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              Data-Driven, Not Just Driven. Our work is defined by the
              intersection of academic rigor and commercial agility. We
              prioritize precision, ensuring that every strategy is backed by
              verifiable data rather than guesswork. Innovation is our standard,
              but only when it serves a measurable purpose.
            </h1>
            <div className="flex gap-6 sm:gap-10">
              <div>
                <h1 className="text-lightbutton font-bold pt-2 pb-1 text-2xl sm:text-3xl">
                  100+
                </h1>
                <p className="text-button text-sm sm:text-base">
                  Completed Projects
                </p>
              </div>
              <div>
                <h1 className="text-lightbutton font-bold pt-2 pb-1 text-2xl sm:text-3xl">
                  3+
                </h1>
                <p className="text-button text-sm sm:text-base">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Image (Center) */}
          <div
            /* 👇 FIXED: Explicit height and width to fill the center grid cell */
            className="w-full h-[200px] lg:h-[400px] relative overflow-hidden rounded-2xl shadow-2xl"
            data-aos="fade-up"
          >
            <img
              src="/age.webp"
              alt="Yeti Metrix Core Principles"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105 hover:grayscale"
            />
          </div>

          {/* Column 3: Details */}
          <div data-aos="fade-left">
            <div className="mb-8">
              <h1 className="font-semibold text-lg sm:text-xl mb-3 text-white">
                Clarity in Strategy & Style
              </h1>
              <h2 className="text-gray-400 text-sm sm:text-base leading-relaxed">
                True excellence is rooted in clarity. Drawing on the Sage
                archetype, we believe a clean mindset fosters innovation, while
                a refined style ensures your brand message cuts through the
                noise. We dont just add noise; we provide signal.
              </h2>
            </div>
            <div>
              <h1 className="font-semibold text-lg sm:text-xl mb-3 text-white">
                Commitment Beyond the Clock
              </h1>
              <h2 className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Digital markets never sleep, and neither does our dedication. We
                are committed to Continuous Professional Development (CPD),
                constantly refining our skills in Next.js, SEO, and consumer
                psychology.
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* 3. WHY US SECTION */}
      <main className="bg-dark relative">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT COLUMN (Image Card) */}
            <div
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl w-full overflow-hidden group z-10 border border-gray-200"
              data-aos="fade-right"
            >
              {/* Background Image */}
              <img
                src="/second.png"
                alt="Yeti Metrix Team at work"
                className="object-cover w-full h-full transition-transform rounded-3xl duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-dark/70 z-1"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-12 z-10 w-full">
                <span className="inline-block border border-lightbutton text-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 tracking-wider uppercase">
                  Key Feature
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Enhance Your Digital Impact With
                  <span className="text-button pl-2 block sm:inline">
                    Yeti Metrix Expertise
                  </span>
                </h2>
                <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-md leading-relaxed hidden sm:block">
                  At Yeti Metrix, we empower brands with cutting-edge digital
                  solutions that drive engagement and growth. From innovative
                  design to strategic marketing, our expertise ensures a
                  powerful online presence.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 bg-button text-white font-semibold text-xs sm:text-sm rounded-full hover:bg-button/80 transition-all shadow-lg shadow-button/30 tracking-wider hover:scale-105"
                >
                  GET STARTED
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN (Text Content) */}
            <div data-aos="fade-left" data-aos-delay="200">
              <span className="inline-block border border-button text-button text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 tracking-wider uppercase">
                WHY US?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Designs That{" "}
                <span className="text-button">
                  <TypewriterText
                    strings={[
                      "Captivate",
                      "Convert",
                      "Engage",
                      "Scale",
                      "Inspire",
                    ]}
                  />
                </span>
              </h2>
              <p className="text-sm sm:text-md text-gray-400 mb-8 sm:mb-12 leading-relaxed font-medium">
                We help brands stand out with compelling and persuasive designs
                that leave a lasting impact. By blending creativity with
                strategy, we craft visuals that not only capture attention but
                also drive action.
              </p>

              {/* Feature Block 1 */}
              <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-lightbutton hover:bg-button rounded-full flex items-center justify-center">
                  <LuChartNoAxesCombined className="text-white text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                    Strategic Creativity
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    We combine aesthetics with purpose, ensuring every design
                    not only looks stunning but also aligns with your brand’s
                    goals and messaging.
                  </p>
                </div>
              </div>

              {/* Feature Block 2 */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-lightbutton rounded-full flex items-center justify-center hover:bg-button">
                  <IoRocketOutline className="text-white text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                    Engagement-Driven Approach
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Our designs are crafted to capture attention, evoke
                    emotions, and drive user actions, helping brands create
                    meaningful connections with their audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Glowing Circle (Hidden on mobile to reduce clutter) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1 hidden lg:block">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-button/40 rounded-full blur-3xl"
            style={{ transform: "translate(270%, -20%)" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-yeti-DEFAULT/30 rounded-full blur-3xl"
            style={{ transform: "translate(50%, 50%)" }}
          ></div>
        </div>
      </main>
      {/* 4. VISION & MISSION */}
      <section className="bg-dark relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-12 sm:mt-20 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white pt-8">
              Our Philosophy
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              We dont just execute campaigns; we build sustainable digital
              ecosystems based on core branding principles.
            </p>
          </div>

          {/* Mission and Vision Card */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vision Card */}
            <div className="hover:-translate-y-2 duration-500 transition lg:mt-60">
              <div className="relative w-full" data-aos="fade-right">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-button via-purple-500 to-lightbutton rounded-2xl blur-2xl opacity-30"></div>
                {/* Glass Box */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-2xl rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-lightbutton rounded-full flex items-center justify-center hover:bg-button">
                      <FaRegEye className="text-white text-xl sm:text-3xl" />
                    </div>
                    Our Vision
                  </div>{" "}
                  <p className="text-gray-200 italic font-extralight text-sm sm:text-md leading-relaxed">
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
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-button via-purple-500 to-lightbutton rounded-2xl blur-2xl opacity-30"></div>
                {/* Glass Box */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-2xl rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-lightbutton rounded-full flex items-center justify-center hover:bg-button">
                      <PiTargetDuotone className="text-white text-xl sm:text-3xl" />
                    </div>{" "}
                    Our Mission
                  </div>
                  <p className="text-gray-200 text-sm sm:text-md leading-relaxed font-extralight italic">
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
      {/* 5. SLIDER SECTION */}
      <section className="relative overflow-hidden my-12 sm:my-20">
        <div className="mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 relative">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">
              Our Partners
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 tracking-widest uppercase">
              Trusted by Industry Leaders
            </p>
          </div>

          <div className="relative w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-button via-purple-500 to-lightbutton rounded-2xl blur-2xl opacity-30"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border-y border-white/10 p-6 sm:p-8 shadow-2xl">
              <LogoSlider />
            </div>
          </div>
        </div>
      </section>
      {/* 6. SERVICES SECTION */}
      <Services />
      {/* 7. TESTIMONIALS */}
      <section className="bg-dark py-12 sm:py-20">
        <Testimonials />
      </section>
      {/* 8. FINAL CTA */}
      <section className="bg-dark pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg sm:text-xl font-semibold text-button uppercase tracking-widest mb-6 sm:mb-8">
            Methodologies Backed By
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-16 opacity-70 grayscale">
            <span className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
              📊 Google Analytics 4
            </span>
            <span className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
              ⚛️ React Next.js
            </span>
            <span className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
              🎓 CIM Standards
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

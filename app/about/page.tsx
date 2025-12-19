"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaAward,
  FaCertificate,
  FaUserGraduate,
  FaCheckCircle,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { useEffect, useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useInView,
  useMotionValue,
} from "framer-motion";
import ParticleBackground from "../components/Particles";
import { SiGoogleanalytics, SiHubspot, SiMeta } from "react-icons/si";

// 1. FLOATING ROCKET COMPONENT
const FloatingRocket = () => {
  return (
    <motion.div
      className="absolute z-0 w-24 h-24 pointer-events-none"
      initial={{ top: "5%", left: "5%", opacity: 0 }}
      animate={{
        top: ["5%", "40%", "80%", "20%", "60%", "90%", "5%"],
        left: ["5%", "90%", "20%", "80%", "10%", "50%", "5%"],
        rotate: [0, 45, 120, -45, 90, 180, 360],
        scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
        opacity: [0.8, 1, 0.7, 1, 0.8, 1, 0.8],
      }}
      transition={{
        duration: 45,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Image
        src="/hello.png"
        alt="Floating Rocket"
        width={150}
        height={150}
        className="object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]"
      />
    </motion.div>
  );
};

// 2. COUNTER COMPONENT
const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2,
  });

  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  return (
    <span ref={ref} className="flex items-center">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

// 3. TEAM DATA
const teamMembers = [
  {
    id: 1,
    name: "Pratik Thapa",
    role: "Head Consultant",
    bio: "The strategist behind the metrics specializing in translating complex data into actionable marketing growth plans.",
    image: "/me.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:pratik@yetimetrix.com",
    },
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Lead Designer",
    bio: " Crafting visual narratives that convert. Sarah ensures every pixel aligns with the brand identity.",
    image: "/mary.webp",
    socials: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    id: 3,
    name: "Jimmy Hendrix",
    role: "Tech Lead",
    bio: "Full-stack wizard ensuring our clients' digital infrastructure is fast, secure, and scalable.",
    image: "/6.png",
    socials: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    id: 4,
    name: "Mia Swift",
    role: "UI/UX Designer",
    bio: "Designs user-friendly interfaces, enhances website aesthetics, and ensures a smooth UX.",
    image: "/wing.webp",
    socials: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    id: 5,
    name: "Mary Jane",
    role: "Customer Support Manager",
    bio: "Handles customer inquiries, resolves issues, and maintains a strong client relationship.",
    image: "/3.webp",
    socials: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    id: 6,
    name: "Kyle Henderson",
    role: "Project Designer",
    bio: "Manages team workflows, ensures deadlines are met.",
    image: "/hw.webp",
    socials: { linkedin: "#", twitter: "#", email: "#" },
  },
];

// 4. STATS DATA
const stats = [
  { label: "Projects Delivered", value: "100+" },
  { label: "Client ROI Avg", value: "300%" },
  { label: "Years Experience", value: "3+" },
  { label: "Team Members", value: "6" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0A0118] min-h-screen relative overflow-hidden">
      <FloatingRocket />
      <ParticleBackground />
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex justify-center">
          <span
            className="text-white font-medium tracking-widest uppercase text-sm mb-3 block border rounded-full w-fit justify-center border-button px-4 py-2"
            data-aos="fade-down"
          >
            Our Story
          </span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          data-aos="fade-up"
        >
          We Are{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-button to-purple-400">
            Yeti Metrix.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          We bridge the gap between creative storytelling and hard data. Born
          from a passion for precision, we help brands navigate the digital
          wilderness.
        </motion.p>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 relative z-10">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-button via-purple-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center pt-4 md:pt-0"
                  >
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-sm text-lightbutton font-medium uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <div className="relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center relative">
            <div className="relative" data-aos="fade-right">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-button/20 to-purple-900/40 mix-blend-overlay z-10" />
                <Image
                  src="/team.webp"
                  alt="Our Philosophy"
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700 group-hover:grayscale "
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-button rounded-2xl -z-10 opacity-50 blur-xl" />
            </div>

            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                More Than Just <span className="text-button">Marketing</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                At Yeti Metrix, we believe that marketing without data is just
                guessing. We started this agency to provide businesses with
                transparent, quantifiable results.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our approach is simple:{" "}
                <strong>Analyze, Strategize, Execute, Optimize.</strong>
                Whether you are a startup looking for your first 1,000 users or
                an enterprise optimizing for LTV, we have the tools and the team
                to get you there.
              </p>
              <Link
                href="/services"
                className="text-button font-bold hover:text-white transition-colors flex items-center gap-2"
              >
                Explore Our Services <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* TEAM SECTION - FIXED DUPLICATION */}
      <section className="py-20 bg-[#20172D] relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          <div
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-button/40 rounded-full blur-3xl opacity-50"
            style={{ transform: "translate(50%, 80%)" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-lightbutton/20 rounded-full blur-3xl opacity-50"
            style={{ transform: "translate(30%, 50%)" }}
          ></div>
        </div>

        <div
          id="team"
          className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10"
        >
          <div className="flex justify-center" data-aos="fade-down">
            <span className="text-white font-medium tracking-widest uppercase text-sm mb-3 block border rounded-full w-fit justify-center border-button px-4 py-2">
              Our Avengers
            </span>
          </div>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet The Minds
            </h2>
            <p className="text-gray-400">The experts behind your growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              // 👇 LOGIC FOR AOS ANIMATION
              let aosType = "fade-down"; // Default (Middle)
              if (index % 3 === 0) aosType = "fade-right"; // Left Column (comes from left)
              if (index % 3 === 2) aosType = "fade-left"; // Right Column (comes from right)

              return (
                <div
                  key={member.id}
                  data-aos={aosType} // Apply the calculated AOS type
                  data-aos-duration="1000" // Make it smoother (1s)
                  className="relative group cursor-pointer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-button/50 to-purple-600/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500 "></div>

                  <div className="relative h-full bg-white/5 border border-white/10 group-hover:border group-hover:border-button rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-2">
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-button/50 transition-colors">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-button text-sm font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-white transition-all ">
                        {member.bio}
                      </p>

                      <div className="flex justify-center gap-4">
                        <Link
                          href={member.socials.linkedin}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FaLinkedin size={20} />
                        </Link>
                        <Link
                          href={member.socials.twitter}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FaTwitter size={20} />
                        </Link>
                        <Link
                          href={member.socials.email}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FaEnvelope size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <div
          className="bg-gradient-to-r from-button/10 to-purple-600/10 rounded-3xl border border-white/10 p-8 md:p-12"
          data-aos="fade-up"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-left">
              <div className="flex items-center gap-3 mb-4">
                <FaAward className="text-button text-2xl" />
                <h2 className="text-3xl font-bold text-white">
                  Accreditations
                </h2>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We hold ourselves to the highest industry standards. Our team
                maintains active memberships with leading global bodies to
                ensure our strategies are ethical, compliant, and cutting-edge.
              </p>

              {/* Membership List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center text-white font-bold text-xs text-center leading-none">
                    CIM
                  </div>
                  <div>
                    <h4 className="text-white font-bold">
                      Chartered Institute of Marketing
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Professional Member (MCIM)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-red-900/50 rounded-lg flex items-center justify-center text-white font-bold text-xs text-center leading-none">
                    DMA
                  </div>
                  <div>
                    <h4 className="text-white font-bold">
                      Data & Marketing Association
                    </h4>
                    <p className="text-gray-400 text-sm">Corporate Partner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0A0118] p-8 rounded-2xl">
              <div
                className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center gap-3 hover:border-button/50 transition-colors"
                data-aos="fade-left"
              >
                <SiGoogleanalytics className="text-4xl text-yellow-500" />
                <span className="text-gray-300 text-sm font-medium">
                  Google Analytics Certified
                </span>
              </div>
              <div
                className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center gap-3 hover:border-button/50 transition-colors"
                data-aos="fade-right"
              >
                <SiHubspot className="text-4xl text-orange-500" />
                <span className="text-gray-300 text-sm font-medium">
                  HubSpot Agency Partner
                </span>
              </div>
              <div
                className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center gap-3 hover:border-button/50 transition-colors"
                data-aos="fade-left"
              >
                <SiMeta className="text-4xl text-blue-500" />
                <span className="text-gray-300 text-sm font-medium">
                  Meta Blueprint Certified
                </span>
              </div>
              <div
                className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center gap-3 hover:border-button/50 transition-colors"
                data-aos="fade-right"
              >
                <FaCertificate className="text-4xl text-green-500" />
                <span className="text-gray-300 text-sm font-medium">
                  Semrush Technical SEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CPD (Continuous Professional Development) */}
      <section className="py-20 bg-[#110a1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-down">
            <span className="text-purple-400 border border-button px-4 py-2 rounded-3xl w-fit font-bold mx-auto tracking-widest uppercase text-sm mb-2 block">
              Always Learning
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Continuous Professional Development (CPD)
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The digital landscape changes daily. We allocate 10% of our
              working hours to upskilling, ensuring your brand is never left
              behind.
            </p>
          </div>

          {/* CPD Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-left"
            >
              <div className="w-14 h-14 bg-button/20 rounded-2xl flex items-center justify-center mb-6 text-button">
                <FaUserGraduate size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Quarterly Upskilling
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <FaCheckCircle className="text-button mt-1 shrink-0" />
                  <span>Q1: Advanced AI Prompt Engineering</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <FaCheckCircle className="text-button mt-1 shrink-0" />
                  <span>Q2: GA4 Advanced Configuration</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <FaCheckCircle className="text-button mt-1 shrink-0" />
                  <span>Q3: Programmatic Advertising</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
            >
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                <FaChalkboardTeacher size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Industry Conferences
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We attend key industry events to bring back insights before they
                become mainstream.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs border border-purple-500/20">
                  BrightonSEO
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs border border-purple-500/20">
                  MozCon
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs border border-purple-500/20">
                  Web Summit
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-right"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                <FaCertificate size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Mandatory Recertification
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every team member must renew their core certifications annually
                to ensure compliance with platform changes.
              </p>
              <div className="mt-4 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[85%]"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">
                Team Certification Status: 85%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Work with a team that never stops improving.
          </h2>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-button text-white font-semibold rounded-2xl hover:bg-button/80 transition-all duration-300 shadow-lg shadow-button/50 hover:scale-105 sm:w-auto text-center w-fit"
          >
            Join Forces With Us
          </Link>
        </div>
      </section>
    </main>
  );
}

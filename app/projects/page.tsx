"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import {
  motion,
  useSpring,
  useTransform,
  useInView,
  useMotionValue,
} from "framer-motion";
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
        src="/code.png"
        alt="Floating Rocket"
        width={150}
        height={150}
        className="object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]"
      />
    </motion.div>
  );
};
// 1. Projects Data
const projects = [
  {
    id: 1,
    title: "Lululemon Brand Audit",
    category: "Digital Strategy & Analytics",
    description:
      "A comprehensive audit of Lululemon's digital footprint. We analyzed market positioning, competitor data, and identified key growth opportunities in the athleisure sector.",
    image: "/lulu.png",
    link: "#",
    external: false,
  },
  {
    id: 2,
    title: "Baggymals",
    category: "Social Media Management",
    description:
      "Organic growth strategy for a clothing brand. We curated content, managed community engagement, and increased follower count through targeted reels and aesthetic consistency.",
    image: "/1.png",
    link: "https://www.instagram.com/baggymals/",
    external: true,
  },
  {
    id: 3,
    title: "Nopalito Marketing",
    category: "Brand Awareness & SEO",
    description:
      "Executed a local marketing campaign for Nopalito. Focused on local SEO optimization and storytelling to drive foot traffic and online reservations.",
    image: "/nopalito.png",
    link: "#",
    external: false,
  },
  {
    id: 4,
    title: "TechFlow App Launch",
    category: "PPC & User Acquisition",
    description:
      "Managed a high-budget ad spend across Google and Meta. Achieved a 40% lower CAC (Cost Per Acquisition) than the industry average during launch week.",
    image: "/tecg.png",
    link: "#",
    external: false,
  },
  {
    id: 5,
    title: "EcoWare Rebranding",
    category: "Visual Identity & UI/UX",
    description:
      "Complete visual overhaul for a sustainable goods brand. We redesigned the logo, color palette, and website to better reflect their eco-friendly mission.",
    image: "/eco.webp",
    link: "#",
    external: false,
  },
  {
    id: 6,
    title: "OHL SEO",
    category: "Search Engine Optimization",
    description:
      "Technical SEO and content strategy for a real estate firm. Resulted in ranking #1 for 15+ local keywords and a 200% increase in organic leads.",
    image: "/ohl.png",
    link: "#",
    external: false,
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#0A0118] min-h-screen relative overflow-hidden">
      <FloatingRocket />

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-button/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex justify-center" data-aos="fade-down">
          <span className="text-white font-medium tracking-widest uppercase text-sm mb-3 block border rounded-full w-fit justify-center border-button px-4 py-2">
            Our Work
          </span>
        </div>
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          data-aos="fade-up"
        >
          Case Studies & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-button to-lightbutton">
            Success Stories
          </span>
        </h1>
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We don&apos;t just promise growth; we engineer it. Explore how we
          transform raw data into actionable strategies for brands across
          industries.
        </p>
      </section>

      {/* PROJECTS GRID */}
      <section className="relative z-10 bg-[#20172D]">
        <div className="max-w-7xl py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          {/* 👇 FIXED: Added 'items-start' to prevent stretching */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                // 👇 FIXED: Removed 'h-full' so it shrinks/grows with content
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-button/50 via-purple-600/50 to-lightbutton/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500"></div>

                {/* Card Content */}
                <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-button/50 transition-all duration-300 group-hover:-translate-y-2 flex flex-col p-4">
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden p-4 rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] to-transparent z-10 opacity-60 " />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="bg-white group-hover:scale-110 transition-transform duration-700 rounded-xl object-fit"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col">
                    <h3 className="text-2xl font-bold text-lightbutton group-hover:text-button transition-colors">
                      {project.title}
                    </h3>
                    <h1 className="px-3 py-1 border border-button/90 text-white text-xs font-md uppercase tracking-wider rounded-full backdrop-blur-md w-fit my-3">
                      {project.category}
                    </h1>

                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white overflow-hidden max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 group-hover:mb-6 transition-all duration-700 ease-in-out">
                      {project.description}
                    </p>

                    <Link
                      href={project.link}
                      target={project.external ? "_blank" : "_self"}
                      className="inline-flex items-center gap-2 text-white font-md text-sm group/link bg-[#20172D] w-fit rounded-2xl p-2 px-4"
                    >
                      {project.external
                        ? "View Live Project"
                        : "Read Case Study"}
                      {project.external ? (
                        <FaExternalLinkAlt className="text-button text-xs group-hover/link:translate-x-1 transition-transform" />
                      ) : (
                        <FaArrowRight className="text-button text-xs group-hover/link:translate-x-1 transition-transform" />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center relative z-10">
        <div className="mt-20 text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-r from-button/20 to-blue-600/20 border border-white/10 backdrop-blur-md max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to be our next success story?
            </h2>
            <p className="text-gray-300 mb-8">
              Let&apos;s analyze your current digital presence and build a
              custom plan.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-button text-white font-bold rounded-full hover:bg-button/80 transition-all shadow-lg hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

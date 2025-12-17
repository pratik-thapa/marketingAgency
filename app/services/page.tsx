"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaPalette,
  FaCode,
  FaChartLine,
  FaSearchDollar,
  FaPenNib,
} from "react-icons/fa";

// 1. Data: The Services List
const services = [
  {
    id: 1,
    title: "Digital Strategy",
    description:
      "We don't guess; we calculate. Our data-driven roadmaps align your business goals with actionable digital steps to ensure long-term growth.",
    icon: <FaRocket className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      " crafting immersive experiences. We design intuitive, accessible, and stunning interfaces that keep users engaged and drive conversions.",
    icon: <FaPalette className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Speed, security, and scalability. We build robust websites and web apps using modern technologies (Next.js, React) that rank high and load fast.",
    icon: <FaCode className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "Growth Marketing",
    description:
      "SEO, PPC, and Social Media campaigns engineered for ROI. We target the right audience with precision to lower your CAC and boost LTV.",
    icon: <FaSearchDollar className="w-8 h-8" />,
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 5,
    title: "Advanced Analytics",
    description:
      "Turn raw data into gold. We implement custom tracking dashboards that reveal exactly how your users behave and where you can improve.",
    icon: <FaChartLine className="w-8 h-8" />,
    color: "from-orange-400 to-red-500",
  },
  {
    id: 6,
    title: "Content & Branding",
    description:
      "Your story, told beautifully. We help define your voice, create compelling content, and build a brand identity that resonates with your market.",
    icon: <FaPenNib className="w-8 h-8" />,
    color: "from-yellow-400 to-amber-500",
  },
];

// Animation Variant for the cards appearing one by one
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <main className="bg-[#0A0118] min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background Decor (Matching Hero) */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-button/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="flex justify-center">
            <span className="text-white font-medium tracking-widest uppercase text-sm mb-3 block border rounded-full w-fit justify-center border-button px-4 py-2">
              Our Expertise
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Comprehensive Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-button to-lightbutton">
              Solutions for Growth
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We combine creativity with technical expertise to deliver 360°
            marketing solutions. From the first line of code to the final
            conversion, we handle it all.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon Container */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-button transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Arrow (Visual Cue) */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                <span className="text-white text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section at Bottom */}
        <div className="mt-20 text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-r from-button/20 to-blue-600/20 border border-white/10 backdrop-blur-md max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not sure what you need?
            </h2>
            <p className="text-gray-300 mb-8">
              Let&apos;s analyze your current digital presence and build a
              custom plan.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-button text-white font-semibold rounded-2xl hover:bg-button/80 transition-all duration-300 shadow-lg shadow-button/50 hover:scale-105 w-full sm:w-auto text-center"
            >
              Book a Free Audit
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

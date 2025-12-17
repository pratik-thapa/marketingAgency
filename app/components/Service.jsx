import Link from "next/link";
import { GiPalette } from "react-icons/gi";
import { IoIosLaptop, IoIosRocket } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";

export default function Services() {
  const services = [
    {
      title: "Digital Strategy",
      description:
        "We build data-driven roadmaps to help you navigate the digital landscape and crush your competition.",
      icon: <IoIosRocket className="w-12 h-12 text-button" />,
    },
    {
      title: "Web Development",
      description:
        "Blazing fast, SEO-optimized websites built with Next.js that convert visitors into loyal customers.",
      icon: <IoIosLaptop className="w-12 h-12 text-button" />,
    },
    {
      title: "Brand Identity",
      description:
        "From logos to voice, we craft memorable brands that resonate with your target audience.",
      icon: <GiPalette className="w-12 h-12 text-button" />,
    },
  ];

  return (
    <section className="bg-[#20172D] relative py-20" id="services">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
        <div
          className="absolute top-1/4 left-1/4 w-60 h-60 bg-button/40 rounded-full blur-3xl"
          style={{ transform: "translate(70%, 80%)" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-lightbutton/20 rounded-full blur-3xl"
          style={{ transform: "translate(50%, 50%)" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Animates Up */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-gray-400">
            Everything you need to grow your business online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              // AOS Attributes Added Here 👇
              data-aos="fade-up"
              data-aos-delay={index * 150} // 0ms, 150ms, 300ms (Staggered Effect)
              className="relative w-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900/50 group-hover:bg-slate-900 transition-colors shadow-inner">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              <Link
                href="/contact"
                className="inline-flex gap-2 justify-center px-6 py-3 border border-button text-white font-semibold text-sm rounded-full hover:bg-button transition-all shadow-lg shadow-button/10 tracking-wider"
              >
                <LuExternalLink size={20} />
                <span className="mt-0.5">Learn More</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface PopOutItem {
  id: number;
  label: string;
  img: string;
  href: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  delay: number;
}

const popOutContents: PopOutItem[] = [
  {
    id: 1,
    label: "Digital Strategy",
    img: "/hello.png",
    href: "/projects",
    position: { top: "10%", left: "4%" },
    delay: 1.2,
  },
  {
    id: 2,
    label: "UI/UX Design",
    img: "/bar.png",
    href: "/about",
    position: { top: "1%", right: "15%" },
    delay: 1.4,
  },
  {
    id: 3,
    label: "Web Dev",
    img: "/code.png",
    href: "/services/development",
    position: { top: "80%", left: "10%" },
    delay: 1.6,
  },
  {
    id: 4,
    label: "Growth Marketing",
    img: "/aware.png",
    href: "/services",
    position: { top: "60%", right: "-5%" },
    delay: 1.8,
  },
];

const floatingItemVariants: Variants = {
  hidden: (custom: PopOutItem) => ({
    opacity: 0,
    scale: 0,
    top: custom.position.bottom ? undefined : "50%",
    bottom: custom.position.bottom ? "50%" : undefined,
    left: custom.position.right ? undefined : "50%",
    right: custom.position.right ? "50%" : undefined,
    x: custom.position.right ? "50%" : "-50%",
    y: custom.position.bottom ? "50%" : "-50%",
  }),
  visible: (custom: PopOutItem) => ({
    opacity: 1,
    scale: 1,
    top: custom.position.top,
    left: custom.position.left,
    right: custom.position.right,
    bottom: custom.position.bottom,
    x: "0%",
    y: "0%",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      delay: custom.delay,
      duration: 0.8,
    },
  }),
};

// Controls the speed of the orbit (in seconds)
const ORBIT_DURATION = 30;

export default function HeroInteractive() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center">
      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* Main Center Image */}
        <div className="relative rounded-full overflow-hidden shadow-2xl border border-white/10 group">
          <Image
            src="/hero.png"
            alt="Digital Team"
            width={1000}
            height={1000}
            className="h-[23rem] md:h-[30rem] w-[35rem] object-cover opacity-90 transition-transform duration-700 animate-pulse"
            priority
          />
          <div className="absolute inset-0 bg-[#1A1425]/20 mix-blend-multiply"></div>
        </div>

        {/* 👇 ORBIT CONTAINER
            We change this from a normal <div> to <motion.div> and rotate it 360 deg.
        */}
        <motion.div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: ORBIT_DURATION,
            ease: "linear",
          }}
        >
          {popOutContents.map((item) => (
            <motion.div
              key={item.id}
              custom={item}
              initial="hidden"
              animate="visible"
              variants={floatingItemVariants}
              whileHover={{ scale: 1.15 }}
              className="absolute pointer-events-auto z-30"
            >
              <Link href={item.href}>
                {/* 👇 COUNTER-ROTATION WRAPPER 
                   We rotate this -360 deg so the image stays upright while orbiting.
                */}
                <motion.div
                  className="relative w-16 h-16 drop-shadow-2xl hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300"
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: ORBIT_DURATION, // Must match parent speed
                    ease: "linear",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    // We kept your existing classes like 'animate-beat'
                    className="object-contain animate-beat border border-button rounded-full p-2"
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Fallback */}
      <div className="lg:hidden grid grid-cols-2 gap-3 mt-6">
        {popOutContents.map((item) => (
          <Link key={item.id} href={item.href} className="block">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors animate-pulse">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-gray-300 text-xs font-medium">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

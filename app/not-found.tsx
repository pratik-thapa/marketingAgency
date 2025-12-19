"use client";

import Link from "next/link";
import { FaUserAstronaut, FaHome } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import ParticleBackground from "./components/Particles";
// Adjust path if your ParticleBackground is somewhere else

export default function NotFound() {
  return (
    <main className="bg-[#0A0118] min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* --- Background Elements --- */}

      {/* 1. The Particle Network (reused for consistency) */}
      <ParticleBackground />

      {/* 2. Deep Space Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-button/20 blur-[150px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* --- Main Content Glass Card --- */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* The Glass Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
          {/* Subtle hover glow inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          {/* --- THE ANIMATION: Floating Astronaut --- */}
          <div className="mb-8 relative flex justify-center">
            {/* 1. The Black Hole/Portal behind astronaut */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-black rounded-full border-4 border-button/50 shadow-[0_0_60px_rgba(236,72,153,0.6)] animate-spin-slow"></div>

            {/* 2. The Character (Astronaut Icon) */}
            {/* We use inline styles for a custom float animation defined below */}
            <div
              style={{ animation: "float 6s ease-in-out infinite" }}
              className="relative z-10"
            >
              <FaUserAstronaut className="text-8xl sm:text-9xl text-gray-200 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] rotating-astronaut" />
            </div>
          </div>

          {/* --- The Text --- */}
          <h1 className="text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-button to-purple-400 mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Lost in the Digital Void
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md mx-auto">
            Houston, we have a problem. The page you are looking for seems to
            have drifted off into deep space.
          </p>

          {/* --- Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <Link
              href="/"
              className="px-8 py-3 bg-button text-white font-bold rounded-full hover:bg-button/80 transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaHome /> Return Base
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/10 hover:scale-105 flex items-center justify-center gap-2"
            >
              <HiArrowLeft /> Go Back
            </button>
          </div>
        </div>
      </div>

      {/* --- Custom CSS for this page only --- */}
      <style jsx>{`
        /* Makes the astronaut bob up and down smoothly */
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        /* Slow spin for the portal ring */
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        /* Very slow pulse for background blobs */
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Subtle rotation on the astronaut himself */
        .rotating-astronaut {
          animation: slight-rotate 12s ease-in-out infinite alternate;
        }
        @keyframes slight-rotate {
          0% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(10deg);
          }
        }
      `}</style>
    </main>
  );
}

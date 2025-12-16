"use client"; // 👈 Essential for checking the current page

import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 Hook to get the URL

export default function Navbar() {
  const pathname = usePathname();

  // Helper function to keep code clean
  // Returns the styling class string based on whether the link is active
  const getLinkClass = (path: string) => {
    // Base styles shared by all links
    const baseStyle =
      "px-3 py-2 rounded-md text-sm font-medium transition-colors";

    // Check if the current page matches the link path
    const isActive = pathname === path;

    return isActive
      ? `${baseStyle} text-button font-bold` // ACTIVE STATE (Your Color)
      : `${baseStyle} text-gray-300 hover:text-button`; // INACTIVE STATE
  };

  return (
    <nav className="w-full bg-[#0A0118] border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Yeti
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-button to-lightbutton">
                {" "}
                Metrix
              </span>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* 1. Home */}
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>

            {/* 2. Services */}
            <Link href="/services" className={getLinkClass("/services")}>
              Services
            </Link>

            {/* 3. About */}
            <Link href="/about" className={getLinkClass("/about")}>
              About
            </Link>

            {/* 4. Contact (Has special button styling) */}
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                pathname === "/contact"
                  ? "bg-button text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]" // Active: Your brand color + Glow
                  : "bg-blue-600 text-white hover:bg-blue-500 hover:scale-105" // Inactive: Blue button
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

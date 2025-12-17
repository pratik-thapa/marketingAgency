"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // 1. Import useState
import { FaBars, FaTimes } from "react-icons/fa"; // 2. Import Icons

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // 3. State for menu

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Helper function for styling
  const getLinkClass = (path: string) => {
    const baseStyle =
      "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const isActive = pathname === path;

    return isActive
      ? `${baseStyle} text-button font-bold`
      : `${baseStyle} text-gray-300 hover:text-button`;
  };

  return (
    <nav className="w-full bg-[#0A0118] border-b border-white/10 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* LOGO */}
          <div className="flex items-baseline gap-1.5 z-50">
            <img src="/yeti.png" alt="logo" className="h-8 w-8" />
            <Link
              href="/"
              className="text-2xl font-bold text-white"
              onClick={closeMenu}
            >
              Yeti
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-button to-lightbutton">
                {" "}
                Metrix
              </span>
            </Link>
          </div>

          {/* DESKTOP LINKS (Hidden on mobile) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link href="/services" className={getLinkClass("/services")}>
              Services
            </Link>
            <Link href="/projects" className={getLinkClass("/projects")}>
              Projects
            </Link>
            <Link href="/about" className={getLinkClass("/about")}>
              About
            </Link>

            {/* Desktop Contact Button */}
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                pathname === "/contact"
                  ? "bg-button text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                  : "bg-button text-white hover:bg-lightbutton/70 hover:scale-105"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON (Visible on mobile) */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {/* 4. Only render this div if isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0118] border-b border-white/10 absolute top-20 left-0 w-full px-4 pb-6 shadow-xl animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col space-y-4 mt-4">
            <Link
              href="/"
              onClick={closeMenu}
              className={`block ${getLinkClass("/")} text-center text-lg`}
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className={`block ${getLinkClass(
                "/services"
              )} text-center text-lg`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              onClick={closeMenu}
              className={`block ${getLinkClass(
                "/projects"
              )} text-center text-lg`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`block ${getLinkClass("/about")} text-center text-lg`}
            >
              About
            </Link>

            {/* Mobile Contact Button (Full Width) */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`block w-full text-center py-3 rounded-xl font-bold transition-all duration-700 ${
                pathname === "/contact"
                  ? "bg-button text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                  : "bg-button text-white hover:bg-lightbutton/70 hover:scale-105"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

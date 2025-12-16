import Link from "next/link";
import TypewriterText from "./Typewriter";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-12 border-y border-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Grid with 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand & Desc */}
          <div className="col-span-1 md:col-span-1">
            <h1 className="text-white text-lg font-bold mb-2">Yeti Metrix</h1>
            <h3 className="my-2 text-sm text-button">
              HELLO! WE &apos;RE LISTENING
            </h3>
            <h1 className="font-bold text-3xl mt-6 mb-2 text-white">
              Let &apos;s talk about{" "}
            </h1>

            <h1 className="font-bold text-3xl text-button mb-6 h-10">
              {/* 👇 Pass your specific footer words here */}
              <TypewriterText
                strings={["your project", "your idea", "your vision"]}
              />
            </h1>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Digital Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  SEO Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@agency.io</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation Dr, Tech City</li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Agency.io. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

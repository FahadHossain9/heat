"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Components",
      href: "#",
      children: [
        { name: "ATF", href: "/components/atf" },
        { name: "Training", href: "/components/training" },
        { name: "Campus Network", href: "/components/network" },
        { name: "BdREN Strengthening", href: "/components/bdren" },
        {
          name: "Monitoring and Evaluation",
          href: "/components/monitoring",
        },
        { name: "Women's Network", href: "/components/womens-network" },
        { name: "Quality Assurance", href: "/components/quality-assurance" },
        { name: "Emergency Response", href: "/components/emergency" },
      ],
    },
    { name: "Notice", href: "/notices" },
    { name: "Event", href: "/events" },
    { name: "Tenders & Circulars", href: "/circulars" },
    { name: "Officials", href: "/officials" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Row - Logos and Navigation */}
          <div className="flex justify-between items-center h-20">
            {/* Left Side - HEAT Main Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  src="https://heat.ugc.gov.bd/images/logo_4.png"
                  alt="HEAT Logo"
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Center - Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div
                      className="relative group"
                      onMouseEnter={() => setIsComponentsOpen(true)}
                      onMouseLeave={() => setIsComponentsOpen(false)}
                    >
                      <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">
                        {item.name}
                        <ChevronDown className="ml-1 h-5 w-5" />
                      </button>
                      {isComponentsOpen && (
                        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-base font-medium transition-colors ${
                        pathname === item.href
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side - Partner Logos and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Partner Logos - Hidden on mobile, visible on larger screens */}
              <div className="hidden md:flex items-center space-x-6">
                <img
                  src="https://heat.ugc.gov.bd/images/logo_1.png"
                  alt="Partner Logo 1"
                  className="h-12 w-auto"
                />
                <img
                  src="https://heat.ugc.gov.bd/images/logo_2.png"
                  alt="Partner Logo 2"
                  className="h-12 w-auto"
                />
                <img
                  src="https://heat.ugc.gov.bd/images/logo_3.png"
                  alt="Partner Logo 3"
                  className="h-12 w-auto"
                />
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setIsComponentsOpen(!isComponentsOpen)}
                        className="flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isComponentsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isComponentsOpen && (
                        <div className="pl-6 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="https://heat.ugc.gov.bd/images/logo_4.png"
                  alt="HEAT Logo"
                  className="h-12 w-auto bg-white p-2 rounded-lg"
                />
                <span className="ml-3 text-xl font-semibold">HEAT</span>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  Bangladesh Copyright Bhabon Level-10, Plot-F 20/B West
                  Agargaon, Dhaka-1207
                </p>
                <p>Phone: +880-2-9129666</p>
                <p>Email: pdheat@ugc.gov.bd</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/notices"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Notices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/circulars"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Tenders & Circulars
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Components</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/components/atf"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    ATF
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/training"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/network"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Campus Network
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/bdren"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    BdREN
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/womens-network"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Women's Network
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/quality-assurance"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Quality Assurance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 HEAT Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

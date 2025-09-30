"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
      {/* Wave Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,120 600,0 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            className="animate-wave"
          />
          <path
            d="M0,90 C300,30 600,150 1200,90 L1200,120 L0,120 Z"
            fill="url(#waveGradient2)"
            className="animate-wave-reverse"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
            <linearGradient
              id="waveGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Higher Education Acceleration and Transformation (HEAT)
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-200">
            Transforming Bangladesh&apos;s Higher Education Through Strategic
            Development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link
              href="/components/atf"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Components
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("updates")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Latest Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

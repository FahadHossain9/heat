"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Higher Education Acceleration and Transformation (HEAT)
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Continuously Transforming Bangladesh&apos;s Higher Education Through
            Strategic Development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/components/atf"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Components
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("updates")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Latest Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

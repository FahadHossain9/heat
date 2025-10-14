"use client";

import Link from "next/link";
import { GraduationCap, Users, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <GraduationCap className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 right-10">
          <BookOpen className="h-28 w-28" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <Users className="h-24 w-24" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Higher Education Acceleration
            <br />
            and Transformation
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-blue-100 font-medium">
            Transforming Bangladesh&apos;s Higher Education
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
            A ৳4,017 crore initiative empowering 50 universities, training
            5,000+ faculty, and creating opportunities for 500,000+ students
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/components/atf"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Apply for ATF Grant
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

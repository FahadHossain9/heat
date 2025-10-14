"use client";

import Link from "next/link";
import { latestNews } from "@/data/demoData";
import { Calendar, ArrowRight, Bell } from "lucide-react";

export default function LatestUpdates() {
  const featuredNews = latestNews[0];
  const regularNews = latestNews.slice(1, 4);

  return (
    <section
      id="updates"
      className="py-16 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              Latest Updates & News
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with the latest developments
            </p>
          </div>
          <Link
            href="/notices"
            className="hidden md:flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
          >
            View All Updates
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News - Larger Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5" />
              <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                Featured
              </span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {featuredNews.category}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {featuredNews.title}
            </h3>
            <p className="text-blue-100 mb-6 text-lg leading-relaxed">
              {featuredNews.summary}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-blue-200">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{featuredNews.date}</span>
              </div>
              <button className="text-white font-semibold hover:text-yellow-400 transition-colors flex items-center group">
                Read more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Regular News Cards */}
          <div className="space-y-4">
            {regularNews.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-blue-300 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                    {news.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {news.date}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {news.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/notices"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            View All Updates
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

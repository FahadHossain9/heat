"use client";

import Link from "next/link";
import { latestNews } from "@/data/demoData";

export default function LatestUpdates() {
  return (
    <section id="updates" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Updates & News
            </h2>
          </div>
          <Link
            href="/notices"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            View All Updates →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                  {news.category}
                </span>
                <span className="text-sm text-gray-500">{news.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {news.title}
              </h3>
              <p className="text-gray-600">{news.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

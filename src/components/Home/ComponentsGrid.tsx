"use client";

import Link from "next/link";
import { componentCards } from "@/data/demoData";

export default function ComponentsGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            HEAT Components
          </h2>
          <p className="text-lg text-gray-600">
            Six strategic components driving educational transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {componentCards.map((component, index) => (
            <Link
              key={index}
              href={component.link}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {component.title}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">
                {component.subtitle}
              </p>
              <p className="text-gray-600 mb-4">{component.description}</p>
              <div className="text-sm font-medium text-gray-500">
                {component.metric}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

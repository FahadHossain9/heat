"use client";

import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { performanceMetrics } from "@/data/demoData";

export default function PerformanceMetrics() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project Performance Dashboard
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {performanceMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {metric.label}
                </h3>
                <div
                  className={`flex items-center ${
                    metric.changeType === "up"
                      ? "text-green-600"
                      : metric.changeType === "down"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {metric.changeType === "up" && (
                    <ArrowUp className="h-4 w-4 mr-1" />
                  )}
                  {metric.changeType === "down" && (
                    <ArrowDown className="h-4 w-4 mr-1" />
                  )}
                  {metric.changeType === "stable" && (
                    <Minus className="h-4 w-4 mr-1" />
                  )}
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

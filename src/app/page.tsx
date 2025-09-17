"use client";

import Link from "next/link";
import {
  Building,
  GraduationCap,
  Users,
  Globe,
  ArrowUp,
  ArrowDown,
  Minus,
} from "lucide-react";
import {
  homeStats,
  performanceMetrics,
  componentCards,
  latestNews,
  upcomingEvents,
} from "@/data/demoData";

const iconMap = {
  Building,
  GraduationCap,
  Users,
  Globe,
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Higher Education Acceleration and Transformation (HEAT)
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transforming Bangladesh's Higher Education Through Strategic
              Development
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

      {/* Statistics Dashboard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              HEAT Project Impact
            </h2>
            <p className="text-lg text-gray-600">
              Real-time project statistics and achievements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeStats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Performance Metrics */}
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

      {/* Components Grid */}
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

      {/* Latest Updates */}
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

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
            </div>
            <Link
              href="/events"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View All Events →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.status === "Registration Open"
                        ? "bg-green-100 text-green-800"
                        : event.status === "Applications Under Review"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { upcomingEvents } from "@/data/demoData";

export default function UpcomingEvents() {
  return (
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
  );
}

"use client";

import Link from "next/link";
import {
  Calendar,
  MapPin,
  CheckCircle,
  AlertCircle,
  Clock,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { upcomingEvents } from "@/data/demoData";

export default function UpcomingEvents() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Applications Under Review":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case "Coming Soon":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "Registration Open":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <XCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
      case "Registration Open":
        return "bg-green-100 text-green-800";
      case "Applications Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Coming Soon":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Events
            </h2>
          </div>
          <Link
            href="/events"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            View All Events →
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x300/225E99/FFFFFF?text=Event+Image";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                    {event.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(event.status)}
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {event.status}
                    </span>
                  </div>
                  {event.capacity && (
                    <div className="text-sm text-gray-500 font-medium">
                      {event.capacity}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-6 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 ml-1 flex-shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

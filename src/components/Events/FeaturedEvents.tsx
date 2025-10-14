"use client";

import {
  Calendar,
  MapPin,
  CheckCircle,
  AlertCircle,
  Clock,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { featuredEvents } from "@/data/demoData";
import Link from "next/link";

export default function FeaturedEvents() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Upcoming":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "Ongoing":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-gray-600" />;
      default:
        return <XCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-800";
      case "Ongoing":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Events
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <div key={event.id} className="card-enhanced overflow-hidden">
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
                    className="btn-primary btn-sm btn-icon"
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

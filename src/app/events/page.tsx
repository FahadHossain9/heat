"use client";

import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react";
import { eventCategories, featuredEvents } from "@/data/demoData";

export default function Events() {
  const calendarEvents = [
    {
      date: "March 18, 2025",
      title: "BdREN Technical Committee Meeting",
      type: "Meeting",
    },
    {
      date: "March 22, 2025",
      title: "Campus Network Infrastructure Review",
      type: "Review",
    },
    {
      date: "March 28, 2025",
      title: "Emergency Response Training Session",
      type: "Training",
    },
    {
      date: "April 5, 2025",
      title: "Project Monitoring Workshop",
      type: "Workshop",
    },
    {
      date: "April 12, 2025",
      title: "International Collaboration Summit",
      type: "Conference",
    },
    {
      date: "April 25, 2025",
      title: "Quality Assurance Seminar",
      type: "Seminar",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Applications Under Review":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case "Coming Soon":
        return <Clock className="h-4 w-4 text-blue-600" />;
      default:
        return <XCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              HEAT Events & Programs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Join our educational development initiatives and professional
              growth opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Event Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(eventCategories).map(([category, count], index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {count}
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {category}
                </div>
                <div className="text-sm text-gray-600 mt-1">events</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Events
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Event Image */}
                <div className="h-48 bg-gray-200">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/400x200/4F46E5/FFFFFF?text=Event+Image";
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(event.status)}
                      <span
                        className={`text-sm font-semibold px-2 py-1 rounded-full ${getStatusColor(
                          event.status
                        )}`}
                      >
                        {event.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {event.name}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      {event.registration}
                    </div>
                    {event.capacity && (
                      <div className="text-sm text-gray-500">
                        Capacity: {event.capacity}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Events Calendar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* March 2025 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                March 2025
              </h3>
              <div className="space-y-4">
                {calendarEvents
                  .filter((event) => event.date.includes("March"))
                  .map((event, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {event.title}
                          </h4>
                          <p className="text-sm text-gray-600">{event.date}</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* April 2025 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                April 2025
              </h3>
              <div className="space-y-4">
                {calendarEvents
                  .filter((event) => event.date.includes("April"))
                  .map((event, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {event.title}
                          </h4>
                          <p className="text-sm text-gray-600">{event.date}</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

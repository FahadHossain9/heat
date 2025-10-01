"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
} from "lucide-react";
import { featuredEvents } from "@/data/demoData";
import { EventItem } from "@/data/demoData";

export default function EventDetails() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<EventItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const eventId = params.id as string;
    const foundEvent = featuredEvents.find((e) => e.id === eventId);
    setEvent(foundEvent || null);
  }, [params.id]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Event Not Found
          </h1>
          <button
            onClick={() => router.push("/events")}
            className="btn-primary btn-icon"
          >
            <ArrowLeft className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Back to Events</span>
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === event.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "Applications Under Review":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case "Coming Soon":
        return <Clock className="h-5 w-5 text-blue-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push("/events")}
              className="inline-flex items-center text-white/90 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Events
            </button>
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
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Title & Basic Info */}
            <div className="card-enhanced p-8">
              <div className="mb-6">
                <span className="bg-[#225E99] text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {event.type}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {event.name}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Image Slider */}
            {event.images && event.images.length > 0 && (
              <div className="card-enhanced p-0 overflow-hidden">
                <div className="relative h-96 bg-gray-200">
                  <img
                    src={event.images[currentImageIndex]}
                    alt={`${event.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  {event.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {event.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {event.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Event Details */}
            <div className="card-enhanced p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Event Details
              </h2>

              {/* Rich Text Content */}
              {event.content && (
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-base">
                  {event.content}
                </div>
              )}

              {/* Debug: Show if content exists */}
              {!event.content && (
                <div>
                  <p className="text-gray-500 italic">
                    No additional details available for this event.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Information */}
            <div className="card-enhanced p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Event Information
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 mr-2 text-[#225E99]" />
                    <div className="font-medium text-gray-900">Date</div>
                  </div>
                  <div className="text-gray-600 ml-7">{event.date}</div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 mr-2 text-[#225E99]" />
                    <div className="font-medium text-gray-900">Location</div>
                  </div>
                  <div className="text-gray-600 ml-7">{event.location}</div>
                </div>
                {event.capacity && (
                  <div>
                    <div className="flex items-center mb-2">
                      <Users className="h-5 w-5 mr-2 text-[#225E99]" />
                      <div className="font-medium text-gray-900">Capacity</div>
                    </div>
                    <div className="text-gray-600 ml-7">{event.capacity}</div>
                  </div>
                )}
                {event.organizer && (
                  <div>
                    <div className="flex items-center mb-2">
                      <User className="h-5 w-5 mr-2 text-[#225E99]" />
                      <div className="font-medium text-gray-900">Organizer</div>
                    </div>
                    <div className="text-gray-600 ml-7">{event.organizer}</div>
                  </div>
                )}
                <div>
                  <div className="font-medium text-gray-900 mb-2">Status</div>
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      event.status
                    )}`}
                  >
                    {getStatusIcon(event.status)}
                    <span className="ml-2">{event.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            {event.contact && (
              <div className="card-enhanced p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#225E99]" />
                    <a
                      href={`mailto:${event.contact}`}
                      className="text-[#225E99] hover:text-[#1a4a7a] transition-colors"
                    >
                      {event.contact}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="card-enhanced p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="btn-outline w-full btn-icon">
                  <span>Share Event</span>
                </button>
                <button
                  onClick={() => router.push("/events")}
                  className="btn-secondary w-full btn-icon"
                >
                  <span>View All Events</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

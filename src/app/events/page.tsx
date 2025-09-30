"use client";

import {
  HeroSection,
  FeaturedEvents,
  EventsCalendar,
} from "@/components/Events";

export default function Events() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedEvents />
      <EventsCalendar />
    </div>
  );
}

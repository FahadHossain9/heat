"use client";

import {
  HeroSection,
  StatisticsDashboard,
  ComponentsGrid,
  ATFCallToAction,
  LatestUpdates,
  UpcomingEvents,
} from "@/components/Home";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ComponentsGrid />
      <ATFCallToAction />
      <StatisticsDashboard />
      <LatestUpdates />
      <UpcomingEvents />
    </div>
  );
}

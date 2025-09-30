"use client";

import {
  HeroSection,
  StatisticsDashboard,
  ComponentsGrid,
  LatestUpdates,
  UpcomingEvents,
} from "@/components/Home";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ComponentsGrid />
      <StatisticsDashboard />
      {/* <PerformanceMetrics /> */}
      <LatestUpdates />
      <UpcomingEvents />
    </div>
  );
}

"use client";

import {
  HeroSection,
  LeadershipPrograms,
  NetworkingInitiatives,
  SpecialAllocations,
} from "@/components/WomensNetwork";

export default function WomensNetwork() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LeadershipPrograms />
      <NetworkingInitiatives />
      <SpecialAllocations />
    </div>
  );
}

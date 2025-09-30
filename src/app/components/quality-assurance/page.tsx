"use client";

import {
  HeroSection,
  IQCSystem,
  AccreditationSupport,
  GovernanceImprovement,
} from "@/components/QualityAssurance";

export default function QualityAssurance() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IQCSystem />
      <AccreditationSupport />
      <GovernanceImprovement />
    </div>
  );
}

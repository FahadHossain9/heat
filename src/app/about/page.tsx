"use client";

import {
  HeroSection,
  ProjectOverview,
  MainObjectives,
  TargetBeneficiaries,
  VisionMission,
  StrategicObjectives,
  ComponentOverview,
} from "@/components/About";

export default function About() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectOverview />
      <MainObjectives />
      <TargetBeneficiaries />
      <VisionMission />
      <StrategicObjectives />
      <ComponentOverview />
    </div>
  );
}

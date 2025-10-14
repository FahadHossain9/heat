"use client";

import {
  HeroSection,
  ProjectPartners,
  VisionMission,
  MainObjectives,
  BudgetSection,
  TargetBeneficiaries,
  ComponentOverview,
  ContactSection,
} from "@/components/About";

export default function About() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectPartners />
      <VisionMission />
      <MainObjectives />
      <BudgetSection />
      <TargetBeneficiaries />
      <ComponentOverview />
      <ContactSection />
    </div>
  );
}

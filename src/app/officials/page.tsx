"use client";

import { useState } from "react";
import { Mail, Phone, Briefcase, Filter } from "lucide-react";
import { projectLeadership, wings } from "@/data/demoData";
import Image from "next/image";

export default function Officials() {
  const [selectedWing, setSelectedWing] = useState("all");

  // Separate PD and DPD
  const pd = projectLeadership.find(
    (official) =>
      official.position.includes("Project Director") &&
      !official.position.includes("Deputy")
  );

  const dpd = projectLeadership.find((official) =>
    official.position.includes("Deputy Project Director")
  );

  // Get all officials from wings
  const allOfficials = wings.flatMap((wing) =>
    wing.officials.map((official) => ({
      ...official,
      wingName: wing.name,
      wingColor: wing.color,
    }))
  );

  // Filter officials based on selected wing
  const filteredOfficials =
    selectedWing === "all"
      ? allOfficials
      : allOfficials.filter((official) => official.wingName === selectedWing);

  // Consultant - using Financial Controller as consultant
  const consultant = projectLeadership.find((official) =>
    official.position.includes("Financial Controller")
  );

  const PersonCard = ({
    official,
    showWingBadge = false,
    wingName,
    wingColor,
  }: {
    official: any;
    showWingBadge?: boolean;
    wingName?: string;
    wingColor?: string;
  }) => (
    <div>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
        <div className="relative h-56 sm:h-64 ">
          <Image
            src="https://i.pinimg.com/1200x/23/d5/03/23d5039e410cc935fd412b37539d47d3.jpg"
            alt={official.name}
            fill
            className="object-contain p-2"
          />
        </div>
        <div className="p-3 sm:p-4">
          <div className="mb-3 text-center">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
              {official.name}
            </h3>
            {official.banglaName && (
              <p className="text-gray-700 text-sm sm:text-base font-medium mb-1">
                {official.banglaName}
              </p>
            )}
            <p className="text-blue-600 text-xs sm:text-sm font-medium">
              {official.position}
            </p>
          </div>
          <div className="space-y-1 mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center text-xs text-gray-600">
              <Mail className="h-3.5 w-3.5 mr-1.5 text-blue-600 flex-shrink-0" />
              <a
                href={`mailto:${official.email}`}
                className="hover:text-blue-600 transition-colors break-all"
              >
                {official.email}
              </a>
            </div>

            {official.phone && (
              <div className="flex items-center text-xs text-gray-600">
                <Phone className="h-3.5 w-3.5 mr-1.5 text-blue-600 flex-shrink-0" />
                <a
                  href={`tel:${official.phone}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {official.phone}
                </a>
              </div>
            )}

            {official.office && (
              <div className="flex items-center text-xs text-gray-600">
                <Briefcase className="h-3.5 w-3.5 mr-1.5 text-blue-600 flex-shrink-0" />
                <span>{official.office}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {showWingBadge && wingName && wingColor && (
        <div className="mt-2 text-center">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${wingColor} text-gray-800`}
          >
            {wingName}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              HEAT Project Officials
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Meet our dedicated team leading educational transformation across
              Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* Project Director */}
      {pd && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                Project Director
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Leading the HEAT project vision
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="lg:col-start-2">
                <PersonCard official={pd} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deputy Project Director */}
      {dpd && (
        <section className="py-12 sm:py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                Deputy Project Director
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Supporting strategic initiatives
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="lg:col-start-2">
                <PersonCard official={dpd} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Officials - Wing Wise Filter */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Officials Directory
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Browse our team by wing specialization
            </p>
          </div>

          {/* Wing Filter */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Filter className="h-5 w-5 mr-2 text-gray-600" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-700">
                Filter by Wing
              </h3>
            </div>

            {/* Desktop Filter - Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-3 max-w-5xl mx-auto">
              <button
                onClick={() => setSelectedWing("all")}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedWing === "all"
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Wings
              </button>
              {wings.map((wing) => (
                <button
                  key={wing.name}
                  onClick={() => setSelectedWing(wing.name)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    selectedWing === wing.name
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>{wing.icon}</span>
                  <span className="text-sm">{wing.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Filter - Dropdown */}
            <div className="md:hidden max-w-md mx-auto">
              <select
                value={selectedWing}
                onChange={(e) => setSelectedWing(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-700 font-medium focus:border-blue-600 focus:outline-none"
              >
                <option value="all">All Wings</option>
                {wings.map((wing) => (
                  <option key={wing.name} value={wing.name}>
                    {wing.icon} {wing.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Officials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredOfficials.map((official, index) => (
              <PersonCard
                key={index}
                official={official}
                showWingBadge={true}
                wingName={official.wingName}
                wingColor={official.wingColor}
              />
            ))}
          </div>

          {filteredOfficials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No officials found in this wing.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Consultant */}
      {consultant && (
        <section className="py-12 sm:py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                Consultant
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Expert advisory and financial oversight
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="lg:col-start-2">
                <PersonCard official={consultant} />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

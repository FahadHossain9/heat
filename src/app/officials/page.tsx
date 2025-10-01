"use client";

import { useState } from "react";
import { Mail, Phone, Briefcase, Filter } from "lucide-react";
import { projectLeadership, wings, Official } from "@/data/demoData";
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
    isLeadership = false,
  }: {
    official: Official;
    showWingBadge?: boolean;
    wingName?: string;
    wingColor?: string;
    isLeadership?: boolean;
  }) => (
    <div>
      <div
        className={`bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 ${
          isLeadership ? "border-blue-800" : "border-gray-300"
        }`}
      >
        {/* Official Header Banner */}
        <div
          className={`h-2 ${
            isLeadership
              ? "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
              : "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"
          }`}
        ></div>

        <div className="relative h-56 sm:h-64 bg-gray-100 border-b-2 border-gray-300">
          <Image
            src="https://i.pinimg.com/1200x/23/d5/03/23d5039e410cc935fd412b37539d47d3.jpg"
            alt={official.name}
            fill
            className="object-contain p-3"
          />
          {isLeadership && (
            <div className="absolute top-2 right-2 bg-blue-900 text-white px-3 py-1 text-xs font-bold rounded-sm">
              LEADERSHIP
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 bg-gradient-to-b from-white to-gray-50">
          <div className="mb-4 text-center border-b-2 border-gray-200 pb-4">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 uppercase tracking-wide">
              {official.name}
            </h3>
            {official.banglaName && (
              <p className="text-gray-800 text-sm sm:text-base font-semibold mb-2">
                {official.banglaName}
              </p>
            )}
            <div
              className={`inline-block px-4 py-2 ${
                isLeadership ? "bg-blue-900" : "bg-gray-800"
              } text-white text-xs sm:text-sm font-semibold rounded-sm mt-1`}
            >
              {official.position}
            </div>
          </div>

          <div className="space-y-2 bg-white p-3 rounded-sm border border-gray-200">
            <div className="flex items-start text-xs text-gray-700">
              <Mail className="h-4 w-4 mr-2 text-gray-700 flex-shrink-0 mt-0.5" />
              <a
                href={`mailto:${official.email}`}
                className="hover:text-blue-900 transition-colors break-all font-medium"
              >
                {official.email}
              </a>
            </div>

            {official.phone && (
              <div className="flex items-center text-xs text-gray-700">
                <Phone className="h-4 w-4 mr-2 text-gray-700 flex-shrink-0" />
                <a
                  href={`tel:${official.phone}`}
                  className="hover:text-blue-900 transition-colors font-medium"
                >
                  {official.phone}
                </a>
              </div>
            )}

            {official.office && (
              <div className="flex items-start text-xs text-gray-700">
                <Briefcase className="h-4 w-4 mr-2 text-gray-700 flex-shrink-0 mt-0.5" />
                <span className="font-medium">{official.office}</span>
              </div>
            )}
          </div>
        </div>

        {/* Official Footer Banner */}
        <div
          className={`h-1 ${
            isLeadership
              ? "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
              : "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"
          }`}
        ></div>
      </div>

      {showWingBadge && wingName && wingColor && (
        <div className="mt-3 text-center">
          <span className="inline-block px-4 py-1.5 bg-gray-800 text-white text-xs font-bold rounded-sm uppercase tracking-wider border border-gray-700">
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
                <PersonCard official={pd} isLeadership={true} />
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
                <PersonCard official={dpd} isLeadership={true} />
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
                <PersonCard official={consultant} isLeadership={true} />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

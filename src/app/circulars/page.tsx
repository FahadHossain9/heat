"use client";

import { useState } from "react";
import { Search, FileText, Calendar, User, CheckCircle } from "lucide-react";
import { circularCategories, recentCirculars } from "@/data/demoData";

export default function Circulars() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filteredCirculars = recentCirculars.filter((circular) => {
    const matchesSearch =
      circular.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      circular.number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All Categories" ||
      circular.category === categoryFilter;
    const matchesStatus =
      statusFilter === "All Status" || circular.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Administrative":
        return "bg-blue-100 text-blue-800";
      case "Financial":
        return "bg-green-100 text-green-800";
      case "Academic":
        return "bg-purple-100 text-purple-800";
      case "Technical":
        return "bg-orange-100 text-orange-800";
      case "HR":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      case "Expired":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Official Circulars & Administrative Communications
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Access policy documents, guidelines, and administrative directives
            </p>
          </div>
        </div>
      </section>

      {/* Circular Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Circular Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(circularCategories).map(
              ([category, count], index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {count}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {category}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">circulars</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search circulars by subject or number..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>All Categories</option>
                  <option>Administrative</option>
                  <option>Financial</option>
                  <option>Academic</option>
                  <option>Technical</option>
                  <option>HR</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Expired</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Circulars */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Circulars
            </h2>
          </div>

          <div className="space-y-6">
            {filteredCirculars.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No circulars found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              filteredCirculars.map((circular) => (
                <div
                  key={circular.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                              circular.category
                            )}`}
                          >
                            {circular.category}
                          </span>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              circular.status
                            )}`}
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {circular.status}
                          </span>
                        </div>

                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {circular.subject}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Circular No: {circular.number}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>Date: {circular.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            <span>Authority: {circular.authority}</span>
                          </div>
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            <span>Category: {circular.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        Click to view full circular details
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

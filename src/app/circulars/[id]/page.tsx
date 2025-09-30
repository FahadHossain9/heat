"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  FileText,
  Calendar,
  User,
  ExternalLink,
  CheckCircle,
  Clock,
  Building,
} from "lucide-react";
import { recentCirculars } from "@/data/demoData";
import Link from "next/link";

export default function CircularDetails() {
  const params = useParams();
  const router = useRouter();
  const circularId = params.id as string;

  const circular = recentCirculars.find((c) => c.id === circularId);

  if (!circular) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Circular Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The circular you're looking for doesn't exist.
          </p>
          <Link
            href="/circulars"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Circulars
          </Link>
        </div>
      </div>
    );
  }

  const isExpired = new Date(circular.deadline) < new Date();
  const currentStatus = isExpired ? "Expired" : circular.status;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Tender":
        return "bg-purple-100 text-purple-800";
      case "EOI":
        return "bg-yellow-100 text-yellow-800";
      case "Notice":
        return "bg-orange-100 text-orange-800";
      case "Circular":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
      case "Training":
        return "bg-yellow-100 text-yellow-800";
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <Link
              href="/circulars"
              className="inline-flex items-center text-white/90 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Tenders & Circulars
            </Link>
            {circular.pdf && (
              <a
                href={circular.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-icon"
              >
                <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>View PDF</span>
                <ExternalLink className="h-3 w-3 ml-2 flex-shrink-0" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="card-enhanced overflow-hidden">
          {/* Header Section */}
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(
                  circular.type
                )}`}
              >
                {circular.type}
              </span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
                  circular.category
                )}`}
              >
                {circular.category}
              </span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                  currentStatus
                )}`}
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                {currentStatus}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {circular.name}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              {circular.description}
            </p>
          </div>

          {/* Details Section */}
          <div className="px-6 py-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Deadline
                    </dt>
                    <dd className="text-sm text-gray-900">
                      {new Date(circular.deadline).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Published Date
                    </dt>
                    <dd className="text-sm text-gray-900">
                      {new Date(circular.publishDate).toLocaleDateString(
                        "en-US",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start">
                  <User className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Issuing Authority
                    </dt>
                    <dd className="text-sm text-gray-900">
                      {circular.authority}
                    </dd>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Category
                    </dt>
                    <dd className="text-sm text-gray-900">
                      {circular.category}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Type</dt>
                    <dd className="text-sm text-gray-900">{circular.type}</dd>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Status
                    </dt>
                    <dd className="text-sm text-gray-900">{currentStatus}</dd>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="text-sm text-gray-500">
                {circular.type === "Notice"
                  ? "This is a notice that may also appear in the notices section."
                  : `This ${circular.type.toLowerCase()} is currently ${currentStatus.toLowerCase()}.`}
              </div>
              <div className="flex space-x-3">
                {circular.pdf && (
                  <a
                    href={circular.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-icon"
                  >
                    <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Download PDF</span>
                    <ExternalLink className="h-3 w-3 ml-2 flex-shrink-0" />
                  </a>
                )}
                <Link href="/circulars" className="btn-secondary btn-icon">
                  <span>Back to List</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

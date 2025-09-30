"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Download,
  Calendar,
  AlertTriangle,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";
import { notices, recentCirculars } from "@/data/demoData";
import { Notice } from "@/data/demoData";

export default function NoticeDetails() {
  const params = useParams();
  const router = useRouter();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const noticeId = params.id as string;

    // Check regular notices first
    let foundNotice = notices.find((n) => n.id === noticeId);

    // If not found in notices, check circulars with type "Notice"
    if (!foundNotice) {
      const noticeCircular = recentCirculars.find(
        (c) => c.id === noticeId && c.type === "Notice"
      );
      if (noticeCircular) {
        foundNotice = {
          id: noticeCircular.id,
          name: noticeCircular.name,
          description: noticeCircular.description,
          date: new Date(noticeCircular.publishDate).toLocaleDateString(),
          pdf: noticeCircular.pdf,
          priority: "General" as "Critical" | "Important" | "General",
          category: noticeCircular.category,
        };
      }
    }

    setNotice(foundNotice || null);
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#225E99] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading notice...</p>
        </div>
      </div>
    );
  }

  if (!notice) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Notice Not Found
          </h1>
          <button
            onClick={() => router.push("/notices")}
            className="btn-primary btn-icon"
          >
            <ArrowLeft className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Back to Notices</span>
          </button>
        </div>
      </div>
    );
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case "Important":
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case "General":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "Important":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "General":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push("/notices")}
              className="inline-flex items-center text-white/90 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Notices
            </button>
            <div className="flex items-center space-x-2">
              {getPriorityIcon(notice.priority)}
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${getPriorityColor(
                  notice.priority
                )}`}
              >
                {notice.priority}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Notice Document Design */}
        <div className="card-enhanced p-0 overflow-hidden">
          {/* Document Header */}
          <div className="bg-gradient-to-r from-[#225E99] to-[#1a4a7a] text-white p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FileText className="h-8 w-8" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {notice.name}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-white/90">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{notice.date}</span>
                </div>
                <div className="flex items-center">
                  {getPriorityIcon(notice.priority)}
                  <span className="ml-2">{notice.priority}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Document Body */}
          <div className="bg-white p-8">
            {/* Notice Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Notice Description
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#225E99]">
                <p className="text-gray-800 leading-relaxed text-lg">
                  {notice.description}
                </p>
              </div>
            </div>

            {/* PDF Display */}
            {notice.pdf && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-[#225E99]" />
                  Official Notice Document
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-20 h-20 bg-[#225E99] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Click the button below to view the complete notice document
                  </p>
                  <a
                    href={notice.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-icon inline-flex"
                  >
                    <Download className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>View PDF Document</span>
                  </a>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {notice.pdf && (
                <a
                  href={notice.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-icon"
                >
                  <Download className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Download PDF</span>
                </a>
              )}
              <button
                onClick={() => router.push("/notices")}
                className="btn-secondary btn-icon"
              >
                <span>Back to All Notices</span>
              </button>
            </div>
          </div>

          {/* Document Footer */}
          <div className="bg-gray-100 px-8 py-4 text-center text-sm text-gray-600">
            <p>Higher Education Enhancement Project (HEAT)</p>
            <p className="mt-1">
              Bangladesh Copyright Bhabon Level-10, Plot-F 20/B West Agargaon,
              Dhaka-1207
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

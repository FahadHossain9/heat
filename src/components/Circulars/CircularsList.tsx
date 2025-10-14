import {
  FileText,
  Calendar,
  User,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { recentCirculars } from "@/data/demoData";
import Link from "next/link";

interface CircularsListProps {
  searchTerm: string;
  categoryFilter: string;
  typeFilter: string;
  statusFilter: string;
}

export default function CircularsList({
  searchTerm,
  categoryFilter,
  typeFilter,
  statusFilter,
}: CircularsListProps) {
  const filteredCirculars = recentCirculars.filter((circular) => {
    const matchesSearch =
      circular.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      circular.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All Categories" ||
      circular.category === categoryFilter;
    const matchesType =
      typeFilter === "All Types" || circular.type === typeFilter;

    // Determine if expired
    const isExpired = new Date(circular.deadline) < new Date();
    const currentStatus = isExpired ? "Archived" : "Live";
    const matchesStatus =
      statusFilter === "All Status" || currentStatus === statusFilter;

    return matchesSearch && matchesCategory && matchesType && matchesStatus;
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
      case "Training":
        return "bg-yellow-100 text-yellow-800";
      case "HR":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800";
      case "Archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tenders & Circulars
          </h2>
        </div>

        <div className="space-y-6">
          {filteredCirculars.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No items found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            filteredCirculars.map((circular) => {
              const isExpired = new Date(circular.deadline) < new Date();
              const currentStatus = isExpired ? "Archived" : "Live";

              return (
                <div key={circular.id} className="card-enhanced p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span
                          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${getTypeColor(
                            circular.type
                          )}`}
                        >
                          {circular.type}
                        </span>
                        <span
                          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${getCategoryColor(
                            circular.category
                          )}`}
                        >
                          {circular.category}
                        </span>
                        <span
                          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${getStatusColor(
                            currentStatus
                          )}`}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          {currentStatus}
                        </span>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {circular.name}
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {circular.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50/50 rounded-xl p-4">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-3 text-blue-500" />
                          <span className="font-medium">
                            Deadline:{" "}
                            {new Date(circular.deadline).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-3 text-green-500" />
                          <span className="font-medium">
                            Published:{" "}
                            {new Date(
                              circular.publishDate
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-5 w-5 mr-3 text-purple-500" />
                          <span className="font-medium">
                            Authority: {circular.authority}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 mr-3 text-orange-500" />
                          <span className="font-medium">
                            Type: {circular.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      {circular.type === "Notice"
                        ? "Click to view notice details"
                        : "Click to view full details"}
                    </div>
                    <div className="flex space-x-3">
                      {circular.pdf && (
                        <a
                          href={circular.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary btn-sm btn-icon"
                        >
                          <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>View PDF</span>
                          <ExternalLink className="h-3 w-3 ml-2 flex-shrink-0" />
                        </a>
                      )}
                      <Link
                        href={`/circulars/${circular.id}`}
                        className="btn-outline btn-sm btn-icon"
                      >
                        <span>View Details →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

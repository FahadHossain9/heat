import {
  AlertCircle,
  Clock,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";
import { notices, recentCirculars } from "@/data/demoData";
import Link from "next/link";

interface NoticesListProps {
  searchTerm: string;
  priorityFilter: string;
  categoryFilter: string;
}

export default function NoticesList({
  searchTerm,
  priorityFilter,
  categoryFilter,
}: NoticesListProps) {
  // Get circulars with type "Notice"
  const noticeCirculars = recentCirculars.filter(
    (circular) => circular.type === "Notice"
  );

  // Combine notices and notice circulars
  const allNotices = [
    ...notices,
    ...noticeCirculars.map((circular) => ({
      id: circular.id,
      name: circular.name,
      description: circular.description,
      date: new Date(circular.publishDate).toLocaleDateString(),
      category: circular.category,
      priority: "General", // Default priority for circular notices
      pdf: circular.pdf,
      type: "circular" as const,
      deadline: circular.deadline,
    })),
  ];

  const filteredNotices = allNotices.filter((notice) => {
    const matchesSearch =
      notice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority =
      priorityFilter === "All Priorities" || notice.priority === priorityFilter;
    const matchesCategory =
      categoryFilter === "All Categories" || notice.category === categoryFilter;

    return matchesSearch && matchesPriority && matchesCategory;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "Important":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "General":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <AlertCircle className="h-4 w-4" />;
      case "Important":
        return <Clock className="h-4 w-4" />;
      case "General":
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {filteredNotices.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No notices found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div key={notice.id} className="card-enhanced overflow-hidden">
                {/* Notice Header */}
                <div className="bg-gradient-to-r from-[#225E99] to-[#1a4a7a] text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getPriorityIcon(notice.priority)}
                      <span className="text-sm font-medium">
                        {notice.priority}
                      </span>
                    </div>
                    <span className="text-sm text-white/90">{notice.date}</span>
                  </div>
                </div>

                {/* Notice Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {notice.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {notice.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {notice.description}
                  </p>

                  {"type" in notice &&
                    notice.type === "circular" &&
                    notice.deadline && (
                      <div className="mb-4 p-2 bg-red-50 border-l-4 border-red-400 rounded">
                        <span className="text-sm text-red-700 font-medium">
                          Deadline:{" "}
                          {new Date(notice.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      {notice.pdf && (
                        <a
                          href={notice.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline btn-sm btn-icon"
                        >
                          <Download className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>PDF</span>
                          <ExternalLink className="h-3 w-3 ml-2 flex-shrink-0" />
                        </a>
                      )}
                    </div>

                    {"type" in notice && notice.type === "circular" ? (
                      <Link
                        href={`/circulars/${notice.id}`}
                        className="btn-primary btn-sm btn-icon"
                      >
                        <span>View Details</span>
                      </Link>
                    ) : (
                      <Link
                        href={`/notices/${notice.id}`}
                        className="btn-primary btn-sm btn-icon"
                      >
                        <span>View Details</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

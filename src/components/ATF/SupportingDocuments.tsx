import { Download, FileText } from "lucide-react";
import { atfSupportingDocuments } from "@/data/demoData";

export default function SupportingDocuments() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Supporting Documents
          </h2>
          <p className="text-lg text-gray-600">
            Essential documents and guidelines for ATF applications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {atfSupportingDocuments.map((doc) => (
            <div
              key={doc.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                    <p className="text-sm text-gray-600">{doc.type}</p>
                  </div>
                </div>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Download className="h-5 w-5" />
                </a>
              </div>
              <p className="text-gray-600 text-sm">{doc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

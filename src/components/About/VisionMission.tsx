import { visionMission } from "@/data/demoData";
import { Target, Lightbulb, CheckCircle } from "lucide-react";

export default function VisionMission() {
  const visionPoints = [
    "Making graduates ready for real jobs",
    "Funding groundbreaking research that solves local problems",
    "Connecting our universities to the world's best institutions",
    "Creating opportunities for women to lead in academia",
  ];

  const missionPoints = [
    "Investing ৳4,017 crore to transform 50 universities",
    "Training 5,000+ faculty members annually",
    "Building 50 Gbps high-speed network infrastructure",
    "Empowering 1,000+ women for leadership positions",
    "Ensuring international quality standards across programs",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 shadow-lg text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              {visionMission.vision}
            </p>
            <div className="space-y-3">
              <p className="font-semibold text-blue-100 mb-3">
                Key Aspirations:
              </p>
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-50">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {visionMission.mission}
            </p>
            <div className="space-y-3">
              <p className="font-semibold text-gray-900 mb-3">
                Core Commitments:
              </p>
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

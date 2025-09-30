import { Award, TrendingUp, CheckCircle } from "lucide-react";

export default function SuccessStories() {
  const successStories = [
    {
      university: "University of Chittagong",
      achievement: "150% research publication increase",
      description: "Through comprehensive faculty development programs",
    },
    {
      university: "Jahangirnagar University",
      achievement: "Digital transformation success",
      description: "Complete modernization of teaching methodologies",
    },
    {
      university: "BUET",
      achievement: "Industry collaboration expansion",
      description: "Enhanced partnerships with leading technology companies",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Real impact from our training programs across partner universities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {story.university}
              </h3>
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-lg font-bold text-green-700">
                    {story.achievement}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{story.description}</p>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-700">
                  Success Achieved
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

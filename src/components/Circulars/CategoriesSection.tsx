import { circularCategories } from "@/data/demoData";

export default function CategoriesSection() {
  return (
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
  );
}

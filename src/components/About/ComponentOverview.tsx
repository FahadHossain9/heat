export default function ComponentOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interactive Component Overview
          </h2>
          <p className="text-lg text-gray-600">
            Six strategic components working together for educational
            transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "ATF (Academic Transformation Fund)",
              purpose: "Quality enhancement and academic excellence",
              budget: "40% of total project funds",
              impact: "50 universities, 150+ programs improved",
            },
            {
              title: "Training Programs",
              purpose: "Faculty and staff professional development",
              budget: "25% of total project funds",
              impact: "2,500+ professionals trained annually",
            },
            {
              title: "Campus Network Infrastructure",
              purpose: "Digital connectivity and infrastructure development",
              budget: "20% of total project funds",
              impact: "45 institutions connected with high-speed networks",
            },
            {
              title: "BdREN Strengthening",
              purpose: "Global research network integration",
              budget: "10% of total project funds",
              impact: "100+ international network connections",
            },
            {
              title: "Monitoring and Evaluation",
              purpose: "Strategic project implementation and tracking",
              budget: "3% of total project funds",
              impact: "98% project success rate",
            },
            {
              title: "Women's Leadership and Network Development",
              purpose: "Empowering women in higher education and leadership",
              budget: "8% of total project funds",
              impact: "Sub-component 1.2.2 activities",
            },
            {
              title: "Quality Assurance & Accreditation",
              purpose:
                "Elevating academic standards through international frameworks",
              budget: "5% of total project funds",
              impact: "30 programs accredited, IQAC establishment",
            },
            {
              title: "Emergency Response",
              purpose: "Comprehensive crisis management and continuity",
              budget: "2% of total project funds",
              impact: "24/7 emergency coverage for all institutions",
            },
          ].map((component, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {component.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    Purpose:
                  </span>
                  <p className="text-gray-700">{component.purpose}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    Budget:
                  </span>
                  <p className="text-gray-700">{component.budget}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    Impact:
                  </span>
                  <p className="text-gray-700">{component.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

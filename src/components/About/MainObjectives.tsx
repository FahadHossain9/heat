export default function MainObjectives() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Main Objectives
          </h2>
          <p className="text-lg text-gray-600">
            Key goals driving the HEAT project&apos;s success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Graduate Employability
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Increase graduate employability with focus on female labor force
              participation
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Women&apos;s Leadership
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Strengthen women&apos;s leadership skills for managerial positions
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Global Partnerships
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Establish regional and global partnerships in higher education
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Digital Innovation
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Enhance digital networks and innovation capacity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Emergency Response System
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Rapid Response and Crisis Management for Higher Education
            Institutions
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-3xl font-bold text-yellow-300 mb-2">
              15 min
            </div>
            <div className="text-lg">Average Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}

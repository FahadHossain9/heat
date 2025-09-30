export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-red-600 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tenders & Circulars
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Access tenders, circulars, notices, and administrative
            communications
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary btn-icon">View All Tenders</button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-[#225E99] btn-icon">
              Browse Circulars
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

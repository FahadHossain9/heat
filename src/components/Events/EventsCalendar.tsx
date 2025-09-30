export default function EventsCalendar() {
  const calendarEvents = [
    {
      date: "March 18, 2025",
      title: "BdREN Technical Committee Meeting",
      type: "Meeting",
    },
    {
      date: "March 22, 2025",
      title: "Campus Network Infrastructure Review",
      type: "Review",
    },
    {
      date: "March 28, 2025",
      title: "Emergency Response Training Session",
      type: "Training",
    },
    {
      date: "April 5, 2025",
      title: "Project Monitoring Workshop",
      type: "Workshop",
    },
    {
      date: "April 12, 2025",
      title: "International Collaboration Summit",
      type: "Conference",
    },
    {
      date: "April 25, 2025",
      title: "Quality Assurance Seminar",
      type: "Seminar",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Upcoming Events Calendar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* March 2025 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              March 2025
            </h3>
            <div className="space-y-4">
              {calendarEvents
                .filter((event) => event.date.includes("March"))
                .map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {event.title}
                        </h4>
                        <p className="text-sm text-gray-600">{event.date}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* April 2025 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              April 2025
            </h3>
            <div className="space-y-4">
              {calendarEvents
                .filter((event) => event.date.includes("April"))
                .map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {event.title}
                        </h4>
                        <p className="text-sm text-gray-600">{event.date}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

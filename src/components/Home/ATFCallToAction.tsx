import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

export default function ATFCallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side - Message */}
            <div className="flex items-start gap-4 text-white flex-1">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Apply for ATF Grant</h2>
                <p className="text-blue-100 text-lg mb-4">
                  ৳1,224 Crore available across 6 strategic windows for
                  research, infrastructure, and innovation
                </p>
                <ul className="space-y-2 text-blue-50">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                    Merit-based competitive funding
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                    Multiple categories available
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="flex flex-col gap-4">
              <Link
                href="/components/atf"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl group whitespace-nowrap"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-blue-100 text-sm text-center">
                Check current windows & deadlines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

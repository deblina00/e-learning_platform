
import { Link } from "react-router-dom";
import { Calendar, User, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">
                  Transform Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Future Today
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Join thousands of students advancing their careers through our
                comprehensive online education platform. Learn from industry
                experts and unlock your potential.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Students
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Courses
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Instructors
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Start Learning Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200 text-center"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                alt="Student learning online"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -left-4 bg-purple-600 text-white p-3 rounded-lg shadow-lg">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg">
                <User className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-3 rounded-lg shadow-lg">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

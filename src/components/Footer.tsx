
import { Link } from "react-router-dom";
import { BookOpen} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">EduLearn</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Transforming education through innovative online learning
              experiences. Join thousands of students advancing their careers
              with us.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                to="/team"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Our Team
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Online Courses
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Live Sessions
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Certification
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Career Support
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>support@edulearn.com</p>
              <p>+1 (555) 123-4567</p>
              <p>
                123 Education Street
                <br />
                Learning City, LC 12345
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 EduLearn. All rights reserved. Built with ❤️ for
            learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

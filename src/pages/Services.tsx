import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      title: "Online Courses",
      description:
        "Comprehensive video-based courses with hands-on projects and real-world applications.",
      features: [
        "HD Video Lectures",
        "Downloadable Resources",
        "Interactive Assignments",
        "Progress Tracking",
      ],
      icon: "🎥",
      price: "Starting at $49",
    },
    {
      title: "Live Sessions",
      description:
        "Interactive live classes with expert instructors for real-time learning and Q&A.",
      features: [
        "Live Interaction",
        "Screen Sharing",
        "Recording Access",
        "Small Group Sessions",
      ],
      icon: "🎤",
      price: "Starting at $99",
    },
    {
      title: "1-on-1 Mentoring",
      description:
        "Personalized guidance from industry experts to accelerate your learning journey.",
      features: [
        "Personal Mentor",
        "Custom Learning Path",
        "Career Guidance",
        "Portfolio Review",
      ],
      icon: "👨‍🏫",
      price: "Starting at $199",
    },
    {
      title: "Certification Programs",
      description:
        "Industry-recognized certificates that validate your skills and boost your career.",
      features: [
        "Verified Certificates",
        "LinkedIn Integration",
        "Skill Assessment",
        "Employer Recognition",
      ],
      icon: "🏆",
      price: "Starting at $149",
    },
    {
      title: "Corporate Training",
      description: "Customized training solutions for teams and organizations.",
      features: [
        "Team Management",
        "Custom Content",
        "Progress Analytics",
        "Bulk Pricing",
      ],
      icon: "🏢",
      price: "Contact for Quote",
    },
    {
      title: "Career Support",
      description: "Job placement assistance and career development services.",
      features: [
        "Resume Review",
        "Interview Prep",
        "Job Matching",
        "Network Access",
      ],
      icon: "💼",
      price: "Free with Courses",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive learning solutions designed to meet your educational
            needs and career goals. From beginner courses to advanced
            certifications.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden"
              >
                <div className="p-8 space-y-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center pt-4 border-t border-gray-200">
                    <div className="text-lg font-bold text-purple-600 mb-4">
                      {service.price}
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes it easy to start learning and
              achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Choose Your Path
              </h3>
              <p className="text-gray-600">
                Browse our catalog and select the courses that match your
                interests and career goals.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Start Learning
              </h3>
              <p className="text-gray-600">
                Access high-quality content, interactive exercises, and
                practical projects.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Get Support</h3>
              <p className="text-gray-600">
                Connect with instructors and peers through forums, live
                sessions, and mentoring.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-cyan-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Earn Certificate
              </h3>
              <p className="text-gray-600">
                Complete your courses and earn industry-recognized certificates
                to advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with
            our comprehensive learning platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium">
              Browse Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

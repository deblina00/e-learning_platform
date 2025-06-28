import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CourseCard from "../components/CourseCard";

const Index = () => {
  const featuredCourses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      students: 15420,
      price: 99,
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: "Advanced Data Science & Analytics",
      instructor: "Dr. Michael Chen",
      duration: "16 weeks",
      students: 8950,
      price: 149,
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: "Digital Marketing Mastery",
      instructor: "Emma Rodriguez",
      duration: "8 weeks",
      students: 12300,
      price: 79,
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "4",
      title: "Mobile App Development",
      instructor: "James Wilson",
      duration: "14 weeks",
      students: 6780,
      price: 129,
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "5",
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Lisa Park",
      duration: "10 weeks",
      students: 9240,
      price: 119,
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "6",
      title: "Cloud Computing & AWS",
      instructor: "Robert Kumar",
      duration: "12 weeks",
      students: 5670,
      price: 139,
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <HeroSection />

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses designed by industry experts to
              help you advance your career and achieve your learning goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose EduLearn?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best online learning experience
              with cutting-edge technology and world-class instructors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Instructors
              </h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of real-world
                experience and proven track records.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Flexible Learning
              </h3>
              <p className="text-gray-600">
                Study at your own pace with lifetime access to course materials
                and 24/7 support from our team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Certification
              </h3>
              <p className="text-gray-600">
                Earn industry-recognized certificates that showcase your skills
                and boost your career prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

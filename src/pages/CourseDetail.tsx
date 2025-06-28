import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Play, Clock, CheckCircle, ArrowLeft, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [currentLesson, setCurrentLesson] = useState(0);

  // Mock course data - in real app this would come from API
  const course = {
    id: courseId,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    description:
      "Master web development from scratch with HTML, CSS, JavaScript, React, and Node.js. Build real projects and launch your career as a developer.",
    duration: "12 weeks",
    students: 15420,
    price: 99,
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    lessons: [
      {
        id: "1",
        title: "Introduction to Web Development",
        duration: "15:30",
        videoId: "dQw4w9WgXcQ", // YouTube video ID
        description: "Overview of web development technologies and tools",
      },
      {
        id: "2",
        title: "HTML Fundamentals",
        duration: "22:45",
        videoId: "dQw4w9WgXcQ",
        description: "Learn the building blocks of web pages",
      },
      {
        id: "3",
        title: "CSS Styling Basics",
        duration: "18:20",
        videoId: "dQw4w9WgXcQ",
        description: "Style your web pages with CSS",
      },
      {
        id: "4",
        title: "JavaScript Essentials",
        duration: "28:15",
        videoId: "dQw4w9WgXcQ",
        description: "Add interactivity with JavaScript",
      },
      {
        id: "5",
        title: "React Framework Introduction",
        duration: "25:40",
        videoId: "dQw4w9WgXcQ",
        description: "Build modern UIs with React",
      },
    ],
  };

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const progressPercentage =
    (completedLessons.length / course.lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/courses"
          className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Courses</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player & Course Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${course.lessons[currentLesson].videoId}`}
                title={course.lessons[currentLesson].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Current Lesson Info */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {course.lessons[currentLesson].title}
                </h2>
                <Button
                  onClick={() =>
                    toggleLessonComplete(course.lessons[currentLesson].id)
                  }
                  variant={
                    completedLessons.includes(course.lessons[currentLesson].id)
                      ? "default"
                      : "outline"
                  }
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>
                    {completedLessons.includes(course.lessons[currentLesson].id)
                      ? "Completed"
                      : "Mark Complete"}
                  </span>
                </Button>
              </div>
              <p className="text-gray-600 mb-4">
                {course.lessons[currentLesson].description}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.lessons[currentLesson].duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.instructor}</span>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                About This Course
              </h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          </div>

          {/* Sidebar - Lessons List & Progress */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Your Progress
              </h3>
              <div className="space-y-4">
                <Progress value={progressPercentage} className="h-3" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {completedLessons.length} of {course.lessons.length} lessons
                    completed
                  </span>
                  <span className="font-semibold text-purple-600">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Lessons List */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-lg font-bold text-gray-900">
                  Course Content
                </h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {course.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors ${
                      currentLesson === index
                        ? "bg-purple-50 border-l-4 border-l-purple-600"
                        : ""
                    }`}
                    onClick={() => setCurrentLesson(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            completedLessons.includes(lesson.id)
                              ? "bg-green-100 text-green-600"
                              : currentLesson === index
                              ? "bg-purple-100 text-purple-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {completedLessons.includes(lesson.id) ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {lesson.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {lesson.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetail;

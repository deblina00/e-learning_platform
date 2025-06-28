import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  Play,
  Calendar,
} from "lucide-react";

const Dashboard = () => {
  // Mock enrolled courses data
  const enrolledCourses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      progress: 65,
      totalLessons: 45,
      completedLessons: 29,
      lastAccessed: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      nextLesson: "JavaScript Advanced Concepts",
    },
    {
      id: "2",
      title: "Digital Marketing Mastery",
      instructor: "Emma Rodriguez",
      progress: 40,
      totalLessons: 32,
      completedLessons: 13,
      lastAccessed: "1 day ago",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      nextLesson: "Social Media Analytics",
    },
    {
      id: "3",
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Lisa Park",
      progress: 85,
      totalLessons: 28,
      completedLessons: 24,
      lastAccessed: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      nextLesson: "Neural Networks Introduction",
    },
  ];

  const stats = {
    totalCourses: enrolledCourses.length,
    completedCourses: enrolledCourses.filter(
      (course) => course.progress === 100
    ).length,
    totalHours: 240,
    certificates: 2,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Student!
          </h1>
          <p className="text-gray-600">
            Continue your learning journey and track your progress.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Enrolled Courses
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCourses}</div>
              <p className="text-xs text-muted-foreground">
                Active learning paths
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedCourses}</div>
              <p className="text-xs text-muted-foreground">Courses finished</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Learning Hours
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalHours}</div>
              <p className="text-xs text-muted-foreground">
                Total time invested
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Certificates
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.certificates}</div>
              <p className="text-xs text-muted-foreground">
                Achievements earned
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
              <Link to="/courses">
                <Button variant="outline">Browse More Courses</Button>
              </Link>
            </div>

            <div className="space-y-6">
              {enrolledCourses.map((course) => (
                <Card
                  key={course.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          by {course.instructor}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-semibold text-purple-600">
                              {course.progress}%
                            </span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>
                              {course.completedLessons} of {course.totalLessons}{" "}
                              lessons
                            </span>
                            <span>Last accessed {course.lastAccessed}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div>
                            <p className="text-sm text-gray-600">
                              Next: {course.nextLesson}
                            </p>
                          </div>
                          <Link to={`/course/${course.id}`}>
                            <Button className="flex items-center space-x-2">
                              <Play className="h-4 w-4" />
                              <span>Continue</span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">
                        Completed "React Hooks"
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">
                        Started "Advanced CSS"
                      </p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Earned certificate</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <h4 className="font-medium text-sm">First Course</h4>
                      <p className="text-xs text-gray-600">
                        Completed your first course
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <h4 className="font-medium text-sm">Quick Learner</h4>
                      <p className="text-xs text-gray-600">
                        Completed 5 lessons in a day
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <h4 className="font-medium text-sm">Consistent</h4>
                      <p className="text-xs text-gray-600">
                        7-day learning streak
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;

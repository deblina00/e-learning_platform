import React from "react";
import { Link } from "react-router-dom";
import { User, Calendar } from "lucide-react";

interface CourseCardProps {
  id?: string;
  title: string;
  instructor: string;
  duration: string;
  students: number;
  price: number;
  image: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id = "1", // Default ID for backward compatibility
  title,
  instructor,
  duration,
  students,
  price,
  image,
  level,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {level}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold">
            ${price}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{instructor}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {students.toLocaleString()} students
          </span>
          <Link to={`/course/${id}`}>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

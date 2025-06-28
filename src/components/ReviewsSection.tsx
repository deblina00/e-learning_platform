
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Developer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "EduLearn completely transformed my career. The web development course was comprehensive and the instructors were incredibly supportive. I landed my dream job within 3 months!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The data science program exceeded my expectations. Real-world projects and industry insights made all the difference. Highly recommend EduLearn to anyone serious about learning.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Digital Marketer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Amazing platform with excellent course content. The flexibility to learn at my own pace while having access to expert instructors made this the perfect learning experience.",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Mobile App Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The mobile development course was outstanding. From basics to advanced concepts, everything was well-structured. The community support was also fantastic!",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Machine Learning Engineer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "EduLearn's ML course gave me the confidence to transition into AI. The hands-on projects and mentorship program were invaluable. Worth every penny!",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Cloud Architect",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Top-notch content and amazing instructors. The cloud computing course was exactly what I needed to advance my career. Thank you EduLearn!",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our students have to
            say about their learning experience with EduLearn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-purple-600 mb-2" />
              </div>

              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

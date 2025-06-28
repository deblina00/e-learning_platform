import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former VP of Education at TechCorp with 15+ years in educational technology. Passionate about democratizing access to quality education.",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
      expertise: [
        "Educational Leadership",
        "Business Strategy",
        "EdTech Innovation",
      ],
    },
    {
      name: "Dr. Michael Chen",
      role: "CTO & Co-Founder",
      bio: "PhD in Computer Science from MIT. Previously led engineering teams at Google and Microsoft. Expert in scalable learning platforms.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
      expertise: ["Machine Learning", "Platform Architecture", "Data Science"],
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Content",
      bio: "Award-winning instructional designer with expertise in creating engaging online learning experiences for Fortune 500 companies.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      expertise: ["Curriculum Design", "Digital Marketing", "UX Design"],
    },
    {
      name: "James Wilson",
      role: "Lead Instructor - Development",
      bio: "Senior Software Engineer with 12+ years at Apple and Facebook. Specializes in mobile and web development education.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      expertise: ["Full-Stack Development", "Mobile Apps", "Cloud Computing"],
    },
    {
      name: "Dr. Lisa Park",
      role: "Head of Data Science",
      bio: "Former Research Scientist at IBM Watson. PhD in Statistics from Stanford. Expert in making complex data concepts accessible.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
      expertise: ["Machine Learning", "Statistics", "Research Methods"],
    },
    {
      name: "Robert Kumar",
      role: "Cloud Solutions Architect",
      bio: "AWS Certified Solutions Architect with experience at Amazon and Netflix. Passionate about teaching cloud technologies.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      expertise: ["AWS", "DevOps", "System Architecture"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Our diverse team of educators, technologists, and industry experts
            are united by a shared passion for transforming education and
            empowering learners worldwide.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Leadership Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our leadership team believes in empowering every team member to
              innovate and contribute to our mission of transforming education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Vision-Driven
              </h3>
              <p className="text-gray-600">
                We lead with a clear vision of making quality education
                accessible to everyone, regardless of their background or
                location.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Collaborative
              </h3>
              <p className="text-gray-600">
                We foster a culture of collaboration where diverse perspectives
                are valued and everyone has a voice in shaping our future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation-Focused
              </h3>
              <p className="text-gray-600">
                We encourage experimentation and learning from failure as we
                push the boundaries of what's possible in online education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision
            of transforming education. Join us in making a difference in
            learners' lives worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-medium">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;

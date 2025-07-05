import React from "react";
import { Linkedin, Award, BookOpen, Users } from "lucide-react";

const Team: React.FC = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      experience: "15+ years in wealth management",
      education: "MBA from Wharton, CFA Charter",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Forbes 40 Under 40", "CFA Institute Recognition"],
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      experience: "12+ years in fintech",
      education: "PhD Computer Science from MIT",
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["AI Innovation Award", "Tech Pioneer 2023"],
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Investment Strategy",
      experience: "18+ years at Goldman Sachs",
      education: "MBA from Harvard, CFA Charter",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Investment Excellence Award", "Top Portfolio Manager"],
    },
  ];

  return null;
  // <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
  //   <div className="max-w-7xl mx-auto">
  //     <div className="text-center mb-16">
  //       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
  //         Leadership Team
  //       </h2>
  //       <p className="text-lg text-gray-600 max-w-3xl mx-auto">
  //         Meet the experienced professionals behind WealthiHQ, bringing
  //         decades of expertise from top-tier financial institutions and
  //         technology companies.
  //       </p>
  //     </div>

  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //       {team.map((member, index) => (
  //         <div
  //           key={index}
  //           className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
  //         >
  //           <div className="mb-6">
  //             <img
  //               src={member.image}
  //               alt={member.name}
  //               className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
  //             />
  //             <h3 className="text-xl font-bold text-gray-900 mb-1">
  //               {member.name}
  //             </h3>
  //             <p className="text-blue-600 font-medium mb-2">{member.role}</p>
  //           </div>

  //           <div className="space-y-4 text-left">
  //             <div className="flex items-start space-x-3">
  //               <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
  //               <div>
  //                 <div className="text-sm font-medium text-gray-900">
  //                   Experience
  //                 </div>
  //                 <div className="text-sm text-gray-600">
  //                   {member.experience}
  //                 </div>
  //               </div>
  //             </div>

  //             <div className="flex items-start space-x-3">
  //               <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
  //               <div>
  //                 <div className="text-sm font-medium text-gray-900">
  //                   Education
  //                 </div>
  //                 <div className="text-sm text-gray-600">
  //                   {member.education}
  //                 </div>
  //               </div>
  //             </div>

  //             <div className="flex items-start space-x-3">
  //               <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
  //               <div>
  //                 <div className="text-sm font-medium text-gray-900">
  //                   Achievements
  //                 </div>
  //                 <ul className="text-sm text-gray-600 space-y-1">
  //                   {member.achievements.map(
  //                     (achievement, achievementIndex) => (
  //                       <li
  //                         key={achievementIndex}
  //                         className="flex items-center"
  //                       >
  //                         <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
  //                         {achievement}
  //                       </li>
  //                     )
  //                   )}
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="mt-6 pt-6 border-t border-gray-200">
  //             <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
  //               <Linkedin className="h-4 w-4 mr-2" />
  //               Connect on LinkedIn
  //             </button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>

  //     <div className="text-center mt-12">
  //       <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
  //         <h3 className="text-xl font-bold text-gray-900 mb-4">
  //           Join Our Team
  //         </h3>
  //         <p className="text-gray-600 mb-6">
  //           We're always looking for talented individuals to join our mission
  //           of democratizing wealth management. Explore career opportunities
  //           with us.
  //         </p>
  //         <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
  //           View Open Positions
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </section>
};

export default Team;

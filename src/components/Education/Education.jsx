// // import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;






// import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[5vw] lg:px-[15vw] font-sans bg-[#030014] relative"
    >
      {/* Section Title */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          ACADEMIC <span className="text-purple-500">HISTORY</span>
        </h2>
        <div className="w-20 h-1.5 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-medium">
          The foundation of my knowledge and technical development.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Vertical Line - Consistent with Experience */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent" />

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 sm:mb-24 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            {/* Timeline Icon Node */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#0a0a0c] border-2 border-purple-500 overflow-hidden shadow-[0_0_20px_rgba(130,69,236,0.3)]">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Card */}
            <div 
              className={`w-full sm:w-[45%] ml-12 sm:ml-0 p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(130,69,236,0.1)] group`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                    {edu.date}
                  </span>
                  <span className="text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                    Grade: {edu.grade}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md text-gray-300 font-medium mt-1">
                    {edu.school}
                  </h4>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed italic border-l-2 border-purple-500/30 pl-4">
                  {edu.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        #education {
          clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
        }
        @media (max-width: 768px) {
          #education { clip-path: none; }
        }
      `}</style>
    </section>
  );
};

export default Education;
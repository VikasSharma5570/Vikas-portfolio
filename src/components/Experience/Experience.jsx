// // import React from "react";
// import { experiences } from "../../constants"; // Import your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
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
//                 {/* Company Logo/Image */}
//                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Role, Company Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400">{experience.desc}</p>
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;




import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[5vw] lg:px-[15vw] font-sans bg-[#030014] relative overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          MY <span className="text-purple-500">JOURNEY</span>
        </h2>
        <div className="w-20 h-1.5 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-medium">
          Professional milestones and roles that have shaped my technical expertise.
        </p>
      </div>

      {/* Experience Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Center Vertical Line (Hidden on very small screens, visible on SM+) */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 sm:mb-24 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Node (The Circle) */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#0a0a0c] border-4 border-purple-600 flex justify-center items-center shadow-[0_0_15px_rgba(130,69,236,0.5)]">
                 <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-400 animate-pulse" />
              </div>
            </div>

            {/* Content Card */}
            <div 
              className={`w-full sm:w-[45%] ml-12 sm:ml-0 p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-purple-500/40 hover:bg-white/[0.07] group`}
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Company Logo */}
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl overflow-hidden p-1 shadow-lg">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {experience.role}
                  </h3>
                  <p className="text-purple-400 font-semibold text-sm mt-1 uppercase tracking-wider">
                    {experience.company}
                  </p>
                  <span className="inline-block mt-2 text-xs font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                    {experience.date}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {experience.desc}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/10 text-purple-300 px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded-md border border-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        #experience {
          clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
        }
        @media (max-width: 768px) {
          #experience { clip-path: none; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
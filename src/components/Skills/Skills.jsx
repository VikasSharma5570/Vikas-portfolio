// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// const Skills = () => (
//   <section
//     id="skills"
//     className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
//   >
//     {/* Section Title */}
//     <div className="text-center mb-8">
//       <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
//       <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//       <p className="text-gray-400 mt-4 text-lg font-semibold">
//       A collection of my technical skills and expertise honed through various projects and experiences
//       </p>
//     </div>

//     {/* Skill Categories */}
//     <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
//       {SkillsInfo.map((category) => (
//         <div
//           key={category.title}
//           className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
//           shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
//         >
//           <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
//             {category.title}
//           </h3>

//           {/* Skill Items - 3 per row on larger screens */}
//           <Tilt
//             key={category.title}
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
//               {category.skills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
//                 >
//                   <img
//                     src={skill.logo}
//                     alt={`${skill.name} logo`}
//                     className="w-6 h-6 sm:w-8 sm:h-8"
//                   />
//                   <span className="text-xs sm:text-sm text-gray-300">
//                     {skill.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </Tilt>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Skills;





import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[5vw] lg:px-[15vw] font-sans bg-[#030014] relative overflow-hidden"
    >
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(130,69,236,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          MY <span className="text-purple-500">STRENGTHS</span>
        </h2>
        <div className="w-20 h-1.5 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-medium">
          A collection of technical tools and languages I use to bring ideas to life.
        </p>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-500 hover:border-purple-500/30 group"
          >
            <h3 className="text-xl font-bold text-gray-300 mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-purple-500 rounded-full" />
              {category.title}
            </h3>

            {/* Skill Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 mb-3 object-contain filter drop-shadow-[0_0_8px_rgba(130,69,236,0.2)]"
                  />
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Styles for non-library animations */}
      <style>{`
        #skills {
          /* Using standard clip-path instead of a custom class if possible */
          clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
        }
        
        @media (max-width: 768px) {
          #skills { clip-path: none; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
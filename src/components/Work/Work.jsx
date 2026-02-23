// import React, { useState } from "react";
// import { projects } from "../../constants";

// const Work = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section
//       id="work"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A showcase of the projects I have worked on, highlighting my skills
//           and experience in various technologies
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             onClick={() => handleOpenModal(project)}
//             className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
//           >
//             <div className="p-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-xl"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
//                 {project.description}
//               </p>
//               <div className="mb-4">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal Container */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
//           <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
//             <div className="flex justify-end p-4">
//               <button
//                 onClick={handleCloseModal}
//                 className="text-white text-3xl font-bold hover:text-purple-500"
//               >
//                 &times;
//               </button>
//             </div>

//             <div className="flex flex-col">
//               <div className="w-full flex justify-center bg-gray-900 px-4">
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
//                 />
//               </div>
//               <div className="lg:p-8 p-6">
//                 <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
//                   {selectedProject.title}
//                 </h3>
//                 <p className="text-gray-400 mb-6 lg:text-base text-xs">
//                   {selectedProject.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {selectedProject.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4">
//                   <a
//                     href={selectedProject.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
//                   >
//                     View Code
//                   </a>
//                   <a
//                     href={selectedProject.webapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
//                   >
//                     View Live
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Work;


import { useState, useEffect, useCallback } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") handleCloseModal(); };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, handleCloseModal]);

  return (
    <section id="work" className="py-24 px-[5vw] lg:px-[15vw] bg-[#030014] text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
          CRAFTED <span className="text-purple-500">PROJECTS</span>
        </h2>
        <p className="text-gray-500 font-medium">Click any project to see the details.</p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative rounded-3xl overflow-hidden bg-gray-900/40 border border-white/5 hover:border-purple-500/50 transition-all duration-500"
          >
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2 line-clamp-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Improved Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fadeIn">
          {/* Backdrop with heavy blur */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={handleCloseModal} />

          {/* Modal Card */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0c] border border-white/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col animate-zoomIn">
            
            {/* Close Button - Floating & Circular */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-5 right-5 z-[110] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500/20 hover:text-red-500 transition-all backdrop-blur-md border border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Content Scrollable Area */}
            <div className="overflow-y-auto custom-scrollbar">
              {/* Hero Image in Modal */}
              <div className="relative w-full h-[40vh] min-h-[250px]">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent" />
              </div>

              {/* Text Info */}
              <div className="p-8 md:p-12 -mt-16 relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
                  {selectedProject.description}
                </p>

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedProject.webapp} target="_blank" rel="noreferrer"
                    className="flex-1 text-center py-4 bg-purple-600 hover:bg-purple-500 rounded-2xl font-bold transition-all shadow-lg shadow-purple-600/30 active:scale-95"
                  >
                    Launch Live App
                  </a>
                  <a 
                    href={selectedProject.github} target="_blank" rel="noreferrer"
                    className="flex-1 text-center py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all active:scale-95"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-zoomIn { animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
      `}</style>
    </section>
  );
};

export default Work;
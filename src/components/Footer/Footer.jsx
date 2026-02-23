// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   // Smooth scroll function
//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
//       <div className="container mx-auto text-center">
//         {/* Name / Logo */}
//         <h2 className="text-xl font-semibold text-purple-500">Vikas Sharma</h2>

//         {/* Navigation Links - Responsive */}
//         <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
//           {[
//             { name: "About", id: "about" },
//             { name: "Skills", id: "skills" },
//             { name: "Experience", id: "experience" },
//             { name: "Projects", id: "projects" },
//             { name: "Education", id: "education" },
//           ].map((item, index) => (
//             <button
//               key={index}
//               onClick={() => handleScroll(item.id)}
//               className="hover:text-purple-500 text-sm sm:text-base my-1"
//             >
//               {item.name}
//             </button>
//           ))}
//         </nav>

//         {/* Social Media Icons - Responsive */}
//         <div className="flex flex-wrap justify-center space-x-4 mt-6">
//           {[
//             { icon: <FaFacebook />, link: "https://www.facebook.com/share/171vWMceiB/?mibextid=qi2Omg/" },
//             { icon: <FaTwitter />, link: "https://www.threads.net/@hey_vikass_" },
//             { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vikassharma248/" },
//             { icon: <FaInstagram />, link: "https://www.instagram.com/hey_vikass_/" },
            
//           ].map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
//             >
//               {item.icon}
//             </a>
//           ))}
//         </div>

//         {/* Copyright Text */}
//         <p className="text-sm text-gray-400 mt-6">
//           © 2025 Vikas Sharma. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6"; // Using Threads icon if available

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050414] text-white pt-16 pb-8 px-[5vw] lg:px-[15vw] border-t border-white/5">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="container mx-auto flex flex-col items-center">
        {/* Name / Branding */}
        <div 
          className="text-2xl font-black tracking-tighter cursor-pointer group mb-6"
          onClick={scrollToTop}
        >
          <span className="text-purple-500 group-hover:text-white transition-colors">&lt;</span>
          <span className="text-white">Vikas</span>
          <span className="text-purple-500 group-hover:text-white transition-colors">/</span>
          <span className="text-white">Sharma</span>
          <span className="text-purple-500 group-hover:text-white transition-colors">&gt;</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" }, // Changed 'projects' to 'work' to match your section ID
            { name: "Education", id: "education" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-purple-500 text-sm font-medium transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-10">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vikassharma248/", label: "LinkedIn" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/hey_vikass_/", label: "Instagram" },
            { icon: <FaThreads />, link: "https://www.threads.net/@hey_vikass_", label: "Threads" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/...", label: "Facebook" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-xl text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-8"></div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            © 2026 Vikas Sharma. <span className="hidden sm:inline">Built with Passion & Code.</span>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 hover:text-white transition-colors group"
          >
            Back to Top
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
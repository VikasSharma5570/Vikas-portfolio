// import { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detect scroll and change navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll function
//   const handleMenuItemClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);

//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "work", label: "Projects" },
//     { id: "education", label: "Education" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
//         isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="text-white py-5 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-lg font-semibold cursor-pointer">
//           <span className="text-[#8245ec]">&lt;</span>
//           <span className="text-white">Vikas</span>
//           <span className="text-[#8245ec]">/</span>
//           <span className="text-white">Sharma</span>
//           <span className="text-[#8245ec]">&gt;</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-300">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               className={`cursor-pointer hover:text-[#8245ec] ${
//                 activeSection === item.id ? "text-[#8245ec]" : ""
//               }`}
//             >
//               <button onClick={() => handleMenuItemClick(item.id)}>
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons */}
//         <div className="hidden md:flex space-x-4">
//           <a
//             href="https://github.com/VikasSharma5570"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <FaGithub size={24} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/vikassharma248/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <FaLinkedin size={24} />
//           </a>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           {isOpen ? (
//             <FiX
//               className="text-3xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           ) : (
//             <FiMenu
//               className="text-3xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Items */}
//       {isOpen && (
//         <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
//           <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`cursor-pointer hover:text-white ${
//                   activeSection === item.id ? "text-[#8245ec]" : ""
//                 }`}
//               >
//                 <button onClick={() => handleMenuItemClick(item.id)}>
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//             <div className="flex space-x-4">
//               <a
//                 href="https://github.com/VikasSharma5570"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white"
//               >
//                 <FaGithub size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/vikassharma248/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. ScrollSpy: Automatically highlight menu items on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Triggers when section is in the upper-middle of the screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ["about", "skills", "experience", "work", "education"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      // Offset for fixed navbar height
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-[5vw] lg:px-[15vw] ${
        isScrolled 
          ? "py-4 bg-[#050414]/80 backdrop-blur-lg border-b border-white/10 shadow-2xl" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-xl font-bold tracking-tight cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-purple-500 transition-colors group-hover:text-white">&lt;</span>
          <span className="text-white">Vikas</span>
          <span className="text-purple-500 transition-colors group-hover:text-white">/</span>
          <span className="text-white">Sharma</span>
          <span className="text-purple-500 transition-colors group-hover:text-white">&gt;</span>
        </div>

        {/* Desktop Menu - Modern Pill style */}
        <ul className="hidden md:flex items-center space-x-1 bg-white/5 border border-white/10 p-1 rounded-full">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Socials (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/..." className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"><FaGithub size={20}/></a>
          <a href="https://linkedin.com/..." className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"><FaLinkedin size={20}/></a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full Width Slide Down */}
      <div className={`
        absolute top-full left-0 w-full bg-[#050414] border-b border-white/10 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out md:hidden
        ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
      `}>
        <div className="flex flex-col p-8 space-y-6 text-center">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
              className={`text-lg font-semibold tracking-wide transition-colors ${
                activeSection === item.id ? "text-purple-500" : "text-gray-400"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex justify-center space-x-8 pt-6 border-t border-white/5">
            <a href="https://github.com/..." className="text-gray-400 hover:text-white"><FaGithub size={28}/></a>
            <a href="https://linkedin.com/..." className="text-gray-400 hover:text-white"><FaLinkedin size={28}/></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
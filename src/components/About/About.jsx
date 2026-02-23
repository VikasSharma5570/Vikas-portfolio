// import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';
// import Tilt from 'react-parallax-tilt';
// import profileImage from '../../assets/profile3.png';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
//     >
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center">
//         {/* Left Side */}
//         <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
//           {/* Greeting */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
//             Hi, I am
//           </h1>
//           {/* Name */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
//             Vikas Sharma
//           </h2>
//           {/* Skills Heading with Typing Effect */}
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
//             <span className="text-white">I am a </span>
//             <ReactTypingEffect
//               text={[
//                 'MERNStack Developer',
//                 'React Developer',
//                 'Coder',
//               ]}
//               speed={100}
//               eraseSpeed={50}
//               typingDelay={500}
//               eraseDelay={2000}
//               cursorRenderer={(cursor) => (
//                 <span className="text-[#8245ec]">{cursor}</span>
//               )}
//             />
//           </h3>
//           {/* About Me Paragraph */}
//           <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
//             I am a MERN-Stack developer having more than 6 Months experience in
//             building scalable web applications. Skilled in both front-end and
//             back-end development, I specialize in the MERN stack and other
//             modern technologies to create seamless user experiences and
//             efficient solutions.
//           </p>
//           {/* Resume Button */}
//           <a
//             href="https://drive.google.com/file/d/1fS4S1OOFZbz8X46rqmS-GT7ZMPX8sC6v/view?usp=sharing"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
//             style={{
//               background: 'linear-gradient(90deg, #8245ec, #a855f7)',
//               boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
//             }}
//           >
//             DOWNLOAD CV
//           </a>
          
//         </div>
//         {/* Right Side */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <Tilt
//             className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <img
//               src={profileImage}
//               alt="Vikas Sharma"
//               className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//             />
//           </Tilt>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;





import { useState, useEffect } from 'react';
import profileImage from '../../assets/profile3.png';

const About = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['MERN Stack Developer', 'React Developer', 'Full Stack Coder'];

  // Native Typing Logic
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center py-20 px-[5vw] lg:px-[15vw] overflow-hidden bg-[#030014]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full z-10">
        
        {/* Left Content Side */}
        <div className="md:w-3/5 text-center md:text-left mt-12 md:mt-0">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold tracking-widest mb-6 animate-fade-in">
            WELCOME TO MY WORLD
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Vikas Sharma</span>
          </h1>

          <h3 className="text-2xl sm:text-3xl font-bold mb-6 min-h-[40px]">
            <span className="text-white/80">I am a </span>
            <span className="text-purple-500 border-r-4 border-purple-500 pr-1 animate-pulse-cursor">
              {displayText}
            </span>
          </h3>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
            I build high-performance, scalable web applications with the MERN stack. 
            With over 6 months of focused experience, I transform complex problems 
            into elegant, user-centric digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1fS4S1OOFZbz8X46rqmS-GT7ZMPX8sC6v/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-purple-600 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(130,69,236,0.4)]"
            >
              DOWNLOAD CV
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <div className="flex items-center gap-2 text-gray-500 font-bold uppercase tracking-widest text-xs">
              <span className="w-8 h-[1px] bg-gray-700" />
              Available for projects
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="md:w-2/5 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] animate-float">
            {/* Decorative Rings */}
            <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-pink-500/10 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* The Image Container */}
            <div className="w-full h-full rounded-full p-2 bg-gradient-to-tr from-purple-600 to-pink-500 shadow-[0_0_50px_rgba(130,69,236,0.3)]">
              <img
                src={profileImage}
                alt="Vikas Sharma"
                className="w-full h-full rounded-full object-cover bg-[#0a0a0c]"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-cursor { border-color: transparent; animation: blink 0.8s infinite; }
        @keyframes blink { 50% { border-color: #a855f7; } }
      `}</style>
    </section>
  );
};

export default About;
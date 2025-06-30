// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import technoLogo from './assets/company_logo/logo techno.png';
import celebalLogo from './assets/company_logo/ct-logo.png';
// import technoLogo from './assets/company_logo/logo techno.png';

// EducatioinSection Logo's
import jecrcLogo from './assets/education_logo/jecrc_logo.png';
import acaLogo from './assets/education_logo/Aca_logo.png';
import ppsLogo from './assets/education_logo/pratap_logo.png';

// Project Section Logo's
import shoppingLogo from './assets/work_logo/shopping_app_logo.png';
import randomgifLogo from './assets/work_logo/gif_logo.png';
import passwordLogo from './assets/work_logo/Password Generator.png';
import pickLogo from './assets/work_logo/pick_logo.png';
import imagesearchLogo from './assets/work_logo/search_img_logo.png';
import removebgLogo from './assets/work_logo/bg_remove.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: technoLogo,
      role: "Mern stack Developer",
      company: "TechnoGlobe",
      date: "July 2024 - October 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: celebalLogo,
      role: "React intern",
      company: "Celebal Technology",
      date: "June 2024 - August 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: technoLogo,
      role: "Frontend Intern",
      company: "TechnoGlobe",
      date: "August 2022 - October 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: jecrcLogo,
      school: "JECRC College, Jaipur",
      date: "November 2021 - May 2025",
      grade: "8.03 CGPA",
      desc: "I have completed my Bachelor's degree (B.tech) in Information Technology from JECRC College, Jaipur. During my time at JECRC, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Jecrc College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "B-tech",
    },
    {
      id: 1,
      img: acaLogo,
      school: "Archana Children's Academy, Sirsee",
      date: "Apr 2019 - July 2021",
      grade: "87.00%",
      desc: "I completed my Class 12 education from Archana Children Academy, Sirsee (RBSE board), where I studied Physics, Chemistry, and Mathematics (PCM) with Hindi and English as compulsory subjects.",
      degree: "RBSE (XII) - PCM with Hindi & English",

    },
    {
      id: 2,
      img: ppsLogo,
      school: "Pratap Public Sr. Sec. School, Balawala, Sanganer, Jaipur",
      date: "Apr 2017 - March 2019",
      grade: "66.67%",
      desc: "I completed my Class 10 education from Pratap Public Sr. Sec. School, Balawala, Sanganer, Jaipur under the Rajasthan Board (RBSE), where I studied subjects including Science, Mathematics, English, Hindi, and Sanskrit.",
      degree: "RBSE (X) - General Science with Sanskrit"
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Ecomzy Shopping App",
      description:
        "A sleek and responsive React.js e-commerce application designed to deliver a seamless online shopping experience. The app features dynamic product listings, real-time cart updates powered by Redux Toolkit, and smooth navigation across devices. Users can effortlessly browse, add to cart, update quantities, and view their total—all within an intuitive and modern interface.",
      image: shoppingLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Redux Toolkit", "Tailwind"],
      github: "https://github.com/VikasSharma5570/shopping-app",
      webapp: "https://shopping-app-flame.vercel.app/",
    },
    {
      id: 1,
      title: "Random-Gifs",
      description:
        " A dynamic and interactive web application that generates random GIFs based on user-selected categories using the GIPHY API. Built with React.js, the platform allows users to explore endless visual content in a fun and engaging way. With a responsive UI and seamless API integration.",
      image: randomgifLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/VikasSharma5570/random-gif",
      webapp: "https://random-gif-sable.vercel.app/",
    },
    {
      id: 2,
      title: "Password Generate",
      description:
        "Users can select the desired length and character types (uppercase, lowercase, numbers, symbols) to generate secure passwords tailored to their needs. With a minimalistic UI and real-time generation logic, the app is both user-friendly and highly functional—perfect for improving digital security in everyday use.",
      image: passwordLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Validation"],
      github: "https://github.com/VikasSharma5570/Password-Generator",
      webapp: "https://password-generator-taupe-psi.vercel.app/",
    },
    {
      id: 3,
      title: "Pick Your Place",
      description:
        "Pick Your Place is a visually engaging location selector app built with React.js and Tailwind CSS. Users can explore and highlight destinations through an intuitive interface, perfect for trip planning, showcasing places, or visual bookmarking. The app emphasizes responsive design, clean UI elements.",
      image: pickLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS", "React JS"],
      github: "https://github.com/VikasSharma5570/pick-your-place",
      webapp: "https://pick-your-place.vercel.app/",
    },
    {
      id: 4,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/VikasSharma5570/Image-Search-App",
      webapp: "https://image-search-app-ten-beryl.vercel.app/",
    },
    {
      id: 5,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/VikasSharma5570/Image-background-remove",
      webapp: "https://image-background-remove-navy.vercel.app/",
    },
  ];  
// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
// import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
// import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
// import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import technoLogo from "./assets/company_logo/logo techno.png";
import celebalLogo from "./assets/company_logo/ct-logo.png";
// import technoLogo from './assets/company_logo/logo techno.png';

// EducatioinSection Logo's
import jecrcLogo from "./assets/education_logo/jecrc_logo.png";
import acaLogo from "./assets/education_logo/Aca_logo.png";
import ppsLogo from "./assets/education_logo/pratap_logo.png";

// Project Section Logo's
import shoppingLogo from "./assets/work_logo/shopping_app_logo.png";
import randomgifLogo from "./assets/work_logo/gif_logo.png";
// import passwordLogo from "./assets/work_logo/Password Generator.png";
// import pickLogo from "./assets/work_logo/pick_logo.png";
// import imagesearchLogo from "./assets/work_logo/search_img_logo.png";
import removebgLogo from "./assets/work_logo/bg_remove.png";
import sflogo from "./assets/work_logo/shaping-future logo.png";
import soccerlogo from "./assets/work_logo/soccer.png";
import opnedeallogo from "./assets/work_logo/opnedeal.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: technoLogo,
    role: "Junior Software Developer",
    company: "Microprixs Solutions Private Limited",
    date: "August 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
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
    skills: ["ReactJS", "JavaScript", "HTML", "CSS"],
  },
  // {
  //   id: 2,
  //   img: technoLogo,
  //   role: "Frontend Intern",
  //   company: "TechnoGlobe",
  //   date: "August 2022 - October 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Bootstrap",
  //     "Figma",
  //     "Material UI",
  //   ],
  // },
];

export const education = [
  {
    id: 0,
    img: jecrcLogo,
    school: "JECRC College, Jaipur",
    date: "November 2021 - May 2025",
    grade: "8.07 CGPA",
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
    degree: "RBSE (X) - General Science with Sanskrit",
  },
];

export const projects = [
  {
    id: 0,
    title: "Opnedeal",
    description:
      "Opnedeal is a comprehensive web platform designed to help eCommerce sellers start, manage, and grow their online businesses efficiently. The platform provides sellers with the necessary tools and guidance to set up their online stores, manage products, and expand their presence across various eCommerce marketplaces. It focuses on simplifying the digital selling process for new and existing entrepreneurs by offering structured solutions and business support features. The project was built using the MERN stack — React.js for developing a dynamic and interactive frontend, Tailwind CSS for modern and responsive UI styling, Node.js and Express.js for building scalable backend APIs, and MongoDB for efficient database management. This project strengthened my full-stack development skills, including REST API development, database design, authentication handling, and building scalable eCommerce-oriented solutions.",
    image: opnedeallogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Tailwind", "expressjs", "MongoDB", "Nodejs"],
    github: "https://github.com/VikasSharma5570/",
    webapp: "https://opnedeal.com/",
  },
  {
    id: 1,
    title: "Soccer Hub",
    description:
      "Soccer Hub is a web and mobile-based club management platform designed to help managers efficiently handle and organize club data. The system allows managers to create clubs, assign teams, manage club members and club information, and monitor structured data according to specific requirements. The platform was developed using React.js to build a dynamic and responsive user interface, along with the HeroUI library to ensure a clean, modern, and consistent design system. Data is fetched and managed through REST APIs using Axios, enabling real-time updates and smooth data rendering based on user roles and needs. The application also includes a secure authentication system where users log in using their mobile number and OTP verification, ensuring safe and seamless access. Through this project, I enhanced my skills in frontend development, API integration, authentication flow implementation, and building scalable, user-centric management systems..",
    image: soccerlogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Tailwind", "HeroUI"],
    github: "https://github.com/VikasSharma5570/",
    webapp: "https://pwav1.soccerhub.space/",
  },
  {
    id: 2,
    title: "Shaping Future",
    description:
      "Shaping Future is a web-based platform developed to support financially or academically needy students who want to pursue higher education in professional fields like CA, CMA, Engineering, and Medical.The platform was built using React.js for creating a responsive and user-friendly interface, and dynamic data was fetched from backend APIs using Axios to ensure real-time and structured information delivery. Through this project, I strengthened my skills in component-based architecture, API integration, asynchronous data handling, and building impactful solutions that address real-world problems.",
    image: sflogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Tailwind"],
    github: "https://github.com/VikasSharma5570/",
    webapp: "https://shapingfuture.in/",
  },
  {
    id: 3,
    title: "Ecomzy Shopping App",
    description:
      "A sleek and responsive React.js e-commerce application designed to deliver a seamless online shopping experience. The app features dynamic product listings, real-time cart updates powered by Redux Toolkit, and smooth navigation across devices. Users can effortlessly browse, add to cart, update quantities, and view their total—all within an intuitive and modern interface.",
    image: shoppingLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "API",
      "Redux Toolkit",
      "Tailwind",
    ],
    github: "https://github.com/VikasSharma5570/shopping-app",
    webapp: "https://shopping-app-flame.vercel.app/",
  },
  {
    id: 4,
    title: "Random-Gifs",
    description:
      " A dynamic and interactive web application that generates random GIFs based on user-selected categories using the GIPHY API. Built with React.js, the platform allows users to explore endless visual content in a fun and engaging way. With a responsive UI and seamless API integration.",
    image: randomgifLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/VikasSharma5570/random-gif",
    webapp: "https://random-gif-sable.vercel.app/",
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

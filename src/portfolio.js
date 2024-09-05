/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harshitha Katakam",
  title: "Hi all, I'm Harshitha",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀🚀🚀 Proficient in Java, Spring Boot, React, and AWS, with expertise in developing scalable, secure applications and implementing CI/CD pipelines for efficient deployment. Committed to contributing to innovative projects aligned with the company's mission and values."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VLM6t7BJQtmrnJYT2xDjICG9BXohrzMx/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harshithaxkatakam",
  linkedin: "https://www.linkedin.com/in/harshitha-katakam/",
  gmail: "harshithaxkatakam@gmail.com",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Expert in ReactJS with a strong background in building dynamic and efficient UI."),
    emoji("⚡ Proven ability to lead product development and manage projects from concept to completion, demonstrating exceptional organizational and strategic planning skills."),
    emoji("⚡ Versatile Full Stack Developer, with a focus on creating robust web applications. ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "kafka",
      fontAwesomeClassname: "fab fa-kafka"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes"
    },
    {
      skillName: "redux",
      fontAwesomeClassname: "fab fa-redux"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-mongo-db"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "invision",
      fontAwesomeClassname: "fab fa-invision"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Texas at Dallas",
      logo: require("./assets/images/utdLogo.png"),
      subHeader: "Master of Business Administration",
      duration: "August 2022 - December 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "CGPA: 3.72",
        "Dean's Excellence Scholar"
      ]
    },
    {
      schoolName: "The University of Texas at Dallas",
      logo: require("./assets/images/utdLogo.png"),
      subHeader: "Master of Science in Management Information Systems",
      duration: "August 2022 - December 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "CGPA: 3.97",
        "Dean's Excellence Scholar",
        "Summa Cum Laude"
      ]
    },
    {
      schoolName: "Jawaharlal Nehru Technological University",
      logo: require("./assets/images/jntuLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science Engineering",
      duration: "August 2016 - August 2020",
      // desc: "Ranked top 5% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["CGPA: 9.94"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Engineer Intern",
      company: "iPivot",
      companylogo: require("./assets/images/ipivotLogo.webp"),
      date: "September 2024 – Present",
      desc: "",
      descBullets: [
        "Architected and developed a server-rendered web app with Next.js, optimizing page load times and enhancing SEO by 40%.",
        "Enhanced code reliability and maintainability by implementing TypeScript, reducing bugs by 30% and streamlining development process.",
        "Achieved 95% test coverage with React Testing Library and Jest, ensuring robust and reliable UI components.",
        "Engineered AI-driven image recognition algorithms with Python and TensorFlow, achieving a 35% increase in image processing accuracy and a 20% reduction in analysis time.",
        "Developed scalable and efficient GraphQL API to streamline data querying and mutation, improving API performance by 25%.",
        "Streamlined the deployment process by integrating Next.js with CI/CD pipelines, enabling rapid deployment and continuous delivery of new features, resulting in a 50% faster release cycle.",
        "Engineered a MySQL database schema to manage metadata, user information, and processed image data, ensuring data integrity and optimizing retrieval speeds by 30%."
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      company: "The University of Texas at Dallas",
      companylogo: require("./assets/images/utdLogo.png"),
      date: "August 2023 – December 2023",
      desc: "",
      descBullets: [
        "Guided and provided technical mentorship to over 200 students across in System Analysis & Project Management, Python, and SAP Cloud Analytics, deepening their understanding of intricate software development concepts and project management methodologies.",
        "Enabled hands-on learning by directing students through competitive full-stack development projects.",
        "Optimized course coordination by closely collaborating with instructors, leading to 20% improvement in student satisfaction.",
        "Designed a performance-tracking dashboard, which resulted in a 15% enhancement in identifying critical areas for student development.",
        "Applied data visualization tools and Python libraries (e.g., Pandas, Matplotlib) to generate actionable insights.",
        "Exhibited leadership in overseeing course-related activities, ensuring the seamless integration of technical concepts such as object-oriented programming (OOP) and cloud analytics into the curriculum."
      ]
    },
    {
      role: "Web Developer",
      company: "The University of Texas at Dallas - AIMDB SOC",
      companylogo: require("./assets/images/utdLogo.png"),
      date: "January 2023 – May 2024",
      desc: "",
      descBullets: [
        "Spearheaded a team of developers to revamp and upgrade the AIMDB website, boosting user engagement by 25%.",
        "Crafted interactive web features to highlight AI and database projects, resulting in a 35% increase in site traffic.",
        "Built and maintained RESTful APIs with Node.js and implemented JSON Web Token (JWT) authentication.",
        "Streamlined workflows in CI/CD pipelines utilizing AWS CodePipeline, Code-Build, and Code Deploy.",
        "Provided technical guidance and mentorship to the web development team, ensuring adherence to best practices in software engineering.",
        "Applied performance optimization strategies to achieve maximum speed and scalability for the web application.",
        "Collaborated with cross-functional teams to convert business requirements into robust technical solutions.",
        "Managed the planning and execution of initiatives to advance AI and database technologies."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "iPivot",
      companylogo: require("./assets/images/ipivotLogo.webp"),
      date: "Aug 2021 – Aug 2022",
      desc: "",
      descBullets: [
        "Directed a team of 5 in creating a resilient cancer cell diagnosis platform utilizing ReactJS, MUI, Redux, AWS, Azure AD, Node.js and SQL, achieved a 70% performance improvement by incorporating key features like Gamma Correction, report builder, OSD Viewer.",
        "Boosted website efficiency by 30% through responsive design and enhanced page load times, significantly elevating user satisfaction.",
        "Lowered infrastructure expenses by utilizing AWS services such as S3, Lambda, and Deployment for optimized resource management.",
        "Developed and maintained an Applicant Tracking System application with the MERN stack, increasing application performance by 40%.",
        "Adopted agile methodologies, leading to a 40% rise in project delivery speed and 25% quicker time-to-market for new features.",
        "Sustained stakeholder satisfaction at 95% through clear communication via status updates and exemplary project outcomes."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Temenos",
      companylogo: require("./assets/images/temenosLogo1.png"),
      date: "Oct 2020 – Aug 2021",
      desc: "",
      descBullets: [
        "Employed advanced Java skills to refactor legacy code, cutting response time by 20% and enhancing system efficiency by 15%.",
        "Diagnosed and rectified 100+ frontend bugs using sophisticated debugging techniques, reducing software bugs by 25% and bolstering system stability.",
        "Proficiently integrated RESTful APIs into frontend applications, enabling smooth data interaction with backend systems.",
        "Enhanced RESTful APIs with Spring Boot and Hibernate, facilitating efficient data communication between frontend and backend.",
        "Utilized Docker, leading to a 40% reduction in deployment time and a 50% improvement in the scalability of microservices architecture.",
        "Administered and optimized MySQL databases, achieving a 21% boost in query performance.",
        "Architected microservices, resulting in a 25% cut in infrastructure expenses through resource-efficient practices.",
        "Implemented messaging and notification services, leading to a 40% rise in user engagement.",
        "Streamlined business processes with orchestration and integration services, resulting in a 20% increase in operational efficiency.",
        "Earned a Spot Award for demonstrating remarking quick learning capabilities and exceptional performance under pressure."
      ]
    },
    {
      role: "Associate Software Development Engineer",
      company: "Temenos",
      companylogo: require("./assets/images/temenosLogo1.png"),
      date: "May 2019 – Oct 2020",
      desc: "",
      descBullets: [
        "Addressed 150+ bugs in a web application, within a specified timeframe, utilizing top-tier debugging and troubleshooting techniques.",
        "Championed the development and deployment of cross-platform mobile apps using Kony Visualizer and Kony Fabric.",
        "Created UI screens for a tablet-native application with Kony Visualizer, leading to a 20% enhancement in user experience.",
        "Employed Git and Jenkins for effective version control and continuous integration in development workflows.",
        "Directed the design and implementation of Java web services, on a Tomcat server, achieving a 20% reduction in response time.",
        "Designed, tested and documented APIs using Postman, fostering seamless collaboration and cutting integration time by 15%.",
        "Gained expertise in JIRA and Confluence for workflow management and project documentation, boosting collaboration efficiency by 40%."
      ]
    },
    {
      role: "Web Developer",
      company: "CVR College of Engineering",
      companylogo: require("./assets/images/cvrLogo.jpeg"),
      date: "Jan 2019 – May 2019",
      desc: "",
      descBullets: [
        "Integrated a 360-degree view feature into the college website, enhancing virtual campus tours and increasing online engagement by 50%. ",
        "Contributed to all phases of the development lifecycle from initial conception to deployment and ongoing maintenance. ",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME PROJECTS IN STARTUPS, COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/maple.jpg"),
      projectName: "Municipality Records Maintenance System",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/17JNhOlShlLRq1JFPMkOxjWbLWO7onOJn/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/atsLogo.png"),
      projectName: "RapidHire",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: ""//to do
        }
      ]
    },
    {
      image: require("./assets/images/cdx.jpeg"),
      projectName: "Diagnosis Portal",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/1a6dRmqDeRyUaFd5u0MF2RdG04GUOkF0w/view?usp=drive_link"
        }
      ]
    },
    {
      image: require("./assets/images/airbnbLogo.png"),
      projectName: "Austin Airbnb Listings Visualization",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/1nnOYsLVqbvwkQYglhqYLEKJKzx2mUNrC/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sap.png"),
      projectName: "Unveiling COVID Vaccination Insights in Pennsylvania",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/1z1ymkqlUaMgHBD7RFzIsIyVN4Uk2wLEV/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/esp.jpg"),
      projectName: "Employee Sharing Platform",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/1WJRTHgLZMFHh0caFCDdfr1gy0qePtO_V/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fika.png"),
      projectName: "Fika",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/1Upzs-iTtEak9YBL0wZ89RWTU2OrCpKoy/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cvr.png"),
      projectName: "CVR CSE Website",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cvr.ac.in/cse/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tripShare.png"),
      projectName: "Trip Itinerary Sharing Platform",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/1Dpmf24nLklxI9yflqJ-3aR_sIxipMxAQ/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/toDoList.jpg"),
      projectName: "MERN Stack To-Do List Implementation",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://github.com/harshithaxkatakam/to-do-list"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/moneyflix.png"),
      projectName: "Moneyflix",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/1OFZ_x5J6bOPkaTKoEhlT87WawVXsfIvq/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/expedia.jpg"),
      projectName: "Expedia Enhancements",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/12JTfrohUPHaHz3uiXHLiADD5Y2Mop5ux/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/polly.png"),
      projectName: "Text-to-Speech Converter",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://github.com/harshithaxkatakam/text-to-speech"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/parkup.png"),
      projectName: "Park Up",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/1kV8ioMlEnFGPu51lP3LxXvUh4N0u_Oyt/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Solution Architect Associate",
      subtitle:
        "Amazon Web Services Certified",
      image: require("./assets/images/aws.jpeg"),
      imageAlt: "AWS logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/fc7b8c8e-9a33-4778-aabd-fa25b59cf856"
        },
      ]
    },
    {
      title: "Project Management Professional",
      subtitle:
        "Google Certified",
      image: require("./assets/images/googleLogo.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/D9JT7UNMRGEZ"
        }
      ]
    },

    {
      title: "Digital Banking Application Developer",
      subtitle: "Kony Certified",
      image: require("./assets/images/konyLogo.webp"),
      imageAlt: "Kony Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "", // https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "", //https://bit.ly/saadpasta-slides
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  url: "https://drive.google.com/file/d/1VLM6t7BJQtmrnJYT2xDjICG9BXohrzMx/view?usp=sharing",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+1) 682-373-3508",
  email_address: "harshithaxkatakam@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

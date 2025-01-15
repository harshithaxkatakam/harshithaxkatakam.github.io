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
    "https://drive.google.com/file/d/1k2O6z14lTmTNLWh92YCVAOYXu9zhgo1t/view?usp=sharing", // Set to empty to hide the button
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
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
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "Jira",
    //   fontAwesomeClassname: "fab fa-jira"
    // },
    // {
    //   skillName: "Confluence",
    //   fontAwesomeClassname: "fab fa-confluence"
    // },
    // {
    //   skillName: "jenkins",
    //   fontAwesomeClassname: "fab fa-jenkins"
    // },
    // {
    //   skillName: "kafka",
    //   fontAwesomeClassname: "fab fa-kafka"
    // },
    // {
    //   skillName: "kubernetes",
    //   fontAwesomeClassname: "fab fa-kubernetes"
    // },
    // {
    //   skillName: "redux",
    //   fontAwesomeClassname: "fab fa-redux"
    // },
    // {
    //   skillName: "mongodb",
    //   fontAwesomeClassname: "fab fa-mongo-db"
    // },
    // {
    //   skillName: "figma",
    //   fontAwesomeClassname: "fab fa-figma"
    // },
    // {
    //   skillName: "invision",
    //   fontAwesomeClassname: "fab fa-invision"
    // },
    // {
    //   skillName: "jira",
    //   fontAwesomeClassname: "fab fa-jira"
    // },
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
        "CGPA: 3.74",
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
        "CGPA: 3.94",
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
      descBullets: ["CGPA: 3.95"]
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
      role: "Full Stack Engineer",
      company: "iPivot",
      companylogo: require("./assets/images/ipivotLogo.webp"),
      date: "September 2024 – December 2024",
      desc: "",
      descBullets: [
        "Architected an Applicant Tracking System using Next.js, TailwindCSS, improving SEO by 40% and load speed by 30%",
        "Improved code quality and maintainability by adopting TypeScript, reducing production bugs by 37%",
        "Engineered reusable UI components using React with Redux, expediting feature development by 20%",
        "Achieved 95% test coverage with React Testing Library and Jest, ensuring robust and reliable UI components",
        "Automated CI/CD pipelines using AWS CodePipeline, reducing deployment time by 50%",
        "Optimized web performance using lazy loading and code splitting, ensuring robust application behavior",
        "Led troubleshooting efforts to resolve complex production issues, ensuring minimal downtime",
        "Designed RESTful APIs using Express.js and MongoDB, optimizing queries - increasing data retrieval efficiency by 25%"
      ]

    },
    {
      role: "Full Stack Engineer",
      company: "The University of Texas at Dallas - AIMDB SOC",
      companylogo: require("./assets/images/utdLogo.png"),
      date: "September 2022 – May 2024",
      desc: "",
      descBullets: [
        "Redesigned and modernized AIMDB’s website, leading to a 25% increase in user engagement",
        "Built scalable and interactive web features to showcase AI and database projects using Typescript, Express, React, and MongoDB, increasing site traffic by 35%",
        "Streamlined deployment using AWS Code-Pipeline, Code-Build, and Code-Deploy, improving release efficiency by 40%",
        "Implemented performance optimization techniques to ensure maximum speed and scalability of the web application",
        "Collaborated with cross-functional teams to translate business requirements into technical solutions",
        "Mentored 200+ students in software development & project management, contributing to a 7% rise in class average",
        "Helped students build capstone projects using React and Express.js, showcasing real-world problem-solving skills",
        "Led seminars and workshops on the latest advancements in MERN Stack development, catering to students and professionals with diverse backgrounds and international origins",
        "Conducted code reviews and enforced coding standards to ensure code quality and maintainability",
        "Implemented unit testing and end-to-end testing frameworks to ensure application reliability and performance",
        "Attained the highest (5/5) annual Teaching Assistant (TA) performance rating from the supervising professor"
      ]
    },
    {
      role: "Senior Full Stack Engineer",
      company: "iPivot",
      companylogo: require("./assets/images/ipivotLogo.webp"),
      date: "Aug 2021 – Aug 2022",
      desc: "",
      descBullets: [
        "Directed a team of 5 developers in building a resilient cancer cell diagnosis platform using ReactJS, Node.js, TypeScript, and AWS, improving diagnostic accuracy",
        "Successfully migrated from .Net to React development environment within a two-month timeframe",
        "Boosted web performance by 30% through responsive design, lazy loading, and optimizing API calls",
        "Built and deployed scalable backend services with Node.js and Express.js, ensuring seamless data handling and front-end integration",
        "Reduced infrastructure costs by 20% through strategic use of AWS S3, Lambda, and CloudFront",
        "Designed a robust authentication system integrating Azure AD and AWS Cognito, boosting platform security",
        "Automated deployment processes using Terraform and Jenkins, cutting manual deployment time by 50%",
        "Enhanced database performance by 40% through query optimization and indexing",
        "Demonstrated strong collaboration and stakeholder management by working with cross-functional teams to translate business requirements into technical solutions"
      ]

    },
    {
      role: "Full Stack Engineer",
      company: "Temenos",
      companylogo: require("./assets/images/temenosLogo1.png"),
      date: "May 2019 – Aug 2021",
      desc: "",
      descBullets: [
        "Developed document management UI components and microservices for retail banking using Kony Visualizer, Kony Fabric, Core Java and Spring Boot, ensuring secure handling of customer documents",
        "Achieved 21% improvement in query performance by optimizing MySQL databases",
        "Containerized microservices using Docker, resulting in reduced deployment time by 40% and improved scalability",
        "Implemented RESTful APIs for account statement generation, reducing manual reporting time by 40%",
        "Built 30 cross-platform UI components using Kony Visualizer, delivering consistent user experience across devices",
        "Utilized Spring Boot and Hibernate frameworks in integrating RESTful APIs into 15+ banking applications",
        "Automated CI/CD pipelines using Jenkins, improving deployment speed and minimizing downtime",
        "Identified and resolved 150+ critical UI bugs under strict deadlines, ensuring smooth functionality and user experience",
        "Collaborated with QA and product teams to conduct end-to-end testing, improving software quality",
        "Developed a comprehensive dashboard using React, MongoDB, and Express.js to track code coverage and analyze test suites across all teams, enhancing code quality and performance monitoring"
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
      image: require("./assets/images/imaginify.png"),
      projectName: "Imaginify",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://imaginify-erlknpa4i-harshithaxkatakams-projects.vercel.app/"
        }
      ]
    },
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
          url: "https://rapidhire.ipivot.io/"
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
  url: "https://drive.google.com/file/d/1k2O6z14lTmTNLWh92YCVAOYXu9zhgo1t/view?usp=sharing",
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

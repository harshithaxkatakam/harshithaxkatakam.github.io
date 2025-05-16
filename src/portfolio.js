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
  subTitle: [
    emoji("✨ Full Stack Software Engineer"),
    emoji("✨ Expert in building scalable, high-performance apps"),
    emoji("✨ Creating seamless digital experiences"),
    emoji("✨ Solving complex engineering challenges"),
    emoji("✨ Contributing to impactful tech solutions."),
    emoji("✨ Building future, one line of code at a time!")
  ],
  resumeLink:
    "https://drive.google.com/file/d/1MKejgUJ1UM1GbScdFy_9QfATH8ie5DdN/view?usp=sharing", // Set to empty to hide the button
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
  subTitle: "Building scalable, secure, and cloud-native applications with modern full-stack technologies.",
  skills: [
    emoji("⚡ Develop full-stack applications using Java, Spring Boot, ReactJS, and Node.js with a strong focus on performance and maintainability."),
    emoji("⚡ Design and deploy scalable microservices and RESTful APIs across cloud platforms like AWS and Azure."),
    emoji("⚡ Automate CI/CD pipelines using GitHub Actions, Jenkins, Docker, and Kubernetes for streamlined, production-ready deployments."),
    emoji("⚡ Implement enterprise-grade authentication, RBAC, and secure data communication using OAuth 2.0, JWT, and Azure AD."),
    emoji("⚡ Lead frontend architecture and design, delivering highly interactive and accessible UIs with React, Next.js, Redux, and TypeScript."),
    emoji("⚡ Monitor, optimize, and troubleshoot distributed systems using tools like Azure Monitor, Prometheus, and Grafana.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      schoolName: "The University of Texas at Dallas - Texas, USA",
      logo: require("./assets/images/utdLogo.png"),
      subHeader: "Master of Business Administration",
      duration: "August 2022 - December 2024",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "CGPA: 3.74",
        "Dean's Excellence Scholar"
      ]
    },
    {
      schoolName: "The University of Texas at Dallas - Texas, USA",
      logo: require("./assets/images/utdLogo.png"),
      subHeader: "Master of Science in Management Information Systems",
      duration: "August 2022 - December 2024",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "CGPA: 3.94",
        "Dean's Excellence Scholar",
        "Summa Cum Laude"
      ]
    },
    {
      schoolName: "Jawaharlal Nehru Technological University - Hyderabad, India",
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
  viewSkillBars: true, // Set it to true to show Proficiency Section
  coreExpertise: [
    emoji("⚡ Frontend Development: Crafting dynamic and responsive UIs using React.js, Next.js, TypeScript, and TailwindCSS."),
    emoji("⚡ Backend Development: Architecting and optimizing RESTful APIs, GraphQL, and microservices using Node.js, Python, and Java (Spring Boot)."),
    emoji("☁️ Cloud & DevOps: Deploying robust solutions on AWS, GCP, and Azure, leveraging Docker, Kubernetes, Terraform, and CI/CD pipelines (Jenkins, GitHub Actions, AWS CodePipeline)."),
    emoji("🤖 AI & Automation: Implementing AI-powered systems, data processing pipelines, and workflow automation for increased efficiency."),
    emoji("🔒 Security & Performance: Ensuring high availability, scalability, and security with best practices like OAuth 2.0, JWT, and role-based access control (RBAC).")
  ],
  whatILoveDoing: [
    emoji("🧠  Solving complex engineering challenges with innovative and scalable solutions."),
    emoji("🚀  Building end-to-end products—from concept and architecture to deployment and optimization."),
    emoji("⚙️  Optimizing system performance by reducing latency, enhancing efficiency, and implementing automation."),
    emoji("🤝  Collaborating with cross-functional teams to drive seamless product development."),
    emoji("👨‍🏫  Mentoring and leading engineers to foster innovation and technical excellence.")
  ],
  industries: [
    emoji("💳  Fintech & Banking: Core banking systems, transaction processing, security compliance."),
    emoji("🏥  Healthcare & AI: AI-driven healthcare automation and data processing."),
    emoji("🛒  E-commerce & SaaS: Scalable SaaS platforms, cloud-based microservices.")
  ],
  passion: [
    emoji("🔥  Pushing the boundaries of web development, AI, and cloud computing."),
    emoji("🎯  Creating impactful, intuitive, and high-performance software."),
    emoji("💡  Innovating with cutting-edge technologies and frameworks.")
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Full Stack Engineer",
      company: "CDX Diagnostics",
      companylogo: require("./assets/images/cdx.jpeg"),
      date: "May 2023 – Present",
      desc: "",
      descBullets: [
        "Led technical architecture of an AI-powered diagnostic platform using React, Next.js, TypeScript, and TailwindCSS, boosting load speed by 40%",
        "Integrated Java-based microservices via REST APIs and GraphQL, reducing API response time and enhancing backend scalability",
        "Implemented domain-driven design with Spring Boot and Spring Security, strengthening application security and maintainability",
        "Built CI/CD pipelines using Jenkins and GitHub Actions; deployed Dockerized Spring Boot apps to Azure Kubernetes Service (AKS)",
        "Configured Azure Monitor and Application Insights for performance observability and issue resolution",
        "Enhanced data caching using React Query and Axios, reducing over-fetching and API load",
        "Achieved 95%+ frontend test coverage with Jest and React Testing Library, reducing regression defects",
        "Improved patient diagnostic accuracy with image manipulation tools using OpenSeadragon and CSS filters",
        "Collaborated cross-functionally to align frontend/backend implementations with enterprise health compliance (HIPAA, HL7, FHIR)"
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "The University of Texas at Dallas - AIMDB SOC",
      companylogo: require("./assets/images/utdLogo.png"),
      date: "September 2022 – August 2024",
      desc: "",
      descBullets: [
        "Engineered scalable full-stack analytics web application using React.js, Node.js, & Express.js, serving 500+ monthly users and powering research data analysis across multiple university departments",
        "Implemented lazy loading, virtual scrolling, and memoization, reducing initial page load time for large datasets by 42% (from ~3.8s to ~2.2s)",
        "Designed intuitive filtering interfaces, dashboards, and state-driven visualizations by integrating libraries like D3.js and Chart.js to support real-time research analysis and storytelling across large datasets – increasing user engagement",
        "Built a high throughput distributed backend system with Node.js, Python, and PostgreSQL, processing over 1M records/day and seamlessly supporting multiple ingestion pipelines from third-party data sources – monitored using Prometheus + Grafana",
        "Integrated API data caching & optimized client-server communication using Axios, reducing API response time & minimizing redundant calls",
        "Provided technical mentorship to 200+ students across 30+ full-stack capstone projects; project on-time delivery improved from 70% to 92% through structured code reviews, GitHub PR templates, and collaborative debugging sessions"
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "CDX Diagnostics",
      companylogo: require("./assets/images/cdx.jpeg"),
      date: "August 2021 – August 2022",
      desc: "",
      descBullets: [
        "Built a secure work organization platform using React, TypeScript, Java (Spring Boot), Node.js, and Express, supporting 200+ users",
        "Developed 20+ backend features with JWT-based secure APIs and integrated MongoDB for data persistence",
        "Designed CI/CD workflows with GitHub Actions and Docker, automating tests and deployments to Azure AKS",
        "Implemented RBAC using Azure AD and AWS Cognito, reducing unauthorized access incidents",
        "Optimized AWS infrastructure with Lambda, API Gateway, and DynamoDB, improving scalability and backend response time",
        "Improved database performance using PostgreSQL and DynamoDB, enabling faster query and data access",
        "Achieved 90%+ test coverage using Jest and led TDD initiatives to minimize post-release bugs",
        "Participated in architecture design and code reviews, enhancing system stability and scalability"
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Temenos",
      companylogo: require("./assets/images/temenosLogo1.png"),
      date: "May 2019 – August 2021",
      desc: "",
      descBullets: [
        "Developed enterprise-grade banking applications using React, JavaScript, and Spring Boot for 100,000+ global users",
        "Built and secured RESTful APIs using Spring Boot, OAuth 2.0, and JWT authentication for high-value transactional data",
        "Improved UI/UX accessibility through WCAG 2.1 compliance and full internationalization (i18n)",
        "Reduced API latency by refactoring MySQL schemas and optimizing backend logic",
        "Automated CI/CD pipelines using Jenkins, reducing deployment time by over 40%",
        "Resolved frontend bugs via proactive debugging and implemented responsive design across multiple platforms",
        "Implemented modular frontend architecture with React Hooks and Redux, improving codebase reusability"
      ]
    }
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
      image: require("./assets/images/sap.png"),
      projectName: "Consumer Lending Application",
      projectDesc: "",
      footerLink: [
        {
          name: "Artifacts",
          url: "https://drive.google.com/file/d/1SDMvjZOxZEk8z8QzMJ4yAcbea9-J9NEQ/view?usp=sharing"
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
      image: require("./assets/images/cvr.jpeg"),
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
          url: "https://github.com/harshithaxkatakam/to-do-list-mern"
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
          name: "Github",
          url: "https://github.com/harshithaxkatakam/polly-app"
        },
        {
          name: "Artifacts",
          url: "https://polly-app-harshithaxkatakams-projects.vercel.app/"
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
    "Achievements, Certifications, Award Letters, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "Amazon Web Services Certified (Valid until Nov 2028)",
      image: require("./assets/images/aws.jpeg"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/fc7b8c8e-9a33-4778-aabd-fa25b59cf856"
        }
      ]
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      subtitle: "IBM Certified",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/RSSYJGZWOCDB"
        }
      ]
    },
    {
      title: "Developing Front-End Apps with React",
      subtitle: "IBM Certified",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/5W3IRE0J4KUT"
        }
      ]
    },
    {
      title: "Getting Started with Git and GitHub",
      subtitle: "IBM Certified",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/LB67U5QA8FGB"
        }
      ]
    },
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      subtitle: "IBM Certified",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/4FIHDZ8GDVFG"
        }
      ]
    },
    {
      title: "Introduction to Cloud Computing",
      subtitle: "IBM Certified",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/FRVXZ9ZT6D2B"
        }
      ]
    },
    {
      title: "Introduction to Software Engineering",
      subtitle: "IBM Certified",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/49NML8A4MHEG"
        }
      ]
    },
    {
      title: "Project Initiation: Starting a Successful Project",
      subtitle: "Google Certified",
      image: require("./assets/images/googleLogo.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/UGKRJYK9W79A"
        }
      ]
    },
    {
      title: "Foundations of Project Management",
      subtitle: "Google Certified",
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
      title: "Generative AI at SAP",
      subtitle: "SAP Certified",
      image: require("./assets/images/sapLogo.jpg"),
      imageAlt: "SAP Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://open.sap.com/verify/openSAP"
        }
      ]
    },
    {
      title: "Front-End Developer Expert",
      subtitle: "Kony Certified",
      image: require("./assets/images/konyLogo.webp"),
      imageAlt: "Kony Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "KONY DBX Developer - Certified Expert",
      subtitle: "Kony Certified",
      image: require("./assets/images/konyLogo.webp"),
      imageAlt: "Kony Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Kony Certified Developer",
      subtitle: "Kony Certified",
      image: require("./assets/images/konyLogo.webp"),
      imageAlt: "Kony Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Oracle Database 11g: Program with PL/SQL",
      subtitle: "Oracle Certified",
      image: require("./assets/images/oracleLogo.jpg"),
      imageAlt: "Oracle Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Oracle Database 12c: SQL Fundamentals",
      subtitle: "Oracle Certified",
      image: require("./assets/images/oracleLogo.jpg"),
      imageAlt: "Oracle Logo",
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
  url: "https://drive.google.com/file/d/1MKejgUJ1UM1GbScdFy_9QfATH8ie5DdN/view?usp=sharing",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say Hi? My Inbox is open for all.",
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

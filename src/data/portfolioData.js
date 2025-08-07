export const portfolioData = {
  personal: {
    name: "NADUN HASALANKA",
    initials: "NH",
    title: "Software Engineer",
    status: "AVAILABLE FOR HIRE",
    location: "Sri Lanka",
    languages: "English & Sinhala",
    role: "Software Engineer",
    experience: "Intern",
    education: "UNIVERSITY OF COLOMBO School of Computing",
    personality: "Good Boy"
  },
  
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ],
  
  infoItems: [
    { icon: "🌍", text: "Sri Lanka 🇱🇰" },
    // { icon: "🌍", text: "Sri Lanka" },
    { icon: "💬", text: "English & Sinhala" },
    { icon: "💻", text: "Developer" },
    // { icon: "🚀", text: "Intern" },
    { icon: "🎓", text: "UNIVERSITY OF COLOMBO" },
    // { icon: "✨", text: "Good Boy" }
  ],
  
  about: {
    title: "ABOUT ME",
    paragraphs: [
      "I'm a Computer Science student at the University of Colombo School of Computing with a passion for building solutions that automate manual processes and solve real-world problems. I specialize in full-stack development, backend systems, and DevOps, working with Java Spring Boot, React, Docker, and the MERN stack.",
      "When I'm not coding, I enjoy content creation, writing, drawing, and exploring the crypto airdrop world. Currently seeking internship opportunities where I can contribute meaningfully while continuing to grow as a developer."
    ]
  },
  
  projects: {
    title: "FEATURED PROJECTS",
    filters: ["All", "Web", "DevOps"],
    items: [
      // {
      //   id: 1,
      //   title: "ShikshaSoladu.AI",
      //   category: "Web",
      //   description: "A personalized education technology designed for Deaf and Blind learners, making education available to all.",
      //   techStack: ["ReactJs", "TI.js", "Mediapipe", "PeerJs"],
      //   features: [
      //     "Inclusive Learning for Disabled Students – Tailored education tools for blind, deaf, and physically challenged students.",
      //     "Multi-Mode Interaction – Features like text-to-speech, sign language videos, and voice recognition for accessibility.",
      //     "Color & UI Adaptability – Dyslexia-friendly fonts, color blindness modes, and simple UI design."
      //   ],
      //   status: "Completed",
      //   mockupType: "shiksha",
      //   image: "/images/shiksha-project.jpg", // Add your project image here
      //   hasVideo: true,
      //   videoUrl: "/demo-video.mp4", // You can replace this with actual video URL
      //   liveUrl: "https://shiksha-soladu.vercel.app",
      //   githubUrl: "https://github.com/nadunhasalanka/ShikshaSoladu"
      //   // linkedinUrl: "https://linkedin.com/in/nadunhasalanka"
      // },
            {
        id: 3,
        title: "Attorney - Legal Case Handeling System",
        category: "Web",
        description: "A comprehensive legal practice management platform designed for law firms and solo practitioners, featuring case management, client communication, court scheduling, and financial tracking with Sri Lankan legal system integration.",
        techStack: ["React", "Node.js", "Firebase", "Tailwind CSS", "Express.js"],
        features: [
          "Complete Case Management – Comprehensive case profiles with client details, court information, hearing schedules, and document management for efficient legal practice.",
          "Smart Court System Integration – Dynamic court selection based on Sri Lankan judicial hierarchy with automated location mapping and case type categorization.",
          "Advanced Calendar & Scheduling – Intelligent hearing management, task scheduling, and deadline tracking with automated notifications and conflict detection.",
          "Client Communication Hub – Integrated chat system, client portal access, and real-time case updates for enhanced attorney-client relationships.",
          "Financial Management – Fee tracking, payment status monitoring, billing management, and financial reporting for practice profitability.",
        ],
        status: "In Progress",
        image: "/images/attorneyflow-project.jpg", // Add your project image here
        hasVideo: true,
        videoUrl: "/projects/videos/attorney.mp4", // You can replace this with actual video URL
        // liveDemo: "https://attorneyflow-demo.netlify.app", // Optional: if you have a live demo
        // github: "https://github.com/yourusername/attorney-frontend", // Optional: if you want to include GitHub link
        highlights: [
          "Sri Lankan Legal System Compliant",
          "Real-time Case Collaboration",
          "Automated Court Scheduling",
          "Secure Document Management"
        ]
      },
      {
        id: 2,
        title: "AI-Generated Pinterest Pin Creator",
        category: "Web",
        description: "An automated Pinterest content creation tool that combines AI and design automation to generate SEO-optimized pins with dynamic visual elements and bulk processing capabilities.",
        techStack: ["Python", "ChatGPT API", "Google Sheets API", "PIL", "Automation"],
        features: [
          "AI Content Generation – Integrated ChatGPT for smart, SEO-optimized titles and descriptions with built-in keyword optimization for better Pinterest visibility.",
          "Design Automation – Random gradient backgrounds, smart overlay systems, dynamic font combinations, custom shape generation, and automated element positioning with perfect spacing.",
          "Bulk Processing – Google Sheets integration for scalable pin generation, template-based design system, and multi-layer design with background blending effects.",
          "Multiple template designs, automated footer creation, and customizable visual elements for diverse content creation needs."
        ],
        status: "Completed",
        mockupType: "enigma",
        image: "/projects/images/pinterest_pins_generator.jpeg", // Add your project image here
        hasVideo: false,
        liveUrl: "", // No live demo for this project
        githubUrl: "https://github.com/nadunhasalanka/Pinterest_Pin_Generator",
        linkedinUrl: "https://www.linkedin.com/posts/nadun-hasalanka_aiproject-contentautomation-python-activity-7275445324943384576-x7c1"
      },
      {
        id: 5,
        title: "WE4U",
        category: "Web",
        description: "This Platform connects Caregivers, Careseekers & Consultants into a one single place. Where they can commuicate and engage.",
        techStack: ["PHP", "HTML", "MYSQL"],
        features: [
          "Careseekers can Search for Caregivers && Consultants throught this platform.",
          "Two types of sheduling logic for Caregivers and Consultants that handled differently.",
          "Multiple roles that routes differently, and makes different functionalities.",
          "All these without engaging with a single framework or a libry."
        ],
        status: "Completed",
        mockupType: "shiksha",
        image: "/projects/images/we4u.jpeg", // Add your project image here
        hasVideo: false,
        videoUrl: "/demo-video.mp4", // You can replace this with actual video URL
        githubUrl: "https://github.com/AkithJayalath/we4u_web",
        linkedinUrl: "https://www.linkedin.com/posts/nadun-hasalanka_proud-to-share-our-2nd-year-group-project-activity-7332948678732644352-9iL4"
      },
      {
        id: 4,
        category: "WEB",
        title: "Airdrop Journal - Crypto Airdrop Tracking Platform",
        description: "A Web application for cryptocurrency enthusiasts to track, manage, and optimize their airdrop participation.",
        techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Docker"],
        features: [
          "",
          "Comprehensive analytics for airdrop performance.",
          "Intelligent task system with automatic daily task generation for recurring airdrop activities.",
          "Real-time dashboard with statistics showing airdrop counts, daily task completions, and progress tracking.",
          "Responsive design with dark theme.",
        ],
        status: "Completed",
        mockupType: "enigma",
        image: "/projects/images/Airdrop_Journal.png", // Add your project image here
        hasVideo: false,
        // liveUrl: "https://ai-content-studio.vercel.app",
        // githubUrl: "https://github.com/nadunhasalanka/AI-Content-Studio",
        // linkedinUrl: "https://linkedin.com/in/nadunhasalanka"
      },
      {
        id: 4,
        title: "Healthcare Microservices Backend",
        category: "Web",
        description: "A scalable healthcare management system backend built with a microservices architecture, enabling seamless patient, authentication, and API gateway services.",
        techStack: ["Java", "Spring Boot", "Kafka", "Maven", "POSTGRES", "Docker"],
        features: [
          "Microservices Architecture – Decoupled patient and authentication services for improved scalability and maintainability.",
          "API Gateway – Centralized routing, JWT-based authentication, and request filtering using Spring Cloud Gateway.",
          "Secure Authentication – Robust JWT validation and role-based access control for patient and staff data.",
          "Event-Driven Communication – Real-time data synchronization and notifications powered by Apache Kafka.",
          "RESTful APIs – Standardized endpoints for patient management and authentication.",
          "Containerization – Dockerized services for easy deployment and scalability."
        ],
        status: "Completed",
        image: "/projects/images/patient-management-mocroservice.png", // Add your project image here
        hasVideo: false,
        // videoUrl: "/projects/videos/medixflow.mp4", // Optional: add if available
        // liveDemo: "https://medixflow-demo.netlify.app", // Optional: add if available
        // github: "https://github.com/nadunhasalanka/medixflow", // Optional: add if available
        githubUrl: "https://github.com/nadunhasalanka/patient-management-backend"
      },



    ]
  },
  
  skills: {
    title: "SKILLS & TOOLS",
    toolsTitle: "Tools & Technologies",
    toolsDescription: "My comprehensive skill set spans across modern web development, cloud technologies, and programming languages. These tools enable me to build scalable and efficient solutions.",
    technologies: [
      {
        name: "React.js",
        description: "Component-based library for building interactive user interfaces with efficient rendering and state management."
      },
      {
        name: "JavaScript",
        description: "Versatile programming language for both frontend and backend development with modern ES6+ features."
      },
      {
        name: "PHP",
        description: "Server-side scripting language for dynamic web applications and robust backend development."
      },
      {
        name: "HTML",
        description: "Semantic markup language providing the structural foundation for modern web applications."
      },
      {
        name: "Docker",
        description: "Containerization platform for consistent application deployment across different environments."
      },
      {
        name: "AWS",
        description: "Cloud computing platform providing scalable infrastructure and services for modern applications."
      },
      {
        name: "GitHub",
        description: "Version control platform for collaborative development and continuous integration workflows."
      },
      {
        name: "Proficiency with AI",
        description: "Experience with AI tools and machine learning frameworks for intelligent application development."
      },
      {
        name: "C",
        description: "Low-level programming language for system programming and performance-critical applications."
      },
      {
        name: "OOP",
        description: "Object-oriented programming principles for maintainable and scalable software architecture."
      },
      {
        name: "Python",
        description: "High-level programming language for data science, automation, and backend development."
      },
      {
        name: "Kubernetes",
        description: "Container orchestration platform for deploying and managing scalable applications."
      },
      {
        name: "Jenkins",
        description: "Automation server for continuous integration and continuous deployment pipelines."
      },
      {
        name: "Java",
        description: "Enterprise-grade programming language for building robust and platform-independent applications."
      },
      {
        name: "Java Spring Boot",
        description: "Framework for building production-ready Java applications with minimal configuration."
      }
    ]
  },
  
  contact: {
    title: "GET IN TOUCH",
    contactInfo: {
      email: "nadunhasalanka@gmail.com",
      phone: "+94 7070000629",
      location: "UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING"
    },
    form: {
      title: "Send Me a Message",
      fields: {
        name: "Your Name",
        email: "Your Email", 
        message: "Your Message"
      },
      placeholders: {
        name: "What's your name?",
        email: "What's your email?",
        message: "What would you like to say?"
      },
      submitText: "SEND MESSAGE"
    }
  },
  
  footer: {
    brand: "NCODE",
    copyright: "© 2025 Nadun Hasalanka. All rights reserved.",
    // tagline: "Crafted with passion and precision"
  },
  
  socialLinks: [
    {
      platform: "Twitter",
      handle: "@HasalankaNadun",
      url: "https://x.com/HasalankaNadun",
      icon: "𝕏"
    },
    {
      platform: "LinkedIn",
      handle: "Nadun Hasalanka",
      url: "https://www.linkedin.com/in/nadun-hasalanka/",
      icon: "in"
    },
    {
      platform: "Github",
      handle: "nadunhasalanka",
      url: "https://github.com/nadunhasalanka",
      icon: "⚡"
    }
  ]
};

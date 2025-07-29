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
    { icon: "🌍", text: "Sri Lanka" },
    { icon: "💬", text: "English & Sinhala" },
    { icon: "💻", text: "Software Engineer" },
    { icon: "🚀", text: "Intern" },
    { icon: "🎓", text: "UCSC" },
    { icon: "✨", text: "Good Boy" }
  ],
  
  about: {
    title: "ABOUT ME",
    paragraphs: [
      "I'm a passionate designer and developer with 6+ years of experience creating beautiful, functional interfaces. I specialize in React.js, Tailwind CSS, and responsive design principles that deliver exceptional user experiences.",
      "When I'm not coding, I enjoy exploring new technologies, watching anime, and experimenting with creative side projects. I believe in continuous learning and staying ahead of design trends to deliver innovative solutions to my clients."
    ]
  },
  
  projects: {
    title: "FEATURED PROJECTS",
    filters: ["All", "Web", "Design", "AI"],
    items: [
      {
        id: 1,
        title: "ShikshaSoladu.AI",
        category: "Web",
        description: "A personalized education technology designed for Deaf and Blind learners, making education available to all.",
        techStack: ["ReactJs", "TI.js", "Mediapipe", "PeerJs"],
        features: [
          "Inclusive Learning for Disabled Students – Tailored education tools for blind, deaf, and physically challenged students.",
          "Multi-Mode Interaction – Features like text-to-speech, sign language videos, and voice recognition for accessibility.",
          "Color & UI Adaptability – Dyslexia-friendly fonts, color blindness modes, and simple UI design."
        ],
        status: "Completed",
        mockupType: "shiksha",
        hasVideo: true,
        videoUrl: "/demo-video.mp4", // You can replace this with actual video URL
        liveUrl: "https://shiksha-soladu.vercel.app",
        githubUrl: "https://github.com/nadunhasalanka/ShikshaSoladu"
      },
      {
        id: 2,
        title: "Enigma",
        category: "Web",
        description: "A real-time collaborative design platform built for modern teams, with powerful tools and open-source flexibility.",
        techStack: ["Next.js", "TI.js", "TypeScript", "CodeBlocks"],
        features: [
          "Real-Time Collaborative Design – Enables seamless teamwork on UI/UX designs with live multi-user editing and instant updates.",
          "Advanced Design Tools – Professional-grade vector editing, prototyping, and design system management capabilities."
        ],
        status: "Completed",
        mockupType: "enigma",
        hasVideo: false,
        liveUrl: "https://enigma-design.vercel.app",
        githubUrl: "https://github.com/nadunhasalanka/Enigma"
      },
      {
        id: 3,
        title: "TaskFlow Pro",
        category: "Web",
        description: "A comprehensive project management platform with real-time collaboration, task tracking, and team productivity analytics.",
        techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
        features: [
          "Real-Time Task Management – Live updates, drag-and-drop interface, and instant collaboration across team members.",
          "Advanced Analytics Dashboard – Detailed productivity metrics, time tracking, and project progress visualization.",
          "Team Collaboration Tools – Chat integration, file sharing, and notification system for seamless teamwork."
        ],
        status: "In Progress",
        mockupType: "shiksha",
        hasVideo: false,
        liveUrl: "https://taskflow-pro.vercel.app",
        githubUrl: "https://github.com/nadunhasalanka/TaskFlow-Pro"
      },
      {
        id: 4,
        title: "AirDrop Journal",
        category: "WEB",
        description: "An intelligent content creation platform powered by AI for generating blog posts, social media content, and marketing materials.",
        techStack: ["React", "Node", "Docker", "MongoDB"],
        features: [
          "AI-Powered Content Generation – Create high-quality blog posts, social media content, and marketing copy using advanced AI models.",
          "Multi-Platform Publishing – Direct integration with social media platforms and content management systems.",
          "Content Optimization – SEO suggestions, readability analysis, and performance tracking for better engagement."
        ],
        status: "Completed",
        mockupType: "enigma",
        hasVideo: false,
        liveUrl: "https://ai-content-studio.vercel.app",
        githubUrl: "https://github.com/nadunhasalanka/AI-Content-Studio"
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
        hasVideo: false,
        videoUrl: "/demo-video.mp4", // You can replace this with actual video URL
        liveUrl: "https://shiksha-soladu.vercel.app",
        githubUrl: "https://github.com/nadunhasalanka/ShikshaSoladu"
      }
    ]
  },
  
  skills: {
    title: "SKILLS & EXPERTISE",
    toolsTitle: "Tools & Technologies",
    toolsDescription: "My toolkit is constantly expanding as I explore new technologies that enhance user experiences and streamline development workflows. These are my daily companions in crafting digital solutions.",
    technologies: [
      {
        name: "TypeScript",
        logo: "TS",
        logoStyle: "typescript-logo",
        description: "Commonly employed across all of my projects, it provides optional static typing and modern features, enhancing robust development practices."
      },
      {
        name: "JavaScript & jQuery",
        logo: "JS",
        logoStyle: "javascript-logo",
        description: "JavaScript, celebrated for its optional static typing and contemporary features, stands as a cornerstone in virtually all of my projects, ensuring robust development practices and fostering innovation."
      },
      {
        name: "React, Zustand",
        logo: "⚛",
        logoStyle: "react-logo",
        description: "A cutting-edge JavaScript library for front-end development, offering a component-based approach for efficient rendering and dynamic user interfaces."
      },
      {
        name: "Next",
        logo: "N",
        logoStyle: "nextjs-logo",
        description: "React simplifies front-end development with server-side rendering, automatic code splitting, and SEO-friendly features, empowering developers to create dynamic and responsive web applications with ease."
      },
      {
        name: "PHP, Twig",
        logo: "PHP",
        logoStyle: "php-logo",
        description: "A versatile scripting language powering dynamic web development with its server-side capabilities, database integration, and extensive library support."
      },
      {
        name: "HTML",
        logo: "HTML",
        logoStyle: "html-logo",
        description: "The cornerstone of modern web development, it furnishes the essential structure and semantics necessary for crafting interactive and accessible websites that cater to diverse user needs and preferences."
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
      handle: "@NadunHasalanka",
      url: "https://twitter.com/NadunHasalanka",
      icon: "𝕏"
    },
    {
      platform: "LinkedIn",
      handle: "@nadunhasalanka",
      url: "https://linkedin.com/in/nadunhasalanka",
      icon: "in"
    },
    {
      platform: "Github",
      handle: "@nadunhasalanka",
      url: "https://github.com/nadunhasalanka",
      icon: "⚡"
    }
  ]
};

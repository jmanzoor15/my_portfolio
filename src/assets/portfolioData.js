const portfolioData = {
  profile: {
    name: "Junaid Mir",
    title: "Frontend Developer",
    location: "UAE",
    profileImage: "assets/images/junaid_img.peg"
  },
  about: {
    brief: "**I'm Junaid, frontend developer based in UAE**",
    detailed1: "I'm Junaid Mir, a passionate Frontend Developer with over a 5+ of experience in building responsive and user-friendly applications. Skilled in React, Next, React Native, Vue, Nuxt, and Wordpress, I've delivered multiple live projects across web platforms.",
    detailed2: "**I am a passionate Frontend Developer with over a 5+ of professional experience. I've worked on several client-based and office projects using technologies like React, Vue, and Wordpress.**\n**My dedication and curiosity drive me to keep learning and deliver high-quality, responsive, and engaging user interfaces.**"
  },
  skills: [
    { name: "React JS", percentage: 85, icon: "flutter" },
    { name: "Vue JS", percentage: 90, icon: "react" },
    { name: "SQL", percentage: 75, icon: "database" },
    { name: "React Native", percentage: 80, icon: "react" },
    { name: "Next", percentage: 80, icon: "swift" },
    { name: "Nuxt", percentage: 85, icon: "android" },
    { name: "Wordpress", percentage: 82, icon: "android" },
    { name: "Devops", percentage: 62, icon: "android" }
  ],
  stats: {
    experience: { value: "5+", label: "Years Experience", icon: "experience" },
    projectsCompleted: { value: "15+", label: "Projects Completed", icon: "projects" },
    happyClients: { value: "10+", label: "Happy Clients", icon: "clients" }
  },
  services: [
    {
      id: 1,
      title: "Web Development",
      description: "I specialize in Building responsive and modern web applications for ensuring seamless experiences across devices and browsers. I build Single Page Applications (SPAs) using frameworks like React and Vue, and also work with modern SSR frameworks such as Next.js and Nuxt.js for enhanced performance and SEO. I focus on pixel-perfect UI implementation based on designs from Figma, Adobe XD, or Sketch. My services include cross-browser compatibility, performance optimization with techniques like lazy loading, and front-end testing using tools such as Jest and Cypress. Additionally, I have experience integrating Redux for advanced state management and developing or customizing WordPress themes to meet specific business needs.",
      icon: "web",
      technologies: ["React JS", "JavaScript", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      id: 2,
      title: "Deployment & Server Support",
      description: "I also assist in uploading and hosting front-end builds across various platforms. This includes deploying projects to shared hosting environments using cPanel or FTP, as well as modern cloud platforms like Vercel, Netlify, Firebase, and AWS (such as S3 for static hosting or EC2 for full control). I'm experienced in setting up and managing deployments on VPS or custom servers using SSH, configuring tools like PM2 for Node.js applications, and setting up NGINX for reverse proxy and load balancing. I handle domain configurations, SSL certificate installations, and server environment variables. Additionally, I can set up Git-based CI/CD workflows for automated deployments and help troubleshoot server or build-related issues to ensure smooth and reliable project delivery.",
      icon: "mobile",
      technologies: ["Flutter", "React Native", "Swift", "Android", "Cross-platform"]
    },
    {
      id: 3,
      title: "UI/UX Design Implementation",
      description: "Designing intuitive and user-friendly interfaces that provide excellent user experience.",
      icon: "design",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    }
  ],
  latestWork: [
    {
      id: 1,
      name: "E-Commerce Mobile App",
      description: "A fully functional e-commerce mobile application built with Flutter, featuring product browsing, cart management, and secure payment integration.",
      image: "assets/images/projects/ecommerce-app.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "Payment Gateway"],
      category: "Mobile App",
      status: "Completed",
      link: "https://relaisthalasso.com/fr/"
    },
    {
      id: 2,
      name: "Restaurant Management System",
      description: "A comprehensive web application for restaurant management with order tracking, inventory management, and customer relationship features built with React JS.",
      image: "assets/images/projects/restaurant-system.jpg",
      technologies: ["React JS", "Node.js", "MongoDB", "Express"],
      category: "Web Application",
      status: "Completed",
      link: "https://casakeyre.com/"
    },
    {
      id: 3,
      name: "Task Management App",
      description: "A productivity mobile app developed with React Native, allowing users to create, manage, and track their daily tasks with seamless synchronization.",
      image: "assets/images/projects/task-app.jpg",
      technologies: ["React Native", "Redux", "SQLite", "Push Notifications"],
      category: "Mobile App",
      status: "Completed",
      link: "https://keylease.ae/"
    },
    {
      id: 4,
      name: "Real Estate Platform",
      description: "A modern real estate web platform built with React JS, featuring property listings, advanced search filters, and virtual tour capabilities.",
      image: "assets/images/projects/real-estate.jpg",
      technologies: ["React JS", "TypeScript", "Google Maps API", "Firebase"],
      category: "Web Application",
      status: "In Progress",
      link: "https://deal-eco.fr/"

    },
    {
      id: 5,
      name: "Fitness Tracking App",
      description: "A cross-platform fitness application developed with Flutter, including workout tracking, progress monitoring, and social features for fitness enthusiasts.",
      image: "assets/images/projects/fitness-app.jpg",
      technologies: ["Flutter", "Dart", "Health APIs", "Cloud Storage"],
      category: "Mobile App",
      status: "Completed",
      link: "https://www.aiscore.com/"

    },
     {
      id: 6,
      name: "Fitness Tracking App",
      description: "A cross-platform fitness application developed with Flutter, including workout tracking, progress monitoring, and social features for fitness enthusiasts.",
      image: "assets/images/projects/fitness-app.jpg",
      technologies: ["Flutter", "Dart", "Health APIs", "Cloud Storage"],
      category: "Mobile App",
      status: "Completed",
      link: "https://skoda-pilot.fr/connexion?redirect=/"

    },
     {
      id: 7,
      name: "Fitness Tracking App",
      description: "A cross-platform fitness application developed with Flutter, including workout tracking, progress monitoring, and social features for fitness enthusiasts.",
      image: "assets/images/projects/fitness-app.jpg",
      technologies: ["Flutter", "Dart", "Health APIs", "Cloud Storage"],
      category: "Mobile App",
      status: "Completed",
      link: "https://audi-pilot.fr/connexion?redirect=/"

    }
  ],
  contact: {
    email: "pranav.ps@example.com",
    phone: "+971-xxx-xxxx",
    location: "UAE",
    socialLinks: {
      linkedin: "https://linkedin.com/in/pranav-ps",
      github: "https://github.com/pranav-ps",
      twitter: "https://twitter.com/pranav_ps"
    }
  }
  
};

export default portfolioData;

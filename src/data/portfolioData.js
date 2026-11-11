/**
 * Portfolio Data Configuration
 * Centralized data source for the entire portfolio.
 */

export const personalInfo = {
  name: "Nitin",
  role: "B.E. Computer Science Student",
  location: "India",
  email: "nitinydv898989@gmail.com",
  availability: {
    status: "Open to internship opportunities",
    isOpen: true,
  },
  resumeUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/Nitin571",
    linkedin: "https://www.linkedin.com/in/nitin-yadav-b9289832a/",
    leetcode: "https://leetcode.com",
    // codeforces: "https://codeforces.com",
    email: "mailto:nitinydv898989@gmail.com",
  },
};

export const heroData = {
  greeting: "Hi, I'm Nitin.",
  headline: "Java developer building web applications and exploring AI.",
  description:
    "I'm pursuing my B.E. in Computer Science. I focus on building web applications with Java on the backend and React on the frontend, while exploring modern AI tools and solving problems on LeetCode.",
  primaryCtaText: "View Projects",
  secondaryCtaText: "Resume",
};

export const aboutData = {
  heading: "About Me",
  paragraphs: [
    "I'm an undergraduate student pursuing my B.E. in Computer Science, focusing on Java backend development, modern frontend with React, and exploring AI tools.",
    "I spend my time building full-stack web applications, practicing algorithmic problem-solving on LeetCode, and learning modern developer technologies.",
  ],
  highlights: [
    {
      id: "backend",
      title: "Core Backend",
      desc: "REST APIs, Spring Boot, Java & MySQL databases.",
    },
    {
      id: "problemsolving",
      title: "Problem Solving",
      desc: "Regular DSA & algorithmic problem solving on LeetCode.",
    },
    {
      id: "frontend",
      title: "Frontend Craft",
      desc: "Clean, responsive user interfaces with React & modern CSS.",
    },
  ],
  quickInfo: [
    { label: "Degree", value: "B.E. Computer Science (Pursuing)" },
    { label: "Primary Stack", value: "Java, Spring Boot, React, MySQL" },
    { label: "Interests", value: "Web Apps, Problem Solving & AI" },
    { label: "Status", value: "Open to Internships" },
  ],
};

export const skillsData = {
  heading: "Skills",
  description: "Technologies and tools I work with to build software.",
  skillGroups: [
    {
      category: "Languages",
      skills: [
        { name: "Java", icon: "JavaIcon" },
        { name: "JavaScript", icon: "JavaScriptIcon" },
        { name: "Python", icon: "PythonIcon" },
        { name: "C", icon: "CIcon" },
      ],
    },
    {
      category: "Problem Solving",
      skills: [
        { name: "DSA (Data Structures & Algorithms)", icon: "DsaIcon" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Spring Boot", icon: "SpringIcon" },
        { name: "REST APIs", icon: "ApiIcon" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", icon: "ReactIcon" },
        { name: "HTML5", icon: "HtmlIcon" },
        { name: "CSS3", icon: "CssIcon" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: "MySqlIcon" },
        { name: "MongoDB", icon: "MongoDbIcon" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: "GitIcon" },
        { name: "GitHub", icon: "GitHubIcon" },
        { name: "VS Code", icon: "VsCodeIcon" },
        { name: "Postman", icon: "PostmanIcon" },
      ],
    },
  ],
};

export const projectsData = {
  heading: "Projects",
  description: "Selected applications and web projects.",
  projects: [],
};

export const contactData = {
  heading: "Get In Touch",
  description: "Have an internship opportunity, a project to collaborate on, or just want to connect? Feel free to reach out.",
  email: "nitinydv898989@gmail.com",
  location: "India • Open to Remote & On-site",
  formspreeEndpoint: "https://formspree.io/f/mnpdabzb",
};

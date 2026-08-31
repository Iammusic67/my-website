/* ============================================================
   SITE CONTENT — Chris Kariuki Mungai
   ------------------------------------------------------------
   Strong academic portfolio for global college applications.
   Everything on the site is driven by this file.
   ============================================================ */

const SITE_CONTENT = {

  // ---------- IDENTITY ----------
  name: "Chris Kariuki Mungai",
  role: "Aspiring Computer Scientist",
  location: "Nairobi, Kenya",

  tagline:
    "Self-taught developer building technology that expands access to education and financial inclusion across Africa.",

  // ---------- HERO ----------
  hero: {
    eyebrow: "Self-taught developer · Computer Science · Nairobi, Kenya",
    headline:
      "Building technology that expands access to education and financial inclusion.",
    subtext:
      "I taught myself to code because the education system I grew up in didn't teach what I needed to know. " +
      "That same frustration — watching talent go unlocked because of broken systems — is what drives me to build " +
      "technology for education and financial access across Africa.",
    primaryCta: { label: "See my work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },

  // ---------- ABOUT ----------
  about: {
    heading: "About me",
    paragraphs: [
      "I'm Chris Kariuki Mungai, an aspiring Computer Science student and self-taught developer from Nairobi, Kenya. " +
        "I didn't learn to code through a bootcamp or a university course — I taught myself, one problem at a time, " +
        "because the formal education I had access to wasn't preparing me for the world I wanted to build in.",

      "I graduated from Nyandarua High School in November 2025 with an overall grade of A- (80 points), " +
        "ranking in the top 0.2% out of 996,563 students who sat for the Kenya Certificate of Secondary Education " +
        "national examination. That result proved something I'd always believed: that determination and self-direction " +
        "matter more than privilege. Now I'm channelling that same discipline into Computer Science.",

      "A pivotal moment came during a six-month attachment at Equity Bank, one of East Africa's largest financial institutions. " +
        "I saw firsthand how financial systems work — and how millions of people are still excluded from them. " +
        "I watched bank employees explain basic concepts to customers who had never had a bank account. " +
        "That experience crystallized something I'd felt for years: the systems that are supposed to lift people up " +
        "are often the ones leaving them behind.",

      "That realization, combined with my own journey through an imperfect education system, gave me a clear mission: " +
        "build technology that makes quality education and financial tools accessible to everyone, regardless of where they were born " +
        "or what schools they could afford. I'm currently building the technical skills to make that vision real — " +
        "through self-directed study, project-based learning, and formal certifications in Python, JavaScript, and applied AI.",

      "I'm applying to study Computer Science because I believe rigorous academic training, combined with the " +
        "hands-on experience I've already built, will let me move from building prototypes to building systems " +
        "that actually scale.",
    ],
  },

  // ---------- EDUCATION ----------
  education: {
    heading: "Education",
    entries: [
      {
        institution: "Nyandarua High School",
        location: "Nyandarua County, Kenya",
        period: "Graduated November 2025",
        qualification: "Kenya Certificate of Secondary Education (KCSE)",
        details: [
          "Overall grade: A- (80 points)",
          "Ranked in the top 0.2% out of 996,563 candidates nationally",
          "Demonstrated consistent academic excellence and self-directed discipline",
        ],
      },
    ],
    aspiration: "Aspiring to pursue a degree in Computer Science",
  },

  // ---------- JOURNEY / TIMELINE ----------
  journey: [
    {
      date: "2022 – Present",
      title: "Self-directed learning",
      description:
        "Built a foundation in Python, JavaScript, HTML/CSS, and Git through self-study — " +
        "completing exercises, reading documentation, and building projects from scratch. " +
        "Developed a disciplined learning routine that mirrors the rigor of a formal CS curriculum.",
    },
    {
      date: "6 months",
      title: "Attachment at Equity Bank",
      description:
        "Gained first-hand exposure to financial systems, operations, and the real-world gaps in financial inclusion. " +
        "Observed how technology could bridge the gap between institutions and underserved communities. " +
        "This experience directly informed my long-term goal of building fintech for inclusion.",
    },
    {
      date: "August 2026",
      title: "freeCodeCamp certifications — Python & JavaScript",
      description:
        "Earned verified certifications in Python and JavaScript from freeCodeCamp, " +
        "demonstrating proficiency in data structures, algorithms, and web development fundamentals.",
    },
    {
      date: "2026",
      title: "Coursera — Generative AI specializations",
      description:
        "Completed multiple Coursera certifications in Generative AI, building applied skills in " +
        "prompt engineering, API integration, and AI-assisted software development.",
    },
    {
      date: "2026 – Present",
      title: "Stemlift Africa — flagship project",
      description:
        "Architected and built a full-stack STEM learning platform (Node.js, SQLite, Anthropic AI) " +
        "used by teachers and students in Kenya. Features AI-generated quizzes, automated grading, " +
        "personalized study tips, and a mission-based learning journey system.",
    },
  ],

  // ---------- SKILLS ----------
  skills: {
    heading: "Technical skills",
    tags: [
      "Python",
      "JavaScript (ES6+)",
      "Node.js & Express",
      "HTML5 & CSS3",
      "SQL / SQLite",
      "REST APIs",
      "Git & GitHub",
      "Generative AI / Prompt Engineering",
      "Responsive Web Design",
      "Problem Solving",
      "Self-Directed Learning",
      "Technical Writing",
    ],
  },

  // ---------- CERTIFICATES ----------
  certificates: [
    {
      title: "Scientific Computing with Python",
      issuer: "freeCodeCamp",
      date: "August 6, 2026",
      file: "https://www.freecodecamp.org/certification/fcc-44dc3f3a-688c-4478-ba74-dbf5f87de032/python-v9",
      screenshot: "assets/certificates/freecodecamp-python.png",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "August 2026",
      file: "",
      screenshot: "",
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "Coursera (DeepLearning.AI)",
      date: "2026",
      file: "",
      screenshot: "",
    },
    {
      title: "Prompt Engineering for Developers",
      issuer: "Coursera (DeepLearning.AI)",
      date: "2026",
      file: "",
      screenshot: "",
    },
  ],

  // ---------- PROJECTS ----------
  projects: [
    {
      name: "Stemlift Africa",
      description:
        "A full-stack STEM learning platform built to expand access to quality education in Kenya. " +
        "Teachers can generate AI-powered quizzes, assign assessments, and track student performance. " +
        "Students take quizzes, follow a mission-based learning journey, and receive personalized " +
        "AI study tips. Built with Node.js, Express, SQLite, and the Anthropic API. " +
        "Currently in active use with teacher and student accounts.",
      tags: ["Node.js", "Express", "SQLite", "Anthropic AI", "Full-Stack", "Education"],
      repoUrl: "https://github.com/Iammusic67/stemlift-africa",
      demoUrl: "https://stemlift-africa.onrender.com",
    },
    {
      name: "AI Quiz Engine",
      description:
        "The AI-powered assessment engine inside Stemlift Africa. Generates multiple-choice " +
        "quizzes from a subject and topic, evaluates student answers against accepted alternatives, " +
        "and produces per-question feedback. Falls back to heuristic grading when the AI API is unavailable.",
      tags: ["JavaScript", "AI Integration", "API Design", "Evaluation Systems"],
      repoUrl: "https://github.com/Iammusic67/stemlift-africa",
      demoUrl: "",
    },
    {
      name: "Academic Portfolio Website",
      description:
        "This website — a fully responsive, accessibility-first portfolio built with semantic HTML, " +
        "custom CSS design tokens, and vanilla JavaScript. Content is data-driven: all text lives " +
        "in a single JS file, making updates trivial. Features scroll-reveal animations, a mobile " +
        "hamburger nav, and an animated SVG hero graphic.",
      tags: ["HTML5", "CSS3", "JavaScript", "Accessibility", "Responsive Design"],
      repoUrl: "https://github.com/Iammusic67/my-website",
      demoUrl: "https://iammusic67.github.io/my-website",
    },
  ],

  // ---------- CONTACT ----------
  contact: {
    heading: "Let's connect",
    subtext:
      "I'm always open to conversations about education technology, " +
      "computer science, or opportunities to learn and build together.",
    email: "ckaris003@gmail.com",
    github: "https://github.com/Iammusic67",
    linkedin: "",
    phone: "+254716476119",
  },

  // ---------- FOOTER ----------
  footer: {
    note: "Designed and built by Chris Kariuki Mungai.",
  },
};

import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileDown } from "lucide-react";

export const DATA = {
  name: "Aayush Bindal",
  initials: "AB",
  url: "https://www.google.com/maps/place/india",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "a full stack developer and AI/ML enthusiast. Passionate about solving real-world problems and contributing to open-source.",
  summary:
    "I'm a full stack developer and a Computer Engineering student at Thapar University. I specialize in building scalable web and mobile applications using modern technologies like React, Next.js, and Node.js. Recently, I've been deeply exploring Artificial Intelligence and Deep Learning, working with PyTorch and LLMs. I'm passionate about open-source, building real-world tools, and participating in hackathons. Whether it's a deep learning pipeline, a cross-platform mobile app, or a high-traffic web utility, I love building things that make an impact.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "C++",
    "C",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "OpenCV",
    "Docker",
    "Git",
    "AWS",
    "GCP"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/RESUME.pdf", icon: FileDown, label: "Resume" },
  ],
  contact: {
    email: "aayushbindal01@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aayush-Bindal",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aayush-bindal/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Aayush_00_",
        icon: Icons.x,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:aayushbindal01@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Team Oorja (GKDC)",
      href: "https://www.linkedin.com/company/team-oorja/posts/?feedView=all",
      badges: [],
      location: "Patiala, India",
      title: "DAQ Department Engineer",
      logoUrl: "/team_oorja_logo.jpg",
      start: "Nov 2024",
      end: "Present",
      description:
        "Engineered multi-layer PCBs for sensor signal conditioning and automotive-grade noise reduction. Developed digital twin and data acquisition system using Simulink and C++ monitoring 10+ parameters at 100Hz. Integrated Python telemetry dashboard with LoRa RF pipeline reducing latency by 35% enabling sub-10ms performance updates.",
    },
    {
      company: "Enactus Thapar",
      href: "https://www.linkedin.com/company/enactus-tiet/posts/?feedView=all",
      badges: [],
      location: "Patiala, India",
      title: "Head of Research & Development",
      logoUrl: "/enactus.png",
      start: "Sept 2024",
      end: "Present",
      description:
        "Built and deployed the organization's official web presence using React.js and SEO, improving digital traffic by 40%. Leading R&D for Project Aarohan converting PET bottle waste into high-quality 3D printer filament achieving 95% prototype diameter consistency.",
    },
    {
      company: "GSsoc",
      href: "https://www.linkedin.com/company/girlscriptsoc/posts/?feedView=all",
      badges: [],
      location: "Remote",
      title: "Contributor & Campus Ambassador",
      logoUrl: "/girlscriptsoc_logo.jpg",
      start: "Oct 2024",
      end: "Dec 2025",
      description:
        "",
    },
  ],
  education: [
    {
      school: "Thapar Institute of Engineering and Technology",
      href: "https://www.thapar.edu/",
      degree: "BE, Computer Engineering (CGPA: 8.88/10)",
      logoUrl: "/Tiet.png",
      start: "2024",
      end: "2028",
    },
    {
      school: "Alwar Public School",
      href: "https://www.alwarpublicschool.com/",
      degree: "Schooling",
      logoUrl: "/alwarpublicschool.jpeg",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "Atlas – AI Digital Memory Scrapbook",
      href: "https://github.com/Aayush-Bindal/atlas",
      dates: "Nov 2025",
      active: true,
      description:
        "Hackathon-winning web application transforming image collections into narrated digital diaries. Implemented client-side canvas image compression achieving 80% smaller payload sizes, and optimized prompt engineering reducing token usage by 25%.",
      technologies: [
        "Next.js",
        "Context RAG",
        "OpenRouter",
        "TypeScript"
      ],
      links: [
        {
          type: "Website",
          href: "atlas-bios.vercel.app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/atlas.mp4",
    },
    {
      title: "SimONOE – ONOE Impact Simulator",
      href: "https://sim-onoe.vercel.app/",
      dates: "January 2026",
      active: true,
      description:
        "Built the Bharat Governance Simulator to provide real-time impact analysis for the One Nation One Election (ONOE) initiative. It leverages HLC and Law Commission parameters to generate simulation dashboards, analyze mid-term risks, and run Monte Carlo simulations for governance impact.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://sim-onoe.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/simonoe.png",
      video: "",
    },
    {
      title: "NutriAI – AI Nutrition Tracker",
      href: "https://github.com/Aayush-Bindal/NutriAI",
      dates: "Feb 2026 - April 2026",
      active: true,
      description:
        "Shipped cross-platform nutrition tracker supporting natural language meal logging. Implemented LLM-powered parsing pipeline with automatic fallback reducing meal logging time by 85%. Designed animated calorie rings and architected a fully local data layer with secure API storage.",
      technologies: [
        "React Native",
        "Expo",
        "Gemini API",
        "JavaScript"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aayush-Bindal/NutriAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/NutriAI.jpg",
      video: "",
    },
    // {
    //   title: "EchoVault",
    //   href: "https://github.com/Aayush-Bindal/EchoVault",
    //   dates: "Apr 2025",
    //   active: true,
    //   description:
    //     "EchoVault is a futuristic voice-based journaling web app.Instead of writing manually, you simply talk — like you're chatting with a friend.Our AI analyzes your emotions, detects your mood, and auto-generates journal entries capturing your real feelings.",
    //   technologies: [
    //     "Python",
    //     "Django",
    //     "ReactJs",
    //     "NextJS",
    //     "Hugging Face Sentiment Models",
    //     "Speech to Text (whisper)",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://github.com/Aayush-Bindal/EchoVault",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/EchoVault.png",
    //   video:
    //     "",
    // },
    {
      title: "TimeTable (Contribution)",
      href: "https://github.com/Aayush-Bindal/TimeTable",
      dates: "March 2025",
      active: true,
      description:
        "A calendar website that converts Excel sheets into a clean React-based timetable. I fixed bugs and implemented a feature to import events to users' calendars. This feature was appreciated by seniors and proved genuinely useful, which gave me the confidence and motivation to keep contributing to real-world projects.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJs",
        "Ical",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aayush-Bindal/TimeTable",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/video.mp4",
    },
    {
      title: "MalariaNet",
      href: "https://github.com/Aayush-Bindal/Malaria-Detection",
      dates: "April 2026",
      active: true,
      description:
        "End-to-end deep learning project classifying red blood cell microscopy images as Parasitized or Uninfected. Uses a fine-tuned MobileNetV2 CNN achieving ~95% accuracy. Features a production-ready FastAPI backend with Grad-CAM visual explanations.",
      technologies: [
        "PyTorch",
        "FastAPI",
        "Python",
        "MobileNetV2",
        "Grad-CAM"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aayush-Bindal/Malaria-Detection",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/malaria.png",
      video: "",
    },
        {
      title: "CS50 Finance",
      href: "https://github.com/Aayush-Bindal/CS50-finance",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Developed a full-stack web application simulating real-time stock trading using Python Flask framework. The application enables users to register accounts, look up current stock prices via API integration, buy and sell stocks with virtual currency, and maintain transaction history.",
      technologies: [
        "Python",
        "Flask",
        "Sqlite",
        "Jinja",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aayush-Bindal/CS50-finance",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "GKDC Season 13",
      dates: "Feb 2026",
      location: "Coimbatore, India",
      description:
        "2nd Place Overall & 1st in Innovation. Vice Champions nationally for advanced telemetry and electronic integration in electric go-kart competition. Secured additional 2nd place finishes in Design Evaluation and Endurance Race.",
      image: "/GKDC.png",
      links: [],
    },
    {
      title: "SabkaAI (Thapar x University of Queensland)",
      dates: "Jan 2026",
      location: "Patiala, India",
      description:
        "Runner Up (2nd Place). Built JanMitra, a dialect-aware AI assistant for rural citizen accessibility.",
      image: "/UQL.svg",
      links: [],
    },
    {
      title: "Hack4Delhi",
      dates: "Jan 2026",
      location: "Delhi, India",
      description:
        "Top 50 Finalist. Ranked among the top 50 teams out of 2000+ participants for scalable urban infrastructure simulations.",
      image: "/Hack4.png",
      links: [],
    },
    {
      title: "IEEE BIOS Hackathon SafeMode Track",
      dates: "Nov 2025",
      location: "Patiala, India",
      description:
        "Winner. Built ATLAS, an AI scrapbook platform recognized for high-performance UI rendering.",
      image: "/IEEE.png",
      links: [],
    },
    {
      title: "HackSpire",
      dates: "April 2025",
      location: "",
      description:
        "Developed a web application with AI model integration as part of a 4-person team at the HackSpire hackathon. The project was built overnight and recognized as one of the top projects at the event.",
      image:
        "/Hackspire.webp",
      links: [
        {
          title: "",
          icon: <Icons.globe className="size-3" />,
          href: "https://www.hackspire.in/",
        },
      ],
    },
    {
      title: "HackOwasp 7.0",
      dates: "April 2025",
      location: "",
      description:
        "At HackOWASP, I collaborated within a team of five to develop an anonymous product/service review website leveraging blockchain technology. This web3 application aimed to combat fake reviews by ensuring anonymity and data integrity. My contributions included learning and implementing Motoko for smart contract development and integrating sentiment analysis to provide insightful review summaries. This experience provided valuable insights into blockchain development and AI-driven content analysis within a decentralized environment.",
      image:
        "/lego.png",
      links: [
        {
          title: "",
          icon: <Icons.globe className="size-3" />,
          href: "https://hack.owasptiet.com/",
        },
      ],
    },
    {
      title: "Robothon",
      dates: "February 2025",
      location: "",
      description:
        "At Robothon, my first robotics hackathon, our team built a small robot designed to navigate fire scenarios and assist firefighters. This project marked my first experience using Arduino and various sensors in a hackathon setting. The robot was engineered to autonomously navigate a simulated fire environment, demonstrating a practical application of robotics to aid in emergency response. This experience provided valuable hands-on learning in embedded systems, sensor integration, and robotic design.",
      image:
        "/Robothon.jpeg",
      links: [
        {
          title: "",
          icon: null,
          href: "",
        },
      ],
    },
    {
      title: "SatHack",
      dates: "November 2024",
      location: "",
      description:
        "At Sathack, my first hackathon, I developed a web application designed as a support platform for incoming college students. The core feature was a chatbot capable of answering frequently asked questions about various aspects of college life, including class locations, subjects, societies, and professors. This project marked my initial foray into hackathons, providing a practical application of web development skills to address a common challenge faced by new students, enhancing their onboarding experience.",
      image:
        "/sat.jpeg",
      links: [
        {
          title: "",
          icon: null,
          href: "",
        },
      ],
    },
    {
      title: "SynergySpark",
      dates: "August 2024",
      location: "",
      description:
        "Participated in first competitive ideathon focused on brand innovation and product development. Collaborated with team to merge two distinct brands and conceptualize an entirely new product offering. Gained experience in creative problem-solving, rapid ideation, market analysis, and presentation skills under time constraints.",
      image:
        "/SynergySpark.webp",
      links: [
        {
          title: "",
          icon: null,
          href: "",
        },
      ],
    },
  ],
} as const;

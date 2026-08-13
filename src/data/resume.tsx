import { Icons } from "@/components/icons";
import { HomeIcon, FileDown } from "lucide-react";

export const DATA = {
  name: "Aayush Bindal",
  initials: "AB",
  url: "https://aayushbindal.me/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "a CS student who ships things people actually use.",
  metaDescription: "CS Engineering student at Thapar University building full-stack apps, voice AI agents, edge AI robotics, and embedded telemetry systems. Qualcomm Snapdragon Multiverse AI winner. Shipped tools used by 7000+ students.",
  summary:
    "I'm a CS student at Thapar Institute and a builder first. I've shipped a timetable tool used by 7000+ students, a nutrition tracker serving 50+ active users, JanMitra for rural citizen access, and DragVerse, an Edge AI robotics platform that won the Qualcomm Snapdragon Multiverse AI Hackathon. Outside of software, I'm a DAQ engineer for our national go-kart team, building real-time vehicle telemetry with Simulink/C++, LoRa RF pipelines, and 100Hz sensor data. Whether it's a React Native app, a voice AI agent, or embedded hardware, I care about shipping things that work in the real world, not just in a repo.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "C++",
    "C",
    "Java",
    "R",
    "React",
    "Next.js",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "Redis",
    "WebSockets",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Matplotlib",
    "OpenCV",
    "MATLAB",
    "Simulink",
    "Embedded Systems",
    "Teensy/ESP32",
    "Arduino",
    "IoT",
    "LiveKit",
    "WebRTC",
    "Sarvam AI",
    "RAG",
    "Unity",
    "Gaussian Splatting",
    "Reinforcement Learning",
    "Qualcomm AI Hub",
    "Docker",
    "Linux",
    "Git",
    "AWS",
    "GCP",
    "CI/CD"
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
      Email: {
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
        "Led DAQ integration for GKDC Season 13, validating vehicle electronics and telemetry systems. Programmed a digital twin and DAQ framework using Simulink and C++ (Teensy/ESP32) to monitor 10+ critical parameters at 100Hz. Designed multi-layer PCBs for sensor signal conditioning and automotive-grade noise reduction. Orchestrated a Python telemetry dashboard with a LoRa RF pipeline, reducing data latency by 35% and enabling sub-10ms performance updates.",
    },
    {
      company: "Enactus Thapar",
      href: "https://www.enactustiet.in/",
      badges: [],
      location: "Patiala, India",
      title: "Head of Research & Development",
      logoUrl: "/enactus.png",
      start: "Sept 2024",
      end: "Present",
      description:
        "Spearheaded R&D for Project Aarohan, converting PET bottle waste into premium 3D printer filament and achieving a 95% prototype diameter consistency rate. Architected and deployed the organization's official web platform using React.js and SEO, boosting digital traffic by over 40%.",
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
      degree: "BE, Computer Engineering (CGPA: 8.66/10)",
      logoUrl: "/Tiet.png",
      start: "Aug 2024",
      end: "Jun 2028 (Expected)",
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
      title: "DragVerse - Edge AI Robotics Platform",
      href: "https://drag-verse-beta.vercel.app/",
      dates: "Jul 2026",
      active: true,
      description:
        "Built an edge AI robotics platform that captures real-world environments with Gaussian Splatting and homography to generate digital twins. Trained a reinforcement learning navigation model over 50+ iterations, used Qualcomm AI Hub for Snapdragon NPU on-device inference, and deployed Sim2Real Unity simulations to Arduino Uno Q hardware for offline autonomous navigation.",
      technologies: [
        "Unity",
        "Gaussian Splatting",
        "Reinforcement Learning",
        "Qualcomm AI Hub",
        "Arduino"
      ],
      links: [
        {
          type: "Website",
          href: "https://drag-verse-beta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/adt-kmr/DragVerse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "JanMitra - Multilingual Voice AI Agent",
      href: "https://janmitra-ai.vercel.app/",
      dates: "Jan 2026",
      active: true,
      description:
        "Built a voice-driven AI agent helping rural citizens access financial literacy, government schemes, and grievance services through natural conversation. Integrated LiveKit, Sarvam AI, automated dialect detection, contextual RAG, semantic search, verified government APIs, and a low-bandwidth architecture designed for telephony networks.",
      technologies: [
        "LiveKit",
        "Sarvam AI",
        "RAG",
        "WebRTC"
      ],
      links: [
        {
          type: "Website",
          href: "https://janmitra-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Atlas – AI Digital Memory Scrapbook",
      href: "https://atlas-bios.vercel.app/",
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
          href: "https://atlas-bios.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/atlas.mp4",
    },
    {
      title: "NutriAI – AI Nutrition Tracker",
      href: "https://github.com/Aayush-Bindal/NutriAI",
      dates: "Feb 2026 - April 2026",
      active: true,
      description:
        "Shipped a cross-platform nutrition tracker serving 50+ active users with natural language and camera-based meal logging. Integrated a multimodal LLM pipeline with automatic fallback, reducing manual logging time by 85%, and built a local-first SQLite data layer with encrypted JSON backups for user privacy.",
      technologies: [
        "React Native",
        "Expo",
        "Gemini API",
        "SQLite",
        "JavaScript"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aayush-Bindal/NutriAI",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Download",
          href: "https://nutriai-pwa.vercel.app/",
          icon: <Icons.download className="size-3" />,
        },
      ],
      image: "/NutriAI.jpg",
      video: "",
    },
    {
      title: "SimONOE – ONOE Impact Simulator",
      href: "https://simonoe.baltej.me/",
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
          href: "https://simonoe.baltej.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/simonoe.png",
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
      title: "Qualcomm Snapdragon Multiverse AI Hackathon",
      dates: "Jul 2026",
      location: "India",
      description:
        "Winner (1st Place). Led Team GhostMap to first place overall after progressing from thousands of nationwide entries to the Top 8 Grand Finale. Built DragVerse, an Edge AI digital twin and RL navigation system.",
      image: "/qualcom.jpg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="size-3" />,
          href: "https://drag-verse-beta.vercel.app/",
        },
      ],
    },
    {
      title: "GKDC Season 13",
      dates: "Feb 2026",
      location: "Coimbatore, India",
      description:
        "2nd Place Overall & 1st in Innovation. Vice Champions nationally for advanced telemetry and electronic integration in electric go-kart competition. Secured additional 2nd place finishes in Design Evaluation and Endurance Race.",
      image: "/GKDC.png",
      links: [
        {
          title: "Repository",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/adishwarr/Team-OORJA-DAQ-Electronics/",
        },
      ],
    },
    {
      title: "SabkaAI (Thapar x University of Queensland)",
      dates: "Jan 2026",
      location: "Patiala, India",
      description:
        "Runner Up (2nd Place). Built JanMitra, a dialect-aware AI voice companion assisting rural citizens with financial literacy.",
      image: "/UQL.svg",
      links: [
        {
          title: "Deployment",
          icon: <Icons.globe className="size-3" />,
          href: "https://janmitra-ai.vercel.app/",
        },
      ],
    },
    {
      title: "Hack4Delhi",
      dates: "Jan 2026",
      location: "Delhi, India",
      description:
        "Top 50 Finalist. Ranked among the top 50 teams out of 2000+ competitors for engineering SimONOE, a scalable urban infrastructure simulation dashboard.",
      image: "/Hack4.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="size-3" />,
          href: "https://simonoe.baltej.me/",
        },
      ],
    },
    {
      title: "IEEE BIOS Hackathon SafeMode Track",
      dates: "Nov 2025",
      location: "Patiala, India",
      description:
        "Winner (1st Place). Built ATLAS, a stateless AI scrapbook platform using Claude and LLM orchestration.",
      image: "/IEEE.png",
      links: [
        {
          title: "Demo",
          icon: <Icons.globe className="size-3" />,
          href: "https://atlas-bios.vercel.app/",
        },
      ],
    },
    {
      title: "HackSpire",
      dates: "April 2025",
      location: "",
      description:
        "Built an AI-integrated web app overnight with a 4-person team. Recognized as one of the top projects at the event.",
      image: "/Hackspire.webp",
      links: [
        {
          title: "Website",
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
        "Built an anonymous Web3 product review platform on the ICP blockchain. Implemented Motoko smart contracts and integrated sentiment analysis for review summaries.",
      image: "/lego.png",
      links: [
        {
          title: "Website",
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
        "Built an autonomous fire-navigation robot using Arduino and custom sensors. First experience with embedded systems and hardware hacking.",
      image: "/Robothon.jpeg",
      links: [],
    },
    {
      title: "SatHack",
      dates: "November 2024",
      location: "",
      description:
        "First hackathon. Built a college onboarding platform with a FAQ chatbot covering classes, societies, professors and campus logistics.",
      image: "/sat.jpeg",
      links: [],
    },
    {
      title: "SynergySpark",
      dates: "August 2024",
      location: "",
      description:
        "First ideathon. Merged two brands and pitched an entirely new product concept under time pressure.",
      image: "/SynergySpark.webp",
      links: [],
    },
  ],
} as const;

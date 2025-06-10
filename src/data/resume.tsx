import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aayush Bindal",
  initials: "AB",
  url: "https://www.google.com/maps/place/india",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "a full stack web developer and currently exploring AI/ML. Passionate about solving real-world problems and contributing to open-source.",
  summary:
    "I'm a full stack web developer and a first-year Computer Engineering student at Thapar University. I build web applications using technologies like React, Flask, and PostgreSQL, and I'm comfortable working with tools like Git and Docker. Currently, I'm diving into the world of Artificial Intelligence and Machine Learning to expand my problem-solving capabilities beyond the web. I'm passionate about open-source and believe in learning by building. Whether it's a practical project, a hackathon idea, or contributing to the community, I love working on things that have real-world impact.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Python",
    "Flask",
    "Postgres",
    "Docker",
    "Git",
    "JavaScript",
    "C++",
    "C",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "abindal1_be24@thapar.edu",
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

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Team Oorja",
      href: "https://www.linkedin.com/company/team-oorja/posts/?feedView=all",
      badges: [],
      location: "Remote",
      title: "DAQ Engineer",
      logoUrl: "/team_oorja_logo.jpg",
      start: "Nov 2024",
      end: "Today",
      description:
        "Learnt basics of arudino and sensors. Implemented some sensors using esp32 in a gokart",
    },
    {
      company: "Enactus",
      href: "https://www.linkedin.com/company/enactus-tiet/posts/?feedView=all",
      badges: [],
      location: "Remote",
      title: "Executive Member",
      logoUrl: "/enactus.png",
      start: "Oct 2024",
      end: "Today",
      description:
        "",
    },
    {
      company: "Owasp",
      href: "https://www.linkedin.com/company/owasp-tiet/posts/?feedView=all",
      badges: [],
      location: "Remote",
      title: "Executive Member",
      logoUrl: "/owasp.jpg",
      start: "Oct 2024",
      end: "Today",
      description:
        "",
    },
    {
      company: "ACM",
      href: "https://www.linkedin.com/company/thapar-acm-student-chapter/posts/?feedView=all",
      badges: [],
      location: "Remote",
      title: "Member",
      logoUrl: "/acm.jpg",
      start: "Nov 2024",
      end: "Today",
      description:
        "",
    },
    {
      company: "GSsoc",
      href: "https://www.linkedin.com/company/girlscriptsoc/posts/?feedView=all",
      badges: [],
      location: "Remote",
      title: "Contributor",
      logoUrl: "/girlscriptsoc_logo.jpg",
      start: "Oct 2024",
      end: "Dec 2024",
      description:
        "",
    },
  ],
  education: [
    {
      school: "Thapar Institute of Engineering and Technology",
      href: "https://www.thapar.edu/",
      degree: "BE, Computer Engineering",
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
      title: "EchoVault",
      href: "https://github.com/Aayush-Bindal/EchoVault",
      dates: "Apr 2025",
      active: true,
      description:
        "EchoVault is a futuristic voice-based journaling web app.Instead of writing manually, you simply talk — like you're chatting with a friend.Our AI analyzes your emotions, detects your mood, and auto-generates journal entries capturing your real feelings.",
      technologies: [
        "Python",
        "Django",
        "ReactJs",
        "NextJS",
        "Hugging Face Sentiment Models",
        "Speech to Text (whisper)",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Aayush-Bindal/EchoVault",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/EchoVault.png",
      video:
        "",
    },
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
          type: "Website",
          href: "https://github.com/Aayush-Bindal/TimeTable",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/video.mp4",
    },
        {
      title: "CampusMarketplace",
      href: "https://github.com/Aayush-Bindal/CampusMarketplace",
      dates: "Working",
      active: true,
      description:
          "A classified marketplace specifically designed for college students. Buy and sell used items like lab coats, calculators, notes, and more within your college. Freshers can browse and buy, while only verified students with a @college.edu email can post items for sale.At night, the app transforms into a Night Market where students can buy and sell items within their hostels.",
      technologies: [
        "ReactJs",
        "Python",
        "Flask",
        "PostGreSQL",
        "Tailwind",
        "FireBase",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Aayush-Bindal/CampusMarketplace",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/CampusMarketplace.png",
      video:
        "",
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
          type: "Website",
          href: "https://github.com/Aayush-Bindal/CS50-finance",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "SynergySpark",
      dates: "August 2024",
      location: "Thapar institute of engineering and technology",
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

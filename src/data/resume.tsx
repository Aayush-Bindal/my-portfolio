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

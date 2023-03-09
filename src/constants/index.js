import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  tma,
  viettel,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "System Engineer",
    icon: web,
  },
  {
    title: "DepOps Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Security Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DevSecOps Engineer",
    company_name: "Viettel Solutions",
    icon: viettel,
    iconBg: "#E6DEDD",
    date: "From 4-2022 to present",
    points: [
      "Collaborate with infrastructure team, network team, cybersecurity team, backend team, NOC to managing servers, connections, security, ensure service's availability, service’s performance.",
      "Manage, maintain, install and deploy DMS applications in SIT, UAT, POC and Production environment",
      "Building DevSecOps pipeline for Production environment",
      "Research, design, and implement solutions for containerization, performance enhancements and monitoring.",
      "Penetration testing for various web application projects. (SAST, DAST and manual test). Main responsibility for information security for VTS Southern branch (VPN, Personal Computer, standards, regulations, ...)",
      "Develop a backend API using Spring Boot, gRPC and MongoDB.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "TMA Solutions",
    icon: tma,
    iconBg: "#E6DEDD",
    date: "From 2-2021 to 4-2022",
    points: [
      "- Developing and maintaining a web application. Provide a patch for the application every 2 months, and create a new version for this one. (VoIP platforms)",
      "- Build LDAP client, LDAP testing server and a Shell script for installation automatically",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Graduation thesis",
    description:
      "Signal demodulation with Machine learning in OLED Visible Light Communication [1 year research in laboratory - 2021]",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
      {
        name: "Latex",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/hieunguyen810/VLC_demodulation",
  },
  {
    name: "Kanji recognition",
    description:
      "This is linux application uses for translate Japanese Kanji to English and Vietnamese",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/hieunguyen810/kanji_recognizer_linux",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

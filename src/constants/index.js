import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  nodejs,
  git,
  docker,
  tma,
  viettel,
  profile,
  thesis,
  viet,
  us,
  japan,
  java,
  jenkins,
  kali,
  linux,
  python,
  tensorflow,
  spring,
  oracle,
  mysql,
  hcmut,
  kanji,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Tensowflow",
    icon: tensorflow,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name:"Spring Boot",
    icon: spring,
  },
  {
    name: "Kali linux",
    icon: kali,
  },
];

const languages = [
  {
    name: "English",
    icon: us,
  },
  {
    name: "Vietnamese",
    icon: viet,
  },
  {
    name: "Japanese",
    icon: japan,
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
      "Led a four-person team to successfully manage server infrastructure, network connectivity, and application security for 24/7 service availability and optimal performance.",
      "Fostered a collaborative environment by coordinating effectively with infrastructure, network, cybersecurity, development, and NOC teams.",
      "Managed, maintained, and deployed over 20 applications across SIT, UAT, and production environments, ensuring smooth operation and swift incident resolution.",
      "Established automated monitoring systems for proactive issue identification and rapid remediation.",
      "Owned information security for the VTS Southern branch, encompassing VPN configuration, PC security, and adherence to standards and regulations.",
      "Performed comprehensive penetration testing (SAST, DAST, and manual) for web applications, contributing to a robust security posture.",
      "Spearheaded the development and implementation of a DevSecOps pipeline utilizing Jenkins, Apache Ant, Ansible, GitLab, Fortify, and SonarQube for accelerated delivery with integrated security."
    ]
  },
  {
    title: "Software Engineer",
    company_name: "TMA Solutions",
    icon: tma,
    iconBg: "#E6DEDD",
    date: "From 2-2021 to 4-2022",
    points: [
      "Provided outsourced software development services to leading American companies within the telecommunications industry.",
      "Managed the software lifecycle for applications,including developing new versions, implementing feature enhancements, and delivering timely security patches.",
      "Mastered server and software installation, including scripting automated processes for efficient configuration and deployment."
    ],
  },
  {
    title: "Student",
    company_name: "Ho Chi Minh University of technology (BKU)",
    icon: hcmut,
    iconBg: "#E6DEDD",
    date: "From 8-2017 to 10-2021",
    points: [
      "Electronics and Telecommunications",
      "GPA: 7/10",
    ],
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
        name: "latex",
        color: "pink-text-gradient",
      },
    ],
    image: thesis,
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
    image: kanji,
    source_code_link: "https://github.com/hieunguyen810/kanji_recognizer_linux",
  },
  {
    name: "Responsive resume",
    description:
      "A responsive, multiple languages resume written by HTML, CSS and javascript",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: profile,
    source_code_link: "https://github.com/hieunguyen810/responsive-profile",
  },
];

export { services, technologies, experiences, projects, languages};

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Blog",
    link: "#blog",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// Real, verifiable numbers instead of the freelancer-style stats from the template.
const counterItems = [
  { value: 3, suffix: "+", label: "Open-Source Contributions" },
  { value: 35, suffix: "+", label: "GitHub Repositories" },
  { value: 5, suffix: "+", label: "Projects Shipped" },
  { value: 3, suffix: "+", label: "Hackathons Completed" },
];


const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Backend-First Thinking",
    desc: "I design the data model and API layer before touching the UI, so the app behaves correctly under real usage, not just in a demo.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Real-Time Systems",
    desc: "Comfortable with WebSocket-based state sync and event-driven architecture — building products that update live instead of on refresh.",
  },
  {
    imgPath: "/images/time.png",
    title: "Open-Source Rigor",
    desc: "Active contributor across CNCF projects, which means writing code that survives a stranger's code review, not just my own.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Full-Stack Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Open-Source Contributor",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Full-Stack Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Open-Source Contributor",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// Experience timeline: real open-source + hackathon work instead of the template's fake jobs.
const expCards = [
  {
    review:
      "Opened production PRs across three CNCF-ecosystem projects — closing a type-safety gap in Headlamp, fixing a resource-quantity parser in Volcano Dashboard, and iterating a workflow-engine bug in Kestra through multiple rounds of maintainer review.",
    imgPath: "/images/exp-opensource.svg",
    logoPath: "/images/exp-opensource.svg",
    title: "Open Source Contributor — CNCF Ecosystem",
    date: "November 2024 - Present",
    responsibilities: [
      "Headlamp (kubernetes-sigs, 7.1k★): replaced Promise<any> return types in the namespaced API client with correctly inferred generics, closing a type-safety gap.",
      "Volcano Dashboard (CNCF Incubating): fixed a queue resource-quantity parser that silently accepted invalid Kubernetes memory/CPU suffixes instead of rejecting malformed input.",
      "Kestra (11k★ workflow engine): fixed a workflow-level bug, iterating through CI failures and maintainer review across multiple revision rounds.",
    ],
  },
  {
    review:
      "Built VedX end-to-end during a national GDG hackathon against 50+ teams — owning backend and live API integration under a tight deadline.",
    imgPath: "/images/exp-hackathon.svg",
    logoPath: "/images/exp-hackathon.svg",
    title: "Hackathon Developer",
    date: "2025",
    responsibilities: [
      "Bharat Tech Xperience 2.0: built VedX, a multilingual real-time research assistant aggregating live data from public APIs, using Node.js, Express, and MongoDB.",
      "PEC E-Summit & UIET: participated as a team developer and presenter, shipping working prototypes under hackathon time constraints.",
      "Owned backend architecture and API integration end-to-end across each event.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
];

// Real profile links. Icons are rendered as inline SVGs in Footer.jsx
// (no external image asset to go missing or mismatch).
const socialImgs = [
  {
    name: "github",
    link: "https://github.com/Manpreets59",
  },
  {
    name: "leetcode",
    link: "https://leetcode.com/u/eS2s4sMmcX/",
  },
  {
    name: "x",
    link: "https://x.com/manpreets95828",
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/manpreet-singh-b9411328a",
  },
  {
    name: "email",
    link: "mailto:manpreets95828@gmail.com",
  },
];

// Update this to your real dev.to handle — used by the Blog section to fetch your posts live.
const DEVTO_USERNAME = "manpreet_ss";

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  DEVTO_USERNAME,
};

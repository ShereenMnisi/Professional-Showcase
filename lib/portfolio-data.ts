import mockupContent from "@/assets/SPORTY Fitness Website Device Mockup.png";
import mockupWeb from "@/assets/FraudCheck Responsive Website Mockup.png";
import ozowMockup from "@/assets/OZOW Merchant Website Mockup.png";

export const skills = [
  {
    title: "Front-End Development & UI/UX",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "HTML5",
      "CSS3",
      "Figma",
      "UX/UI Collaboration",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
  },
  {
    title: "SEO, Performance & Tools",
    items: [
      "GA4 (Google Analytics)",
      "Keyword Research",
      "Metadata Optimization",
      "Internal Linking",
      "Azure DevOps",
      "AI-Assisted Design & Development",
      "Web Performance Optimization",
      "Cross-Browser Compatibility",
    ],
  },
  {
    title: "Back-End, CMS & Web Platforms",
    items: [
      "WordPress",
      "Magento",
      "Adobe Commerce",
      "C#",
      "API Integration",
      "Content Management Systems",
    ],
  },
  {
    title: "Certificates & Badges",
    items: [
      "Figma UI UX Design Advanced (Udemy, March 2024)",
      "Generative Artificial Intelligence (Udemy, June 2025)",
      "Applying Generative AI as a Business Professional (LinkedIn Learning, October 2025)",
    ],
  },
] as const;

export const projects = [
  {
    name: "Multiply",
    subtitle: "E-commerce content optimization",
    description:
      "Redesigned and optimized an e-commerce platform using Magento and UX best practices.",
    technologies: ["Magento", "UX best practices"],
    url: "https://multiply.co.za",
    image: mockupContent,
    imageAlt: "Multiply e-commerce website shown on desktop and mobile",
  },
  {
    name: "FraudCheck",
    subtitle: "WordPress web application",
    description:
      "Developed a content management system with custom WordPress themes and plugins.",
    technologies: ["WordPress", "PHP", "Custom themes and plugins"],
    url: "https://fraudcheck.co.za",
    image: mockupWeb,
    imageAlt: "FraudCheck website shown on desktop and mobile",
  },
  {
    name: "Ozow",
    subtitle: "React and TypeScript development",
    description:
      "Developed a content management system with custom React, TypeScript, and JavaScript.",
    technologies: ["React", "TypeScript", "JavaScript"],
    url: "https://ozow.co.za",
    image: ozowMockup,
    imageAlt: "Ozow payments website shown on desktop and mobile",
  },
] as const;

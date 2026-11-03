type CareerItem = {
  company: string;
  role: string;
  date: string;
  summary?: string;
  highlights: readonly string[];
};

const careerItems: readonly CareerItem[] = [
  {
    company: "Vaimo South Africa",
    role: "Content Management System Developer",
    date: "July 2024 – Present",
    summary:
      "Build and optimize scalable CMS-driven eCommerce and content platforms through front-end development, UX/UI design, SEO, and analytics. Combine React, TypeScript, WordPress, Figma, and AI tools to create high-performance, user-centric digital experiences aligned with business objectives.",
    highlights: [
      "Develop and maintain scalable CMS-driven eCommerce platforms.",
      "Build responsive front-end components using React, JavaScript, and TypeScript.",
      "Implement SEO strategies and optimize website visibility.",
      "Analyse user behaviour and performance using GA4.",
      "Collaborate with UX/UI teams to deliver user-centric experiences.",
      "Create design assets using Figma, Adobe tools, and AI.",
      "Manage WordPress and other CMS architectures.",
      "Contribute to AI-powered SEO content generation.",
      "Optimize website speed, performance, and usability.",
      "Translate stakeholder requirements into scalable digital solutions.",
    ],
  },
  {
    company: "Fraudcheck",
    role: "Junior Web & Frontend Engineer",
    date: "January 2024 – June 2024",
    highlights: [
      "Developed and maintained web applications with a focus on usability and performance.",
      "Implemented front-end features using JavaScript and modern frameworks.",
      "Assisted in integrating backend services and APIs.",
      "Ensured cross-browser compatibility and responsive design across devices.",
      "Participated in debugging, testing, and improving existing systems.",
    ],
  },
  {
    company: "BBD Software Solutions",
    role: "Internship – Software Developer",
    date: "January 2023 – December 2023",
    highlights: [
      "Assisted in developing and maintaining web-based applications.",
      "Gained hands-on experience in web technologies, front-end development, and software development practices.",
      "Supported team members in debugging, testing, and feature implementation.",
      "Learned collaborative development workflows and version control practices.",
    ],
  },
];

function CareerCard({ item }: { item: CareerItem }) {
  return (
    <article className="career-card">
      <h3>{item.company}</h3>
      <p className="career-card__role">{item.role}</p>
      <p className="career-card__date">{item.date}</p>
      {item.summary ? (
        <p className="career-card__summary">{item.summary}</p>
      ) : null}
      <h4>Highlights &amp; Achievements</h4>
      <ul>
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

export function Career() {
  return (
    <section aria-labelledby="career-title" className="career" id="career">
      <div className="container">
        <h2 className="section-title" id="career-title">
          Career Snapshot
        </h2>
        <div className="career__grid">
          {careerItems.map((item) => (
            <CareerCard item={item} key={item.company} />
          ))}
        </div>
      </div>
    </section>
  );
}

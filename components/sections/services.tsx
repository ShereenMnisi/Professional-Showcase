const services = [
  {
    title: "E-Commerce",
    description:
      "Create and optimize e-commerce experiences, product content, and customer journeys across modern platforms.",
  },
  {
    title: "Web Development",
    description:
      "Build responsive, accessible websites that work smoothly across devices and support business goals.",
  },
  {
    title: "CMS Development",
    description:
      "Develop and manage content-driven websites with flexible CMS platforms, including WordPress and Adobe Commerce.",
  },
  {
    title: "Front-End Development",
    description:
      "Turn designs into polished, interactive interfaces using modern front-end technologies and best practices.",
  },
  {
    title: "Digital Marketing",
    description:
      "Improve digital visibility through SEO, keyword research, metadata, content optimization, and analytics.",
  },
  {
    title: "UI/UX Design",
    description:
      "Design clear, user-focused digital experiences through thoughtful layouts, collaboration, and iterative refinement.",
  },
] as const;

export function Services() {
  return (
    <section aria-labelledby="services-title" className="services">
      <div className="container">
        <h2 className="section-title" id="services-title">
          Services I Provide
        </h2>
        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

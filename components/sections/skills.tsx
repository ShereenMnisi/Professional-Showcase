import { skills } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="skills" id="skills">
      <div className="container">
        <h2 className="section-title" id="skills-title">
          Skills
        </h2>
        <div className="skills__grid">
          {skills.map((group) => (
            <section
              aria-labelledby={`skill-group-${group.title}`}
              className="skill-group"
              key={group.title}
            >
              <h3
                id={`skill-group-${group.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
              >
                {group.title}
              </h3>
              <div className="skill-group__list">
                {group.items.map((skill) => (
                  <span className="pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

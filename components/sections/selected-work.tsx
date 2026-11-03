import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { projects } from "@/lib/portfolio-data";

export function SelectedWork() {
  return (
    <section aria-labelledby="work-title" className="work" id="work">
      <div className="container">
        <div className="work__header">
          <h2 className="section-title" id="work-title">
            Selected work
          </h2>
          <ButtonLink href="#work" variant="primary">
            View All Projects
          </ButtonLink>
        </div>
        <div className="work__grid">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <Image
                alt={project.imageAlt}
                className="project__image"
                sizes="(max-width: 860px) 100vw, 70vw"
                src={project.image}
              />
              <h3>{project.name}</h3>
              <p className="project__subtitle">{project.subtitle}</p>
              <p className="project__description">{project.description}</p>
              <p className="project__stack-label">Build with</p>
              <div aria-label="Technologies used" className="project__stack">
                {project.technologies.map((technology) => (
                  <span className="pill" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              <a
                className="project__link"
                href={project.url}
                rel="noreferrer"
                target="_blank"
              >
                Visit {project.url.replace("https://", "")}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

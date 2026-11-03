import { ButtonLink } from "@/components/ui/button-link";
import { PortraitArtwork } from "@/components/ui/portrait-artwork";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title" id="hero-title">
            Shereen Mokone
          </h1>
          <p className="hero__role">
            Front-end Developer | Web Developer | Digital Marketing | CMS
            &amp; E-Commerce
          </p>
          <div className="hero__summary">
            <b></b>
            <p>
              Front-End Engineer and Web Developer experienced in building
              responsive, user-focused websites, e-commerce platforms, and
              digital experiences across diverse environments.
            </p>
            <p>
              Proficient in JavaScript, TypeScript, React, HTML, and CSS, with
              a strong focus on performance, accessibility, usability, and
              modern UI development. Experienced in WordPress, Magento, Adobe
              Commerce, CMS platforms, and content-driven solutions, with a
              strong understanding of digital marketing, SEO, and optimising
              web experiences for both users and business objectives.
            </p>
            <p>
              Passionate about creating scalable, high-performing digital
              experiences that combine strong technical execution, intuitive
              design, and effective digital strategy.
            </p>
          </div>
          <div className="hero__actions">
            <ButtonLink href="#work" variant="primary">
              View my work
            </ButtonLink>
            <ButtonLink
              download="Shereen-Mokone-CV.pdf"
              href="/CV.pdf"
            >
              Download CV
            </ButtonLink>
          </div>
        </div>
        <div className="hero__art">
          <PortraitArtwork variant="hero" />
        </div>
      </div>
    </section>
  );
}

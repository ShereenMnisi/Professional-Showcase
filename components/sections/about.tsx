import { ButtonLink } from "@/components/ui/button-link";
import { PortraitArtwork } from "@/components/ui/portrait-artwork";

export function About() {
  return (
    <section aria-labelledby="about-title" className="about" id="about">
      <div className="container about__inner">
        <div className="about__copy">
          <h2 className="section-title" id="about-title">
            About me
          </h2>
          <p>
            I&apos;m a multidisciplinary Digital Professional with experience
            across web development, front-end design, content management
            systems (CMS), and digital marketing. My work sits at the
            intersection of technology, creativity, and strategy, allowing me
            to approach digital projects with a holistic understanding of how
            websites are built, managed, optimised, and positioned to achieve
            business objectives.
          </p>
          <p>
            My experience includes website development and management,
            front-end design, WordPress development, Figma, CMS administration,
            website optimisation, SEO strategy, keyword research, technical and
            on-page SEO, content development, and digital brand communication.
            I also work with essential digital marketing and analytics
            platforms, including Google Search Console, Google Tag Manager, and
            Google Merchant Centre, using data and insights to improve website
            performance, search visibility, and the overall digital experience.
          </p>
          <p>
            I enjoy transforming ideas into functional, visually engaging, and
            user-focused digital solutions. Whether developing a website,
            refining its user experience, managing digital content, or
            implementing strategies to improve organic visibility, I bring a
            balance of technical understanding, creative thinking, and
            analytical problem-solving to every project.
          </p>
          <p>
            I&apos;m passionate about the evolving digital landscape and
            continuously seek opportunities to expand my knowledge, refine my
            skills, and deliver work that makes a meaningful impact. I believe
            successful digital experiences are built through the combination
            of strong design, seamless functionality, valuable content, and
            purposeful strategy.
          </p>
          <blockquote className="about__quote">
            Digital systems should reduce friction, not create it. They should
            empower teams, not overwhelm them.
          </blockquote>
          <div className="about__actions">
            <ButtonLink
              download="Shereen-Mokone-CV.pdf"
              href="/CV.pdf"
              variant="primary"
            >
              Download CV
            </ButtonLink>
            <ButtonLink
              className="about__contact-button"
              href="#contact"
            >
              Contact me
            </ButtonLink>
          </div>
        </div>
        <div className="about__art">
          <PortraitArtwork variant="about" />
        </div>
      </div>
    </section>
  );
}

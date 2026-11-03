import { ButtonLink } from "@/components/ui/button-link";

const navigation = [
  { label: "Insight", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
] as const;

export function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__heading">
          <h2 className="section-title">Let&apos;s Connect</h2>
          <ButtonLink href="#work" variant="primary">
            View My Projects
          </ButtonLink>
        </div>
        <div className="contact__grid">
          <section aria-label="About Shereen" className="contact__brand">
            <span aria-hidden="true" className="contact__monogram">
              SM
            </span>
            <h3 className="contact__brand-name">Shereen Mokone</h3>
            <p className="contact__brand-copy">
              Creating user-focused digital experiences through{" "}
              <strong>front-end development, SEO</strong> and modern CMS
              platforms.
            </p>
          </section>
          <nav aria-label="Footer navigation" className="contact__column">
            <h3>Navigation</h3>
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <section aria-label="Contact details" className="contact__column">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="tel:+27731264664">073 126 4664</a>
              </li>
              <li>
                <a href="mailto:shereenmnisi920@gmail.com">
                  shereenmnisi920@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shereen-mnisi/"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>2 Mushroom Rd, Midrand, Gauteng, 1686</li>
            </ul>
          </section>
          <section aria-label="Connect by email" className="contact__column">
            <h3>Connect</h3>
            <form
              action="mailto:shereenmnisi920@gmail.com"
              className="contact__form"
              encType="text/plain"
              method="post"
            >
              <label className="sr-only" htmlFor="contact-email">
                Your email address
              </label>
              <input
                autoComplete="email"
                id="contact-email"
                name="email"
                placeholder="Email"
                required
                type="email"
              />
              <button aria-label="Send an email" type="submit">
                <span aria-hidden="true">➤</span>
              </button>
            </form>
          </section>
        </div>
        <div className="contact__bottom">
          <span aria-hidden="true" className="contact__monogram">
            SM
          </span>
          <span>@Shereen Mokone 2026, Midrand, South Africa.</span>
        </div>
      </div>
    </footer>
  );
}

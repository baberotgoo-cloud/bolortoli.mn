export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            About
          </h2>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-muted">
              I am a developer and designer with a passion for crafting
              accessible, pixel-perfect user interfaces that blend thoughtful
              design with robust engineering. My favorite work lies at the
              intersection of design and development, creating experiences that
              not only look great but are meticulously built for performance and
              usability.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              I have had the opportunity to develop software across a variety of
              settings &mdash; from agencies and startups to large corporations
              and product studios. Each experience has deepened my appreciation
              for clean code, user-centered design, and collaborative teamwork.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Technologies
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
                "Figma",
                "Git",
              ].map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

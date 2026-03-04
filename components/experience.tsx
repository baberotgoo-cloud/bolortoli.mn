import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2024 — Present",
    role: "Senior Frontend Engineer",
    company: "Company A",
    url: "#",
    description:
      "Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams, including product managers and designers, to implement and advocate for best practices in web accessibility.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "Company B",
    url: "#",
    description:
      "Developed and styled interactive web applications for a diverse range of clients. Collaborated closely with designers and backend engineers to create performant, responsive user interfaces.",
    tags: ["JavaScript", "React", "Node.js", "Storybook"],
  },
  {
    period: "2020 — 2022",
    role: "Web Developer",
    company: "Company C",
    url: "#",
    description:
      "Built, styled, and shipped high-quality websites and digital experiences for a range of projects. Worked alongside a senior developer to implement best practices and improve developer workflows.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Experience
          </h2>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <a
              key={exp.role}
              href={exp.url}
              className="group relative rounded-xl border border-transparent p-6 transition-all duration-300 hover:border-border hover:bg-card/50"
            >
              <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="flex items-center gap-2 text-foreground">
                    <span className="font-semibold">{exp.role}</span>
                    <span className="text-muted-foreground">{"·"}</span>
                    <span className="font-semibold text-accent">
                      {exp.company}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

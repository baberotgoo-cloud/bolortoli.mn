import { ArrowUpRight, Folder } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js, Tailwind CSS, and TypeScript. Features smooth animations, responsive design, and dark theme.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    url: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory management, Stripe integration, and an admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    url: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop, and team workspaces.",
    tags: ["TypeScript", "React", "WebSockets"],
    url: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "An interactive data visualization dashboard with charts, filters, and real-time data streaming for business insights.",
    tags: ["Next.js", "D3.js", "Tailwind CSS"],
    url: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Projects
          </h2>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              className="group flex flex-col rounded-xl border border-border bg-card/30 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-card/60"
            >
              <div className="mb-4 flex items-center justify-between">
                <Folder className="h-8 w-8 text-accent" />
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

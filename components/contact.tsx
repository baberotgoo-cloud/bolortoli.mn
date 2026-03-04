import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-12 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </h2>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <h3 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {"Let's Work Together"}
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted">
          If you would like to discuss a project or just say hello, I am always
          open to chat. Feel free to reach out.
        </p>

        <a
          href="mailto:hello@bolortoli.mn"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-8 py-3 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
        >
          <Mail className="h-4 w-4" />
          Say Hello
        </a>
      </div>
    </section>
  );
}

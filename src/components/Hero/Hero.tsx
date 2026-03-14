export function Hero() {
  return (
    <section
      id="about"
      className="max-w-[1100px] mx-auto px-8 min-h-screen flex flex-col justify-center pt-15 relative overflow-hidden"
    >
      {/* Subtle dot grid texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 bg-accent-glow border border-accent-border text-accent px-3.5 py-1.5 rounded-full text-xs font-medium w-fit mb-6">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-dot" aria-hidden="true" />
            Available for opportunities
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-text-primary text-wrap-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-br from-accent to-accent-secondary bg-clip-text text-transparent">
              Sheldon Fam
            </span>
          </h1>

          <p className="text-lg text-text-secondary mb-8 max-w-xl text-wrap-pretty">
            Frontend Engineer with 2+ years building high-traffic Angular and React
            applications for government and enterprise platforms. Delivered
            production systems serving 15M+ users.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 active:scale-95 transition-transform,background-color focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-transparent text-text-primary border border-border-custom hover:border-border-hover hover:bg-surface active:scale-95 transition-transform,border-color,background-color focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-3 bg-zinc-900 border border-zinc-700/50 rounded-xl p-6 font-mono text-sm w-72 shadow-lg">
          <div className="flex gap-1.5 mb-2">
            <span className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
          </div>
          <code className="text-zinc-400">
            <span className="text-accent-secondary">const</span>{" "}
            <span className="text-accent">dev</span>{" "}
            <span className="text-zinc-500">=</span> {"{"}
          </code>
          <code className="text-zinc-400 pl-4">
            <span className="text-emerald-400">name</span>:{" "}
            <span className="text-amber-300">"Sheldon"</span>,
          </code>
          <code className="text-zinc-400 pl-4">
            <span className="text-emerald-400">role</span>:{" "}
            <span className="text-amber-300">"Frontend Eng"</span>,
          </code>
          <code className="text-zinc-400 pl-4">
            <span className="text-emerald-400">coffee</span>:{" "}
            <span className="text-accent">true</span>,
          </code>
          <code className="text-zinc-400">{"};"}</code>
        </div>
      </div>
    </section>
  );
}

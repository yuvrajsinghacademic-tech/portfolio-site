export default function PortfolioSite() {

  const links = {
    email: "mailto:yuvrajsinghacademic@gmail.com",
    linkedin: "https://www.linkedin.com/in/yuvrajsingh04/",
    handshake: "https://app.joinhandshake.com/profiles/singhyuvraj",
    resume: "/Yuvraj-Singh-Resume.pdf",
    damsLive: "https://dams-ai.vercel.app/",
    damsGitHub: "https://github.com/yuvrajsinghacademic-tech/dams-ai",
  };

  const projects = [
    {
      title: "DAMS AI",
      subtitle: "AI-Powered Math Calculator Web App",
      description:
        "Built and launched a live math web application with authentication, structured math outputs, and a polished interactive interface.",
      stack: ["React", "Vite", "JavaScript", "Tailwind CSS", "Supabase", "Vercel"],
      live: links.damsLive,
      github: links.damsGitHub,
      status: "Live",
      highlights: [
        "Implemented user signup, login, password reset, and profile flows with Supabase Auth.",
        "Designed responsive front-end components for real-time math interaction and problem history.",
        "Integrated math.js to support expression parsing, evaluation, and structured explanation output.",
      ],
    },
    {
      title: "StarkPedia / StarkNet",
      subtitle: "Marvel-Inspired Interconnected Web Platform",
      description:
        "A multi-site universe of themed web experiences focused on search, immersive presentation, and branded storytelling across several connected pages.",
      stack: ["HTML", "CSS", "JavaScript"],
      status: "Currently in Development",
      live: null,
      github: null,
      highlights: [
        "Implemented client-side search functionality with dynamic ranking and URL-based routing.",
        "Designed a modular ecosystem of interconnected themed sites including encyclopedia, news, and archive-style experiences.",
        "Blends narrative storytelling with front-end development to create an immersive media environment.",
      ],
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Vite",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Supabase",
    "Git",
    "GitHub",
    "Vercel",
    "Java",
    "Python",
  ];

  const experienceCards = [
    {
      name: "Handshake AI",
      role: "Prompt Engineering Intern",
      dates: "Dec 2025 - Present",
      logoType: "handshake",
      accent: "from-violet-500/25 to-fuchsia-500/10",
      border: "border-violet-400/20",
      text: "Designed AI software workflows for 20+ companies and contributed to systems used for Meta-related applications.",
    },
    {
      name: "Target",
      role: "Guest Advocate",
      dates: "Jun 2022 - Present",
      logoType: "target",
      accent: "from-red-500/25 to-red-300/10",
      border: "border-red-400/20",
      text: "Worked across multiple departments, supported high-volume customer operations, and helped resolve tech-related customer issues.",
    },
    {
      name: "Global Fashions",
      role: "Technical and Marketing Specialist",
      dates: "Jun 2014 - Jun 2022",
      logoType: "flower",
      accent: "from-rose-500/25 to-pink-400/10",
      border: "border-rose-400/20",
      text: "Designed websites and marketing assets, created business documents, and handled software and hardware issues for the family business.",
    },
  ];

  function CompanyLogo({ type }) {
    if (type === "target") {
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
          <circle cx="32" cy="32" r="22" fill="none" stroke="#ef4444" strokeWidth="8" />
          <circle cx="32" cy="32" r="7" fill="#ef4444" />
        </svg>
      );
    }

    if (type === "handshake") {
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
          <path d="M18 18h14l6 6-10 10c-3 3-8 3-11 0l-5-5c-3-3-3-8 0-11l6-6Z" fill="#8b5cf6" opacity="0.95" />
          <path d="M46 18H32l-6 6 10 10c3 3 8 3 11 0l5-5c3-3 3-8 0-11l-6-6Z" fill="#ec4899" opacity="0.95" />
          <path d="M24 36l6 6c1.6 1.6 4.4 1.6 6 0l4-4" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
        <g fill="#f9a8d4">
          <ellipse cx="32" cy="18" rx="6" ry="12" />
          <ellipse cx="32" cy="46" rx="6" ry="12" />
          <ellipse cx="18" cy="32" rx="12" ry="6" />
          <ellipse cx="46" cy="32" rx="12" ry="6" />
          <ellipse cx="22" cy="22" rx="6" ry="10" transform="rotate(-45 22 22)" />
          <ellipse cx="42" cy="42" rx="6" ry="10" transform="rotate(-45 42 42)" />
          <ellipse cx="42" cy="22" rx="6" ry="10" transform="rotate(45 42 22)" />
          <ellipse cx="22" cy="42" rx="6" ry="10" transform="rotate(45 22 42)" />
        </g>
        <circle cx="32" cy="32" r="5" fill="#ffffff" />
      </svg>
    );
  }

  const resumeDetails = [];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
          <div>
            <p className="text-2xl font-semibold tracking-tight">Yuvraj Singh</p>
            <p className="mt-1 text-sm text-white/60">Information Systems Student • University of Nevada, Las Vegas</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#resume" className="transition hover:text-white">Resume</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.32em] text-white/45">Portfolio</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Rising technology student with a strong interest in front-end development, AI-powered products, and building clean digital experiences.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-white/66">
              I’m a student at the University of Nevada, Las Vegas, pursuing a Bachelor Of Science in Information Systems. My work focuses on front-end development,
              live web products, creative project building, prompt engineering, developing AI software workflows, and exploring the intersection of technology and design through hands-on projects and internships. I’m particularly drawn to roles in technology, media, and especially entertainment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={links.damsLive}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                View DAMS AI
              </a>
              <a
                href="#projects"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5"
              >
                See Projects
              </a>
            </div>
          </div>

          <div className="flex items-start lg:justify-end">
            <div className="w-full max-w-[470px] rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/30">
              <p className="text-sm uppercase tracking-[0.34em] text-white/40">Las Vegas, Los Angeles, San Francisco, New York City, Orlando</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white">Seeking An Internship/Early Talent Position</h2>
              <p className="mt-6 text-lg leading-9 text-white/64">
                I’m currently seeking opportunities where I can contribute to live projects, strengthen my front-end and product skills,
                and continue learning through hands-on technical work.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-white/45">Projects</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Featured work</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/60">
              A selection of projects that show my work in front-end development, live deployment, product design, and interactive digital experiences.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/25 lg:grid-cols-[1fr_0.9fr]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/42">{project.subtitle}</p>
                  </div>

                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/12 bg-black/25 px-4 py-2 text-sm text-white/78"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5">
                    <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/60">
                      {project.status}
                    </span>
                  </div>

                  {project.live || project.github ? (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-white/15 bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:scale-[1.02]"
                        >
                          Live Demo
                        </a>
                      ) : null}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5"
                        >
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-black/25 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/42">Highlights</p>
                  <ul className="mt-5 space-y-4 text-base leading-8 text-white/66">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <p className="text-sm uppercase tracking-[0.32em] text-white/45">Skills</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Tools and technologies</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-3 text-base text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="resume" className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/25 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.32em] text-white/45">Resume</p>
                <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">My Experience</h2>
                <p className="mt-5 text-base leading-8 text-white/66">
                  
                </p>
              </div>

              <a
                href={links.resume}
                download
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {experienceCards.map((card) => (
                <div
                  key={card.name}
                  className={`group rounded-[1.6rem] border ${card.border} bg-gradient-to-b ${card.accent} p-[1px] transition duration-300 hover:-translate-y-1`}
                >
                  <div className="h-full rounded-[1.55rem] bg-[#101010] p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-2xl font-semibold text-white">
                        <CompanyLogo type={card.logoType} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">{card.name}</p>
                        <p className="text-sm text-white/55">{card.role}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/38">{card.dates}</p>
                    <p className="mt-4 text-sm leading-7 text-white/66">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/25 sm:p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-white/45">Contact</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Let’s connect</h2>
            <p className="mt-5 max-w-4xl text-lg leading-9 text-white/66">
              I’m interested in internships, project-based opportunities, and roles involving front-end development, product thinking, and creative digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={links.email}
                className="rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                Email Me
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5"
              >
                LinkedIn
              </a>
              <a
                href={links.handshake}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5"
              >
                Handshake
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

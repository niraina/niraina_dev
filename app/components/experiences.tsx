"use client";

import { useTranslations } from "next-intl";

export function Experiences() {
  const t = useTranslations("experiences");

  const experiences = [
    {
      company: "LIVENEXX",
      period: `2023 – ${t("present")}`,
      role: "Front-end Developer",
      location: "Antananarivo",
      responsibilities: [
        t("livenexx_frontend_r1"),
        t("livenexx_frontend_r2"),
      ],
      tech: "React.js, Next.js, Javascript, Typescript, Tailwind...",
    },
    {
      company: "LIVENEXX",
      period: `2021 – ${t("present")}`,
      role: "Web Integrator",
      location: "Antananarivo",
      responsibilities: [
        t("livenexx_integrator_r1"),
        t("livenexx_integrator_r2"),
      ],
      tech: "PHP, Javascript, SCSS, ACF, Elementor, WooCommerce, Bootstrap, jQuery",
      database: "MySQL",
    },
    {
      company: "FREELANCE",
      period: `2020 – ${t("present")}`,
      role: "Front-end & Web Integrator",
      location: "Antananarivo",
      responsibilities: [
        t("freelance_r1"),
        t("freelance_r2"),
      ],
      tech: "PHP, Javascript, Typescript, HTML, SCSS, Tailwind, Bootstrap, jQuery, slick...",
      database: "MySQL, MongoDB",
    },
  ];

  const projects = [
    t("project_mern"),
    t("project_vue"),
    t("project_blog"),
  ];

  return (
    <section id="experiences" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-0.5 bg-violet-400 rounded" />
          <span className="text-xs font-bold tracking-widest uppercase text-violet-400">
            {t("label")}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl backdrop-blur-sm p-6 hover:bg-white/[0.07] hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500 rounded-t-2xl" />

              <p className="text-xs font-semibold text-violet-400 mb-1">
                {exp.company} · {exp.period}
              </p>
              <h3 className="text-base font-bold text-white mb-0.5">
                {exp.role}
              </h3>
              <p className="text-xs text-white/40 mb-4">{exp.location}</p>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((r, j) => (
                  <li key={j} className="flex gap-2 text-xs text-white/55 leading-relaxed">
                    <span className="text-violet-400 mt-0.5 flex-shrink-0">•</span>
                    {r}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-white/40">
                <span className="text-white/60 font-semibold">Tech : </span>
                {exp.tech}
              </p>
              {exp.database && (
                <p className="text-xs text-white/40 mt-1">
                  <span className="text-white/60 font-semibold">DB : </span>
                  {exp.database}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Personal projects */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl backdrop-blur-sm p-6">
          <h3 className="text-sm font-bold text-white mb-4">
            🚀 {t("projects_title")}
          </h3>
          <div className="flex flex-wrap gap-3">
            {projects.map((p, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-xs text-white/60 bg-white/[0.06] border border-white/[0.1] rounded-full px-4 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";

export function Skills() {
  const t = useTranslations("skills");

  const skillGroups = [
    {
      icon: "💻",
      label: t("group_languages"),
      chips: ["JavaScript", "TypeScript", "PHP"],
    },
    {
      icon: "🎨",
      label: t("group_frontend"),
      chips: ["HTML", "CSS", "SCSS", "Tailwind", "Bootstrap"],
    },
    {
      icon: "⚛️",
      label: t("group_frameworks"),
      chips: ["React.js", "Next.js", "Vue.js", "jQuery"],
    },
    {
      icon: "🗄️",
      label: t("group_cms"),
      chips: ["WordPress"],
    },
    {
      icon: "💾",
      label: t("group_databases"),
      chips: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      icon: "🖌️",
      label: t("group_design"),
      chips: ["Figma", "Adobe XD", "Adobe Photoshop"],
    },
    {
      icon: "🔧",
      label: t("group_tools"),
      chips: ["Git", "GitHub", "Elementor", "WooCommerce", "ACF Pro"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-0.5 bg-violet-400 rounded" />
          <span className="text-xs font-bold tracking-widest uppercase text-violet-400">
            {t("label")}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            {t("stack_title")}
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl backdrop-blur-sm p-5 hover:bg-white/[0.07] hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-300"
            >
              <h3 className="flex items-center gap-2 text-sm font-bold text-white mb-4">
                <span>{group.icon}</span>
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-semibold text-white/80 hover:bg-violet-500/15 hover:border-violet-400/30 hover:text-violet-300 transition-all cursor-default"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

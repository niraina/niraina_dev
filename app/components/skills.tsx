"use client";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { FaWordpress, FaReact, FaFigma, FaHtml5, FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";

export function Skills() {
  const skills = useTranslations("skills");

  const timelineData = [
    {
      id: 1,
      title: "WordPress",
      date: skills("wordpress_date"),
      content: skills("wordpress"),
      category: "Livenexx",
      icon: FaWordpress,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "Frontend",
      date: skills("frontend_date"),
      content: skills("frontend"),
      category: "Livenexx",
      icon: FaReact,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 3,
      title: "Design",
      date: skills("ui_ux_date"),
      content: skills("ui_ux"),
      category: "Livenexx",
      icon: FaFigma,
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 60,
    },
    {
      id: 4,
      title: "HTML/CSS",
      date: skills("html_css_date"),
      content: skills("html_css"),
      category: "Livenexx",
      icon: FaHtml5 ,
      relatedIds: [3, 5],
      status: "pending" as const,
      energy: 30,
    },
    {
      id: 5,
      title: "Git",
      date: skills("git_date"),
      content: skills("git"),
      category: "Livenexx",
      icon: FaGithub,
      relatedIds: [4],
      status: "pending" as const,
      energy: 10,
    },
  ];

  return <RadialOrbitalTimeline timelineData={timelineData} />;
}

export default Skills;

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { EMAIL, GIT, LINKEDIN } from "@/constant/social";
import niraina from "@/app/assets/png/niraina.png";

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] as const },
  },
});

function HeroGeometric({
  title1 = "Niraina",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const poste = useTranslations("poste");
  const homepage = useTranslations("homepage");
  const hero = useTranslations("hero");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Text content */}
          <div>
            {/* Status badge */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-white/[0.06] border border-violet-200/70 dark:border-white/[0.1] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span className="text-xs font-semibold text-violet-700 dark:text-white/55 tracking-wide">
                {hero("available")}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-5"
            >
              <span className="text-gray-800 dark:text-white/90">{hero("title")}</span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-400 dark:to-blue-400 bg-clip-text text-transparent">
                {title1}
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-gray-500 dark:text-white/50 font-medium mb-4"
            >
              {poste("frontend")} &amp; {poste("integrateur")}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
              className="max-w-lg text-gray-500 dark:text-white/40 leading-relaxed mb-8"
            >
              {homepage("description")}
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-8"
            >
              <a
                href="#experiences"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-500 dark:to-blue-500 text-white text-sm font-bold shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_30px_rgba(139,92,246,0.55)] hover:-translate-y-0.5 transition-all"
              >
                {hero("see_experiences")}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-white dark:bg-white/[0.06] border border-gray-300 dark:border-white/[0.15] text-gray-800 dark:text-white text-sm font-bold shadow-sm dark:shadow-none hover:bg-gray-50 dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                {hero("contact")}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp(0.6)}
              initial="hidden"
              animate="visible"
              className="flex gap-3"
            >
              <Link
                href={LINKEDIN}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] text-gray-500 dark:text-white/60 hover:text-violet-600 dark:hover:text-white hover:border-violet-300 dark:hover:bg-white/10 shadow-sm dark:shadow-none transition-all"
              >
                <FaLinkedin size={18} />
              </Link>
              <Link
                href={GIT}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] text-gray-500 dark:text-white/60 hover:text-violet-600 dark:hover:text-white hover:border-violet-300 dark:hover:bg-white/10 shadow-sm dark:shadow-none transition-all"
              >
                <FaGithub size={18} />
              </Link>
              <Link
                href={`mailto:${EMAIL}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] text-gray-500 dark:text-white/60 hover:text-violet-600 dark:hover:text-white hover:border-violet-300 dark:hover:bg-white/10 shadow-sm dark:shadow-none transition-all"
              >
                <Mail size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative">
              {/* Spinning ring */}
              <div
                className="absolute inset-[-14px] rounded-full border border-violet-200 dark:border-white/10"
                style={{ animation: "spin 20s linear infinite" }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-500 dark:bg-violet-400"
                  style={{ boxShadow: "0 0 12px #a78bfa" }}
                />
              </div>
              {/* Photo */}
              <div className="w-52 h-52 rounded-full overflow-hidden border-2 border-violet-200/60 dark:border-white/20 shadow-[0_0_60px_rgba(139,92,246,0.2)] dark:shadow-[0_0_60px_rgba(139,92,246,0.25)]">
                <Image
                  src={niraina}
                  alt="Niraina"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export { HeroGeometric };

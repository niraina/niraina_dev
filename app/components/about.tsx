"use client";

import Image from "next/image";
import niraina from "../assets/png/niraina.png";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

const About = () => {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
          {/* Photo card */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                <Image
                  src={niraina.src}
                  alt="Niraina"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08080f] border border-white/10 text-xs font-semibold text-white/70 whitespace-nowrap backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
                {t("available")}
              </div>
            </div>
          </div>

          {/* Info card */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl backdrop-blur-sm p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-1">
              Niraina ANDRIAMIARINTSOA
            </h3>
            <p className="text-sm text-violet-400 font-semibold mb-4">
              Web Integrator &amp; Front-end Developer
            </p>
            <p className="text-white/50 leading-relaxed text-sm mb-6">
              {t("description")}
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href={`mailto:${encodeURIComponent("andriamiarintsoaniraina@gmail.com")}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08] group-hover:border-violet-400/30 transition-colors">
                  <Mail size={14} />
                </span>
                andriamiarintsoaniraina@gmail.com
              </Link>
              <Link
                href="https://wa.me/261344408507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08] group-hover:border-violet-400/30 transition-colors">
                  <Phone size={14} />
                </span>
                +261 34 44 085 07
              </Link>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08]">
                  <MapPin size={14} />
                </span>
                Antananarivo, Madagascar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

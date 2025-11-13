"use client";

import Image from "next/image";
import niraina from "../assets/png/niraina.png";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, Phone } from "lucide-react";

const About = () => {
  const t = useTranslations("about");
  return (
    <div className="container mx-auto px-3">
      <h2 className="text-white/80 font-bold text-4xl text-center pb-10">{t("title")}</h2>
      <div className="flex flex-wrap max-w-4xl mx-auto items-center">
        <div className="flex justify-center w-full md:w-1/3 pt-2">
            <Image src={niraina.src} alt="niraina" width={200} height={200} className="w-[200px] h-[200px] object-cover rounded-full border-2 border-white"/>
        </div>
        <div className="mt-6 text-white/80 w-full md:w-2/3 px-3">
          {t("description")}
          <div className="flex flex-col gap-2 py-2">
            <Link href="mailto: andriamiarintsoaniraina@gmail.com" className="flex items-center gap-1 text-[14px] md:text-[16px]">
              <Mail className="text-white text-[24px]"/> : andriamiarintsoaniraina@gmail.com
            </Link>
            <Link href="https://wa.me/261344408507" className="flex items-center gap-1 text-[14px] md:text-[16px]" target="_blank" rel="noopener noreferrer">
              <Phone className="text-white text-[24px]"/> : +261 34 44 085 07
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
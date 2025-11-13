"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { useTranslations } from "next-intl";

export function Experiences() {
  const t = useTranslations("experiences");
  return (
    <div className="container mx-auto px-3 pt-0 pb-32">
      <h2 className="text-white/80 font-bold text-4xl text-center pb-20">{t("title")}</h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <GridItem
          icon={<RiNumber1 className="h-5 w-5" />}
          title={t("description.wordpress.title")}
          description={t("description.wordpress.technologie")}
        />
        <GridItem
          icon={<RiNumber2 className="h-5 w-5" />}
          title={t("description.frontend.title")}
          description={t("description.frontend.technologie")}
        />
        <GridItem
          icon={<RiNumber3 className="h-5 w-5" />}
          title={t("description.cms.title")}
          description={t("description.cms.technologie")}
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    // 🔹 Hauteur augmentée ici : min-h-[18rem]
    <li className="min-h-[18rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-3 md:rounded-[1.5rem]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] p-6 shadow-sm md:p-6 dark:!bg-black dark:!border-neutral-800 dark:!text-white">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold tracking-[-0.04em] md:text-2xl text-white">
                {title}
              </h3>
              <h2 className="text-sm md:text-base text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

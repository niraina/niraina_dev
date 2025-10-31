import { Button } from "@/components/ui/button"
import bg from "../../assets/png/bg-first.png";
import niraina from "../../assets/png/niraina.png";
import Image from "next/image";
import style from "./hero.module.css";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations('hero');
  return (
    <div className="container mx-auto px-3">
      <div className="flex flex-wrap items-center justify-center gap-3 md:h-[87vh] h-full md:py-0 py-10">
        <div className={`${style["hero-title"]} md:w-[48%] w-full relative`}>
          <h1 className="md:text-[36px] text-[16px] leading-none font-bold animate__animated animate__fadeInUp">{t('title')} <br/><span className="text-[#00ADB5] md:text-[96px] text-[56px] pt-2">Niraina</span></h1>
          <h2 className="md:ms-2 ms-0 py-3 animate__animated animate__fadeInUp animate__delay-1s">{t('poste')}</h2>
          <div className="flex items-center gap-3 md:mt-12 mt-6 md:ms-2 ms-0 animate__animated animate__fadeInUp animate__delay-1s">
            <Button className="bg-[#00ADB5] text-white hover:bg-[#006db5]">{t('contact')}</Button>
            <Button className="bg-[#393E46BF] text-white hover:bg-[#393e46f1]">{t('cv')}</Button>
          </div>
        </div>
        <div className="md:w-[48%] w-full">
          <div className="bg-no-repeat bg-contain" style={{ backgroundImage: `url(${bg.src})` }}>
            <Image src={niraina} alt="Niraina" className="max-w-[400px] w-full h-full object-cover" priority/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import HeroAnimate from '../components/ui/hero-animate';
import { Navbar } from '@/components/ui/mini-navbar';

 
export default function HomePage() {
  const t = useTranslations('homepage');
  return (
    <div className='dark:bg-[#222831] bg-white flex flex-col'>
      <Navbar/>
      <HeroAnimate/>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('description')}</Link>
    </div>
  );
}
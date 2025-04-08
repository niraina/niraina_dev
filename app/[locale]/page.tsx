import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { Navbar } from '../components/nav-bar';
import Hero from '../components/ui/hero';
 
export default function HomePage() {
  const t = useTranslations('homepage');
  return (
    <div className='dark:bg-[#222831] bg-white flex flex-col'>
      <Navbar/>
      <Hero />
      <h1>{t('title')}</h1>
      <Link href="/about">{t('description')}</Link>
    </div>
  );
}
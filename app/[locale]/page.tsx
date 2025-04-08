import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { LanguageSwitcher } from '../components/language-switcher';
 
export default function HomePage() {
  const t = useTranslations('homepage');
  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('title')}</h1>
      <Link href="/about">{t('description')}</Link>
    </div>
  );
}
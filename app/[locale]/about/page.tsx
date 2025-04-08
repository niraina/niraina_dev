import { useTranslations } from 'next-intl';
import React from 'react'

const About = () => {
  const t = useTranslations('homepage');
  return (
    <div>{t('description')}</div>
  )
}

export default About
import { Skills } from '../components/skills';
import HeroAnimate from '../components/ui/hero-animate';
import { Navbar } from '@/components/ui/mini-navbar';

 
export default function HomePage() {
  return (
    <div className='dark:bg-[#222831] bg-white flex flex-col'>
      <Navbar/>
      <HeroAnimate/>
      <Skills/>
    </div>
  );
}
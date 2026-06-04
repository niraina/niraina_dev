import About from '../components/about';
import { Experiences } from '../components/experiences';
import { Skills } from '../components/skills';
import HeroAnimate from '../components/ui/hero-animate';
import { Navbar } from '@/app/components/nav-bar';
import Contact from '../components/contact';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-violet-50/50 via-white to-blue-50/30 dark:bg-[#08080f] dark:[background-image:none] text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      {/* Animated background orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full dark:opacity-30 opacity-10"
          style={{
            width: 500,
            height: 500,
            top: -150,
            left: -100,
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
            filter: "blur(80px)",
            animation: "drift1 20s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute rounded-full dark:opacity-30 opacity-10"
          style={{
            width: 400,
            height: 400,
            bottom: -100,
            right: -80,
            background: "radial-gradient(circle, #2563eb, transparent 70%)",
            filter: "blur(80px)",
            animation: "drift2 25s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute rounded-full dark:opacity-20 opacity-10"
          style={{
            width: 350,
            height: 350,
            top: "40%",
            left: "40%",
            background: "radial-gradient(circle, #6d28d9, transparent 70%)",
            filter: "blur(80px)",
            animation: "drift1 22s ease-in-out infinite alternate",
            animationDelay: "-4s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroAnimate />
        <div className="border-t border-gray-200 dark:border-white/[0.05]" />
        <About />
        <div className="border-t border-gray-200 dark:border-white/[0.05]" />
        <Skills />
        <div className="border-t border-gray-200 dark:border-white/[0.05]" />
        <Experiences />
        <div className="border-t border-gray-200 dark:border-white/[0.05]" />
        <Contact />
      </div>

      <style>{`
        @keyframes drift1 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(60px, 40px) scale(1.15); }
        }
        @keyframes drift2 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-60px, -40px) scale(1.1); }
        }
      `}</style>
    </div>
  );
}

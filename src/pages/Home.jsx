import { useEffect } from 'react';
import SakuraPetals from '../components/SakuraPetals';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealNodes = document.querySelectorAll('.reveal');
    revealNodes.forEach((node) => observer.observe(node));

    const handleParallax = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scrollY', `${scrollY}px`);
    };

    window.addEventListener('scroll', handleParallax, { passive: true });

    return () => {
      revealNodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="site-wrap">
      <SakuraPetals />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

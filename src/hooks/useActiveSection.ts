import { useState, useEffect, useRef } from 'react';

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');
  const sectionIds = useRef(SECTION_IDS);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // A thin band 40% down the viewport, so tall sections still register.
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.current.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

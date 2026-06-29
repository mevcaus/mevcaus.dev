import { useState, useEffect, useRef } from 'react';

const SECTION_IDS = ['hero', 'about', 'projects', 'skills', 'contact'];

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
      { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
    );

    sectionIds.current.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

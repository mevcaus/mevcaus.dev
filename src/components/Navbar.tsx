import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../utils/scroll';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const navLinksRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen || !navLinksRef.current) return;
    const focusableEls = navLinksRef.current.querySelectorAll<HTMLElement>('a, button');
    if (focusableEls.length === 0) return;
    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', trapFocus);
    first.focus();
    return () => document.removeEventListener('keydown', trapFocus);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToSection(id);
  };

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-inner">
        <a
          href="#hero"
          className="navbar-logo"
          onClick={(e) => handleLinkClick(e, 'hero')}
        >
          mevcaus.dev
        </a>

        <div
          className={`navbar-links${mobileOpen ? ' open' : ''}`}
          ref={navLinksRef}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar-link${activeSection === link.id ? ' active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              aria-current={activeSection === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Link to="/resume" className="navbar-resume-btn">
            Résumé ↗
          </Link>
        </div>

        <button
          className={`navbar-mobile-toggle${mobileOpen ? ' active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          ref={toggleRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

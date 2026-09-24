import { useState, useEffect } from 'react';
import { Menu, X, Sliders, ArrowUpRight } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface NavbarProps {
  profile: DeveloperProfile;
  onOpenPersonalize: () => void;
  isAdmin?: boolean;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills & Tools', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ profile, onOpenPersonalize, isAdmin = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Generate initials for monogram
  const initials =
    profile.name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'AS';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['hero', 'about', 'trust', 'services', 'skills', 'projects', 'certificates', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06040A]/90 backdrop-blur-md border-b border-[#6366F1]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand Logo */}
        <a
          href="#hero"
          id="nav-brand-logo"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#6366F1]/20 via-[#100D1C] to-[#0A0714] border border-[#6366F1]/30 group-hover:border-[#818CF8] transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_15%]"
              />
            ) : (
              <span className="font-semibold text-sm tracking-wider text-[#A5B4FC] group-hover:text-white transition-colors">
                {initials}
              </span>
            )}
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#06040A] z-10" />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-white tracking-tight group-hover:text-[#A5B4FC] transition-colors text-base sm:text-lg">
              {profile.name}
            </span>
            <span className="text-[11px] text-[#94A3B8] tracking-wider uppercase flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {profile.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-3 py-2 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg group ${
                  isActive
                    ? 'text-[#A5B4FC] font-semibold'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#818CF8] rounded-full shadow-[0_0_8px_#818CF8]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Info Personalizer button - only shown in Admin mode */}
          {isAdmin && (
            <button
              type="button"
              id="nav-personalize-button"
              onClick={onOpenPersonalize}
              title="Admin Mode: Edit institution, contact info, images or certificates"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#A5B4FC] bg-[#120F22] hover:bg-[#6366F1]/20 border border-[#818CF8] rounded-full transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(99,102,241,0.3)] animate-pulse"
            >
              <Sliders className="w-3.5 h-3.5 text-[#818CF8]" />
              <span className="inline">Admin: Edit Details</span>
            </button>
          )}

          {/* Primary CTA */}
          <a
            href="#contact"
            id="nav-cta-contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] cursor-pointer"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/[0.05] border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-[#6366F1]/20 bg-[#0B0816]/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#A5B4FC] bg-[#6366F1]/15 border-l-2 border-[#818CF8]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              {isAdmin && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPersonalize();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#A5B4FC] bg-[#120F22] border border-[#818CF8] rounded-xl"
                >
                  <Sliders className="w-4 h-4 text-[#818CF8]" />
                  Admin: Edit Details
                </button>
              )}

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl shadow-md"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { ArrowUp } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface FooterProps {
  profile: DeveloperProfile;
}

export default function Footer({ profile }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#040208] border-t border-[#6366F1]/20 py-14 overflow-hidden">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#6366F1]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.08]">
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-1.5">
              {profile.profileImage && (
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#6366F1]/30 bg-[#0E0B1A] shrink-0">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white tracking-tight">
                  {profile.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
              </div>
            </div>
            <p className="text-xs text-[#A5B4FC] font-medium tracking-wide">
              {profile.title}
            </p>
            <p className="text-xs text-[#64748B] max-w-sm mt-1">
              Building modern websites and digital solutions that help businesses establish a strong online presence.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs sm:text-sm font-medium text-[#94A3B8]">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#certificates" className="hover:text-white transition-colors">
              Certificates
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={scrollToTop}
              title="Scroll back to top"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F0C1E] hover:bg-[#6366F1]/20 border border-[#6366F1]/30 hover:border-[#818CF8] text-xs font-semibold text-[#A5B4FC] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Availability */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{profile.availability}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

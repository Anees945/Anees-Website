import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
  Layers,
  Database,
} from 'lucide-react';
import { DeveloperProfile } from '../types';

interface HeroSectionProps {
  profile: DeveloperProfile;
  onWorkTogetherClick: () => void;
  onViewWorkClick: () => void;
}

export default function HeroSection({
  profile,
  onWorkTogetherClick,
  onViewWorkClick,
}: HeroSectionProps) {
  const initials =
    profile.name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'AS';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top-center soft gradient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#6366F1]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Right side accent aura */}
        <div className="absolute top-1/3 right-5 lg:right-1/4 w-[480px] h-[480px] bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #A5B4FC 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full py-4">
          {/* Left Column: Personal Positioning & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#120F22] border border-[#6366F1]/30 w-fit mb-4 sm:mb-6 shadow-xs"
            >
              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-5 h-5 rounded-full object-cover object-center border border-emerald-400/60"
                />
              ) : (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              )}
              <span className="text-xs sm:text-sm font-medium tracking-wide text-[#A5B4FC]">
                {profile.title} &bull; Open for Business Projects
              </span>
            </motion.div>

            {/* Developer Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3"
            >
              {profile.name}
            </motion.h1>

            {/* Primary Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-[#F1F5F9]"
            >
              I Build{' '}
              <span className="bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                Modern Websites
              </span>{' '}
              &amp; Digital Solutions for Businesses
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal"
            >
              Responsive websites, custom web applications, e-commerce experiences, dashboards, and practical digital solutions designed around real business needs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12"
            >
              {/* Primary CTA */}
              <button
                type="button"
                id="hero-cta-view-projects"
                onClick={onViewWorkClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#6366F1] via-[#7C3AED] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                id="hero-cta-contact-me"
                onClick={onWorkTogetherClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#E2E8F0] bg-[#120F22] hover:bg-[#1A1633] border border-[#6366F1]/30 hover:border-[#818CF8] shadow-xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Let&apos;s Work Together</span>
                <ExternalLink className="w-4 h-4 text-[#A5B4FC]" />
              </button>
            </motion.div>

            {/* Core Capability Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-white/[0.08]"
            >
              <span className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mr-1">
                Specialties:
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#141026] text-[#CBD5E1] border border-white/5">
                Business Websites
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#141026] text-[#CBD5E1] border border-white/5">
                E-commerce
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#141026] text-[#CBD5E1] border border-white/5">
                Custom Dashboards
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#141026] text-[#CBD5E1] border border-white/5">
                WhatsApp &amp; AI
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Visual Card with Anees's Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center relative z-10"
          >
            <div className="relative w-full max-w-[440px] flex items-center justify-center">
              {/* Subtle aura behind card */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#6366F1]/20 via-[#8B5CF6]/15 to-transparent blur-3xl opacity-80 pointer-events-none" />

              {/* Developer Visual Card */}
              <div className="relative w-full rounded-3xl overflow-hidden border border-[#6366F1]/30 bg-[#0E0B1A] shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-3 sm:p-3.5">
                {/* Developer Photo Frame */}
                <div className="relative w-full aspect-[3/3.8] rounded-2xl overflow-hidden border border-white/10 group shadow-inner bg-[#141026]">
                  {profile.profileImage ? (
                    <img
                      src={profile.profileImage}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-[#A5B4FC]">
                      {initials}
                    </div>
                  )}

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B1A] via-[#0E0B1A]/40 to-transparent opacity-90" />

                  {/* Bottom Text Over Photo */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                        {profile.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#A5B4FC] tracking-wide mt-0.5">
                        {profile.title}
                      </p>
                      <p className="text-[11px] text-[#CBD5E1] mt-0.5">
                        {profile.location}
                      </p>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#CBD5E1]">
                      Pakistan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

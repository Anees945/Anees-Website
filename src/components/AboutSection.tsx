import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Check, ShieldCheck, ArrowRight, UserCheck, Target, Smartphone, Sliders, Zap } from 'lucide-react';
import { DeveloperProfile, TrustValueItem } from '../types';

interface AboutSectionProps {
  profile: DeveloperProfile;
  trustValues: TrustValueItem[];
  onExploreServicesClick: () => void;
}

export default function AboutSection({
  profile,
  trustValues,
  onExploreServicesClick,
}: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  const corePillars = [
    'Understand the business problem first, then build the right digital solution',
    'Responsive, mobile-friendly design across all screen viewports',
    'Custom web features, WhatsApp lead routing & booking systems',
    'Database-connected applications & manageable admin dashboards',
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-[#818CF8]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#818CF8]" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-[#818CF8]" />;
      case 'Zap':
      default:
        return <Zap className="w-5 h-5 text-[#818CF8]" />;
    }
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#080612] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120F24] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC] uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-[#818CF8]" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Solving Problems with{' '}
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
              Modern Web Development
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl">
            {profile.shortDescription}
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Personal Narrative & Approach */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Developer Bio Card with Photo */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#110D24] border border-[#6366F1]/20 mb-6 shadow-lg">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border border-[#6366F1]/40 shadow-md bg-[#16122C]">
                {profile.profileImage ? (
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-bold text-[#A5B4FC]">
                    AS
                  </div>
                )}
                <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#110D24]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                    {profile.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Open for Projects
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#A5B4FC]">
                  {profile.title}
                </p>
                <p className="text-xs text-[#94A3B8] mt-0.5 truncate">
                  {profile.location}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-base text-[#CBD5E1] leading-relaxed mb-6 font-normal">
              <p className="text-lg text-white font-medium">
                {profile.aboutIntro}
              </p>
              <p>
                {profile.aboutPhilosophy}
              </p>
              <p className="text-[#94A3B8]">
                {profile.aboutGrowth}
              </p>
            </div>

            {/* Philosophy Callout Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#110D22] border-l-4 border-[#6366F1] border-y border-r border-white/5 mb-6">
              <span className="text-[11px] font-mono text-[#818CF8] uppercase tracking-wider block mb-1">
                Development Philosophy
              </span>
              <p className="text-base sm:text-lg font-semibold text-white italic">
                &ldquo;{profile.corePhilosophy}&rdquo;
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {corePillars.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#110D20] border border-white/5"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-md bg-[#6366F1]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#A5B4FC]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#CBD5E1] font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                id="about-explore-services-btn"
                onClick={onExploreServicesClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-[#94A3B8] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Honest, Transparent &amp; Communication-Driven</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real Trust-Building Pillars (No Fake Stats) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0F0C1E] border border-[#6366F1]/25 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    What You Can Expect
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Foundational principles behind every project
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#1C1733] text-[#A5B4FC] border border-[#6366F1]/30">
                  Value Promise
                </span>
              </div>

              {/* 4 Trust Value Cards */}
              <div className="space-y-4">
                {trustValues.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#141026] border border-white/5 hover:border-[#6366F1]/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#6366F1]/15 flex items-center justify-center">
                          {getIcon(item.iconName)}
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A5B4FC] px-2 py-0.5 rounded-full bg-[#1D1736]">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pl-10">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

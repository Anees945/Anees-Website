import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  CheckCircle2,
  Check,
} from 'lucide-react';
import { SkillItem } from '../types';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export default function SkillsSection({
  skills,
}: SkillsSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'core' | 'features'>('all');

  const filteredSkills =
    activeTab === 'all'
      ? skills
      : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-[#080612]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6366F1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#130F26] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC] uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5 text-[#818CF8]" />
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Skills, Features &amp;{' '}
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Professional capabilities applied across modern business websites, e-commerce stores, custom databases, and automated workflows.
          </p>
        </div>

        {/* Core Skills & Solutions */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Web Development Capabilities</span>
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Core development skills and custom interactive features
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#110D20] border border-white/5">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#6366F1] text-white shadow-xs'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                All ({skills.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('core')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'core'
                    ? 'bg-[#6366F1] text-white shadow-xs'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Core Development
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('features')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'features'
                    ? 'bg-[#6366F1] text-white shadow-xs'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Features &amp; Solutions
              </button>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="p-4 rounded-2xl bg-[#0F0C1E] border border-[#6366F1]/20 hover:border-[#818CF8]/60 transition-all duration-200 flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#16112C] border border-white/5 flex items-center justify-center shrink-0 text-[#818CF8] group-hover:bg-[#6366F1]/20 group-hover:text-white transition-colors">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#A5B4FC] transition-colors leading-snug">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] text-[#64748B] font-mono">
                    {skill.category === 'core' ? 'Development' : 'Solution'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

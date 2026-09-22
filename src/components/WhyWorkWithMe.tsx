import { motion } from 'motion/react';
import { Palette, Smartphone, TrendingUp, Cpu, Sparkles } from 'lucide-react';
import { ValuePropItem } from '../types';

interface WhyWorkWithMeProps {
  items: ValuePropItem[];
}

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Smartphone,
  TrendingUp,
  Cpu,
};

export default function WhyWorkWithMe({ items }: WhyWorkWithMeProps) {
  return (
    <section id="why-me" className="relative py-20 lg:py-28 bg-[#05030A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111018] border border-[#7C3AED]/30 text-xs font-semibold text-[#C4B5FD] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#9B5CFF]" />
            Core Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Why Work <span className="bg-gradient-to-r from-[#C4B5FD] via-[#9B5CFF] to-[#7C3AED] bg-clip-text text-transparent">With Me</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA]">
            Combining enterprise-grade technical reliability with boutique creative agency polish.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const IconComp = iconMap[item.iconName] || Palette;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#111018] border border-[#7C3AED]/20 hover:border-[#9B5CFF]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(5,3,10,0.6)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.2)] group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0B0714] border border-[#7C3AED]/30 group-hover:border-[#9B5CFF] group-hover:bg-[#7C3AED]/20 flex items-center justify-center text-[#C4B5FD] group-hover:text-white transition-all duration-300 mb-5 shadow-xs">
                    <IconComp className="w-5 h-5 text-[#9B5CFF] group-hover:text-[#C4B5FD]" />
                  </div>

                  <span className="text-[11px] font-mono font-semibold tracking-wider text-[#9B5CFF] uppercase mb-1 block">
                    {item.highlightMetric}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C4B5FD] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] text-[#71717A] group-hover:text-[#C4B5FD] transition-colors font-medium">
                  <span>Guaranteed Standards</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

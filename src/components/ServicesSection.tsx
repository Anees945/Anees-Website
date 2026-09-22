import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  ShoppingBag,
  RefreshCw,
  Sliders,
  LayoutDashboard,
  Layers,
  Sparkles,
  ArrowUpRight,
  CheckCircle,
  X,
  Building2,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectServiceForContact: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  ShoppingBag,
  RefreshCw,
  Sliders,
  LayoutDashboard,
  Layers,
  Sparkles,
};

export default function ServicesSection({
  services,
  onSelectServiceForContact,
}: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#06040C]">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120E22] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC] uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#818CF8]" />
            What I Build
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Services &amp;{' '}
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Practical web development, e-commerce, custom administrative dashboards, and automation engineered around real business operations.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Briefcase;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedService(service)}
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-[#0F0C1E] border border-[#6366F1]/25 hover:border-[#818CF8]/70 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] overflow-hidden"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#818CF8] px-3 py-1 rounded-full bg-[#16112C] border border-[#6366F1]/30">
                      {service.number}
                    </span>

                    <div className="w-11 h-11 rounded-2xl bg-[#16112C] border border-[#6366F1]/30 group-hover:border-[#818CF8] flex items-center justify-center text-[#A5B4FC] group-hover:text-white group-hover:bg-[#6366F1]/30 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-[#A5B4FC] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5 font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#818CF8] group-hover:text-[#A5B4FC] transition-colors">
                    Click to view deliverables
                  </span>

                  <div className="w-8 h-8 rounded-full bg-[#16112C] border border-white/10 group-hover:border-[#818CF8] group-hover:bg-[#6366F1] flex items-center justify-center text-[#94A3B8] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          id="service-detail-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-[#0F0C1E] border border-[#6366F1]/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              id="service-modal-close-btn"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#94A3B8] hover:text-white bg-[#16112C] border border-white/10 hover:border-[#818CF8] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono text-xs font-bold text-[#818CF8] px-2.5 py-0.5 rounded-full bg-[#16112C] border border-[#6366F1]/30">
                Service #{selectedService.number}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {selectedService.title}
            </h3>

            <p className="text-sm text-[#CBD5E1] leading-relaxed mb-5">
              {selectedService.fullDesc}
            </p>

            {/* Features */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A5B4FC] mb-2.5">
                Key Deliverables &amp; Capabilities:
              </h4>
              <div className="space-y-2">
                {selectedService.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal for */}
            <div className="p-3.5 rounded-2xl bg-[#141026] border border-white/5 mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#A5B4FC] mb-1">
                <Building2 className="w-3.5 h-3.5 text-[#818CF8]" />
                <span>Ideal For</span>
              </div>
              <p className="text-xs text-[#94A3B8]">{selectedService.idealFor}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-medium text-[#94A3B8] hover:text-white"
              >
                Close
              </button>
              <button
                type="button"
                id="service-modal-inquire-btn"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForContact(title);
                }}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] shadow-[0_0_20px_rgba(99,102,241,0.4)] cursor-pointer transition-all"
              >
                Discuss This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

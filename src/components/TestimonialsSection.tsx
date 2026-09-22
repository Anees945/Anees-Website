import { motion } from 'motion/react';
import { MessageSquareQuote, Star, ShieldCheck, HeartHandshake, PlusCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  onInquireProject: () => void;
}

export default function TestimonialsSection({ onInquireProject }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="relative py-20 lg:py-24 bg-[#080612] border-t border-white/[0.04] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6366F1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#130F26] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC] uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#818CF8]" />
            Client Feedback &amp; Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Reviews &amp;{' '}
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
              Client Feedback
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Genuine, verified client reviews and project testimonials will be featured here as completed work is delivered.
          </p>
        </div>

        {/* Clean, authentic placeholder box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#0F0C1E] border border-[#6366F1]/30 text-center shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#181330] border border-[#6366F1]/30 text-[#818CF8] flex items-center justify-center mx-auto mb-4">
            <HeartHandshake className="w-7 h-7" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            Committed to Quality &amp; Transparent Delivery
          </h3>

          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed mb-6">
            In accordance with honest presentation standards, fictional reviews or manufactured testimonials are never used. Each partnership is founded on transparent communication, reliable milestones, and solving real business problems.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs text-[#CBD5E1] pt-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Genuine Project Reviews</span>
            </div>
            <span className="text-[#64748B]">•</span>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400" />
              <span>Feedback added upon client signoff</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

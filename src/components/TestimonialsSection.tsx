import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MessageSquareQuote,
  Star,
  ShieldCheck,
  PlusCircle,
  CheckCircle2,
  Trash2,
  Sparkles,
  MapPin,
  Calendar,
  Send,
} from 'lucide-react';
import { ReviewItem, DeveloperProfile } from '../types';
import AddReviewModal from './AddReviewModal';

interface TestimonialsSectionProps {
  reviews: ReviewItem[];
  onAddReview: (review: ReviewItem) => void;
  onDeleteReview?: (reviewId: string) => void;
  profile: DeveloperProfile;
  isAdmin?: boolean;
  onInquireProject: () => void;
}

export default function TestimonialsSection({
  reviews,
  onAddReview,
  onDeleteReview,
  profile,
  isAdmin = false,
  onInquireProject,
}: TestimonialsSectionProps) {
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
      : '5.0';

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-28 bg-[#080612] border-t border-white/[0.04] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#6366F1]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#130F26] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC] uppercase tracking-wider mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#818CF8]" />
              Client Feedback &amp; Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Reviews &amp;{' '}
              <span className="bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8]">
              Genuine feedback from businesses, founders, and clients who trusted Anees Shahbaz for their website and digital solutions.
            </p>
          </div>

          {/* Action Header: Rating summary + Add Review button */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <div className="px-4 py-2 rounded-2xl bg-[#120E24] border border-white/10 flex items-center gap-2.5">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="ml-1 text-sm font-bold text-white">{averageRating}</span>
              </div>
              <span className="text-xs text-[#94A3B8]">
                ({reviews.length} Verified {reviews.length === 1 ? 'Review' : 'Reviews'})
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsAddReviewModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all cursor-pointer hover:scale-[1.02]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, idx) => {
            const initials =
              review.name
                .split(' ')
                .filter(Boolean)
                .map((n) => n[0])
                .join('')
                .slice(0, 2)
                .toUpperCase() || 'CL';

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="group relative rounded-3xl bg-[#100C22] border border-[#6366F1]/25 hover:border-[#818CF8]/60 p-6 sm:p-7 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top Card Bar: Rating Stars & Project Type */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]'
                              : 'text-white/20'
                          }`}
                        />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  {review.projectType && (
                    <div className="text-[11px] font-mono text-[#818CF8] tracking-wide mb-3">
                      {review.projectType}
                    </div>
                  )}

                  {/* Review Content */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed italic mb-6">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6366F1]/30 via-[#8B5CF6]/30 to-[#A5B4FC]/20 border border-[#6366F1]/40 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-inner">
                      {initials}
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {review.name}
                      </h4>
                      <p className="text-[11px] text-[#94A3B8] truncate">
                        {review.role}
                        {review.companyOrProject ? ` • ${review.companyOrProject}` : ''}
                      </p>
                      {review.location && (
                        <p className="text-[10px] text-[#64748B] flex items-center gap-1 mt-0.5">
                          <MapPin className="w-2.5 h-2.5" />
                          <span>{review.location}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Admin Delete Action */}
                  {isAdmin && onDeleteReview && (
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Delete review from "${review.name}"?`)) {
                          onDeleteReview(review.id);
                        }
                      }}
                      className="p-1.5 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors cursor-pointer"
                      title="Admin: Delete Review"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner with Invitation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#110D26] via-[#161033] to-[#110D26] border border-[#6366F1]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Have you worked with Anees Shahbaz?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl">
              We value honest, transparent client relationships. Leave your feedback to help other businesses make confident decisions.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center shrink-0">
            <button
              type="button"
              onClick={() => setIsAddReviewModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer"
            >
              + Give Review
            </button>
            <button
              type="button"
              onClick={onInquireProject}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#CBD5E1] hover:text-white border border-white/10 text-xs sm:text-sm font-medium transition-all cursor-pointer"
            >
              Start New Project
            </button>
          </div>
        </motion.div>
      </div>

      {/* Add Review Modal */}
      <AddReviewModal
        isOpen={isAddReviewModalOpen}
        onClose={() => setIsAddReviewModalOpen(false)}
        onSubmitReview={onAddReview}
        profile={profile}
      />
    </section>
  );
}

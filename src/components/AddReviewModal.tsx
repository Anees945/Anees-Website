import React, { useState } from 'react';
import {
  X,
  Star,
  Check,
  Send,
  MessageSquare,
  ShieldCheck,
  User,
  Building,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { ReviewItem, DeveloperProfile } from '../types';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: ReviewItem) => void;
  profile: DeveloperProfile;
}

const ratingLabels: Record<number, string> = {
  5: '⭐⭐⭐⭐⭐ 5.0 - Outstanding / Highly Recommended',
  4: '⭐⭐⭐⭐ 4.0 - Very Good & Professional',
  3: '⭐⭐⭐ 3.0 - Good Work',
  2: '⭐⭐ 2.0 - Satisfactory',
  1: '⭐ 1.0 - Needs Improvement',
};

const projectTypeOptions = [
  'E-Commerce & Online Store',
  'Business Landing Page & Portfolio',
  'Database-Connected Web App',
  'WordPress Customization & Optimization',
  'WhatsApp Automation & Lead Form',
  'API & Web Automation',
  'Other Custom Development',
];

export default function AddReviewModal({
  isOpen,
  onClose,
  onSubmitReview,
  profile,
}: AddReviewModalProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [companyOrProject, setCompanyOrProject] = useState('');
  const [projectType, setProjectType] = useState(projectTypeOptions[0]);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shareToWhatsApp, setShareToWhatsApp] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !content.trim()) {
      return;
    }

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Client',
      companyOrProject: companyOrProject.trim() || undefined,
      projectType: projectType,
      rating: rating,
      content: content.trim(),
      date: formattedDate,
      verified: true,
      location: location.trim() || undefined,
    };

    onSubmitReview(newReview);
    setIsSubmitted(true);

    if (shareToWhatsApp) {
      const cleanWhatsapp = profile.whatsapp.replace(/[^0-9]/g, '');
      const starsText = '⭐'.repeat(rating);
      const message = `*New Client Review for ${profile.name}*
${starsText} (${rating}/5 Stars)

*Client Name:* ${name.trim()}
*Role / Project:* ${role.trim() || 'Client'}${companyOrProject.trim() ? ` at ${companyOrProject.trim()}` : ''}
*Service:* ${projectType}
${location.trim() ? `*Location:* ${location.trim()}\n` : ''}
*Review:*
"${content.trim()}"

Thank you for your excellent web development service!`;

      const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(message)}`;
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 500);
    }

    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setRole('');
      setCompanyOrProject('');
      setContent('');
      setLocation('');
      setRating(5);
      onClose();
    }, 1800);
  };

  return (
    <div
      id="add-review-modal-overlay"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl my-6 p-6 sm:p-8 rounded-3xl bg-[#0F0C1E] border border-[#6366F1]/40 shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#94A3B8] hover:text-white bg-[#141026] border border-white/10 hover:border-[#818CF8] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Thank You for Your Review!</h3>
            <p className="text-sm text-[#94A3B8] max-w-sm mx-auto">
              Aapka review website par add ho gaya hai aur display ho raha hai. Your genuine feedback means the world to our continuous growth!
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#181330] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC] w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#818CF8]" />
              <span>Leave Client Feedback</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1.5">
              Share Your Experience
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mb-6">
              Apna feedback aur review dein taake future clients aapka experience dekh sakein.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Interactive Star Rating */}
              <div className="p-4 rounded-2xl bg-[#141026] border border-[#6366F1]/20 space-y-2">
                <label className="block text-xs font-semibold text-white">
                  Your Rating *
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 text-2xl transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || rating) >= star
                            ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                            : 'text-[#475569]'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-semibold text-amber-300 ml-2">
                    {ratingLabels[hoverRating || rating]}
                  </span>
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Client Name */}
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#818CF8]" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
                  />
                </div>

                {/* Role / Business */}
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#818CF8]" />
                    <span>Role / Business Name</span>
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Founder, Retail Store"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
                  />
                </div>

                {/* Project / Service Type */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Project / Service Provided
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#818CF8]"
                  >
                    {projectTypeOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#141026] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location (City / Country) */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#818CF8]" />
                    <span>Location (Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Lahore, Pakistan or Dubai, UAE"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
                  />
                </div>

                {/* Review Comment */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#818CF8]" />
                    <span>Your Review &amp; Feedback *</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Describe how your website turned out, communication, delivery, responsiveness, or how it helped your business..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#818CF8] resize-none"
                  />
                </div>
              </div>

              {/* WhatsApp notification toggle */}
              <div className="p-3.5 rounded-xl bg-[#0D0A1C] border border-emerald-500/20 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="whatsapp-share"
                  checked={shareToWhatsApp}
                  onChange={(e) => setShareToWhatsApp(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-500 bg-[#1A1633] border-white/20 focus:ring-0 cursor-pointer"
                />
                <label
                  htmlFor="whatsapp-share"
                  className="text-xs text-[#CBD5E1] cursor-pointer select-none flex-1"
                >
                  <span className="font-semibold text-emerald-400">Also send copy to Anees via WhatsApp</span>
                  <span className="block text-[11px] text-[#94A3B8]">
                    Opens WhatsApp with your review message ready to send
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-[#94A3B8] hover:text-white px-3 py-2 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#6366F1]/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Review</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

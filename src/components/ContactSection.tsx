import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  MapPin,
  Clock,
  Sparkles,
  Edit3,
} from 'lucide-react';
import { DeveloperProfile } from '../types';

interface ContactSectionProps {
  profile: DeveloperProfile;
  initialServiceSelection?: string;
  onOpenManage?: () => void;
  isAdmin?: boolean;
}

export default function ContactSection({
  profile,
  initialServiceSelection = '',
  onOpenManage,
  isAdmin = false,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneOrWhatsApp: '',
    projectType: initialServiceSelection || 'Business Website Development',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const projectTypes = [
    'Business Website Development',
    'E-commerce Website Development',
    'Website Redesign',
    'Custom Website Features (Booking, WhatsApp, Forms)',
    'Admin Dashboard Development',
    'Custom Web Application',
    'WhatsApp AI Business Assistant',
    'Other Web Inquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  // WhatsApp link preparation
  const sanitizedWhatsApp = profile.whatsapp.replace(/[^0-9]/g, '');
  const hasValidWhatsAppNumber = sanitizedWhatsApp.length >= 7;
  const whatsAppHref = hasValidWhatsAppNumber
    ? `https://wa.me/${sanitizedWhatsApp}?text=Hi%20${encodeURIComponent(
        profile.name
      )},%20I'd%20like%20to%20discuss%20a%20website%20project.`
    : undefined;

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#05030A] overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#6366F1]/8 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#8B5CF6]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120E24] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC] uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#818CF8]" />
            Let&apos;s Build Together
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Have a project in mind?{' '}
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
              Let&apos;s Discuss It
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Get in touch to build a modern website, custom web application, or automated solution tailored to your business needs.
          </p>
        </div>

        {/* Form & Direct Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Details & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0F0C1E] border border-[#6366F1]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Direct Communication
                </h3>
                {isAdmin && onOpenManage && (
                  <button
                    type="button"
                    onClick={onOpenManage}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#A5B4FC] hover:text-white px-2.5 py-1 rounded-lg bg-[#181330] border border-[#818CF8] transition-colors cursor-pointer shadow-xs"
                    title="Admin Mode: Edit contact placeholders"
                  >
                    <Edit3 className="w-3 h-3 text-[#818CF8]" />
                    <span>Admin: Edit Contact</span>
                  </button>
                )}
              </div>

              <p className="text-xs text-[#94A3B8] mb-6">
                Reach out directly via WhatsApp, email, or schedule an initial project conversation.
              </p>

              <div className="space-y-3.5">
                {/* WhatsApp Option */}
                {hasValidWhatsAppNumber ? (
                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noreferrer"
                    id="direct-contact-whatsapp"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-[#141026] border border-[#6366F1]/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                          WhatsApp Direct Message
                        </p>
                        <p className="text-xs text-[#94A3B8]">{profile.whatsapp}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-emerald-400 transition-colors" />
                  </a>
                ) : (
                  <div
                    onClick={isAdmin && onOpenManage ? onOpenManage : undefined}
                    className={`group flex items-center justify-between p-4 rounded-2xl bg-[#141026] border border-[#6366F1]/20 transition-all ${
                      isAdmin ? 'border-dashed border-[#6366F1]/40 hover:border-[#818CF8] cursor-pointer' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-[#A5B4FC] transition-colors">
                          WhatsApp ({profile.whatsapp})
                        </p>
                        <p className="text-[11px] text-[#94A3B8]">
                          {isAdmin ? 'Admin Mode: Click to configure your number' : 'WhatsApp Contact'}
                        </p>
                      </div>
                    </div>
                    {isAdmin && <Edit3 className="w-4 h-4 text-[#818CF8]" />}
                  </div>
                )}

                {/* Email Option */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#141026] border border-[#6366F1]/20 hover:border-[#818CF8]/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1B1533] text-[#A5B4FC] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="max-w-[170px] sm:max-w-[220px]">
                      <p className="text-sm font-bold text-white">Email</p>
                      <p className="text-xs text-[#94A3B8] truncate">{profile.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(profile.email, 'email')}
                      title="Copy Email Address"
                      className="p-2 rounded-lg bg-[#0F0C1E] hover:bg-[#6366F1]/30 text-[#94A3B8] hover:text-white border border-white/5 transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <a
                      href={`mailto:${profile.email}`}
                      className="p-2 rounded-lg bg-[#6366F1]/20 hover:bg-[#6366F1] text-[#A5B4FC] hover:text-white transition-colors"
                      title="Compose Email"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone Option */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#141026] border border-[#6366F1]/20 hover:border-[#818CF8]/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1B1533] text-[#A5B4FC] flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Phone</p>
                      <p className="text-xs text-[#94A3B8]">{profile.phone}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(profile.phone, 'phone')}
                    title="Copy Phone Number"
                    className="p-2 rounded-lg bg-[#0F0C1E] hover:bg-[#6366F1]/30 text-[#94A3B8] hover:text-white border border-white/5 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="pt-5 mt-5 border-t border-white/[0.08] space-y-2 text-xs text-[#CBD5E1]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#818CF8] shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{profile.availability}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#0F0C1E] border border-[#6366F1]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. I have received your message regarding <span className="text-[#A5B4FC] font-semibold">{formData.projectType}</span> and will review it promptly.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phoneOrWhatsApp: '',
                          projectType: 'Business Website Development',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#94A3B8] hover:text-white bg-[#141026] border border-white/10 hover:border-[#818CF8] transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>

                    {hasValidWhatsAppNumber && (
                      <a
                        href={whatsAppHref}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md inline-flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Continue on WhatsApp</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ) : (
                <form id="project-contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ali Ahmed"
                        className="w-full px-4 py-3 rounded-2xl bg-[#141026] border border-white/10 focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] text-white text-sm placeholder-[#64748B] outline-none transition-all"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ali@business.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#141026] border border-white/10 focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] text-white text-sm placeholder-[#64748B] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp / Phone Field */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1.5">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="text"
                        id="contact-phone"
                        value={formData.phoneOrWhatsApp}
                        onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-4 py-3 rounded-2xl bg-[#141026] border border-white/10 focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] text-white text-sm placeholder-[#64748B] outline-none transition-all"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="contact-project-type" className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1.5">
                        Project Interest *
                      </label>
                      <select
                        id="contact-project-type"
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#141026] border border-white/10 focus:border-[#818CF8] text-white text-sm outline-none transition-all cursor-pointer"
                      >
                        {projectTypes.map((type, idx) => (
                          <option key={idx} value={type} className="bg-[#0F0C1E] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1.5">
                      Project Details / Business Requirements *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your business, the website or tool you want to build, and any specific features you need..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#141026] border border-white/10 focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8] text-white text-sm placeholder-[#64748B] outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Processing Inquiry...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#64748B]">
                    Honest, direct communication. No sales pressure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

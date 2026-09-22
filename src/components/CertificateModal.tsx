import { useState, useRef } from 'react';
import { X, Check, Copy, ShieldCheck, Calendar, Award, User, Hash, Upload, Image as ImageIcon, Trash2 } from 'lucide-react';
import { CertificateItem } from '../types';
import DigiSkillsCertificateSVG from './DigiSkillsCertificateSVG';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
  onUpdateCertificateImage?: (certificateId: string, imageUrl: string) => void;
  isAdmin?: boolean;
}

export default function CertificateModal({
  certificate,
  onClose,
  onUpdateCertificateImage,
  isAdmin = false,
}: CertificateModalProps) {
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!certificate) return null;

  const handleCopyId = () => {
    if (certificate.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUpdateCertificateImage) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onUpdateCertificateImage(certificate.id, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      id="certificate-modal-overlay"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-6 bg-[#0E0C17] border border-[#6366F1]/30 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0A0713]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {certificate.title}
              </h3>
              <p className="text-xs text-[#A1A1AA]">{certificate.issuingOrganization}</p>
            </div>
          </div>

          <button
            type="button"
            id="close-cert-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Preview Visual */}
        <div className="p-4 sm:p-6 bg-[#06040A]">
          {/* Action toolbar to upload/change/remove certificate image - only for Admin */}
          {isAdmin && onUpdateCertificateImage && (
            <div className="max-w-3xl mx-auto mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
              <span className="text-xs text-[#94A3B8] flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-[#818CF8]" />
                <span>
                  {certificate.image
                    ? 'Admin: Custom certificate image uploaded'
                    : 'Admin: Showing digital vector badge (You can upload your real certificate photo)'}
                </span>
              </span>

              <div className="flex items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#6366F1] hover:bg-[#4F46E5] shadow-sm transition-all cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{certificate.image ? 'Change Certificate Image' : 'Upload Real Certificate Image'}</span>
                </button>

                {certificate.image && (
                  <button
                    type="button"
                    onClick={() => onUpdateCertificateImage(certificate.id, '')}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-rose-500/20 transition-all cursor-pointer"
                    title="Remove custom image and revert to verified digital badge"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          )}

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
            {certificate.image ? (
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto block"
              />
            ) : (
              <DigiSkillsCertificateSVG
                recipientName={certificate.recipientName}
                courseTitle="WORDPRESS"
                batch="DSTP3.0-Batch-02 Dec 2025-Mar 2026"
                issueDate={certificate.issueDate}
                certificateId={certificate.credentialId}
                verificationUrl={certificate.verificationUrl || 'https://digiskills.pk/verify'}
              />
            )}
          </div>
        </div>

        {/* Extracted Certificate Verification Credentials */}
        <div className="p-6 bg-[#0E0C17] border-t border-white/[0.08] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-2xl bg-[#141122] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] mb-1">
                <User className="w-3.5 h-3.5" />
                <span>Recipient Name</span>
              </div>
              <p className="text-sm font-bold text-white">{certificate.recipientName}</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#141122] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>Course Title</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white line-clamp-1" title={certificate.courseTitle}>
                {certificate.courseTitle}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#141122] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Issue Date</span>
              </div>
              <p className="text-sm font-bold text-white">{certificate.issueDate}</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#141122] border border-white/[0.06] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] mb-1">
                  <Hash className="w-3.5 h-3.5" />
                  <span>Certificate ID</span>
                </div>
                <p className="text-sm font-mono font-bold text-emerald-400">
                  {certificate.credentialId || 'N/A'}
                </p>
              </div>

              {certificate.credentialId && (
                <button
                  type="button"
                  onClick={handleCopyId}
                  title="Copy Certificate ID"
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-emerald-500/20 text-[#A1A1AA] hover:text-emerald-300 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Verified Government of Pakistan &amp; DigiSkills Training Program Credential</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#1A1535] hover:bg-[#282050] border border-white/10 hover:border-[#818CF8] transition-colors cursor-pointer"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

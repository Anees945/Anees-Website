import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Upload,
  Image as ImageIcon,
  Award,
  ShieldCheck,
  Check,
  Trash2,
  Calendar,
  Hash,
  Building2,
  User,
  ExternalLink,
} from 'lucide-react';
import { CertificateItem } from '../types';

interface CertificateEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: CertificateItem | null;
  onSave: (cert: CertificateItem) => void;
  onDelete?: (certId: string) => void;
  defaultRecipientName?: string;
}

export default function CertificateEditModal({
  isOpen,
  onClose,
  certificate,
  onSave,
  onDelete,
  defaultRecipientName = 'MUHAMMAD ANEES',
}: CertificateEditModalProps) {
  const [formData, setFormData] = useState<CertificateItem>({
    id: `cert-${Date.now()}`,
    title: 'Training Certificate',
    courseTitle: '',
    issuingOrganization: '',
    recipientName: defaultRecipientName,
    issueDate: new Date().toLocaleDateString('en-GB'),
    credentialId: '',
    verificationUrl: '',
    isVerified: true,
    isPlaceholder: false,
    image: '',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (certificate) {
      setFormData({
        ...certificate,
        recipientName: certificate.recipientName || defaultRecipientName,
        title: certificate.title.includes('[') ? 'Training Certificate' : certificate.title,
        courseTitle: certificate.courseTitle.includes('[') ? '' : certificate.courseTitle,
        issuingOrganization: certificate.issuingOrganization.includes('[') ? '' : certificate.issuingOrganization,
        issueDate: certificate.issueDate.includes('[') ? new Date().toLocaleDateString('en-GB') : certificate.issueDate,
        credentialId: certificate.credentialId.includes('[') ? '' : certificate.credentialId,
        isPlaceholder: false,
      });
    } else {
      setFormData({
        id: `cert-${Date.now()}`,
        title: 'Training Certificate',
        courseTitle: '',
        issuingOrganization: '',
        recipientName: defaultRecipientName,
        issueDate: new Date().toLocaleDateString('en-GB'),
        credentialId: '',
        verificationUrl: '',
        isVerified: true,
        isPlaceholder: false,
        image: '',
      });
    }
  }, [certificate, isOpen, defaultRecipientName]);

  if (!isOpen) return null;

  const handleImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const dataUrl = loadEvent.target?.result as string;
      if (dataUrl) {
        setFormData((prev) => ({
          ...prev,
          image: dataUrl,
          isPlaceholder: false,
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.courseTitle.trim() && !formData.image) {
      alert('Please provide either a Course Title or upload a Certificate Image.');
      return;
    }

    onSave({
      ...formData,
      title: formData.title.trim() || 'Training Certificate',
      courseTitle: formData.courseTitle.trim() || 'Certified Professional',
      issuingOrganization: formData.issuingOrganization.trim() || 'Verified Training Program',
      isPlaceholder: false,
    });
    onClose();
  };

  return (
    <div
      id="certificate-edit-modal-overlay"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl my-6 p-6 sm:p-8 rounded-3xl bg-[#0F0C1E] border border-[#6366F1]/40 shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto"
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

        {/* Header */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#181330] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC] w-fit mb-3">
          <Award className="w-3.5 h-3.5 text-[#818CF8]" />
          <span>Admin • {certificate && !certificate.isPlaceholder ? 'Edit Certificate' : 'Add New Certificate'}</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-1.5">
          {certificate && !certificate.isPlaceholder ? 'Update Certificate Details' : 'Add Your Second Certificate'}
        </h3>
        <p className="text-xs sm:text-sm text-[#94A3B8] mb-6">
          Upload your certificate image and fill in the details. Once saved, it will be published and visible on your portfolio.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Certificate Image Upload Box */}
          <div className="p-4 rounded-2xl bg-[#141026] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-[#818CF8]" />
                <span>Certificate Photo / Scan</span>
              </span>
              {formData.image && (
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Image Ready
                </span>
              )}
            </div>

            {formData.image ? (
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0A0714] aspect-[16/10] max-h-56">
                <img
                  src={formData.image}
                  alt="Certificate Preview"
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-2.5 py-1 rounded-lg bg-[#0E0B1A]/90 hover:bg-[#1E1638] text-white text-xs font-medium border border-white/15 transition-colors cursor-pointer"
                  >
                    Change Image
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, image: '' }))}
                    className="p-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs border border-rose-500/30 transition-colors cursor-pointer"
                    title="Remove image"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="rounded-xl border-2 border-dashed border-[#6366F1]/30 hover:border-[#818CF8] bg-[#0E0B1A]/60 p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1633] border border-white/10 flex items-center justify-center text-[#818CF8] mb-2 group-hover:scale-105 transition-transform">
                  <Upload className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold text-white mb-1">
                  Click to Upload Certificate Photo / PDF Scan
                </p>
                <p className="text-[11px] text-[#94A3B8]">
                  Supports JPG, PNG, WEBP (Clear image will be shown on portfolio)
                </p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              onChange={handleImageFile}
              className="hidden"
            />
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Course / Program Title */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-white mb-1.5">
                Course / Program Title *
              </label>
              <input
                type="text"
                required
                value={formData.courseTitle}
                onChange={(e) => setFormData((prev) => ({ ...prev, courseTitle: e.target.value }))}
                placeholder="e.g. Responsive Web Design or WordPress Development"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
              />
            </div>

            {/* Issuing Organization */}
            <div>
              <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3 h-3 text-[#818CF8]" />
                <span>Issuing Organization *</span>
              </label>
              <input
                type="text"
                required
                value={formData.issuingOrganization}
                onChange={(e) => setFormData((prev) => ({ ...prev, issuingOrganization: e.target.value }))}
                placeholder="e.g. DigiSkills.pk, Coursera, Meta, etc."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
              />
            </div>

            {/* Recipient Name */}
            <div>
              <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                <User className="w-3 h-3 text-[#818CF8]" />
                <span>Recipient Name</span>
              </label>
              <input
                type="text"
                value={formData.recipientName}
                onChange={(e) => setFormData((prev) => ({ ...prev, recipientName: e.target.value }))}
                placeholder="MUHAMMAD ANEES"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
              />
            </div>

            {/* Issue Date */}
            <div>
              <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-[#818CF8]" />
                <span>Issue Date</span>
              </label>
              <input
                type="text"
                value={formData.issueDate}
                onChange={(e) => setFormData((prev) => ({ ...prev, issueDate: e.target.value }))}
                placeholder="e.g. 14/03/2026 or March 2026"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
              />
            </div>

            {/* Credential ID */}
            <div>
              <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                <Hash className="w-3 h-3 text-[#818CF8]" />
                <span>Credential / Certificate ID</span>
              </label>
              <input
                type="text"
                value={formData.credentialId}
                onChange={(e) => setFormData((prev) => ({ ...prev, credentialId: e.target.value }))}
                placeholder="e.g. 736DY67MK (optional)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
              />
            </div>

            {/* Verification Link (Optional) */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                <ExternalLink className="w-3 h-3 text-[#818CF8]" />
                <span>Verification URL (Optional)</span>
              </label>
              <input
                type="url"
                value={formData.verificationUrl}
                onChange={(e) => setFormData((prev) => ({ ...prev, verificationUrl: e.target.value }))}
                placeholder="https://digiskills.pk/verify or platform verification link"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-xs sm:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            {certificate && certificate.id !== 'cert-1' && onDelete ? (
              <button
                type="button"
                onClick={() => {
                  if (confirm('Are you sure you want to delete this certificate?')) {
                    onDelete(certificate.id);
                    onClose();
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-[#94A3B8] hover:text-white px-3 py-2 transition-colors cursor-pointer"
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white text-xs sm:text-sm font-semibold shadow-lg transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Save &amp; Show on Portfolio</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

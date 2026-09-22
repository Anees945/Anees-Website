import { useState, useEffect, useRef } from 'react';
import { X, Check, RotateCcw, Sparkles, User, Mail, Phone, MapPin, Calendar, Globe, Upload, Image as ImageIcon, Trash2, FolderGit2, Award } from 'lucide-react';
import { DeveloperProfile, ProjectItem, CertificateItem } from '../types';
import { initialProfile } from '../data/portfolioData';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DeveloperProfile;
  projectsList?: ProjectItem[];
  certificatesList?: CertificateItem[];
  onSaveProfile: (updatedProfile: DeveloperProfile) => void;
  onUpdateProjectImage?: (projectId: string, imageUrl: string) => void;
  onUpdateCertificateImage?: (certificateId: string, imageUrl: string) => void;
  isAdmin?: boolean;
  onExitAdmin?: () => void;
}

export default function PersonalizeModal({
  isOpen,
  onClose,
  profile,
  projectsList = [],
  certificatesList = [],
  onSaveProfile,
  onUpdateProjectImage,
  onUpdateCertificateImage,
  isAdmin = false,
  onExitAdmin,
}: PersonalizeModalProps) {
  const [formData, setFormData] = useState<DeveloperProfile>({ ...profile });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const projectFileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const certModalFileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    setFormData({ ...profile });
  }, [profile, isOpen]);

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Use FileReader to convert file to base64 Data URL so exact real photo displays immediately
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const dataUrl = loadEvent.target?.result as string;
      if (dataUrl) {
        setFormData((prev) => ({
          ...prev,
          profileImage: dataUrl,
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleProjectImageFile = (projectId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUpdateProjectImage) return;

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const dataUrl = loadEvent.target?.result as string;
      if (dataUrl) {
        onUpdateProjectImage(projectId, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCertificateImageFile = (certId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUpdateCertificateImage) return;

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const dataUrl = loadEvent.target?.result as string;
      if (dataUrl) {
        onUpdateCertificateImage(certId, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  if (!isOpen) return null;

  const handleReset = () => {
    setFormData({ ...initialProfile });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  return (
    <div
      id="personalize-modal-overlay"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl my-6 p-6 sm:p-8 rounded-3xl bg-[#0F0C1E] border border-[#6366F1]/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#94A3B8] hover:text-white bg-[#141026] border border-white/10 hover:border-[#818CF8] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#181330] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC]">
            <Sparkles className="w-3.5 h-3.5 text-[#818CF8]" />
            <span>Admin Mode • Portfolio Details Editor</span>
          </div>

          {onExitAdmin && (
            <button
              type="button"
              onClick={onExitAdmin}
              className="text-xs font-semibold text-rose-400 hover:text-rose-300 px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-colors cursor-pointer"
            >
              Exit Admin Mode
            </button>
          )}
        </div>

        <h3 className="text-2xl font-bold text-white mb-1.5">
          Edit Placeholders &amp; Information
        </h3>
        <p className="text-xs sm:text-sm text-[#94A3B8] mb-6 leading-relaxed">
          {isAdmin
            ? 'You are in Admin Mode. Any changes you save or photos you upload will be stored directly on your site.'
            : 'Update placeholder text such as WhatsApp number, institution name, or social links.'}
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Profile Photo Preview & Direct Upload */}
          <div className="p-4 rounded-2xl bg-[#141026] border border-white/10 space-y-3">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-[#0A0718] border-2 border-[#6366F1]/50 shrink-0 shadow-md">
                <img
                  src={formData.profileImage || '/anees-shahbaz.jpg'}
                  alt={formData.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className="text-xs font-semibold text-white">Your Face Photo</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Same-to-same Original
                  </span>
                </div>
                <p className="text-xs text-[#94A3B8] mb-3">
                  Upload your original unaltered photograph directly from your computer or phone so your real face appears across your website.
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileUpload}
                    className="hidden"
                    id="profile-photo-upload"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Upload My Exact Photo
                  </button>

                  {formData.profileImage !== '/anees-shahbaz.jpg' && (
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, profileImage: '/anees-shahbaz.jpg' }))}
                      className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white text-xs transition-colors cursor-pointer"
                    >
                      Reset Photo
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#64748B]">
              <span>Supported formats: JPG, PNG, WEBP. Stored instantly in your browser session.</span>
            </div>
          </div>

          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 focus:border-[#818CF8] text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1">
                Professional Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 focus:border-[#818CF8] text-white text-sm outline-none"
              />
            </div>
          </div>

          {/* Positioning */}
          <div>
            <label className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1">
              Primary Positioning
            </label>
            <textarea
              rows={2}
              value={formData.primaryPositioning}
              onChange={(e) =>
                setFormData({ ...formData, primaryPositioning: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 focus:border-[#818CF8] text-white text-sm outline-none resize-none"
            />
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 focus:border-[#818CF8] text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1">
                WhatsApp Number
              </label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value, phone: e.target.value })
                }
                placeholder="e.g. +92 300 1234567"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 focus:border-[#818CF8] text-white text-sm outline-none"
              />
            </div>
          </div>

          {/* Location & Availability */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 focus:border-[#818CF8] text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-1">
                Availability
              </label>
              <input
                type="text"
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 focus:border-[#818CF8] text-white text-sm outline-none"
              />
            </div>
          </div>

          {/* Featured Projects Image Manager */}
          {projectsList && projectsList.length > 0 && onUpdateProjectImage && (
            <div className="p-4 rounded-2xl bg-[#141026] border border-[#6366F1]/25 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <FolderGit2 className="w-4 h-4 text-[#818CF8]" />
                  <span>Featured Projects Images ({projectsList.length})</span>
                </div>
                <span className="text-[11px] text-[#A5B4FC] font-medium">Upload Project Screenshots</span>
              </div>

              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {projectsList.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-2.5 rounded-xl bg-[#0F0C1E] border border-white/5 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {proj.image ? (
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-10 h-10 rounded-lg object-cover border border-white/10 shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-[#181330] border border-white/5 flex items-center justify-center text-[#818CF8] shrink-0">
                          <ImageIcon className="w-4 h-4" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          #{proj.number} {proj.title}
                        </div>
                        <div className="text-[10px] text-[#94A3B8] truncate">
                          {proj.image ? 'Custom image uploaded' : 'No image (using blueprint mockup)'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <input
                        type="file"
                        ref={(el) => {
                          projectFileInputRefs.current[proj.id] = el;
                        }}
                        onChange={(e) => handleProjectImageFile(proj.id, e)}
                        accept="image/png,image/jpeg,image/jpg,image/webp"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => projectFileInputRefs.current[proj.id]?.click()}
                        className="px-2.5 py-1 rounded-lg bg-[#1D173A] hover:bg-[#2A2052] border border-[#6366F1]/40 text-[#A5B4FC] hover:text-white text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Upload className="w-3 h-3" />
                        <span>{proj.image ? 'Change' : 'Upload'}</span>
                      </button>

                      {proj.image && (
                        <button
                          type="button"
                          onClick={() => onUpdateProjectImage(proj.id, '')}
                          className="p-1 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors cursor-pointer"
                          title="Remove image"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificates Image Manager */}
          {certificatesList && certificatesList.length > 0 && onUpdateCertificateImage && (
            <div className="p-4 rounded-2xl bg-[#141026] border border-[#6366F1]/25 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#818CF8]" />
                  <span>Certificates Images ({certificatesList.length})</span>
                </div>
                <span className="text-[11px] text-[#A5B4FC] font-medium">Upload Certificate Photo/Scan</span>
              </div>

              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {certificatesList.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-2.5 rounded-xl bg-[#0F0C1E] border border-white/5 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-10 h-10 rounded-lg object-cover border border-white/10 shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-[#181330] border border-white/5 flex items-center justify-center text-[#818CF8] shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          {cert.title}
                        </div>
                        <div className="text-[10px] text-[#94A3B8] truncate">
                          {cert.image ? 'Custom certificate image uploaded' : 'Using DigiSkills vector preview'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <input
                        type="file"
                        ref={(el) => {
                          certModalFileInputRefs.current[cert.id] = el;
                        }}
                        onChange={(e) => handleCertificateImageFile(cert.id, e)}
                        accept="image/png,image/jpeg,image/jpg,image/webp"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => certModalFileInputRefs.current[cert.id]?.click()}
                        className="px-2.5 py-1 rounded-lg bg-[#1D173A] hover:bg-[#2A2052] border border-[#6366F1]/40 text-[#A5B4FC] hover:text-white text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Upload className="w-3 h-3" />
                        <span>{cert.image ? 'Change' : 'Upload'}</span>
                      </button>

                      {cert.image && (
                        <button
                          type="button"
                          onClick={() => onUpdateCertificateImage(cert.id, '')}
                          className="p-1 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors cursor-pointer"
                          title="Remove custom certificate image"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#94A3B8] hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] shadow-[0_0_15px_rgba(99,102,241,0.4)] cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

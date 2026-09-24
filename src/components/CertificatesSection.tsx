import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  Eye,
  PlusCircle,
  CheckCircle2,
  Upload,
  Edit3,
  Image as ImageIcon,
} from 'lucide-react';
import { CertificateItem } from '../types';
import CertificateModal from './CertificateModal';
import CertificateEditModal from './CertificateEditModal';
import DigiSkillsCertificateSVG from './DigiSkillsCertificateSVG';

interface CertificatesSectionProps {
  certificates: CertificateItem[];
  onOpenManage?: () => void;
  onUpdateCertificateImage?: (certificateId: string, imageUrl: string) => void;
  onSaveCertificate?: (cert: CertificateItem) => void;
  onDeleteCertificate?: (certId: string) => void;
  isAdmin?: boolean;
}

export default function CertificatesSection({
  certificates,
  onOpenManage,
  onUpdateCertificateImage,
  onSaveCertificate,
  onDeleteCertificate,
  isAdmin = false,
}: CertificatesSectionProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [editingCert, setEditingCert] = useState<CertificateItem | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const certFileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Real certificates: any certificate that is NOT a placeholder, OR has an uploaded image
  const realCertificates = certificates.filter((c) => !c.isPlaceholder || Boolean(c.image));

  // Placeholder certificate for Admin mode to add more
  const placeholderCert = certificates.find((c) => c.isPlaceholder && !c.image) || {
    id: `cert-${Date.now()}`,
    title: 'Training Certificate',
    courseTitle: '',
    issuingOrganization: '',
    recipientName: 'MUHAMMAD ANEES',
    issueDate: new Date().toLocaleDateString('en-GB'),
    credentialId: '',
    verificationUrl: '',
    isVerified: true,
    isPlaceholder: true,
  };

  const handleCertImageFileChange = (certId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUpdateCertificateImage) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onUpdateCertificateImage(certId, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleOpenAddCertificate = () => {
    setEditingCert(placeholderCert);
    setIsEditModalOpen(true);
  };

  const handleOpenEditCertificate = (cert: CertificateItem) => {
    setEditingCert(cert);
    setIsEditModalOpen(true);
  };

  const handleSaveCertificateInternal = (savedCert: CertificateItem) => {
    if (onSaveCertificate) {
      onSaveCertificate(savedCert);
    } else if (onUpdateCertificateImage && savedCert.image) {
      onUpdateCertificateImage(savedCert.id, savedCert.image);
    }
  };

  // Determine grid columns:
  // If in admin mode, there's always at least (realCertificates + 1 placeholder card) -> lg:grid-cols-2
  // If not admin, and exactly 1 real certificate -> single column centered
  // If not admin, and 2 or more -> lg:grid-cols-2
  const isSingleView = !isAdmin && realCertificates.length === 1;

  return (
    <section id="certificates" className="relative py-20 lg:py-28 bg-[#090713]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131024] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#818CF8]" />
            Verified Credentials &amp; Training
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Certificates &amp;{' '}
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Formal technical training and verified credentials. New certifications are added as completed.
          </p>

          {isAdmin && (
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Admin Mode Active • You can add and edit certificates</span>
              </span>
            </div>
          )}
        </div>

        {/* Certificates Grid */}
        <div
          className={
            isSingleView
              ? 'max-w-2xl mx-auto'
              : 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'
          }
        >
          {/* Render All Real Certificates */}
          {realCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-3xl bg-[#110D20] border border-[#6366F1]/30 hover:border-[#818CF8]/70 overflow-hidden shadow-[0_20px_50px_rgba(5,3,10,0.8)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Certificate Visual Header */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-white/5 border-b border-white/[0.08]">
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 inset-x-0 h-7 bg-[#0A0714]/90 backdrop-blur-xs px-4 flex items-center justify-between z-20 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono text-emerald-400 font-medium">
                      {cert.id === 'cert-1' ? 'Verified Government Training Program' : 'Verified Credential'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#94A3B8]">
                    ID: {cert.credentialId || 'N/A'}
                  </span>
                </div>

                {/* Render Certificate Artwork */}
                <div className="w-full h-full pt-7 bg-white overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] flex items-center justify-center">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : cert.id === 'cert-1' ? (
                    <DigiSkillsCertificateSVG
                      recipientName={cert.recipientName}
                      courseTitle="WORDPRESS"
                      batch="DSTP3.0-Batch-02 Dec 2025-Mar 2026"
                      issueDate={cert.issueDate}
                      certificateId={cert.credentialId}
                      verificationUrl={cert.verificationUrl}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0D0A1C] flex flex-col items-center justify-center p-6 text-center text-white">
                      <Award className="w-12 h-12 text-[#818CF8] mb-2" />
                      <h4 className="font-bold text-base text-white">{cert.courseTitle}</h4>
                      <p className="text-xs text-[#94A3B8]">{cert.issuingOrganization}</p>
                    </div>
                  )}
                </div>

                {/* Hover Overlay with Action Buttons */}
                <div className="absolute inset-0 bg-[#0A0714]/85 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2.5 z-30 p-4">
                  <button
                    type="button"
                    id={`view-cert-btn-${cert.id}`}
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#6366F1] hover:bg-[#4F46E5] shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Full Certificate</span>
                  </button>

                  {isAdmin && (
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                      <button
                        type="button"
                        onClick={() => handleOpenEditCertificate(cert)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-white bg-[#818CF8] hover:bg-[#6366F1] transition-all cursor-pointer shadow-xs"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit Details</span>
                      </button>

                      <input
                        type="file"
                        ref={(el) => {
                          certFileInputRefs.current[cert.id] = el;
                        }}
                        onChange={(e) => handleCertImageFileChange(cert.id, e)}
                        accept="image/png,image/jpeg,image/jpg,image/webp"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => certFileInputRefs.current[cert.id]?.click()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-[#A5B4FC] bg-[#18132F] hover:bg-[#251B4B] border border-[#818CF8] hover:text-white transition-all cursor-pointer shadow-xs"
                      >
                        <Upload className="w-3 h-3 text-[#818CF8]" />
                        <span>{cert.image ? 'Change Photo' : 'Upload Photo'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Certificate Meta Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A5B4FC]">
                      {cert.title}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A5B4FC] transition-colors">
                    {cert.courseTitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                    Issued by <span className="text-white font-medium">{cert.issuingOrganization}</span> to{' '}
                    <span className="text-white font-semibold">{cert.recipientName}</span>.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                  <div className="text-[#64748B]">
                    Issue Date: <span className="text-[#CBD5E1] font-medium">{cert.issueDate}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {isAdmin && (
                      <button
                        type="button"
                        onClick={() => handleOpenEditCertificate(cert)}
                        className="text-xs font-semibold text-[#A5B4FC] hover:text-white transition-colors cursor-pointer"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="text-xs font-semibold text-[#818CF8] hover:text-[#A5B4FC] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inspect Details</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Admin-Only Placeholder Card: NEVER shown to regular visitors */}
          {isAdmin && (
            <div className="rounded-3xl bg-[#110D20]/60 border-2 border-dashed border-[#6366F1]/40 hover:border-[#818CF8] p-8 flex flex-col justify-between items-center text-center relative overflow-hidden group transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#17132B] border border-[#6366F1]/30 flex items-center justify-center text-[#818CF8] mb-5 group-hover:scale-105 group-hover:bg-[#6366F1]/20 transition-all">
                <PlusCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#A5B4FC] px-3 py-1 rounded-full bg-[#1A1633] border border-[#6366F1]/30 mb-3">
                  Admin Only • Add New Credential
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Add Your Second Certificate
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
                  Upload your training certificate image, course title, and credentials. Regular users will only see it after you save it.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-wrap justify-center">
                <button
                  type="button"
                  onClick={handleOpenAddCertificate}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] transition-all cursor-pointer shadow-lg hover:shadow-[#6366F1]/30"
                >
                  + Add Certificate &amp; Upload Image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Inspect / View Full Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
        isAdmin={isAdmin}
        onUpdateCertificateImage={(certId, imageUrl) => {
          if (onUpdateCertificateImage) {
            onUpdateCertificateImage(certId, imageUrl);
          }
          if (selectedCert && selectedCert.id === certId) {
            setSelectedCert({
              ...selectedCert,
              image: imageUrl,
            });
          }
        }}
      />

      {/* Admin Add/Edit Certificate Modal */}
      <CertificateEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        certificate={editingCert}
        onSave={handleSaveCertificateInternal}
        onDelete={onDeleteCertificate}
      />
    </section>
  );
}

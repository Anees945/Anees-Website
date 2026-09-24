import { useRef } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Database, Workflow, ShieldAlert, Upload, Image as ImageIcon, Trash2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilar: (title: string) => void;
  onUpdateImage?: (projectId: string, imageUrl: string) => void;
  isAdmin?: boolean;
}

export default function ProjectModal({ project, onClose, onInquireSimilar, onUpdateImage, isAdmin = false }: ProjectModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!project) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUpdateImage) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onUpdateImage(project.id, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      id="project-detail-modal-overlay"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl my-6 rounded-3xl bg-[#0E0C18] border border-[#6366F1]/40 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0A0713]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#818CF8] px-2.5 py-0.5 rounded-full bg-[#16112C] border border-[#6366F1]/30">
              Project #{project.number}
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#181330] text-[#A5B4FC] border border-white/5">
              {project.categoryLabel}
            </span>
          </div>

          <button
            type="button"
            id="project-modal-close-btn"
            onClick={onClose}
            aria-label="Close Project Modal"
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Project Image Display & Upload Section */}
          <div className="p-4 rounded-2xl bg-[#141026] border border-[#6366F1]/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#818CF8]" />
                Featured Project Screenshot / Image
              </span>
              {isAdmin && project.image && onUpdateImage && (
                <button
                  type="button"
                  onClick={() => onUpdateImage(project.id, '')}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove Image</span>
                </button>
              )}
            </div>

            {project.image ? (
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/9] bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-white/15 bg-[#0F0C1E] p-6 text-center">
                <ImageIcon className="w-8 h-8 text-[#818CF8]/50 mx-auto mb-2" />
                <p className="text-xs text-[#94A3B8] mb-1">
                  Abhi koi image set nahi ha iss project ke liye.
                </p>
                {isAdmin ? (
                  <p className="text-[11px] text-[#818CF8]">
                    Admin Mode: Neeche diye button se project ka screenshot ya photo upload karein.
                  </p>
                ) : (
                  <p className="text-[11px] text-[#64748B]">
                    Project documentation and interactive preview.
                  </p>
                )}
              </div>
            )}

            {/* Upload Button - only visible for Admin */}
            {isAdmin && onUpdateImage && (
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1A1435] hover:bg-[#231A47] border border-[#818CF8] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Upload className="w-4 h-4 text-[#818CF8]" />
                  <span>Admin: {project.image ? 'Change / Re-upload Project Image' : 'Upload Project Image (PNG, JPG, WebP)'}</span>
                </button>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-[#818CF8] mb-3">
              {project.subtitle}
            </p>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              {project.conceptNote}
            </p>
          </div>

          {/* Status Note Banner */}
          <div className="p-3.5 rounded-2xl bg-[#141026] border border-[#6366F1]/20 flex items-start gap-3">
            <Layers className="w-4 h-4 text-[#818CF8] mt-0.5 shrink-0" />
            <div className="text-xs text-[#CBD5E1] leading-relaxed">
              <span className="font-bold text-white">Architecture &amp; Status: </span>
              {project.statusNote}
            </div>
          </div>

          {/* Technologies Chips */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A5B4FC] mb-2.5">
              Technologies &amp; Architecture:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#141026] text-[#E2E8F0] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Solved & Key Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#130F26] border border-white/5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#A5B4FC] mb-2">
                Business Problem Addressed
              </h5>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                {project.workflowDetails.problemSolved}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#130F26] border border-white/5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Technical Architecture
              </h5>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                {project.workflowDetails.technicalArchitecture}
              </p>
            </div>
          </div>

          {/* Key Features Implemented */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A5B4FC] mb-2.5">
              Core Features &amp; Workflows:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-[#E2E8F0] p-2.5 rounded-xl bg-[#130F26]/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Targeted Use Cases */}
          {project.useCases && project.useCases.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A5B4FC] mb-2.5">
                Target Business Applications:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                {project.useCases.map((useCase, uIdx) => (
                  <li key={uIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#0A0713] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#94A3B8]">
            Need a similar solution for your business?
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-medium text-[#94A3B8] hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              id="project-modal-inquire-btn"
              onClick={() => {
                onInquireSimilar(project.title);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

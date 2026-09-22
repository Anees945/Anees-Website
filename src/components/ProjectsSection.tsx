import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  Eye,
  ArrowUpRight,
  Database,
  Layers,
  Sparkles,
  ShoppingBag,
  Briefcase,
  Bot,
  CheckCircle2,
  Sliders,
  Upload,
  Image as ImageIcon,
} from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';
import ProjectModal from './ProjectModal';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onInquireProject: (title: string) => void;
  onUpdateProjectImage?: (projectId: string, imageUrl: string) => void;
  isAdmin?: boolean;
}

const filterOptions: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects (5)' },
  { id: 'webapp', label: 'Web Applications' },
  { id: 'business', label: 'Business Websites' },
  { id: 'ecommerce', label: 'E-commerce & Ordering' },
  { id: 'ai', label: 'AI & Automation' },
];

export default function ProjectsSection({
  projects,
  onInquireProject,
  onUpdateProjectImage,
  isAdmin = false,
}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleImageFileChange = (projectId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUpdateProjectImage) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        onUpdateProjectImage(projectId, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Helper to render customized visual badge
  const getCategoryBadge = (category: ProjectCategory) => {
    switch (category) {
      case 'webapp':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
            <Database className="w-3 h-3" />
            Web Application
          </span>
        );
      case 'business':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
            <Briefcase className="w-3 h-3" />
            Business Website
          </span>
        );
      case 'ecommerce':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            <ShoppingBag className="w-3 h-3" />
            E-commerce
          </span>
        );
      case 'ai':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
            <Bot className="w-3 h-3" />
            AI &amp; Automation
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#070510]">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-5 w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-[400px] h-[400px] bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#130F26] border border-[#6366F1]/30 text-xs font-semibold text-[#A5B4FC] uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#818CF8]" />
            Practical Web Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects &amp;{' '}
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Real project architectures solving operational bottlenecks for businesses — from inventory systems and food ordering to WhatsApp AI automation.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              type="button"
              id={`filter-btn-${filter.id}`}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-[#6366F1] text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                  : 'bg-[#100D20] text-[#94A3B8] hover:text-white border border-[#6366F1]/20 hover:border-[#6366F1]/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#0F0C1E] border border-[#6366F1]/25 hover:border-[#818CF8]/70 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)] transition-all duration-300"
              >
                {/* Visual Window Mockup */}
                <div className="relative aspect-[16/10] w-full bg-[#141026] overflow-hidden border-b border-white/[0.08] flex flex-col justify-between p-4 group-hover:bg-[#181330] transition-colors">
                  {/* If project has custom image, render it as background */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}

                  {/* Gradient Overlay for legibility */}
                  <div
                    className={`absolute inset-0 z-0 ${
                      project.image
                        ? 'bg-gradient-to-t from-[#0E0B1A] via-[#0E0B1A]/60 to-black/70'
                        : 'bg-transparent'
                    }`}
                  />

                  {/* Browser chrome header */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>

                    <span className="font-mono text-[11px] font-bold text-[#818CF8] bg-[#0E0B1A]/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/10">
                      Project #{project.number}
                    </span>
                  </div>

                  {/* Visual Blueprint Graphic / Text (shown if no custom image) */}
                  {!project.image && (
                    <div className="my-auto py-2 z-10">
                      <div className="w-full p-3 rounded-xl bg-[#0E0B1A]/80 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] text-[#A5B4FC] font-semibold">
                          <span>{project.title}</span>
                          <span className="text-[10px] font-mono text-[#64748B]">Ready</span>
                        </div>
                        <p className="text-[10px] text-[#94A3B8] line-clamp-2">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Bottom category tag & Upload badge */}
                  <div className="flex items-center justify-between z-10 mt-auto pt-2">
                    {getCategoryBadge(project.category)}
                    {project.image ? (
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/15 backdrop-blur-xs px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <ImageIcon className="w-3 h-3" />
                        Custom Image
                      </span>
                    ) : (
                      <span className="text-[10px] text-[#64748B] font-mono">
                        {project.technologies[0]}
                      </span>
                    )}
                  </div>

                  {/* Hover Overlay with Action Buttons */}
                  <div className="absolute inset-0 bg-[#0E0B1A]/85 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2.5 z-20 p-4">
                    <button
                      type="button"
                      id={`view-proj-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#6366F1] hover:bg-[#4F46E5] shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Project Details</span>
                    </button>

                    {isAdmin && onUpdateProjectImage && (
                      <>
                        <input
                          type="file"
                          ref={(el) => {
                            fileInputRefs.current[project.id] = el;
                          }}
                          onChange={(e) => handleImageFileChange(project.id, e)}
                          accept="image/png,image/jpeg,image/jpg,image/webp"
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRefs.current[project.id]?.click()}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-[#A5B4FC] bg-[#1B1533] hover:bg-[#281F4B] border border-[#818CF8] hover:text-white transition-all cursor-pointer"
                        >
                          <Upload className="w-3 h-3" />
                          <span>Admin: {project.image ? 'Change Image' : 'Upload Image'}</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Information Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#A5B4FC] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 line-clamp-3">
                      {project.conceptNote}
                    </p>

                    {/* Quick Features Preview */}
                    <div className="space-y-1.5 mb-4">
                      {project.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-[11px] text-[#CBD5E1]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack chips & trigger */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 max-w-[80%]">
                      {project.technologies.slice(0, 2).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#141026] text-[#A5B4FC] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="p-2 rounded-full bg-[#141026] hover:bg-[#6366F1] text-[#94A3B8] hover:text-white border border-white/10 transition-colors cursor-pointer"
                      title="View Details"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isAdmin={isAdmin}
        onInquireSimilar={(title) => {
          setSelectedProject(null);
          onInquireProject(title);
        }}
        onUpdateImage={(projectId, imageUrl) => {
          if (onUpdateProjectImage) {
            onUpdateProjectImage(projectId, imageUrl);
          }
          if (selectedProject && selectedProject.id === projectId) {
            setSelectedProject({
              ...selectedProject,
              image: imageUrl,
            });
          }
        }}
      />
    </section>
  );
}

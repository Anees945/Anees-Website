import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CertificatesSection from './components/CertificatesSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PersonalizeModal from './components/PersonalizeModal';

import {
  initialProfile,
  trustValuesData,
  certificatesData,
  servicesData,
  skillsData,
  projectsData,
  whyWorkWithMeData,
  initialReviewsData,
} from './data/portfolioData';
import { DeveloperProfile, ProjectItem, CertificateItem, ReviewItem } from './types';

export default function App() {
  const [profile, setProfile] = useState<DeveloperProfile>(() => {
    try {
      const saved = localStorage.getItem('anees_shahbaz_portfolio_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialProfile,
          ...parsed,
          profileImage: parsed.profileImage || initialProfile.profileImage,
        };
      }
    } catch {
      // Fallback
    }
    return initialProfile;
  });

  const [projectsList, setProjectsList] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('anees_shahbaz_portfolio_projects');
      if (saved) {
        const parsed = JSON.parse(saved) as ProjectItem[];
        return projectsData.map((initial) => {
          const match = parsed.find((p) => p.id === initial.id);
          return match ? { ...initial, image: match.image || initial.image } : initial;
        });
      }
    } catch {
      // Fallback
    }
    return projectsData;
  });

  const handleUpdateProjectImage = (projectId: string, imageUrl: string) => {
    setProjectsList((prev) => {
      const updated = prev.map((p) => (p.id === projectId ? { ...p, image: imageUrl } : p));
      try {
        localStorage.setItem('anees_shahbaz_portfolio_projects', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const [certificatesList, setCertificatesList] = useState<CertificateItem[]>(() => {
    try {
      const saved = localStorage.getItem('anees_shahbaz_portfolio_certificates');
      if (saved) {
        const parsed = JSON.parse(saved) as CertificateItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((c) => (c.image ? { ...c, isPlaceholder: false } : c));
        }
      }
    } catch {
      // Fallback
    }
    return certificatesData;
  });

  const handleUpdateCertificateImage = (certificateId: string, imageUrl: string) => {
    setCertificatesList((prev) => {
      const updated = prev.map((c) =>
        c.id === certificateId ? { ...c, image: imageUrl, isPlaceholder: !imageUrl } : c
      );
      try {
        localStorage.setItem('anees_shahbaz_portfolio_certificates', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const handleSaveCertificate = (updatedCert: CertificateItem) => {
    setCertificatesList((prev) => {
      let updated: CertificateItem[];
      const exists = prev.some((c) => c.id === updatedCert.id);
      if (exists) {
        updated = prev.map((c) =>
          c.id === updatedCert.id ? { ...updatedCert, isPlaceholder: false } : c
        );
      } else {
        const filtered = prev.filter((c) => c.id !== 'cert-placeholder-1');
        updated = [...filtered, { ...updatedCert, isPlaceholder: false }];
      }
      try {
        localStorage.setItem('anees_shahbaz_portfolio_certificates', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const handleDeleteCertificate = (certId: string) => {
    setCertificatesList((prev) => {
      const updated = prev.filter((c) => c.id !== certId);
      try {
        localStorage.setItem('anees_shahbaz_portfolio_certificates', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem('anees_shahbaz_portfolio_reviews');
      if (saved) {
        const parsed = JSON.parse(saved) as ReviewItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return initialReviewsData;
  });

  const handleAddReview = (newReview: ReviewItem) => {
    setReviewsList((prev) => {
      const updated = [newReview, ...prev];
      try {
        localStorage.setItem('anees_shahbaz_portfolio_reviews', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const handleDeleteReview = (reviewId: string) => {
    setReviewsList((prev) => {
      const updated = prev.filter((r) => r.id !== reviewId);
      try {
        localStorage.setItem('anees_shahbaz_portfolio_reviews', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);
  const [inquiredService, setInquiredService] = useState<string>('');

  // Admin Mode state: Only true if URL has admin (e.g. ?admin, ?mode=admin, /admin, #admin)
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const urlParams = new URLSearchParams(window.location.search);
    const hasAdminParam = urlParams.has('admin') || urlParams.get('mode') === 'admin';
    const hasAdminHash = window.location.hash.toLowerCase().includes('admin');
    const hasAdminPath = window.location.pathname.toLowerCase().includes('admin');
    return hasAdminParam || hasAdminHash || hasAdminPath;
  });

  useEffect(() => {
    const checkAdmin = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const hasAdminParam = urlParams.has('admin') || urlParams.get('mode') === 'admin';
      const hasAdminHash = window.location.hash.toLowerCase().includes('admin');
      const hasAdminPath = window.location.pathname.toLowerCase().includes('admin');
      setIsAdmin(hasAdminParam || hasAdminHash || hasAdminPath);
    };

    window.addEventListener('popstate', checkAdmin);
    window.addEventListener('hashchange', checkAdmin);
    return () => {
      window.removeEventListener('popstate', checkAdmin);
      window.removeEventListener('hashchange', checkAdmin);
    };
  }, []);

  const handleExitAdmin = () => {
    setIsAdmin(false);
    setIsPersonalizeOpen(false);
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('admin');
      url.searchParams.delete('mode');
      if (url.hash.toLowerCase().includes('admin')) {
        url.hash = '';
      }
      window.history.replaceState({}, '', url.pathname + (url.search ? url.search : '') + url.hash);
    } catch {
      // Ignore
    }
  };

  const handleSaveProfile = (updatedProfile: DeveloperProfile) => {
    setProfile(updatedProfile);
    try {
      localStorage.setItem(
        'anees_shahbaz_portfolio_profile',
        JSON.stringify(updatedProfile)
      );
    } catch {
      // Ignore
    }
  };

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setInquiredService(serviceTitle);
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05030A] text-white selection:bg-[#6366F1]/30 selection:text-[#A5B4FC] font-sans antialiased relative overflow-x-hidden">
      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Admin Mode Top Indicator Banner */}
      {isAdmin && (
        <div className="sticky top-0 z-50 bg-[#150F2C] border-b border-[#818CF8]/40 px-4 py-2 text-xs flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Admin Mode Active:</span>
            <span className="text-[#A5B4FC] hidden sm:inline">
              Portfolio details &amp; image editing enabled.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPersonalizeOpen(true)}
              className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-xs cursor-pointer"
            >
              Open Editor
            </button>
            <button
              type="button"
              onClick={handleExitAdmin}
              className="px-2.5 py-1 rounded-lg text-xs font-medium text-rose-300 hover:text-white bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-colors cursor-pointer"
            >
              Exit Admin Mode
            </button>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        profile={profile}
        onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        isAdmin={isAdmin}
      />

      <main className="relative">
        {/* Hero Section */}
        <HeroSection
          profile={profile}
          onWorkTogetherClick={() => scrollToContact()}
          onViewWorkClick={scrollToProjects}
        />

        {/* About Section (Personal narrative, philosophy quote, real trust pillars) */}
        <AboutSection
          profile={profile}
          trustValues={trustValuesData}
          onExploreServicesClick={scrollToServices}
        />

        {/* Certificates & Training Section */}
        <CertificatesSection
          certificates={certificatesList}
          onOpenManage={() => setIsPersonalizeOpen(true)}
          onUpdateCertificateImage={handleUpdateCertificateImage}
          onSaveCertificate={handleSaveCertificate}
          onDeleteCertificate={handleDeleteCertificate}
          isAdmin={isAdmin}
        />

        {/* Services & Digital Solutions (7 practical offerings) */}
        <ServicesSection
          services={servicesData}
          onSelectServiceForContact={(title) => scrollToContact(title)}
        />

        {/* Technical Skills & Capabilities */}
        <SkillsSection
          skills={skillsData}
        />

        {/* Featured Projects & Case Studies (5 authentic concepts) */}
        <ProjectsSection
          projects={projectsList}
          onInquireProject={(title) => scrollToContact(`Project Inquiry: ${title}`)}
          onUpdateProjectImage={handleUpdateProjectImage}
          isAdmin={isAdmin}
        />

        {/* Why Work With Me (Business problem solving & quality assurance) */}
        <WhyWorkWithMe items={whyWorkWithMeData} />

        {/* Authentic Client Feedback & Reviews */}
        <TestimonialsSection
          reviews={reviewsList}
          onAddReview={handleAddReview}
          onDeleteReview={handleDeleteReview}
          profile={profile}
          isAdmin={isAdmin}
          onInquireProject={() => scrollToContact()}
        />

        {/* Contact Section (WhatsApp, Email, Phone, Project Inquiry Form) */}
        <ContactSection
          profile={profile}
          initialServiceSelection={inquiredService}
          onOpenManage={() => setIsPersonalizeOpen(true)}
          isAdmin={isAdmin}
        />
      </main>

      {/* Minimalist Dark Footer */}
      <Footer profile={profile} />

      {/* Real-time Portfolio Customizer Modal */}
      <PersonalizeModal
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        profile={profile}
        projectsList={projectsList}
        certificatesList={certificatesList}
        onSaveProfile={handleSaveProfile}
        onUpdateProjectImage={handleUpdateProjectImage}
        onUpdateCertificateImage={handleUpdateCertificateImage}
        isAdmin={isAdmin}
        onExitAdmin={handleExitAdmin}
      />

      {/* Floating Admin Mode Indicator (Only visible in admin mode) */}
      {isAdmin && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-[#110D24]/95 border border-[#818CF8]/50 shadow-[0_10px_35px_rgba(0,0,0,0.85)] backdrop-blur-md flex items-center gap-2.5 sm:gap-3.5 text-xs max-w-[95vw] overflow-x-auto">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Admin Mode
          </span>
          <span className="text-[#64748B]">•</span>
          <button
            type="button"
            onClick={() => setIsPersonalizeOpen(true)}
            className="text-white hover:text-[#A5B4FC] font-medium whitespace-nowrap cursor-pointer"
          >
            Edit Profile
          </button>
          <span className="text-[#64748B]">•</span>
          <a
            href="#certificates"
            className="text-[#818CF8] hover:text-white font-medium whitespace-nowrap cursor-pointer"
          >
            + Certificates
          </a>
          <span className="text-[#64748B]">•</span>
          <button
            type="button"
            onClick={handleExitAdmin}
            className="text-rose-400 hover:text-rose-300 font-semibold whitespace-nowrap cursor-pointer"
            title="Exit Admin Mode to see what normal visitors see"
          >
            Exit Admin (View As Visitor)
          </button>
        </div>
      )}
    </div>
  );
}

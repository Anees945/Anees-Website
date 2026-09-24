export interface TrustValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  idealFor: string;
}

export type SkillCategory = 'core' | 'features' | 'tools';

export interface SkillItem {
  id: string;
  name: string;
  category: 'core' | 'features';
  description?: string;
  featured?: boolean;
}

export interface ToolPlatformItem {
  id: string;
  name: string;
  role: string;
  category: string;
  iconName: string;
  usedFor: string;
}

export type ProjectCategory = 'all' | 'business' | 'ecommerce' | 'webapp' | 'ai';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  subtitle: string;
  conceptNote: string;
  statusNote: string;
  image?: string;
  technologies: string[];
  features: string[];
  useCases?: string[];
  workflowDetails: {
    problemSolved: string;
    keyModules: string[];
    technicalArchitecture: string;
  };
}

export interface CertificateItem {
  id: string;
  title: string;
  courseTitle: string;
  issuingOrganization: string;
  recipientName: string;
  issueDate: string;
  credentialId: string;
  verificationUrl: string;
  signatories?: string;
  isVerified: boolean;
  image?: string;
  isPlaceholder?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  companyOrProject?: string;
  rating: number;
  content: string;
  date: string;
  projectType?: string;
  verified?: boolean;
  avatarUrl?: string;
  location?: string;
}

export interface ValuePropItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlightMetric: string;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  primaryPositioning: string;
  shortDescription: string;
  corePhilosophy: string;
  aboutIntro: string;
  aboutPhilosophy: string;
  aboutGrowth: string;
  profileImage: string;
  email: string;
  whatsapp: string;
  phone: string;
  location: string;
  availability: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    other: string;
  };
}

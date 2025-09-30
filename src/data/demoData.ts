// Demo data for HEAT website
export interface StatCard {
  number: string;
  label: string;
  icon: string;
}

export interface MetricCard {
  label: string;
  value: string;
  change: string;
  changeType: "up" | "down" | "stable";
}

export interface ComponentCard {
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  link: string;
}

export interface NewsItem {
  title: string;
  summary: string;
  date: string;
  category: string;
}

export interface EventItem {
  id: string;
  name: string;
  description: string;
  date: string;
  image: string;
  images: string[];
  location: string;
  status: string;
  type?: string;
  registration?: string;
  capacity?: string;
  title?: string;
  organizer?: string;
  contact?: string;
  agenda?: string[];
  requirements?: string[];
}

export interface Notice {
  id: string;
  name: string;
  description: string;
  date: string;
  pdf: string;
  priority: "Critical" | "Important" | "General";
  category: string;
  content?: string;
  featured?: boolean;
}

export interface Circular {
  id: string;
  type: "Tender" | "Circular" | "EOI" | "Notice";
  name: string;
  description: string;
  deadline: string;
  publishDate: string;
  pdf: string;
  category: string;
  status: string;
  authority: string;
  expiryDate?: string;
}

export interface Official {
  name: string;
  position: string;
  background?: string;
  email: string;
  office?: string;
  specialization?: string;
  experience?: string;
  responsibility?: string;
  teamSize?: string;
  wing: string;
  phone?: string;
}

export interface Objective {
  title: string;
  description: string;
  progress: number;
}

export interface ATFWindow {
  id: string;
  title: string;
  focus: string[];
  description: string;
  sppFormat: string;
  deadline?: string;
  status: "Open" | "Closed" | "Upcoming";
}

export interface Wing {
  name: string;
  description: string;
  color: string;
  icon: string;
  officials: Official[];
}

export interface Document {
  id: string;
  title: string;
  category: string;
  type: string;
  url: string;
  size: string;
  uploadDate: string;
  downloads: number;
}

// Home page data
export const homeStats: StatCard[] = [
  {
    number: "৳401,657",
    label: "Lac Taka Investment",
    icon: "Building",
  },
  {
    number: "600,000+",
    label: "Students Impacted",
    icon: "GraduationCap",
  },
  {
    number: "5,000+",
    label: "Faculty Trained",
    icon: "Users",
  },
  {
    number: "All Public",
    label: "Universities Covered",
    icon: "Globe",
  },
];

export const performanceMetrics: MetricCard[] = [
  {
    label: "Projects Completed",
    value: "150+",
    change: "+12%",
    changeType: "up",
  },
  {
    label: "Active Projects",
    value: "25",
    change: "+5%",
    changeType: "up",
  },
  {
    label: "Budget Utilization",
    value: "85%",
    change: "+3%",
    changeType: "up",
  },
  {
    label: "Success Rate",
    value: "98%",
    change: "0%",
    changeType: "stable",
  },
];

export const componentCards: ComponentCard[] = [
  {
    title: "ATF",
    subtitle: "Academic Transformation Fund",
    description: "Quality enhancement and academic excellence initiatives",
    metric: "50+ Universities Supported",
    link: "/components/atf",
  },
  {
    title: "Training",
    subtitle: "Professional Development",
    description: "",
    metric: "2,500+ Faculty Trained",
    link: "/components/training",
  },
  {
    title: "Network",
    subtitle: "Campus Network",
    description: "High-speed network connectivity nationwide",
    metric: "50 Gbps Network Capacity",
    link: "/components/network",
  },
  {
    title: "BdREN",
    subtitle: "Research Network",
    description: "Global research and education network access",
    metric: "100+ International Networks",
    link: "/components/bdren",
  },
  {
    title: "Project Management",
    subtitle: "Monitoring & Evaluation",
    description: "Strategic project implementation tracking",
    metric: "98% Success Rate",
    link: "/components/monitoring",
  },
  {
    title: "Emergency Response",
    subtitle: "Crisis Management",
    description: "24/7 emergency response and continuity",
    metric: "24/7 Coverage",
    link: "/components/emergency",
  },
];

export const latestNews: NewsItem[] = [
  {
    title: "HEAT Training Program Phase 3 Launched Successfully",
    summary:
      "New faculty development initiative reaches 15 additional universities nationwide",
    date: "March 10, 2025",
    category: "Training",
  },
  {
    title: "BdREN Connectivity Expanded to 5 New Universities",
    summary:
      "High-speed research network now covers 50 institutions with enhanced capabilities",
    date: "March 8, 2025",
    category: "Infrastructure",
  },
  {
    title: "International Research Collaboration Agreement Signed",
    summary:
      "Partnership with European research networks enhances global connectivity",
    date: "March 5, 2025",
    category: "BdREN",
  },
];

export const upcomingEvents: EventItem[] = [
  {
    id: "3",
    name: "Digital Learning Excellence Conference 2025",
    description:
      "International conference on digital transformation in higher education",
    date: "March 25-27, 2025",
    image: "/images/events/digital-learning-conference.jpg",
    images: ["/images/events/digital-learning-conference.jpg"],
    location: "Dhaka University",
    status: "Registration Open",
  },
  {
    id: "4",
    name: "Faculty Development Intensive Workshop",
    description: "Comprehensive training program for university faculty",
    date: "April 15-20, 2025",
    image: "/images/events/faculty-workshop.jpg",
    images: ["/images/events/faculty-workshop.jpg"],
    location: "BUET, Dhaka",
    status: "Applications Under Review",
  },
  {
    id: "5",
    name: "Network Infrastructure Summit",
    description: "Technical summit on network infrastructure and connectivity",
    date: "May 10-12, 2025",
    image: "/images/events/network-summit.jpg",
    images: ["/images/events/network-summit.jpg"],
    location: "Chittagong University",
    status: "Coming Soon",
  },
];

// About page data
export const projectBackground = {
  established: "2020",
  authority: "University Grants Commission of Bangladesh",
  duration: "2020-2027 (7-year implementation)",
  funding: "World Bank supported initiative",
  scope: "National higher education transformation",
  universities: "50+ partner institutions",
  students: "250,000+ beneficiaries",
};

export const visionMission = {
  vision:
    "Excellence in higher education through innovation, quality, and accessibility",
  mission:
    "To enhance the quality, relevance, and efficiency of higher education in Bangladesh through systematic capacity building, infrastructure development, and institutional strengthening",
};

export const strategicObjectives: Objective[] = [
  {
    title: "Enhance Academic Quality and Relevance",
    description:
      "Improve curriculum design, teaching methodologies, and learning outcomes",
    progress: 75,
  },
  {
    title: "Strengthen Research and Innovation Capacity",
    description:
      "Build research infrastructure and enhance faculty research capabilities",
    progress: 68,
  },
  {
    title: "Improve Digital Infrastructure and Connectivity",
    description:
      "Establish robust ICT infrastructure for modern educational delivery",
    progress: 82,
  },
  {
    title: "Build Institutional Management Capabilities",
    description: "Strengthen administrative and management systems",
    progress: 71,
  },
  {
    title: "Ensure Emergency Preparedness and Resilience",
    description:
      "Develop comprehensive crisis management and business continuity",
    progress: 89,
  },
];

// Notices page data
export const notices: Notice[] = [
  {
    id: "1",
    name: "Network Maintenance Schedule - March 15, 2025",
    description:
      "Scheduled maintenance of core network infrastructure will occur on March 15, 2025, from 2:00 AM to 4:00 AM. Universities may experience temporary connectivity issues during this period. Emergency support will be available at +880-1700-000000.",
    date: "March 10, 2025",
    pdf: "https://factoryze.s3.us-east-005.backblazeb2.com/dev/commpro/pdf/agreement-e0f5897a-bfeb-42f4-88d3-238a05829d75.pdf",
    priority: "Critical",
    category: "Infrastructure",
  },
  {
    id: "2",
    name: "New Training Program Registration Open",
    description:
      "Applications are now open for the Advanced Faculty Development Program starting April 2025. Registration deadline: March 30, 2025. Limited seats available.",
    date: "March 8, 2025",
    pdf: "https://factoryze.s3.us-east-005.backblazeb2.com/dev/commpro/pdf/agreement-e0f5897a-bfeb-42f4-88d3-238a05829d75.pdf",
    priority: "Important",
    category: "Training",
  },
  {
    id: "3",
    name: "HEAT Annual Report 2024 Published",
    description:
      "The comprehensive annual report highlighting HEAT project achievements and impact for 2024 is now available for download.",
    date: "March 5, 2025",
    pdf: "https://factoryze.s3.us-east-005.backblazeb2.com/dev/commpro/pdf/agreement-e0f5897a-bfeb-42f4-88d3-238a05829d75.pdf",
    priority: "General",
    category: "Documentation",
  },
];

// Events page data
export const eventCategories = {
  Conference: 12,
  Workshop: 35,
  Training: 28,
  Seminar: 15,
};

export const featuredEvents: EventItem[] = [
  {
    id: "1",
    name: "Digital Learning Excellence Conference 2025",
    description:
      "Three-day international conference featuring leading experts in digital transformation of higher education.",
    date: "March 25-27, 2025",
    image:
      "https://i.pinimg.com/1200x/d9/9f/a6/d99fa675e07461fa9a4dc9520315238d.jpg",
    images: [
      "https://i.pinimg.com/1200x/d9/9f/a6/d99fa675e07461fa9a4dc9520315238d.jpg",
      "https://i.pinimg.com/1200x/48/89/38/488938d6eec996de2365b072357aac16.jpg",
      "https://i.pinimg.com/1200x/5c/3f/48/5c3f4830d4a9ebcaf3f7532020192bf6.jpg",
    ],
    location: "Dhaka University",
    status: "Open",
    type: "Conference",
    registration: "Open (245/300 registered)",
    capacity: "300 participants",
    organizer: "HEAT Project & Dhaka University",
    contact: "events@heat.ugc.gov.bd",
    agenda: [
      "Day 1: Opening Ceremony & Keynote Presentations",
      "Day 2: Panel Discussions & Interactive Sessions",
      "Day 3: Workshops & Networking Events",
    ],
    requirements: [
      "University faculty or staff member",
      "Valid institutional email address",
      "Registration fee payment",
    ],
  },
  {
    id: "2",
    name: "Faculty Development Intensive Workshop",
    description:
      "Five-day intensive professional development program for university faculty members.",
    date: "April 15-20, 2025",
    image:
      "https://i.pinimg.com/1200x/48/89/38/488938d6eec996de2365b072357aac16.jpg",
    images: [
      "https://i.pinimg.com/1200x/48/89/38/488938d6eec996de2365b072357aac16.jpg",
      "https://i.pinimg.com/1200x/d9/9f/a6/d99fa675e07461fa9a4dc9520315238d.jpg",
      "https://i.pinimg.com/1200x/5c/3f/48/5c3f4830d4a9ebcaf3f7532020192bf6.jpg",
    ],
    location: "BUET, Dhaka",
    status: "Applications Under Review",
    type: "Workshop",
    registration: "Applications Under Review",
    capacity: "50 participants",
    organizer: "BUET & HEAT Project",
    contact: "workshop@buet.ac.bd",
    agenda: [
      "Day 1-2: Curriculum Design & Assessment",
      "Day 3-4: Modern Teaching Methodologies",
      "Day 5: Project Presentations & Certification",
    ],
    requirements: [
      "University faculty member",
      "Minimum 2 years teaching experience",
      "Completed application form",
    ],
  },
  {
    id: "3",
    name: "Research Innovation & Technology Summit",
    description:
      "Annual summit bringing together researchers, academics, and industry leaders.",
    date: "May 10-12, 2025",
    image:
      "https://i.pinimg.com/1200x/5c/3f/48/5c3f4830d4a9ebcaf3f7532020192bf6.jpg",
    images: [
      "https://i.pinimg.com/1200x/5c/3f/48/5c3f4830d4a9ebcaf3f7532020192bf6.jpg",
      "https://i.pinimg.com/1200x/d9/9f/a6/d99fa675e07461fa9a4dc9520315238d.jpg",
      "https://i.pinimg.com/1200x/48/89/38/488938d6eec996de2365b072357aac16.jpg",
    ],
    location: "Rajshahi University",
    status: "Coming Soon",
    type: "Summit",
    registration: "Registration Opens March 1st",
    capacity: "200 participants",
    organizer: "Rajshahi University & HEAT Project",
    contact: "summit@ru.ac.bd",
    agenda: [
      "Day 1: Research Presentations & Innovation Showcase",
      "Day 2: Industry-Academia Collaboration Sessions",
      "Day 3: Technology Trends & Future Outlook",
    ],
    requirements: [
      "Researcher or academic professional",
      "Abstract submission (optional)",
      "Registration confirmation",
    ],
  },
];

// Circulars page data
export const circularCategories = {
  Administrative: 45,
  Financial: 28,
  Academic: 32,
  Technical: 18,
  HR: 15,
};

export const recentCirculars: Circular[] = [
  {
    id: "1",
    type: "Circular",
    name: "Updated Project Implementation Guidelines for Phase II",
    description:
      "Comprehensive guidelines for implementing Phase II activities including budget allocation, timeline management, and quality assurance protocols.",
    deadline: "2025-04-15",
    publishDate: "2025-03-01",
    pdf: "https://factoryze.s3.us-east-005.backblazeb2.com/dev/commpro/pdf/agreement-e0f5897a-bfeb-42f4-88d3-238a05829d75.pdf",
    category: "Administrative",
    authority: "Project Director, HEAT",
    status: "Active",
  },
  {
    id: "2",
    type: "Tender",
    name: "IT Infrastructure Development Tender",
    description:
      "Invitation for tenders for campus network infrastructure development across participating universities. Includes hardware procurement and installation services.",
    deadline: "2025-03-20",
    publishDate: "2025-02-28",
    pdf: "https://factoryze.s3.us-east-005.backblazeb2.com/dev/commpro/pdf/agreement-e0f5897a-bfeb-42f4-88d3-238a05829d75.pdf",
    category: "Technical",
    authority: "Technical Director",
    status: "Active",
  },
  {
    id: "3",
    type: "EOI",
    name: "Expression of Interest - Training Consultants",
    description:
      "Seeking qualified training consultants for faculty development programs. EOI should include expertise areas, previous experience, and proposed training methodologies.",
    deadline: "2025-03-10",
    publishDate: "2025-02-25",
    pdf: "https://factoryze.s3.us-east-005.backblazeb2.com/dev/commpro/pdf/agreement-e0f5897a-bfeb-42f4-88d3-238a05829d75.pdf",
    category: "Training",
    authority: "Training Coordinator",
    status: "Expired",
  },
  {
    id: "4",
    type: "Notice",
    name: "Budget Allocation for Q2 2025 Activities",
    description:
      "Official notice regarding budget allocation for Q2 2025 activities including approved funding amounts and spending guidelines.",
    deadline: "2025-06-30",
    publishDate: "2025-03-05",
    pdf: "https://factoryze.s3.us-east-005.backblazeb2.com/dev/commpro/pdf/agreement-e0f5897a-bfeb-42f4-88d3-238a05829d75.pdf",
    category: "Financial",
    authority: "Financial Controller",
    status: "Active",
  },
];

// Officials page data
export const projectLeadership: Official[] = [
  {
    name: "Dr. M Shafiul Alam",
    position: "Project Director, HEAT",
    background: "Ph.D. in Education Administration, 20+ years experience",
    email: "director@heat.ugc.gov.bd",
    office: "UGC Bhaban, Dhaka",
    wing: "Project Management",
  },
  {
    name: "Professor Dr. Rashida Akter",
    position: "Deputy Project Director",
    specialization: "Academic Development and Quality Assurance",
    email: "deputy@heat.ugc.gov.bd",
    wing: "Academic Affairs",
  },
  {
    name: "Mohammad Ashraf Hossain, CPA",
    position: "Financial Controller",
    experience: "15+ years in project financial management",
    email: "finance@heat.ugc.gov.bd",
    wing: "Finance & Administration",
  },
];

export const wingStructure: Official[] = [
  {
    name: "Dr. Nazma Shaheen",
    position: "Coordinator",
    responsibility: "ATF implementation, curriculum development",
    teamSize: "12 specialists",
    email: "academic@heat.ugc.gov.bd",
    wing: "Academic Transformation Fund (ATF)",
  },
  {
    name: "Professor Dr. Abdul Karim",
    position: "Coordinator",
    responsibility: "Faculty development, professional training",
    teamSize: "15 trainers and coordinators",
    email: "training@heat.ugc.gov.bd",
    wing: "Training Programs",
  },
  {
    name: "Engr. Md. Rafiqul Islam",
    position: "Coordinator",
    responsibility: "Network infrastructure, technical systems",
    teamSize: "20 technical specialists",
    email: "tech@heat.ugc.gov.bd",
    wing: "Campus Network Infrastructure",
  },
  {
    name: "Dr. Fahmida Khatun",
    position: "Coordinator",
    responsibility: "Research network, global partnerships",
    teamSize: "8 network specialists",
    email: "bdren@heat.ugc.gov.bd",
    wing: "BdREN Strengthening",
  },
  {
    name: "Md. Kamrul Hassan, PMP",
    position: "Coordinator",
    responsibility: "Project tracking, performance monitoring",
    teamSize: "10 monitoring specialists",
    email: "monitoring@heat.ugc.gov.bd",
    wing: "Project Management & Monitoring",
  },
  {
    name: "Brigadier General (Retd.) Md. Jahangir Alam",
    position: "Coordinator",
    responsibility: "Crisis management, business continuity",
    teamSize: "6 emergency specialists",
    email: "emergency@heat.ugc.gov.bd",
    wing: "Emergency Response",
  },
  {
    name: "Ms. Sultana Razia",
    position: "Coordinator",
    responsibility: "Administrative support, public relations",
    teamSize: "8 administrative staff",
    email: "admin@heat.ugc.gov.bd",
    wing: "Administration",
  },
];

// ATF Supporting Documents - Admin manageable
export interface ATFDocument {
  id: string;
  title: string;
  category: string;
  type: "PDF" | "Word" | "Excel" | "PowerPoint";
  url: string;
  size: string;
  uploadDate: string;
  downloads: number;
  isActive: boolean;
  description?: string;
}

export const atfSupportingDocuments: ATFDocument[] = [
  {
    id: "atf-doc-1",
    title: "Appendix-3 ATFOM SPP Annexes (full)",
    category: "Application Forms",
    type: "PDF",
    url: "/documents/atf/appendix-3-atfom-spp-annexes.pdf",
    size: "2.1 MB",
    uploadDate: "2025-01-10",
    downloads: 245,
    isActive: true,
    description: "Complete ATFOM SPP Annexes for proposal submission",
  },
  {
    id: "atf-doc-2",
    title: "Environment and Safety Checklist Small",
    category: "Compliance",
    type: "PDF",
    url: "/documents/atf/environment-safety-checklist.pdf",
    size: "0.8 MB",
    uploadDate: "2025-01-10",
    downloads: 189,
    isActive: true,
    description: "Environmental and safety compliance checklist",
  },
  {
    id: "atf-doc-3",
    title: "Environmental Monitoring and Mitigation Plan",
    category: "Compliance",
    type: "PDF",
    url: "/documents/atf/environmental-monitoring-plan.pdf",
    size: "1.5 MB",
    uploadDate: "2025-01-10",
    downloads: 156,
    isActive: true,
    description: "Environmental monitoring and mitigation planning template",
  },
  {
    id: "atf-doc-4",
    title: "Milestones",
    category: "Project Planning",
    type: "Excel",
    url: "/documents/atf/milestones-template.xlsx",
    size: "0.3 MB",
    uploadDate: "2025-01-10",
    downloads: 278,
    isActive: true,
    description: "Project milestones tracking template",
  },
  {
    id: "atf-doc-5",
    title: "Partnership Agreement",
    category: "Legal",
    type: "Word",
    url: "/documents/atf/partnership-agreement.docx",
    size: "0.6 MB",
    uploadDate: "2025-01-10",
    downloads: 198,
    isActive: true,
    description: "Partnership agreement template for collaborative projects",
  },
  {
    id: "atf-doc-6",
    title: "Social Screening Form",
    category: "Application Forms",
    type: "PDF",
    url: "/documents/atf/social-screening-form.pdf",
    size: "0.9 MB",
    uploadDate: "2025-01-10",
    downloads: 167,
    isActive: true,
    description: "Social screening and impact assessment form",
  },
  {
    id: "atf-doc-7",
    title: "Sub-project Management Team",
    category: "Project Planning",
    type: "Word",
    url: "/documents/atf/subproject-management-team.docx",
    size: "0.4 MB",
    uploadDate: "2025-01-10",
    downloads: 234,
    isActive: true,
    description: "Sub-project management team structure template",
  },
  {
    id: "atf-doc-8",
    title: "Sub-project Proposal Endorsement by University Management",
    category: "Approval",
    type: "PDF",
    url: "/documents/atf/proposal-endorsement.pdf",
    size: "0.7 MB",
    uploadDate: "2025-01-10",
    downloads: 189,
    isActive: true,
    description: "University management endorsement form",
  },
  {
    id: "atf-doc-9",
    title: "Training Plan",
    category: "Project Planning",
    type: "Word",
    url: "/documents/atf/training-plan.docx",
    size: "0.5 MB",
    uploadDate: "2025-01-10",
    downloads: 201,
    isActive: true,
    description: "Training and capacity building plan template",
  },
  {
    id: "atf-doc-10",
    title: "Work Activities Plan (Indicative)",
    category: "Project Planning",
    type: "Excel",
    url: "/documents/atf/work-activities-plan.xlsx",
    size: "0.4 MB",
    uploadDate: "2025-01-10",
    downloads: 223,
    isActive: true,
    description: "Indicative work activities planning template",
  },
  {
    id: "atf-doc-11",
    title: "Appendix-2 ATFOM-SPP Formats",
    category: "Application Forms",
    type: "PDF",
    url: "/documents/atf/appendix-2-atfom-spp-formats.pdf",
    size: "1.8 MB",
    uploadDate: "2025-01-10",
    downloads: 267,
    isActive: true,
    description: "ATFOM-SPP application formats and guidelines",
  },
  {
    id: "atf-doc-12",
    title: "Appendix-4 ATFOM-Eval Annexes",
    category: "Evaluation",
    type: "PDF",
    url: "/documents/atf/appendix-4-atfom-eval-annexes.pdf",
    size: "1.3 MB",
    uploadDate: "2025-01-10",
    downloads: 145,
    isActive: true,
    description: "ATFOM evaluation annexes and criteria",
  },
  {
    id: "atf-doc-13",
    title: "Financial Budget Format New",
    category: "Financial",
    type: "Excel",
    url: "/documents/atf/financial-budget-format.xlsx",
    size: "0.6 MB",
    uploadDate: "2025-01-10",
    downloads: 312,
    isActive: true,
    description: "Updated financial budget preparation format",
  },
  {
    id: "atf-doc-14",
    title: "Procurement Plan",
    category: "Project Planning",
    type: "Word",
    url: "/documents/atf/procurement-plan.docx",
    size: "0.7 MB",
    uploadDate: "2025-01-10",
    downloads: 178,
    isActive: true,
    description: "Procurement planning template and guidelines",
  },
];

export const contactInfo = {
  mainOffice: "+880-2-9129666",
  emergencyHotline: "+880-1700-000000 (24/7)",
  email: "info@heat.ugc.gov.bd",
  address: "UGC Bhaban, Agargaon, Dhaka-1207",
  officeHours: "Sunday-Thursday, 9:00 AM - 5:00 PM",
};

// ATF Windows System
export const atfWindows: ATFWindow[] = [
  {
    id: "w1",
    title: "Window 1: Pandemic Readiness Related Research and Development",
    focus: [
      "Biochemical/Virological research",
      "Medical and Pharmaceutical development",
      "Social Adaptation & Institutional Readiness",
    ],
    description:
      "Supporting research initiatives focused on pandemic preparedness and response capabilities",
    sppFormat: "SPP Format W-1",
    status: "Open",
  },
  {
    id: "w2",
    title: "Window 2: Improving Teaching-Learning Infrastructure",
    focus: [
      "Undergraduate program enhancement",
      "Master's program infrastructure development",
      "Laboratory and classroom modernization",
    ],
    description:
      "Enhancing physical and digital infrastructure for improved teaching and learning experiences",
    sppFormat: "SPP Format W-2",
    status: "Open",
  },
  {
    id: "w3a",
    title: "Window 3a: Advanced Research in Priority Areas",
    focus: [
      "STAGE/STEM research initiatives",
      "AHSBL (Arts, Humanities, Social Sciences, Business, Law)",
      "Junior academic-led research",
      "Climate change and resilience studies",
    ],
    description:
      "Supporting advanced research across priority academic disciplines and emerging fields",
    sppFormat: "SPP Format W-3a",
    status: "Open",
  },
  {
    id: "w3b",
    title:
      "Window 3b: Collaborative Research with Industries and Research Institutes",
    focus: [
      "University-industry partnerships",
      "Technology transfer initiatives",
      "Commercial research applications",
      "Innovation and patent development",
    ],
    description:
      "Fostering collaboration between universities and industry for practical research applications",
    sppFormat: "SPP Format W-3b",
    status: "Open",
  },
  {
    id: "w4",
    title: "Window 4: Innovation Support Facilities (ISF)",
    focus: [
      "Fab-Lab establishment",
      "Innovation Laboratory (i-Lab) setup",
      "Business Incubator development",
    ],
    description:
      "Creating physical spaces and facilities to support innovation and entrepreneurship",
    sppFormat: "SPP Format W-4",
    status: "Open",
  },
  {
    id: "w5",
    title: "Window 5: Technology Transfer Office (TTO)",
    focus: [
      "Intellectual Property management",
      "Patent filing and commercialization",
      "Industry liaison services",
    ],
    description:
      "Establishing offices to manage technology transfer and intellectual property commercialization",
    sppFormat: "SPP Format W-5",
    status: "Open",
  },
];

// Wing Structure
export const wings: Wing[] = [
  {
    name: "Engineers Wing",
    description:
      "Technical infrastructure specialists and network implementation experts",
    color: "bg-blue-100",
    icon: "🔧",
    officials: [
      {
        name: "Engr. Md. Rafiqul Islam",
        position: "Chief Engineer",
        wing: "Engineers Wing",
        email: "engineers@heat.ugc.gov.bd",
        phone: "+880-2-9129666",
        specialization: "Network Infrastructure & System Architecture",
        experience: "15+ years in technical infrastructure",
      },
    ],
  },
  {
    name: "Teachers Wing",
    description:
      "Academic program coordinators and faculty development specialists",
    color: "bg-green-100",
    icon: "👨‍🏫",
    officials: [
      {
        name: "Professor Dr. Abdul Karim",
        position: "Head of Teachers Wing",
        wing: "Teachers Wing",
        email: "teachers@heat.ugc.gov.bd",
        phone: "+880-2-9129667",
        specialization: "Academic Program Development",
        experience: "20+ years in higher education",
      },
    ],
  },
  {
    name: "PDP Wing",
    description:
      "Professional Development Program managers and capacity building experts",
    color: "bg-purple-100",
    icon: "📚",
    officials: [
      {
        name: "Dr. Nazma Shaheen",
        position: "PDP Coordinator",
        wing: "PDP Wing",
        email: "pdp@heat.ugc.gov.bd",
        phone: "+880-2-9129668",
        specialization: "Professional Development & Training",
        experience: "12+ years in faculty development",
      },
    ],
  },
  {
    name: "Administrative Wing",
    description:
      "Project management professionals and operations coordination staff",
    color: "bg-orange-100",
    icon: "📋",
    officials: [
      {
        name: "Ms. Sultana Razia",
        position: "Administrative Head",
        wing: "Administrative Wing",
        email: "admin@heat.ugc.gov.bd",
        phone: "+880-2-9129669",
        specialization: "Project Management & Operations",
        experience: "10+ years in project administration",
      },
    ],
  },
  {
    name: "Technical Wing",
    description:
      "IT and system administrators and digital infrastructure experts",
    color: "bg-indigo-100",
    icon: "💻",
    officials: [
      {
        name: "Engr. Md. Kamrul Hassan",
        position: "Technical Director",
        wing: "Technical Wing",
        email: "tech@heat.ugc.gov.bd",
        phone: "+880-2-9129670",
        specialization: "IT Systems & Digital Infrastructure",
        experience: "18+ years in technical systems",
      },
    ],
  },
  {
    name: "Procurement Wing",
    description: "Purchasing and tender management specialists",
    color: "bg-yellow-100",
    icon: "📦",
    officials: [
      {
        name: "Mr. Mohammad Ashraf Hossain",
        position: "Procurement Head",
        wing: "Procurement Wing",
        email: "procurement@heat.ugc.gov.bd",
        phone: "+880-2-9129671",
        specialization: "Procurement & Contract Management",
        experience: "14+ years in procurement",
      },
    ],
  },
  {
    name: "Finance Wing",
    description: "Financial management and budget monitoring specialists",
    color: "bg-red-100",
    icon: "💰",
    officials: [
      {
        name: "Mr. Mohammad Ashraf Hossain, CPA",
        position: "Financial Controller",
        wing: "Finance Wing",
        email: "finance@heat.ugc.gov.bd",
        phone: "+880-2-9129672",
        specialization: "Financial Management & Budget Control",
        experience: "15+ years in project financial management",
      },
    ],
  },
];

// Project Overview
export const projectOverview = {
  implementationPeriod: "January 2023 - June 2028",
  sponsoringMinistry: "Secondary and Higher Education Division",
  implementingAgency: "University Grants Commission (UGC) of Bangladesh",
  totalCost: "401,657 Lac Taka",
  gobContribution: "203,346 Lac Taka",
  paContribution: "198,312 Lac Taka",
  facultyTraining: "5,000 direct beneficiaries",
  studentImpact: "600,000 students from Bangladesh",
  regionalScope: "50,000 teachers from participating countries",
  totalStudents: "2 million across all participating countries",
};

// BdREN Investment Details
export const bdrenInvestment = {
  digitalLibrary: {
    totalInvestment: "40 crore Taka",
    currentStatus: "20 crore in processing",
    content: "Academic journals, research databases, educational materials",
  },
  vdiLabs: {
    quantity: "20-25 specialized computer laboratories",
    features: "Industry-standard applications for various disciplines",
    access: "Scheduled and on-demand student access",
  },
  lmi: {
    description: "Centralized learning management system",
    features: "Faculty-created educational materials from across Bangladesh",
    integration: "Course management and collaboration tools",
  },
};

// Supporting Documents
export const supportingDocuments: Document[] = [
  {
    id: "doc1",
    title: "ATF Application Guidelines",
    category: "ATF",
    type: "PDF",
    url: "/documents/atf-guidelines.pdf",
    size: "2.3 MB",
    uploadDate: "2025-01-15",
    downloads: 245,
  },
  {
    id: "doc2",
    title: "Evaluation Criteria and Scoring Rubrics",
    category: "ATF",
    type: "PDF",
    url: "/documents/evaluation-criteria.pdf",
    size: "1.8 MB",
    uploadDate: "2025-01-10",
    downloads: 189,
  },
  {
    id: "doc3",
    title: "Budget Preparation Templates",
    category: "ATF",
    type: "Excel",
    url: "/documents/budget-templates.xlsx",
    size: "0.5 MB",
    uploadDate: "2025-01-08",
    downloads: 312,
  },
  {
    id: "doc4",
    title: "Environmental and Safety Checklists",
    category: "Compliance",
    type: "PDF",
    url: "/documents/environmental-checklist.pdf",
    size: "1.2 MB",
    uploadDate: "2025-01-05",
    downloads: 156,
  },
];

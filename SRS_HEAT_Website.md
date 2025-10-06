# Software Requirements Specification (SRS)
## HEAT Project Website

**Version:** 1.0  
**Date:** October 6, 2025  
**Project:** Higher Education Acceleration and Transformation (HEAT)  
**Organization:** University Grants Commission (UGC), Bangladesh

---

## Table of Contents
1. [Introduction](#1-introduction)
2. [Project Overview](#2-project-overview)
3. [Technical Stack](#3-technical-stack)
4. [System Architecture](#4-system-architecture)
5. [Component Structure](#5-component-structure)
6. [Data Schema](#6-data-schema)
7. [Page Structure](#7-page-structure)
8. [Design Guidelines](#8-design-guidelines)
9. [Development Workflow](#9-development-workflow)
10. [Deployment Configuration](#10-deployment-configuration)

---

## 1. Introduction

### 1.1 Purpose
This document provides a comprehensive specification for the HEAT Project website, including technical architecture, component structure, data models, and development guidelines.

### 1.2 Scope
The HEAT website serves as the primary digital platform for the Higher Education Acceleration and Transformation project, providing information about project components, officials, events, notices, and circulars.

### 1.3 Document Conventions
- **Frontend Framework:** Next.js 15.5.3 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel

---

## 2. Project Overview

### 2.1 Project Description
HEAT (Higher Education Acceleration and Transformation) is a comprehensive initiative by UGC Bangladesh to transform the higher education sector through:
- Academic quality improvement
- Research capacity building
- Infrastructure development
- International collaboration
- Women's empowerment in academia
- Quality assurance and accreditation

### 2.2 Key Stakeholders
- **Primary Users:** University administrators, faculty, students, researchers
- **Secondary Users:** Government officials, international partners, general public
- **Project Team:** UGC Bangladesh, World Bank, participating universities

---

## 3. Technical Stack

### 3.1 Core Technologies
```json
{
  "framework": "Next.js 15.5.3",
  "react": "^19.0.0",
  "typescript": "^5",
  "tailwindcss": "^3.4.1",
  "lucide-react": "^0.460.0"
}
```

### 3.2 Build Tools
- **Turbopack:** Next.js build system
- **ESLint:** Code linting
- **PostCSS:** CSS processing

### 3.3 Development Environment
- **Node.js:** v18+ required
- **Package Manager:** npm or pnpm
- **Git:** Version control
- **IDE:** VSCode recommended

---

## 4. System Architecture

### 4.1 Directory Structure
```
heat-website/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/
│   │   ├── admin/
│   │   ├── circulars/
│   │   ├── components/
│   │   │   ├── atf/
│   │   │   ├── bdren/
│   │   │   ├── emergency/
│   │   │   ├── monitoring/
│   │   │   ├── network/
│   │   │   ├── quality-assurance/
│   │   │   ├── training/
│   │   │   └── womens-network/
│   │   ├── events/
│   │   ├── notices/
│   │   ├── officials/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/      # Reusable React components
│   │   ├── About/
│   │   ├── Circulars/
│   │   ├── Events/
│   │   ├── Home/
│   │   ├── Notices/
│   │   └── Layout.tsx
│   └── data/
│       └── demoData.ts  # Data models and demo data
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

### 4.2 Routing Structure
- **Static Pages:** Home, About, Officials
- **Dynamic Routes:** `/events/[id]`, `/notices/[id]`, `/circulars/[id]`
- **Component Pages:** 8 dedicated component pages under `/components/*`

---

## 5. Component Structure

### 5.1 Eight Main Components

#### 5.1.1 ATF (Academic Transformation Fund)
- **Route:** `/components/atf`
- **Purpose:** Competitive research grants and innovation support
- **Key Sections:** Overview, Grant Types, Application Process, Success Stories
- **Color Theme:** Blue

#### 5.1.2 Training Programs
- **Route:** `/components/training`
- **Purpose:** Faculty and staff professional development
- **Key Sections:** Training Types, Calendar, Application, Alumni
- **Color Theme:** Green

#### 5.1.3 Campus Network Infrastructure
- **Route:** `/components/network`
- **Purpose:** Digital connectivity and infrastructure
- **Key Sections:** Network Coverage, Benefits, Technical Specs
- **Color Theme:** Purple

#### 5.1.4 BdREN Strengthening
- **Route:** `/components/bdren`
- **Purpose:** Bangladesh Research and Education Network
- **Key Sections:** Network Overview, International Partnerships, Services
- **Color Theme:** Indigo

#### 5.1.5 Monitoring and Evaluation
- **Route:** `/components/monitoring`
- **Purpose:** Three-tier M&E system for project tracking
- **Sub-component:** 2.3 (Updated October 2025)
- **Key Sections:**
  - Three-Tier Monitoring System
  - Key Performance Areas
  - Data Transparency Dashboard
  - Accountability & Transparency
- **Color Theme:** Orange
- **Special Features:**
  - Tier 1: Six-Monthly Progress Monitoring (500+ sub-projects)
  - Tier 2: Result Framework Monitoring (PDO indicators)
  - Tier 3: Sub-Project Completion Evaluation

#### 5.1.6 Women's Network
- **Route:** `/components/womens-network`
- **Purpose:** Women's leadership and network development
- **Sub-component:** 1.2.2 (Added October 2025)
- **Key Sections:**
  - Women's Leadership Development
  - Student Support Programs
  - Faculty Development for Women
  - Employment & Entrepreneurship
  - Regional & Global Network Participation
  - Target Groups
  - Expected Outcomes
- **Color Theme:** Pink/Purple gradient
- **Target Groups:** Female students, faculty, administrators, researchers
- **Special Note:** Sub-component 1.2.1 (Asian University for Women) removed

#### 5.1.7 Quality Assurance & Accreditation
- **Route:** `/components/quality-assurance`
- **Purpose:** Improving governance and quality standards
- **Sub-component:** 2.3 (Added October 2025)
- **Key Sections:**
  - Three Pillars of Quality Enhancement
  - Implementation Process & Timeline
  - Expected Outcomes
  - Quantitative Targets
- **Color Theme:** Blue/Indigo gradient
- **Three Pillars:**
  1. Quality Assurance Systems
  2. International Quality Assurance Collaboration (IQAC)
  3. Accreditation Support (30 programs target)
- **Special Features:**
  - IQAC establishment and tracking
  - Self-assessment processes
  - Peer review mechanisms
  - Bangladesh Accreditation Council partnership

#### 5.1.8 Emergency Response
- **Route:** `/components/emergency`
- **Purpose:** Crisis management and business continuity
- **Key Sections:** Emergency Plans, Response Teams, Resources
- **Color Theme:** Red

### 5.2 Navigation Structure
All components are accessible through:
- Homepage ComponentsGrid
- Main navigation dropdown menu
- Footer component links
- About page ComponentOverview

---

## 6. Data Schema

### 6.1 Core Interfaces

#### 6.1.1 Official Interface
```typescript
interface Official {
  name: string;
  banglaName?: string;
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
```

**Wings:**
- Project Management
- ATF (Academic Transformation Fund)
- Training & Professional Development
- Network Infrastructure
- BdREN Operations
- Monitoring and Evaluation
- Women's Network Development (Added Oct 2025)
- Quality Assurance & Accreditation (Added Oct 2025)
- Emergency Response

#### 6.1.2 Event Interface
```typescript
interface EventItem {
  id: string;
  name: string;
  description: string;
  content?: string;
  date: string;
  image: string;
  images: string[];
  location: string;
  status: string;
  type?: string;
  capacity?: string;
  organizer?: string;
  contact?: string;
}
```

#### 6.1.3 Notice Interface
```typescript
interface Notice {
  id: string;
  name: string;
  description: string;
  date: string;
  priority: "Critical" | "Important" | "General";
  category: string;
  attachmentUrl?: string;
  content?: string;
}
```

#### 6.1.4 Circular Interface
```typescript
interface Circular {
  id: string;
  name: string;
  description: string;
  date: string;
  deadline: string;
  category: string;
  type: "Tender" | "Circular";
  status: "Active" | "Upcoming" | "Expired";
  eligibility?: string;
  attachmentUrl?: string;
  content?: string;
}
```

#### 6.1.5 Component Card Interface
```typescript
interface ComponentCard {
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  link: string;
}
```

### 6.2 Data Location
- **File:** `src/data/demoData.ts`
- **Export Structure:** Named exports for each data type
- **Demo Data:** Pre-populated for development and testing

### 6.3 Backend Integration Points
Future API endpoints to be implemented:
- `/api/officials` - GET all officials, filter by wing
- `/api/events` - GET, POST, PUT, DELETE events
- `/api/notices` - GET, POST, PUT, DELETE notices
- `/api/circulars` - GET, POST, PUT, DELETE circulars
- `/api/admin/*` - Admin management endpoints

**Note:** IDs should NOT be sent from frontend; backend handles ID generation.

---

## 7. Page Structure

### 7.1 Home Page
**Route:** `/`
**Sections:**
1. HeroSection - Project introduction and call-to-action
2. ComponentsGrid - 8 component cards with links
3. StatisticsDashboard - Key project metrics
4. LatestUpdates - Recent news and announcements
5. UpcomingEvents - Featured events calendar

### 7.2 About Page
**Route:** `/about`
**Sections:**
1. HeroSection - Project overview
2. ProjectOverview - Detailed description
3. MainObjectives - 4 primary objectives
4. TargetBeneficiaries - Stakeholder groups
5. VisionMission - Project goals
6. StrategicObjectives - Implementation strategy
7. ComponentOverview - All 8 components with budget/impact

### 7.3 Officials Page
**Route:** `/officials`
**Structure:**
- Project Director (PD) - centered
- Deputy Project Director (DPD) - centered
- All Officials List - filterable by 9 wings
- Consultant - centered

**Features:**
- Wing-wise filtering
- Mobile-responsive grid (4 cards per row on desktop)
- Official vibe design (government/institutional style)
- PersonCard component with:
  - Rectangular image (contained, with padding)
  - Name (English + Bangla)
  - Position
  - Contact (email, phone, office)
  - Leadership badge (for PD, DPD, Consultant)
  - Wing badge (for all officials)
  - Border and header/footer banners

### 7.4 Events Page
**Route:** `/events`
**Features:**
- Event categories filter
- EventsCalendar
- FeaturedEvents
- Dynamic route: `/events/[id]` for event details

### 7.5 Notices Page
**Route:** `/notices`
**Features:**
- Priority filter (Critical, Important, General)
- Category filter
- Search functionality
- PriorityLegend
- Dynamic route: `/notices/[id]` for notice details

### 7.6 Circulars Page
**Route:** `/circulars`
**Features:**
- Type filter (Tender, Circular)
- Category filter
- Status indication (Active, Upcoming, Expired)
- Dynamic route: `/circulars/[id]` for circular details

### 7.7 Admin Page
**Route:** `/admin`
**Purpose:** Backend management (to be implemented)
**Planned Features:**
- Content management
- User management
- Analytics dashboard

---

## 8. Design Guidelines

### 8.1 Color Palette

#### 8.1.1 Primary Colors
- **Blue:** Primary actions, ATF component
- **Green:** Training component, success states
- **Purple:** Network component
- **Indigo:** BdREN component
- **Orange:** Monitoring & Evaluation component
- **Pink/Purple:** Women's Network component
- **Blue/Indigo:** Quality Assurance component
- **Red:** Emergency component, critical alerts

#### 8.1.2 Neutral Colors
- **Gray-50 to Gray-900:** Text, backgrounds, borders
- **White:** Card backgrounds, clean sections

### 8.2 Typography
- **Font:** System default sans-serif
- **Headings:** Bold, varying sizes (text-3xl to text-6xl)
- **Body:** Regular weight, text-base to text-lg
- **Line Height:** Generous for readability

### 8.3 Component Design Patterns

#### 8.3.1 Card Components
```tsx
// Standard card pattern
<div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
  {/* Card content */}
</div>
```

#### 8.3.2 Section Layout
```tsx
<section className="py-16 bg-{color}">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

#### 8.3.3 Grid Layouts
- **Mobile:** `grid-cols-1`
- **Tablet:** `md:grid-cols-2`
- **Desktop:** `lg:grid-cols-3` or `lg:grid-cols-4`

### 8.4 Responsive Design
- **Mobile-first:** Start with mobile layout
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Testing:** Ensure all pages work on mobile, tablet, desktop

### 8.5 Accessibility
- **Alt text** for all images
- **Semantic HTML** (header, nav, main, section, footer)
- **Keyboard navigation** support
- **Color contrast** meets WCAG standards

### 8.6 Text Escaping
**Important:** Always use template literals for apostrophes:
```tsx
// ✅ Correct
{`Women's Network`}

// ❌ Incorrect (shows "apos;" in UI)
Women&apos;s Network
```

---

## 9. Development Workflow

### 9.1 Local Development

#### 9.1.1 Setup
```bash
cd /Users/fahadhossain/All-projects/Heat/heat-website
npm install  # or pnpm install
```

#### 9.1.2 Run Dev Server
```bash
npm run dev  # Runs on http://localhost:3000 (or 3002 if 3000 is busy)
```

#### 9.1.3 Build Production
```bash
npm run build  # Test production build locally
```

### 9.2 Git Workflow

#### 9.2.1 Remotes
- **origin:** `git@github.com:FahadHossain9/heat.git`
- **heat-portfolio:** `git@github.com:FahadHossain9/heat_portfolio.git`

#### 9.2.2 Commit Guidelines
```bash
# Commit types
feat: New feature
fix: Bug fix
docs: Documentation changes
style: Code style changes (formatting)
refactor: Code refactoring
test: Adding tests
chore: Maintenance tasks

# Example
git commit -m "feat: Add Women's Network component page"
```

#### 9.2.3 Push Commands
```bash
# Push to both remotes
git push heat-portfolio main
git push origin main
```

### 9.3 Code Quality

#### 9.3.1 ESLint Rules
- **No unused variables:** Remove all unused imports/variables
- **No unescaped entities:** Use template literals for apostrophes
- **Image optimization:** Consider using `next/image` instead of `<img>`

#### 9.3.2 TypeScript
- **Strict mode:** Enabled
- **Type all props:** No `any` types in components
- **Interface exports:** Export interfaces from `demoData.ts`

---

## 10. Deployment Configuration

### 10.1 Vercel Setup

#### 10.1.1 Environment
- **Platform:** Vercel
- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

#### 10.1.2 Domains
- **Production:** `heatportfolio-git-main-fahadhossain9s-projects.vercel.app`
- **Preview:** Auto-generated for each commit

#### 10.1.3 Build Process
1. Code pushed to `heat-portfolio` remote
2. Vercel detects push
3. Runs `npm install`
4. Runs `npm run build`
5. Runs ESLint checks
6. Deploys if all checks pass

### 10.2 Next.js Configuration

#### 10.2.1 Image Optimization
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "factoryze.s3.us-east-005.backblazeb2.com",
      },
    ],
  },
};
```

#### 10.2.2 Allowed Image Domains
- `i.pinimg.com` - Official placeholder images
- `factoryze.s3.us-east-005.backblazeb2.com` - CDN storage
- `heat.ugc.gov.bd` - Official HEAT logos

### 10.3 Environment Variables
Future environment variables to be added:
```env
NEXT_PUBLIC_API_URL=
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

---

## 11. Known Issues and Workarounds

### 11.1 Development Server Errors
**Issue:** Build manifest temporary file errors
```
Error: ENOENT: no such file or directory, open '.next/static/development/_buildManifest.js.tmp.*'
```
**Workaround:** Delete `.next` folder and restart dev server
```bash
rm -rf .next
npm run dev
```

### 11.2 Port Conflicts
**Issue:** Port 3000 already in use
**Solution:** Next.js automatically uses port 3002
**Manual Override:**
```bash
PORT=3003 npm run dev
```

### 11.3 Image Hostname Errors
**Issue:** Unconfigured image hostname
**Solution:** Add hostname to `next.config.ts` `remotePatterns`

---

## 12. Future Enhancements

### 12.1 Phase 2 Features
- [ ] Backend API integration
- [ ] User authentication and authorization
- [ ] Admin dashboard functionality
- [ ] Real-time data updates
- [ ] File upload for circulars/notices
- [ ] Advanced search functionality
- [ ] Multi-language support (English/Bangla)

### 12.2 Phase 3 Features
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Mobile app
- [ ] AI-powered search
- [ ] Chatbot integration

---

## 13. Contact and Support

### 13.1 Technical Support
- **Developer:** Contact through project repository
- **Documentation:** This SRS document
- **Code Repository:** GitHub (heat and heat_portfolio)

### 13.2 Project Management
- **Client:** UGC Bangladesh
- **Project Coordinator:** To be assigned
- **Technical Lead:** To be assigned

---

## 14. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Oct 6, 2025 | Development Team | Initial SRS document |
| | | | - Added 8 components structure |
| | | | - Added Women's Network component |
| | | | - Added Quality Assurance component |
| | | | - Updated M&E component content |
| | | | - Fixed apostrophe display issues |
| | | | - Documented data schema |

---

## 15. Appendices

### Appendix A: Quick Reference Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Git workflow
git add .
git commit -m "type: message"
git push heat-portfolio main
git push origin main

# Clean build
rm -rf .next
npm run build
```

### Appendix B: Important File Paths
- Components: `/src/app/components/[component-name]/page.tsx`
- Reusable Components: `/src/components/[section]/[ComponentName].tsx`
- Data Models: `/src/data/demoData.ts`
- Layout: `/src/components/Layout.tsx`
- Global Styles: `/src/app/globals.css`
- Configuration: `/next.config.ts`, `/tailwind.config.ts`

### Appendix C: Component Color Reference
```typescript
const componentColors = {
  atf: "blue-600",
  training: "green-600",
  network: "purple-600",
  bdren: "indigo-600",
  monitoring: "orange-600",
  womensNetwork: "pink-600",
  qualityAssurance: "blue-600",
  emergency: "red-600",
};
```

---

**Document End**

_This SRS document serves as the single source of truth for the HEAT Project website development. All team members should reference this document for technical specifications, design guidelines, and development workflows._


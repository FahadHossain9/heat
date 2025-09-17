# HEAT Portfolio Website

A comprehensive Next.js website for the Higher Education Acceleration and Transformation (HEAT) project by the University Grants Commission (UGC) of Bangladesh.

## 🚀 Features

- **12 Complete Pages**: Home, About, Components (ATF, Training, Network, BdREN, Monitoring, Emergency), Notices, Events, Circulars, Officials, and Admin Panel
- **Admin Panel**: Full content management system for administrators
- **ATF Six Windows System**: Complete implementation of the Academic Transformation Fund windows
- **Wing-Based Organization**: Detailed officials directory with specializations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Local Data Persistence**: Demo data stored in local arrays
- **Modern UI**: Clean, professional design with interactive components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify Ready

## 📋 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin panel
│   ├── components/        # Component pages (ATF, Training, etc.)
│   ├── about/             # About page
│   ├── notices/           # Notices page
│   ├── events/            # Events page
│   ├── circulars/         # Circulars page
│   ├── officials/         # Officials directory
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── Layout.tsx         # Main layout component
└── data/                  # Demo data
    └── demoData.ts        # All project data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/FahadHossain9/heat.git
cd heat
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages Overview

### Public Pages
- **Home**: Project overview with statistics and component cards
- **About**: Project background, objectives, and target beneficiaries
- **Components**: Six detailed component pages (ATF, Training, Network, BdREN, Monitoring, Emergency)
- **Notices**: Dynamic notice system with search and filtering
- **Events**: Event management with categories and calendar view
- **Circulars**: Administrative communications system
- **Officials**: Wing-based staff directory

### Admin Panel
- **Dashboard**: Overview of system statistics
- **Content Management**: Edit homepage statistics and content
- **ATF Management**: Manage ATF windows and documents
- **Document Management**: Upload and manage files
- **User Management**: Admin user controls

## 🎯 Key Components

### ATF (Academic Transformation Fund)
- Six windows system with detailed focus areas
- SPP document downloads
- Application guidelines and evaluation criteria

### Training Programs
- Local and international expert programs
- Digital skills development
- Research capacity building

### Campus Network
- Universal connectivity initiative
- High-speed internet access for all public universities
- Implementation features and benefits

### BdREN Strengthening
- Network expansion overview
- Virtual Desktop Infrastructure (VDI)
- Learning Management Infrastructure (LMI)

## 🚀 Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

### Environment Variables

No environment variables required for basic functionality.

## 📊 Data Management

All demo data is stored in `src/data/demoData.ts` and includes:
- Homepage statistics
- ATF windows and documents
- Wing structure and officials
- Project overview and objectives
- Events, notices, and circulars

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is developed for the University Grants Commission (UGC) of Bangladesh.

## 📞 Contact

For questions or support, contact the HEAT project team at info@heat.ugc.gov.bd

---

**HEAT Project** - Transforming Bangladesh's Higher Education Through Strategic Development
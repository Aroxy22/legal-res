# LEGALRES - Comprehensive Legal Platform

A modern, end-to-end legal platform that connects lawyers with users, provides educational resources for legal professionals, and offers AI-powered legal services.

## 🎯 Overview

LEGALRES is a comprehensive three-in-one platform that addresses the complete legal ecosystem. Powered by Google Gemini AI for intelligent legal assistance.

### 1. **Lawyer-User Matching Platform**
An intelligent matching system that connects users with verified lawyers based on custom inputs such as:
- **Location**: Find lawyers in your city or region
- **Years of Experience**: Filter by experience level (0-20+ years)
- **Practice Area**: Specialized legal fields (Family, Corporate, Property, etc.)
- **Language Preferences**: Connect with lawyers who speak your preferred language
- **Court Experience**: Match based on specific court requirements

### 2. **Educational Platform for Lawyers**
A comprehensive learning and networking hub where legal professionals can:
- **Online Seminars**: Join expert-led seminars on various legal topics
- **Interactive Workshops**: Participate in hands-on workshops to develop practical skills
- **Lawyer Community**: Connect with peers, share insights, discuss cases, and build professional networks
- **Category-based Learning**: Filter by practice areas and skill levels
- **Event Registration**: Easy registration for seminars and workshops

### 3. **AI-Powered Legal Services** ⚡ Powered by Google Gemini AI
Intelligent AI tools to assist with common legal needs:
- **Will Generation**: AI-powered will drafting with customizable templates
- **Patent Consulting**: Guidance on patent applications, prior art searches, and patentability analysis
- **Legal Consultation**: Interactive AI assistant powered by Google Gemini for answering legal questions with fast, accurate responses
- **Document Generation**: Automated legal document creation
- **Fast Response Times**: Optimized for quick AI responses using Gemini Pro model

## ✨ Key Features

### For Users
- 🔍 **Advanced Lawyer Search**: Filter by location, experience, practice area, and more
- 📋 **Intake Process**: Guided questionnaire to understand legal needs
- 🤖 **AI Services**: Instant access to AI-powered legal tools
- ⚡ **Quick Matching**: Get matched with relevant lawyers quickly
- 📱 **Responsive Design**: Works seamlessly on all devices

### For Lawyers
- 🎓 **Educational Resources**: Access seminars, workshops, and community forums
- 📊 **Professional Development**: Stay updated with latest legal developments
- 👥 **Networking**: Connect with fellow legal professionals
- 🏆 **Verification**: Showcase verified credentials and experience
- 💼 **Client Matching**: Get matched with relevant cases

## 🛠️ Technology Stack

- **Framework**: Next.js 16.1.0 (React 19.2.3)
- **AI Integration**: Google Gemini Pro API (@google/generative-ai)
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.23.26
- **Language**: TypeScript 5
- **Architecture**: App Router (Next.js App Directory)
- **Backend**: Next.js API Routes

## 📁 Project Structure

```
legal-ai/
├── app/
│   ├── ai-services/          # AI-powered services
│   │   ├── consultation/     # Legal Q&A AI assistant
│   │   ├── patents/          # Patent consulting tool
│   │   └── page.tsx          # AI services hub
│   ├── education/            # Educational platform
│   │   ├── seminars/         # Online seminars
│   │   ├── workshops/        # Interactive workshops
│   │   ├── community/        # Lawyer community forum
│   │   └── page.tsx          # Education hub
│   ├── intake/               # User intake flow
│   │   ├── _context/         # Intake context provider
│   │   ├── context/          # Context/details page
│   │   ├── location/         # Location selection
│   │   ├── summary/          # Summary page
│   │   └── page.tsx          # Category selection
│   ├── lawyers/              # Lawyer matching & search
│   │   └── page.tsx          # Lawyer results with filters
│   ├── will/                 # Will generation
│   │   ├── draft/            # Generated will preview
│   │   └── page.tsx          # Will input form
│   ├── layout.tsx            # Root layout with navbar
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── components/
│   └── Navbar.tsx            # Navigation component
├── lib/
│   └── willTemplate.ts       # Will generation logic
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd legal-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages & Routes

### Public Pages
- `/` - Homepage with feature overview
- `/intake` - Start intake process (category selection)
- `/intake/location` - Location and preferences
- `/intake/context` - Additional context and description
- `/intake/summary` - Summary of intake information
- `/lawyers` - Lawyer search and matching
- `/education` - Education hub overview
- `/education/seminars` - Online seminars listing
- `/education/workshops` - Interactive workshops
- `/education/community` - Lawyer community forum
- `/ai-services` - AI services overview
- `/ai-services/consultation` - AI legal consultation chat
- `/ai-services/patents` - Patent consulting tool
- `/will` - Will generation input
- `/will/draft` - Generated will preview
- `/api/gemini` - Gemini AI API endpoint (POST) for legal consultations

## 🎨 Design System

### Colors
- **Primary**: `#2563EB` (Blue)
- **Primary Hover**: `#1D4ED8`
- **Accent**: `#8B5CF6` (Purple)
- **Text Primary**: `#0F172A`
- **Text Secondary**: `#475569`
- **Border Subtle**: `#E2E8F0`

### Typography
- Clean, modern font stack
- Responsive text sizes
- Clear hierarchy

## 🔒 Important Disclaimers

- **AI Services**: All AI-generated content should be reviewed by qualified lawyers before use
- **Not Legal Advice**: The platform provides tools and information, not legal advice
- **Professional Review Required**: Generated documents require professional legal review
- **Jurisdiction Specific**: Laws vary by jurisdiction; consult local attorneys

## 🚧 Future Enhancements

- [ ] User authentication and profiles
- [ ] Lawyer dashboard and profile management
- [ ] Payment integration for consultations
- [ ] Real-time chat between users and lawyers
- [ ] Document upload and management
- [ ] Calendar integration for appointments
- [ ] Review and rating system
- [ ] Email notifications
- [ ] Advanced AI with real LLM integration
- [ ] Multi-language support
- [ ] Mobile app

## 📝 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For inquiries, please contact the project owner.

---

**Built with ❤️ using Next.js, React, and TypeScript**

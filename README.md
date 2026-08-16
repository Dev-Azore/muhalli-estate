# Muhalli Estate & Construction Ltd. — Official Website

[Live Demo](https://muhalli-estate.vercel.app) · 
[Report Bug](https://github.com/your-org/muhalli-website/issues)[Request Feature](https://github.com/your-org/muhalli-website/issues)

---

Table of Contents

- [About The Project](#-about-the-project)
- [Built With](#-built-with)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

About The Project

This is the official corporate website for Muhalli Estate & Construction Ltd. a premier Nigerian real estate development and construction company.

The platform serves three core business streams:

1. Marketplace: Buying and selling existing land and properties.
2. Portfolio: Showcasing completed construction work (houses, plazas, offices).
3. Construction Services: Custom building and development for clients.

Built with a mobile-first, lightweight approach, the site is optimized for Nigerian users—prioritizing fast load times on limited data plans and integrating WhatsApp as the primary communication channel.

---

Built With

- [Next.js 14+](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Email Resend](https://resend.com/) — Transactional email API for form submissions
- [Google Maps Embed API](https://developers.google.com/maps/documentation/embed) — Office and property location mapping
- [Vercel](https://vercel.com/) — Hosting and deployment platform
- [GitHub](https://github.com/) — Version control

---

Key Features

Property Listings
- Advanced filtering by location, price (₦), property type, and title status
- Individual property pages with gallery, floor plans, and document verification (C of O, Governor's Consent)
- Real-time `Available / Reserved / Sold` status tags

Construction Portfolio
- Filterable case-study gallery (residential, plazas, offices)
- "Before → During → After" photo progressions
- "Before & After" slider for redevelopment projects

Nigeria-Specific Integrations
- WhatsApp click-to-chat with pre-filled messages (primary inquiry channel)
- Naira-formatted pricing (`₦` and `M` shorthand)
- Payment plan visibility on all property listings

Trust & Legal
- CAC registration number displayed prominently
- Title document status on every listing (C of O, Deed of Assignment, Excision)
- Legal due-diligence disclaimer in footer

---

Getting Started

Follow these steps to get a local development copy running.

Prerequisites

- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later) or yarn (v1.22.0 or later)
- Git (for cloning the repository)

Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-org/muhalli-website.git
   cd muhalli-website
Install dependencies:

bash
npm install
# or
yarn install
Set up environment variables:

Create a .env.local file in the root directory and add:

env
# Email API (Resend)
RESEND_API_KEY=your_resend_api_key

# Google Maps Embed API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

# Site URL (for production)
NEXT_PUBLIC_SITE_URL=https://muhalli-estate.vercel.app
Run the development server:

bash
npm run dev
# or
yarn dev
Open your browser:

Visit http://localhost:3000 to view the application.

📂 Project Structure
text
muhalli-website/
├── public/                 # Static assets (images, favicons)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── page.tsx        # Homepage
│   │   ├── layout.tsx      # Root layout
│   │   ├── properties/     # Property listing pages
│   │   ├── projects/       # Portfolio pages
│   │   ├── construction/   # Construction services pages
│   │   ├── investment/     # Off-plan/land banking pages
│   │   ├── about/          # About Us page
│   │   ├── blog/           # Blog articles
│   │   └── contact/        # Contact page
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Header, Footer, Navbar
│   │   ├── ui/             # Buttons, Cards, Modals
│   │   └── forms/          # Contact, Quote, Valuation forms
│   ├── lib/                # Utility functions, API helpers
│   ├── types/              # TypeScript type definitions
│   └── styles/             # Global CSS overrides
├── .env.local              # Environment variables (gitignored)
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
🔐 Environment Variables
The following environment variables are required for full functionality:

Variable	Description	Example
RESEND_API_KEY	Transactional email API key for form submissions	re_xxxxxx
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY	Google Maps Embed API key	AIzaSyD...
NEXT_PUBLIC_SITE_URL	Production URL for canonical links and SEO	https://muhalli-estate.vercel.app
🚢 Deployment
The project is deployed on Vercel with automatic deployments from the main branch.

Deploy on Vercel (One-Click)
https://vercel.com/button

Manual Deployment
Build the production version:

bash
npm run build
Start the production server:

bash
npm start
Alternatively, deploy using the Vercel CLI:

bash
vercel --prod
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.

Create a feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📄 License
Distributed under the MIT License. See LICENSE for more information.

📞 Contact
Muhalli Estate & Construction Ltd.

Website: https://muhalli-estate.vercel.app

Email: info@muhalli.com

Phone: +234 800 MUHALLI

WhatsApp: Click to Chat

Office: 15, Awolowo Road, Ikoyi, Lagos, Nigeria
🖌️ Artistly - Artist Booking Platform
A modern, responsive web platform connecting event planners with talented performing artists across India. Built with Next.js, React, and Tailwind CSS.

Artistly PlatformReactTypeScriptTailwind CSS

✨ Features
🎯 Core Functionality
Artist Discovery: Browse through 24+ diverse Indian artists across multiple categories
Advanced Filtering: Filter by category, price range, location, and search functionality
Artist Onboarding: Complete form system for artists to join the platform
Responsive Design: Fully responsive across desktop, tablet, and mobile devices
Dark/Light Mode: Toggle between themes with persistent user preference
🎨 Categories Available
Singers: Classical, Bollywood, Sufi, Folk, Playback
Dancers: Bharatanatyam, Kathak, Hip Hop, Contemporary
DJs: Electronic, House, Commercial, Bollywood
Musicians: Instrumentalists, Bands, Fusion, Acoustic
Speakers: Motivational, Business, Corporate Training
Entertainers: Comedians, Magicians, Storytellers, Poets
Traditional Arts: Folk Artists, Puppeteers, Mime Artists
🛠️ Technical Features
Next.js App Router: Modern routing with React Server Components
Form Validation: React Hook Form + Yup validation
Animations: Smooth Framer Motion animations
Accessibility: WCAG compliant with proper ARIA labels
SEO Optimized: Meta tags, OpenGraph, and semantic HTML
Type Safety: Full TypeScript implementation
🚀 Quick Start
Prerequisites
Node.js 18+
npm or yarn package manager
Installation
Clone or download the project

# If using git
git clone <repository-url>
cd artistly-platform

# Or download and extract the ZIP file
Install dependencies

npm install
Run the development server

npm run dev
Open your browser Navigate to http://localhost:3000

📁 Project Structure
artistly-platform/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── artists/           # Artist listing page
│   ├── onboard-artist/    # Artist onboarding form
│   └── dashboard/         # Manager dashboard
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── artist-card.tsx   # Artist display card
│   ├── filter-block.tsx  # Filtering component
│   └── form-input.tsx    # Form input component
├── lib/                  # Utilities and data
│   ├── utils.ts         # Helper functions
│   └── mock-data.ts     # Sample artist data
├── public/              # Static assets
└── package.json         # Dependencies
🎨 Design System
Color Palette
Primary: Cyan (#0891b2) - CTAs and highlights
Secondary: Deep Blue (#0F3460) - Headers and accents
Background: Dark Navy (#1A1A2E) - Hero sections
Text: Dynamic based on theme (light/dark mode)
Typography
Font: Inter (Google Fonts)
Responsive: Scales from mobile to desktop
Hierarchy: Clear heading and body text distinction
Components
Cards: Hover effects with smooth transitions
Buttons: Consistent styling with hover states
Forms: Inline validation with error states
Navigation: Responsive with mobile hamburger menu
📱 Pages Overview
🏠 Homepage (/)
Hero section with call-to-action
Category showcase with 8 artist types
Benefits section highlighting platform features
Responsive design with smooth animations
🎭 Artists Page (/artists)
Grid layout with 24+ sample artists
Advanced filtering by category, price, location
Search functionality across all artist data
Responsive grid (3→2→1 columns)
Loading states and empty states
📝 Onboard Artist (/onboard-artist)
Multi-step form with validation
Fields: Name, Bio, Categories, Languages, Price, Location, Image
Real-time validation with error messages
Success/failure feedback
File upload for profile images
📊 Dashboard (/dashboard)
Artist submission management
Statistics overview
Responsive table design
Action buttons for view/delete operations
🛠️ Technologies Used
Frontend Framework
Next.js 14: React framework with App Router
React 18: Component-based UI library
TypeScript: Type-safe JavaScript
Styling & UI
Tailwind CSS: Utility-first CSS framework
shadcn/ui: High-quality component library
Radix UI: Accessible component primitives
Framer Motion: Animation library
Form Handling
React Hook Form: Performant form library
Yup: Schema validation
@hookform/resolvers: Form validation integration
Icons & Assets
Lucide React: Beautiful icon library
Next/Image: Optimized image component
Theme & Accessibility
next-themes: Dark/light mode support
ARIA labels: Screen reader accessibility
Semantic HTML: Proper HTML structure
🎯 Key Features Implementation
Responsive Design
Mobile-first approach with Tailwind breakpoints
Flexible grid system adapting to screen sizes
Touch-friendly interfaces for mobile devices
Hamburger navigation for mobile menu
Form Validation
Real-time validation with immediate feedback
Required field indicators with asterisks
Error message display with smooth animations
Success states with confirmation messages
Filtering System
Multi-category selection with checkboxes
Price range filtering with radio buttons
Location-based search with text input
Real-time results with loading states
Accessibility Features
Keyboard navigation support
Screen reader compatibility with ARIA labels
Focus management with visible focus indicators
Semantic HTML structure for better accessibility
🚀 Available Scripts
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint linting
npm run type-check   # Run TypeScript checking
🌐 Browser Support
Chrome 90+
Firefox 88+
Safari 14+
Edge 90+
📱 Mobile Responsiveness
Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
Grid System: Responsive columns (1→2→3)
Navigation: Collapsible mobile menu
Touch Targets: Minimum 44px for accessibility
🔧 Customization
Adding New Artists
Edit lib/mock-data.ts to add new artist entries:

{
  id: "new-id",
  name: "Artist Name",
  categories: ["Category1", "Category2"],
  location: "City, State",
  priceRange: "₹XX,XXX-XX,XXX",
  // ... other fields
}
Styling Changes
Colors: Update tailwind.config.ts and globals.css
Components: Modify files in components/ directory
Layout: Update app/layout.tsx for global changes
Adding New Pages
Create new folder in app/ directory
Add page.tsx file with your component
Update navigation in components/header.tsx
🤝 Contributing
Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
shadcn/ui for the beautiful component library
Radix UI for accessible component primitives
Tailwind CSS for the utility-first CSS framework
Next.js team for the amazing React framework
Vercel for hosting and deployment platform
📞 Support
If you have any questions or need help with setup:

Check the Issues section
Create a new issue with detailed description
Include error messages and system information
Built with ❤️ for the Indian artist community

Connecting talent with opportunity, one performance at a time.


This README provides comprehensive documentation covering:

- ✅ **Project overview** and features
- ✅ **Installation instructions** for different scenarios
- ✅ **Project structure** explanation
- ✅ **Technical details** and dependencies
- ✅ **Design system** documentation
- ✅ **Page-by-page breakdown**
- ✅ **Customization guide**
- ✅ **Contributing guidelines**
- ✅ **Browser support** and compatibility

The README is structured to help both developers and non-technical users understand 

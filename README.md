# Flooq

A modern, responsive portfolio and agency website built with Next.js 15, React 19, and Tailwind CSS 4. This project features smooth animations, interactive components, and a professional design to showcase services, projects, testimonials, and blog content.

## ✨ Features

- **Modern Stack**: Built with Next.js 15 and React 19 for optimal performance
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Smooth Animations**: Integrated AOS (Animate On Scroll) library for engaging scroll animations
- **Interactive Components**:
  - Hero section with call-to-action
  - Services showcase with detailed cards
  - Project portfolio with Swiper carousel
  - Client testimonials slider
  - Blog section with article cards
  - Contact form with SweetAlert2 notifications
- **Service Request Modal**: Interactive modal for service inquiries
- **Type-Safe**: Built with TypeScript for better development experience
- **Modern Styling**: Tailwind CSS 4 with custom utilities and components
- **Component Architecture**: Modular and reusable component structure

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd flooq
```

2. Install dependencies:

```bash
npm install

3. Run the development server:

```bash
npm run dev

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
flooq/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── About.tsx           # About section
│   │   ├── AOSInit.tsx         # AOS initialization
│   │   ├── Blog.tsx            # Blog section
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Services.tsx        # Services section
│   │   ├── testimonials.tsx    # Testimonials slider
│   │   └── shared/             # Shared components
│   │       ├── BlogSmallCard.tsx
│   │       ├── Button.tsx
│   │       ├── InfoSection.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── ServiceCard.tsx
│   │       └── ServiceRequestModal.tsx
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **React**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **TypeScript**: Type-safe development
- **Animations**: [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Swiper](https://swiperjs.com/)
- **Alerts**: [SweetAlert2](https://sweetalert2.github.io/)
- **Utilities**:
  - [clsx](https://github.com/lukeed/clsx) - Class name utility
  - [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Merge Tailwind classes
  - [class-variance-authority](https://cva.style/docs) - Component variants

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Styling

The project uses Tailwind CSS 4. You can customize the design system by editing:

- Global styles: [src/app/globals.css](src/app/globals.css)
- Tailwind configuration: `tailwind.config.ts`

### Components

All components are located in the [src/components](src/components) directory. Shared components that are reused across the application are in [src/components/shared](src/components/shared).

### Animations

AOS animations are initialized in the [AOSInit.tsx](src/components/AOSInit.tsx) component. Customize animation settings by modifying the AOS configuration.


Built with ❤️ using Next.js and React

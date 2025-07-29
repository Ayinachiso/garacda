# GACDA Website

Official website for GACDA (Community Development Association) built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Performance Optimized**: Fast loading with image optimization and code splitting
- **SEO Friendly**: Built-in SEO features and meta tags
- **Accessible**: WCAG compliant design
- **PWA Ready**: Progressive Web App capabilities

## 📁 Project Structure

```
garacda-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── meet-our-team/      # Team page
│   │   ├── projects/           # Projects page
│   │   ├── media/              # Media center
│   │   ├── gallery/            # Photo gallery
│   │   ├── help/               # Help & support
│   │   └── login/              # Admin login
│   ├── components/             # Reusable components
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── Preloader.tsx       # Loading component
│   └── globals.css             # Global styles
├── public/                     # Static assets
│   ├── images/                 # Image assets
│   ├── icons/                  # Icon assets
│   ├── favicon.ico             # Favicon
│   └── site.webmanifest        # PWA manifest
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.ts              # Next.js configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Geist (Google Fonts)
- **Linting**: ESLint 9
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd garacda-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Colors
- **Primary**: Green (#16a34a) - Main brand color
- **Secondary**: Gray (#64748b) - Supporting colors
- **Accent**: Blue (#3b82f6) - Call-to-action elements

### Typography
- **Primary Font**: Geist Sans
- **Monospace**: Geist Mono
- **Fallback**: Inter, system-ui

### Animations
- Fade in/out effects
- Slide animations
- Scale transitions
- Bounce effects

## 📱 Pages

1. **Home** (`/`) - Landing page with hero section
2. **Meet Our Team** (`/meet-our-team`) - Team member profiles
3. **Projects** (`/projects`) - Community development projects
4. **Media** (`/media`) - News, blogs, and updates
5. **Gallery** (`/gallery`) - Photo gallery with filtering
6. **Help** (`/help`) - FAQ and contact information
7. **Login** (`/login`) - Admin authentication

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=GACDA
```

### Tailwind CSS
Custom configuration in `tailwind.config.ts` includes:
- Custom color palette
- Custom animations
- Extended spacing and shadows
- Font family configurations

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Configure build command and output directory
- **Railway**: Connect repository and deploy
- **DigitalOcean App Platform**: Deploy with Docker

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic route-based splitting

## 🔒 Security

- **Headers**: Security headers configured
- **CSP**: Content Security Policy ready
- **HTTPS**: Enforced in production
- **Input Validation**: TypeScript strict mode

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: info@gacda.com
- Website: [gacda.com](https://gacda.com)

---

Built with ❤️ for the GACDA community

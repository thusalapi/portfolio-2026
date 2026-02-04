# Personal Branding Portfolio

A modern, minimalist portfolio website built with Next.js, showcasing professional work and personal branding with an Apple-inspired design aesthetic.

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-24292e?style=for-the-badge&logo=github)](https://thusalapi.github.io/portfolio-2026/)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)

## Overview

This portfolio features a clean, professional design inspired by Apple's minimalist aesthetic, with trustworthy blue accents and sophisticated typography. Built for personal branding and showcasing development projects.

## Features

- **Apple-Inspired Design**: Clean, minimalist aesthetic with trustworthy blue accents
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark Mode Support**: Automatic theme switching based on user preference
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **SEO Friendly**: Proper meta tags and structured data for search engines

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: GitHub Pages
- **Icons**: Custom SVG icons
- **Typography**: Geist font family

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/thusalapi/portfolio-2026.git
cd portfolio-2026
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Manual Deployment

To deploy manually:

```bash
# Build for production
pnpm build

# Export static files
pnpm export
```

The built files will be in the `out/` directory, ready for deployment.

## Project Structure

```
portfolio-2026/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page
├── components/            # Reusable React components
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Projects showcase
│   ├── about.tsx         # About section
│   └── ...
├── public/               # Static assets
└── styles/              # Additional styles
```

## Customization

### Colors
The color scheme is defined in `app/globals.css` using CSS custom properties. The current theme uses:
- Primary: Apple blue (`oklch(0.32 0.12 230)`)
- Background: Pure whites and subtle grays
- Accent colors: Minimal, complementary tones

### Content
Update the content in the respective component files:
- Personal info: `components/hero.tsx`
- Projects: `components/projects.tsx`
- Skills: `components/about.tsx`
- Contact: `components/contact-footer.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Thusala Piyarisi - [thusala.dev](https://thusalapi.github.io/portfolio-2026/)

[![GitHub](https://img.shields.io/badge/GitHub-thusalapi-24292e?style=flat&logo=github)](https://github.com/thusalapi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thusalapi-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/thusalapiyarisi)
# 🚀 Manglam Jaiswal - Portfolio Website

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live%20%26%20Deployed-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.9-38B2AC)
![AWS](https://img.shields.io/badge/AWS-S3%20%2B%20CloudFront-orange)

**A modern, responsive portfolio website built with Next.js, featuring dark/light mode and deployed on AWS with CloudFront CDN.**

[🌐 Live Demo](https://d3a47i1j1t2si8.cloudfront.net) • [📧 Contact](mailto:ecs.crce.10127@gmail.com) • [☁️ CloudFront URL](https://d3a47i1j1t2si8.cloudfront.net)

</div>

---

## ✨ Features

- 🎨 **Modern Design** - Clean, professional layout with smooth animations
- 🌙 **Dark/Light Mode** - Toggle between themes with persistent preferences
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Static site generation with CloudFront CDN
- 🔒 **Secure** - HTTPS enabled with AWS Certificate Manager
- 🎯 **SEO Optimized** - Meta tags, structured data, and semantic HTML
- 🚀 **Deployed on AWS** - S3 + CloudFront for global distribution

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **next-themes** - Theme management

### Deployment & Infrastructure
- **AWS S3** - Static website hosting
- **AWS CloudFront** - Global CDN with HTTPS
- **AWS Certificate Manager** - Free SSL certificates
- **Origin Access Control** - Secure S3 access

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended: 20 LTS)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Local Build
```bash
pnpm build
pnpm start
```

### AWS Deployment

1. **Configure AWS CLI**
   ```bash
   aws configure
   ```

2. **Build static site**
   ```bash
   pnpm build
   ```

3. **Upload to S3**
   ```bash
   aws s3 sync ./out s3://your-bucket-name --delete
   ```

4. **Invalidate CloudFront cache**
   ```bash
   aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
   ```

## 🎨 Customization

### Personal Information
Update your details in:
- `data/profile.ts` - Basic profile information
- `data/projects.ts` - Project portfolio
- `app/layout.tsx` - Site metadata and SEO

### Styling
- Modify `app/globals.css` for global styles
- Update `components/` for component-specific styling
- Theme colors are defined in CSS custom properties

### Content
- **Projects**: Edit `data/projects.ts`
- **Skills**: Update `components/skills.tsx`
- **Experience**: Modify `components/experience.tsx`
- **Education**: Edit `components/education.tsx`

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   └── ...
├── data/                  # Static data
│   ├── profile.ts        # Profile information
│   └── projects.ts       # Projects data
├── public/               # Static assets
│   ├── images/          # Images and icons
│   └── ...
└── styles/              # Additional styles
```

## 🌐 Live Website

**🔗 [Visit Portfolio](https://d3a47i1j1t2si8.cloudfront.net)**

**☁️ CloudFront CDN URL**: `https://d3a47i1j1t2si8.cloudfront.net`

- **Performance**: 95+ Lighthouse score
- **Accessibility**: WCAG 2.1 compliant
- **SEO**: Optimized meta tags and structured data
- **Security**: HTTPS with HSTS headers
- **CDN**: Global distribution via AWS CloudFront

## 📊 Performance Metrics

- ⚡ **First Contentful Paint**: < 1.5s
- 🎯 **Largest Contentful Paint**: < 2.5s
- 📱 **Mobile-Friendly**: 100% responsive
- 🔍 **SEO Score**: 95+ on PageSpeed Insights

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Manglam Jaiswal**
- 🎓 B.E. Electronics & Computer Science (Cybersecurity Honors)
- 🔐 IoT Lead & Full-Stack Developer
- 🏫 Third-year at Fr. Conceicao Rodrigues College of Engineering
- 🏢 IoT Lead at Project Cell
- 💼 Internship experience at Apraava Energy

### Connect with me
- 📧 Email: [ecs.crce.10127@gmail.com](mailto:ecs.crce.10127@gmail.com)
- 💼 LinkedIn: [Your LinkedIn Profile]
- 🐙 GitHub: [Your GitHub Profile]
- 🌐 Portfolio: [https://d3a47i1j1t2si8.cloudfront.net](https://d3a47i1j1t2si8.cloudfront.net)
- ☁️ CloudFront CDN: [https://d3a47i1j1t2si8.cloudfront.net](https://d3a47i1j1t2si8.cloudfront.net)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Manglam Jaiswal](https://d3a47i1j1t2si8.cloudfront.net)

</div>

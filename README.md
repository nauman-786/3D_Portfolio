website : https://3-d-portfolio-5gfs-7sfgqwpnu-nauman-786s-projects.vercel.app/

# 🚀 3D Interactive Portfolio

> A stunning, modern portfolio website featuring an interactive 3D character, smooth animations, and dynamic scroll effects.

[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Three.js](https://img.shields.io/badge/Three.js-Latest-black?style=for-the-badge&logo=three.js)](https://threejs.org)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## ✨ Features

🎭 **Interactive 3D Character**
- Animated character that follows mouse movements
- Real-time head rotation tracking
- Smooth GLTF model animations (intro, typing, blinking)

🎬 **Scroll-Driven Animations**
- GSAP ScrollTrigger for timeline effects
- Parallax scrolling and camera movements
- Smooth transitions between sections

📱 **Fully Responsive**
- Mobile-first design approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

🎨 **Modern Visual Design**
- Orange accent theme with dark navy background
- Glassmorphism effects
- Smooth gradients and floating animations
- Fully rounded corners and modern styling

💼 **Project Showcase**
- Interactive carousel for displaying projects
- Project details with tech stack
- Direct GitHub repository links
- Smooth slide transitions with dot indicators

⚡ **High Performance**
- Vite for lightning-fast builds
- DRACO compression for 3D models
- Lazy component loading
- Optimized canvas rendering

---

## 🛠️ Tech Stack

**Frontend Framework**
- React 18 with TypeScript
- Vite (build tool)

**3D & Animation**
- Three.js (3D graphics)
- React Three Fiber
- GSAP with ScrollTrigger
- AnimationMixer for character control

**Styling**
- CSS3 with CSS Variables
- Glassmorphism effects
- Responsive media queries

**UI Components**
- React Icons
- Custom cursor system
- Interactive hover effects

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Character/                 # 3D character & scene
│   │   ├── Scene.tsx             # Main 3D scene setup
│   │   ├── index.tsx
│   │   └── utils/
│   │       ├── character.ts      # Character loading
│   │       ├── lighting.ts       # Scene lighting
│   │       ├── mouseUtils.ts     # Mouse tracking
│   │       └── animationUtils.ts # Animation control
│   ├── About.tsx
│   ├── Career.tsx
│   ├── Contact.tsx
│   ├── Landing.tsx
│   ├── Work.tsx                  # Project carousel
│   ├── Navbar.tsx
│   └── styles/                   # Component CSS
├── utils/
│   ├── GsapScroll.ts            # Scroll timelines
│   ├── splitText.ts             # Text utilities
│   └── initialFx.ts             # Initial effects
├── context/
│   └── LoadingProvider.tsx       # Loading state
├── App.tsx
├── main.tsx
└── index.css                     # Global styles
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm 8+

### Installation

```bash
# Clone repository
git clone https://github.com/nauman-786/3d-portfolio.git
cd 3d-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## 🎨 Customization

### Update Theme Colors

Edit `src/index.css`:
```css
:root {
  --accentColor: #ff8a3d;      /* Orange accent */
  --backgroundColor: #0f172a;  /* Dark navy */
  --accentRgb: 255, 138, 61;   /* RGB for rgba() */
}
```

### Edit Projects

Update `src/components/Work.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    category: "Project Type",
    tools: "Tech Stack",
    image: "/images/project.png",
    link: "https://github.com/your-project"
  }
];
```

### Modify Content Sections

- `src/components/About.tsx` - About section
- `src/components/Career.tsx` - Career timeline
- `src/components/Contact.tsx` - Contact info
- `src/components/Landing.tsx` - Hero landing

---

## 🎬 Key Sections

| Section | Feature | Animation |
|---------|---------|-----------|
| **Landing** | Hero with 3D character | Character rotation, camera zoom |
| **About** | Background & skills | Parallax scrolling, fade effects |
| **Career** | Timeline visualization | Animated glows, fill animations |
| **Work** | Project carousel | Slide transitions, hover effects |
| **Contact** | Social & contact info | Rounded cards, scale animations |

---

## 🔧 Configuration

All animations and effects are configurable in `src/components/utils/`. Modify GSAP timelines to customize scroll behavior and 3D camera movements.

---

## 🐛 Troubleshooting

**Character not displaying?**
- Verify `public/models/character.enc` exists
- Check DRACO decoder in `public/draco/`
- Check browser console for errors

**Animations not smooth?**
- Ensure GSAP is properly installed
- Check ScrollTrigger initialization
- Verify CSS animations aren't conflicting

**Build issues?**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`
- Verify TypeScript: `npm run build`

---

## 📦 Deployment

```bash
# Build for production
npm run build

# Preview build locally
npm run preview

# Deploy dist/ folder to:
# - Vercel
# - Netlify
# - Cloudflare Pages
# - GitHub Pages
```

---

## 📧 Contact

**Nauman Khan** - Machine Learning Engineer & Full-Stack Developer

- 📧 Email: [noumankhankhan708@gmail.com](mailto:noumankhankhan708@gmail.com)
- 🔗 GitHub: [@nauman-786](https://github.com/nauman-786)
- 💼 LinkedIn: [Nouman Khan](https://www.linkedin.com/in/nouman-khan-088a062a0/)

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by Nauman Khan**


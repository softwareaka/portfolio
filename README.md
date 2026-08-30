# Xojiakbar Abdumutalov — Frontend Developer Portfolio

A high-performance, responsive, and minimal portfolio website built strictly using **HTML5**, **CSS3**, and **Vanilla JavaScript (ES Modules)**.

- **Developer**: Xojiakbar Abdumutalov
- **GitHub**: [github.com/softwareaka](https://github.com/softwareaka)
- **LinkedIn**: [linkedin.com/in/xojiakbar-abdumutalov-aa17532ba](https://www.linkedin.com/in/xojiakbar-abdumutalov-aa17532ba/)

---

## 🌟 Key Highlights

- **Pure Web Technologies**: Zero external dependencies, frameworks, or heavy animation libraries.
- **Monochrome & Crimson Palette**: Modern dark mode with crimson accent (`#A30041`), supporting instant light/dark mode toggling.
- **Tailored Experience & Mentorship**: Highlighting 2 years of frontend engineering experience, Anorbank internship, 100+ students mentored at Algoritm Edu Center, and hackathon wins.
- **Categorized Tech Stack**:
  - **Core Stack**: JavaScript · TypeScript · React
  - **Ecosystem**: TanStack Query · Redux Toolkit · Zustand · Axios · REST API
  - **UI & Styling**: Mantine · Material UI · Tailwind CSS · Sass · Bootstrap
  - **Tools**: Git · Vite · ESLint · Prettier · Figma
- **Editorial Project Showcase**: Large featured project layout followed by alternating split-view project cards.
- **Interactive Case Study Modal**: Deep dive into engineering challenges, technical solutions, and architecture choices (FSD, TanStack Query, Zustand).
- **Interactive Contact Form**: Real-time JavaScript validation with toast feedback.
- **Accessibility & SEO**: Semantic HTML5 elements, ARIA attributes, skip link, and Open Graph metadata.

---

## 📁 Directory Structure

```
portfolio/
├── index.html              # Main HTML5 document
├── css/
│   ├── style.css           # Design tokens, variables, core styles, animations
│   └── responsive.css      # Responsive media queries (320px to 1920px)
├── js/
│   ├── main.js             # Main JS module & form validation engine
│   ├── navigation.js       # Sticky header, active section observer, mobile drawer
│   ├── animations.js       # Scroll reveal observer, clipboard copy, toast notifications
│   ├── theme.js            # Theme manager (Dark/Light theme toggle & persistence)
│   └── projects.js         # Case study data & accessible modal controller
├── assets/
│   ├── images/             # Project screenshots
│   │   ├── anor-shop.png
│   │   ├── kilowatt-tracker.png
│   │   ├── deposit-manager.png
│   │   └── devstudio-portal.png
│   └── icons/              # Custom SVG assets
└── README.md               # Documentation
```

---

## 🚀 How to Run Locally

Since this project relies on native **ES Modules** (`type="module"`), it should be served via any local HTTP server (such as VS Code Live Server, Vite, `npx serve`, or `python -m http.server`).

### Option 1: Using `npx serve`
```bash
npx serve . -p 3000
```

### Option 2: Using Python
```bash
python -m http.server 8000
```

## 📄 License

Created by Xojiakbar Abdumutalov © 2026. All rights reserved.

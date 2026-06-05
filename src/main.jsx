import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import heroImage from './public/hero-image.png';

const projects = [
  {
    title: 'QR-Based File Sharing System',
    type: 'Real-Time App',
    year: '2026',
    status: 'Full Stack',
    color: '#0FFF50',
    image: '/projects/qr.JPG',
    description:
      'A full-stack real-time file sharing app that lets users transfer files from mobile to laptop or PC by scanning a QR code, without login or complicated setup.',
    result: 'Instant mobile-to-laptop file transfer with live updates.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Cloudinary', 'QR Code'],
    links: {
      live: 'https://file-share-system.vercel.app/',
      code: 'https://github.com/sspadwal/QR-SHARE',
    },
  },
  {
    title: 'DevMindAI Ai-Powered Platform',
    type: 'AI Platform',
    year: '2026',
    status: 'Full Stack',
    color: '#fc815c',
    image: '/projects/p1.webp',
    description:
      'A full-stack AI web app with secure auth, Gemini-powered content and image generation, and community features.',
    result: 'AI content tools with secure user flow.',
    stack: ['PostgreSQL', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'OpenAI', 'Gemini API'],
    links: {
      live: 'https://devmindai.vercel.app/',
      code: 'https://github.com/sspadwal/DevMindAI.git',
    },
  },
  {
    title: 'CloHaven Ecommerce Platform',
    type: 'E-commerce',
    year: '2026',
    status: 'MERN Stack',
    color: '#ffe578',
    image: '/projects/p2.webp',
    description:
      'A full-stack MERN e-commerce website with product management, cart, checkout, secure payments, and admin dashboard.',
    result: 'Shopping flow with admin management.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'Material UI', 'Admin Panel'],
    links: {
      live: 'https://clohaven.vercel.app/',
      code: 'https://github.com/sspadwal/clohaven-client.git',
    },
  },
  {
    title: 'Daily Task Manager',
    type: 'Task App',
    year: '2026',
    status: 'MERN Stack',
    color: '#47afa1',
    image: '/projects/p3.webp',
    description:
      'To-Do List web app built on MERN stack, supporting add, update, delete tasks with token-based authentication.',
    result: 'Authenticated task management.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'CSS', 'Responsive UI'],
    links: {
      live: 'https://taskifyzone.vercel.app/',
      code: 'https://github.com/sspadwal/task-manager-client.git',
    },
  },
  {
    title: 'World Atlas React App',
    type: 'React App',
    year: '2026',
    status: 'REST API',
    color: '#459bd5',
    image: '/projects/p4.webp',
    description:
      'A React world explorer app with API integration, country details, sorting, routing, and a responsive UI.',
    result: 'Country explorer with routing.',
    stack: ['React', 'React Router', 'JavaScript', 'REST API', 'Responsive UI'],
    links: {
      live: 'https://global-atlas.vercel.app/',
      code: 'https://github.com/sspadwal/worldatlas.git',
    },
  },
  {
    title: 'MERN Blog Platform',
    type: 'Blog Platform',
    year: '2026',
    status: 'Full Stack',
    color: '#CC00CC',
    image: '/projects/p5.webp',
    description:
      'Cross-device MERN blog application with secure login, CRUD functionality, and an interactive blogging community.',
    result: 'Secure CRUD blogging platform.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS', 'JWT', 'REST API'],
    links: {
      live: '#',
      code: 'https://github.com/yourusername/social-media-dashboard',
    },
  },
  {
    title: 'University Website',
    type: 'Website',
    year: '2026',
    status: 'Frontend',
    color: '#7de714',
    image: '/projects/p7.webp',
    description:
      'Designed and developed a fully responsive university website using HTML, CSS, and JavaScript.',
    result: 'Responsive university landing site.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI', 'UI/UX', 'Web Development'],
    links: {
      live: 'https://harvardcamp.netlify.app/',
      code: 'https://github.com/sspadwal/harvard-university.git',
    },
  },
];

const palettes = [
  { name: 'Indigo', value: 'indigo', color: '#a5b4fc' },
  { name: 'Teal', value: 'teal', color: '#7dd3fc' },
  { name: 'Orange', value: 'orange', color: '#fdba74' },
  { name: 'Violet', value: 'violet', color: '#c4b5fd' },
  { name: 'Cyan', value: 'cyan', color: '#22d3ee' },
  { name: 'Fuchsia', value: 'fuchsia', color: '#f9a8d4' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/sspadwal',
    path: 'M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.95c0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/918459456812',
    path: 'M19.05 4.91A9.86 9.86 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91a9.86 9.86 0 0 0-2.91-7.02ZM12.05 20.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.34c0-4.53 3.69-8.22 8.23-8.22a8.18 8.18 0 0 1 5.81 2.41 8.17 8.17 0 0 1 2.41 5.82c0 4.53-3.69 8.21-8.22 8.21Zm4.5-6.15c-.25-.12-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.12.16 1.75 2.67 4.24 3.74.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z',
  },
  {
    label: 'X',
    href: 'https://x.com/Sspadwal1002',
    path: 'M18.9 2.5h3.1l-6.77 7.74L23.2 21.5h-6.24l-4.89-6.4-5.6 6.4H3.36l7.24-8.28L2.96 2.5h6.4l4.42 5.85 5.12-5.85Zm-1.09 17.02h1.72L8.42 4.38H6.58l11.23 15.14Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sspadwal24/',
    path: 'M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 10h4v11H3V10Zm6.5 0h3.83v1.5h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.54V21h-4V10Z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@factsoflife1748',
    path: 'M21.58 7.19a2.74 2.74 0 0 0-1.93-1.94C17.95 4.8 12 4.8 12 4.8s-5.95 0-7.65.45a2.74 2.74 0 0 0-1.93 1.94A28.4 28.4 0 0 0 2 12a28.4 28.4 0 0 0 .42 4.81 2.74 2.74 0 0 0 1.93 1.94c1.7.45 7.65.45 7.65.45s5.95 0 7.65-.45a2.74 2.74 0 0 0 1.93-1.94A28.4 28.4 0 0 0 22 12a28.4 28.4 0 0 0-.42-4.81ZM10 15.2V8.8l5.2 3.2L10 15.2Z',
  },
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [palette, setPalette] = useState('orange');
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.palette = palette;
  }, [theme, palette]);

  return (
    <main className="page">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home">
          Shailesh
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Project
          </a>
        </div>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          aria-pressed={isDark}
        >
          <span className={`theme-icon ${isDark ? 'sun-mode' : 'moon-mode'}`} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              {isDark ? (
                <>
                  <circle cx="12" cy="12" r="4.2" />
                  <path d="M12 2.75v2.05M12 19.2v2.05M21.25 12H19.2M4.8 12H2.75M18.55 5.45 17.1 6.9M6.9 17.1l-1.45 1.45M18.55 18.55 17.1 17.1M6.9 6.9 5.45 5.45" />
                </>
              ) : (
                <>
                  <path d="M20.2 15.35A8.65 8.65 0 0 1 8.65 3.8 7.05 7.05 0 1 0 20.2 15.35Z" />
                  <path d="M16.85 3.85h.01M19.2 6.2h.01M14.75 7h.01" />
                </>
              )}
            </svg>
          </span>
        </button>

        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={`${menuOpen ? 'Close' : 'Open'} navigation menu`}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <section className="hero" id="home" aria-labelledby="intro-title">
        <div className="hero-palette" aria-label="Color palette">
          <div className="palette-options">
            {palettes.map((item) => (
              <button
                className="palette-button"
                type="button"
                key={item.value}
                style={{ '--swatch': item.color }}
                aria-label={`Apply ${item.name} color theme`}
                aria-pressed={palette === item.value}
                onClick={() => setPalette(item.value)}
              />
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <img src={heroImage} alt="Developer working on a computer" />
        </div>
        <h1 id="intro-title" className="sr-only">Frontend Developer</h1>
        <h2 className="hero-name">Shailesh Padwal</h2>
        <h4 className="hero-role">Frontend Developer</h4>
        <div className="actions" aria-label="Portfolio links">
          <a className="button primary" href="#projects">
            Projects
          </a>
          <a
            className="button"
            href="/Shailesh_Frontend_Developer.pdf"
            download="Shailesh_Frontend_Developer.pdf"
          >
            Download CV
          </a>
          
        </div>

        <div className="social-rail" aria-label="Social links">
          {socialLinks.map((item) => (
            <a
              href={item.href}
              key={item.label}
              aria-label={item.label}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={item.path} />
              </svg>
            </a>
          ))}
        </div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p>Selected build files</p>
          <h2 id="projects-title">My latest work</h2>
        </div>

        <div className="project-timeline">
          {projects.map((project, index) => (
            <article
              className={`project-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
              key={project.title}
              style={{ '--project-color': project.color }}
            >
              <span className="timeline-dot" aria-hidden="true" />

              <div className="project-inner">
                <div className="project-image-panel">
                  <img src={project.image} alt={`${project.title} preview`} />
                </div>

                <div className="project-copy-panel">
                  <div className="project-topline">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>{project.type}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <strong>{project.result}</strong>

                  <ul className="stack-list" aria-label={`${project.title} stack`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="project-links">
                    <a href={project.links.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                    <a href={project.links.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Shailesh Padwal</strong>
          <span>Frontend Developer</span>
        </div>

        <nav className="footer-links" aria-label="Footer social links">
          {socialLinks.map((item) => (
            <a
              href={item.href}
              key={item.label}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import heroImage from './public/hero-image.png';

const projects = [
  {
    title: 'E-commerce Dashboard',
    type: 'Admin System',
    year: '2026',
    status: 'Frontend + API',
    color: '#fc815c',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    description:
      'Admin panel for products, orders, users, and sales reports with reusable data views.',
    result: 'Fast management flow.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: {
      live: '#',
      code: '#',
    },
  },
  {
    title: 'Task Management App',
    type: 'Productivity Tool',
    year: '2026',
    status: 'Full Stack',
    color: '#ffe578',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80',
    description:
      'Team task tracker with auth, project boards, task states, and smart filters.',
    result: 'Clear daily planning.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    links: {
      live: '#',
      code: '#',
    },
  },
  {
    title: 'Portfolio API',
    type: 'Backend Service',
    year: '2026',
    status: 'REST API',
    color: '#47afa1',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    description:
      'REST API for project data, contact messages, admin access, and content updates.',
    result: 'Clean backend structure.',
    stack: ['Express', 'MongoDB', 'JWT'],
    links: {
      live: '#',
      code: '#',
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
    href: 'https://github.com/',
    path: 'M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.95c0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/',
    path: 'M19.05 4.91A9.86 9.86 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91a9.86 9.86 0 0 0-2.91-7.02ZM12.05 20.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.34c0-4.53 3.69-8.22 8.23-8.22a8.18 8.18 0 0 1 5.81 2.41 8.17 8.17 0 0 1 2.41 5.82c0 4.53-3.69 8.21-8.22 8.21Zm4.5-6.15c-.25-.12-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.12.16 1.75 2.67 4.24 3.74.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z',
  },
  {
    label: 'X',
    href: 'https://x.com/',
    path: 'M18.9 2.5h3.1l-6.77 7.74L23.2 21.5h-6.24l-4.89-6.4-5.6 6.4H3.36l7.24-8.28L2.96 2.5h6.4l4.42 5.85 5.12-5.85Zm-1.09 17.02h1.72L8.42 4.38H6.58l11.23 15.14Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    path: 'M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 10h4v11H3V10Zm6.5 0h3.83v1.5h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.54V21h-4V10Z',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/',
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
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-pressed={isDark}
          >
            <span className="theme-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                {isDark ? (
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1.2a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1Zm0-17.8a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.2a1 1 0 0 1-1 1ZM21 13h-1.2a1 1 0 1 1 0-2H21a1 1 0 1 1 0 2ZM4.2 13H3a1 1 0 1 1 0-2h1.2a1 1 0 1 1 0 2Zm13.94 6.56a1 1 0 0 1-.7-.29l-.85-.85A1 1 0 0 1 18 17l.85.85a1 1 0 0 1-.7 1.71Zm-12.24-7.45a1 1 0 0 1 .71-1.71l.86-.85a1 1 0 0 1 1.42 1.42l-.85.86a1 1 0 0 1-1.14.28Zm12.14 0a1 1 0 0 1 .7-.29 1 1 0 0 1 .7 1.71l-.85.86a1 1 0 0 1-1.42-1.42l.86-.85Zm-12.14 8.14a1 1 0 0 1-.7-1.7l.85-.86a1 1 0 0 1 1.42 1.42l-.86.85a1 1 0 0 1-.71.29Z" />
                ) : (
                  <path d="M21 14.7A8.5 8.5 0 0 1 9.3 3a1 1 0 0 1 1.1 1.45A6.5 6.5 0 0 0 19.55 13.6 1 1 0 0 1 21 14.7Z" />
                )}
              </svg>
            </span>
          </button>
        </div>

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
        <h1 id="intro-title" className="sr-only">Full Stack Developer</h1>
        <h2 className="hero-name">Shailesh Padwal</h2>
        <h4 className="hero-role">Full Stack Developer</h4>
        <div className="actions" aria-label="Portfolio links">
          <a className="button primary" href="mailto:your.email@example.com">
            Contact Me
          </a>
          <a
            className="button"
            href="/resume.pdf"
            download
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
                    <a href={project.links.live}>Live</a>
                    <a href={project.links.code}>Code</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

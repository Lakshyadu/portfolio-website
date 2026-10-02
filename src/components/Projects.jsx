import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Github, Layers, Eye } from 'lucide-react';

const Projects = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'web', label: 'Web Apps' },
    { key: 'ai', label: 'AI & ML' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.categoryKey === filter);

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// PORTFOLIO WORK</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real-world applications built with modern frontend frameworks and intelligent backend services.</p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                background: filter === cat.key ? 'var(--gradient-primary)' : 'rgba(255, 255, 255, 0.05)',
                color: filter === cat.key ? '#fff' : 'var(--text-secondary)',
                border: '1px solid var(--border-color)',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Project Image Box */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => onSelectProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(11, 15, 25, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)'
                }}>
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.4rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.8rem' }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-color)',
                        padding: '0.25rem 0.7rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <button
                    onClick={() => onSelectProject(project)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}
                  >
                    <Eye size={16} /> View Case Study
                  </button>

                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repo"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

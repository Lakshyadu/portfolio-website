import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, TrendingUp } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(5, 8, 16, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-lg)',
          position: 'relative',
          padding: '2.5rem',
          background: 'var(--bg-secondary)',
          boxShadow: 'var(--shadow-lg)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            color: 'var(--text-secondary)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-color)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="glass-pill" style={{ marginBottom: '0.8rem', color: 'var(--accent-cyan)' }}>
            {project.category} Case Study
          </span>
          <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>
            {project.title}
          </h2>
        </div>

        {/* Preview Image */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '2rem', height: '280px' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Metrics Bar */}
        {project.fullDetails?.metrics && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            {project.fullDetails.metrics.map((metric, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  minWidth: '180px',
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}
              >
                <TrendingUp size={22} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {metric}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Technical Challenge & Solution */}
        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={18} /> Technical Challenge
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {project.fullDetails?.challenge || project.description}
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent-emerald)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} /> Architectural Solution
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {project.fullDetails?.solution || project.description}
            </p>
          </div>
        </div>

        {/* Tech Stack List */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.8rem' }}>Technologies Used:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {(project.fullDetails?.techStack || project.tags).map((tech, i) => (
              <span
                key={i}
                className="glass-pill"
                style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-primary">
            Launch Live Demo <ExternalLink size={18} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
            Inspect Code on GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

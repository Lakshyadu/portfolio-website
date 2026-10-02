import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 0',
      background: 'var(--bg-secondary)',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700 }}>
          <div style={{
            background: 'var(--gradient-primary)',
            padding: '0.3rem',
            borderRadius: '6px',
            color: '#fff',
            display: 'flex'
          }}>
            <Code2 size={16} />
          </div>
          <span>Lakshya Dubey</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            fontWeight: 500,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-color)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-full)',
            transition: 'all var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-cyan)';
            e.currentTarget.style.color = 'var(--accent-cyan)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          Back to Top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

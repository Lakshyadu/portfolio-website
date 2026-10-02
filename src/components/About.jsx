import React, { useState } from 'react';
import { personalData, statsData } from '../data/portfolioData';
import { User, Award, Lightbulb, Code } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('background');

  const tabs = [
    { id: 'background', label: 'Background', icon: <User size={16} /> },
    { id: 'philosophy', label: 'Principles', icon: <Lightbulb size={16} /> },
    { id: 'focus', label: 'Current Focus', icon: <Code size={16} /> }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// ABOUT ME</span>
          <h2 className="section-title">Architecting Digital Experiences That Matter</h2>
          <p className="section-subtitle">Bridging engineering rigor with intuitive product design.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Avatar Image Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-card"
              style={{
                position: 'relative',
                padding: '1rem',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '380px',
                width: '100%',
                overflow: 'hidden',
                margin: '0 auto'
              }}
            >
              <img
                src={personalData.avatar}
                alt={personalData.name}
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: 'var(--radius-md)',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                padding: '0.8rem 1.4rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem'
              }}>
                <Award size={24} color="var(--accent-cyan)" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>EXPERIENCE</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>2+ year working in data filed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Tabbed Content */}
          <div>
            {/* Tabs Selector */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.8rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.8rem' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.2rem',
                    borderRadius: 'var(--radius-full)',
                    background: activeTab === tab.id ? 'var(--gradient-primary)' : 'transparent',
                    color: activeTab === tab.id ? '#fff' : 'var(--text-secondary)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Box */}
            <div style={{ minHeight: '160px', marginBottom: '2.5rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              {activeTab === 'background' && (
                <p>
Data-driven professional with 2+ years of experience working on analytics, ETL pipelines, and data transformation projects. Skilled in SQL, Python, Excel, Power BI, Tableau, and DuckDB, with hands-on experience in data cleaning, processing, visualization, reporting, and building analytics-ready datasets. Strong ability to transform raw data into actionable business insights while developing reliable and scalable data workflows.
                </p>
              )}
              {activeTab === 'philosophy' && (
                <p>
                  I believe in <strong> Data engineering simplicity</strong>: writing maintainable code, prioritizing accessibility, optimizing lighthouse web performance, and treating UI micro-interactions as first-class citizens. Code should be clean, modular, and built for team scalability.
                </p>
              )}
              {activeTab === 'focus' && (
                <p>
                  Currently focused on <strong>Generative AI integration architectures</strong> (Retrieval-Augmented Generation, vector embeddings, local LLM serving pipelines) paired with ultra-fast web interfaces using React 18 and WebGL canvas components.
                </p>
              )}
            </div>

            {/* Stats Counter Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem' }}>
              {statsData.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{ padding: '1.2rem 1.5rem', borderRadius: 'var(--radius-md)' }}
                >
                  <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="text-gradient">
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

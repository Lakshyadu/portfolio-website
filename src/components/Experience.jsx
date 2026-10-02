import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'rgba(0, 0, 0, 0.15)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// CAREER MILESTONES</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Track record of building engineering teams and delivering complex software.</p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-purple) 100%)',
            opacity: 0.4
          }} />

          {experienceData.map((item, index) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                paddingLeft: '3.5rem',
                marginBottom: '3rem'
              }}
            >
              {/* Timeline Bullet Node */}
              <div style={{
                position: 'absolute',
                left: '7px',
                top: '0px',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'var(--bg-primary)',
                border: '2px solid var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px var(--accent-cyan)'
              }}>
                <Briefcase size={14} color="var(--accent-cyan)" />
              </div>

              {/* Experience Glass Card */}
              <div className="glass-card" style={{ padding: '1.8rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                    {item.role} <span style={{ color: 'var(--accent-cyan)', fontWeight: 400 }}>@ {item.company}</span>
                  </h3>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    <Calendar size={14} /> {item.period}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '1.2rem', lineHeight: 1.7 }}>
                  {item.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--accent-cyan)',
                        background: 'rgba(6, 182, 212, 0.08)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

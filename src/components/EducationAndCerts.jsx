import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin } from 'lucide-react';

const EducationAndCerts = () => {
  return (
    <section id="education" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// ACADEMICS & CREDENTIALS</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">Academic degrees and verified technical certifications.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {/* Education Column */}
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <GraduationCap size={24} color="var(--accent-cyan)" /> Education
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {educationData.map((edu) => (
                <div key={edu.id} className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>{edu.degree}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', background: 'rgba(6, 182, 212, 0.1)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>
                      {edu.score}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.95rem', color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '0.6rem' }}>
                    {edu.institution}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={14} /> {edu.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={14} /> {edu.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Award size={24} color="var(--accent-purple)" /> Certifications & Honors
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {certificationsData.map((cert, index) => (
                <div key={index} className="glass-card" style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <CheckCircle2 size={20} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {cert.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {cert.issuer}
                    </div>
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

export default EducationAndCerts;

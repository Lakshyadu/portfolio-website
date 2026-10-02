import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Layout, Server, Cpu, Wrench, CheckCircle } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'Wrench': return <Wrench size={20} />;
      default: return <Layout size={20} />;
    }
  };

  const currentCategoryObj = skillCategories.find(c => c.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'rgba(0, 0, 0, 0.15)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// SKILLS & CAPABILITIES</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">A comprehensive breakdown of tools, frameworks, and core competencies.</p>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '3rem' }}>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.8rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                background: activeCategory === cat.id ? 'var(--gradient-primary)' : 'var(--bg-card)',
                color: activeCategory === cat.id ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.95rem',
                borderColor: activeCategory === cat.id ? 'transparent' : 'var(--border-color)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {getCategoryIcon(cat.icon)}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {currentCategoryObj.skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <CheckCircle size={16} color="var(--accent-cyan)" />
                  {skill.name}
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar background */}
              <div style={{
                height: '8px',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden'
              }}>
                <div
                  style={{
                    height: '100%',
                    width: `${skill.level}%`,
                    background: 'var(--gradient-primary)',
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

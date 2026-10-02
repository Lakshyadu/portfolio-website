import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Sparkles, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect hook
  useEffect(() => {
    const targetRole = personalData.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(targetRole.substring(0, displayedText.length + 1));
        if (displayedText === targetRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(targetRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalData.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '6rem',
        zIndex: 1
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div style={{ maxWidth: '850px' }}>
          {/* Status Badge */}
          <div className="glass-pill" style={{ marginBottom: '1.8rem' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-emerald)',
              boxShadow: '0 0 10px var(--accent-emerald)'
            }}></span>
            <span style={{ color: 'var(--text-secondary)' }}>Available for Remote & Contract Roles</span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-1px'
          }}>
            Crafting <span className="text-gradient">high-performance</span> Data Solution & AI solutions.
          </h1>

          {/* Dynamic Animated Subtitle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            fontWeight: 600,
            color: 'var(--accent-cyan)',
            marginBottom: '1.8rem',
            fontFamily: 'var(--font-mono)'
          }}>
            <Terminal size={24} />
            <span>{displayedText}</span>
            <span style={{ animation: 'pulse-glow 1s infinite', opacity: 1 }}>|</span>
          </div>

          {/* Bio Description */}
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '680px',
            lineHeight: 1.7
          }}>
            {personalData.bio}
          </p>

          {/* CTA Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <a href="#projects" className="btn-primary">
              Explore Featured Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch <Mail size={18} />
            </a>
            <a
              href={personalData.resumeUrl}
              className="btn-secondary"
              style={{ borderStyle: 'dashed' }}
              target="_blank"
              rel="noreferrer"
              download
            >
              Resume <Download size={18} />
            </a>
          </div>

          {/* Social Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>CONNECT WITH ME:</span>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {[
                { icon: <Github size={18} />, href: personalData.github, label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: personalData.linkedin, label: 'LinkedIn' },
                { icon: <Twitter size={18} />, href: personalData.twitter, label: 'Twitter' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-cyan)';
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

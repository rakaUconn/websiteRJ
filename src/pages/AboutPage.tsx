import React from 'react';
import { siteData } from '../data/content';

const { experience, education } = siteData;

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      borderBottom: '2px solid #1c1a17',
      paddingBottom: 10,
      marginBottom: 24,
    }}
  >
    <h2 style={{ font: "500 22px/1 'Spectral', serif", margin: 0, color: '#1c1a17' }}>
      {title}
    </h2>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div
      style={{
        padding: '48px 56px 70px',
        maxWidth: 900,
        margin: '0 auto',
        background: '#f6f2ea',
        minHeight: '100vh',
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          font: "500 11px/1 'IBM Plex Mono', monospace",
          letterSpacing: '0.2em',
          color: '#8a2b1e',
          marginBottom: 16,
        }}
      >
        ABOUT
      </div>

      <h1
        style={{
          font: "400 40px/1.08 'Spectral', serif",
          margin: '0 0 14px',
          letterSpacing: '-0.01em',
          color: '#1c1a17',
        }}
      >
        Education &amp; Experience
      </h1>
      <p
        style={{
          font: "400 17px/1.6 'Spectral', serif",
          color: '#4a4438',
          margin: '0 0 44px',
          maxWidth: '64ch',
        }}
      >
        Optical research engineer working across ocular imaging, adaptive optics, and
        computational photonics.
      </p>

      {/* Experience */}
      <SectionHeader title="Experience" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, marginBottom: 52 }}>
        {experience.map((exp, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '170px 1fr',
              gap: 22,
            }}
          >
            <div
              style={{
                font: "500 12px/1.5 'IBM Plex Mono', monospace",
                color: '#8a2b1e',
              }}
            >
              {exp.dates}
            </div>
            <div>
              <h3
                style={{
                  font: "500 19px/1.25 'Spectral', serif",
                  margin: '0 0 4px',
                  color: '#1c1a17',
                }}
              >
                {exp.title}
              </h3>
              <div
                style={{
                  font: "400 14px/1.4 'Spectral', serif",
                  color: '#6b6459',
                  marginBottom: 10,
                }}
              >
                {exp.org} — {exp.location}
              </div>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  font: "400 14.5px/1.6 'Spectral', serif",
                  color: '#3a352b',
                }}
              >
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ marginBottom: 4 }}>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <SectionHeader title="Education" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        {education.map((ed, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '170px 1fr',
              gap: 22,
              paddingBottom: 22,
              borderBottom: '1px solid #e2dac9',
            }}
          >
            <div
              style={{
                font: "500 12px/1.5 'IBM Plex Mono', monospace",
                color: '#8a2b1e',
              }}
            >
              {ed.year}
            </div>
            <div>
              <h3
                style={{
                  font: "500 17px/1.25 'Spectral', serif",
                  margin: '0 0 4px',
                  color: '#1c1a17',
                }}
              >
                {ed.degree}
              </h3>
              <div
                style={{
                  font: "400 14px/1.4 'Spectral', serif",
                  color: '#6b6459',
                  marginBottom: 6,
                }}
              >
                {ed.institution} — {ed.location}
              </div>
              {ed.detail && (
                <div
                  style={{
                    font: "400 13.5px/1.5 'Spectral', serif",
                    color: '#3a352b',
                  }}
                >
                  {ed.detail}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { siteData } from './data/content';

const { personalInfo, projects } = siteData;
const featuredProjects = projects.filter((p) => p.status === 'current').slice(0, 3);

// Reusable placeholder image box
const ImagePlaceholder: React.FC<{ style?: React.CSSProperties; className?: string }> = ({
  style,
  className,
}) => (
  <div
    className={className}
    style={{
      background: '#e8e0cf',
      borderRadius: 6,
      width: '100%',
      ...style,
    }}
  />
);

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#f6f2ea', minHeight: '100vh' }}>
      {/* Hero Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.35fr 0.65fr',
          gap: 44,
          padding: '64px 56px 52px',
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        {/* Left column */}
        <div>
          {/* Eyebrow */}
          <div
            style={{
              font: "500 11px/1 'IBM Plex Mono', monospace",
              letterSpacing: '0.2em',
              color: '#8a2b1e',
              marginBottom: 22,
            }}
          >
            {personalInfo.eyebrow}
          </div>

          {/* H1 */}
          <h1
            style={{
              font: "400 52px/1.06 'Spectral', serif",
              margin: '0 0 20px',
              letterSpacing: '-0.01em',
              color: '#1c1a17',
            }}
          >
            Optical systems that see
            <br />
            <em style={{ color: '#8a2b1e' }}>the eye more clearly.</em>
          </h1>

          {/* Description */}
          <p
            style={{
              font: "400 18px/1.6 'Spectral', serif",
              color: '#4a4438',
              margin: '0 0 28px',
              maxWidth: '52ch',
            }}
          >
            {personalInfo.description}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <button
              onClick={() => navigate('/research')}
              style={{
                background: '#8a2b1e',
                color: '#fff',
                font: "500 13px/1 'IBM Plex Mono', monospace",
                letterSpacing: '0.03em',
                padding: '14px 22px',
                borderRadius: 4,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              View Research
            </button>
            <button
              style={{
                border: '1px solid #cdc3ae',
                font: "500 13px/1 'IBM Plex Mono', monospace",
                padding: '14px 22px',
                borderRadius: 4,
                color: '#4a4438',
                cursor: 'pointer',
                background: 'transparent',
              }}
            >
              Curriculum Vitae ↓
            </button>
          </div>

          {/* Stat row */}
          <div
            style={{
              display: 'flex',
              gap: 26,
              marginTop: 34,
              paddingTop: 24,
              borderTop: '1px solid #e2dac9',
              font: "400 13px/1.4 'IBM Plex Mono', monospace",
              color: '#6b6459',
            }}
          >
            {personalInfo.stats.map((s, i) => (
              <span key={i}>
                <b style={{ color: '#1c1a17' }}>{s.value}</b> {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — portrait */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <img
            src={`${import.meta.env.BASE_URL}images/research/profile.jpg`}
            alt="Rakesh Joshi"
            style={{
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              borderRadius: 6,
              display: 'block',
            }}
          />
          <span
            style={{
              font: "italic 400 12px/1.4 'Spectral', serif",
              color: '#8a7f6c',
            }}
          >
            Rakesh Joshi, Postdoctoral Research Associate
          </span>
        </div>
      </div>

      {/* Current Work section */}
      <div
        style={{
          padding: '8px 56px 60px',
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            borderBottom: '2px solid #1c1a17',
            paddingBottom: 10,
            marginBottom: 26,
          }}
        >
          <h2
            style={{
              font: "500 24px/1 'Spectral', serif",
              margin: 0,
              color: '#1c1a17',
            }}
          >
            Current Work
          </h2>
          <button
            onClick={() => navigate('/research')}
            style={{
              font: "500 12px/1 'IBM Plex Mono', monospace",
              color: '#8a2b1e',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.04em',
            }}
          >
            ALL PROJECTS →
          </button>
        </div>

        {/* 3-column card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => navigate(`/research/${proj.id}`)}
              style={{ cursor: 'pointer' }}
            >
              {proj.fig1Src ? (
                <img
                  src={`${import.meta.env.BASE_URL}${proj.fig1Src}`}
                  alt={proj.fig1Caption}
                  style={{
                    width: '100%',
                    aspectRatio: '3/2',
                    objectFit: 'contain',
                    background: '#fff',
                    borderRadius: 5,
                    marginBottom: 12,
                    display: 'block',
                  }}
                />
              ) : (
                <ImagePlaceholder style={{ aspectRatio: '3/2', borderRadius: 5, marginBottom: 12 }} />
              )}
              <div
                style={{
                  font: "500 10px/1 'IBM Plex Mono', monospace",
                  letterSpacing: '0.12em',
                  color: '#8a2b1e',
                  marginBottom: 6,
                }}
              >
                {proj.category}
              </div>
              <h3
                style={{
                  font: "500 18px/1.25 'Spectral', serif",
                  margin: '0 0 6px',
                  color: '#1c1a17',
                }}
              >
                {proj.title}
              </h3>
              <p
                style={{
                  font: "400 14px/1.5 'Spectral', serif",
                  color: '#6b6459',
                  margin: 0,
                }}
              >
                {proj.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
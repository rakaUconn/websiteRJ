import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { siteData } from '../data/content';

const { projects } = siteData;

const ImagePlaceholder: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    style={{
      background: '#e8e0cf',
      borderRadius: 6,
      width: '100%',
      ...style,
    }}
  />
);

const Figure: React.FC<{ src?: string; alt: string; style?: React.CSSProperties }> = ({
  src,
  alt,
  style,
}) =>
  src ? (
    <img
      src={`${import.meta.env.BASE_URL}${src}`}
      alt={alt}
      style={{
        width: '100%',
        objectFit: 'contain',
        borderRadius: 6,
        background: '#fff',
        ...style,
      }}
    />
  ) : (
    <ImagePlaceholder style={style} />
  );

const ProjectPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return <Navigate to="/research" replace />;
  }

  const statusLabel =
    project.status === 'current'
      ? 'IN PROGRESS'
      : project.status === 'past'
      ? 'COMPLETED'
      : 'FUTURE WORK';

  return (
    <div style={{ background: '#fffdf8', paddingBottom: 70, minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '52px 44px 0',
        }}
      >
        {/* Back link */}
        <button
          onClick={() => navigate('/research')}
          style={{
            font: "500 11px/1 'IBM Plex Mono', monospace",
            color: '#8a2b1e',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            letterSpacing: '0.04em',
          }}
        >
          ← Projects
        </button>

        {/* Meta row */}
        <div
          style={{
            display: 'flex',
            gap: 14,
            alignItems: 'center',
            margin: '26px 0 18px',
            font: "500 11px/1 'IBM Plex Mono', monospace",
            letterSpacing: '0.08em',
            color: '#6b6459',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              background: '#f2e4e1',
              color: '#8a2b1e',
              padding: '6px 11px',
              borderRadius: 4,
            }}
          >
            {project.category}
          </span>
          <span>{statusLabel}</span>
          <span>{project.period}</span>
        </div>

        {/* Title */}
        <h1
          style={{
            font: "400 42px/1.1 'Spectral', serif",
            margin: '0 0 18px',
            letterSpacing: '-0.015em',
            color: '#1c1a17',
          }}
        >
          {project.title}
        </h1>

        {/* Byline */}
        <p
          style={{
            font: "italic 400 15px/1.5 'Spectral', serif",
            color: '#6b6459',
            margin: 0,
          }}
        >
          {project.authors} — {project.institution ?? 'University of Connecticut'}
        </p>
      </div>

      {/* Hero image — wider container */}
      <div
        style={{
          maxWidth: 960,
          margin: '36px auto 0',
          padding: '0 44px',
        }}
      >
        <Figure src={project.fig1Src} alt={project.fig1Caption} style={{ aspectRatio: '21/9' }} />
      </div>

      {/* Body */}
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '0 44px',
        }}
      >
        {/* Fig 1 caption */}
        <p
          style={{
            font: "italic 400 13px/1.5 'Spectral', serif",
            color: '#8a7f6c',
            borderBottom: '1px solid #e8e0cf',
            padding: '10px 0 18px',
            margin: '0 0 30px',
          }}
        >
          <b style={{ fontStyle: 'normal', color: '#8a2b1e' }}>Fig. 1</b> — {project.fig1Caption}
        </p>

        {/* Lead summary */}
        <p
          style={{
            font: "400 18px/1.7 'Spectral', serif",
            color: '#2b271f',
            margin: '0 0 22px',
          }}
        >
          {project.summary}
        </p>

        {/* Approach + Results — only if hasCaseStudy */}
        {project.hasCaseStudy && project.approach && (
          <>
            <h2
              style={{
                font: "500 26px/1.2 'Spectral', serif",
                margin: '44px 0 16px',
                color: '#1c1a17',
              }}
            >
              Approach
            </h2>
            <p
              style={{
                font: "400 16px/1.7 'Spectral', serif",
                color: '#3a352b',
                margin: '0 0 18px',
              }}
            >
              {project.approach}
            </p>

            {/* Fig 2 */}
            <div style={{ margin: '28px 0 34px' }}>
              <Figure src={project.fig2Src} alt={project.fig2Caption} style={{ aspectRatio: '16/9' }} />
              {project.fig2Caption && (
                <p
                  style={{
                    font: "italic 400 13px/1.5 'Spectral', serif",
                    color: '#8a7f6c',
                    borderBottom: '1px solid #e8e0cf',
                    padding: '10px 0 16px',
                    margin: '8px 0 0',
                  }}
                >
                  <b style={{ fontStyle: 'normal', color: '#8a2b1e' }}>Fig. 2</b> —{' '}
                  {project.fig2Caption}
                </p>
              )}
            </div>
          </>
        )}

        {project.hasCaseStudy && project.results && (
          <>
            <h2
              style={{
                font: "500 26px/1.2 'Spectral', serif",
                margin: '44px 0 16px',
                color: '#1c1a17',
              }}
            >
              Results
            </h2>
            <p
              style={{
                font: "400 16px/1.7 'Spectral', serif",
                color: '#3a352b',
                margin: '0 0 24px',
              }}
            >
              {project.results}
            </p>

            {/* Fig 3 */}
            {(project.fig3Src || project.fig3Caption) && (
              <div style={{ margin: '28px 0 34px' }}>
                <Figure src={project.fig3Src} alt={project.fig3Caption ?? ''} style={{ aspectRatio: '16/9' }} />
                {project.fig3Caption && (
                  <p
                    style={{
                      font: "italic 400 13px/1.5 'Spectral', serif",
                      color: '#8a7f6c',
                      borderBottom: '1px solid #e8e0cf',
                      padding: '10px 0 16px',
                      margin: '8px 0 0',
                    }}
                  >
                    <b style={{ fontStyle: 'normal', color: '#8a2b1e' }}>Fig. 3</b> —{' '}
                    {project.fig3Caption}
                  </p>
                )}
              </div>
            )}

            {/* Fig 4 */}
            {(project.fig4Src || project.fig4Caption) && (
              <div style={{ margin: '28px 0 34px' }}>
                <Figure src={project.fig4Src} alt={project.fig4Caption ?? ''} style={{ aspectRatio: '16/9' }} />
                {project.fig4Caption && (
                  <p
                    style={{
                      font: "italic 400 13px/1.5 'Spectral', serif",
                      color: '#8a7f6c',
                      borderBottom: '1px solid #e8e0cf',
                      padding: '10px 0 16px',
                      margin: '8px 0 0',
                    }}
                  >
                    <b style={{ fontStyle: 'normal', color: '#8a2b1e' }}>Fig. 4</b> —{' '}
                    {project.fig4Caption}
                  </p>
                )}
              </div>
            )}
          </>
        )}

        {/* Applications */}
        <h2
          style={{
            font: "500 26px/1.2 'Spectral', serif",
            margin: '44px 0 16px',
            color: '#1c1a17',
          }}
        >
          Applications
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 14,
            marginBottom: 8,
          }}
        >
          {project.applications.map((app, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #e2dac9',
                borderRadius: 5,
                padding: '16px 18px',
              }}
            >
              <div
                style={{
                  font: "500 15px/1.3 'Spectral', serif",
                  color: '#1c1a17',
                }}
              >
                {app.name}
              </div>
              <div
                style={{
                  font: "400 13px/1.4 'Spectral', serif",
                  color: '#6b6459',
                  marginTop: 4,
                }}
              >
                {app.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Related Publications */}
        <h2
          style={{
            font: "500 26px/1.2 'Spectral', serif",
            margin: '44px 0 16px',
            color: '#1c1a17',
          }}
        >
          Related Publications
        </h2>
        <div
          style={{
            borderLeft: '3px solid #8a2b1e',
            padding: '4px 0 4px 18px',
          }}
        >
          <div
            style={{
              font: "italic 400 14.5px/1.4 'Spectral', serif",
              color: '#6b6459',
            }}
          >
            {project.pubNote}
          </div>
        </div>

        {/* Tech tags */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginTop: 38,
            paddingTop: 22,
            borderTop: '1px solid #e8e0cf',
          }}
        >
          {project.tech.map((t, i) => (
            <span
              key={i}
              style={{
                font: "500 11px/1 'IBM Plex Mono', monospace",
                background: '#f1ece0',
                color: '#6b6459',
                padding: '7px 12px',
                borderRadius: 4,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPostPage;

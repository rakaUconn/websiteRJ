import React from 'react';
import { useNavigate } from 'react-router-dom';
import { siteData } from '../data/content';
import { Project } from '../types/content';

const { projects } = siteData;
const currentProjects = projects.filter((p) => p.status === 'current');
const pastProjects = projects.filter((p) => p.status === 'past');
const futureProjects = projects.filter((p) => p.status === 'future');

const ImagePlaceholder: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div style={{ background: '#e8e0cf', borderRadius: 5, flexShrink: 0, ...style }} />
);

interface ProjectRowProps {
  proj: Project;
  onClick: () => void;
  dimmed?: boolean;
  dashed?: boolean;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ proj, onClick, dimmed = false, dashed = false }) => (
  <div
    onClick={onClick}
    style={{
      display: 'flex',
      gap: 18,
      paddingBottom: dashed ? 0 : 24,
      paddingTop: dashed ? 18 : 0,
      paddingLeft: dashed ? 18 : 0,
      paddingRight: dashed ? 18 : 0,
      borderBottom: dashed ? 'none' : '1px solid #e2dac9',
      border: dashed ? '1px dashed #cdc3ae' : undefined,
      borderRadius: dashed ? 6 : undefined,
      cursor: 'pointer',
      opacity: dimmed ? 0.88 : 1,
    }}
  >
    {proj.fig1Src ? (
      <img
        src={`${import.meta.env.BASE_URL}${proj.fig1Src}`}
        alt={proj.fig1Caption}
        style={{
          width: dashed ? 110 : 130,
          height: dashed ? 110 : 130,
          aspectRatio: '1',
          objectFit: 'contain',
          background: '#fff',
          borderRadius: 5,
          flexShrink: 0,
        }}
      />
    ) : (
      <ImagePlaceholder
        style={{
          width: dashed ? 110 : 130,
          height: dashed ? 110 : 130,
          aspectRatio: '1',
        }}
      />
    )}
    <div>
      <div
        style={{
          font: "500 10px/1 'IBM Plex Mono', monospace",
          letterSpacing: '0.1em',
          color: '#8a2b1e',
          marginBottom: 7,
        }}
      >
        {proj.category} · {proj.period}
      </div>
      <h3
        style={{
          font: "500 19px/1.2 'Spectral', serif",
          margin: '0 0 7px',
          color: '#1c1a17',
        }}
      >
        {proj.title}
      </h3>
      <p
        style={{
          font: "400 13.5px/1.5 'Spectral', serif",
          color: '#6b6459',
          margin: '0 0 9px',
        }}
      >
        {proj.summary}
      </p>
      <span
        style={{
          font: "500 11px/1 'IBM Plex Mono', monospace",
          color: '#8a2b1e',
        }}
      >
        {proj.status === 'future' ? 'Read proposal →' : 'Read case study →'}
      </span>
    </div>
  </div>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
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
    <h2 style={{ font: "500 22px/1 'Spectral', serif", margin: 0, color: '#1c1a17' }}>
      {title}
    </h2>
  </div>
);

const ResearchIndexPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: '48px 56px 60px',
        maxWidth: 1280,
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
        RESEARCH
      </div>
      <h1
        style={{
          font: "400 40px/1.08 'Spectral', serif",
          margin: '0 0 14px',
          letterSpacing: '-0.01em',
          color: '#1c1a17',
        }}
      >
        Projects &amp; Research
      </h1>
      <p
        style={{
          font: "400 17px/1.6 'Spectral', serif",
          color: '#4a4438',
          margin: '0 0 40px',
          maxWidth: '62ch',
        }}
      >
        Active work on ocular imaging and optical correction, plus what's coming next — each written
        up as a short technical case study.
      </p>

      {/* Current Projects */}
      <SectionHeader title="Current Projects" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 26,
          marginBottom: 52,
        }}
      >
        {currentProjects.map((proj) => (
          <ProjectRow
            key={proj.id}
            proj={proj}
            onClick={() => navigate(`/research/${proj.id}`)}
          />
        ))}
      </div>

      {/* Past Projects */}
      <SectionHeader title="Past Projects" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 26,
          marginBottom: 52,
        }}
      >
        {pastProjects.map((proj) => (
          <ProjectRow
            key={proj.id}
            proj={proj}
            onClick={() => navigate(`/research/${proj.id}`)}
            dimmed
          />
        ))}
      </div>

      {/* Future Projects */}
      <SectionHeader title="Future Projects" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 26,
        }}
      >
        {futureProjects.map((proj) => (
          <ProjectRow
            key={proj.id}
            proj={proj}
            onClick={() => navigate(`/research/${proj.id}`)}
            dashed
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchIndexPage;

import React from 'react';
import { siteData } from '../data/content';

const { publications, patents } = siteData;

const PublicationsPage: React.FC = () => {
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
        PUBLICATIONS
      </div>

      <h1
        style={{
          font: "400 40px/1.08 'Spectral', serif",
          margin: '0 0 14px',
          letterSpacing: '-0.01em',
          color: '#1c1a17',
        }}
      >
        Publications
      </h1>
      <p
        style={{
          font: "400 17px/1.6 'Spectral', serif",
          color: '#4a4438',
          margin: '0 0 40px',
          maxWidth: '64ch',
        }}
      >
        Peer-reviewed work arising from the research above. Ongoing projects are noted as manuscripts
        in preparation on their respective project pages.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {publications.map((pub) => (
          <div
            key={pub.id}
            style={{
              borderLeft: '3px solid #8a2b1e',
              padding: '6px 0 6px 20px',
            }}
          >
            <h3
              style={{
                font: "500 19px/1.35 'Spectral', serif",
                margin: '0 0 8px',
                color: '#1c1a17',
              }}
            >
              {pub.title}
            </h3>
            <div
              style={{
                font: "400 14px/1.4 'IBM Plex Mono', monospace",
                color: '#6b6459',
                marginBottom: 10,
              }}
            >
              {pub.authors} · {pub.venue} {pub.pages} ({pub.year})
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {pub.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    font: "500 11px/1 'IBM Plex Mono', monospace",
                    background: '#f1ece0',
                    color: '#6b6459',
                    padding: '6px 11px',
                    borderRadius: 4,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Patents */}
      {patents.length > 0 && (
        <>
          <h2
            style={{
              font: "500 26px/1.2 'Spectral', serif",
              margin: '52px 0 22px',
              color: '#1c1a17',
            }}
          >
            Patents
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {patents.map((patent, i) => (
              <div
                key={i}
                style={{
                  borderLeft: '3px solid #8a2b1e',
                  padding: '6px 0 6px 20px',
                }}
              >
                <h3
                  style={{
                    font: "500 19px/1.35 'Spectral', serif",
                    margin: '0 0 8px',
                    color: '#1c1a17',
                  }}
                >
                  {patent.title}
                </h3>
                <div
                  style={{
                    font: "400 14px/1.4 'IBM Plex Mono', monospace",
                    color: '#6b6459',
                    marginBottom: 10,
                  }}
                >
                  {patent.inventors} · {patent.applicationNo} ({patent.date})
                </div>
                <span
                  style={{
                    font: "500 11px/1 'IBM Plex Mono', monospace",
                    background: '#f2e4e1',
                    color: '#8a2b1e',
                    padding: '6px 11px',
                    borderRadius: 4,
                  }}
                >
                  {patent.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PublicationsPage;

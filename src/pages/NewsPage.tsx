import React from 'react';
import { siteData } from '../data/content';

const { blogPosts } = siteData;

const NewsPage: React.FC = () => {
  return (
    <div
      style={{
        padding: '48px 56px 70px',
        maxWidth: 800,
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
        NEWS
      </div>

      <h1
        style={{
          font: "400 40px/1.08 'Spectral', serif",
          margin: '0 0 14px',
          letterSpacing: '-0.01em',
          color: '#1c1a17',
        }}
      >
        Blog &amp; News
      </h1>
      <p
        style={{
          font: "400 17px/1.6 'Spectral', serif",
          color: '#4a4438',
          margin: '0 0 40px',
          maxWidth: '60ch',
        }}
      >
        Short updates on research progress, publications, and talks.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {blogPosts.map((post, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '150px 1fr',
              gap: 22,
              padding: '24px 0',
              borderBottom: '1px solid #e2dac9',
            }}
          >
            <div
              style={{
                font: "500 12px/1.5 'IBM Plex Mono', monospace",
                color: '#8a2b1e',
              }}
            >
              {post.date}
            </div>
            <div>
              <h3
                style={{
                  font: "500 18px/1.3 'Spectral', serif",
                  margin: '0 0 6px',
                  color: '#1c1a17',
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  font: "400 14.5px/1.55 'Spectral', serif",
                  color: '#6b6459',
                  margin: 0,
                }}
              >
                {post.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;

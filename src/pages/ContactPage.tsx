import React from 'react';
import { siteData } from '../data/content';

const { personalInfo } = siteData;

interface ContactRow {
  label: string;
  value: string;
  isLink?: boolean;
  href?: string;
}

const rows: ContactRow[] = [
  { label: 'EMAIL', value: personalInfo.email, isLink: true, href: `mailto:${personalInfo.email}` },
  { label: 'LOCATION', value: 'Storrs, Connecticut, USA' },
  {
    label: 'LINKEDIN',
    value: personalInfo.linkedin,
    isLink: true,
    href: `https://${personalInfo.linkedin}`,
  },
  {
    label: 'GITHUB',
    value: personalInfo.github,
    isLink: true,
    href: `https://${personalInfo.github}`,
  },
  {
    label: 'ORCID',
    value: personalInfo.orcid,
    isLink: true,
    href: `https://${personalInfo.orcid}`,
  },
  {
    label: 'GOOGLE SCHOLAR',
    value: personalInfo.googleScholar,
    isLink: true,
    href: `https://${personalInfo.googleScholar}`,
  },
];

const ContactPage: React.FC = () => {
  return (
    <div
      style={{
        padding: '48px 56px 70px',
        maxWidth: 760,
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
        CONTACT
      </div>

      <h1
        style={{
          font: "400 40px/1.08 'Spectral', serif",
          margin: '0 0 14px',
          letterSpacing: '-0.01em',
          color: '#1c1a17',
        }}
      >
        Get in Touch
      </h1>
      <p
        style={{
          font: "400 17px/1.6 'Spectral', serif",
          color: '#4a4438',
          margin: '0 0 40px',
          maxWidth: '60ch',
        }}
      >
        Open to collaborations, postdoctoral opportunities, and conversations about optical imaging
        research.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderTop: '1px solid #e2dac9',
        }}
      >
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 0',
              borderBottom: '1px solid #e2dac9',
            }}
          >
            <span
              style={{
                font: "500 12px/1 'IBM Plex Mono', monospace",
                letterSpacing: '0.1em',
                color: '#6b6459',
              }}
            >
              {row.label}
            </span>
            {row.isLink ? (
              <a
                href={row.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  font: "400 16px/1.4 'Spectral', serif",
                  color: '#8a2b1e',
                  textDecoration: 'none',
                }}
              >
                {row.value}
              </a>
            ) : (
              <span
                style={{
                  font: "400 16px/1.4 'Spectral', serif",
                  color: '#1c1a17',
                }}
              >
                {row.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;

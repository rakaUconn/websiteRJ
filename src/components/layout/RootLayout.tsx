import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import VisitTrackingWrapper from './VisitTrackingWrapper';
import ScrollToTop from './ScrollToTop';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Research', to: '/research' },
  { label: 'Publications', to: '/publications' },
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
];

const RootLayout: React.FC = () => {
  return (
    <VisitTrackingWrapper>
      {/* Sticky Navigation */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 56px',
          borderBottom: '1px solid #e2dac9',
          background: '#f9f6f0',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        {/* Brand */}
        <NavLink
          to="/"
          style={{ display: 'flex', flexDirection: 'column', gap: '3px', textDecoration: 'none' }}
        >
          <span
            style={{
              font: "600 17px/1 'Spectral', serif",
              letterSpacing: '0.01em',
              color: '#1c1a17',
            }}
          >
            Rakesh Joshi
          </span>
          <span
            style={{
              font: "500 9px/1 'IBM Plex Mono', monospace",
              letterSpacing: '0.16em',
              color: '#8a2b1e',
            }}
          >
            OPTICAL RESEARCH ENGINEER
          </span>
        </NavLink>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            gap: '28px',
            font: "500 13px/1 'IBM Plex Mono', monospace",
            letterSpacing: '0.02em',
          }}
        >
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                color: isActive ? '#8a2b1e' : '#4a4438',
                textDecoration: 'none',
                cursor: 'pointer',
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      <ScrollToTop />
      <Outlet />
    </VisitTrackingWrapper>
  );
};

export default RootLayout;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useVisitTracker } from '../../hooks/useVisitTracker';

interface VisitTrackingWrapperProps {
  children: React.ReactNode;
}

const VisitTrackingWrapper: React.FC<VisitTrackingWrapperProps> = ({ children }) => {
  const location = useLocation();
  const { trackPageView } = useVisitTracker();

  useEffect(() => {
    // Track page view whenever the route changes
    trackPageView(location.pathname);
  }, [location.pathname, trackPageView]);

  return <>{children}</>;
};

export default VisitTrackingWrapper;

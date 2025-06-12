import { useEffect, useState } from 'react';
import { visitTracker, VisitorStats } from '../services/visitTracker';

export const useVisitTracker = () => {
  const [stats, setStats] = useState<VisitorStats | null>(null);

  useEffect(() => {
    // Track initial page view
    visitTracker.trackPageView(window.location.pathname);
    
    // Get initial stats
    setStats(visitTracker.getVisitorStats());

    // Track page visibility changes to update time on site
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        visitTracker.trackPageView(window.location.pathname);
      }
    };

    // Track before page unload
    const handleBeforeUnload = () => {
      visitTracker.trackPageView(window.location.pathname);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const trackPageView = (page: string) => {
    visitTracker.trackPageView(page);
    setStats(visitTracker.getVisitorStats());
  };

  const getStats = () => {
    const currentStats = visitTracker.getVisitorStats();
    setStats(currentStats);
    return currentStats;
  };

  const clearData = () => {
    visitTracker.clearVisitData();
    setStats(visitTracker.getVisitorStats());
  };

  const exportData = () => {
    return visitTracker.exportVisitData();
  };

  return {
    stats,
    trackPageView,
    getStats,
    clearData,
    exportData
  };
};

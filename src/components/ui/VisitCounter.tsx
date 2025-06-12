import React from 'react';
import { useVisitTracker } from '../../hooks/useVisitTracker';

interface VisitCounterProps {
  className?: string;
  showIcon?: boolean;
  showUnique?: boolean;
}

const VisitCounter: React.FC<VisitCounterProps> = ({ 
  className = '', 
  showIcon = true, 
  showUnique = true 
}) => {
  const { stats } = useVisitTracker();

  if (!stats) return null;

  return (
    <div className={`inline-flex items-center space-x-2 text-sm ${className}`}>
      {showIcon && <span>👁️</span>}
      <span>{stats.totalVisits} visits</span>
      {showUnique && (
        <>
          <span>•</span>
          <span>{stats.uniqueVisitors} unique</span>
        </>
      )}
    </div>
  );
};

export default VisitCounter;

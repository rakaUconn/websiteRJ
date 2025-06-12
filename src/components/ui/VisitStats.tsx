import React, { useState } from 'react';
import { useVisitTracker } from '../../hooks/useVisitTracker';
import { VisitData } from '../../services/visitTracker';

interface VisitStatsProps {
  showDetailed?: boolean;
  className?: string;
}

const VisitStats: React.FC<VisitStatsProps> = ({ showDetailed = false, className = '' }) => {
  const { stats, getStats, clearData, exportData } = useVisitTracker();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!stats) return null;

  const handleRefresh = () => {
    getStats();
  };

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `visit-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getTopItems = (obj: { [key: string]: number }, limit = 5) => {
    return Object.entries(obj)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit);
  };

  if (!showDetailed) {
    return (
      <div className={`inline-flex items-center space-x-2 text-sm text-gray-600 ${className}`}>
        <span>👁️ {stats.totalVisits} visits</span>
        <span>👥 {stats.uniqueVisitors} unique</span>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Visit Analytics</h3>
        <div className="flex space-x-2">
          <button
            onClick={handleRefresh}
            className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Refresh
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded">
          <div className="text-2xl font-bold text-blue-600">{stats.totalVisits}</div>
          <div className="text-sm text-gray-600">Total Visits</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded">
          <div className="text-2xl font-bold text-green-600">{stats.uniqueVisitors}</div>
          <div className="text-sm text-gray-600">Unique Visitors</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded">
          <div className="text-2xl font-bold text-purple-600">{Object.keys(stats.topReferrers).length}</div>
          <div className="text-sm text-gray-600">Referrer Sources</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded">
          <div className="text-2xl font-bold text-orange-600">{Object.keys(stats.topPages).length}</div>
          <div className="text-sm text-gray-600">Pages Visited</div>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Top Referrers</h4>
              <div className="space-y-2">
                {getTopItems(stats.topReferrers).map(([referrer, count]) => (
                  <div key={referrer} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-700 truncate">{referrer}</span>
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 mb-3">Top Pages</h4>
              <div className="space-y-2">
                {getTopItems(stats.topPages).map(([page, count]) => (
                  <div key={page} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-700 truncate">{page || '/'}</span>
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-3">Browser Statistics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {Object.entries(stats.browserStats).map(([browser, count]) => (
                <div key={browser} className="text-center p-2 bg-gray-50 rounded">
                  <div className="font-medium text-gray-900">{String(count)}</div>
                  <div className="text-xs text-gray-600">{browser}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-3">Recent Visits</h4>
            <div className="max-h-48 overflow-y-auto space-y-1">
              {stats.visitHistory.slice(-10).reverse().map((visit: VisitData, index: number) => (
                <div key={index} className="text-xs p-2 bg-gray-50 rounded">
                  <div className="flex justify-between">
                    <span>{new Date(visit.timestamp).toLocaleString()}</span>
                    <span className="text-gray-600">{visit.page}</span>
                  </div>
                  <div className="text-gray-500">From: {visit.referrer}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4 border-t">
            <button
              onClick={handleExport}
              className="px-4 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600"
            >
              Export Data
            </button>
            <button
              onClick={clearData}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitStats;

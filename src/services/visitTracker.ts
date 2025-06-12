export interface VisitData {
  timestamp: string;
  referrer: string;
  userAgent: string;
  page: string;
  sessionId: string;
  visitCount: number;
  timeOnSite: number;
}

export interface VisitorStats {
  totalVisits: number;
  uniqueVisitors: number;
  topReferrers: { [key: string]: number };
  topPages: { [key: string]: number };
  browserStats: { [key: string]: number };
  visitHistory: VisitData[];
}

class VisitTrackerService {
  private sessionId: string;
  private startTime: number;
  private storageKey = 'website_visit_data';

  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.initializeVisit();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeVisit(): void {
    const visitData: VisitData = {
      timestamp: new Date().toISOString(),
      referrer: this.getReferrerInfo(),
      userAgent: navigator.userAgent,
      page: window.location.pathname,
      sessionId: this.sessionId,
      visitCount: this.getVisitCount() + 1,
      timeOnSite: 0
    };

    this.saveVisitData(visitData);
    this.updateVisitCount();
  }

  private getReferrerInfo(): string {
    const referrer = document.referrer;
    
    if (!referrer) {
      return 'Direct';
    }

    try {
      const referrerUrl = new URL(referrer);
      const hostname = referrerUrl.hostname;
      
      // Categorize common referrers
      if (hostname.includes('google.')) return 'Google Search';
      if (hostname.includes('bing.')) return 'Bing Search';
      if (hostname.includes('yahoo.')) return 'Yahoo Search';
      if (hostname.includes('duckduckgo.')) return 'DuckDuckGo Search';
      if (hostname.includes('github.')) return 'GitHub';
      if (hostname.includes('linkedin.')) return 'LinkedIn';
      if (hostname.includes('twitter.') || hostname.includes('x.com')) return 'Twitter/X';
      if (hostname.includes('facebook.')) return 'Facebook';
      if (hostname.includes('reddit.')) return 'Reddit';
      if (hostname.includes('stackoverflow.')) return 'Stack Overflow';
      
      return hostname;
    } catch (error) {
      return referrer;
    }
  }

  private getBrowserInfo(): string {
    const userAgent = navigator.userAgent;
    
    if (userAgent.includes('Chrome') && !userAgent.includes('Edge')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Opera')) return 'Opera';
    
    return 'Other';
  }

  private getVisitCount(): number {
    const count = localStorage.getItem('visit_count');
    return count ? parseInt(count, 10) : 0;
  }

  private updateVisitCount(): void {
    const newCount = this.getVisitCount() + 1;
    localStorage.setItem('visit_count', newCount.toString());
  }

  private saveVisitData(visitData: VisitData): void {
    const existingData = this.getStoredData();
    existingData.visitHistory.push(visitData);
    
    // Keep only last 100 visits to prevent storage bloat
    if (existingData.visitHistory.length > 100) {
      existingData.visitHistory = existingData.visitHistory.slice(-100);
    }
    
    this.updateStats(existingData, visitData);
    localStorage.setItem(this.storageKey, JSON.stringify(existingData));
  }

  private updateStats(data: VisitorStats, visitData: VisitData): void {
    data.totalVisits += 1;
    
    // Update referrer stats
    if (!data.topReferrers[visitData.referrer]) {
      data.topReferrers[visitData.referrer] = 0;
    }
    data.topReferrers[visitData.referrer] += 1;
    
    // Update page stats
    if (!data.topPages[visitData.page]) {
      data.topPages[visitData.page] = 0;
    }
    data.topPages[visitData.page] += 1;
    
    // Update browser stats
    const browser = this.getBrowserInfo();
    if (!data.browserStats[browser]) {
      data.browserStats[browser] = 0;
    }
    data.browserStats[browser] += 1;
    
    // Update unique visitors (simplified - based on unique session IDs)
    const uniqueSessions = new Set(data.visitHistory.map(v => v.sessionId));
    data.uniqueVisitors = uniqueSessions.size;
  }

  private getStoredData(): VisitorStats {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing stored visit data:', error);
      }
    }
    
    return {
      totalVisits: 0,
      uniqueVisitors: 0,
      topReferrers: {},
      topPages: {},
      browserStats: {},
      visitHistory: []
    };
  }

  public trackPageView(page: string): void {
    const visitData: VisitData = {
      timestamp: new Date().toISOString(),
      referrer: this.getReferrerInfo(),
      userAgent: navigator.userAgent,
      page: page,
      sessionId: this.sessionId,
      visitCount: this.getVisitCount(),
      timeOnSite: Date.now() - this.startTime
    };

    this.saveVisitData(visitData);
  }

  public getVisitorStats(): VisitorStats {
    return this.getStoredData();
  }

  public clearVisitData(): void {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem('visit_count');
  }

  public exportVisitData(): string {
    const data = this.getStoredData();
    return JSON.stringify(data, null, 2);
  }

  // Method to send data to external analytics service (if needed)
  public async sendToAnalytics(endpoint: string): Promise<void> {
    const data = this.getStoredData();
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Failed to send analytics data:', error);
    }
  }
}

// Create a singleton instance
export const visitTracker = new VisitTrackerService();
export default VisitTrackerService;

# Visit Tracking System

This website includes a comprehensive visit tracking system that monitors visitor behavior and provides analytics about website traffic.

## Features

### 🔍 **Visitor Analytics**
- **Total Visits**: Counts every page view
- **Unique Visitors**: Tracks unique sessions
- **Referrer Tracking**: Identifies where visitors come from
- **Browser Statistics**: Shows which browsers visitors use
- **Page Analytics**: Tracks which pages are most popular

### 📊 **Referrer Sources Detected**
- Direct traffic
- Google Search
- Bing Search
- Yahoo Search
- DuckDuckGo Search
- GitHub
- LinkedIn
- Twitter/X
- Facebook
- Reddit
- Stack Overflow
- Other custom domains

### 🎯 **Components**

#### VisitCounter
A simple counter component that shows visit statistics:
```tsx
<VisitCounter className="text-gray-400" showIcon={true} showUnique={true} />
```

#### VisitStats
A detailed analytics dashboard:
```tsx
<VisitStats showDetailed={true} />
```

#### VisitTrackingWrapper
Automatically tracks page views when routes change:
```tsx
<VisitTrackingWrapper>
  <YourContent />
</VisitTrackingWrapper>
```

### 🪝 **useVisitTracker Hook**
```tsx
const { stats, trackPageView, getStats, clearData, exportData } = useVisitTracker();
```

### 🔧 **Visit Tracker Service**
The core service handles:
- Session management
- Data persistence (localStorage)
- Referrer analysis
- Browser detection
- Export functionality

## Usage

### Basic Implementation
The visit tracker is automatically initialized when the app loads. It tracks:
- Initial page load
- Route changes
- Time spent on site
- Browser/device information

### Viewing Analytics
1. **Simple Counter**: Visible in the footer of every page
2. **Detailed Analytics**: Visit `/admin` (password: `admin123`)

### Data Export
Admins can export visit data as JSON from the admin panel.

### Privacy & Storage
- All data is stored locally in the browser's localStorage
- No external servers are contacted
- Data includes timestamps, referrers, and basic browser info
- Users can clear their own data

## Configuration

### Customizing Referrer Detection
Edit the `getReferrerInfo()` method in `visitTracker.ts` to add more referrer sources.

### Changing Admin Password
Update the password in `AdminPage.tsx` (line with `password === 'admin123'`).

### Data Retention
The system keeps the last 100 visits to prevent storage bloat. Modify this in `saveVisitData()`.

## Files Structure

```
src/
├── services/
│   └── visitTracker.ts          # Core tracking service
├── hooks/
│   └── useVisitTracker.ts       # React hook for tracking
├── components/
│   ├── ui/
│   │   ├── VisitCounter.tsx     # Simple visit counter
│   │   └── VisitStats.tsx       # Detailed analytics
│   └── layout/
│       ├── VisitTrackingWrapper.tsx  # Route tracking wrapper
│       └── RootLayout.tsx       # App layout with tracking
└── pages/
    └── AdminPage.tsx            # Admin analytics page
```

## Analytics Data Format

```typescript
interface VisitData {
  timestamp: string;        // ISO timestamp
  referrer: string;         // Where visitor came from
  userAgent: string;        // Browser user agent
  page: string;            // Page visited
  sessionId: string;       // Unique session ID
  visitCount: number;      // Total visits by this user
  timeOnSite: number;      // Time spent (ms)
}
```

## Security Notes

- Admin panel uses basic password protection
- For production, implement proper authentication
- Consider GDPR compliance for EU visitors
- All tracking is client-side only

## Future Enhancements

- [ ] Real-time analytics
- [ ] Geographic tracking (with IP geolocation)
- [ ] Device/screen size analytics
- [ ] Search keyword tracking
- [ ] Conversion funnel tracking
- [ ] Export to Google Analytics
- [ ] Email reports

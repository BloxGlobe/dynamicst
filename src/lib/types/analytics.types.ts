export interface AnalyticsOverview {
  period: '7day' | '30day' | '90day';
  dailyActiveUsers: number;
  avgPlaytime: number;
  dailyRevenue: number;
  totalRevenue: number;
  growth: {
    users: number; // percentage
    playtime: number; // percentage
    revenue: number; // percentage
  };
}

export interface AnalyticsDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface AnalyticsChart {
  type: 'line' | 'bar' | 'pie';
  data: AnalyticsDataPoint[];
  title: string;
}
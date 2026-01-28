export interface Experience {
  id: string;
  name: string;
  description?: string;
  status: 'Private' | 'Public' | 'Draft';
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  analytics: ExperienceAnalytics;
}

export interface ExperienceAnalytics {
  dailyActiveUsers: number;
  avgPlaytime: number; // in minutes
  dailyRevenue: number;
  totalVisits: number;
  lastUpdated: string;
}

export interface CreateExperienceInput {
  name: string;
  description?: string;
  status?: 'Private' | 'Public' | 'Draft';
}
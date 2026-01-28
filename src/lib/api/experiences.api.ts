import type { Experience, CreateExperienceInput } from '../types';
import { helpers } from '../../utils/helpers';

export const experiencesAPI = {
  getAll: async (): Promise<Experience[]> => {
    await helpers.sleep(500);
    
    // Mock data
    return [
      {
        id: '1',
        name: 'My First Project',
        status: 'Private',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: 'user-1',
        analytics: {
          dailyActiveUsers: 0,
          avgPlaytime: 0,
          dailyRevenue: 0,
          totalVisits: 0,
          lastUpdated: new Date().toISOString()
        }
      }
    ];
  },

  create: async (input: CreateExperienceInput): Promise<Experience> => {
    await helpers.sleep(500);
    
    return {
      id: helpers.generateId(),
      name: input.name,
      description: input.description,
      status: input.status || 'Private',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: 'user-1',
      analytics: {
        dailyActiveUsers: 0,
        avgPlaytime: 0,
        dailyRevenue: 0,
        totalVisits: 0,
        lastUpdated: new Date().toISOString()
      }
    };
  }
};
import React from 'react';
import type { Experience } from '../../lib/types';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-card-thumbnail"></div>
      
      <div className="experience-card-content">
        <div className="experience-card-header">
          <div>
            <h3 className="experience-card-title">{experience.name}</h3>
            <p className="experience-card-status">{experience.status}</p>
          </div>
          <button className="experience-card-menu">⋮</button>
        </div>

        <div className="experience-card-stats">
          <div className="experience-card-stat-header">
            <span>Analytics Overview</span>
            <span>7 Day Avg.</span>
          </div>
          
          <div className="experience-card-stat">
            <span>Daily Active Users</span>
            <span>{experience.analytics.dailyActiveUsers || '--'}</span>
          </div>
          
          <div className="experience-card-stat">
            <span>Average playtime</span>
            <span>{experience.analytics.avgPlaytime || '--'}</span>
          </div>
          
          <div className="experience-card-stat">
            <span>Daily Revenue</span>
            <span>${experience.analytics.dailyRevenue || '--'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

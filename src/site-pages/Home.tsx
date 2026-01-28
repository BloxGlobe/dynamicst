import React, { useEffect, useState } from 'react';
import { ExperienceCard } from '../components/dashboard/ExperienceCard';
import type { Experience } from '../lib/types';
import { experiencesAPI } from '../lib/api/experiences.api';

export const Home: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperiences = async () => {
      const data = await experiencesAPI.getAll();
      setExperiences(data);
      setLoading(false);
    };

    loadExperiences();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-home">
      <div className="dashboard-section">
        <div className="dashboard-section-header">
          <h2 className="dashboard-section-title">Experiences</h2>
          <button className="dashboard-btn-primary">Create Experience</button>
        </div>

        <div className="experiences-grid">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h2 className="dashboard-section-title">Announcements</h2>
        <div className="announcements-grid">
          <div className="announcement-card">
            <p className="announcement-date">JAN 28, 2026</p>
            <h3 className="announcement-title">Welcome to DynamicNet!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
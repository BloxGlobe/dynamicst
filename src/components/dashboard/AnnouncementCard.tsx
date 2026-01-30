import React, { useEffect, useState } from 'react';

interface Announcement {
  id: string;
  title: string;
  date: string;
}

export const AnnouncementCard: React.FC = () => {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this later with a real API call
    const loadAnnouncement = async () => {
      // mock async load
      await new Promise((r) => setTimeout(r, 300));

      setAnnouncement({
        id: 'welcome',
        title: 'Welcome to DynamicNet!',
        date: 'JAN 28, 2026',
      });

      setLoading(false);
    };

    loadAnnouncement();
  }, []);

  if (loading) {
    return (
      <div className="announcement-card announcement-loading">
        <p>Loading announcement...</p>
      </div>
    );
  }

  if (!announcement) {
    return null;
  }

  return (
    <div className="announcement-card">
      <p className="announcement-date">{announcement.date}</p>
      <h3 className="announcement-title">{announcement.title}</h3>
    </div>
  );
};

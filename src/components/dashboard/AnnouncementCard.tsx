import React, { useEffect, useState } from 'react';
import type { Announcement } from '../../lib/types'; 

export const AnnouncementCard: React.FC = () => {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnnouncement = async () => {
      await new Promise((r) => setTimeout(r, 300));

      setAnnouncement({
        id: 'welcome',
        title: 'Welcome to DynamicNet!',
        content:
          'We are excited to have you on board. Explore the new features and let us know your feedback.',
        author: 'The DynamicNet Team',
        avatars: [],
        date: 'JAN 28, 2026',
      });

      setLoading(false);
    };

    loadAnnouncement();
  }, []);

  if (loading) {
    return <div className="announcement-card">Loading announcement...</div>;
  }

  if (!announcement) return null;

  return (
    <div className="announcement-card">
      <p className="announcement-date">{announcement.date}</p>
      <h3 className="announcement-title">{announcement.title}</h3>
      {announcement.content && (
        <p className="announcement-content">{announcement.content}</p>
      )}
    </div>
  );
};

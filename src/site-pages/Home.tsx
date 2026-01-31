import React from "react";
import Searchbar from "../components/scripts/Searchbar";

export const Home: React.FC = () => {
  return (
    <div className="dashboard-home">
      {/* Search Section */}
      <div className="dashboard-section">
        <Searchbar />
      </div>

      {/* Announcements Section */}
      <div className="dashboard-section">
        <h2 className="dashboard-section-title">Announcements</h2>
        {/* Announcements will go here */}
      </div>
    </div>
  );
};

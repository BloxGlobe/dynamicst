import React from 'react';

export const LuauShowcase: React.FC = () => {
  return (
    <section id="luau" className="luau-section">
      <div className="luau-container">
        <div className="luau-header">
          <div className="luau-badge">
            <span>Luau</span>
          </div>
          <h2 className="luau-title">Run Luau right in your browser</h2>
          <p className="luau-description">
            Our platform leans heavily on Luau for core workflows — moderation, authentication,
            and media pipelines. Explore Luau interactively and see how it powers DynamicNet.
          </p>
          <div className="luau-actions">
            <a
              className="luau-btn luau-btn-primary"
              href="https://play.luau.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              Open Playground
            </a>
            <a className="luau-btn luau-btn-secondary" href="#docs">Documentation</a>
          </div>
        </div>

        <div className="luau-iframe-wrapper">
          <iframe
            className="luau-iframe"
            title="Luau Playground"
            loading="lazy"
            allow="clipboard-write"
            src={
              "https://play.luau.org/?embed=true&theme=auto#code=" +
              encodeURIComponent(`print("Hello from Luau!")`)
            }
          />
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { performWebSearch } from "../../lib/services/searchService";
import type { SearchResult } from "../../lib/types/search";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await performWebSearch(query);
      setResults(data);
    } catch {
      setError("Search failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="searchbar-container">
      <div className="search-input-wrapper">
        <svg
          className="search-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search the web..."
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <p className="status-message">Searching…</p>}
      {error && <p className="error-message">{error}</p>}

      <ul className="results-list">
        {results.map((r, i) => (
          <li key={i} className="result-item">
            <a href={r.url} target="_blank" rel="noreferrer">
              <strong>{r.title}</strong>
            </a>
            {r.description && <p className="result-description">{r.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
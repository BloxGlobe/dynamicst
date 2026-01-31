import { useState } from "react";
import { searchWeb } from "../../lib/services/searchService";
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
      const data = await searchWeb(query);
      setResults(data);
    } catch {
      setError("Search failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search the web..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Searching…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {results.map((r, i) => (
          <li key={i}>
            <a href={r.url} target="_blank" rel="noreferrer">
              <strong>{r.title}</strong>
            </a>
            {r.description && <p>{r.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

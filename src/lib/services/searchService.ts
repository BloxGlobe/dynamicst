import type { SearchResult } from "../../lib/types/search";

interface BraveWebResult {
  title: string;
  url: string;
  description?: string;
}

const BRAVE_API_URL = "https://api.search.brave.com/res/v1/web/search";
const BRAVE_API_KEY = import.meta.env.VITE_BRAVE_API_KEY;

export async function searchWeb(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const res = await fetch(
    `${BRAVE_API_URL}?q=${encodeURIComponent(query)}&count=5`,
    {
      headers: {
        Accept: "application/json",
        "X-Subscription-Token": BRAVE_API_KEY,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data: {
    web?: {
      results?: BraveWebResult[];
    };
  } = await res.json();

  return data.web?.results ?? [];
}

import type { SearchResult } from "../types/search";

interface BraveWebResult {
  title: string;
  url: string;
  description?: string;
}

interface DuckDuckGoResult {
  FirstURL?: string;
  Text?: string;
  Result?: string;
}

const BRAVE_SEARCH_URL = "https://api.search.brave.com/res/v1/web/search";
const BRAVE_KEY = import.meta.env.VITE_BRAVE_API_KEY as string | undefined;

// DuckDuckGo Instant Answer API (free, no key required)
const DUCKDUCKGO_API_URL = "https://api.duckduckgo.com/";

// SerpAPI free tier (backup option)
const SERPAPI_URL = "https://serpapi.com/search";
const SERPAPI_KEY = import.meta.env.VITE_SERPAPI_KEY as string | undefined;

async function searchWithBrave(query: string): Promise<SearchResult[]> {
  if (!BRAVE_KEY) {
    throw new Error("Brave API key not configured");
  }

  const res = await fetch(
    `${BRAVE_SEARCH_URL}?q=${encodeURIComponent(query)}&count=10`,
    {
      headers: {
        Accept: "application/json",
        "X-Subscription-Token": BRAVE_KEY,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch from Brave Search");
  }

  const data: {
    web?: {
      results?: BraveWebResult[];
    };
  } = await res.json();

  return data.web?.results ?? [];
}

async function searchWithDuckDuckGo(query: string): Promise<SearchResult[]> {
  const res = await fetch(
    `${DUCKDUCKGO_API_URL}?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch from DuckDuckGo");
  }

  const data: {
    AbstractText?: string;
    AbstractURL?: string;
    AbstractSource?: string;
    RelatedTopics?: DuckDuckGoResult[];
    Results?: DuckDuckGoResult[];
  } = await res.json();

  const results: SearchResult[] = [];

  // Add main abstract if available
  if (data.AbstractText && data.AbstractURL) {
    results.push({
      title: data.AbstractSource || "DuckDuckGo Result",
      url: data.AbstractURL,
      description: data.AbstractText,
    });
  }

  // Add related topics
  if (data.RelatedTopics) {
    data.RelatedTopics.forEach((topic) => {
      if (topic.FirstURL && topic.Text) {
        results.push({
          title: topic.Text.split(" - ")[0] || topic.Text,
          url: topic.FirstURL,
          description: topic.Text,
        });
      }
    });
  }

  return results.slice(0, 10);
}

async function searchWithSerpAPI(query: string): Promise<SearchResult[]> {
  if (!SERPAPI_KEY) {
    throw new Error("SerpAPI key not configured");
  }

  const res = await fetch(
    `${SERPAPI_URL}?q=${encodeURIComponent(query)}&api_key=${SERPAPI_KEY}&num=10`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch from SerpAPI");
  }

  const data: {
    organic_results?: Array<{
      title: string;
      link: string;
      snippet?: string;
    }>;
  } = await res.json();

  return (
    data.organic_results?.map((result) => ({
      title: result.title,
      url: result.link,
      description: result.snippet,
    })) ?? []
  );
}

// Fallback: Generate search results using Google Custom Search
async function searchWithGoogle(query: string): Promise<SearchResult[]> {
  // Open Google search in a new way that can be scraped
  // Note: This is a fallback that just constructs Google search URLs
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  
  // For a real implementation, you'd need a scraper or use Google Custom Search API
  // This is a placeholder that returns a link to the search
  return [
    {
      title: `Search Google for: ${query}`,
      url: searchUrl,
      description: "Click to view Google search results in a new tab",
    },
  ];
}

export async function performWebSearch(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  // Try search providers in order of preference
  const searchProviders = [
    { name: "Brave", fn: searchWithBrave },
    { name: "DuckDuckGo", fn: searchWithDuckDuckGo },
    { name: "SerpAPI", fn: searchWithSerpAPI },
    { name: "Google", fn: searchWithGoogle },
  ];

  for (const provider of searchProviders) {
    try {
      console.log(`Attempting search with ${provider.name}...`);
      const results = await provider.fn(query);
      
      if (results.length > 0) {
        console.log(`Successfully retrieved ${results.length} results from ${provider.name}`);
        return results;
      }
    } catch (error) {
      console.warn(`${provider.name} search failed:`, error);
      // Continue to next provider
    }
  }

  // If all providers fail, return empty array
  console.error("All search providers failed");
  return [];
}
const BASE_URL = "https://api.jikan.moe/v4";

export const searchAnime = async (query) => {
  const response = await fetch(
    `${BASE_URL}/anime?q=${encodeURIComponent(query)}&limit=12`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch anime");
  }

  const data = await response.json();

  return data.data;
};
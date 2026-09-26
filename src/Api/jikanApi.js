const API_URL = "https://api.jikan.moe/v4";

export function getTopAnime() {
    const response = fetch(`${API_URL}/top/anime`);

    if (!response.ok) {
    throw new Error(`Jikan API error: ${response.status}`);
}

    const data = response.json();

    return data.data;
}

export function getAnimeById(id) {
    const response = fetch(`${API_URL}/anime/${id}`);

    if (!response.ok) {
    throw new Error(`Jikan API error: ${response.status}`);
}

    const data = response.json();

    return data.data;
}

export function searchAnime(query) {
    const response = fetch(`${API_URL}/anime?q=${encodeURIComponent(query)}`);

    if (!response.ok) {
    throw new Error(`Jikan API error: ${response.status}`);
}

    const data = response.json();

    return data.data;
}

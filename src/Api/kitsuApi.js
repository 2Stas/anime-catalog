const API_URL = "https://kitsu.io/api/edge";



export const fetchAnimeList = async ({
  pageLimit = 20,
  pageOffset = 0,
  subtype = '',
  status = '',
  sort = '',
} = {}) => {
  try {
    const params = new URLSearchParams();

    params.append('page[limit]', pageLimit);
    params.append('page[offset]', pageOffset);

    if (subtype) {
      params.append('filter[subtype]', subtype);
    }
    if (status) {
      params.append('filter[status]', status);
    }
    if (sort) {
      params.append('sort', sort);
    }

    const response = await fetch(`${API_URL}/anime?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Kitsu API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching anime list:', error);
    throw error;
  }
};

export async function getTopAnime(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;

    const response = await fetch(
        `${API_URL}/anime?page[limit]=${limit}&page[offset]=${offset}&sort=-averageRating`
    );

    if (!response.ok) {
        throw new Error(`Kitsu API error: ${response.status}`);
    }

    const data = await response.json();

    return data;
}

export async function getAnimeById(id) {
    const response = await fetch(
        `${API_URL}/anime/${id}`
    );

    if (!response.ok) {
        throw new Error(`Kitsu API error: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
}

export async function searchAnime(query) {
    const response = await fetch(
        `${API_URL}/anime?filter[text]=${encodeURIComponent(query)}&page[limit]=10`
    );

    if (!response.ok) {
        throw new Error(`Kitsu API error: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
}
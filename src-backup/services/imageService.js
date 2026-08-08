const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function getDestinationImage(query) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=1&orientation=landscape&query=${encodeURIComponent(
      query
    )}&client_id=${ACCESS_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch destination image");
  }

  const data = await response.json();

  if (!data.results.length) {
    return null;
  }

  return data.results[0];
}
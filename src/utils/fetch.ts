export const fetchData = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('HTTP Error');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    throw console.error('Fetch Error:', error instanceof Error ? error.message : error);
  }
};

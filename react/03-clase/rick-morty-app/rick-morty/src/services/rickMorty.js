const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const getBaseData = async () => {
  try {
    const response = await fetch(baseUrl);
    const jsonResponse = await response.json();

    return {
      results: jsonResponse.results,
      nextPage: jsonResponse.info.next,
    };
  } catch (error) {
    return {
      results: [],
      nextPage: null,
    };
  }
};

export const getDataFromUrl = async (url) => {
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();

    return {
      results: jsonResponse.results,
      nextPage: jsonResponse.info.next,
    };
  } catch (error) {
    return {
      results: [],
      nextPage: null,
    };
  }
};

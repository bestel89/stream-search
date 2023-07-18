import searchShow from "./search-show";


export async function getMoviesFromAPI(watchlist) {
    try {
      const results = [];
      for (const item of watchlist) {
        const result = await searchShow(item);
        results.push(result.result);
      }
      return results
    } catch (error) {
      console.error(error);
    }
}


export async function getShow(imdbId) {
  try {
    const result = await searchShow(imdbId)
    return result.result
  } catch (error) {
    console.log(error)
  }
}
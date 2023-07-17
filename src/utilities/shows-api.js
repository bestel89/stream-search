import searchShow from "./search-show";

export async function getMoviesFromAPI(watchlist) {
    try {
      const results = [];
      // await console.log('watchlist: ', watchlist)
      for (const item of watchlist) {
        const result = await searchShow(item);
        results.push(result.result);
      }
      return results
    } catch (error) {
      // Handle the error
      console.error(error);
    }
}

export async function getShow(imdbId) {
  try {
    // console.log('get show triggered, id: ', imdbId)
    const result = await searchShow(imdbId)
    return result.result
  } catch (error) {
    console.log(error)
  }
}
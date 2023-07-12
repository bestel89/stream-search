import searchShow from "./search-show";

export async function getMoviesFromAPI(watchlist) {
    try {
      const results = [];
      await console.log('watchlist: ', watchlist)
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
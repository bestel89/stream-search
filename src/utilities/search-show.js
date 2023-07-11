// eslint-disable-next-line import/no-anonymous-default-export
export default async function(showToSearch) {
    const url = `https://streaming-availability.p.rapidapi.com/v2/get/basic?country=gb&imdb_id=${showToSearch}&output_language=en`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}
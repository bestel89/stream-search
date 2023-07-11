// eslint-disable-next-line import/no-anonymous-default-export
export default async function(country) {
    const url = `https://streaming-availability.p.rapidapi.com/v2/search/basic?country=${country}&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=18&show_original_language=en&keyword=zombie`
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '06e55eee6fmshdf50720b1389774p1b30afjsn95c04db6198f',
          'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
      }
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }

}
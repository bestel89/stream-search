import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import searchShow from "../utilities/search-show"

export default function YourWatchlist({profile}) {

    const [watchlist, setWatchlist] = useState([]);
    const [watchlistObjsArray, setWatchlistObjsArray] = useState([]);

    useEffect(() => {
        setWatchlist(profile.watchlist);
    }, [profile]);

    async function getMoviesFromAPI(watchlistArr) {
        try {
          const results = [];
          for (const item of watchlistArr) {
            const result = await searchShow(item);
            console.log('result:', result);
            results.push(result);
          }
          console.log('results:', results);
          setWatchlistObjsArray(results);
        } catch (error) {
          // Handle the error
          console.error(error);
        }
      }

    useEffect(() => {
        getMoviesFromAPI(watchlist);
    }, [watchlist]);


    // const AvailableWatchlistItems = watchlist.map((SR, idx) => (
    //     <SearchResultItem item={SR} key={idx} index={idx}/>
    // ))

    return(
        <>
            <Container className="my-4">
                <h2>Your watchlist</h2>
                <h3>Available on your streaming services:</h3>
                {/* {AvailableWatchlistItems} */}
                <h3>Unavailable on your streaming services</h3>
                {/* {UnavailableWatchlistItems} */}
            </Container>
        </>
    )
}
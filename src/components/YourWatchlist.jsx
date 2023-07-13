import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import searchShow from "../utilities/search-show"
import AvWatchlistItem from "./AvWatchlistItem";
import * as showsAPI from "../utilities/shows-api"

export default function YourWatchlist({user, profile, setProfile}) {

    // watchlistObjsArray is an array of movie objs from API
    const [watchlistObjsArray, setWatchlistObjsArray] = useState([]);

    // on page load get movies to update watchlistObjsArray
    useEffect(() => {
        if (profile) {
            // console.log('b')
            getMovies(profile.watchlist);
            // console.log('profile watchlist ', profile.watchlist)
        }
    }, [profile]);
    
    async function getMovies(watchlist) {
        try{
            // console.log('c')
            // console.log('watchlist in getmovies: ', watchlist)
            const results = await showsAPI.getMoviesFromAPI(watchlist)
            // console.log('results: ', results)
            setWatchlistObjsArray(results)
        } catch (error){
            console.log(error)
        }
    }

    const AvWatchlistItems = watchlistObjsArray.map((item, index) => (
        <AvWatchlistItem item={item} key={index} index={index} profile={profile} setProfile={setProfile}/>
    ))

    return(
        <>
            <Container className="my-4">
                <h2>Your watchlist</h2>
                <h3>Available on your streaming services:</h3>
                <Container className="d-flex flex-wrap my-4 justify-content-center">
                    {AvWatchlistItems}
                </Container>
            </Container>
        </>
    )
}
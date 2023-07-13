import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import searchShow from "../utilities/search-show"
import AvWatchlistItems from "./AvWatchlistItems";
import * as showsAPI from "../utilities/shows-api"

export default function YourWatchlist({user, profile, setProfile}) {

    // console.log('a')
    // console.log('profile ', profile)

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

    return(
        <>
            <Container className="my-4">
                <h2>Your watchlist</h2>
                <h3>Available on your streaming services:</h3>
                <Container className="d-flex flex-wrap my-4 justify-content-center">
                    <AvWatchlistItems watchlistObjsArray={watchlistObjsArray} profile={profile} setProfile={setProfile}/>
                </Container>
            </Container>
        </>
    )
}
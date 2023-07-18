import { Container, Spinner, Accordion } from "react-bootstrap"
import { useEffect, useState } from "react"
import AvWatchlistItem from "./AvWatchlistItem";
import UnWatchlistItem from "./UnWatchlistItem";
import * as showsAPI from "../utilities/shows-api"

export default function YourWatchlist({ profile, setProfile}) {
    const [watchlistObjsArray, setWatchlistObjsArray] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (profile) {
            getMovies(profile.watchlist)
        }
    }, [profile])


    useEffect(() => {
        getUserServices()
    }, [])


    async function getUserServices() {
        const servicesFromProfile = profile.services || []
        const userServices = [...servicesFromProfile, "all4", "iplayer", "youtube"]
        const updatedProfile = { ...profile, services: userServices }
        await setProfile(updatedProfile)
    }
    

    async function getMovies(watchlist) {
        try{
            setIsLoading(true)
            const results = await showsAPI.getMoviesFromAPI(watchlist)
            setWatchlistObjsArray(results)
        } catch (error){
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }


    const AvWatchlistItems = watchlistObjsArray.map((item, index) => (
        <AvWatchlistItem item={item} key={index} index={index} profile={profile} setProfile={setProfile}/>
    ))


    const UnWatchlistItems = watchlistObjsArray
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((item, index) => (
            <UnWatchlistItem item={item} key={index} index={index} profile={profile} setProfile={setProfile} />
    ))

    
    return(
        <>
            <Container className="my-4">
                {isLoading ? (
                    <>
                        <Container className="d-flex flex-wrap my-4 justify-content-center">
                            <Spinner animation="border" role="status"></Spinner>
                        </Container>
                    </>
                ):(
                    <>
                        <h3>Available for you to watch:</h3>
                        <Container className="d-flex flex-wrap my-4 justify-content-center">
                            {AvWatchlistItems}
                        </Container>
                        <h3>Other shows on your watchlist:</h3>
                        <Accordion defaultActiveKey="0" className="my-4">
                            {UnWatchlistItems}
                        </Accordion>
                    </>
                )}
            </Container>
        </>
    )
}
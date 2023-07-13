import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { removeWatchListItem } from "../utilities/watchlistItems-api";
import * as showsAPI from '../utilities/shows-api'
import * as settingsAPI from '../utilities/settings-api'

export default function AvWatchlistItems({watchlistObjsArray, profile, setProfile, index}) {

    async function removeFromWatchlist(evt) {
        const clickedItemImdbId = await evt.target.id
        await removeWatchListItem(clickedItemImdbId)
        setProfile((profile) => {
            const updatedWatchlist = profile.watchlist.filter((item) => item !== clickedItemImdbId)
            const updatedProfile = { ...profile, watchlist: updatedWatchlist }
            return updatedProfile
        })
    }

    function getStreamingInfo(showObj) {
        const services = showObj.streamingInfo.gb
        if (services === {}) return 'No services here!'
        else if (services) {
            console.log(services)
            Object.keys(services).forEach(key => 
                console.log(key, services[key])
                )
            return services
        }
    }

    return (
        <> 
        {watchlistObjsArray.map((item, index) => (
            <Card className="mx-3 my-3" key={index} style={{ width: '20rem' }}>
                <Card.Img variant="top" src={item.posterURLs.original} /> 
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle>IMDB Rating: {item.imdbRating}/100</Card.Subtitle>
                    <Card.Text className="mt-3">{item.overview}</Card.Text>
                    <Card.Subtitle>Streaming Services:</Card.Subtitle>
                    {getStreamingInfo(item) ?
                    <Card.Text>services</Card.Text>
                    :
                    <h1>no services</h1>
                    
                    }
                    <div className="d-flex justify-content-between">
                        <Button>View show details</Button>
                        <Button variant="danger" id={item.imdbId} onClick={removeFromWatchlist}>Remove</Button>
                    </div>
                </Card.Body>
            </Card>
        ))}       
        </>
    )
}


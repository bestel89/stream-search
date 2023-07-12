import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { removeWatchListItem } from "../utilities/watchlistItems-api";
import * as showsAPI from '../utilities/shows-api'
import * as settingsAPI from '../utilities/settings-api'

export default function AvWatchlistItem({watchlistObjsArray, index}) {

    async function removeFromWatchlist() {
        // const imdbId = item.imdbId
        // await removeWatchListItem(imdbId)
        // const profile = await settingsAPI.getProfile(user._id)
        // console.log('hello')
        // await console.log('shortened watchlist: ', profile.watchlist)
        // await setWatchlistObjsArray(profile.watchlist)
    }

    console.log('other side', watchlistObjsArray)

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
                    <Card.Text>Services go here</Card.Text>
                    <div className="d-flex justify-content-between">
                        <Button>View show details</Button>
                        <Button variant="danger" onClick={removeFromWatchlist}>Remove</Button>
                    </div>
                </Card.Body>
            </Card>
        ))}       
        </>
    )
}


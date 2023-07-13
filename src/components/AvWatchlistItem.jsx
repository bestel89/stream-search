import { Card, Button, Alert, Badge, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { removeWatchListItem } from "../utilities/watchlistItems-api";

export default function AvWatchlistItem({item, profile, setProfile, index}) {

    const [streamingServices, setStreamingServices] = useState([])

    useEffect(() => {
        getStreamingInfo(item)
    }, [])

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
            let servicesArrObjs = []
            Object.entries(services).forEach(key => {
                console.log(key[0])
                let newObj = {
                    [key[0]]: key[1]
                }
                console.log(newObj)
                servicesArrObjs.push(newObj)
            });
            console.log('servicesArrObjs ', servicesArrObjs)
            setStreamingServices( ...streamingServices, servicesArrObjs)
        }
    }

    console.log(typeof(item.imdbRating))

    return (
        <> 
            <Card className="mx-3 my-3" key={index} style={{ width: '20rem' }}>
                <Card.Img variant="top" src={item.posterURLs.original} /> 
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="fw-semibold">IMDB {item.imdbRating/10}</Card.Text>
                    <Card.Text className="mt-3">{item.overview}</Card.Text>
                    <Card.Title>Streaming Services:</Card.Title>
                    <div className="d-flex">
                        {streamingServices.length ?
                            streamingServices.map((service, index) => (
                                <Badge className="my-3 me-2" bg="success" key={index}>{Object.keys(service)[0]}</Badge>
                            ))
                        :
                        <Alert className="my-3" variant='warning'>
                            No streaming services identified.
                        </Alert>
                        }
                    </div>
                    <div className="d-flex justify-content-between mt-auto">
                        <Button>View show details</Button>
                        <Button variant="danger" id={item.imdbId} onClick={removeFromWatchlist}>Remove</Button>
                    </div>
                </Card.Body>
            </Card>     
        </>
    )
}
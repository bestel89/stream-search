import { Card, Button, Alert, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useEffect, useState } from "react";
import { removeWatchListItem } from "../utilities/watchlistItems-api";



export default function AvWatchlistItem({item, profile, setProfile, index}) {

    const [streamingServices, setStreamingServices] = useState([])
    const [showStreamingStatus, setShowStreamingStatus] = useState(null)

    useEffect(() => {
        getStreamingInfo(item)
    }, [])

    useEffect(() => {
        getShowStreamingStatus();
    }, [streamingServices]);

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
                // console.log(key[0])
                let newObj = {
                    [key[0]]: key[1]
                }
                // console.log(Object.values(newObj))
                // console.log(newObj)
                Object.values(newObj).forEach(ssOptionsArr => {
                    // console.log(ssOptionsArr)
                    Object.values(ssOptionsArr).forEach(option => {
                        // console.log(option.type)
                        if(option.type === 'rent') {
                            newObj.rentOption = true
                        } else if (option.type === 'subscription') {
                            newObj.subscriptionOption = true
                        } else if (option.type === 'buy') {
                            newObj.buyOption = true
                        }
                    })
                })
                // console.log(newObj)
                servicesArrObjs.push(newObj)
            });
            // console.log('servicesArrObjs ', servicesArrObjs)
            setStreamingServices( ...streamingServices, servicesArrObjs)
        }
    }

    function renderTooltip(service) {
        const { subscriptionOption, rentOption, buyOption } = service
        let tooltipContent = ''
            if (subscriptionOption) {
            tooltipContent = 'SUBSCRIPTION'
            } else if (rentOption && buyOption) {
            tooltipContent = 'RENT and BUY'
            } else if (rentOption) {
            tooltipContent = 'RENT'
            } else if (buyOption) {
            tooltipContent = 'BUY'
            }
        return (
          <Tooltip>{tooltipContent}</Tooltip>
        )
    }

    async function getShowStreamingStatus() {
        if (streamingServices.length === 0) {
          setShowStreamingStatus(null)
          return
        }
        const userServices = await profile.services
        let status = true;
        for (const service of streamingServices) {
            const { subscriptionOption } = service
            if (!subscriptionOption) {
                status = false
            } else if (subscriptionOption) {
                if (userServices.includes(Object.keys(service)[0])) {
                status = true
            }
          }
        }
        setShowStreamingStatus(status)
    }
    
    return (
        <> 
            {showStreamingStatus && (
                <Card className="mx-3 my-3" key={index} style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={item.posterURLs.original} /> 
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text className="fw-semibold">IMDB {item.imdbRating/10}</Card.Text>
                        <Card.Text className="mt-3">{item.overview}</Card.Text>
                        <Card.Title>Streaming Services:</Card.Title>
                        <div className="d-flex">
                            {streamingServices.length ? (
                                streamingServices.map((service, index) => {
                                const { subscriptionOption, rentOption, buyOption } = service;
                                let badgeVariant = '';

                                if (subscriptionOption) {
                                    badgeVariant = 'success';
                                } else if (rentOption || buyOption) {
                                    badgeVariant = 'warning';
                                }

                                return (
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400}}
                                        overlay={renderTooltip(service)}
                                        key={index}
                                    >
                                        <Badge className="my-3 me-2" bg={badgeVariant} style={{cursor: "help"}}>
                                            {Object.keys(service)[0]}
                                        </Badge>
                                    </OverlayTrigger>
                                );
                                })
                            ) : (
                                <Alert className="my-3" variant="warning">
                                No streaming services identified.
                                </Alert>
                            )}
                        </div>
                        <div className="d-flex justify-content-between mt-auto">
                            <Button>View show details</Button>
                            <Button variant="danger" id={item.imdbId} onClick={removeFromWatchlist}>Remove</Button>
                        </div>
                    </Card.Body>
                </Card>
            )}
        </>
    )
}
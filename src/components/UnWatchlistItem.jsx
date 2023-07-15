import { Button, Card, Badge, OverlayTrigger, Alert, Tooltip, Accordion, Row, Col, Image } from "react-bootstrap"
import * as watchlistAPI from '../utilities/watchlistItems-api'
import { useState, useEffect } from "react"

export default function UnWatchlistItem({item, profile, setProfile, index}) {

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
        await watchlistAPI.removeWatchListItem(clickedItemImdbId)
        setProfile((profile) => {
            const updatedWatchlist = profile.watchlist.filter((item) => item !== clickedItemImdbId)
            const updatedProfile = { ...profile, watchlist: updatedWatchlist }
            return updatedProfile
        })
    }

    async function getStreamingInfo(showObj) {
        const services = showObj.streamingInfo.gb
        if (services === {}) return 'No services here!'
        else if (services) {
            const servicesArrObjs = await watchlistAPI.reorganiseStreamingServices(services)
            console.log(servicesArrObjs)
            setStreamingServices(servicesArrObjs)
        }
    }

    function renderTooltip(service) {
        const tooltipContent = watchlistAPI.setTooltipContent(service)
        return <Tooltip>{tooltipContent}</Tooltip>
    }

    async function getShowStreamingStatus() {
        if (streamingServices.length === 0) {
          setShowStreamingStatus(null)
          return
        }
        const status = await watchlistAPI.getStreamingStatus(streamingServices, profile)
        setShowStreamingStatus(status)
    }
    
    console.log(item)

    return (
        <> 
            {!showStreamingStatus && (
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{item.title} 
                    {streamingServices.length ? (
                        streamingServices.map((service, index) => {
                        const { subscriptionOption, rentOption, buyOption } = service
                        let badgeVariant = ''
                        if (subscriptionOption) {
                            badgeVariant = 'success'
                        } else if (rentOption || buyOption) {
                            badgeVariant = 'warning'
                        }

                        return (
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400}}
                                overlay={renderTooltip(service)}
                                key={index}
                            >
                                <Badge className="my-3 ms-2" bg={badgeVariant} style={{cursor: "help"}}>
                                    {Object.keys(service)[0]}
                                </Badge>
                            </OverlayTrigger>
                            )
                        })) 
                        : 
                        (
                        <Badge className="my-3 ms-2" bg="secondary" style={{cursor: "help"}}>
                            No services identified
                        </Badge>            
                    )}
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col xs lg="2"> 
                                <Image src={item.posterURLs.original} className="mh-10" thumbnail/>
                            </Col>
                            <Col className="d-flex flex-column justify-content-between my-3">
                                <div className="mb-3">
                                    <h5>Overview</h5>
                                    {item.overview}
                                </div>
                                <div className="mb-3">
                                    <h5>Cast</h5>
                                    {item.cast.join(', ')}
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className='fw-semibold my-0'>IMDB: {item.imdbRating/10}</p>
                                    </div>
                                    <div>
                                        <Button size="sm" className="me-3">View show details</Button>
                                        <Button size="sm" variant="danger" id={item.imdbId} onClick={removeFromWatchlist}>Remove</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            )}
        </>
    )
}

{/* <Card className="mx-3 my-3" key={index} style={{ width: '20rem' }}>
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
                </Card> */}
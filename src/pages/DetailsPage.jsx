import { Container, Row, Col, Spinner, Accordion } from "react-bootstrap";
import { useEffect, useState } from "react";
import * as showsAPI from '../utilities/shows-api';
import { useLocation } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import DetailsStreamingServiceItem from "../components/DetailsStreamingServiceItem";

export default function DetailsPage() {
    const [show, setShow] = useState(null);
    const [streamingServices, setStreamingServices] = useState(null)
    const location = useLocation();
    const detailsStreamingServiceItems = [];


    useEffect(() => {
        if (location.state) {
            const showId = location.state.imdbId;
      
        showsAPI.getShow(showId)
            .then((data) => {
                setShow(data);
            })
            .catch((error) => {
                console.error("Error fetching show:", error);
            });
        }
    }, [location.state]);

    useEffect(() => {
        if (location.state) {
            setStreamingServices(location.state.streamingServices)
        }
    }, [location.state])


    if (streamingServices) {
        streamingServices.forEach((item, index) => {
            detailsStreamingServiceItems.push(
                <DetailsStreamingServiceItem item={item} key={index} index={index} />
            );
        });
    }


    if (!show) {
        return (
            <Container className="my-3 d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        )
    }

    return (
        <>
            <Container className="my-4">
                <Row>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>{show.title}</h2>
                        <h3 className="pt-3">IMDB: {show.imdbRating/10}</h3>
                    </div>
                    <div className='d-flex'>
                        <p>{show.countries} |</p>
                        <p className='ms-2 text-capitalize'>{show.type} |</p>
                        <p className='ms-2'>{show.year}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Directors: {show.directors.slice(0,3).join(', ')}</p>
                        <p>Cast: {show.cast.slice(0,3).join(', ')}</p>
                    </div>
                </Row>
                <Row className=" d-flex justify-content-center align-items-center">
                    <Col className="my-3">
                        <VideoPlayer videoId={show.youtubeTrailerVideoId}/>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <div>
                            <h4>Overview</h4>
                            <p>{show.overview}</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>Where can you watch?</h4>
                        </div>
                        {detailsStreamingServiceItems.length > 0 ? (
                            <Accordion defaultActiveKey="0">
                                {detailsStreamingServiceItems}
                            </Accordion>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

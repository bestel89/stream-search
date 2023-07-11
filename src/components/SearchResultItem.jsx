import { Row, ToggleButtonGroup, ToggleButton, Col, Image, Container, Stack } from "react-bootstrap"
import { useState } from "react"
import sendRequest from "../utilities/send-request";
import { addWatchListItem, removeWatchListItem } from "../utilities/watchlistItems-api";

export default function SearchResultItem({item, index}) {
 
    const [value, setValue] = useState([])

    function handleChange(val) {

        setValue(val);
        const imdbId = item.imdbId


        function addItemToWatchlist(imdbId) {
            addWatchListItem(imdbId)
        }


        function removeItemFromWatchlist(imdbId) {
            removeWatchListItem(imdbId)
        }

        if (val.includes(index)) {
            addItemToWatchlist(imdbId)
        } else {
            removeItemFromWatchlist(imdbId)
        }
    }
    
    function isButtonToggled(buttonValue) {
        return value.includes(buttonValue);
    }
    
    function toggleButtonText(buttonValue) {
        return isButtonToggled(buttonValue) ? "REMOVE" : "ADD";
    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col xs={2} md={2}>
                        <Image src={item.posterURLs.original} thumbnail /> 
                    </Col>
                    <Col>
                        <Stack direction="horizontal" gap={5}>
                            <div className="d-flex flex-column">
                                <h3>{item.title} - <span className="text-capitalize font-weight-light fs-5">{item.type}</span></h3>
                                <p>{item.year} - IMDB: {item.imdbRating}/100</p>
                                <p>{item.overview}</p>
                                <p>{item.cast.slice(0,3).join(', ')}</p>
                            </div>
                            <div className="d-flex flex-column">
                                <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                                    <ToggleButton id={`tbg-btn-${index}`} variant="success" value={index} key={index}>
                                        {toggleButtonText(index)}
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
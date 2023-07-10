import { Row, Button, Col, Image, Container, Stack } from "react-bootstrap"

export default function SearchResultItem({item, index}) {
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
                                <h3>{item.title}</h3>
                                <p>{item.year}</p>
                                <p>{item.overview}</p>
                                <p>{item.cast.slice(0,3).join(', ')}</p>
                            </div>
                            <div className="d-flex flex-column">
                                <Button variant="success">ADD</Button>
                            </div>
                        </Stack>
                    </Col>
                </Row>

            </Container>

            {/* <div className="d-flex">
                <div>
                    <img src={item.posterURLs.original} alt="boy watching lots of TVs" style={{ width: '10%', }}/>
                </div>
                <div>
                    <div className="mt-5 d-flex justify-content-between">
                        <h3>{item.title}</h3>
                        <Button>Add to watchlist</Button>
                    </div>
                    <div>
                        <p>{item.year}</p>
                        <p>{item.cast}</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}
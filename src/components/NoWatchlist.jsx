import { Container, Row, Col, Button } from "react-bootstrap"

export default function NoWatchlist() {

    return (
        <>
            <Container className="my-4">
                <Row>
                    <Col className="d-flex flex-column justify-content-center align-items-center my-5">
                        <h3 className="my-4">Create your watchlist</h3>
                        <img className="my-2" src="./play-circle.png" alt="fast-forward-button" width="100" />
                        <p className="my-4 mx-5">Search for and save the movies and shows that you want to watch next</p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
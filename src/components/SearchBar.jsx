import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import searchRequest from "../utilities/search-request";
import { useNavigate } from "react-router-dom";


export default function SearchBar() {
    
    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate()

    function handleInput(evt) {
        setSearchInput(evt.target.value)
        setError('')
    }

    function keyDownEvent(evt) {
        if (evt.code === "Enter") {
            evt.preventDefault()
            handleSearch()
        } else return
    }

    async function handleSearch() {
        const result = await searchRequest(searchInput)
        navigate('/searchresults', {
            state: result
        })
    }

    return (
        <Container className="mt-4">
          <Row>
            <Col md={{ span: 8, offset: 2 }}> 
              <Form className="d-flex">
                <Form.Control onChange={handleInput} value={searchInput}
                  type="search"
                  placeholder="Search movies and TV shows"
                  className="me-2"
                  aria-label="Search"
                  name="searchInput"
                  onKeyDown={keyDownEvent}
                />
                <Button onClick={handleSearch}>
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      );
}
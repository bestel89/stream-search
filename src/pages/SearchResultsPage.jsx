import { useLocation, Link } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import SearchResultItem from "../components/SearchResultItem"
import SearchBar from "../components/SearchBar"

export default function SearchResultsPage() {
    const location = useLocation()
    const searchResults = location.state.result


    const searchResultItems = searchResults.map((SR, idx) => (
        <SearchResultItem item={SR} key={idx} index={idx}/>
    ))

    
    return (
        <>
            <Container>
                <SearchBar/>
                    <div className="d-flex my-5">
                        <Button variant="link" href="/home" className="me-2"><img className="" src="./back.png" alt="back button" width="24"/></Button>
                        <h2>Search Results </h2>
                    </div>
                    {searchResultItems}
            </Container>

        </>
    )
}



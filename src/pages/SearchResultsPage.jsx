import { useLocation, Link } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import SearchResultItem from "../components/SearchResultItem"
import SearchBar from "../components/SearchBar"

export default function SearchResultsPage() {

    const location = useLocation()

    const searchInput = location.state.searchInput
    const searchResults = location.state.result
    console.log(searchResults)
    const searchResultItems = searchResults.map((SR, idx) => (
        <SearchResultItem item={SR} key={idx} index={idx}/>
    ))

    return (
        <>
            <Container>
                <SearchBar/>
                <div className='d-flex align-items-center mt-5'>
                    <h2>Search Results </h2>
                    <div className="ms-4">
                        <Button href="/home" variant="secondary">Back</Button>
                    </div>
                </div>
                {searchResultItems}
            </Container>

        </>
    )
}



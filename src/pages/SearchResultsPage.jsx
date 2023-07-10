import { useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"
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
                <h2 className="mt-5">Search Results</h2>
                {searchResultItems}
            </Container>

        </>
    )
}



import { useParams } from "react-router-dom";
import searchResultsStyles from "./SearchResultsStyles";
import SearchBar from "../SearchBar/SearchBar";

const SearchResults = () => {
    const { searched } = useParams()
    const styles = searchResultsStyles()

    return (
        <div className={styles.searchResultsScreen}>
            <SearchBar searched={searched!}/>
            <h1>Suggested recipes</h1>
        </div>
    )
}

export default SearchResults;
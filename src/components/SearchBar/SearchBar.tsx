import TextField from "@mui/material/TextField";
import searchBarStyles from "./SearchBarStyles";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const SearchBar = ({ searched }: { searched: string }) => {

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            window.location.href=`/search/${encodeURI(toSearch)}`
        }
    }

    const [toSearch, setToSearch] = useState(searched);
    const styles = searchBarStyles();

    return (
        <div className={styles.searchBar}>
            <TextField className={styles.searchInput}
                       label='What do you feel like eating?'
                       variant="outlined"
                       value={toSearch}
                       onChange={(e) => setToSearch(e.target.value)}
                       onKeyDown={handleKeyDown}
                />
            <Link to={`/search/${encodeURI(toSearch)}`}>
                <IconButton className={styles.searchButton}>
                    <SearchIcon fontSize="large"/>
                </IconButton>
            </Link>
            
        </div>
    )
}

export default SearchBar;

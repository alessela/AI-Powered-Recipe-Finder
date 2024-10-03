import TextField from "@mui/material/TextField";
import searchBarStyles from "./SearchBarStyles";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value }: { value: string }) => {

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log('Enter key pressed!');
        }
    }

    const [newValue, setValue] = useState(value);

    const styles = searchBarStyles();

    return (
        <div className={styles.searchBar}>
            <TextField className={styles.searchInput}
                       label='What do you feel like eating?'
                       variant="outlined"
                       value={newValue}
                       onChange={(e) => setValue(e.target.value)}
                       onKeyDown={handleKeyDown}
                />
            <SearchIcon fontSize="large" className={styles.searchButton}/>
        </div>
    )
}

export default SearchBar;

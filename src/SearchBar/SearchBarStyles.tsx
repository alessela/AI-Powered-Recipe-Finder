import { createUseStyles } from "react-jss";

const searchBarStyles = createUseStyles({
    searchBar: {
        marginTop: 80,
        position: 'relative',
    },
    searchInput: {
        width: '100%',
        '& .MuiOutlinedInput-root': {
            borderRadius: 28,
        },
    },
    searchButton: {
        position: 'absolute',
        top: 3,
        right: 0
    }
})

export default searchBarStyles;
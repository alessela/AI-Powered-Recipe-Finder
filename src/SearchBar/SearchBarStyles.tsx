import { createUseStyles } from "react-jss";

const searchBarStyles = createUseStyles({
    searchBar: {
        marginTop: 80,
        position: 'relative'
    },
    searchInput: {
        width: '100%',
        '& .MuiOutlinedInput-root': {
            borderRadius: 28,
        },
    },
    searchButton: {
        position: 'absolute',
        right: 5,
        top: 10
    }
})

export default searchBarStyles;
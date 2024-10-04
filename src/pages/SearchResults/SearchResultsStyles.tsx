import { createUseStyles } from "react-jss";

const searchResultsStyles = createUseStyles({
    searchResultsScreen: {
        width: 400,
        '@media (max-width: 400px)': {
            width: '100vw'
        }
    },
    anotherRecipesButton: {
        margin: 16
    }
})

export default searchResultsStyles;
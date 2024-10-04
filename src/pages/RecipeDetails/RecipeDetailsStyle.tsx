import { createUseStyles } from "react-jss";

const recipeDetailsStyles = createUseStyles({
    recipeDetailsScreen: {
        display: 'flex',
        '@media (min-width: 880px)': {
            gap: 80
        },
        '@media (max-width: 879px)': {
            flexDirection: 'column'
        },
        '@media (max-width: 400px)': {
            width: '100vw'
        },
        height: 'calc(100vh - 51px)'
    },
    leftSection: {
        maxWidth: 400
    },
    recipeImage: {
        width: "100%"
    },
    rightSection: {
        maxWidth: 400,
        overflowY: 'auto',
        flexGrow: 1
    }
})

export default recipeDetailsStyles;
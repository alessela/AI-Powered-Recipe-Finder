import { createUseStyles } from "react-jss";

const homePageStyles = createUseStyles({
    homeScreen: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        '@media (max-width: 400px)': {
            width: '100vw'
        },
        height: 'calc(100vh - 51px)'
    },
    recipeList: {
        overflowY: 'auto',
        flexGrow: 1
    }
})

export default homePageStyles;
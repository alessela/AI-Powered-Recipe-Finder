import { createUseStyles } from "react-jss";

const homeStyles = createUseStyles({
    homeScreen: {
        width: 400,
        '@media (max-width: 400px)': {
            width: '100vw'
        }
    }
})

export default homeStyles;
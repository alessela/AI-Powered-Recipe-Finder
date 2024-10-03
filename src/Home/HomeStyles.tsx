import { createUseStyles } from "react-jss";

const homeStyles = createUseStyles({
    homeScreen: {
        width: 400,
        '@media (max-width: 400px)': {
            width: '100vw'
        }
    },
    foodInput: {
        marginTop: 80,
        width: '100%',
        '& .MuiOutlinedInput-root': {
            borderRadius: 28,
        },
    }
})

export default homeStyles;
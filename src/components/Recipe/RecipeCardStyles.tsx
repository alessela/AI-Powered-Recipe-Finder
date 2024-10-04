import { createUseStyles } from "react-jss";

const recipeCardStyles = createUseStyles({
    recipeCard: {
        maxWidth: 400,
        borderRadius: 20,
        backgroundColor: 'inherit',
        display: 'flex'
    },
    recipeCardContent: {
        flexGrow: 1
    },
    recipeImage: {
        width: 88,
        height: 88
    }
})

export default recipeCardStyles;
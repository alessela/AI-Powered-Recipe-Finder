import { createUseStyles } from "react-jss";

const recipeCardStyles = createUseStyles({
    recipeCard: {
        width: 384,
        height: 88,
        borderRadius: 20,
        backgroundColor: 'inherit',
        display: 'flex'
    },
    recipeCardContent: {
        width: '100%'
    },
    recipeImage: {
        width: 88,
        height: 88
    }
})

export default recipeCardStyles;
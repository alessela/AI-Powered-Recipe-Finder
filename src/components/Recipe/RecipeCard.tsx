

import Recipe from "./Recipe"
import recipeCardStyles from "./RecipeCardStyles";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addItem, removeItem } from "../../redux/slices/favoritesSlice";
import { Link } from "react-router-dom";

const RecipeCard = (recipe: Recipe) => {
    const styles = recipeCardStyles();
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favoriteRecipes.items);
    const isFavorite = favorites.some((item) => item.title === recipe.title)

    const handleFavoriteClick = () => {
        isFavorite ? dispatch(removeItem(recipe)) : dispatch(addItem(recipe));
    }
    
    return (
        <Card className={styles.recipeCard}>
            <CardMedia className={styles.recipeImage}
                image="https://www.allrecipes.com/thmb/8pkbFP258H24axyBlRbGtWS-Vnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24771-basic-mashed-potatoes-mfs318-ed832ab37551471cba0997410217d4c5.jpg"
                title="imag"
            />
            <CardContent className={styles.recipeCardContent}>
                <Link to='/details' state={recipe}>
                    <Typography variant="body2"><b>{recipe.title}</b></Typography>
                </Link>
                <Typography variant="body2">{recipe.duration} minutes</Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={handleFavoriteClick}>
                    { isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
                </IconButton>
            </CardActions>
        </Card>
        
    )
}

export default RecipeCard;
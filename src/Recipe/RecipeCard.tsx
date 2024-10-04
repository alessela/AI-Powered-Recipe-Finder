

import Recipe from "./Recipe"
import recipeCardStyles from "./RecipeCardStyles";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

const RecipeCard = (recipe: Recipe) => {
    const styles = recipeCardStyles();
    const [_recipe, setRecipe] = useState(recipe);

    const handleFavoriteChange = () => setRecipe({..._recipe, favorite: !_recipe.favorite})
    
    return (
        <Card className={styles.recipeCard}>
            <CardMedia className={styles.recipeImage}
                image="https://www.allrecipes.com/thmb/8pkbFP258H24axyBlRbGtWS-Vnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24771-basic-mashed-potatoes-mfs318-ed832ab37551471cba0997410217d4c5.jpg"
                title="imag"
            />
            <CardContent className={styles.recipeCardContent}>
                <Typography variant="h6">{recipe.title}</Typography>
                <Typography variant="body2">{recipe.duration}</Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={handleFavoriteChange}>
                    { _recipe.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default RecipeCard;
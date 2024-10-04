

import Recipe from "./Recipe"
import recipeCardStyles from "./RecipeCardStyles";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const RecipeCard = (recipe: Recipe) => {
    const styles = recipeCardStyles();
    
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
                <FavoriteButton title={recipe.title}
                                duration={recipe.duration}
                                ingredients={recipe.ingredients}
                                instructions={recipe.instructions} />
            </CardActions>
        </Card>
        
    )
}

export default RecipeCard;
import { useLocation } from "react-router-dom";
import Recipe from "../../components/Recipe/Recipe";
import recipeDetailsStyles from "./RecipeDetailsStyle";
import { Typography } from "@mui/material";

const RecipeDetails = () => {
    const location = useLocation()
    const recipe = location.state as Recipe
    const styles = recipeDetailsStyles()

    return (
        <div className={styles.recipeDetailsScreen}>
            <div className={styles.leftSection}>
                <img src="https://www.allrecipes.com/thmb/8pkbFP258H24axyBlRbGtWS-Vnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24771-basic-mashed-potatoes-mfs318-ed832ab37551471cba0997410217d4c5.jpg"
                     className={styles.recipeImage}/>
                <h1>{recipe.title}</h1>
                <Typography variant="body1">{recipe.duration} minutes</Typography>
            </div>
            <div className={styles.rightSection}>
                <p>Ingredients:</p>
                <ul>
                    {
                        recipe.ingredients!.map((ingredient) => (<li>{ingredient}</li>))
                    }
                </ul>
                <p>Instructions:</p>
                <ul>
                    {
                        recipe.instructions!.map((instruction) => (<li>{instruction}</li>))
                    }
                </ul>
                <p>Instructions:</p>
                <ul>
                    {
                        recipe.instructions!.map((instruction) => (<li>{instruction}</li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default RecipeDetails;
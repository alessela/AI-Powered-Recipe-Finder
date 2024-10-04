import homePageStyles from "./HomePageStyles";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeCard from "../../components/Recipe/RecipeCard";
import { useAppSelector } from "../../hooks/hooks";

const HomePage = () => {
    const styles = homePageStyles();
    const favorites = useAppSelector((state) => state.favoriteRecipes.items);

    return (
        <div className={styles.homeScreen}>
            <SearchBar searched=""/>
            <h1>Favorites</h1>
            <div className={styles.recipeList}>
            {
                favorites.map((recipe) => (
                    <RecipeCard key={recipe.title}
                                title={recipe.title}
                                duration={recipe.duration}
                                ingredients={recipe.ingredients}
                                instructions={recipe.instructions}
                    />))
            }
            </div>
            
        </div>
    )
}

export default HomePage;
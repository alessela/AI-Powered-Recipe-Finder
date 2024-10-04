import homeStyles from "./HomeStyles";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeCard from "../../components/Recipe/RecipeCard";
import { useContext, useState } from "react";
import FavoritesContext from "../../FavoritesContext";
import Recipe from "../../components/Recipe/Recipe";

const Home = () => {
    const styles = homeStyles();

    return (
        <div className={styles.homeScreen}>
            <SearchBar searched=""/>
            <h1>Favorites</h1>
            {
                // favorites.map((recipe) => (<RecipeCard key={recipe.title}
                //                                        title={recipe.title}
                //                                        duration={recipe.duration}
                //                                        ingredients={recipe.ingredients}
                //                                        instructions={recipe.instructions}
                //                                        favorite={recipe.favorite}
                //                         />))
            }
        </div>
    )
}

export default Home;
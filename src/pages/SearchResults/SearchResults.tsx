import { useParams } from "react-router-dom";
import searchResultsStyles from "./SearchResultsStyles";
import SearchBar from "../../components/SearchBar/SearchBar";
import Recipe from "../../components/Recipe/Recipe";
import RecipeCard from "../../components/Recipe/RecipeCard";
import generateRecipes from "../../openai/generateRecipes";
import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";

const SearchResults = () => {
    const { searched } = useParams()
    const styles = searchResultsStyles()
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true)
            await generateRecipes(searched!).then(setRecipes);
            setLoading(false)
        }

        fetchRecipes()
    }, [])

    return (
        <div className={styles.searchResultsScreen}>
            <SearchBar searched={searched!}/>
            <h1>Suggested recipes</h1>
            {
                loading ? <OrbitProgress color="green" size="medium" />
                : recipes.map((recipe) => (<RecipeCard key={recipe.title}
                                                       title={recipe.title}
                                                       duration={recipe.duration}
                                                       ingredients={recipe.ingredients}
                                                       instructions={recipe.instructions}
                                        />))
            }
        </div>
    )
}

export default SearchResults;
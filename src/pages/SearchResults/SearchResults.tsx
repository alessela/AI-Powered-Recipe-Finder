import { useParams } from "react-router-dom";
import searchResultsStyles from "./SearchResultsStyles";
import SearchBar from "../../components/SearchBar/SearchBar";
import Recipe from "../../components/Recipe/Recipe";
import RecipeCard from "../../components/Recipe/RecipeCard";
import generateResponse from "../../openai/generateResponse";

const SearchResults = () => {
    const { searched } = useParams()
    
    generateResponse(searched!).then((response) => {
        let generatedResponse = response.data.choices[0].message.content
        console.log(generatedResponse)
    }).catch((error) => {
        console.log('Error calling OpenAI API', error)
    })
    
    const styles = searchResultsStyles()
    const recipes = []

    for (let i = 0; i < 5; ++i) {
        recipes.push(new Recipe(`recipe${i}`, 25, [], []));
    }

    return (
        <div className={styles.searchResultsScreen}>
            <SearchBar searched={searched!}/>
            <h1>Suggested recipes</h1>
            {
                recipes.map((recipe) => (<RecipeCard key={recipe.title}
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
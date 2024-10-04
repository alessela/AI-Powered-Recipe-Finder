import axios from "axios";
import Recipe from "../components/Recipe/Recipe";

const generateRecipes = async (prompt: string) => {
    let full_prompt = `Generate five recipes for a ${prompt} dish.
        The output should be in JSON array and each object should contain a recipe name field named 'title',
        a preparation time integer named 'duration',
        array of ingredients named 'ingredients' and array of step by step instructions named 'instructions'.`;

    const url = 'https://api.openai.com/v1/chat/completions'

    const data = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: "user",
                content: full_prompt
            }
        ],
        max_tokens: 1500
    }

    const config = {
        headers: {
            'Content-type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        }
    }

    let recipes: Recipe[] = []

    await axios.post(url, data, config)
        .then((response) => {
            let generated: string = response.data.choices[0].message.content;
            recipes = JSON.parse(generated) as Recipe[];
        })
        .catch((error) => {
            console.log('Error calling OpenAI API', error)
        });
    
    return recipes
}

export default generateRecipes;
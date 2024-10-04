import axios from "axios";

const generateResponse = async (prompt: string) => {
    let full_prompt = `Generate a recipe for a ${prompt} dish.
        The output should be in JSON and should contain a recipe name field named 'title',
        a preparation time integer named 'duration', description field named 'description',
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
        max_tokens: 100
    }

    const config = {
        headers: {
            'Content-type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        }
    }

    return await axios.post(url, data, config);
}

export default generateResponse;
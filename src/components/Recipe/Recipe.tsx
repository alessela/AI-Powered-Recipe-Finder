class Recipe {
    title: string;
    duration: number;
    ingredients: Array<string>;
    instructions: Array<string>;
    favorite: boolean;

    public constructor(title: string, duration: number,
                       ingredients: Array<string>,
                       instructions: Array<string>,
                       favorite: boolean) {
        
        this.title = title
        this.duration = duration
        this.ingredients = ingredients
        this.instructions = instructions
        this.favorite = favorite
    }
}

export default Recipe;
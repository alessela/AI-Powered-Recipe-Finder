class Recipe {
    title: string;
    duration: number;
    ingredients: Array<string>;
    instructions: Array<string>;

    public constructor(title: string, duration: number,
                       ingredients: Array<string>,
                       instructions: Array<string>) {
        
        this.title = title
        this.duration = duration
        this.ingredients = ingredients
        this.instructions = instructions
    }
}

export default Recipe;
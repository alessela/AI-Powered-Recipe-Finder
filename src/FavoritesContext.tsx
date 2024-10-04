import { createContext, Dispatch, SetStateAction } from "react";
import Recipe from "./components/Recipe/Recipe";

const FavoritesContext = createContext<[Recipe[],
    Dispatch<SetStateAction<Recipe[]>>] | undefined>(undefined);

export default FavoritesContext;
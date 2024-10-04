import { IconButton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { removeItem, addItem } from "../../redux/slices/favoritesSlice";
import Recipe from "../Recipe/Recipe";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteButton = (recipe: Recipe) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favoriteRecipes.items);
    const isFavorite = favorites.some((item) => item.title === recipe.title)

    const handleFavoriteClick = () => {
        isFavorite ? dispatch(removeItem(recipe)) : dispatch(addItem(recipe));
    }

    return (
        <IconButton onClick={handleFavoriteClick}>
            { isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
        </IconButton>
    )
}

export default FavoriteButton;
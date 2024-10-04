import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Recipe from "../../components/Recipe/Recipe";

const initialState: { items: Recipe[] } = { items: []}

const favoriteRecipesSlice = createSlice({
    name: 'favoriteSlices',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Recipe>) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<Recipe>) => {
            state.items = state.items.filter((item) => item.title !== action.payload.title)
        }
    }
})

export const { addItem, removeItem } = favoriteRecipesSlice.actions;
export const favoriteSlicesReducer = favoriteRecipesSlice.reducer;
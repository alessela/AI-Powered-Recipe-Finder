
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchResults from "../pages/SearchResults/SearchResults"
import HomePage from "../pages/HomePage/HomePage";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/search/:searched" element={<SearchResults />} />
            <Route path="/details" element={<RecipeDetails />}/>
        </Routes>
    </BrowserRouter>
)

export default AppRouter;

import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchResults from "../pages/SearchResults/SearchResults"
import HomePage from "../pages/HomePage/HomePage";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/search/:searched" element={<SearchResults />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter;
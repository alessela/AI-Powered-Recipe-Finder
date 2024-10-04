import { Home } from "@mui/icons-material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchResults from "../pages/SearchResults/SearchResults"

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search/:searched" element={<SearchResults />} />
          </Routes>
    </BrowserRouter>
)

export default AppRouter;
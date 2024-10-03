import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import appStyles from './AppStyles';
import SearchResults from './SearchResults/SearchResults';

function App() {
  const styles = appStyles()

  return (
    <div className={styles.App}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search/:searched" element={<SearchResults />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

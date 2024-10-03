import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import appStyles from './AppStyles';

function App() {
  const styles = appStyles()

  return (
    <div className={styles.App}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

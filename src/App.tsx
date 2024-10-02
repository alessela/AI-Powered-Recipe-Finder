import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      return (
        <BrowserRouter>
          <div>
            <h1>AI Recipe Finder</h1>
            <Routes>
              <Route path="/" />
            </Routes>
          </div>
        </BrowserRouter>
      )
    </div>
  );
}

export default App;

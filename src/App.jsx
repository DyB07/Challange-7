/* import './App.css'; */
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Sewa from './pages/sewa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>

            <Route path="/sewa" element={ <Sewa/> } />
            <Route path="/" element={ <Home/> } />

          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

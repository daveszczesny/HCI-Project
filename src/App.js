import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDom from 'react-dom/client';
import Home from './pages/LandingPage/Home.js';
import About from './pages/AboutPage/About.js'

function App()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
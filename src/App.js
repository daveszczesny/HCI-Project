import logo from './logo.svg';
import ReactDom from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.js';
<<<<<<< HEAD
import About from './pages/About/About';
=======
import About from './pages/about/About.js'
>>>>>>> e6eca6603b48fb48c6323af38262a5fe7c8068b9

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
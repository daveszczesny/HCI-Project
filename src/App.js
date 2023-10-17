import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingPage/Home.js';
import About from './pages/AboutPage/About.js'
import FirstLandingPage from './pages/FirstLandingPage/FirstLandingPage.js'
import LoginPage from './pages/LoginPage/Login';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstLandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

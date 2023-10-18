import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingPage/Home.js';
import About from './pages/AboutPage/About.js'
import FirstLandingPage from './pages/FirstLandingPage/FirstLandingPage.js'
import LoginPage from './pages/LoginPage/Login';
import appFirebase from './FirebaseApp';

function App() {

  // appFirebase();

  console.log(process.env.REACT_APP_FIREBASE_APIKEY);

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

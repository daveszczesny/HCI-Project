import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingPage/Home.js';
import About from './pages/AboutPage/About.js'
import FirstLandingPage from './pages/FirstLandingPage/FirstLandingPage.js'
import LoginPage from './pages/LoginPage/Login';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDKilBqBSec1bE7CBpd0hPhOAcGIHStDO0",
  authDomain: "hci-mediguardian.firebaseapp.com",
  projectId: "hci-mediguardian",
  storageBucket: "hci-mediguardian.appspot.com",
  messagingSenderId: "791725451126",
  appId: "1:791725451126:web:fb0bcfe97e0b3b82abfc57"
};

const appFirebase = initializeApp(firebaseConfig);



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

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingPage/Home.js';
import About from './pages/AboutPage/About.js'
import FirstLandingPage from './pages/FirstLandingPage/FirstLandingPage.js'
import LoginPage from './pages/LoginPage/Login';
import appFirebase from './FirebaseApp';
import Dashboard from './pages/Dashboard/Dashboard';
import AddMedication from './pages/AddMedication/AddMedication';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstLandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-medications" element={<AddMedication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

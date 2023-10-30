import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingPage/Home.js';
import About from './pages/AboutPage/About.js'; // Corrected import statements
import Dashboard from './pages/Dashboard/Dashboard.js'; // Import your Dashboard component
import AddMedication from './pages/AddMedication/AddMedication.js'; // Import your AddMedication component
import Calendar from './pages/Calendar/Calendar.js'; // Import your Calendar component
import Stats from './pages/Stats/Stats.js'; // Import your Stats component
import Login from './pages/LoginPage/Login.js';

import appFirebase from './FirebaseApp';
import FirstLandingPage from './pages/FirstLandingPage/FirstLandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstLandingPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-medications" element={<AddMedication />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

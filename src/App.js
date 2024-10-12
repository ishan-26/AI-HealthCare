import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import ProfileCard from './components/ProfileCard';
import AIDiagnosis from './components/AIDiagnosis';
import AIDietPlanner from './components/AIDietPlanner';
import AICalorieCount from './components/AICalorieCount';
import ContactForm from './components/Contact';
import { init } from '@emailjs/browser';

// Replace with your actual User ID
const USER_ID = '3P_DaaCqbzQsiKaCW';
init(USER_ID);

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ProfileCard" element={<ProfileCard />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;

// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ContactUs from './pages/ContactUs';
import Games from "./pages/Games";
import Shop from './pages/Shop';
import Clubs from './pages/Clubs';
import AboutUs from './pages/AboutUs';
import Matches from './pages/Matches';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/book-slot" element={<BookingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Clubs" element={<Clubs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/matches" element={<Matches />} />
        

      </Routes>
    </Router>
  );
}

export default App;

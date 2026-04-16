import React from 'react'
import { Route, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSection from './pages/HomeSection';
import TripsPage from './pages/TripsPage';
import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
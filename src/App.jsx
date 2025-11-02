import React from "react";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Mentorlogin from "./pages/Mentorlogin";
import Studentlogin from "./pages/Studentlogin";
import Mentorsignup from "./pages/Mentorsignup";  
import Studentsignup from "./pages/Studentsignup"; 
import Mentordashboard from "./pages/Mentordashboard";  // 
import Studentdashboard from "./pages/Studentdashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/Mentorlogin" element={<Mentorlogin />} />
      <Route path="/Studentlogin" element={<Studentlogin />} />
      <Route path="/Mentorsignup" element={<Mentorsignup />} />
      <Route path="/Studentsignup" element={<Studentsignup />} />
      <Route path="/Mentordashboard" element={<Mentordashboard />} />
      <Route path="/Studentdashboard" element={<Studentdashboard />} />
    </Routes>
  );
}

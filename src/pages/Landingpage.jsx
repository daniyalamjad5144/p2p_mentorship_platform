import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

export default function Landingpage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-center px-4">
      {/* Logo Section */}
      <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mb-6 border border-gray-300">
        <i className="fa-solid fa-user text-5xl text-blue-600"></i>
      </div>

      {/* Title Section */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Welcome To Peer To Peer Mentorship Program
      </h1>
      <p className="text-gray-600 mb-8">
        Login or Sign Up as{" "}
        <span className="font-medium text-blue-700">Mentor</span> or{" "}
        <span className="font-medium text-green-700">Student</span>
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <button
          onClick={() => navigate("/Mentorlogin")}
          className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          <i className="fa-solid fa-chalkboard-user"></i>
          Mentor
        </button>

        <button
          onClick={() => navigate("/Studentlogin")}
          className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-medium rounded-xl shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          <i className="fa-solid fa-user-graduate"></i>
          Student
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Mentorship Program. All rights reserved.
      </footer>
    </div>
  );
}

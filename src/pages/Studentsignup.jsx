import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

export default function Studentsignup() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-md mb-4">
            <i className="fa-solid fa-user-plus text-4xl text-green-600"></i>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Student Sign Up</h1>
          <p className="text-gray-500 text-sm mt-1">
            Create your student account to start learning.
          </p>
        </div>

        {/* Signup Form */}
        <form className="space-y-5">
          <div className="relative">
            <i className="fa-solid fa-envelope absolute left-3 top-3 text-gray-400"></i>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="relative">
            <i className="fa-solid fa-lock absolute left-3 top-3 text-gray-400"></i>
            <input
              type="password"
              placeholder="Create Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <span
              className="text-green-600 font-medium cursor-pointer hover:underline"
              onClick={() => navigate("/studentlogin")}
            >
              Login
            </span>
          </p>
        </form>

        {/* Back Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray-600 hover:text-green-600 transition"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

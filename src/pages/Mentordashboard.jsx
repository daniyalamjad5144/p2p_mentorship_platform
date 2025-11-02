import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Mentordashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const earningsData = [
    { month: "Jan", earnings: 300 },
    { month: "Feb", earnings: 450 },
    { month: "Mar", earnings: 700 },
    { month: "Apr", earnings: 650 },
    { month: "May", earnings: 900 },
    { month: "Jun", earnings: 1100 },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar Toggle for Mobile */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white shadow-sm border-b">
        <h2 className="text-xl font-bold text-indigo-600">MentorPro</h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-600 text-2xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-xl flex flex-col border-r border-gray-200 transform transition-transform duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-center py-6 border-b">
          <i className="fa-solid fa-chalkboard-user text-3xl text-indigo-600 mr-2"></i>
          <h2 className="text-xl font-extrabold text-gray-700 hidden md:block">
            MentorPro
          </h2>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {[
            { icon: "fa-house", label: "Dashboard" },
            { icon: "fa-users", label: "My Students" },
            { icon: "fa-calendar-check", label: "Sessions" },
            { icon: "fa-sack-dollar", label: "Earnings" },
            { icon: "fa-comments", label: "Messages" },
            { icon: "fa-star", label: "Reviews" },
            { icon: "fa-gear", label: "Settings" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-200"
            >
              <i className={`fa-solid ${item.icon}`}></i>
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="border-t px-4 py-4">
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
        ></div>
      )}

      {/* Main Dashboard */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-1">
              Welcome back,{" "}
              <span className="text-indigo-600">Mentor Daniyal!</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Here’s your teaching performance overview 📊
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <i className="fa-regular fa-bell text-xl text-gray-500 hover:text-gray-700 cursor-pointer"></i>
            <img
              src="https://i.pravatar.cc/40?img=5"
              alt="Profile"
              className="w-9 h-9 rounded-full border border-gray-300"
            />
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {[
            {
              icon: "fa-users",
              title: "Active Students",
              value: "28",
              color: "text-indigo-600 bg-indigo-100",
            },
            {
              icon: "fa-calendar-check",
              title: "Sessions This Week",
              value: "12",
              color: "text-green-600 bg-green-100",
            },
            {
              icon: "fa-sack-dollar",
              title: "Monthly Earnings",
              value: "$2,450",
              color: "text-yellow-600 bg-yellow-100",
            },
            {
              icon: "fa-star",
              title: "Average Rating",
              value: "4.8★",
              color: "text-purple-600 bg-purple-100",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">{card.value}</h2>
                <p className="text-gray-500 text-sm">{card.title}</p>
              </div>
              <div className={`p-3 rounded-full ${card.color}`}>
                <i className={`fa-solid ${card.icon} text-lg sm:text-xl`}></i>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <section className="bg-white rounded-2xl p-5 sm:p-6 shadow-md mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Monthly Earnings Overview
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Track your income trends over time.
          </p>
          <div className="w-full h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
                <YAxis tick={{ fill: "#6b7280" }} />
                <Tooltip />
                <Bar dataKey="earnings" fill="#6366f1" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Students Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Top Performing Students
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((student) => (
              <div
                key={student}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-indigo-500"
              >
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={`https://i.pravatar.cc/60?img=${student + 8}`}
                    alt="Student"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      Student #{student}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      React Track
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Progress: 85%
                  </p>
                  <button className="text-indigo-600 text-xs sm:text-sm font-semibold hover:underline">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

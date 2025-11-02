import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StudentDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const data = [
    { week: "Mon", progress: 20 },
    { week: "Tue", progress: 45 },
    { week: "Wed", progress: 60 },
    { week: "Thu", progress: 75 },
    { week: "Fri", progress: 80 },
    { week: "Sat", progress: 90 },
    { week: "Sun", progress: 100 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-20 h-full bg-white w-64 shadow-xl border-r border-gray-200 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-center py-6 border-b">
          <i className="fa-solid fa-user-graduate text-3xl text-blue-600 mr-2"></i>
          <h2 className="text-xl font-extrabold text-gray-700">StudentHub</h2>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {[
            { icon: "fa-house", label: "Dashboard" },
            { icon: "fa-book-open", label: "My Courses" },
            { icon: "fa-calendar-days", label: "Schedule" },
            { icon: "fa-envelope", label: "Messages" },
            { icon: "fa-chart-line", label: "Progress" },
            { icon: "fa-gear", label: "Settings" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
            >
              <i className={`fa-solid ${item.icon}`}></i>
              {item.label}
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
          className="fixed inset-0 bg-black opacity-40 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center justify-between md:block">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-1">
                Welcome back, <span className="text-blue-600">Daniyal!</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                Here’s what’s happening with your learning today 📚
              </p>
            </div>

            {/* Mobile Sidebar Toggle */}
            <button
              className="md:hidden text-gray-700 text-2xl"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <i className="fa-regular fa-bell text-xl text-gray-500 hover:text-gray-700 cursor-pointer"></i>
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            {
              icon: "fa-book",
              title: "Active Courses",
              value: "05",
              color: "text-blue-600 bg-blue-100",
            },
            {
              icon: "fa-graduation-cap",
              title: "Lessons Completed",
              value: "42",
              color: "text-green-600 bg-green-100",
            },
            {
              icon: "fa-clock",
              title: "Upcoming Sessions",
              value: "02",
              color: "text-yellow-600 bg-yellow-100",
            },
            {
              icon: "fa-star",
              title: "Performance Score",
              value: "89%",
              color: "text-purple-600 bg-purple-100",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">{card.value}</h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  {card.title}
                </p>
              </div>
              <div className={`p-3 rounded-full ${card.color}`}>
                <i className={`fa-solid ${card.icon} text-lg sm:text-xl`}></i>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3].map((course) => (
              <div
                key={course}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    React Fundamentals {course}
                  </h3>
                  <i className="fa-solid fa-ellipsis-vertical text-gray-400 hover:text-gray-600 cursor-pointer"></i>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Master the basics of React including components, props, and
                  hooks with real-world projects.
                </p>
                <div className="flex justify-between items-center">
                  <button className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                    Continue
                  </button>
                  <span className="text-gray-500 text-xs sm:text-sm">
                    60% completed 🔥
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Progress Graph */}
        <section className="mt-10 bg-white rounded-2xl p-5 sm:p-6 shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Learning Progress
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-6">
            Track your weekly learning activity and performance growth.
          </p>
          <div className="w-full h-60 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <defs>
                  <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="week" tick={{ fill: "#6b7280" }} />
                <YAxis tick={{ fill: "#6b7280" }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="progress"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6" }}
                  activeDot={{ r: 8 }}
                  fill="url(#colorProgress)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
}

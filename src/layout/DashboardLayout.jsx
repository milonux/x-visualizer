import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-bold">📊 My Dashboard</div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold underline"
                : "hover:text-blue-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold underline"
                : "hover:text-blue-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/plot"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold underline"
                : "hover:text-blue-300"
            }
          >
            Plot
          </NavLink>
        </div>
      </nav>

      {/* Main Content Layout */}
      <div className="flex min-h-screen">
        {/* Sidebar placeholder */}
        <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
          <p className="text-gray-600">Sidebar content here</p>
        </aside>

        {/* Main Outlet */}
        <main className="flex-1 px-7 py-7">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;

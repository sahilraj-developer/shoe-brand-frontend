import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import {
  HomeIcon,
  UsersIcon,
  ShoppingCartIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import AdminLayout from "../../components/AdminLayout";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const salesData = [
    { name: "Jan", sales: 120, profit: 80 },
    { name: "Feb", sales: 200, profit: 130 },
    { name: "Mar", sales: 180, profit: 100 },
    { name: "Apr", sales: 300, profit: 210 },
    { name: "May", sales: 250, profit: 190 },
    { name: "Jun", sales: 400, profit: 290 },
  ];

  const orderTrends = [
    { name: "Completed", value: 500 },
    { name: "Pending", value: 150 },
    { name: "Cancelled", value: 80 },
  ];

  const COLORS = ["#10B981", "#FBBF24", "#EF4444"];

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <AdminLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        <div className="flex-1 p-6 overflow-auto">
          {/* Navbar */}
          <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <button
              className="md:hidden text-gray-600"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost">Admin</div>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Profile</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="card bg-primary text-white p-6 shadow-lg">Total Users: 1,245</div>
            <div className="card bg-secondary text-white p-6 shadow-lg">Total Orders: 500</div>
            <div className="card bg-accent text-white p-6 shadow-lg">Revenue: $12,500</div>
            <div className="card bg-info text-white p-6 shadow-lg">Profit: $8,200</div>
            <div className="card bg-success text-white p-6 shadow-lg">Sales Growth: +15%</div>
          </div>

          {/* Sales & Profit Graph */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-4">Sales Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#4F46E5" barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-4">Profit Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Order Trends Chart */}
          <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-bold mb-4">Order Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={orderTrends} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                  {orderTrends.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminDashboard;

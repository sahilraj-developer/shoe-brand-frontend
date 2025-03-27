import React from "react";

const AdminNavbar = ({ toggleSidebar }) => {
    return (
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
            <button onClick={toggleSidebar} className="text-gray-700 text-lg">☰</button>
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </div>
    );
};

export default AdminNavbar;

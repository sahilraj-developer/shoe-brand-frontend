import React from "react";
import { HomeIcon, UsersIcon, ShoppingCartIcon, CogIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`bg-gray-800 text-white h-screen transition-all duration-300 ${isOpen ? "w-64" : "w-16"} flex flex-col`}>
            {/* Toggle Button */}
            <button className="p-3 focus:outline-none" onClick={toggleSidebar}>
                {isOpen ? "✖" : "☰"}
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-2 mt-5">
                <a href="#" className="flex items-center space-x-2 p-3 hover:bg-gray-700">
                    <HomeIcon className="w-5 h-5" />
                    {isOpen && <span>Dashboard</span>}
                </a>
                <a href="#" className="flex items-center space-x-2 p-3 hover:bg-gray-700">
                    <UsersIcon className="w-5 h-5" />
                    {isOpen && <span>Users</span>}
                </a>
                <a href="#" className="flex items-center space-x-2 p-3 hover:bg-gray-700">
                    <ShoppingCartIcon className="w-5 h-5" />
                    {isOpen && <span>Orders</span>}
                </a>
                <a href="#" className="flex items-center space-x-2 p-3 hover:bg-gray-700">
                    <CogIcon className="w-5 h-5" />
                    {isOpen && <span>Settings</span>}
                </a>
            </nav>

            {/* Logout Button */}
            <div className="mt-auto p-3 flex items-center space-x-2 hover:bg-red-600 cursor-pointer">
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                {isOpen && <span>Logout</span>}
            </div>
        </div>
    );
};

export default AdminSidebar;

import React, { useState } from "react";
import Sidebar from "../components/AdminSidebar";
import Navbar from "../components/AdminNavbar";

const AdminLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            
            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden transition-all duration-300">
                {/* Navbar */}
                {/* <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} /> */}
                
                {/* Scrollable Content */}
                <main className="p-4 bg-gray-100 flex-1 overflow-auto h-full">{children}</main>
            </div>
        </div>
    );
};

export default AdminLayout;

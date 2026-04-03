import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-secondary/20">
      <AdminNavbar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex">
        <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 bg-secondary/30 min-h-[calc(100vh-57px)] w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

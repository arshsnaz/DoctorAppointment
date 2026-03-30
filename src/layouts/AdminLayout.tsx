import { Outlet } from "react-router-dom";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen">
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 bg-secondary/30 min-h-[calc(100vh-57px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

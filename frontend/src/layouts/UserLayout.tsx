import { Outlet } from "react-router-dom";
import UserNavbar from "@/components/frontend/UserNavbar";
import Footer from "@/components/frontend/Footer";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <UserNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;

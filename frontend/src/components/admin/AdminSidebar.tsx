import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, UserPlus, Users, Stethoscope, User } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

const AdminSidebar = () => {
  const { isAdmin, isDoctor } = useAppContext();
  const location = useLocation();

  const adminLinks = [
    { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/appointments", label: "Appointments", icon: Calendar },
    { to: "/admin/add-doctor", label: "Add Doctor", icon: UserPlus },
    { to: "/admin/doctors", label: "Doctors List", icon: Users },
  ];

  const doctorLinks = [
    { to: "/doctor/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/doctor/appointments", label: "Appointments", icon: Calendar },
    { to: "/doctor/profile", label: "Profile", icon: User },
  ];

  const links = isAdmin ? adminLinks : doctorLinks;

  return (
    <div className="w-[220px] min-h-[calc(100vh-57px)] border-r border-border bg-background pt-6">
      <ul className="flex flex-col gap-1 px-3">
        {links.map((link) => {
          const active = location.pathname === link.to;
          return (
            <li key={link.to}>
              <RouterNavLink
                to={link.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active ? "bg-primary/10 text-primary border-r-4 border-primary" : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </RouterNavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminSidebar;

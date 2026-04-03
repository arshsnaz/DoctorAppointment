import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, UserPlus, Users, User } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

const AdminSidebar = ({ open, onClose }: AdminSidebarProps) => {
  const { isAdmin } = useAppContext();
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
  const panel = (
    <div className="h-full min-h-[calc(100vh-57px)] border-r border-border bg-background pt-6">
      <div className="flex justify-end px-4 pb-4 md:hidden">
        <button onClick={onClose} className="text-sm font-medium text-muted-foreground">
          Close
        </button>
      </div>
      <ul className="flex flex-col gap-1 px-3">
        {links.map((link) => {
          const active = location.pathname === link.to;
          return (
            <li key={link.to}>
              <RouterNavLink
                to={link.to}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  active ? "border-r-4 border-primary bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </RouterNavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <>
      <aside className="hidden w-[220px] shrink-0 md:block">{panel}</aside>
      <div className={`fixed inset-0 z-40 transition ${open ? "pointer-events-auto" : "pointer-events-none"} md:hidden`}>
        <button
          aria-label="Close sidebar backdrop"
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={onClose}
        />
        <aside className={`absolute left-0 top-0 h-full w-[280px] max-w-[85vw] bg-background shadow-2xl transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}>
          {panel}
        </aside>
      </div>
    </>
  );
};

export default AdminSidebar;

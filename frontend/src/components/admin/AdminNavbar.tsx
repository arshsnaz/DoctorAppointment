import { Menu } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";

interface AdminNavbarProps {
  onMenuClick: () => void;
}

const AdminNavbar = ({ onMenuClick }: AdminNavbarProps) => {
  const { setIsAdmin, setIsDoctor } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdmin(false);
    setIsDoctor(false);
    navigate("/admin-login");
  };

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-border bg-background px-4 py-3 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button onClick={onMenuClick} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden">
          <Menu className="h-5 w-5" />
        </button>
        <span className="text-xl font-bold text-primary">Prescripto</span>
        <span className="hidden rounded-full border border-border px-3 py-0.5 text-xs text-muted-foreground sm:inline-flex">Admin</span>
      </div>
      <button
        onClick={handleLogout}
        className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:px-6"
      >
        Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;

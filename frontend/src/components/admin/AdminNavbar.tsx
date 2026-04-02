import { useAppContext } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const { setIsAdmin, setIsDoctor } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdmin(false);
    setIsDoctor(false);
    navigate("/admin-login");
  };

  return (
    <nav className="flex items-center justify-between py-3 px-6 border-b border-border bg-background">
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold text-primary">Prescripto</span>
        <span className="text-xs border border-border rounded-full px-3 py-0.5 text-muted-foreground">Admin</span>
      </div>
      <button
        onClick={handleLogout}
        className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;

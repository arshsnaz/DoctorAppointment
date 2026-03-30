import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const UserNavbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-10 border-b border-border">
      <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
        <img src="\dist\assets\doctor-logo.png" alt="Logo" style={{width:'32px',height:'32px'}} />
        Prescripto
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
        <li><Link to="/" className="hover:text-primary transition-colors">HOME</Link></li>
        <li><Link to="/doctors" className="hover:text-primary transition-colors">ALL DOCTORS</Link></li>
        <li><Link to="/about" className="hover:text-primary transition-colors">ABOUT</Link></li>
        <li><Link to="/contact" className="hover:text-primary transition-colors">CONTACT</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">J</div>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-20">
              <div className="bg-card border border-border rounded-lg shadow-lg p-3 min-w-[150px] flex flex-col gap-2">
                <button onClick={() => navigate("/my-profile")} className="text-sm hover:text-primary text-left">My Profile</button>
                <button onClick={() => navigate("/my-appointments")} className="text-sm hover:text-primary text-left">My Appointments</button>
                <button onClick={() => { setIsLoggedIn(false); navigate("/"); }} className="text-sm hover:text-primary text-left">Logout</button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity hidden md:block"
          >
            Create account
          </button>
        )}

        {/* Mobile menu */}
        <button className="md:hidden" onClick={() => setShowMenu(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile sidebar */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex justify-end p-4">
            <button onClick={() => setShowMenu(false)}><X className="w-6 h-6" /></button>
          </div>
          <ul className="flex flex-col items-center gap-6 mt-12 text-lg font-medium">
            <li><Link to="/" onClick={() => setShowMenu(false)}>HOME</Link></li>
            <li><Link to="/doctors" onClick={() => setShowMenu(false)}>ALL DOCTORS</Link></li>
            <li><Link to="/about" onClick={() => setShowMenu(false)}>ABOUT</Link></li>
            <li><Link to="/contact" onClick={() => setShowMenu(false)}>CONTACT</Link></li>
            {!isLoggedIn && (
              <li>
                <button onClick={() => { setShowMenu(false); navigate("/login"); }} className="bg-primary text-primary-foreground px-8 py-2.5 rounded-full">
                  Create account
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;

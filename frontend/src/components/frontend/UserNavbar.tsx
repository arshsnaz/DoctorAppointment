import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import doctorLogo from "@/assets/doctor-logo.png";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const mobileLinks = [
  { to: "/", label: "HOME" },
  { to: "/doctors", label: "ALL DOCTORS" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
];

const UserNavbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-border bg-background/95 px-4 py-4 backdrop-blur-sm sm:px-6 md:px-10">
      <Link to="/" className="flex min-w-0 items-center gap-2 text-xl font-bold text-primary sm:text-2xl">
        <img src={doctorLogo} alt="Prescripto logo" className="h-7 w-7 shrink-0 rounded-md border border-primary/20 bg-white object-contain p-1" />
        Prescripto
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
        <li><Link to="/" className="hover:text-primary transition-colors">HOME</Link></li>
        <li><Link to="/doctors" className="hover:text-primary transition-colors">ALL DOCTORS</Link></li>
        <li><Link to="/about" className="hover:text-primary transition-colors">ABOUT</Link></li>
        <li><Link to="/contact" className="hover:text-primary transition-colors">CONTACT</Link></li>
      </ul>

      <div className="flex items-center gap-3 sm:gap-4">
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
        <button
          type="button"
          aria-label={showMenu ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={showMenu}
          onClick={() => setShowMenu((value) => !value)}
          className={`inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold shadow-sm transition-all active:scale-95 md:hidden ${
            showMenu
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
          }`}
        >
          {showMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="hidden sm:inline">Menu</span>
        </button>
      </div>

      <Sheet open={showMenu} onOpenChange={setShowMenu}>
        <SheetContent side="right" className="w-[min(88vw,24rem)] overflow-y-auto border-border p-0">
          <div className="flex h-full flex-col">
            <SheetHeader className="border-b border-border px-6 py-6 text-left">
              <SheetTitle className="text-2xl font-bold text-primary">Prescripto</SheetTitle>
              <SheetDescription className="text-sm leading-6 text-muted-foreground">
                Browse doctors, manage your appointments, and sign in on the go.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 px-4 py-5">
              <div className="rounded-3xl bg-slate-50 p-3 shadow-sm">
                <div className="grid gap-2">
                  {mobileLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setShowMenu(false)}
                      className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 text-sm font-semibold tracking-wide text-foreground transition-colors hover:border-primary/20 hover:bg-white hover:text-primary"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-muted-foreground">Navigate</span>
                    </Link>
                  ))}
                </div>
              </div>

              {!isLoggedIn ? (
                <div className="mt-6 rounded-3xl border border-primary/10 bg-primary/5 p-5">
                  <p className="text-sm font-medium text-foreground">Need an account?</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">Create one to book an appointment and manage your visits.</p>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/login");
                    }}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
                  >
                    Create account
                  </button>
                </div>
              ) : (
                <div className="mt-6 rounded-3xl border border-border bg-card p-5">
                  <p className="text-sm font-medium text-foreground">Account actions</p>
                  <div className="mt-4 grid gap-2">
                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/my-profile");
                      }}
                      className="rounded-2xl border border-border px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/my-appointments");
                      }}
                      className="rounded-2xl border border-border px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      My Appointments
                    </button>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        setShowMenu(false);
                        navigate("/");
                      }}
                      className="rounded-2xl border border-destructive/20 px-4 py-3 text-left text-sm font-medium text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default UserNavbar;

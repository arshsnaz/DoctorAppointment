import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";

const AdminLogin = () => {
  const [state, setState] = useState<"Admin" | "Doctor">("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAdmin, setIsDoctor } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "Admin") {
      setIsAdmin(true);
      setIsDoctor(false);
      navigate("/admin/dashboard");
    } else {
      setIsDoctor(true);
      setIsAdmin(false);
      navigate("/doctor/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-1">
          <span className="text-primary">{state}</span> Login
        </h2>
        <p className="text-sm text-muted-foreground mb-6">Please login to access the {state.toLowerCase()} panel</p>

        <div className="mb-4">
          <label className="text-sm text-foreground font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background outline-ring"
            placeholder={state === "Admin" ? "admin@prescripto.com" : "doctor@prescripto.com"}
          />
        </div>
        <div className="mb-6">
          <label className="text-sm text-foreground font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background outline-ring"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          Login
        </button>

        <p className="text-sm text-muted-foreground text-center mt-4">
          {state === "Admin" ? "Doctor" : "Admin"} Login?{" "}
          <button type="button" onClick={() => setState(state === "Admin" ? "Doctor" : "Admin")} className="text-primary underline">
            Click here
          </button>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;

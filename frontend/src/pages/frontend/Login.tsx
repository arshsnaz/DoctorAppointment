import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";

const Login = () => {
  const [state, setState] = useState<"Sign Up" | "Login">("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");
  const { setIsLoggedIn } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup/Login form submitted", { state, name, email, password, phone, address, gender, birthday });
    setError("");
    if (state === "Sign Up") {
      // Signup request
      try {
        const res = await fetch("http://localhost:8081/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            password,
            phone,
            address,
            gender,
            birthday
          })
        });
        if (!res.ok) {
          const msg = await res.text();
          setError(msg);
          return;
        }
        setState("Login");
      } catch (err) {
        setError("Signup failed");
      }
    } else {
      // Login request
      try {
        const res = await fetch("http://localhost:8081/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password
          })
        });
        if (!res.ok) {
          setError("Invalid credentials");
          return;
        }
        setIsLoggedIn(true);
        navigate("/");
      } catch (err) {
        setError("Login failed");
      }
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10 sm:py-12">
      <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-foreground text-left">{state === "Sign Up" ? "Create Account" : "Login"}</h2>
        <p className="text-sm text-muted-foreground text-left">Please {state === "Sign Up" ? "sign up" : "log in"} to book appointment</p>

        {state === "Sign Up" && (
          <>
            <div>
              <label className="text-sm text-foreground font-medium text-left block">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background outline-ring focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="text-sm text-foreground font-medium text-left block">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background outline-ring focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="text-sm text-foreground font-medium text-left block">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background outline-ring focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="text-sm text-foreground font-medium text-left block">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background outline-ring focus:border-primary"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-foreground font-medium text-left block">Birthday</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background outline-ring focus:border-primary"
                required
              />
            </div>
          </>
        )}
        <div>
          <label className="text-sm text-foreground font-medium text-left block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background outline-ring focus:border-primary"
            required
          />
        </div>
        <div>
          <label className="text-sm text-foreground font-medium text-left block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background outline-ring focus:border-primary"
            required
          />
        </div>


        {error && <div className="text-red-500 text-sm text-center">{error}</div>}

        <button type="submit" className="bg-primary text-primary-foreground py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity mt-2">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p className="text-sm text-muted-foreground text-left">
            Already have an account?{" "}
            <button type="button" onClick={() => setState("Login")} className="text-primary underline">Login here</button>
          </p>
        ) : (
          <p className="text-sm text-muted-foreground text-left">
            Create a new account?{" "}
            <button type="button" onClick={() => setState("Sign Up")} className="text-primary underline">Click here</button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

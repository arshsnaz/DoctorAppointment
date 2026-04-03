import { useNavigate } from "react-router-dom";
import doctorLogo from "@/assets/doctor-logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mx-4 mt-6 overflow-hidden rounded-2xl bg-primary sm:mx-6 md:mx-10">
      <div className="grid items-center gap-8 px-6 py-8 sm:px-8 md:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:py-12">
        <div className="text-primary-foreground">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <img src={doctorLogo} alt="Prescripto logo" className="h-16 w-16 shrink-0 rounded-2xl bg-white p-2 shadow-lg object-contain sm:h-20 sm:w-20" />
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.3em] text-primary-foreground/70 sm:text-sm">Our Logo</p>
              <h2 className="text-2xl font-semibold sm:text-3xl">Prescripto</h2>
            </div>
          </div>
          <h1 className="mb-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Book Appointment With Trusted Doctors
          </h1>
          <p className="mb-8 max-w-md text-sm text-primary-foreground/80 sm:text-base">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
          <button
            onClick={() => navigate("/doctors")}
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-105 sm:px-8"
          >
            Book appointment →
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <span className="text-xl font-bold text-primary-foreground/90 sm:text-2xl">Prescripto</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
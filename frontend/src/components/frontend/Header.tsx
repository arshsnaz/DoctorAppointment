import { useNavigate } from "react-router-dom";
import doctorLogo from "@/assets/doctor-logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-primary rounded-xl overflow-hidden mx-4 md:mx-10 mt-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 p-8 md:p-14 text-primary-foreground">
          <div className="mb-6 flex items-center gap-4">
            <img
              src={doctorLogo}
              alt="Prescripto logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-2xl bg-white p-2 shadow-lg"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-1">Our Logo</p>
              <h2 className="text-2xl md:text-3xl font-semibold">Prescripto</h2>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Book Appointment <br /> With Trusted Doctors
          </h1>
          <p className="text-primary-foreground/80 text-sm md:text-base mb-8 max-w-md">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
          <button
            onClick={() => navigate("/doctors")}
            className="bg-background text-foreground px-8 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Book appointment →
          </button>
        </div>

        <div className="mb-4 md:mb-0 md:ml-8">
          <span className="text-xl md:text-2xl font-bold text-primary-foreground">Prescripto</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
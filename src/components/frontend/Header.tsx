
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-primary rounded-xl overflow-hidden mx-4 md:mx-10 mt-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 p-8 md:p-14 text-primary-foreground">
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
        <div className="hidden md:block w-[400px] h-[300px] overflow-hidden flex items-center justify-center">
          <img src="\dist\assets\doctor-logo.png" alt="Doctors Logo" className="object-contain" width={64} height={64} />
        </div>
      </div>
    </div>
  );
};

export default Header;

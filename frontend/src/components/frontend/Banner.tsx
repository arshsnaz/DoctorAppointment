import { useNavigate } from "react-router-dom";
import appointmentBanner from "@/assets/appointment-banner.jpg";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-4 md:mx-10 mb-16 bg-primary rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 p-8 md:p-14 text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Book Appointment <br /> With 100+ Trusted Doctors</h2>
          <button
            onClick={() => navigate("/login")}
            className="bg-background text-foreground px-8 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform mt-4"
          >
            Create account
          </button>
        </div>
        <div className="hidden md:block w-[350px] h-[200px] overflow-hidden">
          <img src={appointmentBanner} alt="Book appointment" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { useNavigate } from "react-router-dom";
import appointmentBanner from "@/assets/appointment-banner.jpg";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-4 mb-16 overflow-hidden rounded-2xl bg-primary sm:mx-6 md:mx-10">
      <div className="grid items-center gap-8 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-10">
        <div className="text-primary-foreground">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Book Appointment With 100+ Trusted Doctors</h2>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-105 sm:px-8"
          >
            Create account
          </button>
        </div>
        <div className="hidden overflow-hidden md:block md:h-[200px] md:w-[350px]">
          <img src={appointmentBanner} alt="Book appointment" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

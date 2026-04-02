import { useNavigate } from "react-router-dom";
import { specialities } from "@/data/mockData";
import { Stethoscope, Baby, Brain, Heart, Eye, Pill } from "lucide-react";

const icons = [Stethoscope, Heart, Eye, Baby, Brain, Pill];

const SpecialityMenu = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Find by Speciality</h2>
        <p className="text-muted-foreground mt-3 text-sm max-w-lg mx-auto">
          Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap max-w-4xl mx-auto">
        {specialities.map((spec, i) => {
          const Icon = icons[i % icons.length];
          return (
            <button
              key={spec}
              onClick={() => navigate(`/doctors?speciality=${spec}`)}
              className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group cursor-pointer w-[120px]"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs text-foreground text-center font-medium">{spec}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SpecialityMenu;

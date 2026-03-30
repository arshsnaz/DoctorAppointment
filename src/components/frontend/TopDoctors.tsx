import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";

const TopDoctors = () => {
  const { doctors } = useAppContext();
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Top Doctors to Book</h2>
        <p className="text-muted-foreground mt-3 text-sm max-w-lg mx-auto">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
        {doctors.slice(0, 5).map((doc) => (
          <div
            key={doc._id}
            onClick={() => navigate(`/appointment/${doc._id}`)}
            className="border border-border rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="bg-primary/5 p-4">
              <img src={doc.image} alt={doc.name} className="w-full h-40 object-cover rounded-lg" loading="lazy" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span className={`w-2 h-2 rounded-full ${doc.available ? "bg-success" : "bg-muted-foreground"}`}></span>
                <span className={`text-xs ${doc.available ? "text-success" : "text-muted-foreground"}`}>
                  {doc.available ? "Available" : "Not Available"}
                </span>
              </div>
              <h3 className="font-semibold text-foreground text-sm">{doc.name}</h3>
              <p className="text-xs text-muted-foreground">{doc.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/doctors")}
          className="border border-border px-10 py-3 rounded-full text-sm text-foreground font-medium hover:bg-secondary transition-colors"
        >
          More
        </button>
      </div>
    </section>
  );
};

export default TopDoctors;

import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";
import { Doctor } from "@/data/mockData";

interface RelatedDoctorsProps {
  docId: string;
  speciality: string;
}

const RelatedDoctors = ({ docId, speciality }: RelatedDoctorsProps) => {
  const { doctors } = useAppContext();
  const navigate = useNavigate();

  const related = doctors.filter((d) => d.speciality === speciality && d._id !== docId).slice(0, 5);

  if (related.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold text-foreground text-center mb-8">Related Doctors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {related.map((doc) => (
          <div
            key={doc._id}
            onClick={() => { navigate(`/appointment/${doc._id}`); window.scrollTo(0, 0); }}
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
    </div>
  );
};

export default RelatedDoctors;

import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";
import { specialities } from "@/data/mockData";
import { useState } from "react";

const Doctors = () => {
  const { doctors } = useAppContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filterSpec = searchParams.get("speciality") || "";
  const [showFilter, setShowFilter] = useState(false);

  const filtered = filterSpec ? doctors.filter((d) => d.speciality === filterSpec) : doctors;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-foreground font-medium text-sm mb-6">Browse through the doctors specialist.</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter sidebar */}
        <div className="md:w-52 shrink-0">
          <button onClick={() => setShowFilter(!showFilter)} className="md:hidden border border-border px-4 py-2 rounded text-sm mb-4">
            Filters
          </button>
          <div className={`flex-col gap-2 ${showFilter ? "flex" : "hidden md:flex"}`}>
            {specialities.map((spec) => (
              <button
                key={spec}
                onClick={() => navigate(filterSpec === spec ? "/doctors" : `/doctors?speciality=${spec}`)}
                className={`text-left px-4 py-2 rounded-lg text-sm border transition-colors ${
                  filterSpec === spec ? "bg-primary/10 text-primary border-primary/30" : "border-border text-muted-foreground hover:bg-secondary"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor grid */}
        <div className="flex-1 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((doc) => (
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
      </div>
    </div>
  );
};

export default Doctors;

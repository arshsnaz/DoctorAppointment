import { useAppContext } from "@/context/AppContext";

const DoctorsList = () => {
  const { doctors } = useAppContext();

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl font-bold text-foreground mb-6">All Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {doctors.map((doc) => (
          <div key={doc._id} className="border border-border rounded-xl overflow-hidden bg-card">
            <div className="bg-primary/5 p-4">
              <img src={doc.image} alt={doc.name} className="w-full h-40 object-cover rounded-lg" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground">{doc.name}</h3>
              <p className="text-xs text-muted-foreground">{doc.speciality}</p>
              <div className="flex items-center gap-2 mt-3">
                <input type="checkbox" checked={doc.available} readOnly className="accent-primary" />
                <span className="text-xs text-muted-foreground">Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;

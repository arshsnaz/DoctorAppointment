import { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { doctors } from "@/data/mockData";

const DoctorProfile = () => {
  const { currencySymbol } = useAppContext();
  const [doc, setDoc] = useState(doctors[0]);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-xl font-bold text-foreground mb-6">Doctor Profile</h1>
      <div className="border border-border rounded-xl bg-card overflow-hidden">
        <div className="bg-primary/5 p-6 flex items-center gap-4">
          <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-xl object-cover" />
          <div>
            <h2 className="text-xl font-bold text-foreground">{doc.name}</h2>
            <p className="text-sm text-muted-foreground">{doc.degree} - {doc.speciality}</p>
            <span className="text-xs border border-border px-2 py-0.5 rounded-full text-muted-foreground mt-1 inline-block">{doc.experience}</span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">About</label>
            {isEdit ? (
              <textarea
                value={doc.about}
                onChange={(e) => setDoc({ ...doc, about: e.target.value })}
                rows={3}
                className="w-full border border-border rounded-lg px-4 py-2 mt-1 text-sm bg-background resize-none"
              />
            ) : (
              <p className="text-sm text-muted-foreground mt-1">{doc.about}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Appointment Fee</label>
            {isEdit ? (
              <input
                type="number"
                value={doc.fees}
                onChange={(e) => setDoc({ ...doc, fees: Number(e.target.value) })}
                className="w-full border border-border rounded-lg px-4 py-2 mt-1 text-sm bg-background"
              />
            ) : (
              <p className="text-sm text-muted-foreground mt-1">{currencySymbol}{doc.fees}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Address</label>
            {isEdit ? (
              <div className="flex flex-col gap-2 mt-1">
                <input
                  value={doc.address.line1}
                  onChange={(e) => setDoc({ ...doc, address: { ...doc.address, line1: e.target.value } })}
                  className="w-full border border-border rounded-lg px-4 py-2 text-sm bg-background"
                />
                <input
                  value={doc.address.line2}
                  onChange={(e) => setDoc({ ...doc, address: { ...doc.address, line2: e.target.value } })}
                  className="w-full border border-border rounded-lg px-4 py-2 text-sm bg-background"
                />
              </div>
            ) : (
              <p className="text-sm text-muted-foreground mt-1">{doc.address.line1}, {doc.address.line2}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" checked={doc.available} onChange={(e) => setDoc({ ...doc, available: e.target.checked })} disabled={!isEdit} className="accent-primary" />
            <span className="text-sm text-foreground">Available</span>
          </div>

          <div className="pt-2">
            {isEdit ? (
              <button onClick={() => setIsEdit(false)} className="bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Save
              </button>
            ) : (
              <button onClick={() => setIsEdit(true)} className="border border-primary text-primary px-8 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;

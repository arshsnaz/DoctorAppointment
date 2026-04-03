import { useState } from "react";
import { specialities } from "@/data/mockData";
import { toast } from "sonner";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [speciality, setSpeciality] = useState(specialities[0]);
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Doctor added successfully (mock)");
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl font-bold text-foreground mb-6">Add Doctor</h1>
      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-5 sm:p-6 max-w-3xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-muted-foreground text-sm">
            Upload
          </div>
          <p className="text-sm text-muted-foreground">Upload doctor<br />picture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-foreground font-medium">Doctor Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background" placeholder="Name" />
          </div>
          <div>
            <label className="text-sm text-foreground font-medium">Doctor Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background" placeholder="Email" />
          </div>
          <div>
            <label className="text-sm text-foreground font-medium">Doctor Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background" placeholder="Password" />
          </div>
          <div>
            <label className="text-sm text-foreground font-medium">Experience</label>
            <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background">
              {Array.from({ length: 15 }, (_, i) => `${i + 1} Year${i > 0 ? "s" : ""}`).map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm text-foreground font-medium">Fees</label>
            <input value={fees} onChange={(e) => setFees(e.target.value)} type="number" className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background" placeholder="Fees" />
          </div>
          <div>
            <label className="text-sm text-foreground font-medium">Speciality</label>
            <select value={speciality} onChange={(e) => setSpeciality(e.target.value)} className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background">
              {specialities.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm text-foreground font-medium">Education</label>
            <input value={degree} onChange={(e) => setDegree(e.target.value)} className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background" placeholder="Education" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-foreground font-medium">Address Line 1</label>
            <input value={address1} onChange={(e) => setAddress1(e.target.value)} className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background" placeholder="Address 1" />
          </div>
          <div>
            <label className="text-sm text-foreground font-medium">Address Line 2</label>
            <input value={address2} onChange={(e) => setAddress2(e.target.value)} className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background" placeholder="Address 2" />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm text-foreground font-medium">About Doctor</label>
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} rows={4} className="w-full border border-border rounded-lg px-4 py-2.5 mt-1 text-sm bg-background resize-none" placeholder="Write about doctor" />
        </div>

        <button type="submit" className="bg-primary text-primary-foreground px-10 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;

import { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { Pencil } from "lucide-react";

const MyProfile = () => {
  const { userProfile, setUserProfile } = useAppContext();
  const [isEdit, setIsEdit] = useState(false);
  const [profile, setProfile] = useState(userProfile);

  const handleSave = () => {
    setUserProfile(profile);
    setIsEdit(false);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="border border-border rounded-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
            {profile.name.charAt(0)}
          </div>
          {isEdit ? (
            <input
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="text-2xl font-bold bg-transparent border-b border-primary outline-none text-foreground"
            />
          ) : (
            <h1 className="text-2xl font-bold text-foreground">{profile.name}</h1>
          )}
        </div>

        <hr className="border-border mb-6" />

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Contact Information</h3>
            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-20">Email:</span>
                <span className="text-sm text-foreground">{profile.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-20">Phone:</span>
                {isEdit ? (
                  <input
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="text-sm border border-border rounded px-2 py-1 bg-background text-foreground"
                  />
                ) : (
                  <span className="text-sm text-foreground">{profile.phone}</span>
                )}
              </div>
              <div className="flex items-start gap-4">
                <span className="text-sm text-muted-foreground w-20">Address:</span>
                {isEdit ? (
                  <div className="flex flex-col gap-1">
                    <input
                      value={profile.address.line1}
                      onChange={(e) => setProfile({ ...profile, address: { ...profile.address, line1: e.target.value } })}
                      className="text-sm border border-border rounded px-2 py-1 bg-background text-foreground"
                    />
                    <input
                      value={profile.address.line2}
                      onChange={(e) => setProfile({ ...profile, address: { ...profile.address, line2: e.target.value } })}
                      className="text-sm border border-border rounded px-2 py-1 bg-background text-foreground"
                    />
                  </div>
                ) : (
                  <span className="text-sm text-foreground">{profile.address.line1}<br />{profile.address.line2}</span>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Basic Information</h3>
            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-20">Gender:</span>
                {isEdit ? (
                  <select
                    value={profile.gender}
                    onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                    className="text-sm border border-border rounded px-2 py-1 bg-background text-foreground"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                ) : (
                  <span className="text-sm text-foreground">{profile.gender}</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-20">Birthday:</span>
                {isEdit ? (
                  <input
                    type="date"
                    value={profile.dob}
                    onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                    className="text-sm border border-border rounded px-2 py-1 bg-background text-foreground"
                  />
                ) : (
                  <span className="text-sm text-foreground">{profile.dob}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          {isEdit ? (
            <button onClick={handleSave} className="bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Save information
            </button>
          ) : (
            <button onClick={() => setIsEdit(true)} className="border border-primary text-primary px-8 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2">
              <Pencil className="w-4 h-4" /> Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

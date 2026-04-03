
import { useEffect, useState } from "react";

type Appointment = {
  id: number;
  doctor?: {
    image?: string;
    name?: string;
    speciality?: string;
  };
  date?: string;
  time?: string;
  status: string;
};

const MyAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("http://localhost:8081/api/appointments/my", {
          credentials: "include"
        });
        if (!res.ok) {
          setError("Failed to fetch appointments");
          setLoading(false);
          return;
        }
        const data = await res.json();
        setAppointments(data);
      } catch (e) {
        setError("Failed to fetch appointments");
      }
      setLoading(false);
    };
    fetchAppointments();
  }, []);

  const handleCancel = async (id: number) => {
    setError("");
    try {
      const res = await fetch(`http://localhost:8081/api/appointments/cancel/${id}`, {
        method: "POST",
        credentials: "include"
      });
      if (!res.ok) {
        setError("Failed to cancel appointment");
        return;
      }
      setAppointments((prev) => prev.map((a) => a.id === id ? { ...a, status: "CANCELLED" } : a));
    } catch (e) {
      setError("Failed to cancel appointment");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-foreground font-bold text-xl mb-6">My appointments</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : appointments.length === 0 ? (
        <div>No appointments found.</div>
      ) : (
        <div className="flex flex-col gap-4">
          {appointments.map((apt) => (
            <div key={apt.id} className="border border-border rounded-xl p-4 flex flex-col sm:flex-row gap-4">
              <div className="bg-primary/5 rounded-lg p-3 w-full max-w-[160px] flex-shrink-0 sm:w-[120px] sm:max-w-none">
                <img src={apt.doctor?.image || ""} alt={apt.doctor?.name || "Doctor"} className="w-full rounded-lg" loading="lazy" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{apt.doctor?.name}</h3>
                <p className="text-xs text-muted-foreground">{apt.doctor?.speciality}</p>
                <p className="text-sm mt-2">
                  <span className="font-medium text-foreground">Date & Time:</span>{" "}
                  <span className="text-muted-foreground">{apt.date} | {apt.time}</span>
                </p>
                <p className="text-sm mt-2">
                  <span className="font-medium text-foreground">Status:</span>{" "}
                  <span className="text-muted-foreground">{apt.status}</span>
                </p>
                {apt.status !== "CANCELLED" && (
                  <button
                    className="mt-2 border border-destructive text-destructive rounded-lg py-2 px-4 text-sm hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors"
                    onClick={() => handleCancel(apt.id)}
                  >
                    Cancel appointment
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;

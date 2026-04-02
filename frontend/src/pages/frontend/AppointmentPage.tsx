import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import RelatedDoctors from "@/components/frontend/RelatedDoctors";

const AppointmentPage = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, isLoggedIn, userProfile } = useAppContext();
  const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  const doc = doctors.find((d) => d._id === docId);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  ];

  if (!doc) return <div className="text-center py-20 text-muted-foreground">Doctor not found.</div>;

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const handleBook = async () => {
    setError("");
    setSuccess("");
    if (!isLoggedIn) {
      setError("You must be logged in to book an appointment.");
      setTimeout(() => navigate("/login"), 1500);
      return;
    }
    if (!selectedSlot) {
      setError("Please select a time slot.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8081/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          doctorId: doc.id || doc._id,
          date: days[selectedDay].toISOString().slice(0, 10),
          time: selectedSlot
        })
      });
      if (!res.ok) {
        setError("Booking failed");
      } else {
        setSuccess("Appointment booked successfully!");
      }
    } catch (e) {
      setError("Booking failed");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Doctor info */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-primary/5 rounded-xl p-4 w-full md:w-[250px] flex-shrink-0">
          <img src={doc.image} alt={doc.name} className="w-full h-[250px] object-cover rounded-lg" />
        </div>
        <div className="flex-1 border border-border rounded-xl p-6">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            {doc.name} <CheckCircle className="w-5 h-5 text-primary" />
          </h1>
          <p className="text-sm text-muted-foreground mt-1">{doc.degree} - {doc.speciality} <span className="border border-border px-2 py-0.5 rounded-full text-xs ml-1">{doc.experience}</span></p>
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-1">About</h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{doc.about}</p>
          </div>
          <p className="mt-4 text-foreground font-medium">
            Appointment fee: <span className="text-primary">{currencySymbol}{doc.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking slots */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-foreground mb-4">Booking slots</h2>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {days.map((day, i) => (
            <button
              key={i}
              onClick={() => setSelectedDay(i)}
              className={`flex flex-col items-center px-5 py-3 rounded-full min-w-[70px] transition-colors text-sm ${
                selectedDay === i ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-secondary"
              }`}
            >
              <span className="text-xs font-medium">{dayNames[day.getDay()]}</span>
              <span className="text-lg font-bold">{day.getDate()}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap mt-6">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`px-5 py-2 rounded-full text-sm transition-colors ${
                selectedSlot === slot ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-secondary"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        {error && <div className="text-red-500 text-sm text-center mt-4">{error}</div>}
        {success && <div className="text-green-600 text-sm text-center mt-4">{success}</div>}
        <button
          className="bg-primary text-primary-foreground px-12 py-3 rounded-full mt-8 text-sm font-medium hover:opacity-90 transition-opacity"
          onClick={handleBook}
          disabled={loading}
        >
          {loading ? "Booking..." : "Book an appointment"}
        </button>
      </div>

      <RelatedDoctors docId={doc._id} speciality={doc.speciality} />
    </div>
  );
};

export default AppointmentPage;

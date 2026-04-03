import { useAppContext } from "@/context/AppContext";
import { Check, X } from "lucide-react";

const DoctorAppointments = () => {
  const { appointments, setAppointments, currencySymbol } = useAppContext();
  const docAppointments = appointments.filter((a) => a.docId === "doc1");

  const completeAppointment = (id: string) => {
    setAppointments((prev) => prev.map((a) => (a._id === id ? { ...a, isCompleted: true } : a)));
  };

  const cancelAppointment = (id: string) => {
    setAppointments((prev) => prev.map((a) => (a._id === id ? { ...a, cancelled: true } : a)));
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl font-bold text-foreground mb-6">All Appointments</h1>
      <div className="border border-border rounded-xl bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary text-muted-foreground">
                <th className="text-left p-4 font-medium">#</th>
                <th className="text-left p-4 font-medium">Patient</th>
                <th className="text-left p-4 font-medium">Payment</th>
                <th className="text-left p-4 font-medium">Date & Time</th>
                <th className="text-left p-4 font-medium">Fees</th>
                <th className="text-left p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {docAppointments.map((apt, i) => (
                <tr key={apt._id} className="hover:bg-secondary/50">
                  <td className="p-4 text-muted-foreground">{i + 1}</td>
                  <td className="p-4 text-foreground font-medium">{apt.userName}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${apt.payment ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                      {apt.payment ? "Paid" : "Pending"}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">{apt.slotDate.replace(/_/g, "/")} | {apt.slotTime}</td>
                  <td className="p-4 text-foreground">{currencySymbol}{apt.amount}</td>
                  <td className="p-4">
                    {apt.cancelled ? (
                      <span className="text-xs text-destructive">Cancelled</span>
                    ) : apt.isCompleted ? (
                      <span className="text-xs text-success">Completed</span>
                    ) : (
                      <div className="flex gap-2">
                        <button onClick={() => cancelAppointment(apt._id)} className="w-8 h-8 rounded-full border border-destructive text-destructive flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                        <button onClick={() => completeAppointment(apt._id)} className="w-8 h-8 rounded-full border border-success text-success flex items-center justify-center hover:bg-success hover:text-success-foreground transition-colors">
                          <Check className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;

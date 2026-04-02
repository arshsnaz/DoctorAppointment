
import { useAppContext } from "@/context/AppContext";
import { Calendar, DollarSign, Users } from "lucide-react";
import NotificationList from "@/components/ui/NotificationList";

const DoctorDashboard = () => {
  const { appointments, currencySymbol } = useAppContext();
  const docAppointments = appointments.filter((a) => a.docId === "doc1");

  const earnings = docAppointments.filter((a) => a.payment && !a.cancelled).reduce((sum, a) => sum + a.amount, 0);

  const stats = [
    { label: "Earnings", value: `${currencySymbol}${earnings}`, icon: DollarSign },
    { label: "Appointments", value: docAppointments.length, icon: Calendar },
    { label: "Patients", value: new Set(docAppointments.map((a) => a.userId)).size, icon: Users },
  ];

  // Example: get token from context or localStorage
  const token = localStorage.getItem("token") || "";
  return (
    <div className="p-6">
      {/* Notifications */}
      <div className="mb-6">
        <NotificationList recipientType="DOCTOR" token={token} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-border rounded-xl p-5 flex items-center gap-4 bg-card">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-border rounded-xl bg-card">
        <div className="p-5 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Latest Bookings</h2>
        </div>
        <div className="divide-y divide-border">
          {docAppointments.slice(0, 5).map((apt) => (
            <div key={apt._id} className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {apt.userName.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{apt.userName}</p>
                <p className="text-xs text-muted-foreground">{apt.slotDate.replace(/_/g, "/")} • {apt.slotTime}</p>
              </div>
              <div>
                {apt.cancelled ? (
                  <span className="text-xs px-3 py-1 rounded-full bg-destructive/10 text-destructive">Cancelled</span>
                ) : apt.isCompleted ? (
                  <span className="text-xs px-3 py-1 rounded-full bg-success/10 text-success">Completed</span>
                ) : (
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Pending</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;

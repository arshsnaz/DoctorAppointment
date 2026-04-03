
import { useAppContext } from "@/context/AppContext";
import { dashboardStats } from "@/data/mockData";
import { Users, Calendar, Stethoscope, X, Check } from "lucide-react";
import NotificationList from "@/components/ui/NotificationList";

const Dashboard = () => {
  const { appointments, currencySymbol } = useAppContext();

  const stats = [
    { label: "Doctors", value: dashboardStats.doctors, icon: Stethoscope, color: "text-primary" },
    { label: "Appointments", value: appointments.length, icon: Calendar, color: "text-warning" },
    { label: "Patients", value: dashboardStats.patients, icon: Users, color: "text-success" },
  ];

  // Example: get token from context or localStorage
  const token = localStorage.getItem("token") || "";
  return (
    <div className="p-4 sm:p-6">
      {/* Notifications */}
      <div className="mb-6">
        <NotificationList recipientType="ADMIN" token={token} />
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-border rounded-xl bg-card p-4 flex items-center gap-4 sm:p-5">
            <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest appointments */}
      <div className="border border-border rounded-xl bg-card">
        <div className="p-5 border-b border-border">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" /> Latest Bookings
          </h2>
        </div>
        <div className="divide-y divide-border">
          {appointments.slice(0, 5).map((apt) => (
            <div key={apt._id} className="flex items-start gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 overflow-hidden flex-shrink-0">
                <img src={apt.docData.image} alt={apt.docData.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{apt.docData.name}</p>
                <p className="text-xs text-muted-foreground">{apt.slotDate.replace(/_/g, "/")} • {apt.slotTime}</p>
              </div>
              <div>
                {apt.cancelled ? (
                  <span className="text-xs px-3 py-1 rounded-full bg-destructive/10 text-destructive">Cancelled</span>
                ) : apt.isCompleted ? (
                  <span className="text-xs px-3 py-1 rounded-full bg-success/10 text-success">Completed</span>
                ) : (
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border border-destructive text-destructive flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-success text-success flex items-center justify-center hover:bg-success hover:text-success-foreground transition-colors">
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

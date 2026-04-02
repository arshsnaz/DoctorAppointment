import { useAppContext } from "@/context/AppContext";

const AllAppointments = () => {
  const { appointments, currencySymbol } = useAppContext();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-foreground mb-6">All Appointments</h1>
      <div className="border border-border rounded-xl bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary text-muted-foreground">
                <th className="text-left p-4 font-medium">#</th>
                <th className="text-left p-4 font-medium">Patient</th>
                <th className="text-left p-4 font-medium">Department</th>
                <th className="text-left p-4 font-medium">Doctor</th>
                <th className="text-left p-4 font-medium">Date & Time</th>
                <th className="text-left p-4 font-medium">Fees</th>
                <th className="text-left p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {appointments.map((apt, i) => (
                <tr key={apt._id} className="hover:bg-secondary/50 transition-colors">
                  <td className="p-4 text-muted-foreground">{i + 1}</td>
                  <td className="p-4 text-foreground font-medium">{apt.userName}</td>
                  <td className="p-4 text-muted-foreground">{apt.docData.speciality}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <img src={apt.docData.image} alt="" className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-foreground">{apt.docData.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{apt.slotDate.replace(/_/g, "/")} | {apt.slotTime}</td>
                  <td className="p-4 text-foreground">{currencySymbol}{apt.amount}</td>
                  <td className="p-4">
                    {apt.cancelled ? (
                      <span className="text-xs px-3 py-1 rounded-full bg-destructive/10 text-destructive">Cancelled</span>
                    ) : apt.isCompleted ? (
                      <span className="text-xs px-3 py-1 rounded-full bg-success/10 text-success">Completed</span>
                    ) : (
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Pending</span>
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

export default AllAppointments;

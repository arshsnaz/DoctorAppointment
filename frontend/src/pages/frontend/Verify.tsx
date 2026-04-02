import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <CheckCircle className="w-20 h-20 text-success mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-foreground mb-2">Payment Verified</h1>
        <p className="text-muted-foreground text-sm mb-8">Your appointment has been confirmed successfully.</p>
        <button
          onClick={() => navigate("/my-appointments")}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          View Appointments
        </button>
      </div>
    </div>
  );
};

export default Verify;

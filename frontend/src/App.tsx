import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/context/AppContext";

import UserLayout from "@/layouts/UserLayout";
import AdminLayout from "@/layouts/AdminLayout";

import Index from "@/pages/Index";
import About from "@/pages/frontend/About";
import Contact from "@/pages/frontend/Contact";
import Login from "@/pages/frontend/Login";
import Doctors from "@/pages/frontend/Doctors";
import AppointmentPage from "@/pages/frontend/AppointmentPage";
import MyAppointments from "@/pages/frontend/MyAppointments";
import MyProfile from "@/pages/frontend/MyProfile";
import Verify from "@/pages/frontend/Verify";

import AdminLogin from "@/pages/admin/AdminLogin";
import Dashboard from "@/pages/admin/Dashboard";
import DoctorsList from "@/pages/admin/DoctorsList";
import AllAppointments from "@/pages/admin/AllAppointments";
import AddDoctor from "@/pages/admin/AddDoctor";

import DoctorDashboard from "@/pages/doctor/DoctorDashboard";
import DoctorAppointments from "@/pages/doctor/DoctorAppointments";
import DoctorProfile from "@/pages/doctor/DoctorProfile";

import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <BrowserRouter>
          <Routes>
            {/* User Frontend */}
            <Route element={<UserLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/appointment/:docId" element={<AppointmentPage />} />
              <Route path="/my-appointments" element={<MyAppointments />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/verify" element={<Verify />} />
            </Route>

            {/* Admin Login */}
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Admin Panel */}
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/doctors" element={<DoctorsList />} />
              <Route path="/admin/appointments" element={<AllAppointments />} />
              <Route path="/admin/add-doctor" element={<AddDoctor />} />
            </Route>

            {/* Doctor Panel */}
            <Route element={<AdminLayout />}>
              <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
              <Route path="/doctor/appointments" element={<DoctorAppointments />} />
              <Route path="/doctor/profile" element={<DoctorProfile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

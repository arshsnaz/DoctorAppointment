import React, { createContext, useContext, useState, ReactNode } from "react";
import { doctors as initialDoctors, appointments as initialAppointments, userProfile as initialProfile, Doctor, Appointment } from "@/data/mockData";

interface AppContextType {
  doctors: Doctor[];
  appointments: Appointment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
  userProfile: typeof initialProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<typeof initialProfile>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  isDoctor: boolean;
  setIsDoctor: React.Dispatch<React.SetStateAction<boolean>>;
  currencySymbol: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [doctors] = useState<Doctor[]>(initialDoctors);
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [userProfile, setUserProfile] = useState(initialProfile);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);

  return (
    <AppContext.Provider
      value={{
        doctors,
        appointments,
        setAppointments,
        userProfile,
        setUserProfile,
        isLoggedIn,
        setIsLoggedIn,
        isAdmin,
        setIsAdmin,
        isDoctor,
        setIsDoctor,
        currencySymbol: "$",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};

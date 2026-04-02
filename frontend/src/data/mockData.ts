import doc1 from "@/assets/doctors/doc1.png";
import doc2 from "@/assets/doctors/doc2.png";
import doc3 from "@/assets/doctors/doc3.png";
import doc4 from "@/assets/doctors/doc4.png";
import doc5 from "@/assets/doctors/doc5.png";
import doc6 from "@/assets/doctors/doc6.png";

export const specialities = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

export interface Doctor {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  available: boolean;
  address: { line1: string; line2: string };
  slots_booked: Record<string, string[]>;
}

import doc1 from "@/assets/doctors/doc1.png";
import doc2 from "@/assets/doctors/doc2.png";
import doc3 from "@/assets/doctors/doc3.png";
import doc4 from "@/assets/doctors/doc4.png";
import doc5 from "@/assets/doctors/doc5.png";
import doc6 from "@/assets/doctors/doc6.png";

export const specialities = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

export interface Doctor {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  available: boolean;
  address: { line1: string; line2: string };
  slots_booked: Record<string, string[]>;
}

export const doctors: Doctor[] = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about: "Dr. Richard has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    available: true,
    address: { line1: "17th Cross, Richmond", line2: "Circle, Ring Road, London" },
    slots_booked: {},
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, MD",
    experience: "3 Years",
    about: "Dr. Emily is dedicated to women's health and reproductive medicine with expertise in prenatal care and gynecological surgeries.",
    fees: 60,
    available: true,
    address: { line1: "27th Cross, Richmond", line2: "Circle, Ring Road, London" },
    slots_booked: {},
  },
  {
    _id: "doc3",
    name: "Dr. Sarah Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, MD",
    experience: "8 Years",
    about: "Dr. Sarah specializes in skin conditions, cosmetic dermatology, and advanced skin treatments with years of clinical experience.",
    fees: 45,
    available: true,
    address: { line1: "37th Cross, Richmond", line2: "Circle, Ring Road, London" },
    slots_booked: {},
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS, MD",
    experience: "5 Years",
    about: "Dr. Christopher provides compassionate pediatric care with a focus on child development, immunizations, and childhood illness management.",
    fees: 40,
    available: true,
    address: { line1: "47th Cross, Richmond", line2: "Circle, Ring Road, London" },
    slots_booked: {},
  },
  {
    _id: "doc5",
    name: "Dr. Andrew Williams",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, DM",
    experience: "10 Years",
    about: "Dr. Andrew is a leading neurologist with expertise in brain disorders, stroke management, and neurodegenerative diseases.",
    fees: 70,
    available: true,
    address: { line1: "57th Cross, Richmond", line2: "Circle, Ring Road, London" },
    slots_booked: {},
  },
  {
    _id: "doc6",
    name: "Dr. Amelia Hill",
    image: doc6,
    speciality: "Gastroenterologist",
    degree: "MBBS, MD, DM",
    experience: "6 Years",
    about: "Dr. Amelia specializes in digestive health, liver diseases, and endoscopic procedures with extensive clinical background.",
    fees: 55,
    available: false,
    address: { line1: "67th Cross, Richmond", line2: "Circle, Ring Road, London" },
    slots_booked: {},
  },
];

export interface Appointment {
  _id: string;
  docId: string;
  docData: Doctor;
  userId: string;
  userName: string;
  slotDate: string;
  slotTime: string;
  amount: number;
  cancelled: boolean;
  payment: boolean;
  isCompleted: boolean;
}

export const appointments: Appointment[] = [
  {
    _id: "apt1",
    docId: "doc1",
    docData: doctors[0],
    userId: "user1",
    userName: "John Smith",
    slotDate: "28_03_2026",
    slotTime: "10:00 AM",
    amount: 50,
    cancelled: false,
    payment: true,
    isCompleted: false,
  },
  {
    _id: "apt2",
    docId: "doc2",
    docData: doctors[1],
    userId: "user1",
    userName: "John Smith",
    slotDate: "29_03_2026",
    slotTime: "11:30 AM",
    amount: 60,
    cancelled: false,
    payment: false,
    isCompleted: false,
  },
  {
    _id: "apt3",
    docId: "doc3",
    docData: doctors[2],
    userId: "user2",
    userName: "Jane Doe",
    slotDate: "27_03_2026",
    slotTime: "02:00 PM",
    amount: 45,
    cancelled: true,
    payment: false,
    isCompleted: false,
  },
  {
    _id: "apt4",
    docId: "doc5",
    docData: doctors[4],
    userId: "user3",
    userName: "Robert Brown",
    slotDate: "26_03_2026",
    slotTime: "09:00 AM",
    amount: 70,
    cancelled: false,
    payment: true,
    isCompleted: true,
  },
  {
    _id: "apt5",
    docId: "doc4",
    docData: doctors[3],
    userId: "user1",
    userName: "John Smith",
    slotDate: "30_03_2026",
    slotTime: "03:30 PM",
    amount: 40,
    cancelled: false,
    payment: false,
    isCompleted: false,
  },
];

export const dashboardStats = {
  doctors: doctors.length,
  appointments: appointments.length,
  patients: 3,
  latestAppointments: appointments.slice(0, 5),
};

export const userProfile = {
  name: "John Smith",
  email: "john@example.com",
  phone: "+1 234 567 8900",
  address: { line1: "10th Cross, Richmond", line2: "Circle, Ring Road, London" },
  gender: "Male",
  dob: "1990-01-15",
  image: "",
};

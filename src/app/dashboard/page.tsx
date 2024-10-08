import Dashboard from "@/components/MainPage/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Edupad",
  description: "Token launchpad",
  icons: "/edupad.png",
};

export default function DashboardPage() {
  return <Dashboard />;
}

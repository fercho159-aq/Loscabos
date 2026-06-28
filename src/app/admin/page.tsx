import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifyToken } from "@/lib/auth";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export const metadata: Metadata = {
  title: "Registros · FICC Los Cabos",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const store = await cookies();
  const authed = await verifyToken(store.get(ADMIN_COOKIE)?.value);
  return authed ? <AdminDashboard /> : <AdminLogin />;
}

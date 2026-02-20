import { LoginCard } from "@/components/login/LoginCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - IMS",
  description: "Sign in to Inventory Management System",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <LoginCard />
    </div>
  );
}

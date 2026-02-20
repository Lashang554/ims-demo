"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const LOGO_URL =
  "https://play-lh.googleusercontent.com/XgPMfb6xTqe-4lpJd_XikSM061A8mCG0VIJZdlHKrwI35h4-RnHbF844nDiqXW1VYkw=w600-h300-pc0xffffff-pd";

export function LoginCard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Replace with real auth
    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-[700px] rounded-2xl border border-gray-200 bg-blue-50 p-8 shadow-lg">
      {/* Logo */}
      <div className="mb-6 flex flex-col items-center">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={LOGO_URL}
            alt="IMS Logo"
            fill
            className="object-cover"
            sizes="64px"
            priority
          />
        </div>
        <h1 className="mt-4 text-center text-lg font-semibold text-blue-600">
          Inventory Management System
        </h1>
        <p className="mt-2 text-center text-sm text-gray-500">
          Use the credentials provided by your department administrator
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          label="Email Address"
          type="email"
          placeholder="User@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between">
          <Checkbox
            id="remember"
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <Button type="submit" fullWidth className="mt-1 py-3">
          Login
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Having trouble? Contact your system administrator
      </p>
    </div>
  );
}

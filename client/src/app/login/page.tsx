"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { FaApple, FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="container flex items-center justify-center">
        <div className="shadow-lg shadow-blue-300 rounded-lg py-12 px-8 max-w-md w-full bg-white">
          {/* Header */}
          <div className="flex flex-col text-center text-slate-900 mb-6">
            <h1 className="text-2xl font-semibold">
              Log in to your Existing Account
            </h1>
            <p className="text-sm text-slate-500">
              Enter your credentials to log into your account
            </p>
          </div>

          {/* Signup Form */}
          <form className="space-y-4">
            {/* Email */}
            <div className="flex flex-col">
              <Label htmlFor="email" className="text-sm text-slate-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col relative">
              <Label htmlFor="password" className="text-sm text-slate-700">
                Password
              </Label>
              <div className="relative w-full">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="border border-gray-300 rounded-md p-2 w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoIosEyeOff size={20} />
                  ) : (
                    <IoMdEye size={20} />
                  )}
                </button>
              </div>
              <div className="flex items-center mt-3">
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-500 font-semibold hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Signup Button */}
            <Button
              variant={"outline"}
              className="w-full mt-2 border-2 bg-gray-50 text-black hover:bg-gray-900 hover:text-white"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <hr className="border-gray-300" />
            <span className="absolute left-1/2 top-[-10px] bg-white px-3 text-gray-500 text-sm transform -translate-x-1/2">
              OR Continue with below
            </span>
          </div>

          {/* Google & Apple Sign-In */}
          <div className="flex flex-row items-center space-x-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 font-semibold hover:bg-gray-900 hover:text-white"
            >
              <FaGoogle /> Sign in with Google
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center bg-gray-900 font-semibold text-white gap-2"
            >
              <FaApple /> Sign in with Apple
            </Button>
          </div>

          <div className="flex items-center justify-end mt-3">
            <span className="text-sm font-normal">New to Vets4Pets?</span>
            <Link
              href="/signup"
              className="text-sm text-blue-500 font-semibold hover:underline"
            >
             &nbsp; Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { PostUser } from "@/actions/server/Auth";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import GoogleButton from "./GoogleButton";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setErr("");
    const { name, email, password, confirmpassword } = user;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmpassword.trim()
    ) {
      setErr("All Fields are required");
      return;
    }

    if (name.trim().length <= 2) {
      setErr("Name must be at least 2 character long");
      return;
    }
    if (!emailRegex.test(email)) {
      setErr("Please enter a valid email");
      return;
    }
    if (password !== confirmpassword) {
      setErr("Password dosen't match");
      return;
    }
    setLoading(true);
    try {
      const res = await PostUser(user);
      if (!res.insertedId) {
        setErr(res.message);
        return;
      }
      setSuccess(true);
      setUser({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      setErr("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Register Card */}
      <div className="max-w-md w-full mx-auto">
        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300 p-8">
          <form onSubmit={handleSubmit}>
            <div>
              <h2 className="text-3xl font-bold text-secondary">
                Create an account
              </h2>

              {err && (
                <div className="bg-red-500/10 text-red-400 text-center px-4 py-2 rounded-2xl my-3">
                  <span>{err}</span>
                </div>
              )}
              {success && (
                <div className="bg-lime-500/10 text-lime-500 text-center px-4 py-2 rounded-2xl my-3">
                  <span>Account created successfully. Please login.</span>
                </div>
              )}

              {/* Name */}
              <div className="mt-6">
                <label className="font-semibold mb-2 block">Full Name</label>

                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  value={user.name ?? ""}
                  placeholder="Enter your name"
                  className="input input-bordered w-full px-4 rounded-xl"
                />
              </div>

              {/* Email */}
              <div className="mt-5">
                <label className="font-semibold mb-2 block">Email</label>

                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={user.email ?? ""}
                  placeholder="Enter your email"
                  className="input input-bordered w-full px-4 rounded-xl"
                />
              </div>

              {/* Password */}
              <div className="mt-5">
                <label className="font-semibold mb-2 block">Password</label>
                <div className="relative showPass">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    onChange={handleChange}
                    value={user.password}
                    placeholder="Create password"
                    className="input input-bordered w-full px-4 pr-12 rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mt-5">
                <label className="font-semibold mb-2 block">
                  Confirm Password
                </label>

                <div className="relative showPass">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmpassword"
                    required
                    onChange={handleChange}
                    value={user.confirmpassword}
                    placeholder="Confirm password"
                    className="input input-bordered w-full px-4 pr-12 rounded-xl"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary cursor-pointer"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Register Button */}
              <button
                disabled={loading}
                className="btn btn-primary w-full rounded-xl mt-6"
              >
                {loading && (
                  <span className="loading loading-spinner loading-sm"></span>
                )}
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
          <div>
            {/* Divider */}
            <div className="divider my-6">OR</div>

            {/* Google Register */}
            <GoogleButton></GoogleButton>
            {/* Login Link */}
            <p className="text-center mt-6">
              Already have an account?
              <Link
                href="/login"
                className="text-primary hover:underline font-bold ml-2"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleButton from "./GoogleButton";

const LoginForm = () => {
  const params = useSearchParams();
  const callback = params.get("callbackurl") || "/";
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
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
    setErr("");
    const { email, password } = user;
    if (!email.trim() || !password.trim()) {
      setErr("All Fields are required");
      return;
    }
    setLoading(true);
    try {
      // next auth signin
      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
        callbackUrl: callback,
      });
      if (res?.error) {
        setErr("Invalid email or password");
        return;
      }
      // login success
      router.push(callback);
    } catch (error) {
      setErr("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="max-w-md w-full mx-auto">
        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300 p-8">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-secondary">
              Login to your account
            </h2>
            {err && (
              <div className="bg-red-500/10 text-red-400 text-center px-4 py-2 rounded-2xl my-3">
                <span>{err}</span>
              </div>
            )}

            {/* Email */}
            <div className="mt-6">
              <label className="font-semibold mb-2 block">Email</label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="input input-bordered w-full px-4 rounded-xl"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mt-5">
              <label className="font-semibold mb-2 block">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="input input-bordered w-full px-4 rounded-xl"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Forget Password */}
            <div className="flex justify-end mt-3">
              <button className="text-sm text-primary font-semibold">
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              disabled={loading}
              className="btn btn-primary w-full rounded-xl mt-6"
            >
              {loading && (
                <span className="loading loading-spinner loading-sm"></span>
              )}

              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-6">OR</div>

          {/* Google Login */}
          <GoogleButton></GoogleButton>

          {/* Register */}
          <p className="text-center mt-6">
            Don't have an account?
            <Link
              href={`/register?callbackurl=${callback}`}
              className="text-primary hover:underline font-bold ml-2"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

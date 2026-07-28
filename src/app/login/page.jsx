import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaEye } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-5">
            <div className="bg-primary/10 rounded-full p-8">
              <Image
                src="https://i.ibb.co.com/bgvsQT59/logo.png"
                alt="Hero Kidz"
                width={180}
                height={180}
              />
            </div>

            <h1 className="text-4xl font-bold text-secondary">
              Welcome Back To Hero Kidz
            </h1>

            <p className="text-base-content/70 max-w-md leading-7">
              Login to continue your journey and discover amazing educational
              toys for your kids.
            </p>
          </div>

          {/* Login Card */}
          <div className="max-w-md w-full mx-auto">
            <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300 p-8">
              <h2 className="text-3xl font-bold text-secondary">
                Login to your account
              </h2>

              {/* Email */}
              <div className="mt-6">
                <label className="font-semibold mb-2 block">Email</label>

                <div className="relative">
                  <input
                    type="email"
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
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full px-4 rounded-xl"
                  />

                  <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400" />
                </div>
              </div>

              {/* Forget Password */}
              <div className="flex justify-end mt-3">
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary font-semibold"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button className="btn btn-primary w-full rounded-xl mt-6 text-lg">
                Login
              </button>

              {/* Divider */}
              <div className="divider my-6">OR</div>

              {/* Google Login */}
              <button className="btn btn-outline w-full rounded-xl">
                <FaGoogle className="text-red-500" />
                Continue With Google
              </button>

              {/* Register */}
              <p className="text-center mt-6">
                Don't have an account?
                <Link
                  href="/register"
                  className="text-primary hover:underline font-bold ml-2"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

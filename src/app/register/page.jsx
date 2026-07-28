import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
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
              Join Hero Kidz Today
            </h1>

            <p className="text-base-content/70 max-w-md leading-7">
              Create your account and explore amazing educational toys designed
              for your kids.
            </p>
          </div>

          {/* Register Card */}
          <div className="max-w-md w-full mx-auto">
            <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300 p-8">
              <h2 className="text-3xl font-bold text-secondary">
                Create an account
              </h2>

              {/* Name */}
              <div className="mt-6">
                <label className="font-semibold mb-2 block">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full px-4 rounded-xl"
                />
              </div>

              {/* Email */}
              <div className="mt-5">
                <label className="font-semibold mb-2 block">Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full px-4 rounded-xl"
                />
              </div>

              {/* Password */}
              <div className="mt-5">
                <label className="font-semibold mb-2 block">Password</label>

                <input
                  type="password"
                  placeholder="Create password"
                  className="input input-bordered w-full px-4 rounded-xl"
                />
              </div>

              {/* Confirm Password */}
              <div className="mt-5">
                <label className="font-semibold mb-2 block">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered w-full px-4 rounded-xl"
                />
              </div>

              {/* Register Button */}
              <button className="btn btn-primary w-full rounded-xl mt-6 text-lg">
                Register
              </button>

              {/* Divider */}
              <div className="divider my-6">OR</div>

              {/* Google Register */}
              <button className="btn btn-outline w-full rounded-xl">
                <FaGoogle className="text-red-500" />
                Continue With Google
              </button>

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
    </div>
  );
};

export default RegisterPage;

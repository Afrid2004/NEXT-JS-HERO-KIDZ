import RegisterForm from "@/components/Auth/RegisterForm";
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

          {/* register form  */}
          <div>
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

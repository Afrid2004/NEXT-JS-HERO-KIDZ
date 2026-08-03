import LoginForm from "@/components/Auth/LoginForm";
import Image from "next/image";

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
          <div>
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

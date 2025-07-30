import type React from "react";
import { Link } from "react-router-dom";
import { UserIcon, LockClosedIcon } from "../components/HeroIcons";

type InputFields = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
};

const Login = () => {
  const showinput = (value: string) => {
    console.log(value);
  };

  const inputs: InputFields[] = [
    {
      type: "text",
      name: "username",
      placeholder: "dina.lee.go@example.com or username",
      onChange: (e) => showinput(e.target.value),
      icon: <UserIcon className="h-3 w-3 sm:h-5 sm:w-5" />,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      onChange: (e) => showinput(e.target.value),
      icon: <LockClosedIcon className="h-3 w-3 sm:h-5 sm:w-5" />,
    },
  ];

  return (
    <div className="sm:h-screen grid lg:grid-cols-2 gap-2">
      {/* Left */}
      <div className="hidden lg:block bg-[url('/img/home_bg.jpg')] bg-no-repeat bg-cover">
        <div className="h-screen flex items-center justify-center gap-2 bg-[rgba(33,34,36,0.8)]">
          <img src="/img/logo.png" alt="Logo" className="h-32 w-32" />
          <span className="font-bold text-5xl text-white">P A W S</span>
        </div>
      </div>

      {/* Form Here */}
      <div className="flex items-center justify-center text-[#066839] m-5">
        <div className="flex w-full flex-col items-center text-center gap-y-4 max-w-lg">
          <h1 className="text-3xl sm:text-5xl font-bold">Welcome back!</h1>
          <p className="text-xs sm:text-sm">Log in to continue to your Account</p>

          <form className="flex w-full flex-col gap-y-3 sm:gap-y-6 p-5">
            {inputs.map((inp, i) => (
              <div key={i} className="relative w-full">
                {/* Icon */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  {inp.icon}
                </div>
                {/* Input */}
                <input
                  type={inp.type}
                  name={inp.name}
                  placeholder={inp.placeholder}
                  onChange={inp.onChange}
                  className="w-full pl-10 p-2 rounded border border-gray-300 text-sm
                             focus:outline-none focus:border-[#85aa95] focus:shadow-md"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-[#85aa95] p-2 text-sm font-semibold text-white rounded-md cursor-pointer hover:shadow-xl"
            >
              Log in
            </button>

            <span className="text-xs sm:tracking-wider">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold text-blue-500">
                Sign up now
              </Link>
            </span>

            <span className="text-xs sm:tracking-wider">
              Need Help?{" "}
              <a href="###" className="font-semibold text-blue-500">
                Contact Us
              </a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

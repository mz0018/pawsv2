import type React from "react";
import { Link } from "react-router-dom";

type InputFields = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Login = () => {
  const showinput = (value: string) => {
    console.log(value);
  };

  const inputs: InputFields[] = [
    {
      type: "text",
      name: "firstname",
      placeholder: "Enter firstname",
      onChange: (e) => showinput(e.target.value),
    },
    {
      type: "text",
      name: "lastname",
      placeholder: "Enter lastname",
      onChange: (e) => showinput(e.target.value),
    },
    {
      type: "text",
      name: "username",
      placeholder: "dina.lee.go@example.com",
      onChange: (e) => showinput(e.target.value),
    },
    {
      type: "password",
      name: "password",
      placeholder: "Create a password",
      onChange: (e) => showinput(e.target.value),
    },
    {
      type: "password",
      name: "retypePassword",
      placeholder: "Confirm password",
      onChange: (e) => showinput(e.target.value),
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
        <div className="flex w-full flex-col items-center text-center gap-y-2 max-w-lg">
          <h1 className="text-3xl sm:text-5xl font-bold">Create Account</h1>
          <p className="text-xs sm:text-sm">Enter your information to get started</p>

          <form className="flex w-full flex-col gap-y-3 sm:gap-y-6 p-5">
          <div className="flex w-full gap-x-4">
            {[0, 1].map((i) => (
              <div key={i} className="relative w-1/2">
                <input
                  type={inputs[i].type}
                  name={inputs[i].name}
                  placeholder={inputs[i].placeholder}
                  onChange={inputs[i].onChange}
                  className="w-full p-2 rounded border border-gray-300 text-sm focus:outline-none focus:border-[#85aa95] focus:shadow-md"
                />
              </div>
            ))}
          </div>

          {inputs.slice(2).map((inp, i) => (
            <div key={i + 2} className="relative w-full">
              <input
                type={inp.type}
                name={inp.name}
                placeholder={inp.placeholder}
                onChange={inp.onChange}
                className="w-full p-2 rounded border border-gray-300 text-sm focus:outline-none focus:border-[#85aa95] focus:shadow-md"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-[#85aa95] p-2 text-sm font-semibold text-white rounded-md cursor-pointer hover:shadow-xl"
          >
            Create Account
          </button>
          <span className="text-xs sm:tracking-wider">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-500">
              Sign in
            </Link>
          </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

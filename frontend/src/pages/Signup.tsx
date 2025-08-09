import { Link } from "react-router-dom";
import { useSignupForm } from "../hooks/useSignupform";


type InputFields = {
  type: string;
  name: string;
  placeholder: string;
};

const Login = () => {

  const { formData, isLoading, errors, handleChange, handleSubmit } = useSignupForm();
  
  const inputs: InputFields[] = [
    { type: "text", name: "firstname", placeholder: "Enter firstname" },
    { type: "text", name: "lastname", placeholder: "Enter lastname" },
    { type: "text", name: "email", placeholder: "dina.lee.go@example.com" },
    { type: "password", name: "password", placeholder: "Create a password" },
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

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-y-3 sm:gap-y-6 p-5">
          <div className="flex w-full gap-x-4">
            {[0, 1].map((i) => (
              <div key={i} className="relative w-1/2">
                <input
                  type={inputs[i].type}
                  name={inputs[i].name}
                  value={formData[inputs[i].name as keyof typeof formData] || ''}
                  placeholder={inputs[i].placeholder}
                  onChange={handleChange}
                  className={`w-full p-2 rounded border text-sm focus:outline-none focus:shadow-md ${errors[inputs[i].name] ? 'border-red-500' : 'border-gray-300 focus:border-[#85aa95]'}`}
                />
                {errors[inputs[i].name] && (
                  <p className="text-start text-red-500 text-xs">{errors[inputs[i].name]}</p>
                )}
              </div>
            ))}
          </div>

          {inputs.slice(2).map((inp, i) => (
            <div key={i + 2} className="relative w-full">
              <input
                type={inp.type}
                name={inp.name}
                value={formData[inp.name as keyof typeof formData] || ''}
                placeholder={inp.placeholder}
                onChange={handleChange}
                className={`w-full p-2 rounded border text-sm focus:outline-none focus:shadow-md ${errors[inp.name] ? 'border-red-500' : 'border-gray-300 focus:border-[#85aa95]'}`}
              />
              {errors[inp.name] && (
                <p className="text-start text-red-500 text-xs">{errors[inp.name]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-2 text-sm font-semibold text-white rounded-md cursor-pointer hover:shadow-xl
              ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#85aa95]'}`}
          >
            {isLoading ? (
              <div className="mx-auto h-5 w-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Create Account'
            )}
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

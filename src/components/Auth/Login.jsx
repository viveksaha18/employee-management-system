import React, { useState } from "react";
import { useFormState } from "react-dom";
const Login = ({handleLogin}) => {

    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 sm:px-6 md:px-8">
      <div className="border-4 border-blue-600 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 bg-gray-100 shadow-2xl w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col justify-center transition-all duration-300">
        <h2 className="text-lg sm:textsss-xl md:text-2xl font-semibold text-gray-900 text-center mb-4 sm:mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col items-center w-full">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-gray-200 text-gray-900 border-2 border-gray-400 py-2 sm:py-3 px-3 sm:px-5 text-sm sm:text-base rounded-full placeholder-gray-500 focus:border-blue-500 w-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-gray-200 text-gray-900 border-2 border-gray-400 py-2 sm:py-3 px-3 sm:px-5 text-sm sm:text-base rounded-full mt-3 sm:mt-4 placeholder-gray-500 focus:border-blue-500 w-full"
            type="password"
            placeholder="Enter your password"
          />
          <button className="bg-blue-600 text-white border-2 border-blue-600 outline-none py-2 sm:py-3 px-3 sm:px-5 text-sm sm:text-base rounded-full mt-3 sm:mt-4 hover:bg-blue-700 transition-all w-full">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

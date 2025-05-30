import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    axios
      .post("http://localhost:5002/user/login", userInfo)
      .then((response) => {
        console.log("Login successful:", response.data);
        alert("LOGIN SUCCESSFUL");
        localStorage.setItem("messenger", JSON.stringify(response.data));
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response:", error.response.data);
          alert(`Error: ${error.response.data.message}`);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        {/* Headings */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">Messenger</h1>
          <p className="mt-2 text-gray-700">
            Login with your{" "}
            <span className="text-blue-600 font-semibold">account</span>
          </p>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="relative mt-1">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793l6.674 3.685a.75.75 0 0 0 .652 0L15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative mt-1">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Lock Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a4 4 0 0 1 4 4v2h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V5a4 4 0 0 1 4-4Zm3 6V5a3 3 0 1 0-6 0v2h6Z" />
            </svg>
            {/* Show/Hide Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              tabIndex={-1}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.359 11.238A8.717 8.717 0 0 0 15 8a8.71 8.71 0 0 0-1.64-3.238A.5.5 0 1 1 14.64 4.76a9.705 9.705 0 0 1 1.84 3.24 9.704 9.704 0 0 1-1.84 3.24.5.5 0 1 1-.841-.482Z" />
                  <path d="M11.414 9.9A3.5 3.5 0 0 1 6.1 4.586L7.354 5.84a2 2 0 1 0 2.806 2.806L11.414 9.9Z" />
                  <path d="M2.646 3.646a.5.5 0 0 1 .708 0l10 10a.5.5 0 0 1-.708.708l-10-10a.5.5 0 0 1 0-.708Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.173 8.27a13.133 13.133 0 0 1 1.66-2.043C4.12 4.43 5.943 3.5 8 3.5c2.057 0 3.88.93 5.167 2.727a13.13 13.13 0 0 1 1.66 2.043.5.5 0 0 1-.004.507 13.133 13.133 0 0 1-1.66 2.043C11.88 11.57 10.057 12.5 8 12.5c-2.057 0-3.88-.93-5.167-2.727A13.13 13.13 0 0 1 1.173 8.27ZM8 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-blue-600 font-medium hover:underline cursor-pointer"
            onClick={() => (window.location.href = "/signup")}
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}

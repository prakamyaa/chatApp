import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

export default function Signup() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const validatePasswordMatch = (value) => {
    if (value !== watch("password")) {
      return "Passwords do not match";
    }
    return true;
  };

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name, //
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    await axios
      .post("http://localhost:5002/user/signup", userInfo)
      .then((response) => {
        console.log("Signup successful:", response.data);

        if (response.data) {
          alert("SIGNUP SUCCESSFUL YOU CAN LOGIN NOW ");
        }
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
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 border border-black px-6 py-4 rounded-lg space-y-4"
      >
        <h1 className="text-2xl text-center font-bold text-blue-600">
          Messenger
        </h1>
        <h2 className="text-xl text-center">
          Create a new{" "}
          <span className="text-blue-600 font-semibold">Account</span>
        </h2>

        {/* Name */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Full name"
            {...register("name", { required: "Full name is required" })}
          />
        </label>
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}

        {/* Email */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="email"
            className="grow"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
        </label>
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        {/* Password */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            className="grow"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
        </label>
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        {/* Confirm Password */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: validatePasswordMatch,
            })}
          />
        </label>
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}

        {/* Submit Button */}
        <input
          className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer"
          type="submit"
          value="Signup"
        />
        {/* Already have an account link using span */}
        <p className="text-center text-sm mt-2">
          Already have an account?{" "}
          <span
            onClick={() => (window.location.href = "/login")}
            className="text-blue-600 font-medium hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

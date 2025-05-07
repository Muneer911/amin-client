// SignUp.js - Next.js friendly sign-up component
"use client";
import "../../globals.css";
import { useState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";

export default function SignUp() {
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  // Validation states
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setIsLoading(true);
  //   try {
  //     // Replace this with axios
  //     // const response = await fetch('/api-signup', {
  //     //   method: 'POST',
  //     //   headers: { 'Content-Type': 'application/json' },
  //     //   body: JSON.stringify(formData)
  //     // });

  //     // if (!response.ok) throw new Error('Registration failed');
  //     // const data = await response.json();

  //     // Simulate API call for now
  //     await new Promise((resolve) => setTimeout(resolve, 1500));

  //     // Handle successful registration
  //     // router.push("/onboarding");
  //   } catch (error) {
  //     console.error("Registration error:", error);
  //     // Handle error - show notification, etc.
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleSocialSignUp = (provider) => {
  //   // social sign-up logic
  //   console.log(`Signing up with ${provider}`);
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 my-12">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        {/* Form submission temporarily disabled until handleSubmit is implemented */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all`}
                placeholder="John"
                required
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all`}
                placeholder="Doe"
                required
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all`}
              placeholder="you@example.com"
              required
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all`}
              placeholder="••••••••"
              required
            />
            <p
              className={`mt-1 text-xs ${
                errors.password ? "text-red-500" : "text-gray-500"
              }`}
            >
              {errors.password ||
                "Must be at least 8 characters with a number and special character"}
            </p>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all`}
              placeholder="••••••••"
              required
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className={`h-4 w-4 mt-1 ${
                errors.acceptTerms ? "border-red-500" : "border-gray-300"
              } text-indigo-600 rounded focus:ring-indigo-500`}
              required
            />
            <label
              htmlFor="acceptTerms"
              className="ml-2 block text-sm text-gray-700"
            >
              I agree to the{" "}
              <Link href="/terms" className="text-indigo-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-indigo-600 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.acceptTerms && (
            <p className="mt-1 text-xs text-red-500">{errors.acceptTerms}</p>
          )}

          <button
            type="button"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-3 rounded-lg transition-colors flex justify-center items-center"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </button>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-200 flex-grow"></div>
            <span className="px-4 text-sm text-gray-500">Or continue with</span>
            <div className="border-t border-gray-200 flex-grow"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              disabled
              className="flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg opacity-50 cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 mr-2"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img"
              >
                <title>Github</title>
                <desc>A solid styled icon from Orion Icon Library.</desc>
                <path
                  data-name="layer2"
                  d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9a4.6 4.6 0 0 1 1.2-3.2 4.5 4.5 0 0 1 .1-3.2s1-.3 3.3 1.3a11.6 11.6 0 0 1 3-.4 11.6 11.6 0 0 1 3 .4c2.3-1.6 3.3-1.3 3.3-1.3a4.5 4.5 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.2 3.2c0 4.6-2.8 5.6-5.5 5.9a5 5 0 0 1 1.5 3.7v5.5c0 .3.2.7.8.6A12 12 0 0 0 12 0z"
                  fill="#202020"
                />
                <path
                  data-name="layer1"
                  d="M4.5 17.2c-.1.1-.2.1-.2 0s-.1-.1-.1-.2.1-.1.2 0c.1.1.1.2.1.2zm.5.6a.2.2 0 0 1-.3-.3.2.2 0 0 1 .3 0 .2.2 0 0 1 0 .3zm.5.7a.2.2 0 0 1-.3-.1.2.2 0 0 1 0-.3.2.2 0 0 1 .3.1c.1.1.1.3 0 .3zm.6.7c-.1.1-.2 0-.3-.1-.1-.1-.1-.2 0-.3a.2.2 0 0 1 .3.1c.1.1.1.3 0 .3zm.9.4c0 .1-.1.2-.3.1s-.2-.1-.2-.3.1-.1.3-.1c.1 0 .2.1.2.3zm1 .1c0 .1-.1.2-.3.2s-.3-.1-.3-.2.1-.2.3-.2c.2 0 .3.1.3.2zm.9-.1c0 .2-.1.3-.2.2a.3.3 0 0 1-.3-.1c0-.2.2-.2.2-.2.2 0 .3.1.3.1z"
                  fill="#202020"
                />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </button>
            <button
              type="button"
              disabled
              className="flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg opacity-50 cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
              <span className="text-sm font-medium">Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

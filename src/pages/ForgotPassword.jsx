import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import {
  Mail,
  ShieldCheck,
  KeyRound,
} from "@/utils/icons";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Reset password link sent to your email.");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br bg-gray-100 dark:bg-zinc-900 text-black dark:text-black transition-all duration-300 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-30 -left-30 w-[320px] sm:w-112.5 h-80 sm:h-112.5 bg-blue-400/30 rounded-full blur-3xl animate-glowLeft" />

      <div className="absolute -bottom-30 -right-30 w-75 sm:w-105 h-75 sm:h-105 bg-cyan-300/30 rounded-full blur-3xl animate-glowRight" />

      <div className="absolute top-[40%] left-[35%] w-62.5 h-62.5 bg-indigo-300/20 rounded-full blur-3xl animate-pulseGlow" />

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg animate-card">

        <div className="bg-white rounded-4xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-300 hover:-translate-y-1">

          {/* TOP DESIGN */}
          <div className="relative bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-700 px-6 sm:px-8 py-10 text-center overflow-hidden">

            {/* FLOATING ICON */}
            <div className="mx-auto w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center animate-floatIcon">
              <KeyRound className="text-white" size={40} />
            </div>

            <div className="absolute -top-12.5 -right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-topGlow" />

            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-6">
              Forgot Password
            </h1>

            <p className="text-blue-100 mt-3 text-sm sm:text-base leading-relaxed">
              Enter your email address and we’ll send you
              a secure password reset link.
            </p>
          </div>

          {/* FORM SECTION */}
          <div className="p-6 sm:p-8">

            {/* SUCCESS MESSAGE */}
            {message && (
              <div className="bg-green-100 border border-green-200 text-green-700 p-4 rounded-2xl mb-6 text-sm flex items-center gap-3 animate-slideDown">
                <ShieldCheck size={20} />
                {message}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* EMAIL */}
              <div className="animate-fadeUp">

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-cyan-400 focus-within:border-cyan-400 transition-all duration-300 hover:-translate-y-0.5">

                  <Mail className="text-gray-400" size={20} />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent p-4 focus:outline-none text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* BUTTON */}
              <Button className="px-5  text-sm">
                Send Reset Link
              </Button>
            </form>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-gray-500 mt-8 animate-fadeIn">
              Remember your password?

              <Link
                to="/login"
                className="text-blue-600 font-semibold ml-2 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
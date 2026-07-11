import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import {
  User,
  Mail,
  Lock,
  ShieldCheck,
  CreditCard,
} from "@/utils/icons";

const Register = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-100 dark:bg-zinc-900 text-black dark:text-black transition-all duration-300 flex items-center justify-center px-4 py-10">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-125 h-125 bg-blue-300 rounded-full blur-3xl -top-40 -left-40 animate-glowOne" />

      <div className="absolute w-100 h-100 bg-indigo-300 rounded-full blur-3xl bottom-0 right-0 animate-glowTwo" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[36px] overflow-hidden shadow-2xl animate-fadeUp">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex relative overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] p-10 text-white flex-col justify-between">

          {/* GLOW */}
          <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl -top-32 -right-20 animate-pulseGlow" />

          <div className="relative z-10">

            <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center animate-floatIcon">
              <CreditCard size={40} />
            </div>

            <h1 className="text-4xl xl:text-5xl font-bold leading-tight mt-8">
              Smart Digital Banking
            </h1>

            <p className="text-blue-100 mt-6 text-base xl:text-lg leading-relaxed">
              Create your secure banking account and manage
              transactions, payments, and savings instantly.
            </p>
          </div>

          {/* FEATURES */}
          <div className="relative z-10 space-y-4 mt-10">

            {[
              {
                title: "100% Secure Banking",
                desc: "Protected with advanced encryption",
              },
              {
                title: "Instant Transfers",
                desc: "Transfer money within seconds",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] hover:translate-x-2 animate-floatCard"
                style={{
                  animationDelay: `${index * 0.4}s`,
                }}
              >
                <ShieldCheck size={28} />

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-blue-100 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-12">

          {/* MOBILE TOP */}
          <div className="lg:hidden text-center mb-8">

            <div className="mx-auto w-20 h-20 rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl animate-mobileFloat">
              <CreditCard size={38} />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mt-5">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Register to your banking dashboard
            </p>
          </div>

          {/* DESKTOP TITLE */}
          <div className="hidden lg:block mb-8 animate-slideUp">

            <h1 className="text-4xl font-bold text-gray-800">
              Create Account
            </h1>

            <p className="text-gray-500 mt-3">
              Start your smart banking journey today
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6">

            {/* NAME */}
            <div className="animate-slideUp">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300 hover:-translate-y-[2px]">
                <User
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-4 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="animate-slideUp delay-100">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300 hover:-translate-y-[2px]">
                <Mail
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="animate-slideUp delay-200">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300 hover:-translate-y-[2px]">
                <Lock
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full p-4 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="animate-slideUp delay-300">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>

              <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300 hover:-translate-y-[2px]">
                <Lock
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full p-4 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {/* BUTTON */}
            <Button>Create Account</Button>
          </form>

          {/* LOGIN */}
          <div className="text-center mt-8">
            <p className="text-gray-500">
              Already have an account?

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

export default Register;
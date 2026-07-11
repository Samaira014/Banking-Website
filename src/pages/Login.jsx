import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import {
  Mail,
  Lock,
  Shield,
  Sparkles,
} from "@/utils/icons";

const Login = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-100 dark:bg-zinc-900 text-black dark:text-black transition-all duration-300 flex items-center justify-center px-4 py-10">

      {/* ANIMATED GRID */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      {/* FLOATING GLOW */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-cyan-500/30 rounded-full blur-3xl animate-floatOne" />

      <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-600/30 rounded-full blur-3xl animate-floatTwo" />

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[40px] bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.25)] animate-card">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex relative flex-col justify-between p-10 bg-linear-to-br from-cyan-500/20 to-blue-700/20 border-r border-white/10 overflow-hidden">

          {/* ANIMATED ICON */}
          <div className="w-24 h-24 rounded-[30px] bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 animate-spinSlow">
            <Shield className="text-cyan-300" size={45} />
          </div>

          {/* TEXT */}
          <div>

            <h1 className="text-6xl font-black text-white leading-tight animate-slideLeft">
              Digital
              <br />
              Banking
            </h1>

            <p className="mt-6 text-lg text-cyan-100 leading-relaxed animate-slideLeft delay-200">
              Experience ultra-fast, secure and smart banking
              with next-generation digital finance.
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="space-y-4">

            {[
              "256-bit Encryption",
              "Instant Transfer",
              "AI Fraud Protection",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-white transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-slideLeft"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* SPARKLE */}
          <div className="absolute top-16 right-16 animate-pulseScale">
            <Sparkles className="text-cyan-300" size={28} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative p-6 sm:p-10 md:p-14 bg-white/95">

          {/* FLOATING CARD */}
          <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-2xl shadow-md animate-floatY">
            <Shield className="text-blue-600" size={18} />

            <span className="text-sm font-semibold text-blue-700">
              Secure Login
            </span>
          </div>

          {/* MOBILE ICON */}
          <div className="lg:hidden w-24 h-24 mx-auto rounded-[30px] bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl animate-mobileIcon">
            <Shield className="text-white" size={42} />
          </div>

          {/* HEADING */}
          <div className="mt-8 lg:mt-0 animate-fadeUp">

            <h2 className="text-4xl sm:text-5xl font-black text-gray-800">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Login to access your banking dashboard
            </p>
          </div>

          {/* FORM */}
          <form className="mt-10 space-y-6">

            {/* EMAIL */}
            <div className="animate-fadeUp delay-200">

              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Email Address
              </label>

              <div className="flex items-center bg-gray-100 border border-gray-200 rounded-2xl px-4 focus-within:ring-4 focus-within:ring-cyan-200 transition-all duration-300 hover:scale-[1.02]">
                <Mail className="text-gray-400" size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent p-4 focus:outline-none"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="animate-fadeUp delay-300">

              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Password
              </label>

              <div className="flex items-center bg-gray-100 border border-gray-200 rounded-2xl px-4 focus-within:ring-4 focus-within:ring-cyan-200 transition-all duration-300 hover:scale-[1.02]">
                <Lock className="text-gray-400" size={20} />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent p-4 focus:outline-none"
                />
              </div>
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between flex-wrap gap-3 animate-fadeIn delay-500">

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-sm text-cyan-600 font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* BUTTON */}
            <Button>Login Now</Button>

          </form>

          {/* REGISTER */}
          <p className="text-center text-sm text-gray-500 mt-8 animate-fadeIn delay-700">
            Don’t have an account?

            <Link
              to="/register"
              className="ml-1 text-cyan-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
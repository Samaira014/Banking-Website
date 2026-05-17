import { Link } from "react-router-dom";
import { m } from "framer-motion";
import {
  Mail,
  Lock,
  ArrowRight,
  Shield,
  Sparkles,
} from "@/utils/icons";

const Login = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300 flex items-center justify-center px-4 py-10">

      {/* ANIMATED GRID */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* FLOATING GLOW */}
      <m.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-3xl"
      />

      <m.div
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-3xl"
      />

      {/* MAIN CARD */}
      <m.div
        initial={{
          opacity: 0,
          scale: 0.8,
          rotateX: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        whileHover={{
          y: -5,
        }}
        className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[40px] bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.25)]"
      >

        {/* LEFT SIDE */}
        <div className="hidden lg:flex relative flex-col justify-between p-10 bg-gradient-to-br from-cyan-500/20 to-blue-700/20 border-r border-white/10 overflow-hidden">

          {/* ANIMATED ICON */}
          <m.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="w-24 h-24 rounded-[30px] bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20"
          >
            <Shield className="text-cyan-300" size={45} />
          </m.div>

          {/* TEXT */}
          <div>

            <m.h1
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="text-6xl font-black text-white leading-tight"
            >
              Digital
              <br />
              Banking
            </m.h1>

            <m.p
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-6 text-lg text-cyan-100 leading-relaxed"
            >
              Experience ultra-fast, secure and smart banking
              with next-generation digital finance.
            </m.p>
          </div>

          {/* FEATURE CARDS */}
          <div className="space-y-4">

            {[
              "256-bit Encryption",
              "Instant Transfer",
              "AI Fraud Protection",
            ].map((item, index) => (
              <m.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.2,
                }}
                whileHover={{
                  scale: 1.04,
                  x: 8,
                }}
                className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-white"
              >
                {item}
              </m.div>
            ))}
          </div>

          {/* SPARKLE */}
          <m.div
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute top-16 right-16"
          >
            <Sparkles className="text-cyan-300" size={28} />
          </m.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative p-6 sm:p-10 md:p-14 bg-white/95">

          {/* FLOATING CARD */}
          <m.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-6 right-6 hidden sm:flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-2xl shadow-md"
          >
            <Shield className="text-blue-600" size={18} />

            <span className="text-sm font-semibold text-blue-700">
              Secure Login
            </span>
          </m.div>

          {/* MOBILE ICON */}
          <m.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 6, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="lg:hidden w-24 h-24 mx-auto rounded-[30px] bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl"
          >
            <Shield className="text-white" size={42} />
          </m.div>

          {/* HEADING */}
          <m.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mt-8 lg:mt-0"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-gray-800">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Login to access your banking dashboard
            </p>
          </m.div>

          {/* FORM */}
          <form className="mt-10 space-y-6">

            {/* EMAIL */}
            <m.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Email Address
              </label>

              <m.div
                whileFocus={{
                  scale: 1.02,
                }}
                className="flex items-center bg-gray-100 border border-gray-200 rounded-2xl px-4 focus-within:ring-4 focus-within:ring-cyan-200 transition-all duration-300"
              >
                <Mail className="text-gray-400" size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent p-4 focus:outline-none"
                />
              </m.div>
            </m.div>

            {/* PASSWORD */}
            <m.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
            >
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Password
              </label>

              <m.div
                whileFocus={{
                  scale: 1.02,
                }}
                className="flex items-center bg-gray-100 border border-gray-200 rounded-2xl px-4 focus-within:ring-4 focus-within:ring-cyan-200 transition-all duration-300"
              >
                <Lock className="text-gray-400" size={20} />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent p-4 focus:outline-none"
                />
              </m.div>
            </m.div>

            {/* OPTIONS */}
            <m.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="flex items-center justify-between flex-wrap gap-3"
            >
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
            </m.div>

            {/* BUTTON */}
            <m.button
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0px 20px 40px rgba(6,182,212,0.4)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group relative overflow-hidden w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl"
            >

              {/* BUTTON GLOW */}
              <m.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute inset-0 bg-white/20 skew-x-12"
              />

              <span className="relative z-10">
                Login Now
              </span>

              <ArrowRight
                size={22}
                className="relative z-10 group-hover:translate-x-1 transition"
              />
            </m.button>
          </form>

          {/* REGISTER */}
          <m.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
            }}
            className="text-center text-sm text-gray-500 mt-8"
          >
            Don’t have an account?

            <Link
              to="/register"
              className="ml-1 text-cyan-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </m.p>
        </div>
      </m.div>
    </div>
  );
};

export default Login;
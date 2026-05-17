import { Link } from "react-router-dom";
import { m } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  CreditCard,
} from "@/utils/icons";

const Register = () => {
  return (
    <div className="min-h-screen relative overflow-hidden  bg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300 flex items-center justify-center px-4 py-10">

      {/* BACKGROUND GLOW */}
      <m.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute w-125 h-125 bg-blue-300 rounded-full blur-3xl -top-40 -left-40"
      />

      <m.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute w-100 h-100 bg-indigo-300 rounded-full blur-3xl bottom-0 right-0"
      />

      {/* MAIN CONTAINER */}
      <m.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[36px] overflow-hidden shadow-2xl"
      >

        {/* LEFT SIDE */}
        <m.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="hidden lg:flex relative overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] p-10 text-white flex-col justify-between"
        >

          {/* GLOW */}
          <m.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl -top-32 -right-20"
          />

          <div className="relative z-10">

            <m.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center"
            >
              <CreditCard size={40} />
            </m.div>

            <h1 className="text-5xl font-bold leading-tight mt-8">
              Smart Digital Banking
            </h1>

            <p className="text-blue-100 mt-6 text-lg leading-relaxed">
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
              <m.div
                key={index}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: index * 0.4,
                }}
                whileHover={{
                  scale: 1.03,
                  x: 8,
                }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 flex items-center gap-4"
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
              </m.div>
            ))}
          </div>
        </m.div>

        {/* RIGHT SIDE */}
        <m.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="p-6 sm:p-8 md:p-10 lg:p-12"
        >

          {/* MOBILE TOP */}
          <div className="lg:hidden text-center mb-8">

            <m.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mx-auto w-20 h-20 rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl"
            >
              <CreditCard size={38} />
            </m.div>

            <h1 className="text-3xl font-bold text-gray-800 mt-5">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Register to your banking dashboard
            </p>
          </div>

          {/* DESKTOP TITLE */}
          <div className="hidden lg:block mb-8">

            <m.h1
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
              className="text-4xl font-bold text-gray-800"
            >
              Create Account
            </m.h1>

            <p className="text-gray-500 mt-3">
              Start your smart banking journey today
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6">

            {/* NAME */}
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
                delay: 0.1,
              }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <m.div
                whileHover={{
                  y: -2,
                }}
                className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300"
              >
                <User
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-4 bg-transparent focus:outline-none"
                />
              </m.div>
            </m.div>

            {/* EMAIL */}
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
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <m.div
                whileHover={{
                  y: -2,
                }}
                className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300"
              >
                <Mail
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 bg-transparent focus:outline-none"
                />
              </m.div>
            </m.div>

            {/* PASSWORD */}
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
                delay: 0.3,
              }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <m.div
                whileHover={{
                  y: -2,
                }}
                className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300"
              >
                <Lock
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full p-4 bg-transparent focus:outline-none"
                />
              </m.div>
            </m.div>

            {/* CONFIRM PASSWORD */}
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
                delay: 0.4,
              }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>

              <m.div
                whileHover={{
                  y: -2,
                }}
                className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300"
              >
                <Lock
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full p-4 bg-transparent focus:outline-none"
                />
              </m.div>
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
              className="group relative overflow-hidden w-full bg-linear-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl"
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
                Create Account
              </span>

              <ArrowRight
                size={22}
                className="relative z-10 group-hover:translate-x-1 transition"
              />
            </m.button>
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
        </m.div>
      </m.div>
    </div>
  );
};

export default Register;
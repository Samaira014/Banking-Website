import { useState } from "react";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import {
  Mail,
  ArrowRight,
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
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br fbg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

      {/* BACKGROUND GLOW */}
      <m.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute top-[-120px] left-[-120px] w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-blue-400/30 rounded-full blur-3xl"
      />

      <m.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-120px] right-[-120px] w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-cyan-300/30 rounded-full blur-3xl"
      />

      <m.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute top-[40%] left-[35%] w-[250px] h-[250px] bg-indigo-300/20 rounded-full blur-3xl"
      />

      {/* MAIN CARD */}
      <m.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-md sm:max-w-lg"
      >

        <m.div
          whileHover={{
            y: -5,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
          className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-white/20"
        >

          {/* TOP DESIGN */}
          <div className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 px-6 sm:px-8 py-10 text-center overflow-hidden">

            {/* FLOATING ICON */}
            <m.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="mx-auto w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center"
            >
              <KeyRound className="text-white" size={40} />
            </m.div>

            <m.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute top-[-50px] right-[-40px] w-40 h-40 bg-white rounded-full blur-3xl"
            />

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
              <m.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="bg-green-100 border border-green-200 text-green-700 p-4 rounded-2xl mb-6 text-sm flex items-center gap-3"
              >
                <ShieldCheck size={20} />
                {message}
              </m.div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* EMAIL */}
              <m.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-cyan-400 focus-within:border-cyan-400 transition-all duration-300">

                  <Mail className="text-gray-400" size={20} />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent p-4 focus:outline-none text-sm sm:text-base"
                  />
                </div>
              </m.div>

              {/* BUTTON */}
              <m.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                  y: -3,
                  boxShadow: "0px 18px 40px rgba(37,99,235,0.35)",
                }}
                whileTap={{
                  scale: 0.94,
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
                className="group relative overflow-hidden w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-xl transition-all duration-300"
              >

                {/* SHINE EFFECT */}
                <m.div
                  animate={{
                    x: ["-150%", "150%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />

                {/* PULSE EFFECT */}
                <m.div
                  animate={{
                    scale: [1, 1.4, 1.4],
                    opacity: [0.4, 0, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                  }}
                  className="absolute w-20 h-20 rounded-full bg-white/20"
                />

                <span className="relative z-10">
                  Send Reset Link
                </span>

                <m.div
                  whileHover={{
                    x: 6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="relative z-10"
                >
                  <ArrowRight size={20} />
                </m.div>
              </m.button>
            </form>

            {/* LOGIN LINK */}
            <m.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="text-center text-sm text-gray-500 mt-8"
            >
              Remember your password?

              <Link
                to="/login"
                className="text-blue-600 font-semibold ml-2 hover:underline"
              >
                Login
              </Link>
            </m.p>
          </div>
        </m.div>
      </m.div>
    </div>
  );
};

export default ForgotPassword;
import { LogOut, ShieldCheck, ArrowLeft } from "@/utils/icons";
import { m } from "framer-motion";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300 flex items-center justify-center px-4 relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-112.5 h-112.5 bg-violet-600/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-100 h-100 bg-fuchsia-500/20 blur-[140px] rounded-full"></div>

      {/* MAIN CARD */}
      <m.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-lg bg-[#131a2e]/90 border border-white/5 backdrop-blur-2xl rounded-[35px] p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
      >

        {/* TOP SHINE */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-violet-400 to-transparent"></div>

        {/* ICON */}
        <m.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="w-28 h-28 mx-auto rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.5)]"
        >
          <LogOut size={45} className="text-white" />
        </m.div>

        {/* TITLE */}
        <div className="text-center mt-8">

          <h1 className="text-4xl font-bold text-white">
            Logout ?
          </h1>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Are you sure you want to logout from your NeoBank
            account?
          </p>
        </div>

        {/* SECURITY INFO */}
        <m.div
          whileHover={{ scale: 1.02 }}
          className="mt-8 bg-white/5 border border-white/5 rounded-3xl p-5"
        >

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-300">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h3 className="text-white font-semibold">
                Secure Session
              </h3>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Logging out will securely end your session and
                protect your banking information from unauthorized
                access.
              </p>
            </div>
          </div>
        </m.div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          {/* CANCEL BUTTON */}
          <Link to="/settings" className="flex-1">
            <m.button
              whileHover={{
                scale: 1.03,
                backgroundColor: "#1f2937",
              }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} />
              Cancel
            </m.button>
          </Link>

          {/* LOGOUT BUTTON */}
          <m.button
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0px 0px 30px rgba(239,68,68,0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            className="relative overflow-hidden flex-1 py-4 rounded-2xl bg-linear-to-r from-red-500 to-rose-500 text-white font-semibold shadow-xl"
          >

            {/* SHINE EFFECT */}
            <m.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />

            <span className="relative z-10 flex items-center justify-center gap-2">
              <LogOut size={20} />
              Logout Securely
            </span>
          </m.button>
        </div>

        {/* FOOTER */}
        <div className="mt-8 text-center">

          <p className="text-gray-500 text-sm">
            NeoBank Secure Authentication System
          </p>
        </div>
      </m.div>
    </div>
  );
}
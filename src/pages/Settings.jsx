import { useState } from "react";
import { Link } from "react-router-dom";

import {
  User,
  Bell,
  Lock,
  Moon,
  ShieldCheck,
  CreditCard,
  LogOut,
  ChevronRight,
  Camera,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const settingSections = [
    {
      title: "Account",
      items: [
        {
          icon: <User size={20} />,
          name: "Profile Information",
          desc: "Update your personal details",
          link: "/profile",
        },

        {
          icon: <CreditCard size={20} />,
          name: "Payment Methods",
          desc: "Manage your cards & accounts",
          link: "/cards",
        },
      ],
    },

    {
      title: "Preferences",
      items: [
        {
          icon: <Bell size={20} />,
          name: "Push Notifications",
          desc: "Receive banking alerts",
          toggle: true,
          value: notifications,
          action: () => setNotifications(!notifications),
        },

        {
          icon: <Moon size={20} />,
          name: "Dark Mode",
          desc: "Switch app appearance",
          toggle: true,
          value: darkMode,
          action: () => setDarkMode(!darkMode),
        },
      ],
    },

    {
      title: "Security",
      items: [
        {
          icon: <Lock size={20} />,
          name: "Change Password",
          desc: "Update your login password",
          link: "/forgot-password",
        },

        {
          icon: <ShieldCheck size={20} />,
          name: "Two-Factor Authentication",
          desc: "Extra layer of security",
          link: "/security",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1f] p-4 md:p-8 relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-10"
        >

          <div>
            <h1 className="text-5xl font-bold text-white">
              Settings
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Manage your banking profile, security & preferences
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0px 0px 30px rgba(34,211,238,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-0 px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg"
          >
            Save Changes
          </motion.button>
        </motion.div>

        {/* PROFILE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#131a2e]/90 border border-white/5 backdrop-blur-xl rounded-[32px] p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)] mb-8"
        >

          <div className="flex flex-col lg:flex-row items-center gap-8">

            {/* AVATAR */}
            <div className="relative">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-5xl font-bold text-white shadow-2xl"
              >
                S
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-lg"
              >
                <Camera size={18} />
              </motion.button>
            </div>

            {/* USER INFO */}
            <div className="flex-1 text-center lg:text-left">

              <h2 className="text-4xl font-bold text-white">
                Samaira Singh
              </h2>

              <p className="text-gray-400 mt-2 text-lg">
                samaira@email.com
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">

                <div className="bg-blue-500/20 text-cyan-300 px-5 py-2 rounded-xl text-sm font-medium border border-cyan-500/20">
                  Premium Member
                </div>

                <div className="bg-emerald-500/20 text-emerald-300 px-5 py-2 rounded-xl text-sm font-medium border border-emerald-500/20">
                  Verified Account
                </div>
              </div>
            </div>

            {/* BALANCE CARD */}
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="min-w-[280px] rounded-[30px] p-7 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 text-white shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            >

              <p className="text-white/70 text-sm">
                Total Balance
              </p>

              <h3 className="text-4xl font-bold mt-2">
                ₹4,52,800
              </h3>

              <div className="mt-8 flex justify-between">

                <div>
                  <p className="text-white/60 text-xs">
                    ACTIVE CARDS
                  </p>

                  <p className="font-semibold mt-1">
                    3 Cards
                  </p>
                </div>

                <div>
                  <p className="text-white/60 text-xs">
                    STATUS
                  </p>

                  <p className="font-semibold mt-1">
                    Active
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* SETTINGS CARDS */}
        <div className="grid lg:grid-cols-3 gap-6">

          {settingSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#131a2e]/90 border border-white/5 backdrop-blur-xl rounded-[30px] p-6 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >

              {/* TITLE */}
              <h2 className="text-2xl font-semibold text-white mb-7">
                {section.title}
              </h2>

              {/* ITEMS */}
              <div className="space-y-4">

                {section.items.map((item, i) => (

                  item.toggle ? (

                    <motion.div
                      key={i}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor:
                          "rgba(255,255,255,0.04)",
                      }}
                      className="flex items-center justify-between p-4 rounded-2xl transition-all duration-300"
                    >

                      <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-300">
                          {item.icon}
                        </div>

                        <div>
                          <h3 className="text-white font-medium">
                            {item.name}
                          </h3>

                          <p className="text-gray-400 text-sm mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* TOGGLE */}
                      <button
                        onClick={item.action}
                        className={`w-14 h-7 rounded-full flex items-center px-1 transition-all duration-300 ${
                          item.value
                            ? "bg-blue-500 justify-end"
                            : "bg-gray-600 justify-start"
                        }`}
                      >
                        <div className="w-5 h-5 bg-white rounded-full"></div>
                      </button>
                    </motion.div>

                  ) : (

                    <Link to={item.link} key={i}>

                      <motion.div
                        whileHover={{
                          scale: 1.02,
                          backgroundColor:
                            "rgba(255,255,255,0.04)",
                        }}
                        className="flex items-center justify-between p-4 rounded-2xl transition-all duration-300 cursor-pointer"
                      >

                        <div className="flex items-center gap-4">

                          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-300">
                            {item.icon}
                          </div>

                          <div>
                            <h3 className="text-white font-medium">
                              {item.name}
                            </h3>

                            <p className="text-gray-400 text-sm mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        <ChevronRight
                          className="text-gray-500"
                          size={20}
                        />
                      </motion.div>
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECURITY SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/5 rounded-[32px] p-7 backdrop-blur-xl"
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* LEFT */}
            <div>

              <h2 className="text-3xl font-bold text-white">
                Your Account is Protected
              </h2>

              <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
                NeoBank uses enterprise-level encryption,
                biometric authentication and fraud monitoring
                systems to keep your banking information safe 24/7.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-2xl bg-white text-gray-900 font-semibold shadow-lg"
              >
                Security Center
              </motion.button>

              {/* LOGOUT LINK */}
              <Link to="/logout">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#ef4444",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-2xl bg-red-500 text-white font-semibold flex items-center gap-2 shadow-lg"
                >
                  <LogOut size={18} />
                  Logout
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <div className="text-center mt-8">

          <p className="text-gray-500 text-sm">
            NeoBank © 2026 • Secure Digital Banking Experience
          </p>
        </div>
      </div>
    </div>
  );
}
import { m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Building2,
  Lock,
  Fingerprint,
  Edit3,
} from "@/utils/icons";

export default function Profile() {
  const navigate = useNavigate();

  const user = {
    name: "Samaira Singh",
    email: "samaira@email.com",
    phone: "+91 9876543210",
    address: "Gurgaon, Haryana",
    accountNumber: "XXXXXX1234",
    ifsc: "SBIN0001234",
    branch: "Gurgaon Main Branch",
    kycStatus: "Verified",
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.2, 0.12],
            x: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="absolute top-0 -left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">

        {/* PROFILE HEADER */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
          whileHover={{
            y: -4,
          }}
          className="relative overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#2563eb] rounded-[32px] shadow-2xl p-6 md:p-8 text-white"
        >

          {/* ANIMATED CIRCLE */}
          <m.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="absolute w-80 h-80 bg-blue-300 rounded-full blur-3xl -top-32 -right-20"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* LEFT */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">

              {/* PROFILE IMAGE */}
              <m.div
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                }}
                className="w-24 h-24 bg-white/15 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center rounded-full text-4xl font-bold shadow-xl"
              >
                S
              </m.div>

              <div>

                <m.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold"
                >
                  {user.name}
                </m.h2>

                <p className="text-blue-100 mt-1">
                  {user.email}
                </p>

                {/* KYC BADGE */}
                <m.div
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="inline-flex items-center gap-2 mt-4 bg-green-400/20 border border-green-300/20 text-green-100 px-4 py-2 rounded-2xl"
                >
                  <ShieldCheck size={18} />
                  KYC {user.kycStatus}
                </m.div>
              </div>
            </div>

            {/* BUTTON */}
            <m.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => navigate("/edit-profile")}
              className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-blue-50 transition"
            >
              <Edit3 size={18} />
              Edit Profile
            </m.button>
          </div>
        </m.div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="xl:col-span-2 space-y-6">

            {/* PERSONAL INFO */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[32px] shadow-xl p-6 border border-gray-100"
            >

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <User className="text-blue-600" size={22} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Personal Information
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Your personal account details
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <InfoCard
                  icon={<User size={18} />}
                  label="Full Name"
                  value={user.name}
                />

                <InfoCard
                  icon={<Phone size={18} />}
                  label="Phone Number"
                  value={user.phone}
                />

                <InfoCard
                  icon={<Mail size={18} />}
                  label="Email Address"
                  value={user.email}
                />

                <InfoCard
                  icon={<MapPin size={18} />}
                  label="Address"
                  value={user.address}
                />
              </div>
            </m.div>

            {/* ACCOUNT INFO */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
              }}
              className="bg-white rounded-[32px] shadow-xl p-6 border border-gray-100"
            >

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center">
                  <CreditCard className="text-indigo-600" size={22} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Account Information
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Bank account details
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <InfoCard
                  icon={<CreditCard size={18} />}
                  label="Account Number"
                  value={user.accountNumber}
                />

                <InfoCard
                  icon={<Building2 size={18} />}
                  label="IFSC Code"
                  value={user.ifsc}
                />

                <InfoCard
                  icon={<Building2 size={18} />}
                  label="Branch"
                  value={user.branch}
                />
              </div>

              <p className="text-sm text-gray-400 mt-5">
                * These details cannot be edited
              </p>
            </m.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* SECURITY */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
              }}
              whileHover={{
                y: -4,
              }}
              className="bg-white rounded-[32px] shadow-xl p-6 border border-gray-100"
            >

              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Security Settings
              </h3>

              <div className="space-y-4">

                <m.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Lock size={20} />
                    <span className="font-medium">
                      Change Password
                    </span>
                  </div>

                  →
                </m.button>

                <m.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Fingerprint size={20} />
                    <span className="font-medium">
                      Manage 2FA
                    </span>
                  </div>

                  →
                </m.button>
              </div>
            </m.div>

            {/* BANK STATUS */}
            <m.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-[32px] shadow-xl p-6 text-white"
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-green-100 text-sm">
                    Banking Status
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    Active Account
                  </h2>
                </div>

                <ShieldCheck size={40} />
              </div>

              <div className="mt-8 space-y-4">

                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4">
                  Secure Banking Enabled
                </div>

                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4">
                  2-Step Verification Active
                </div>

                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4">
                  Last Login: Today
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* INFO CARD */
function InfoCard({ icon, label, value }) {
  return (
    <m.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-5 transition-all duration-300"
    >

      <div className="flex items-center gap-2 text-gray-500 mb-3">
        {icon}
        <p className="text-sm">{label}</p>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 break-words">
        {value}
      </h3>
    </m.div>
  );
}
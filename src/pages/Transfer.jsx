import { motion } from "framer-motion";
import {
  Send,
  ShieldCheck,
  CreditCard,
  User,
  Building2,
} from "lucide-react";

export default function Transfer() {
  return (
    <div className="min-h-screen bg-[#f4f7fe] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-white rounded-[30px] shadow-lg overflow-hidden"
        >

          {/* HEADER */}
          <div className="bg-linear-to-r from-blue-700 to-indigo-700 p-8 text-white relative">

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute w-72 h-72 bg-white rounded-full -top-32 -right-24"
            />

            <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">

              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Transfer Money
                </h1>

                <p className="text-blue-100 mt-2">
                  Safe & instant bank transfer
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-2"
              >
                <ShieldCheck size={20} />
                <span className="font-medium">
                  Secured
                </span>
              </motion.div>
            </div>
          </div>

          {/* FORM */}
          <div className="p-6 md:p-8">

            {/* BALANCE CARD */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#101828] rounded-[28px] p-6 text-white mb-8"
            >
              <p className="text-gray-400 text-sm">
                Available Balance
              </p>

              <motion.h2
                animate={{
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-4xl font-bold mt-2"
              >
                ₹ 1,24,500
              </motion.h2>

              <div className="flex justify-between mt-8 text-sm text-gray-400">
                <span>Savings Account</span>
                <span>•••• 4521</span>
              </div>
            </motion.div>

            <form className="space-y-6">

              {/* ACCOUNT */}
              <div>
                <label className="text-gray-700 font-semibold block mb-2">
                  Select Account
                </label>

                <select className="w-full bg-[#f8fafc] border border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Savings Account - XXXX4521</option>
                  <option>Current Account - XXXX8712</option>
                </select>
              </div>

              {/* NAME + MOBILE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="text-gray-700 font-semibold block mb-2">
                    Beneficiary Name
                  </label>

                  <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4">
                    <User className="text-gray-400" size={20} />

                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="w-full p-4 bg-transparent focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-700 font-semibold block mb-2">
                    Account Number
                  </label>

                  <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4">
                    <CreditCard className="text-gray-400" size={20} />

                    <input
                      type="text"
                      placeholder="XXXX XXXX XXXX"
                      className="w-full p-4 bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* IFSC + AMOUNT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="text-gray-700 font-semibold block mb-2">
                    IFSC Code
                  </label>

                  <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4">
                    <Building2 className="text-gray-400" size={20} />

                    <input
                      type="text"
                      placeholder="SBIN0004521"
                      className="w-full p-4 bg-transparent focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-700 font-semibold block mb-2">
                    Amount
                  </label>

                  <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="bg-blue-600 text-white px-5 py-4 font-bold">
                      ₹
                    </div>

                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full p-4 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* REMARK */}
              <div>
                <label className="text-gray-700 font-semibold block mb-2">
                  Remark
                </label>

                <textarea
                  rows="4"
                  placeholder="Add note"
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex-1 bg-linear-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={20} />
                  Transfer Now
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-2xl font-semibold"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >

          {/* QUICK TRANSFER */}
          <div className="bg-white rounded-[30px] shadow-lg p-6">

            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Quick Transfer
            </h2>

            <div className="space-y-4">

              {[
                {
                  name: "Rahul Sharma",
                  bank: "HDFC Bank",
                },
                {
                  name: "Priya Verma",
                  bank: "ICICI Bank",
                },
                {
                  name: "Aman Gupta",
                  bank: "SBI Bank",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -3,
                  }}
                  className="flex items-center justify-between bg-[#f8fafc] p-4 rounded-2xl"
                >

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.bank}
                      </p>
                    </div>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl">
                    Send
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SECURITY CARD */}
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="bg-linear-to-r from-green-500 to-emerald-600 rounded-[30px] p-6 text-white shadow-lg"
          >
            <h2 className="text-2xl font-bold">
              Secure Banking
            </h2>

            <div className="space-y-4 mt-5">

              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-md">
                Never share your OTP with anyone.
              </div>

              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-md">
                Always verify beneficiary details.
              </div>

              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-md">
                Enable 2-factor authentication.
              </div>
            </div>
          </motion.div>

          {/* STATUS CARD */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="bg-white rounded-[30px] shadow-lg p-6"
          >
            <p className="text-gray-500 text-sm">
              Transaction Speed
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Instant Transfer ⚡
            </h2>

            <p className="text-gray-500 mt-3">
              Money gets transferred within seconds.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
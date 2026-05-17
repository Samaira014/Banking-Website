import { m } from "framer-motion";
import {
  Search,
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
  Filter,
  TrendingUp,
} from "@/utils/icons";

export default function Transactions() {
  const transactions = [
    {
      id: 1,
      name: "Amazon Shopping",
      type: "Debit",
      amount: "- ₹4,500",
      date: "09 May 2026",
      status: "Completed",
      icon: <ArrowUpRight size={20} />,
      color: "bg-red-100 text-red-600",
    },
    {
      id: 2,
      name: "Salary Credit",
      type: "Credit",
      amount: "+ ₹85,000",
      date: "08 May 2026",
      status: "Completed",
      icon: <ArrowDownLeft size={20} />,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      name: "Netflix Subscription",
      type: "Debit",
      amount: "- ₹799",
      date: "07 May 2026",
      status: "Pending",
      icon: <ArrowUpRight size={20} />,
      color: "bg-red-100 text-red-600",
    },
    {
      id: 4,
      name: "Electricity Bill",
      type: "Debit",
      amount: "- ₹2,300",
      date: "06 May 2026",
      status: "Completed",
      icon: <ArrowUpRight size={20} />,
      color: "bg-red-100 text-red-600",
    },
    {
      id: 5,
      name: "UPI Received",
      type: "Credit",
      amount: "+ ₹12,000",
      date: "05 May 2026",
      status: "Completed",
      icon: <ArrowDownLeft size={20} />,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="min-h-screen  bg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300 overflow-hidden">

      {/* MAIN */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* BALANCE CARD */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.3,
              },
            }}
            className="lg:col-span-2 relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] p-8 shadow-2xl"
          >

            {/* Animated Glow */}
            <m.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.35, 0.2],
                x: [0, 20, 0],
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              }}
              className="absolute w-[420px] h-[420px] bg-blue-400 rounded-full blur-3xl -top-40 -right-20"
            />

            <m.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="absolute w-60 h-60 border border-white/10 rounded-full -bottom-20 -left-20"
            />

            <div className="relative z-10">

              <div className="flex items-start justify-between flex-wrap gap-4">

                <div>
                  <m.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-blue-100 text-sm tracking-widest uppercase"
                  >
                    Total Balance
                  </m.p>

                  <m.h1
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="text-5xl md:text-6xl font-bold text-white mt-3"
                  >
                    ₹1,24,500
                  </m.h1>
                </div>

                <m.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-3 rounded-2xl"
                >
                  <p className="text-blue-100 text-sm">
                    Card Number
                  </p>

                  <h3 className="text-white font-semibold mt-1">
                    •••• 4521
                  </h3>
                </m.div>
              </div>

              {/* BOTTOM */}
              <div className="flex flex-wrap items-center justify-between mt-12 gap-6">

                <m.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-blue-100 text-sm">
                    Account Holder
                  </p>

                  <h3 className="text-white text-2xl font-semibold mt-1">
                    Samaira Singh
                  </h3>
                </m.div>

                <div className="flex gap-4 flex-wrap">

                  <m.div
                    whileHover={{
                      scale: 1.06,
                    }}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-3 rounded-2xl"
                  >
                    <p className="text-blue-100 text-sm">
                      Income
                    </p>

                    <h3 className="text-green-300 text-xl font-bold mt-1">
                      + ₹97K
                    </h3>
                  </m.div>

                  <m.div
                    whileHover={{
                      scale: 1.06,
                    }}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-3 rounded-2xl"
                  >
                    <p className="text-blue-100 text-sm">
                      Expense
                    </p>

                    <h3 className="text-red-300 text-xl font-bold mt-1">
                      - ₹18K
                    </h3>
                  </m.div>
                </div>
              </div>
            </div>
          </m.div>

          {/* ANALYTICS CARD */}
          <m.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              y: -8,
            }}
            className="bg-white rounded-[32px] p-6 shadow-xl border border-gray-100"
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-gray-500 text-sm">
                  Monthly Spending
                </p>

                <m.h2
                  animate={{
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                  }}
                  className="text-4xl font-bold text-gray-800 mt-2"
                >
                  ₹18,000
                </m.h2>
              </div>

              <m.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center"
              >
                <Wallet className="text-blue-600" size={30} />
              </m.div>
            </div>

            {/* PROGRESS */}
            <div className="mt-8">

              <div className="flex justify-between mb-2 text-sm">
                <span className="text-gray-500">
                  Spending Limit
                </span>

                <span className="font-semibold text-gray-700">
                  72%
                </span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">

                <m.div
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                  }}
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                />
              </div>
            </div>

            {/* MINI STATS */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <m.div
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-gray-50 rounded-2xl p-4"
              >
                <p className="text-gray-500 text-sm">
                  Savings
                </p>

                <h3 className="text-xl font-bold text-green-600 mt-1">
                  ₹45K
                </h3>
              </m.div>

              <m.div
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-gray-50 rounded-2xl p-4"
              >
                <p className="text-gray-500 text-sm">
                  Cashback
                </p>

                <h3 className="text-xl font-bold text-orange-500 mt-1">
                  ₹1.2K
                </h3>
              </m.div>
            </div>

            {/* EXTRA CARD */}
            <m.div
              whileHover={{
                x: 5,
              }}
              className="mt-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-4 flex items-center gap-4"
            >
              <m.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center"
              >
                <TrendingUp size={24} />
              </m.div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Financial Growth
                </h3>

                <p className="text-sm text-gray-500">
                  Your savings increased by 18%
                </p>
              </div>
            </m.div>
          </m.div>
        </div>

        {/* TRANSACTION SECTION */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
          className="bg-white rounded-[32px] shadow-xl p-5 sm:p-6 border border-gray-100"
        >

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

            <div>
              <m.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-gray-800"
              >
                Transaction History
              </m.h2>

              <p className="text-gray-500 mt-2">
                Track all your recent banking activities
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              {/* SEARCH */}
              <m.div
                whileFocus={{ scale: 1.02 }}
                className="flex items-center bg-gray-100 rounded-2xl px-4"
              >
                <Search size={20} className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Search transaction"
                  className="bg-transparent p-3 focus:outline-none"
                />
              </m.div>

              {/* FILTER */}
              <m.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-gray-100 hover:bg-gray-200 transition px-5 py-3 rounded-2xl flex items-center justify-center gap-2 font-medium"
              >
                <Filter size={18} />
                Filter
              </m.button>
            </div>
          </div>

          {/* TABLE HEADER */}
          <div className="hidden md:grid grid-cols-5 bg-gray-100 p-4 rounded-2xl text-gray-600 font-semibold text-sm">
            <div>Transaction</div>
            <div>Date</div>
            <div>Type</div>
            <div>Status</div>
            <div className="text-right">Amount</div>
          </div>

          {/* TRANSACTION LIST */}
          <div className="space-y-4 mt-4">

            {transactions.map((item, index) => (
              <m.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="group relative overflow-hidden grid grid-cols-1 md:grid-cols-5 gap-4 items-center bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300"
              >

                {/* HOVER BG */}
                <m.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{
                    duration: 1,
                  }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent"
                />

                {/* SIDE LINE */}
                <m.div
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  className={`absolute left-0 top-0 w-1 rounded-full ${
                    item.type === "Credit"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />

                {/* NAME */}
                <div className="relative z-10 flex items-center gap-4">

                  <m.div
                    whileHover={{
                      rotate: item.type === "Credit" ? -8 : 8,
                      scale: 1.12,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${item.color}`}
                  >
                    {item.icon}
                  </m.div>

                  <div>
                    <h3 className="font-semibold text-gray-800 text-[15px]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Banking Transaction
                    </p>
                  </div>
                </div>

                {/* DATE */}
                <div className="relative z-10">
                  <span className="text-gray-700 font-medium">
                    {item.date}
                  </span>
                </div>

                {/* TYPE */}
                <div className="relative z-10">
                  <m.span
                    whileHover={{
                      scale: 1.08,
                    }}
                    className={`inline-flex px-4 py-2 rounded-2xl text-sm font-semibold ${
                      item.type === "Credit"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.type}
                  </m.span>
                </div>

                {/* STATUS */}
                <div className="relative z-10">

                  <m.span
                    animate={
                      item.status === "Pending"
                        ? {
                            opacity: [1, 0.5, 1],
                            scale: [1, 1.03, 1],
                          }
                        : {}
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                    }}
                    className={`inline-flex px-4 py-2 rounded-2xl text-sm font-semibold ${
                      item.status === "Completed"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </m.span>
                </div>

                {/* AMOUNT */}
                <m.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className={`relative z-10 text-left md:text-right text-2xl font-bold ${
                    item.type === "Credit"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.amount}
                </m.div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </div>
  );
}
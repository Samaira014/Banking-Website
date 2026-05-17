import { useState } from "react";
import { m } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  CreditCard,
  ShieldCheck,
  Bell,
  MoreHorizontal,
  Send,
  Smartphone,
  Receipt,
  TrendingUp,
  Eye,
  EyeOff,
  Search,
  Wallet as WalletIcon,
} from "@/utils/icons";

const transactions = [
  {
    id: 1,
    title: "Netflix Subscription",
    date: "Today • 09:20 AM",
    amount: "-₹649",
    status: "Debited",
  },
  {
    id: 2,
    title: "Salary Credited",
    date: "Yesterday • 10:45 PM",
    amount: "+₹45,000",
    status: "Credited",
  },
  {
    id: 3,
    title: "Amazon Shopping",
    date: "Yesterday • 04:12 PM",
    amount: "-₹2,499",
    status: "Debited",
  },
  {
    id: 4,
    title: "UPI Transfer",
    date: "12 May • 02:15 PM",
    amount: "-₹850",
    status: "Debited",
  },
];

const quickActions = [
  {
    icon: Send,
    title: "Send",
  },
  {
    icon: Smartphone,
    title: "Recharge",
  },
  {
    icon: Receipt,
    title: "Bills",
  },
  {
    icon: Plus,
    title: "Add Money",
  },
];

export default function Wallet() {
  // Premium Banking Wallet Dashboard with real banking style features
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="min-h-screen  bg-gray-100 dark:bg-zinc-900 dark:text-white transition-all duration-300 text-white overflow-hidden relative">
      {/* Optimized Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-70 h-70 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-65 h-65 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-slate-400 text-sm">Good Evening 👋</p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-1 tracking-tight">
              My Wallet
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-55 sm:min-w-70">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search transactions"
                className="w-full h-12 rounded-2xl bg-white/5 border border-white/10 pl-11 pr-4 outline-none focus:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm"
              />
            </div>

            <button className="relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-400" />
            </button>
          </div>
        </m.div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-[1.45fr_0.85fr] gap-7 mt-8">
          {/* Left Side */}
          <div className="space-y-7">
            {/* Wallet Card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[34px] p-6 sm:p-8 bg-linear-to-br from-cyan-500 via-blue-600 to-indigo-700 shadow-2xl border border-white/10"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-white/70 text-sm tracking-wide">
                      Available Balance
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                        {showBalance ? "₹1,28,450" : "••••••"}
                      </h2>

                      <button
                        onClick={() => setShowBalance(!showBalance)}
                        className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                      >
                        {showBalance ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                    <WalletIcon size={28} />
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between gap-5 flex-wrap">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-[3px]">
                      Card Number
                    </p>

                    <h3 className="mt-2 tracking-[4px] font-medium text-lg">
                      •••• •••• •••• 4589
                    </h3>
                  </div>

                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-[3px]">
                      Expiry
                    </p>

                    <h3 className="mt-2 font-medium text-lg">12/28</h3>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <ShieldCheck size={16} />
                    Secure Wallet
                  </div>

                  <button className="h-11 px-5 rounded-2xl bg-white text-slate-900 font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg">
                    Upgrade
                  </button>
                </div>
              </div>
            </m.div>

            {/* Quick Actions */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-4xl bg-white/5 border border-white/10 backdrop-blur-sm p-5 sm:p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Quick Actions</h2>

                <button className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/15 transition-all duration-300">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;

                  return (
                    <m.button
                      key={index}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="group rounded-3xl bg-white/4 border border-white/10 p-5 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mx-auto group-hover:scale-105 transition-all duration-300">
                        <Icon size={24} className="text-cyan-300" />
                      </div>

                      <h3 className="mt-4 font-medium text-sm sm:text-base">
                        {action.title}
                      </h3>
                    </m.button>
                  );
                })}
              </div>
            </m.div>

            {/* Transactions */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-4xl bg-white/5 border border-white/10 backdrop-blur-sm p-5 sm:p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    Recent Transactions
                  </h2>

                  <p className="text-slate-400 text-sm mt-1">
                    Your latest wallet activity
                  </p>
                </div>

                <button className="text-cyan-300 text-sm font-medium hover:text-cyan-200 transition-all duration-300">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {transactions.map((item, index) => (
                  <m.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -2 }}
                    className="flex items-center justify-between p-4 rounded-3xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          item.status === "Credited"
                            ? "bg-green-500/15"
                            : "bg-red-500/15"
                        }`}
                      >
                        {item.status === "Credited" ? (
                          <ArrowDownLeft className="text-green-400" />
                        ) : (
                          <CreditCard className="text-red-400" />
                        )}
                      </div>

                      <div>
                        <h3 className="font-medium text-sm sm:text-base">
                          {item.title}
                        </h3>

                        <p className="text-sm text-slate-400 mt-1">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <h3
                        className={`font-semibold text-sm sm:text-base ${
                          item.status === "Credited"
                            ? "text-green-400"
                            : "text-white"
                        }`}
                      >
                        {item.amount}
                      </h3>

                      <p className="text-xs text-slate-500 mt-1">
                        {item.status}
                      </p>
                    </div>
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>

          {/* Right Side */}
          <div className="space-y-7">
            {/* Stats */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-4xl bg-white/5 border border-white/10 backdrop-blur-sm p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Income</p>
                  <h2 className="text-3xl font-bold mt-2">₹82,300</h2>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-green-500/15 flex items-center justify-center">
                  <ArrowDownLeft className="text-green-400" />
                </div>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Expenses</p>
                  <h2 className="text-3xl font-bold mt-2">₹27,580</h2>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-red-500/15 flex items-center justify-center">
                  <ArrowUpRight className="text-red-400" />
                </div>
              </div>
            </m.div>

            {/* Analytics */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-4xl bg-linear-to-br from-emerald-500/15 to-cyan-500/10 border border-white/10 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Savings Growth</p>
                  <h2 className="text-4xl font-bold mt-2">+18%</h2>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <TrendingUp className="text-green-400" size={28} />
                </div>
              </div>

              <div className="mt-6 w-full h-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  style={{ width: "72%" }}
                  className="h-full rounded-full bg-linear-to-r from-cyan-400 to-emerald-400"
                />
              </div>

              <div className="flex items-center justify-between mt-3 text-sm text-slate-300">
                <span>Monthly Goal</span>
                <span>72%</span>
              </div>
            </m.div>

            {/* Premium Card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="relative overflow-hidden rounded-4xl bg-linear-to-br from-[#131c31] to-[#172554] border border-white/10 p-6"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <p className="text-cyan-300 font-medium">
                  Premium Banking
                </p>

                <h2 className="text-2xl font-bold mt-3 leading-snug">
                  Upgrade your wallet for premium rewards.
                </h2>

                <button className="mt-6 h-12 px-6 rounded-2xl bg-white text-slate-900 font-semibold hover:scale-[1.02] transition-all duration-300">
                  Upgrade Now
                </button>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
}

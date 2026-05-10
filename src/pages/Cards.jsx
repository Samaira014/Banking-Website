import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CreditCard,
  Wifi,
  TrendingUp,
  Wallet,
  Gift,
  Send,
  Receipt,
  Shield,
  Plus,
  Eye,
  Bell,
  ArrowUpRight,
  ArrowDownLeft,
  MoreHorizontal,
} from "lucide-react";

/* ---------------- CARD ITEM ---------------- */

function CardItems({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[32px] p-7 min-h-[250px]
      bg-gradient-to-br ${card.color}
      border border-white/10
      shadow-[0_20px_80px_rgba(0,0,0,0.45)]`}
    >
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-white/70 text-sm">Current Balance</p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white mt-2"
            >
              {card.balance}
            </motion.h2>
          </div>

          <div className="flex items-center gap-2">
            <Wifi
              className="text-white/70 rotate-90"
              size={18}
            />

            <CreditCard
              className="text-white"
              size={32}
            />
          </div>
        </div>

        <div className="mt-10">
          <p className="tracking-[6px] text-white/80 text-lg">
            {card.number}
          </p>
        </div>

        <div className="flex justify-between items-end mt-10">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest">
              Card Type
            </p>

            <h3 className="text-white font-semibold mt-1">
              {card.title}
            </h3>
          </div>

          <motion.button
            whileHover={{
              scale: 1.08,
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
            px-5 py-2 rounded-2xl
            bg-white/10 backdrop-blur-md
            border border-white/10
            text-white text-sm
            transition-all duration-300
            "
          >
            Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- STAT CARD ---------------- */

function StatCard({
  title,
  value,
  icon,
  progress,
  color,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[30px] p-6
      ${color}
      border border-white/10
      shadow-[0_10px_40px_rgba(0,0,0,0.25)]`}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-3xl rounded-full" />

      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-slate-300 text-sm">
              {title}
            </p>

            <h2 className="text-4xl font-bold text-white mt-3">
              {value}
            </h2>
          </div>

          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-cyan-300"
          >
            {icon}
          </motion.div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- QUICK ACTIONS ---------------- */

function QuickAction({
  icon,
  title,
  subtitle,
  gradient,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={`
      relative overflow-hidden
      rounded-[28px]
      p-5
      cursor-pointer
      border border-white/10
      bg-gradient-to-br ${gradient}
      shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      `}
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 blur-3xl rounded-full" />

      {/* Arrow */}
      <motion.div
        whileHover={{ x: 4 }}
        className="absolute top-5 right-5 text-white/40"
      >
        →
      </motion.div>

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
          w-16 h-16
          rounded-2xl
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          flex items-center justify-center
          text-cyan-300
          "
        >
          {icon}
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-white text-xl font-semibold">
            {title}
          </h3>

          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- TRANSACTION ITEM ---------------- */

function TransactionItem({ item }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10"
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
            item.type === "income"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {item.type === "income" ? (
            <ArrowDownLeft size={20} />
          ) : (
            <ArrowUpRight size={20} />
          )}
        </div>

        <div>
          <h3 className="text-white font-medium">
            {item.title}
          </h3>

          <p className="text-slate-400 text-sm">
            {item.date}
          </p>
        </div>
      </div>

      <div>
        <h3
          className={`font-semibold ${
            item.type === "income"
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {item.amount}
        </h3>
      </div>
    </motion.div>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function Cards() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Visa Platinum",
      number: "**** **** **** 4587",
      balance: "₹1,25,000",
      color:
        "from-[#141e30] via-[#243b55] to-[#0f172a]",
    },
    {
      id: 2,
      title: "MasterCard Gold",
      number: "**** **** **** 9821",
      balance: "₹84,500",
      color:
        "from-[#1e3c72] via-[#2a5298] to-[#2563eb]",
    },
    {
      id: 3,
      title: "Business Card",
      number: "**** **** **** 1147",
      balance: "₹2,48,000",
      color:
        "from-[#232526] via-[#414345] to-[#1f2937]",
    },
  ];

  const transactions = [
    {
      id: 1,
      title: "Netflix Subscription",
      amount: "-₹799",
      date: "Today",
      type: "expense",
    },
    {
      id: 2,
      title: "Salary Credit",
      amount: "+₹45,000",
      date: "Yesterday",
      type: "income",
    },
    {
      id: 3,
      title: "Amazon Refund",
      amount: "+₹1,200",
      date: "2 Days Ago",
      type: "income",
    },
    {
      id: 4,
      title: "Electricity Bill",
      amount: "-₹2,450",
      date: "3 Days Ago",
      type: "expense",
    },
  ];

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#050816]
      via-[#09111f]
      to-[#02050f]
      text-white
      px-5 md:px-10
      py-10
      overflow-hidden
      "
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div>
            <h1 className="text-5xl font-bold">
              Banking Dashboard
            </h1>

            <p className="text-slate-400 mt-3 text-lg">
              Manage your cards, savings & transactions
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Bell size={22} />
            </button>

            <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Eye size={22} />
            </button>

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => navigate("/add-card")}
              className="
              relative overflow-hidden
              bg-gradient-to-r from-blue-600 to-indigo-600
              hover:from-blue-500 hover:to-indigo-500
              px-8 py-4 rounded-2xl
              font-semibold text-white
              shadow-[0_10px_30px_rgba(37,99,235,0.45)]
              transition-all duration-300
              "
            >
              + Add New Card
            </motion.button>
          </div>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-14">
          {cards.map((card, index) => (
            <CardItems
              key={card.id}
              card={card}
              index={index}
            />
          ))}
        </div>

        {/* Quick Actions */}

        <div className="mt-16">
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-3xl font-bold">
              Quick Actions
            </h2>

            <button className="text-slate-400 hover:text-white transition">
              <MoreHorizontal />
            </button>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            
            <QuickAction
              title="Transfer"
              subtitle="Send money instantly to any bank account"
              icon={<Send size={28} />}
              gradient="from-[#16213e] to-[#1f4068]"
            />

            <QuickAction
              title="Pay Bills"
              subtitle="Electricity, recharge and utility payments"
              icon={<Receipt size={28} />}
              gradient="from-[#112d32] to-[#1b4d57]"
            />

            <QuickAction
              title="Freeze Card"
              subtitle="Temporarily disable your card for security"
              icon={<Shield size={28} />}
              gradient="from-[#2d1b3d] to-[#43205a]"
            />

            <QuickAction
              title="Top Up"
              subtitle="Add money quickly into your wallet"
              icon={<Plus size={28} />}
              gradient="from-[#2b1d0e] to-[#5c3b14]"
            />
          </div>
        </div>

        {/* Stats */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
          <StatCard
            title="Monthly Spending"
            value="₹24,500"
            progress={65}
            icon={<TrendingUp size={32} />}
            color="bg-gradient-to-br from-[#131c31] to-[#1f2a48]"
          />

          <StatCard
            title="Savings"
            value="₹4,80,000"
            progress={82}
            icon={<Wallet size={32} />}
            color="bg-gradient-to-br from-[#10242b] to-[#173b46]"
          />

          <StatCard
            title="Cashback"
            value="₹8,450"
            progress={48}
            icon={<Gift size={32} />}
            color="bg-gradient-to-br from-[#2a173b] to-[#3b1f59]"
          />
        </div>

        {/* Transactions */}

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[32px] p-7 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">
                Recent Transactions
              </h2>

              <button className="text-cyan-400 hover:text-cyan-300 transition">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {transactions.map((item) => (
                <TransactionItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* Savings Goal */}

          <div className="bg-gradient-to-br from-[#131c31] to-[#1b2745] rounded-[32px] p-7 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">
                  Savings Goal
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  MacBook Pro
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                <Wallet />
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="relative w-44 h-44 rounded-full border-[14px] border-cyan-500/20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[14px] border-transparent border-t-cyan-400 border-r-blue-500 rotate-45" />

                <div className="text-center">
                  <h2 className="text-4xl font-bold">
                    68%
                  </h2>

                  <p className="text-slate-400 mt-2 text-sm">
                    Completed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex justify-between text-slate-300">
                <span>Saved</span>
                <span>₹85,000</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Target</span>
                <span>₹1,50,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  Bell,
  Eye,
  EyeOff,
  Send,
  Receipt,
  Shield,
  Wallet,
  CreditCard,
  TrendingUp,
  ArrowDownLeft,
  ArrowUpRight,
  Search,
  Wifi,
  Moon,
  Sun,
  Check,
  QrCode,
} from "lucide-react";

const cardsData = [
  {
    id: 1,
    type: "Visa Infinite",
    number: "4587",
    holder: "Samaira Singh",
    balance: 245600,
    color:
      "from-[#111827] via-[#172554] to-[#0f172a]",
  },
  {
    id: 2,
    type: "MasterCard Gold",
    number: "9821",
    holder: "Samaira Singh",
    balance: 84500,
    color:
      "from-[#1e1b4b] via-[#312e81] to-[#0f172a]",
  },
];

const transactionsData = [
  {
    id: 1,
    title: "Netflix Subscription",
    amount: -799,
    date: "Today",
    category: "Entertainment",
  },
  {
    id: 2,
    title: "Salary Credit",
    amount: 45000,
    date: "Yesterday",
    category: "Income",
  },
  {
    id: 3,
    title: "Amazon Refund",
    amount: 1200,
    date: "2 Days Ago",
    category: "Shopping",
  },
  {
    id: 4,
    title: "Electricity Bill",
    amount: -2450,
    date: "3 Days Ago",
    category: "Utilities",
  },
  {
    id: 5,
    title: "Spotify Premium",
    amount: -199,
    date: "4 Days Ago",
    category: "Entertainment",
  },
];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function Card({ card, active, onClick, hidden, frozen }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 220 }}
      onClick={onClick}
      className={`
      relative overflow-hidden cursor-pointer
      rounded-[36px] p-7 min-h-[260px]
      bg-gradient-to-br ${card.color}
      border ${active ? "border-cyan-400/40" : "border-white/10"}
      shadow-[0_25px_80px_rgba(0,0,0,0.45)]
      backdrop-blur-3xl
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5" />

      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-40 h-full bg-white/10 blur-2xl rotate-12"
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-white/60 text-sm tracking-wide">
              Current Balance
            </p>

            <h2 className="text-4xl font-bold text-white mt-3">
              {hidden ? "••••••" : formatCurrency(card.balance)}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-9 rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-inner" />

            <Wifi
              size={20}
              className="rotate-90 text-white/70"
            />
          </div>
        </div>

        <div>
          <p className="tracking-[6px] text-lg text-white/80">
            •••• •••• •••• {card.number}
          </p>

          <div className="flex justify-between items-end mt-8">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-[4px]">
                Card Holder
              </p>

              <h3 className="text-white mt-2 font-semibold text-lg">
                {card.holder}
              </h3>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-red-500/90" />
              <div className="w-8 h-8 rounded-full bg-yellow-400/90 -ml-3" />
            </div>
          </div>
        </div>
      </div>

      {frozen && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="px-5 py-2 rounded-2xl bg-red-500/20 border border-red-500/30 text-red-300 font-semibold">
            Card Frozen
          </div>
        </div>
      )}
    </motion.div>
  );
}

function ActionCard({ icon, title, subtitle, color, onClick, }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 220 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-[30px] bg-white/5 border border-white/10 p-6 backdrop-blur-2xl hover:border-cyan-400/30 transition-all duration-500"
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${color}`}
      />

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-300">
          {icon}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="text-slate-400 mt-2 text-sm leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Transaction({ item }) {
  const income = item.amount > 0;

  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10"
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
            income
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {income ? (
            <ArrowDownLeft size={20} />
          ) : (
            <ArrowUpRight size={20} />
          )}
        </div>

        <div>
          <h3 className="text-white font-medium">
            {item.title}
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            {item.date}
          </p>
        </div>
      </div>

      <div className="text-right">
        <h3
          className={`font-semibold ${
            income ? "text-green-400" : "text-red-400"
          }`}
        >
          {income ? "+" : "-"}
          {formatCurrency(Math.abs(item.amount))}
        </h3>

        <p className="text-xs text-slate-500 mt-1">
          {item.category}
        </p>
      </div>
    </motion.div>
  );
}

export default function BankingDashboard() {
  const [activeCard, setActiveCard] = useState(1);
  const [showBalance, setShowBalance] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [frozenCards, setFrozenCards] = useState([]);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const toggleFreeze = () => {
    setFrozenCards((prev) =>
      prev.includes(activeCard)
        ? prev.filter((id) => id !== activeCard)
        : [...prev, activeCard]
    );
  };

  const filteredTransactions = useMemo(() => {
    if (filter === "income") {
      return transactionsData.filter((t) => t.amount > 0);
    }

    if (filter === "expense") {
      return transactionsData.filter((t) => t.amount < 0);
    }

    return transactionsData;
  }, [filter]);

  return (
    <div
      className={`min-h-screen overflow-hidden relative transition-all duration-500 ${
        darkMode
          ? "bg-[#050816] text-white"
          : "bg-[#f4f7fb] text-slate-900"
      }`}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] animate-pulse rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] animate-pulse rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
        >
          <div>
                <h2 className="text-3xl font-bold">
                  My Cards
                </h2>

                <p className="text-slate-400 mt-2">
                  Manage your banking cards and limits
                </p>
              </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                placeholder="Search transactions"
                className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 h-14 outline-none backdrop-blur-xl w-[280px]"
              />
            </div>

            <button className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
              <Bell size={22} />

              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
            </button>

            <button
              onClick={() => setShowBalance(!showBalance)}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl"
            >
              {showBalance ? (
                <Eye size={22} />
              ) : (
                <EyeOff size={22} />
              )}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <Link to="/add-card">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="h-14 px-7 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_10px_30px_rgba(6,182,212,0.45)]"
            >
              + Add Card
            </motion.button>
            </Link>
          </div>
        </motion.div>

        <div className="grid xl:grid-cols-[1.5fr_0.9fr] gap-8 mt-14">
          <div>
            

            <div className="grid md:grid-cols-2 gap-7">
              {cardsData.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  active={activeCard === card.id}
                  hidden={!showBalance}
                  frozen={frozenCards.includes(card.id)}
                  onClick={() => setActiveCard(card.id)}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-8">
              <ActionCard
                title="Transfer"
                subtitle="Send money instantly"
                icon={<Send size={28} />}
                color="from-cyan-500/10 to-blue-500/10"
                onClick={() => navigate("/transfer")}
              />

              <ActionCard
                title="Bills"
                subtitle="Pay utility bills"
                icon={<Receipt size={28} />}
                color="from-green-500/10 to-emerald-500/10"
                onClick={() => navigate("/bills")}
              />

              <ActionCard
                title="Scan & Pay"
                subtitle="Pay using QR"
                icon={<QrCode size={28} />}
                color="from-purple-500/10 to-pink-500/10"
                onClick={() => navigate("/scan")}
              />

              <ActionCard
                title="Freeze"
                subtitle="Protect your card"
                icon={<Shield size={28} />}
                color="from-red-500/10 to-pink-500/10"
                onClick={toggleFreeze}
              />

              <ActionCard
                title="Wallet"
                subtitle="Add money instantly"
                icon={<Wallet size={28} />}
                color="from-yellow-500/10 to-orange-500/10"
                onClick={() => navigate("/wallet")}
              />
            </div>
          </div>

          <div className="rounded-[36px] bg-white/5 border border-white/10 p-7 backdrop-blur-3xl h-fit">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">
                  Total Balance
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  {showBalance
                    ? formatCurrency(485600)
                    : "••••••"}
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                <TrendingUp size={30} />
              </div>
            </div>

            <div className="mt-10 space-y-5">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-400">
                    Savings Goal
                  </span>

                  <span className="text-cyan-400">
                    68%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "68%" }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                    <Check />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      AI Insight
                    </h3>

                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      You spent 18% more on entertainment this month compared to last month.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={toggleFreeze}
                className={`w-full h-14 rounded-2xl font-semibold transition-all duration-300 ${
                  frozenCards.includes(activeCard)
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "bg-red-500/20 text-red-300 border border-red-500/30"
                }`}
              >
                {frozenCards.includes(activeCard)
                  ? "Unfreeze Card"
                  : "Freeze Card"}
              </button>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-[1.4fr_0.8fr] gap-8 mt-16">
          <div className="rounded-[36px] bg-white/5 border border-white/10 p-7 backdrop-blur-3xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
              <div>
                <h2 className="text-3xl font-bold">
                  Recent Transactions
                </h2>

                <p className="text-slate-400 mt-2">
                  Your latest account activity
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-2 w-fit">
                {[
                  "all",
                  "income",
                  "expense",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`px-5 py-2 rounded-xl capitalize transition-all duration-300 ${
                      filter === item
                        ? "bg-cyan-500 text-white"
                        : "text-slate-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredTransactions.map((item) => (
                <Transaction
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </div>

          <div className="space-y-7">
            <div className="rounded-[36px] bg-white/5 border border-white/10 p-7 backdrop-blur-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">
                    Monthly Spending
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    ₹24,500
                  </h2>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <CreditCard />
                </div>
              </div>

              <div className="mt-10 flex items-end justify-between gap-3 h-44">
                {[40, 70, 55, 90, 60, 80, 45].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: index * 0.1 }}
                      className="flex-1 rounded-t-3xl bg-gradient-to-t from-cyan-500 to-blue-500"
                    />
                  )
                )}
              </div>
            </div>

            <div className="rounded-[36px] bg-gradient-to-br from-[#131c31] to-[#172554] border border-white/10 p-7 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative z-10">
                <p className="text-cyan-300 font-medium">
                  Premium Banking
                </p>

                <h2 className="text-3xl font-bold mt-3 leading-tight">
                  Upgrade your card for airport lounge access.
                </h2>

                <button className="mt-8 h-14 px-7 rounded-2xl bg-white text-slate-900 font-semibold hover:scale-105 transition-all duration-300">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

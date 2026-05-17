
import { useMemo, useState} from "react";
import { m } from "framer-motion";
import {
  Zap,
  Wifi,
  Tv,
  Smartphone,
  Droplets,
  CreditCard,
  CheckCircle2,
  Search,
  Bell,
  ArrowUpRight,
  TrendingUp,
  CalendarDays,
  Wallet,
  Eye,
  EyeOff,
} from "@/utils/icons";

const billsData = [
  {
    id: 1,
    title: "Electricity",
    company: "BSES Rajdhani",
    amount: 2450,
    due: "12 May 2026",
    icon: <Zap size={24} />,
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-500/10",
  },
  {
    id: 2,
    title: "Internet",
    company: "Jio Fiber",
    amount: 999,
    due: "15 May 2026",
    icon: <Wifi size={24} />,
    color: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-500/10",
  },
  {
    id: 3,
    title: "DTH Recharge",
    company: "Tata Play",
    amount: 599,
    due: "18 May 2026",
    icon: <Tv size={24} />,
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/10",
  },
  {
    id: 4,
    title: "Mobile Recharge",
    company: "Airtel",
    amount: 399,
    due: "20 May 2026",
    icon: <Smartphone size={24} />,
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
  },
  {
    id: 5,
    title: "Water Bill",
    company: "Delhi Jal Board",
    amount: 850,
    due: "22 May 2026",
    icon: <Droplets size={24} />,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-500/10",
  },
];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Bills() {
  const [paidBills, setPaidBills] = useState([]);
  const [search, setSearch] = useState("");
  const [showBalance, setShowBalance] = useState(true);

  const handlePay = (id) => {
    if (!paidBills.includes(id)) {
      setPaidBills([...paidBills, id]);
    }
  };

  const filteredBills = useMemo(() => {
    return billsData.filter((bill) =>
      bill.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPending = billsData
    .filter((bill) => !paidBills.includes(bill.id))
    .reduce((acc, curr) => acc + curr.amount, 0);

  const walletBalance = 125400;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-112.5 h-112.5 bg-cyan-500/10 blur-[130px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-blue-500/10 blur-[130px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          
          <div>
            <p className="text-cyan-400 font-medium">
              Payments & Bills
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              Utility Bills
            </h1>

            <p className="text-slate-400 mt-3 text-base md:text-lg">
              Manage and pay your monthly services securely
            </p>
          </div>

          {/* Search + Actions */}
          <div className="flex flex-wrap items-center gap-4">
            
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={20}
              />

              <input
                type="text"
                placeholder="Search bills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                w-full sm:w-70
                h-14
                rounded-2xl
                bg-white/5
                border border-white/10
                pl-12 pr-5
                outline-none
                backdrop-blur-xl
                focus:border-cyan-400/40
                transition-all
                "
              />
            </div>

            <button
              onClick={() => setShowBalance(!showBalance)}
              className="
              w-14 h-14 rounded-2xl
              bg-white/5
              border border-white/10
              flex items-center justify-center
              hover:bg-white/10
              transition-all
              "
            >
              {showBalance ? (
                <Eye size={20} />
              ) : (
                <EyeOff size={20} />
              )}
            </button>

            <button
              className="
              relative
              w-14 h-14 rounded-2xl
              bg-white/5
              border border-white/10
              flex items-center justify-center
              hover:bg-white/10
              transition-all
              "
            >
              <Bell size={20} />

              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
            </button>
          </div>
        </div>

        {/* Wallet Card */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          className="
          mt-10
          relative overflow-hidden
          rounded-[36px]
          bg-linear-to-br from-[#0f172a] via-[#172554] to-[#0b1120]
          border border-white/10
          p-7 md:p-10
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          "
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* Left */}
            <div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-3xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <Wallet size={30} />
                </div>

                <div>
                  <p className="text-slate-400">
                    Wallet Balance
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold mt-2">
                    {showBalance
                      ? formatCurrency(walletBalance)
                      : "••••••"}
                  </h2>
                </div>
              </div>

              <p className="text-slate-400 mt-6 max-w-xl">
                Use your wallet balance to pay utility bills,
                recharge services, and track monthly spending.
              </p>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-5 w-full lg:w-auto">

              <div className="rounded-3xl bg-white/5 border border-white/10 p-5 min-w-42.5">
                <p className="text-slate-400 text-sm">
                  Pending Bills
                </p>

                <h3 className="text-3xl font-bold mt-3">
                  {formatCurrency(totalPending)}
                </h3>

                <div className="flex items-center gap-2 text-cyan-400 mt-4 text-sm">
                  <TrendingUp size={16} />
                  +12% this month
                </div>
              </div>

              <div className="rounded-3xl bg-white/5 border border-white/10 p-5 min-w-42.5">
                <p className="text-slate-400 text-sm">
                  Paid Bills
                </p>

                <h3 className="text-3xl font-bold mt-3">
                  {paidBills.length}
                </h3>

                <div className="flex items-center gap-2 text-green-400 mt-4 text-sm">
                  <CheckCircle2 size={16} />
                  Successful payments
                </div>
              </div>
            </div>
          </div>
        </m.div>

        {/* Bills Section */}
        <div className="mt-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Upcoming Bills
            </h2>

            <p className="text-slate-400 mt-2">
              Quickly pay your active services
            </p>
          </div>
        </div>

        {/* Bills Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7 mt-8">
          {filteredBills.map((bill, index) => {
            const paid = paidBills.includes(bill.id);

            return (
              <m.div
                key={bill.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                relative overflow-hidden
                rounded-[34px]
                bg-white/5
                border border-white/10
                backdrop-blur-3xl
                p-7
                "
              >
                {/* Card Glow */}
                <div
                  className={`absolute inset-0 opacity-10 bg-linear-to-br ${bill.color}`}
                />

                <div className="relative z-10">

                  {/* Top */}
                  <div className="flex items-start justify-between">
                    
                    <div
                      className={`
                      w-16 h-16 rounded-2xl
                      ${bill.bg}
                      border border-white/10
                      flex items-center justify-center
                      `}
                    >
                      {bill.icon}
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">
                      <CalendarDays size={16} />
                      {bill.due}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold">
                      {bill.title}
                    </h2>

                    <p className="text-slate-400 mt-2">
                      {bill.company}
                    </p>
                  </div>

                  {/* Amount */}
                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">
                        Amount Due
                      </p>

                      <h3 className="text-4xl font-bold mt-2">
                        {formatCurrency(bill.amount)}
                      </h3>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300">
                      <CreditCard />
                    </div>
                  </div>

                  {/* Button */}
                  <m.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handlePay(bill.id)}
                    disabled={paid}
                    className={`
                    mt-8
                    w-full
                    h-14
                    rounded-2xl
                    font-semibold
                    flex items-center justify-center gap-3
                    transition-all duration-300
                    
                    ${
                      paid
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-[0_15px_35px_rgba(6,182,212,0.35)] hover:shadow-[0_20px_45px_rgba(6,182,212,0.45)]"
                    }
                    `}
                  >
                    {paid ? (
                      <>
                        <CheckCircle2 size={20} />
                        Paid Successfully
                      </>
                    ) : (
                      <>
                        Pay Now
                        <ArrowUpRight size={20} />
                      </>
                    )}
                  </m.button>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
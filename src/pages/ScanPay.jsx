import { useState } from "react";
import { motion } from "framer-motion";
import {
  QrCode,
  Flashlight,
  Bell,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  ScanLine,
  Wallet,
  Camera,
  Sparkles,
} from "lucide-react";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ScanPay() {
  const [flash, setFlash] = useState(false);
  const [paid, setPaid] = useState(false);

  const walletBalance = 125400;

  const handlePayment = () => {
    setPaid(true);

    setTimeout(() => {
      setPaid(false);
    }, 3000);
  };

  const recentPayments = [
    {
      name: "Starbucks",
      time: "2 mins ago",
      amount: "₹799",
    },
    {
      name: "Uber",
      time: "Today",
      amount: "₹320",
    },
    {
      name: "Zomato",
      time: "Yesterday",
      amount: "₹650",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute top-[-150px] left-[-120px] w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>
            <p className="text-cyan-400 font-medium tracking-wide">
              DIGITAL PAYMENT
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              Scan & Pay
            </h1>

            <p className="text-slate-400 mt-3 text-base md:text-lg">
              Secure QR payments with instant confirmation
            </p>
          </div>

          {/* Wallet */}
          <div className="flex items-center gap-4">

            <div className="rounded-3xl bg-white/[0.04] border border-white/10 px-6 py-4 backdrop-blur-2xl min-w-[220px]">
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-300">
                  <Wallet size={26} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Wallet Balance
                  </p>

                  <h2 className="text-2xl font-bold mt-1">
                    {formatCurrency(walletBalance)}
                  </h2>
                </div>
              </div>
            </div>

            <button className="relative w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-white/[0.07] transition-all">
              <Bell size={20} />

              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
            </button>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-8 mt-10">

          {/* Scanner Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="
            relative
            overflow-hidden
            rounded-[38px]
            border border-white/10
            bg-[#0c1220]/90
            backdrop-blur-3xl
            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
            p-6 md:p-8
            "
          >

            {/* Top */}
            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-3xl font-bold">
                  QR Scanner
                </h2>

                <p className="text-slate-400 mt-2">
                  Place QR code inside the frame
                </p>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-cyan-500/15 flex items-center justify-center text-cyan-300 border border-cyan-500/20">
                <QrCode size={30} />
              </div>
            </div>

            {/* Scanner Box */}
            <div className="mt-10 flex justify-center">

              <div className="relative w-full max-w-[420px] aspect-square rounded-[40px] overflow-hidden bg-[#060b16] border border-cyan-500/20 shadow-inner">
              {/* Success Overlay */}
                {paid && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-green-500/10 backdrop-blur-md"
                >
                    <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/30"
                    >
                    <CheckCircle2 size={60} className="text-green-400" />
                    </motion.div>

                    <p className="mt-5 text-green-300 font-semibold text-lg">
                    Payment Successful
                    </p>

                    <p className="text-green-200/70 text-sm mt-1">
                    Transaction completed securely
                    </p>
                </motion.div>
                )}

                {/* Grid */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:35px_35px]" />

                {/* Scan Animation */}
                <motion.div
                  animate={{
                    y: ["0%", "320px", "0%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                  }}
                  className="absolute left-0 top-0 h-[3px] w-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
                />

                {/* Corner Borders */}
                <div className="absolute top-6 left-6 w-14 h-14 border-l-4 border-t-4 border-cyan-400 rounded-tl-2xl" />

                <div className="absolute top-6 right-6 w-14 h-14 border-r-4 border-t-4 border-cyan-400 rounded-tr-2xl" />

                <div className="absolute bottom-6 left-6 w-14 h-14 border-l-4 border-b-4 border-cyan-400 rounded-bl-2xl" />

                <div className="absolute bottom-6 right-6 w-14 h-14 border-r-4 border-b-4 border-cyan-400 rounded-br-2xl" />

                {/* Center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">

                  <div className="w-28 h-28 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <ScanLine size={60} />
                  </div>

                  <p className="mt-6 text-sm tracking-wide">
                    Waiting for QR Code...
                  </p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">

              <button className="h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-3 hover:bg-white/[0.07] transition-all">
                <Camera size={20} />
                Camera
              </button>

              <button
                onClick={() => setFlash(!flash)}
                className={`h-14 rounded-2xl border flex items-center justify-center gap-3 transition-all
                ${
                  flash
                    ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-300"
                    : "bg-white/[0.04] border-white/10 hover:bg-white/[0.07]"
                }`}
              >
                <Flashlight size={20} />
                Flash
              </button>

              <button className="h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-3 hover:bg-white/[0.07] transition-all">
                <ShieldCheck size={20} />
                Secure
              </button>

              <button className="h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-3 hover:bg-white/[0.07] transition-all">
                <Sparkles size={20} />
                AI Scan
              </button>
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="space-y-7">

            {/* Payment Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="
              rounded-[36px]
              border border-white/10
              bg-[#0c1220]/90
              backdrop-blur-3xl
              p-7
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              "
            >

              {/* Merchant */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-slate-400 text-sm">
                    Merchant
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    Starbucks Cafe
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Connaught Place, Delhi
                  </p>
                </div>

                <div className="w-16 h-16 rounded-3xl bg-green-500/15 border border-green-500/20 flex items-center justify-center text-green-400">
                  <CheckCircle2 size={28} />
                </div>
              </div>

              {/* Amount Card */}
              <div className="mt-8 rounded-[30px] bg-[#070d18] border border-white/10 p-6">

                <p className="text-slate-400">
                  Payment Amount
                </p>

                <h3 className="text-5xl font-bold mt-4">
                  ₹799
                </h3>

                <div className="flex items-center justify-between mt-6">

                  <div>
                    <p className="text-slate-500 text-sm">
                      Payment Type
                    </p>

                    <h4 className="font-medium mt-1">
                      Food & Beverage
                    </h4>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    UPI
                  </div>
                </div>
              </div>

              {/* Pay Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePayment}
                className="
                mt-8
                w-full
                h-16
                rounded-2xl
                bg-gradient-to-r from-cyan-500 to-blue-600
                font-semibold
                text-lg
                shadow-[0_15px_40px_rgba(6,182,212,0.35)]
                flex items-center justify-center gap-3
                "
              >
                {paid ? (
                  <>
                    <CheckCircle2 size={22} />
                    Payment Successful
                  </>
                ) : (
                  <>
                    Pay Now
                    <ArrowUpRight size={22} />
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Recent Payments */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="
              rounded-[36px]
              border border-white/10
              bg-[#0c1220]/90
              backdrop-blur-3xl
              p-7
              "
            >

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-bold">
                    Recent Payments
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Latest QR transactions
                  </p>
                </div>

                <div className="text-cyan-400 text-sm font-medium cursor-pointer">
                  View All
                </div>
              </div>

              <div className="space-y-4 mt-8">

                {recentPayments.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="
                    flex items-center justify-between
                    p-4 rounded-2xl
                    bg-[#070d18]
                    border border-white/10
                    "
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-300">
                        <QrCode size={20} />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {item.name}
                        </h3>

                        <p className="text-slate-400 text-sm mt-1">
                          {item.time}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-red-400 font-semibold text-lg">
                      -{item.amount}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
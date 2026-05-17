import { useState, useMemo } from "react";
import { m } from "framer-motion";
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
  Search,
} from "@/utils/icons";

const recentPayments = [
  {
    id: 1,
    name: "Starbucks",
    time: "2 mins ago",
    amount: 799,
  },
  {
    id: 2,
    name: "Uber",
    time: "Today",
    amount: 320,
  },
  {
    id: 3,
    name: "Zomato",
    time: "Yesterday",
    amount: 650,
  },
];

const controls = [
  {
    title: "Camera",
    icon: Camera,
  },
  {
    title: "Secure",
    icon: ShieldCheck,
  },
  {
    title: "AI Scan",
    icon: Sparkles,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function PaymentItem({ item }) {
  return (
    <m.div
      whileHover={{ x: 4 }}
      className="
      flex items-center justify-between
      p-4 rounded-3xl
      bg-[#0A1322]
      border border-white/10
      hover:border-cyan-500/20
      transition-all duration-300
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
          w-14 h-14 rounded-2xl
          bg-cyan-500/10
          border border-cyan-500/10
          flex items-center justify-center
          text-cyan-300
          "
        >
          <QrCode size={22} />
        </div>

        <div>
          <h3 className="font-semibold text-base">
            {item.name}
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            {item.time}
          </p>
        </div>
      </div>

      <h3 className="text-red-400 font-semibold text-lg">
        -{formatCurrency(item.amount)}
      </h3>
    </m.div>
  );
}

export default function ScanPay() {
  const [flash, setFlash] = useState(false);
  const [paid, setPaid] = useState(false);

  const walletBalance = useMemo(() => 125400, []);

  const handlePayment = () => {
    setPaid(true);

    setTimeout(() => {
      setPaid(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen  bg-gray-100 dark:bg-zinc-900  dark:text-white transition-all duration-300 text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute -top-37.5 -left-25 w-100 h-100 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute -bottom-45 -right-30 w-112.5 h-112.5 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* HEADER */}
        <m.div
          {...fadeUp}
          className="
          flex flex-col lg:flex-row
          lg:items-center
          lg:justify-between
          gap-6
          "
        >
          <div>
            <p className="text-cyan-400 font-medium tracking-[3px] text-sm">
              DIGITAL PAYMENT
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Scan & Pay
            </h1>

            <p className="text-slate-400 mt-4 max-w-lg">
              Fast, secure and AI-powered QR payments with
              real-time confirmation.
            </p>
          </div>

          {/* RIGHT HEADER */}
          <div className="flex flex-wrap items-center gap-4">
            <div className=" rounded-3xl bg-white/4 border border-white/10 px-5 py-4 backdrop-blur-3xl min-w-60">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-300 ">
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

            <button className="
              relative w-14 h-14 rounded-2xl
              bg-white/4
              border border-white/10
              flex items-center justify-center
              hover:bg-white/8
              transition-all
              "
            >
              <Search size={20} />
            </button>

            <button className="relative w-14 h-14 rounded-2xl bg-white/4 border border-white/10 flex items-center justify-center hover:bg-white/8 transition-all ">
              <Bell size={20} />

              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
            </button>
          </div>
        </m.div>

        {/* MAIN GRID */}
        <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-8 mt-10">
          {/* LEFT */}
          <m.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="rounded-[38px] border border-white/10 bg-[#0A1120]/90 backdrop-blur-3xl p-5 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.45)] ">
            {/* TOP */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">
                  QR Scanner
                </h2>

                <p className="text-slate-400 mt-2">
                  Scan merchant QR instantly
                </p>
              </div>

              <div
                className="
                w-16 h-16 rounded-3xl
                bg-cyan-500/10
                border border-cyan-500/20
                flex items-center justify-center
                text-cyan-300
                "
              >
                <QrCode size={30} />
              </div>
            </div>

            {/* SCANNER */}
            <div className="mt-10 flex justify-center">
              <div
                className="
                relative w-full max-w-107.5
                aspect-square rounded-[38px]
                overflow-hidden
                bg-[#050B16]
                border border-cyan-500/20
                "
              >
                {/* GRID */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[32px_32px] "/>

                {/* SCAN LINE */}
                <m.div
                  animate={{
                    y: ["0%", "350px", "0%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                  }}
                  className="
                  absolute left-0 top-0
                  h-0.75 w-full
                  bg-cyan-400
                  shadow-[0_0_25px_#22d3ee]
                  "
                />

                {/* SUCCESS */}
                {paid && (
                  <m.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="
                    absolute inset-0 z-20
                    flex flex-col items-center justify-center
                    bg-green-500/10
                    backdrop-blur-md
                    "
                  >
                    <div
                      className="
                      w-28 h-28 rounded-full
                      bg-green-500/20
                      border border-green-500/30
                      flex items-center justify-center
                      "
                    >
                      <CheckCircle2
                        size={64}
                        className="text-green-400"
                      />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-green-300">
                      Payment Successful
                    </h3>

                    <p className="text-green-200/70 mt-2">
                      Transaction completed securely
                    </p>
                  </m.div>
                )}

                {/* CORNERS */}
                {[
                  "top-6 left-6 border-l-4 border-t-4 rounded-tl-2xl",
                  "top-6 right-6 border-r-4 border-t-4 rounded-tr-2xl",
                  "bottom-6 left-6 border-l-4 border-b-4 rounded-bl-2xl",
                  "bottom-6 right-6 border-r-4 border-b-4 rounded-br-2xl",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute w-14 h-14 border-cyan-400 ${item}`}
                  />
                ))}

                {/* CENTER */}
                <div
                  className="
                  absolute inset-0
                  flex flex-col items-center justify-center
                  "
                >
                  <div
                    className="
                    w-28 h-28 rounded-full
                    bg-cyan-500/10
                    border border-cyan-500/20
                    flex items-center justify-center
                    "
                  >
                    <ScanLine
                      size={60}
                      className="text-cyan-300"
                    />
                  </div>

                  <p className="mt-6 text-slate-500 tracking-wide">
                    Waiting for QR Code...
                  </p>
                </div>
              </div>
            </div>

            {/* CONTROLS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {controls.map((item, index) => {
                const Icon = item.icon;

                return (
                  <m.button
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                    h-14 rounded-2xl
                    bg-white/4
                    border border-white/10
                    flex items-center justify-center gap-3
                    hover:bg-white/8
                    transition-all duration-300
                    "
                  >
                    <Icon size={20} />
                    {item.title}
                  </m.button>
                );
              })}

              {/* FLASH */}
              <m.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setFlash(!flash)}
                className={`
                h-14 rounded-2xl
                border
                flex items-center justify-center gap-3
                transition-all duration-300
                ${
                  flash
                    ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-300"
                    : "bg-white/4 border-white/10 hover:bg-white/8"
                }
                `}
              >
                <Flashlight size={20} />
                Flash
              </m.button>
            </div>
          </m.div>

          {/* RIGHT */}
          <div className="space-y-7">
            {/* PAYMENT CARD */}
            <m.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="
              rounded-[36px]
              border border-white/10
              bg-[#0A1120]/90
              backdrop-blur-3xl
              p-6 md:p-7
              shadow-[0_20px_70px_rgba(0,0,0,0.35)]
              "
            >
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

                <div
                  className="
                  w-16 h-16 rounded-3xl
                  bg-green-500/15
                  border border-green-500/20
                  flex items-center justify-center
                  "
                >
                  <CheckCircle2
                    size={28}
                    className="text-green-400"
                  />
                </div>
              </div>

              {/* AMOUNT CARD */}
              <div
                className="
                mt-8 rounded-[30px]
                bg-[#050B16]
                border border-white/10
                p-6
                "
              >
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

                  <div
                    className="
                    px-4 py-2 rounded-xl
                    bg-cyan-500/10
                    border border-cyan-500/20
                    text-cyan-300
                    "
                  >
                    UPI
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <m.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePayment}
                className="
                mt-8 w-full h-16
                rounded-2xl
                bg-linear-to-r from-cyan-500 to-blue-600
                font-semibold text-lg
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
              </m.button>
            </m.div>

            {/* RECENT PAYMENTS */}
            <m.div
              {...fadeUp}
              transition={{ delay: 0.3 }}
              className="
              rounded-[36px]
              border border-white/10
              bg-[#0A1120]/90
              backdrop-blur-3xl
              p-6 md:p-7
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

                <button className="text-cyan-400 font-medium text-sm">
                  View All
                </button>
              </div>

              <div className="space-y-4 mt-8">
                {recentPayments.map((item) => (
                  <PaymentItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
}
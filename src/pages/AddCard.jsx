import { useState } from "react";
import {
  CreditCard,
  User,
  Wallet,
  Plus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

export default function AddCard() {
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    limit: "",
  });

  const [success, setSuccess] = useState(false);

  // Card Type Detection
  const getCardType = (number) => {
    if (/^4/.test(number)) return "VISA";
    if (/^5[1-5]/.test(number)) return "MASTERCARD";
    if (/^3[47]/.test(number)) return "AMEX";
    return "BANK CARD";
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Card number format
    if (name === "cardNumber") {
      value = value
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }

    // Expiry format MM/YY
    if (name === "expiry") {
      value = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .substring(0, 5);
    }

    // CVV only numbers
    if (name === "cvv") {
      value = value.replace(/\D/g, "").substring(0, 3);
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 2500);
  };

  const cardType = getCardType(form.cardNumber.replace(/\s/g, ""));

  return (
    <div className="min-h-screen overflow-hidden bg-[#333449] relative flex items-center justify-center px-4 py-10">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-87.5 h-87.5 bg-blue-700/20 blur-[120px] rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-7xl grid lg:grid-cols-2 rounded-[40px] overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_60px_rgba(0,0,0,0.5)]">

        {/* LEFT SIDE */}
        <div className="relative p-8 md:p-12 bg-linear-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white overflow-hidden flex flex-col justify-between">

          {/* Animated circles */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute top-10 right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"
          />

          {/* HEADER */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center"
              >
                <CreditCard size={24} />
              </motion.div>

              <div>
                <h1 className="text-2xl font-bold">NeoBank</h1>
                <p className="text-white/60 text-sm">
                  Smart Digital Banking
                </p>
              </div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold leading-tight"
            >
              Add Your <br />
              Premium Card
            </motion.h2>

            <p className="mt-6 text-white/70 text-lg max-w-md">
              Securely add and manage your debit & credit cards with
              enterprise-level protection.
            </p>
          </div>

          {/* CARD PREVIEW */}
          <motion.div
            whileHover={{
              rotateY: 8,
              rotateX: 4,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative mt-14 z-10"
          >
            <div className="relative h-64 rounded-4xl overflow-hidden bg-linear-to-br from-cyan-400 via-blue-500 to-indigo-700 p-7 shadow-2xl border border-white/20">

              {/* Shine effect */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white/70 text-sm">Current Balance</p>
                  <h2 className="text-3xl font-bold mt-1">₹2,45,000</h2>
                </div>

                <div className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-xl text-sm font-semibold">
                  {cardType}
                </div>
              </div>

              <div className="mt-12">
                <p className="tracking-[4px] text-xl font-semibold">
                  {form.cardNumber || "**** **** **** 4587"}
                </p>

                <div className="flex justify-between mt-8">
                  <div>
                    <p className="text-white/60 text-xs">CARD HOLDER</p>
                    <p className="font-semibold mt-1">
                      {form.name || "SAMARIA SINGH"}
                    </p>
                  </div>

                  <div>
                    <p className="text-white/60 text-xs">EXPIRES</p>
                    <p className="font-semibold mt-1">
                      {form.expiry || "12/28"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10 relative z-10">

            {[
              {
                icon: <ShieldCheck size={20} />,
                title: "256-bit Security",
              },
              {
                icon: <Sparkles size={20} />,
                title: "Instant Setup",
              },
              {
                icon: <Wallet size={20} />,
                title: "Smart Banking",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-4"
              >
                <div className="mb-3 text-cyan-300">{item.icon}</div>
                <p className="text-sm font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 md:p-12"
        >

          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Add Card Details
            </h2>

            <p className="text-gray-500 mt-2">
              Fill in your banking details securely.
            </p>
          </div>

          {/* SUCCESS */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-green-100 text-green-700 p-4 rounded-2xl font-medium"
            >
              🎉 Your card has been added successfully!
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Card Holder Name
              </label>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="mt-2 flex items-center border-2 border-gray-200 focus-within:border-cyan-500 rounded-2xl px-4 py-4 transition-all duration-300"
              >
                <User className="text-gray-400 mr-3" size={20} />

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full outline-none bg-transparent"
                />
              </motion.div>
            </div>

            {/* CARD NUMBER */}
            <div>
              <div className="flex justify-between">
                <label className="text-sm font-medium text-gray-600">
                  Card Number
                </label>

                <span className="text-cyan-600 font-semibold text-sm">
                  {cardType}
                </span>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="mt-2 flex items-center border-2 border-gray-200 focus-within:border-cyan-500 rounded-2xl px-4 py-4 transition-all duration-300"
              >
                <CreditCard
                  className="text-gray-400 mr-3"
                  size={20}
                />

                <input
                  type="text"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  maxLength={19}
                  placeholder="1234 5678 9012 3456"
                  className="w-full outline-none bg-transparent tracking-[2px]"
                />
              </motion.div>
            </div>

            {/* EXPIRY + CVV */}
            <div className="grid grid-cols-2 gap-5">

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Expiry Date
                </label>

                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  placeholder="12/28"
                  className="mt-2 w-full border-2 border-gray-200 focus:border-cyan-500 rounded-2xl px-4 py-4 outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  CVV
                </label>

                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="password"
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="mt-2 w-full border-2 border-gray-200 focus:border-cyan-500 rounded-2xl px-4 py-4 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* LIMIT */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Credit Limit
              </label>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="mt-2 flex items-center border-2 border-gray-200 focus-within:border-cyan-500 rounded-2xl px-4 py-4 transition-all duration-300"
              >
                <Wallet className="text-gray-400 mr-3" size={20} />

                <input
                  type="number"
                  name="limit"
                  value={form.limit}
                  onChange={handleChange}
                  placeholder="50000"
                  className="w-full outline-none bg-transparent"
                />
              </motion.div>
            </div>
            {/* BUTTON SECTION */}
            <div className="pt-4">

              {/* BUTTON */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow:"0px 0px 30px rgba(6,182,212,0.5)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="relative overflow-hidden w-full md:w-[70%] py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl"
                >

                  {/* Shine Effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Plus size={20} />
                    Add Card Securely
                  </span>
                </motion.button>
              </div>
                {/* FOOTER TEXT */}
                <p className="text-center text-xs text-gray-400 mt-5">
                  Powered by NeoBank Secure Payment Gateway
                </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
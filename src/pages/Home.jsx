import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  const quickActions = [
  {
    name: "Transfer",
    path: "/transfer",
  },
  {
    name: "Transactions",
    path: "/transactions",
  },
  {
    name: "Cards",
    path: "/cards",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Modern Banking <br />
                <span className="text-blue-200">
                  For Everyone
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-200 max-w-lg">
                Manage your money, track expenses,
                transfer funds, and secure your
                financial future with our smart
                banking platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/register"
                  className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 
                  hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>

                <button className="border border-white px-6 py-3 rounded-xl 
                hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-300">
                  Learn More
                </button>

              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full max-w-md"
            >
              <div className="bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-3xl p-8 shadow-2xl">

                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-200">
                    Current Balance
                  </p>

                  <Wallet size={40} />
                </div>

                <h2 className="text-4xl font-bold">
                  ₹1,25,000
                </h2>

                <div className="border-t border-white/30 my-6"></div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-200">
                      Savings
                    </span>
                    <span className="font-semibold">
                      ₹80,000
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-200">
                      Investments
                    </span>
                    <span className="font-semibold">
                      ₹45,000
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* 🔹 Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">

            {quickActions.map((item, i) => (
              <Link
                to={item.path}
                key={i}
                className="bg-white/20 backdrop-blur-md border border-white/20 
                p-4 rounded-xl text-center cursor-pointer 
                hover:scale-105 hover:bg-white/30 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* 🔹 Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Built for security, speed, and simplicity
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <FeatureCard
            icon={<ShieldCheck size={50} className="text-blue-600" />}
            title="Secure Banking"
            desc="Your transactions and personal data are protected with advanced security systems."
          />

          <FeatureCard
            icon={<CreditCard size={50} className="text-blue-600" />}
            title="Smart Payments"
            desc="Make fast and secure online payments anytime anywhere."
          />

          <FeatureCard
            icon={<Wallet size={50} className="text-blue-600" />}
            title="Expense Tracking"
            desc="Monitor your spending and improve your financial management easily."
          />

        </div>
      </section>

    </div>
  );
}

/* 🔹 Reusable Feature Card */
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md 
    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {icon}

      <h3 className="text-2xl font-semibold mt-6">
        {title}
      </h3>

      <p className="text-gray-600 mt-4">
        {desc}
      </p>
    </div>
  );
}

export default Home;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    // Password Match Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // API Call Here Later

    setMessage("Password updated successfully!");

    // Redirect to login after 2 seconds
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-white to-indigo-100 px-4 overflow-hidden">

      {/* Animated Background Circles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 left-10 w-40 h-40 bg-blue-300 opacity-20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-52 h-52 bg-indigo-300 opacity-20 rounded-full blur-3xl"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/40"
      >

        {/* Heading */}
        <div className="text-center mb-6">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Reset Password
          </motion.h1>

          <p className="text-gray-500 mt-2 text-sm">
            Create a new secure password
          </p>

        </div>

        {/* Success Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-sm"
          >
            {message}
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm"
          >
            {error}
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* New Password */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >

            <label className="block text-sm font-medium mb-1">
              New Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none bg-white/70 focus:ring-2 focus:ring-blue-500 transition-all duration-300 focus:scale-[1.02]"
              required
            />

          </motion.div>

          {/* Confirm Password */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >

            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none bg-white/70 focus:ring-2 focus:ring-blue-500 transition-all duration-300 focus:scale-[1.02]"
              required
            />

          </motion.div>

          {/* Update Button */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 25px rgba(37,99,235,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Update Password
          </motion.button>

        </form>

        {/* Back to Login */}
        <p className="text-center text-sm text-gray-500 mt-6">

          Back to

          <Link
            to="/login"
            className="text-blue-600 ml-1 font-medium hover:underline"
          >
            Login
          </Link>

        </p>

      </motion.div>

    </div>
  );
};

export default ResetPassword;
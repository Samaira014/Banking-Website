import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { m } from "framer-motion";

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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br  bg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300 px-4 overflow-hidden">

      {/* Animated Background Circles */}
      <m.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 left-10 w-40 h-40 bg-blue-300 opacity-20 rounded-full blur-3xl"
      />

      <m.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-52 h-52 bg-indigo-300 opacity-20 rounded-full blur-3xl"
      />

      {/* Card */}
      <m.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/40"
      >

        {/* Heading */}
        <div className="text-center mb-6">

          <m.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Reset Password
          </m.h1>

          <p className="text-gray-500 mt-2 text-sm">
            Create a new secure password
          </p>

        </div>

        {/* Success Message */}
        {message && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-sm"
          >
            {message}
          </m.div>
        )}

        {/* Error Message */}
        {error && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm"
          >
            {error}
          </m.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* New Password */}
          <m.div
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

          </m.div>

          {/* Confirm Password */}
          <m.div
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

          </m.div>

          {/* Update Button */}
          <m.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 25px rgba(37,99,235,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Update Password
          </m.button>

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

      </m.div>

    </div>
  );
};

export default ResetPassword;
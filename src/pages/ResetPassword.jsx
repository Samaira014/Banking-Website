import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-6">

          <h1 className="text-3xl font-bold text-blue-600">
            Reset Password
          </h1>

          <p className="text-gray-500 mt-2">
            Create a new secure password
          </p>

        </div>

        {/* Success Message */}
        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-sm">
            {message}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* New Password */}
          <div>

            <label className="block text-sm font-medium mb-1">
              New Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Confirm Password */}
          <div>

            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Update Password
          </button>

        </form>

        {/* Back to Login */}
        <p className="text-center text-sm text-gray-500 mt-6">

          Back to

          <Link
            to="/login"
            className="text-blue-600 ml-1 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default ResetPassword;

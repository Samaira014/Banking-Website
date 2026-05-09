import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Bell, Moon, Sun, User } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navbar Container */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              🏦
            </div>

            <h1 className="text-2xl font-bold text-blue-600 dark:text-white">
              SecureBank
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
                to="/"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                Dashboard
            </Link>

            <Link
              to="/transfer"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
            >
              Transfer
            </Link>

            <Link
              to="/transactions"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
            >
              Transactions
            </Link>

            <Link
              to="/profile"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
            >
              Profile
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Notification */}
            <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-200" />

              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>

            {/* Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* User Profile */}
            <Link
              to="/register"
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="bg-blue-600 text-white p-2 rounded-full">
                <User className="w-4 h-4" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  Samaira
                </p>

                <p className="text-xs text-gray-500">
                  Premium User
                </p>
              </div>

            </Link>
              
            </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-4 space-y-4">
          <Link
                to="/"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                Dashboard
          </Link>

          <Link
            to="/transfer"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            Transfer
          </Link>

          <a
            href="/transactions"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            Transactions
          </a>

          <Link
            to="/profile"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            Profile
          </Link>

          {/* Mobile Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
          >
            {darkMode ? (
              <>
                <Sun className="w-5 h-5" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" />
                Dark Mode
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
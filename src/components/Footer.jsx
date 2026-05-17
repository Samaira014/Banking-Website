import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "@/utils/icons";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              SecureBank
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Modern banking platform for secure
              transactions, expense tracking,
              and smart financial management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="hover:text-white transition"
                >
                  Register
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="hover:text-white transition"
                >
                  Login
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Online Banking</li>
              <li>Money Transfer</li>
              <li>Secure Payments</li>
              <li>Investment Plans</li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition"
              >
                <FaLinkedin size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
          © 2026 SecureBank. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;
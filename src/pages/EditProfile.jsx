import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Save,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

export default function EditProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "Samaira Singh",
    email: "samaira@email.com",
    phone: "+91 9876543210",
    address: "Gurgaon, Haryana",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Profile Updated Successfully");

      navigate("/profile");
    } catch (error) {
      console.error("Error:", error);
      alert("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute w-[500px] h-[500px] bg-blue-300 blur-3xl rounded-full -top-40 -right-32"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6"
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="lg:col-span-1"
        >

          {/* PROFILE CARD */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] rounded-[32px] p-8 shadow-2xl text-white h-full">

            {/* Animated Circle */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute w-80 h-80 bg-blue-400 rounded-full blur-3xl -top-24 -right-20"
            />

            <div className="relative z-10 flex flex-col h-full">

              {/* Avatar */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg border border-white/20 flex items-center justify-center text-4xl font-bold shadow-lg"
              >
                S
              </motion.div>

              <div className="mt-6">
                <h2 className="text-3xl font-bold">
                  {formData.name}
                </h2>

                <p className="text-blue-100 mt-2">
                  {formData.email}
                </p>
              </div>

              {/* STATUS */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="mt-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck size={24} />

                  <div>
                    <p className="text-blue-100 text-sm">
                      Account Status
                    </p>

                    <h3 className="font-semibold text-lg">
                      Verified Account
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* MINI INFO */}
              <div className="mt-8 space-y-4">

                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
                  <p className="text-blue-100 text-sm">
                    Phone Number
                  </p>

                  <h3 className="font-semibold mt-1">
                    {formData.phone}
                  </h3>
                </div>

                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
                  <p className="text-blue-100 text-sm">
                    Address
                  </p>

                  <h3 className="font-semibold mt-1">
                    {formData.address}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="lg:col-span-2"
        >

          <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">

            {/* HEADER */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute w-72 h-72 bg-white rounded-full -top-32 -right-24"
              />

              <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">

                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    Edit Profile
                  </h1>

                  <p className="text-blue-100 mt-2">
                    Update your banking profile details
                  </p>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => navigate("/profile")}
                  className="bg-white/20 backdrop-blur-lg border border-white/20 px-5 py-3 rounded-2xl flex items-center gap-2"
                >
                  <ArrowLeft size={20} />
                  Back
                </motion.button>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 space-y-6"
            >

              {/* NAME */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                }}
              >
                <label className="text-gray-700 font-semibold block mb-2">
                  Full Name
                </label>

                <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 transition-all">

                  <User
                    className="text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full p-4 bg-transparent focus:outline-none"
                    required
                  />
                </div>
              </motion.div>

              {/* EMAIL + PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                  }}
                >
                  <label className="text-gray-700 font-semibold block mb-2">
                    Email Address
                  </label>

                  <div className="flex items-center bg-gray-100 border border-gray-200 rounded-2xl px-4">

                    <Mail
                      className="text-gray-400"
                      size={20}
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      disabled
                      className="w-full p-4 bg-transparent focus:outline-none text-gray-500"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                >
                  <label className="text-gray-700 font-semibold block mb-2">
                    Phone Number
                  </label>

                  <div className="flex items-center bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 transition-all">

                    <Phone
                      className="text-gray-400"
                      size={20}
                    />

                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full p-4 bg-transparent focus:outline-none"
                    />
                  </div>
                </motion.div>
              </div>

              {/* ADDRESS */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
              >
                <label className="text-gray-700 font-semibold block mb-2">
                  Address
                </label>

                <div className="flex items-start bg-[#f8fafc] border border-gray-200 rounded-2xl px-4 focus-within:ring-2 focus-within:ring-blue-500 transition-all">

                  <MapPin
                    className="text-gray-400 mt-4"
                    size={20}
                  />

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Enter address"
                    className="w-full p-4 bg-transparent focus:outline-none resize-none"
                  />
                </div>
              </motion.div>

              {/* BUTTONS */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => navigate("/profile")}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-2xl font-semibold transition"
                >
                  Cancel
                </motion.button>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Save size={20} />
                  Save Changes
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
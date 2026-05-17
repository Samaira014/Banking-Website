import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { m } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Save,
  ArrowLeft,
  ShieldCheck,
  Camera,
  Sparkles,
} from "@/utils/icons";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile Updated Successfully");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300  overflow-hidden relative">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-87.5 md:w-125 h-87.5 md:h-125 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />

        <div className="absolute bottom-0 right-0 w-87.5 md:w-125 h-87.5 md:h-125 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">

        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Edit Profile
            </h1>

            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Manage your banking profile & personal details
            </p>
          </div>

          <m.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/profile")}
            className="
            h-14 px-6 rounded-2xl
            bg-white/5 border border-white/10
            backdrop-blur-xl
            flex items-center justify-center gap-2
            text-sm sm:text-base
            "
          >
            <ArrowLeft size={20} />
            Back
          </m.button>
        </div>

        {/* MAIN GRID */}
        <div className="grid xl:grid-cols-[0.95fr_1.4fr] gap-8 items-start">

          {/* LEFT PROFILE CARD */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="
            relative overflow-hidden
            rounded-4xl
            bg-linear-to-br
            from-[#111827]
            via-[#172554]
            to-[#0f172a]
            border border-white/10
            p-6 sm:p-8
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
          >

            {/* glow */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative z-10">

              {/* avatar */}
              <div className="flex flex-col items-center text-center">

                <div className="relative">
                  <m.div
                    whileHover={{ scale: 1.05 }}
                    className="
                    w-28 h-28 sm:w-32 sm:h-32
                    rounded-full
                    bg-linear-to-br from-cyan-400 to-blue-600
                    flex items-center justify-center
                    text-5xl font-bold
                    shadow-[0_10px_40px_rgba(6,182,212,0.45)]
                    "
                  >
                    S
                  </m.div>

                  <button
                    className="
                    absolute bottom-1 right-1
                    w-10 h-10 rounded-full
                    bg-white text-slate-900
                    flex items-center justify-center
                    shadow-lg
                    "
                  >
                    <Camera size={18} />
                  </button>
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  {formData.name}
                </h2>

                <p className="text-slate-400 mt-2 break-all">
                  {formData.email}
                </p>
              </div>

              {/* VERIFIED */}
              <div
                className="
                mt-8
                rounded-3xl
                bg-white/5
                border border-white/10
                p-5
                backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                    w-14 h-14 rounded-2xl
                    bg-cyan-500/20
                    text-cyan-300
                    flex items-center justify-center
                    "
                  >
                    <ShieldCheck size={28} />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Account Status
                    </p>

                    <h3 className="font-semibold text-lg mt-1">
                      Verified User
                    </h3>
                  </div>
                </div>
              </div>

              {/* AI INSIGHT */}
              <div className="
                mt-5
                rounded-3xl
                bg-white/5
                border border-white/10
                p-5
                backdrop-blur-xl
                ">
                <div className="flex items-start gap-4">

                  <div
                    className="
                    w-14 h-14 rounded-2xl
                    bg-cyan-500/20
                    text-cyan-300
                    flex items-center justify-center
                    "
                  >
                    <Sparkles size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      AI Suggestion
                    </h3>
                  </div>
                </div>
              </div>

              {/* MINI CARDS */}
              <div className="mt-6 space-y-4">

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-slate-400 text-sm">
                    Phone Number
                  </p>

                  <h3 className="font-semibold mt-1 break-all">
                    {formData.phone}
                  </h3>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-slate-400 text-sm">
                    Address
                  </p>

                  <h3 className="font-semibold mt-1 wrap-break-word">
                    {formData.address}
                  </h3>
                </div>
              </div>
            </div>
          </m.div>

          {/* RIGHT FORM */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="
            rounded-4xl
            bg-white/5
            border border-white/10
            backdrop-blur-3xl
            overflow-hidden
            shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            "
          >

            {/* HEADER */}
            <div
              className="
              relative overflow-hidden
              px-6 sm:px-8 py-7
              border-b border-white/10
              "
            >
              <div className="absolute top-0 right-0 w-52 h-52 bg-blue-500/20 blur-3xl rounded-full" />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Personal Information
                </h2>

                <p className="text-slate-400 mt-2">
                  Update your personal details securely
                </p>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-8 space-y-6"
            >

              {/* NAME */}
              <div>
                <label className="text-slate-300 font-medium block mb-3">
                  Full Name
                </label>

                <div
                  className="
                  flex items-center gap-3
                  h-16 px-5
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  focus-within:border-cyan-400
                  transition-all
                  "
                >
                  <User className="text-slate-400" size={20} />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="
                    w-full bg-transparent
                    outline-none
                    text-white
                    placeholder:text-slate-500
                    "
                  />
                </div>
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid md:grid-cols-2 gap-5">

                {/* EMAIL */}
                <div>
                  <label className="text-slate-300 font-medium block mb-3">
                    Email Address
                  </label>

                  <div
                    className="
                    flex items-center gap-3
                    h-16 px-5
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    "
                  >
                    <Mail className="text-slate-400" size={20} />

                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      className="
                      w-full bg-transparent
                      outline-none
                      text-slate-400
                      "
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-slate-300 font-medium block mb-3">
                    Phone Number
                  </label>

                  <div
                    className="
                    flex items-center gap-3
                    h-16 px-5
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    focus-within:border-cyan-400
                    transition-all
                    "
                  >
                    <Phone className="text-slate-400" size={20} />

                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="
                      w-full bg-transparent
                      outline-none
                      text-white
                      placeholder:text-slate-500
                      "
                    />
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div>
                <label className="text-slate-300 font-medium block mb-3">
                  Address
                </label>

                <div
                  className="
                  flex items-start gap-3
                  px-5 py-4
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  focus-within:border-cyan-400
                  transition-all
                  "
                >
                  <MapPin
                    className="text-slate-400 mt-1"
                    size={20}
                  />

                  <textarea
                    rows="5"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter address"
                    className="
                    w-full bg-transparent
                    outline-none
                    resize-none
                    text-white
                    placeholder:text-slate-500
                    "
                  />
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">

                <m.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate("/profile")}
                  className="
                  flex-1
                  h-14
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  text-white
                  font-semibold
                  "
                >
                  Cancel
                </m.button>

                <m.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                  flex-1
                  h-14
                  rounded-2xl
                  bg-linear-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  font-semibold
                  flex items-center justify-center gap-2
                  shadow-[0_10px_30px_rgba(6,182,212,0.45)]
                  "
                >
                  <Save size={20} />
                  Save Changes
                </m.button>
              </div>
            </form>
          </m.div>
        </div>
      </div>
    </div>
  );
}
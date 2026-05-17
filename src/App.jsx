import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Profile = lazy(() => import("./pages/Profile"));
const EditProfile = lazy(() => import("./pages/EditProfile"));
const Transfer = lazy(() => import("./pages/Transfer"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Cards = lazy(() => import("./pages/Cards"));
const AddCard = lazy(() => import("./pages/AddCard"));
const Settings = lazy(() => import("./pages/Settings"));
const Logout = lazy(() => import("./pages/Logout"));
const Bills = lazy(() => import("./pages/Bills"));
const ScanPay = lazy(() => import("./pages/ScanPay"));
const Wallet = lazy(() => import("./pages/Wallet"));

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      {/* ✅ Suspense Wrapper */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Auth */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />}/>

          {/* Profile */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />

          {/* Banking */}
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/wallet" element={<Wallet />} />

          {/* Utilities */}
          <Route path="/bills" element={<Bills />} />
          <Route path="/scan" element={<ScanPay />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
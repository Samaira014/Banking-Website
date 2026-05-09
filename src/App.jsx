import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Transfer from "./pages/Transfer";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Register Page */}
        <Route path="/register" element={<Register />}/>

        {/* Login Page */}
        <Route path="/login" element={<Login />}/>

        <Route path="/forgot-password" element={<ForgotPassword />}/>

        <Route path="/reset-password/:token" element={<ResetPassword />}/>

        <Route path="/profile" element={<Profile />} />

         <Route path="/edit-profile" element={<EditProfile />} />
         
         <Route path="/transfer" element={<Transfer />} />

         <Route path="/transactions" element={<Transactions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
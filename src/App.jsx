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
import Cards from "./pages/Cards";
import AddCard from "./pages/AddCard";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Bills from "./pages/Bills";
import ScanPay from "./pages/ScanPay";

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

         <Route path="/cards" element= {<Cards />}/>

         <Route path="/add-card" element={<AddCard />} />

         <Route path="/settings" element={<Settings />} />

         <Route path="/logout" element={<Logout />} />

         <Route path="/bills" element={<Bills />}/>

         <Route path="/scan" element={<ScanPay />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
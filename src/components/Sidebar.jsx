import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen p-5 hidden md:block">
      <h2 className="text-2xl font-bold mb-8">MyBank</h2>

      <nav className="space-y-4">
        <Link to="/dashboard" className="block hover:bg-blue-700 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/profile" className="block hover:bg-blue-700 p-2 rounded">
          Profile
        </Link>
        <Link to="/transactions" className="block hover:bg-blue-700 p-2 rounded">
          Transactions
        </Link>
      </nav>
    </div>
  );
}
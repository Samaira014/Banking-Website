export default function Topbar() {
  return (
    <div className="bg-white p-4 shadow flex justify-between items-center">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <span className="text-gray-600">Hello, Samaira</span>
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
          S
        </div>
      </div>
    </div>
  );
}
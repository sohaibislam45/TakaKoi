export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="font-extrabold text-xl">Taka<span className="text-amber-500">Koi</span></div>
        <button className="text-sm text-gray-500 hover:text-gray-800">Logout</button>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold">Hello 👋</h1>
        <p className="text-gray-500 mt-1">Your financial overview will appear here.</p>
      </main>
    </div>
  )
}

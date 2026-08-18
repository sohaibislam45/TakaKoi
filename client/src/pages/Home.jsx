import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 text-white">
      <nav className="flex items-center justify-between px-6 py-4 backdrop-blur bg-white/5 sticky top-0 border-b border-white/10">
        <div className="text-2xl font-extrabold tracking-tight">
          Taka<span className="text-amber-400">Koi</span>
        </div>
        <div className="space-x-4 text-sm font-medium">
          <a href="#features" className="hover:text-amber-300 transition">Features</a>
          <a href="#testimonials" className="hover:text-amber-300 transition">Reviews</a>
          <a href="#faq" className="hover:text-amber-300 transition">FAQ</a>
          <Link
            to="/login"
            className="bg-amber-400 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-amber-300 transition shadow-lg shadow-amber-500/20"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <section className="flex flex-col items-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Track Every <span className="text-amber-400">Taka</span> with Confidence
        </h1>
        <p className="mt-6 max-w-xl text-teal-100/80 text-lg">
          TakaKoi is your personal income &amp; expense tracker — simple, secure, and beautiful.
          Know where your money goes, every single day.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            to="/login"
            className="bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-amber-300 transition shadow-xl shadow-amber-500/20"
          >
            Start Tracking Free
          </Link>
          <a
            href="#features"
            className="border border-white/20 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="features" className="grid md:grid-cols-3 gap-6 px-6 py-16 max-w-6xl mx-auto">
        {[
          ['📊', 'Smart Insights', 'Visualize spending habits with beautiful charts and monthly summaries.'],
          ['🔒', 'Private & Secure', 'Google sign-in only, with your data protected end to end.'],
          ['📱', 'Works Anywhere', 'Fully responsive — track expenses on mobile, tablet, or desktop.'],
        ].map(([icon, title, desc]) => (
          <div key={title} className="glass-card">
            <div className="text-3xl">{icon}</div>
            <h3 className="text-lg font-bold mt-3">{title}</h3>
            <p className="text-teal-100/70 text-sm mt-2">{desc}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

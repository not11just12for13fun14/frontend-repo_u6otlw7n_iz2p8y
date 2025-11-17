import React from 'react'
import { Menu, MessageSquare, Rocket, Sparkles } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 flex items-center justify-center text-white">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold tracking-tight">Aura Agents</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#integrations" className="text-gray-600 hover:text-gray-900">Integrations</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="/test" className="text-gray-600 hover:text-gray-900">Status</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow hover:shadow-md transition"
            >
              Launch on Telegram
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg border border-gray-300">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

import React from 'react'
import { Bot, PhoneCall, Headphones, CreditCard, Shield, Gauge } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group p-6 rounded-2xl border border-gray-200 hover:border-gray-300 bg-white/70 backdrop-blur transition">
    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-sm mb-4">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
)

const Features = () => {
  const items = [
    { icon: Bot, title: 'AI Agents', desc: 'Multi-turn dialogue, tools, retrieval, and memory out of the box.' },
    { icon: PhoneCall, title: 'Voice-first', desc: 'Real-time voice experiences with low-latency streaming.' },
    { icon: Headphones, title: 'Support Automations', desc: 'Auto-resolve common tickets and route complex ones to humans.' },
    { icon: CreditCard, title: 'Monetization', desc: 'Subscriptions and one-time purchases via Telegram Payments.' },
    { icon: Shield, title: 'Enterprise-grade', desc: 'SSO, roles, audit logs, and data residency controls.' },
    { icon: Gauge, title: 'Analytics', desc: 'Track sessions, retention, and revenue with built-in dashboards.' },
  ]

  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 top-10 w-72 h-72 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-72 h-72 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Everything you need to ship fast</h2>
          <p className="text-gray-600 mt-2">Focus on your product — we handle auth, billing, hosting, and compliance.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

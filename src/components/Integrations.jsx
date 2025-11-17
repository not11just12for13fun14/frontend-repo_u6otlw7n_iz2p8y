import React from 'react'
import { MessageSquare, Slack, Github, Database, Zap } from 'lucide-react'

const IntegrationBadge = ({ name }) => (
  <div className="px-3 py-2 rounded-lg border border-gray-200 bg-white/70 text-sm text-gray-700 flex items-center gap-2">
    <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
    {name}
  </div>
)

const Integrations = () => {
  const items = ['Telegram Mini Apps', 'OpenAI / Anthropic', 'Webhooks', 'Postgres & MongoDB', 'Slack', 'Zapier']

  return (
    <section id="integrations" className="py-16 md:py-24 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Connect to your stack</h2>
          <p className="text-gray-600 mt-2">Drop-in integrations that work with your current tools and data sources.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {items.map((name) => (
            <IntegrationBadge key={name} name={name} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white/70 p-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold">Telegram-native</h3>
              <p className="text-sm text-gray-600 mt-2">Ship seamless mini apps with deep link auth, payments, and bot tooling baked in.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>One-tap sign-in</li>
                <li>Payments & subscriptions</li>
                <li>Inline & full-screen modes</li>
              </ul>
            </div>
            <div className="aspect-video rounded-xl border border-gray-200 bg-gradient-to-br from-purple-100 via-blue-100 to-orange-50" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations

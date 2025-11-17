import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-200 via-blue-200 to-orange-100 opacity-60 blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-purple-200/60 bg-purple-50 text-purple-700 mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-500" />
            Built for Telegram Mini Apps
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Launch AI agents inside Telegram — in minutes
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            Create voice-powered assistants, automate chats, and accept payments with a modern, secure mini app experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition shadow">
              Start free
            </a>
            <a href="#integrations" className="px-5 py-3 rounded-lg border border-gray-300 hover:border-gray-400">
              See integrations
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-br from-purple-400 to-blue-400" />
              ))}
            </div>
            <p>Trusted by teams shipping AI features</p>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-gray-200 bg-white/60">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero

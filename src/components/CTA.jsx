import React from 'react'

const CTA = () => {
  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'radial-gradient(600px circle at 20% 20%, #7c3aed, transparent 40%), radial-gradient(800px circle at 80% 60%, #2563eb, transparent 45%)' }} />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to launch your AI agent?</h2>
              <p className="text-indigo-100 mt-2">Spin up a production-ready mini app in minutes. No ops, no glue code.</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="px-5 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-100">Start free</a>
                <a href="#pricing" className="px-5 py-3 rounded-lg border border-white/30 hover:bg-white/10">Compare plans</a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold">5m</div>
                    <div className="text-xs text-indigo-200">setup</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-xs text-indigo-200">uptime</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold">GDPR</div>
                    <div className="text-xs text-indigo-200">ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

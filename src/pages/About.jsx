import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeUp } from '../components/FadeUp'
import dashboardImage from '../assets/dashboard.jpeg'
import shopsImage from '../assets/shops.jpeg'

const principles = [
  {
    title: 'Reliability',
    body: 'Built for real routes and real network conditions. If the signal drops in the market, work should not stop.',
  },
  {
    title: 'Simplicity',
    body: 'Designed for speed in the field. Clear screens, fewer taps, and only what each role actually needs.',
  },
  {
    title: 'Offline-first',
    body: 'We assume connectivity will fail. Orders and visits keep moving, then sync when devices reconnect.',
  },
]

const stats = [
  { value: 2, suffix: '+', label: 'Brands Onboarded' },
  { value: 1300, suffix: '+', label: 'Orders Daily' },
  { value: 100, suffix: '%', label: 'Offline First' },
  { value: 2025, label: 'Year Founded' },
]

function useCountUp(target, duration = 1100) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return undefined

    let frameId
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(progress * target)
      if (progress < 1) frameId = window.requestAnimationFrame(tick)
    }

    frameId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frameId)
  }, [duration, isInView, target])

  return { ref, count }
}

function CountUpStat({ value, prefix = '', suffix = '', label }) {
  const { ref, count } = useCountUp(value)
  const hasDecimal = Number.isInteger(value) ? 0 : 1
  const formatted = count.toFixed(hasDecimal)

  return (
    <div>
      <p ref={ref} className="text-3xl font-semibold text-[#c0c1ff]">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="mt-1 text-xs uppercase tracking-wider text-[#908fa0]">{label}</p>
    </div>
  )
}

export function About() {
  return (
    <div className="dot-grid min-h-[calc(100vh-4rem)] text-[#e4e1ed]">
      <main className="mx-auto w-full max-w-7xl space-y-14 px-6 pb-16 pt-36">
        <section className="rounded-2xl border border-[#464554]/50 bg-gradient-to-br from-[#0A0F1E] to-[#111827] p-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4cd7f6]">Our Mission</p>
              <h1 className="mt-3 text-4xl font-bold">About Bookflow</h1>
              <p className="mt-4 text-[#c7c4d7]">
                Bookflow is a field sales and distribution platform built for FMCG teams in traditional trade. It connects sales teams, team leads, distributors and head office on one shared system—so what happens in market shows up in your reports the same day.
              </p>
            </motion.div>
            <motion.div
              className="glass-card rounded-xl p-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={dashboardImage} alt="Mission visual" className="h-[280px] w-full rounded-lg object-cover" />
            </motion.div>
          </div>
        </section>

        <section className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            className="glass-card rounded-xl p-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={shopsImage} alt="Distribution focus" className="h-[320px] w-full rounded-lg object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-semibold">Built for the way distribution actually runs.</h2>
            <p className="mt-4 text-[#c7c4d7]">
              Bookflow is designed around real constraints—busy shops, weak connectivity, distributor dependencies, and the need for clean daily reporting.
            </p>
          </motion.div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Our Core Principles</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.1}>
                <motion.article whileHover={{ y: -4 }} className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-[#c7c4d7]">{item.body}</p>
                </motion.article>
              </FadeUp>
            ))}
          </div>
        </section>

        <FadeUp>
          <section className="glass-card rounded-xl p-8">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
              {stats.map((stat) => (
                <CountUpStat
                  key={stat.label}
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </section>
        </FadeUp>
      </main>
    </div>
  )
}

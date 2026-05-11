import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/Button'
import { FadeUp } from '../components/FadeUp'

const stats = [
  { label: 'App Roles', value: 4 },
  { label: 'User Types', value: 3 },
  { label: 'Offline Capable', value: 100, suffix: '%' },
  { label: 'FMCG Brands', value: 2, suffix: '+' },
]

const featureRows = [
  {
    label: 'FOR SALES TEAM',
    accent: 'text-[#4cd7f6]',
    items: [
      ['Offline booking that just works', 'Capture clean orders even with zero signal—sync when you are back online.'],
      ['Drafts you can finish later', 'Pause an order and complete it when the shop is ready—no retyping.'],
      ['See order status in the app', 'Reps can quickly see whether an order is pending, completed or cancelled before they talk to the shop again.'],
    ],
  },
  {
    label: 'FOR MANAGERS',
    accent: 'text-[#c0c1ff]',
    items: [
      ['Use shops saved by your team', 'Team leads can open and work with shops created by their own sales team without recreating customers or sharing logins.'],
      ['Keep distributor stock aligned', 'Update physical distributor stock during visits so the system matches what is actually in the warehouse.'],
      ['Check order status for your visits', 'See the status of orders you placed from shops you visited so you only chase what is actually stuck.'],
    ],
  },
  {
    label: 'FOR DISTRIBUTORS',
    accent: 'text-[#ffb783]',
    items: [
      ['Orders ready to execute', 'Orders saved by the sales team appear instantly in the distributor app, ready to be picked and dispatched.'],
      ['Inventory visible in the app', 'Distributors see current stock levels in the app so they know what can be promised today.'],
      ['Record direct distributor sales', 'Log sales made directly from the warehouse so stock and sales stay aligned with what the field sees.'],
    ],
  },
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
      setCount(Math.round(progress * target))
      if (progress < 1) frameId = window.requestAnimationFrame(tick)
    }

    frameId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frameId)
  }, [duration, isInView, target])

  return { ref, count }
}

function CountUpStat({ value, suffix = '' }) {
  const { ref, count } = useCountUp(value)

  return (
    <p ref={ref} className="text-3xl font-semibold text-[#c0c1ff]">
      {count}
      {suffix}
    </p>
  )
}

export function Features() {
  return (
    <div className="dot-grid min-h-[calc(100vh-4rem)] text-[#e4e1ed]">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-36">
        <section className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#8083ff]/30 bg-[#8083ff]/10 px-4 py-1 text-xs font-medium text-[#c0c1ff]">
            ALL-IN-ONE SOLUTION
          </p>
          <FadeUp delay={0}>
            <h1 className="mt-5 text-5xl font-bold tracking-tight">Everything your field team needs</h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mx-auto mt-4 max-w-2xl text-[#c7c4d7]">
              OrderBooker brings offline orders, GPS attendance, distributor execution and daily reporting into one app that works in the real world.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button as={NavLink} to="/contact">Get Started Today</Button>
              <Button as={NavLink} to="/" variant="secondary">View Home</Button>
            </div>
          </FadeUp>
        </section>

        <section className="mt-12">
          <FadeUp>
            <div className="glass-card grid grid-cols-2 gap-4 rounded-2xl p-6 text-center md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <CountUpStat value={stat.value} suffix={stat.suffix} />
                  <p className="text-xs uppercase tracking-wider text-[#908fa0]">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        <section className="mt-14 space-y-12">
          {featureRows.map((row) => (
            <div key={row.label}>
              <FadeUp>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#464554]/70" />
                  <h2 className={`text-xs font-semibold tracking-[0.22em] ${row.accent}`}>{row.label}</h2>
                  <div className="h-px flex-1 bg-[#464554]/70" />
                </div>
              </FadeUp>
              <div className="grid gap-5 md:grid-cols-3">
                {row.items.map(([title, body], index) => (
                  <FadeUp key={title} delay={index * 0.1}>
                    <motion.article whileHover={{ y: -4 }} className="glass-card rounded-2xl p-6">
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="mt-3 text-sm text-[#c7c4d7]">{body}</p>
                    </motion.article>
                  </FadeUp>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

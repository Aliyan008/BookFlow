import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { NavLink } from 'react-router-dom'

const featureCards = [
  {
    title: 'GPS Attendance',
    description: 'See who actually checked in from the market, not the sofa.',
  },
  {
    title: 'Order Booking',
    description: 'Fast, structured order capture built for traditional trade.',
  },
  {
    title: 'Distributor Management',
    description: 'Sync orders with distributors and keep stock and sales aligned.',
  },
  {
    title: 'Daily Reports',
    description: 'Automatic end-of-day summaries for visits, orders, and value.',
  },
  {
    title: 'Leave Management',
    description: 'Simple leave requests and approvals that stay in sync with attendance.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Start with GPS attendance',
    description: 'Order booker checks in from the field and their day begins.',
  },
  {
    step: '02',
    title: 'Visit assigned shops',
    description: 'Each rep follows their beat plan and hits the right outlets.',
  },
  {
    step: '03',
    title: 'Book orders in seconds',
    description: 'Ready-made product lists, pricing and schemes on one screen.',
  },
  {
    step: '04',
    title: 'Sync with distributors',
    description: 'Orders are shared so stock can be reserved and dispatched on time.',
  },
  {
    step: '05',
    title: 'Review live performance',
    description: 'Managers see visits, coverage and orders for the day in one view.',
  },
]

const personas = [
  {
    title: 'For Field Reps',
    bullets: [
      'Offline order booking that just works.',
      'Beat-wise shop lists and history.',
      'Clear daily targets and progress.',
    ],
  },
  {
    title: 'For Sales Managers',
    bullets: [
      'Live view of who is in field.',
      'Coverage and productivity by beat.',
      'Clean, exportable daily reports.',
    ],
  },
  {
    title: 'For Distributors',
    bullets: [
      'Orders tied to real inventory.',
      'Simple sales and stock visibility.',
      'Less manual reconciliation.',
    ],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
  viewport: { once: true, amount: 0.2 },
})

export function Home() {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem-4rem)] flex-col bg-white text-[#0a0a0a]">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-gradient-to-b from-[#F9FAFF] via-white to-white">
        <div className="mx-auto flex min-h-[calc(100vh-4rem-4rem)] max-w-6xl flex-col gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8">
          <motion.div
            className="max-w-xl space-y-7"
            {...fadeUp(0)}
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100">
              Built for FMCG & distribution teams
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#050816] sm:text-5xl lg:text-[2.9rem]">
              Field Sales, Simplified.
            </h1>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              GPS attendance, order booking, distributor management and daily
              reporting — all in one app that works even offline.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button as={NavLink} to="/contact">
                Request a Demo
              </Button>
              <Button
                variant="ghost"
                type="button"
                onClick={scrollToHowItWorks}
                className="border border-neutral-200 bg-white/60 hover:bg-neutral-50"
              >
                See How It Works
              </Button>
            </div>
            <p className="text-xs text-neutral-500">
              Trusted by distribution and FMCG teams to digitize field
              operations across Pakistan.
            </p>
          </motion.div>

          <motion.div
            className="relative flex w-full justify-center lg:justify-end"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="pointer-events-none absolute inset-0 -z-10 translate-y-6 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%)]" />
            <motion.div
              className="relative w-full max-w-xs rounded-[2rem] border border-white/60 bg-gradient-to-b from-white via-white to-neutral-50 p-3 shadow-[0_18px_60px_rgba(15,23,42,0.15)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-neutral-200" />
              <div className="space-y-3 rounded-[1.5rem] bg-neutral-950 px-4 py-4 text-xs text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                    Today
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-[11px]">
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-neutral-400">Bookers in field</p>
                    <p className="mt-1 text-lg font-semibold">152</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-neutral-400">Orders booked</p>
                    <p className="mt-1 text-lg font-semibold">3,482</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-neutral-400">Coverage</p>
                    <p className="mt-1 text-lg font-semibold">93%</p>
                  </div>
                </div>
                <div className="space-y-2 rounded-xl bg-white/5 p-3">
                  <p className="text-[11px] text-neutral-300">
                    Next 30 minutes
                  </p>
                  <div className="flex items-center justify-between text-[11px]">
                    <span>Beat Sahiwal-02</span>
                    <span className="text-neutral-400">6 shops left</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-neutral-800">
                    <div className="h-full w-2/3 rounded-full bg-indigo-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            className="mb-10 max-w-2xl"
            {...fadeUp(0)}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Everything your field team needs.
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              OrderBooker keeps order bookers, sales managers and distributors
              on the same page — without extra spreadsheets or WhatsApp groups.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {featureCards.map((feature, idx) => (
              <motion.article
                key={feature.title}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-100 transition hover:shadow-lg"
                {...fadeUp(0.05 * idx)}
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <span className="text-xs font-semibold">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-b border-neutral-200 bg-[#F9FAFB]"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            className="mb-10 max-w-2xl"
            {...fadeUp(0)}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              How it works for an order booker.
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              A simple day-in-the-life flow that keeps visits, orders and
              dispatch tightly connected.
            </p>
          </motion.div>

          <motion.ol
            className="grid gap-6 md:grid-cols-5"
            {...fadeUp(0.05)}
          >
            {steps.map((step) => (
              <li key={step.step} className="relative">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                  {step.step}
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Personas */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            className="mb-10 max-w-2xl"
            {...fadeUp(0)}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Built for every role in the route-to-market.
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              OrderBooker aligns incentives for reps, managers and distributors
              instead of forcing everyone into one generic tool.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {personas.map((persona, idx) => (
              <motion.article
                key={persona.title}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100 transition hover:shadow-lg"
                {...fadeUp(0.05 * idx)}
              >
                <h3 className="text-sm font-semibold text-neutral-900">
                  {persona.title}
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-neutral-600">
                  {persona.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
            {...fadeUp(0)}
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to transform your field sales?
              </h2>
              <p className="mt-3 max-w-xl text-sm text-neutral-300">
                Book a short call to see how OrderBooker can roll out across
                your distributors in weeks, not months.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button as={NavLink} to="/contact">
                Get in Touch
              </Button>
              <Button as={NavLink} to="/features" variant="secondary">
                Explore Features
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


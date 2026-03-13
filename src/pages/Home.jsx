import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { NavLink } from 'react-router-dom'
import heroDashboard from '../assets/dashboard.jpeg'
import attendanceImage from '../assets/attendance_page.jpeg'
import ordersImage from '../assets/orders_page.jpeg'
import stockManagementImage from '../assets/stock_management.jpeg'
import dailyReportImage from '../assets/daily_report.jpeg'
import realtimeLocationImage from '../assets/realtime_location.jpeg'

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

const stats = [
  { label: 'Orders booked daily', value: '500+' },
  { label: 'User roles', value: '3' },
  { label: 'Offline ready', value: '100%' },
  { label: 'GPS tracking', value: 'Real-time' },
]

const showcaseFeatures = [
  {
    key: 'gps',
    title: 'GPS Attendance',
    description:
      'See exactly who checked in from the field, not the office. Attendance is tied to real locations so “present” actually means in market.',
    image: realtimeLocationImage,
    badge: 'Field presence',
  },
  {
    key: 'orders',
    title: 'Order Booking',
    description:
      'Give order bookers a fast, structured way to capture orders with products, pricing and schemes in one view—online or offline.',
    image: ordersImage,
    badge: 'Revenue',
  },
  {
    key: 'distributors',
    title: 'Distributor Management',
    description:
      'Share orders with distributors in time for dispatch, keep stock and sales aligned and reduce manual back-and-forth.',
    image: stockManagementImage,
    badge: 'Execution',
  },
  {
    key: 'reports',
    title: 'Daily Reports',
    description:
      'Automatic end-of-day summaries for visits, productive shops and sales so managers don’t chase screenshots or WhatsApp updates.',
    image: dailyReportImage,
    badge: 'Visibility',
  },
  {
    key: 'leave',
    title: 'Leave Management',
    description:
      'Simple leave requests and approvals, kept in sync with attendance so you never mark someone both “on leave” and “present.”',
    image: attendanceImage,
    badge: 'HR clarity',
  },
]

export function Home() {
  const [activeShowcase, setActiveShowcase] = useState(showcaseFeatures[0].key)

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShowcase((prev) => {
        const currentIndex = showcaseFeatures.findIndex(
          (feature) => feature.key === prev,
        )
        const nextIndex =
          currentIndex === -1 || currentIndex === showcaseFeatures.length - 1
            ? 0
            : currentIndex + 1
        return showcaseFeatures[nextIndex].key
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

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
              className="relative w-full max-w-lg rounded-[2rem] border border-white/60 bg-gradient-to-b from-white via-white to-neutral-50 p-3 shadow-[0_18px_60px_rgba(15,23,42,0.15)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-neutral-200" />
              <div className="overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-950/90">
                <img
                  src={heroDashboard}
                  alt="OrderBooker web dashboard"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-neutral-200 bg-indigo-50/80">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-4 text-sm text-neutral-700 sm:grid-cols-4"
            {...fadeUp(0.05)}
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-center shadow-sm shadow-neutral-100"
              >
                <p className="text-base font-semibold text-indigo-600">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-neutral-600">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product showcase */}
      <section className="border-b border-neutral-200 bg-[#F5F7FF]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            className="mb-8 max-w-2xl"
            {...fadeUp(0)}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              See OrderBooker in action.
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Switch between core features to see how OrderBooker supports your
              teams in the field and at head office.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]">
            {/* Tabs + text */}
            <motion.div
              className="space-y-5"
              {...fadeUp(0.05)}
            >
              <div className="flex flex-wrap gap-2">
                {showcaseFeatures.map((feature) => {
                  const isActive = feature.key === activeShowcase
                  return (
                    <button
                      key={feature.key}
                      type="button"
                      onClick={() => setActiveShowcase(feature.key)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                        isActive
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {feature.title}
                    </button>
                  )
                })}
              </div>

              {showcaseFeatures.map((feature) => {
                if (feature.key !== activeShowcase) return null
                return (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="space-y-3"
                  >
                    <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-indigo-700">
                      {feature.badge}
                    </p>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-700">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Screenshot */}
            <motion.div
              className="flex items-center justify-center"
              {...fadeUp(0.1)}
            >
              {showcaseFeatures.map((feature) => {
                if (feature.key !== activeShowcase) return null
                return (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950/90 shadow-[0_18px_60px_rgba(15,23,42,0.35)]"
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why OrderBooker */}
      <section id="features" className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            className="mb-10 max-w-2xl"
            {...fadeUp(0)}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Why teams choose OrderBooker.
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              OrderBooker keeps order bookers, sales managers and distributors
              aligned—from first check-in to final dispatch and reporting.
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
        className="border-b border-neutral-200 bg-[#EEF2FF]"
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
      <section className="border-b border-neutral-200 bg-[#F9FAFF]">
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


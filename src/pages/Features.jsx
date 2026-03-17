import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/Button'

const features = [
  {
    headline: 'Work anywhere. Sync when you’re back online.',
    body: 'Create and edit orders without internet. When you’re back online, tap Sync and your orders go through. No lost sales in areas with poor signal.',
  },
  {
    headline: 'Everyone sees the right shops.',
    body: 'Order bookers see only their assigned shops. Managers see their team’s shops. No mix-ups, no wrong-territory orders.',
  },
  {
    headline: 'Verify visits with GPS.',
    body: 'Check-in and check-out use your phone’s location. You can trust that “visited” really means the rep was at the shop.',
  },
  {
    headline: 'Attendance and leave in one place.',
    body: 'The app makes sure you’re either on duty or on leave—never both for the same day. Clean records for payroll.',
  },
  {
    headline: 'Save orders as drafts.',
    body: 'Start an order, save it, and finish it later when the shop is ready or when you’re back online. No re-typing everything.',
  },
  {
    headline: 'From order to delivery to returns.',
    body: 'See what was ordered, what was delivered, and any returns—all linked in one place for clear reporting.',
  },
  {
    headline: 'Distributors: sales and stock together.',
    body: 'Distributors see their sales and update stock in the same app. No separate tools; everything stays in sync.',
  },
  {
    headline: 'Note competitor activity.',
    body: 'Reps can log when competitors are active at a shop. Simple way to see where the competition is showing up.',
  },
  {
    headline: 'Daily reports for every role.',
    body: 'Order bookers get a quick summary of their day. Managers see team totals. One app, no Excel or WhatsApp for “today’s numbers.”',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
  viewport: { once: true, amount: 0.2 },
})

export function Features() {
  return (
    <div className="min-h-[calc(100vh-4rem-4rem)] bg-white text-[#0a0a0a]">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Hero */}
        <motion.section
          className="mb-12 text-center sm:mb-16"
          {...fadeUp(0)}
        >
          <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100">
            Product · Features
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Everything your field team needs in one app.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600 sm:text-base">
            OrderBooker brings offline order booking, GPS-verified attendance, distributor
            coordination and role-based reporting into a single, offline-ready mobile app.
          </p>
        </motion.section>

        {/* Feature cards */}
        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.article
                key={feature.headline}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100 transition hover:-translate-y-0.5 hover:shadow-lg"
                {...fadeUp(0.05 * idx)}
              >
                <h2 className="text-base font-semibold tracking-tight text-neutral-900">
                  {feature.headline}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  {feature.body}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* By role */}
        <motion.section
          className="mb-16 rounded-2xl border border-neutral-200 bg-[#F9FAFF] p-6 sm:p-8"
          {...fadeUp(0.1)}
        >
          <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
            Designed for every role in your route-to-market.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">
            Order bookers, sales managers and distributors all work from the same source
            of truth—instead of juggling separate tools and spreadsheets.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <article className="flex h-full flex-col rounded-2xl border border-white bg-white/80 p-5 shadow-sm shadow-neutral-100">
              <h3 className="text-sm font-semibold text-neutral-900">
                Order bookers
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-neutral-600">
                <li>• Book orders offline and sync later.</li>
                <li>• Beat-wise shop lists and visit history.</li>
                <li>• Clear daily targets and end-of-day summary.</li>
              </ul>
            </article>
            <article className="flex h-full flex-col rounded-2xl border border-white bg-white/80 p-5 shadow-sm shadow-neutral-100">
              <h3 className="text-sm font-semibold text-neutral-900">
                Sales officers & managers
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-neutral-600">
                <li>• Live visibility on who is in field.</li>
                <li>• Coverage, productivity and beat performance.</li>
                <li>• Clean daily reports—no chasing screenshots.</li>
              </ul>
            </article>
            <article className="flex h-full flex-col rounded-2xl border border-white bg-white/80 p-5 shadow-sm shadow-neutral-100">
              <h3 className="text-sm font-semibold text-neutral-900">
                Distributors
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-neutral-600">
                <li>• Orders tied directly to real inventory.</li>
                <li>• Simple view of sales and stock in one place.</li>
                <li>• Less manual reconciliation with the field.</li>
              </ul>
            </article>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          className="rounded-2xl bg-gradient-to-r from-[#020617] via-[#020617] to-[#0B1120] px-6 py-10 text-white sm:px-10 sm:py-12"
          {...fadeUp(0.15)}
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Seen what OrderBooker can do?
              </h2>
              <p className="mt-3 max-w-xl text-sm text-neutral-300">
                Share your field structure and we’ll show you exactly how OrderBooker
                can fit your outlets, reps and distributors.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button as={NavLink} to="/contact">
                Request a demo
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

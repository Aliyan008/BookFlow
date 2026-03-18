import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/Button'
import analyticsImage from '../assets/analytics.jpeg'
import dashboardImage from '../assets/dashboard.jpeg'
import attendanceAppImage from '../assets/attendance_app.jpeg'
import homeTabImage from '../assets/home_tab.jpeg'
import attendancePageImage from '../assets/attendance_page.jpeg'
import ordersPageImage from '../assets/orders_page.jpeg'
import stockManagementImage from '../assets/stock_management.jpeg'
import dailyReportImage from '../assets/daily_report.jpeg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
  viewport: { once: true, amount: 0.2 },
})

const stats = [
  { label: 'Active users today', value: '200+' },
  { label: 'Orders processed', value: '1,000+' },
  { label: 'Offline-ready platform', value: '100%' },
  { label: 'Early partner brands', value: '2+' },
]

const featureRows = [
  {
    label: 'For sales team',
    items: [
      {
        title: 'Offline booking that just works',
        body: 'Capture clean orders even with zero signal—sync when you are back online.',
      },
      {
        title: 'Drafts you can finish later',
        body: 'Pause an order and complete it when the shop is ready—no retyping.',
      },
      {
        title: 'See order status in the app',
        body: 'Reps can quickly see whether an order is pending, completed or cancelled before they talk to the shop again.',
      },
    ],
  },
  {
    label: 'For managers',
    items: [
      {
        title: 'Use shops saved by your team',
        body: 'Team leads can open and work with shops created by their own sales team without recreating customers or sharing logins.',
      },
      {
        title: 'Keep distributor stock aligned',
        body: 'Update physical distributor stock during visits so the system matches what is actually in the warehouse.',
      },
      {
        title: 'Check order status for your visits',
        body: 'See the status of orders you placed from shops you visited so you only chase what is actually stuck.',
      },
    ],
  },
  {
    label: 'For distributors',
    items: [
      {
        title: 'Orders ready to execute',
        body: 'Orders saved by the sales team appear instantly in the distributor app, ready to be picked and dispatched.',
      },
      {
        title: 'Inventory visible in the app',
        body: 'Distributors see current stock levels in the app so they know what can be promised today.',
      },
      {
        title: 'Record direct distributor sales',
        body: 'Log sales made directly from the warehouse so stock and sales stay aligned with what the field sees.',
      },
    ],
  },
]

const storyboardSteps = [
  {
    title: '1. Rep starts the day',
    body: 'Check in with GPS so the system knows who is really in market.',
    image: attendancePageImage,
  },
  {
    title: '2. Visit assigned shops',
    body: 'Follow the beat plan and open shop profiles with full history.',
    image: homeTabImage,
  },
  {
    title: '3. Book the order fast',
    body: 'Structured order screen with products, pricing and schemes.',
    image: ordersPageImage,
  },
  {
    title: '4. Distributor prepares stock',
    body: 'Orders sync to distributor so stock and delivery can be planned.',
    image: stockManagementImage,
  },
  {
    title: '5. Manager reviews the day',
    body: 'Dashboards and reports show visits, coverage and sales in minutes.',
    image: dailyReportImage,
  },
]

const spotlightTabs = [
  {
    key: 'ops',
    label: 'Operations panel',
    title: 'Every order and distributor stock entry in one place.',
    image: ordersPageImage,
    bullets: [
      'See all orders from the field and direct distributor sales in one console.',
      'Filter by distributor, city or route to prep dispatch and invoicing.',
      'Export clean data for finance, logistics and reconciliations.',
    ],
  },
  {
    key: 'analytics',
    label: 'Analytics & dashboards',
    title: 'Dashboards for orders, execution and coverage.',
    image: dashboardImage,
    bullets: [
      'Track orders and execution by zone, city, shop type and distributor.',
      'See which distributors, areas and SKUs are growing, flat or declining.',
      'Drill into gaps before they show up at month-end.',
    ],
  },
  {
    key: 'people',
    label: 'Attendance & HR',
    title: 'Attendance and leave that match reality.',
    image: attendancePageImage,
    bullets: [
      'View GPS-based attendance records coming from the field app.',
      'Manage leave requests and approvals against your attendance rules.',
      'Export-ready records for payroll and compliance teams.',
    ],
  },
]

const personas = [
  {
    title: 'Order bookers',
    bullets: [
      'Beat-wise shop lists and visit history.',
      'Fast, structured order booking.',
      'Clear progress against daily targets.',
    ],
    image: ordersPageImage,
  },
  {
    title: 'Sales managers',
    bullets: [
      'Live view of who is in field.',
      'Coverage and productivity by beat.',
      'One dashboard for today’s numbers.',
    ],
    image: analyticsImage,
  },
  {
    title: 'Distributors',
    bullets: [
      'Orders tied directly to stock.',
      'Sales and stock in one place.',
      'Less reconciliation with your sales team.',
    ],
    image: stockManagementImage,
  },
]

export function Features() {
  const [activeSpotlight, setActiveSpotlight] = useState(spotlightTabs[0].key)

  const activeSpotlightTab =
    spotlightTabs.find((tab) => tab.key === activeSpotlight) ?? spotlightTabs[0]

  return (
    <div className="min-h-[calc(100vh-4rem-4rem)] bg-white text-[#0a0a0a]">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Hero */}
        <motion.section
          className="mb-10 text-center sm:mb-12"
          {...fadeUp(0)}
        >
          <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100">
            Product · Features
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Everything your field team needs, together.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            OrderBooker brings offline orders, GPS attendance, distributor execution and
            daily reporting into one app that works in the real world—not just in slides.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Button as={NavLink} to="/contact">
              Request a demo
            </Button>
            <Button
              as={NavLink}
              to="/"
              variant="ghost"
              className="border border-neutral-200 bg-white/70 hover:bg-neutral-50"
            >
              See Home page
            </Button>
          </div>
        </motion.section>

        {/* Stat bar */}
        <section className="mb-14">
          <motion.div
            className="grid gap-4 rounded-2xl border border-neutral-200 bg-[#F9FAFF] px-4 py-5 text-sm text-neutral-700 sm:grid-cols-4 sm:px-6"
            {...fadeUp(0.05)}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start gap-1 sm:items-center"
              >
                <p className="text-base font-semibold text-indigo-600">
                  {stat.value}
                </p>
                <p className="text-xs text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Features by role rows */}
        <section className="mb-14 space-y-10">
          {featureRows.map((row, rowIdx) => (
            <div key={row.label} className="space-y-4">
              <motion.div
                className="flex items-center justify-between gap-4"
                {...fadeUp(0.05 * rowIdx)}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-indigo-700 ring-1 ring-indigo-100">
                  {row.label}
                </div>
              </motion.div>
              <div className="grid gap-6 sm:grid-cols-3">
                {row.items.map((item, idx) => (
                  <motion.article
                    key={item.title}
                    className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-100 transition hover:-translate-y-0.5 hover:shadow-lg"
                    {...fadeUp(0.05 * idx + 0.05 * rowIdx)}
                  >
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                      {item.body}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Before vs After */}
        <motion.section
          className="mb-14 grid gap-6 rounded-2xl border border-neutral-200 bg-white p-6 sm:grid-cols-2 sm:p-8"
          {...fadeUp(0.05)}
        >
          <div>
            <p className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
              Before Bookflow
            </p>
            <h2 className="mt-3 text-sm font-semibold text-neutral-900">
              Screenshots, spreadsheets and guesswork.
            </h2>
            <ul className="mt-3 space-y-2 text-xs text-neutral-600">
              <li>• Reps send photos of notebooks and WhatsApp messages.</li>
              <li>• Managers chase attendance and route plans in different tools.</li>
              <li>• Distributors work off half-updated Excel files.</li>
            </ul>
          </div>
          <div>
            <p className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-indigo-700">
              After Bookflow
            </p>
            <h2 className="mt-3 text-sm font-semibold text-neutral-900">
              One app, one source of truth.
            </h2>
            <ul className="mt-3 space-y-2 text-xs text-neutral-600">
              <li>• Orders, attendance and visits captured in the same workflow.</li>
              <li>• Managers open one dashboard for today’s field reality.</li>
              <li>• Distributors see exactly what to dispatch and what is in stock.</li>
            </ul>
          </div>
        </motion.section>

        {/* Admin panel spotlight */}
        <section className="mb-14 rounded-3xl bg-[#0F172A] text-slate-100">
          <div className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <motion.div
              className="mb-6 flex flex-wrap items-center justify-between gap-4"
              {...fadeUp(0)}
            >
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  The Bookflow admin panel.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-300">
                  Every order, distributor stock entry, attendance record and dashboard
                  view in one browser-based workspace for your head office team.
                </p>
              </div>
              <div className="flex gap-2 rounded-full bg-slate-900/70 p-1 ring-1 ring-slate-700/70">
                {spotlightTabs.map((tab) => {
                  const isActive = tab.key === activeSpotlight
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveSpotlight(tab.key)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                        isActive
                          ? 'bg-indigo-500 text-white shadow-sm'
                          : 'text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-center"
              {...fadeUp(0.05)}
            >
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-indigo-200">
                  {activeSpotlightTab.label}
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {activeSpotlightTab.title}
                </h3>
                <ul className="space-y-2 text-sm text-slate-100">
                  {activeSpotlightTab.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/90 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
                  <img
                    src={activeSpotlightTab.image}
                    alt={activeSpotlightTab.label}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <motion.section
          className="rounded-2xl bg-gradient-to-r from-[#020617] via-[#020617] to-[#0B1120] px-6 py-10 text-white sm:px-10 sm:py-12"
          {...fadeUp(0.1)}
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to map this to your field team?
              </h2>
              <p className="mt-3 max-w-xl text-sm text-neutral-300">
                Share how your reps, managers and distributors work today and we’ll walk
                you through a live OrderBooker workspace that mirrors your routes.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button as={NavLink} to="/contact">
                Talk to us about your setup
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

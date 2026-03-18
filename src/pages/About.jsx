import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
  viewport: { once: true, amount: 0.2 },
})

const values = [
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

export function About() {
  return (
    <div className="min-h-[calc(100vh-4rem-4rem)] bg-white text-[#0a0a0a]">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Hero */}
        <motion.section
          className="relative mb-12 overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-b from-[#F9FAFF] via-white to-white px-6 py-10 text-left sm:mb-16 sm:px-10"
          {...fadeUp(0)}
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
            <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute -bottom-28 left-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
          </div>
          <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100">
            Company · About
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            About Bookflow
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-neutral-700 sm:text-base">
            Bookflow is a field sales and distribution platform built for FMCG teams in
            traditional trade. It connects sales teams, team leads, distributors and head
            office on one shared system—so what happens in market shows up in your reports
            the same day.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs text-neutral-700 ring-1 ring-neutral-200">
              Mobile app for field teams
            </span>
            <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs text-neutral-700 ring-1 ring-neutral-200">
              Distributor execution & stock
            </span>
            <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs text-neutral-700 ring-1 ring-neutral-200">
              Admin panel for reporting & HR
            </span>
          </div>
        </motion.section>

        {/* What we build */}
        <motion.section
          className="mb-14"
          {...fadeUp(0.05)}
        >
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Built for the way distribution actually runs.
            </h2>
            <p className="mt-3 text-sm text-neutral-600 sm:text-base">
              Bookflow is designed around real constraints—busy shops, weak connectivity,
              distributor dependencies, and the need for clean daily reporting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <p className="inline-flex w-fit items-center rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-indigo-700 ring-1 ring-indigo-100">
                Field teams
              </p>
              <h3 className="mt-4 text-sm font-semibold text-neutral-900">
                Sales team workflow
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                Fast order booking, order status visibility, and day-to-day flows that
                reps can learn in one route.
              </p>
            </article>

            <article className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <p className="inline-flex w-fit items-center rounded-full bg-fuchsia-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-fuchsia-700 ring-1 ring-fuchsia-100">
                Distributors
              </p>
              <h3 className="mt-4 text-sm font-semibold text-neutral-900">
                Execution & inventory
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                Orders appear instantly to execute, inventory stays visible, and direct
                distributor sales can be recorded in one place.
              </p>
            </article>

            <article className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <p className="inline-flex w-fit items-center rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-700 ring-1 ring-sky-100">
                Head office
              </p>
              <h3 className="mt-4 text-sm font-semibold text-neutral-900">
                Admin panel & reporting
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                Orders, distributor stock entries, dashboards by zone/city/shop, plus
                attendance and leave management for HR.
              </p>
            </article>
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section
          className="mb-14 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-6 sm:px-8 sm:py-8"
          {...fadeUp(0.05)}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Our Mission
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700 sm:text-base">
            We want every sales visit in traditional trade to be planned, measured and
            valuable—without blind coverage, manual order books, or end-of-day chaos.
            Bookflow helps teams see what happened in market today, act faster, and
            improve service at every outlet.
          </p>
        </motion.section>

        {/* Values */}
        <motion.section
          className="mb-10"
          {...fadeUp(0.1)}
        >
          <h2 className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
            What we care about.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-600">
            Three principles shape how we design and ship Bookflow for fast-moving
            distribution teams.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {values.map((value, idx) => (
              <motion.article
                key={value.title}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                {...fadeUp(0.05 * idx)}
              >
                <h3 className="text-sm font-semibold text-neutral-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                  {value.body}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}



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
    body: 'OrderBooker is built to handle thousands of check-ins and orders every day without falling over, even in low-connectivity markets.',
  },
  {
    title: 'Simplicity',
    body: 'Field reps get a clear, focused app that fits into their day instead of fighting against it. Managers see what matters—nothing more.',
  },
  {
    title: 'Offline-First',
    body: 'Orders, visits and notes keep working when the network does not. Data syncs automatically when the device is back online.',
  },
]

export function About() {
  return (
    <div className="min-h-[calc(100vh-4rem-4rem)] bg-white text-[#0a0a0a]">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Hero */}
        <motion.section
          className="mb-12 text-left sm:mb-16"
          {...fadeUp(0)}
        >
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            About OrderBooker
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-neutral-600 sm:text-base">
            OrderBooker is a field sales and order booking platform for FMCG and
            distribution companies. We connect order bookers in the market,
            sales managers at head office, and distributors managing stock on
            the ground—inside one simple mobile app.
          </p>
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
            We want every sales visit in traditional trade to be planned,
            measured and valuable—no blind coverage, no manual order books, and
            no waiting for end-of-day reports. By giving field teams a tool that
            works the way they do, we help brands grow distribution, raise order
            value and improve service at every outlet.
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
            Three principles shape how we design and ship OrderBooker for
            fast-moving distribution teams.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {values.map((value, idx) => (
              <motion.article
                key={value.title}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100 transition hover:shadow-lg"
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



import { motion } from 'framer-motion'
import { Button } from '../components/Button'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut', delay },
  viewport: { once: true, amount: 0.2 },
})

export function Contact() {
  return (
    <div className="min-h-[calc(100vh-4rem-4rem)] bg-white text-[#0a0a0a]">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <motion.section
          className="mb-10"
          {...fadeUp(0)}
        >
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Let&apos;s talk about your field sales.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-neutral-600 sm:text-base">
            Share a few details about your company and we&apos;ll schedule a
            short demo of OrderBooker tailored to your routes, distributors and
            field team size.
          </p>
        </motion.section>

        <section className="grid gap-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100 sm:p-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
          {/* Left column */}
          <motion.div
            className="space-y-6"
            {...fadeUp(0.05)}
          >
            <div>
              <h2 className="text-sm font-semibold tracking-tight text-neutral-900 sm:text-base">
                What to expect
              </h2>
              <p className="mt-3 text-sm text-neutral-600">
                A 30–45 minute conversation to understand your current field
                process, distributors and reporting needs—followed by a live
                walk-through of how OrderBooker can fit in.
              </p>
            </div>
            <div className="space-y-3 text-sm text-neutral-600">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-600">
                  Contact
                </p>
                <p className="mt-1 text-sm">Email: text19013@gmail.com</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-600">
                  Typical response time
                </p>
                <p className="mt-1 text-sm">Within one business day.</p>
              </div>
            </div>
          </motion.div>

          {/* Right column: form */}
          <motion.form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault()
            }}
            {...fadeUp(0.1)}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-neutral-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="h-10 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Your full name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-neutral-700"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="h-10 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="company"
                  className="text-xs font-medium text-neutral-700"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="h-10 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Company or distributor name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="teamSize"
                  className="text-xs font-medium text-neutral-700"
                >
                  Approx. field team size
                </label>
                <input
                  id="teamSize"
                  name="teamSize"
                  type="text"
                  className="h-10 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="e.g. 25 order bookers"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-neutral-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                placeholder="Tell us about your routes, distributors, and what you want to improve."
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-[11px] text-neutral-500">
                We&apos;ll get back within one business day with next steps.
              </p>
              <Button type="submit">Submit</Button>
            </div>
          </motion.form>
        </section>
      </main>
    </div>
  )
}



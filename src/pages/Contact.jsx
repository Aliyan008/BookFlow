import { Button } from '../components/Button'

export function Contact() {
  return (
    <div className="min-h-[calc(100vh-4rem-4rem)] bg-[#F9FAFB]">
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-neutral-700">
            Share a few details about your company and we&apos;ll reach out to
            schedule a short demo of OrderBooker for your team.
          </p>
        </section>

        <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100 sm:p-8">
          <form
            className="grid gap-5"
            onSubmit={(e) => {
              e.preventDefault()
              // No backend yet – this is a static marketing form.
            }}
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
                  className="h-9 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 shadow-sm shadow-neutral-50 outline-none ring-0 transition focus:border-[#344955] focus:ring-1 focus:ring-[#344955]"
                  placeholder="Your full name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-neutral-700"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="h-9 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 shadow-sm shadow-neutral-50 outline-none ring-0 transition focus:border-[#344955] focus:ring-1 focus:ring-[#344955]"
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
                  className="h-9 rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 shadow-sm shadow-neutral-50 outline-none ring-0 transition focus:border-[#344955] focus:ring-1 focus:ring-[#344955]"
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
                  className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm shadow-slate-50 outline-none ring-0 transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  placeholder="e.g. 25 order bookers"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm shadow-neutral-50 outline-none ring-0 transition focus:border-[#344955] focus:ring-1 focus:ring-[#344955]"
                placeholder="Tell us a bit about your routes, distributors, and what you want to improve."
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-[11px] text-neutral-500">
                We&apos;ll get back within one business day with next steps.
              </p>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}


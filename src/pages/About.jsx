export function About() {
  return (
    <div className="min-h-[calc(100vh-4rem-4rem)] bg-[#F9FAFB]">
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            About OrderBooker
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-neutral-700">
            OrderBooker is a field sales and order booking platform built
            specifically for FMCG and distribution companies in Pakistan. We
            bridge the gap between order bookers in the market, sales managers
            at head office, and distributors managing stock on the ground.
          </p>
        </section>

        <section className="mb-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Our Mission
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              We want every sales visit in Pakistan&apos;s traditional trade to
              be planned, measured, and valuable. That means no more blind
              coverage, no more manual order books, and no more waiting for
              end-of-day reports.
            </p>
            <p className="mt-3 text-sm text-neutral-700">
              By giving order bookers a simple mobile app and managers a clear
              view of what&apos;s happening in the field, we help brands grow
              distribution, increase order value, and improve service levels at
              every outlet.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Built for Pakistan&apos;s distribution reality
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              We design with the realities of local markets in mind—unstable
              connectivity, multiple distributors per city, principal visibility
              requirements, and the pressure on sales teams to hit daily,
              weekly, and monthly numbers.
            </p>
            <p className="mt-3 text-sm text-neutral-700">
              OrderBooker works across provinces, cities, and territories,
              giving principals and distributors a single source of truth for
              field execution.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-neutral-900">
            The team behind OrderBooker
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-700">
            We are a small, focused team of product builders, engineers, and
            sales operations specialists with experience in FMCG, distribution,
            and SaaS. We work closely with our partner distributors and brands
            to keep improving OrderBooker for the realities of the Pakistani
            market.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-sm font-semibold text-neutral-900">
                Product & Strategy
              </p>
              <p className="mt-2 text-xs text-neutral-700">
                Leads discovery with sales leaders and distributors to ensure
                OrderBooker always reflects on-ground needs.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-sm font-semibold text-neutral-900">
                Engineering
              </p>
              <p className="mt-2 text-xs text-neutral-700">
                Builds a modern, reliable platform that can handle thousands of
                daily check-ins, orders, and reports.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-sm font-semibold text-neutral-900">
                Customer Success
              </p>
              <p className="mt-2 text-xs text-neutral-700">
                Works with every new customer to design rollout plans, train
                order bookers, and support day-to-day operations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


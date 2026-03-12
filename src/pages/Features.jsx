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

export function Features() {
  return (
    <div className="min-h-[calc(100vh-4rem-4rem)] bg-[#F9FAFB]">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Hero */}
        <section className="mb-12 text-center sm:mb-16">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Features built for real field sales and distribution.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600 sm:text-base">
            Features built for field sales, distributors, and managers—from
            offline order booking to GPS-verified visits and team visibility.
          </p>
        </section>

        {/* Feature cards */}
        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.headline}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h2 className="text-base font-semibold tracking-tight text-[#344955]">
                  {feature.headline}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* By role */}
        <section className="mb-16 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
            By role
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-[#344955]">
                Order bookers
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Book orders offline, save drafts, sync when online. Get a quick daily summary of visits and orders.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#344955]">
                Sales officers & managers
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                See your team’s shops, attendance, and visits. Dashboards and reports without sharing logins.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#344955]">
                Distributors
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                View sales and update stock in one app. Stays in sync with what order bookers and the system record.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

import { Button } from '../components/Button'
import { NavLink } from 'react-router-dom'

const features = [
  {
    title: 'GPS Attendance',
    description:
      'Accurate, location-verified check-ins for order bookers as they start their day in market.',
  },
  {
    title: 'Order Booking',
    description:
      'Capture retail orders in seconds with ready-made product lists, pricing, and promotions.',
  },
  {
    title: 'Distributor Management',
    description:
      'Sync orders directly with distributors, avoid stockouts, and reduce dispatch errors.',
  },
  {
    title: 'Daily Reports',
    description:
      'Live dashboards for visits, coverage, orders, and value—no more chasing WhatsApp updates.',
  },
  {
    title: 'Leave Management',
    description:
      'Simple leave requests and approvals so managers always know who is active in the field.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Start day with GPS attendance',
    description:
      'Order booker checks in from market location using GPS-locked attendance on the mobile app.',
  },
  {
    step: '02',
    title: 'Visit assigned shops',
    description:
      'Order booker visits the assigned outlets on their beat and captures orders directly in the app.',
  },
  {
    step: '03',
    title: 'Book orders in-store',
    description:
      'Capture product-wise orders, schemes, and discounts in a few taps, directly on the handset.',
  },
  {
    step: '04',
    title: 'Instant distributor sync',
    description:
      'Orders are sent to the connected distributor so stock can be reserved and prepared on time.',
  },
  {
    step: '05',
    title: 'Managers track live performance',
    description:
      'Sales managers and principals view real-time coverage, productivity, and sales from web dashboards.',
  },
]

export function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem-4rem)] flex-col bg-[#F9FAFB]">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-gradient-to-br from-[#232F34] via-[#344955] to-[#232F34] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-neutral-100 ring-1 ring-white/15 backdrop-blur">
              Built for FMCG & distribution teams in Pakistan
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Field Sales & Order Booking, Done Right.
            </h1>
            <p className="text-sm leading-relaxed text-neutral-100 sm:text-base">
              OrderBooker is a mobile-first field sales management platform
              that helps order bookers, sales managers, and distributors work
              in sync—so every visit, every order, and every rupee is tracked.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button as={NavLink} to="/contact">
                Request a Demo
              </Button>
              <Button as={NavLink} to="/about" variant="secondary">
                Learn More
              </Button>
            </div>
            <p className="text-xs text-neutral-100/80">
              Trusted by distribution and FMCG teams to digitize field
              operations across Pakistan.
            </p>
          </div>

          <div className="w-full max-w-md rounded-2xl bg-black/10 p-5 ring-1 ring-white/20 backdrop-blur">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-100">
              Live visibility for every stakeholder
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-black/20 px-4 py-3">
                <div>
                  <p className="text-xs text-neutral-100">Order Bookers</p>
                  <p className="text-sm font-semibold">152 in field today</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  89% active today
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-black/10 px-4 py-3">
                <div>
                  <p className="text-xs text-neutral-100">Total orders today</p>
                  <p className="text-lg font-semibold">3,482</p>
                </div>
                <div className="text-right text-xs text-neutral-100/80">
                  <p>+18% vs last week</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-black/10 p-3">
                  <p className="mb-1 text-neutral-100">Coverage</p>
                  <p className="text-lg font-semibold">93%</p>
                </div>
                <div className="rounded-xl bg-black/10 p-3">
                  <p className="mb-1 text-neutral-100">Distributor fill-rate</p>
                  <p className="text-lg font-semibold">97%</p>
                </div>
              </div>
              <p className="text-[11px] text-neutral-100/90">
                Get a single source of truth for your field teams, routes,
                orders, and distributors—live, every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Everything your field sales needs in one app.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-neutral-600">
                OrderBooker is built for order bookers, sales managers, and
                distributors—so every part of your offline route-to-market is
                covered.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works timeline */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              How a day on OrderBooker works.
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              From GPS attendance to distributor dispatch—see how your field
              team’s workday flows inside OrderBooker.
            </p>
          </div>

          <ol className="space-y-6 border-l border-neutral-300 pl-4 sm:space-y-8 sm:pl-6">
            {steps.map((item, idx) => (
              <li key={item.step} className="relative pl-4 sm:pl-6">
                <div className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#344955] bg-white" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#344955]">
                  {item.step}
                </span>
                <h3 className="mt-1 text-sm font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#232F34] text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to bring your order bookers online?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-neutral-200">
                See how OrderBooker can digitize your field operations in under
                4 weeks—from pilot to full rollout across your distributors.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button as={NavLink} to="/contact">
                Request a Demo
              </Button>
              <Button as={NavLink} to="/about" variant="secondary">
                Learn about OrderBooker
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


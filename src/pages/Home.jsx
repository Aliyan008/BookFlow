import { useState, useEffect } from 'react'
import { Button } from '../components/Button'
import { NavLink } from 'react-router-dom'
import dashboardImage from '../assets/dashboard.jpeg'
import dashboard2Image from '../assets/dashboard2.jpeg'
import realtimeLocationImage from '../assets/realtime_location.jpeg'
import attendanceImage from '../assets/attendance_page.jpeg'
import ordersImage from '../assets/orders_page.jpeg'
import ordersTableImage from '../assets/orders_table.jpeg'
import monthlyTargetsImage from '../assets/monthly_targets.jpeg'
import stockManagementImage from '../assets/stock_management.jpeg'
import stockEntryImage from '../assets/stock_entry.jpeg'
import dailyReportImage from '../assets/daily_report.jpeg'
import userReportImage from '../assets/user_report.jpeg'
import shopsImage from '../assets/shops.jpeg'

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

const productScreens = [
  {
    title: 'Sales performance dashboard',
    description: 'Track total sales, execution and brand performance in one view.',
    image: dashboardImage,
  },
  {
    title: 'Live attendance & productivity',
    description: 'See who checked in, how many hours they worked and current status.',
    image: attendanceImage,
  },
  {
    title: 'Orders & execution progress',
    description: 'Monitor executed, pending and cancelled orders in real time.',
    image: ordersImage,
  },
  {
    title: 'Real-time field locations',
    description: 'View your team on the map with live coordinates and last update time.',
    image: realtimeLocationImage,
  },
  {
    title: 'Analytics & trends',
    description: 'Brand performance, province-wise sales and daily booking vs execution.',
    image: dashboard2Image,
  },
  {
    title: 'Monthly targets by zone',
    description: 'Set and manage targets by product and geography with CSV import.',
    image: monthlyTargetsImage,
  },
  {
    title: 'Stock management',
    description: 'Current stock by distributor, SKU and brand with low-stock alerts.',
    image: stockManagementImage,
  },
  {
    title: 'Admin stock entry',
    description: 'Add or adjust opening stock and track change history by distributor.',
    image: stockEntryImage,
  },
  {
    title: 'Orders data',
    description: 'Filter and export orders by shop, distributor, date and status.',
    image: ordersTableImage,
  },
  {
    title: 'Daily report',
    description: 'Shop visits and productivity by user, designation and date.',
    image: dailyReportImage,
  },
  {
    title: 'HR user report',
    description: 'Attendance, working hours and sales breakdown per employee.',
    image: userReportImage,
  },
  {
    title: 'Shops report',
    description: 'Total and productive shops by type, sector and distributor.',
    image: shopsImage,
  },
]

export function Home() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null)
        return
      }
      if (lightboxIndex == null) return
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((i) => (i <= 0 ? productScreens.length - 1 : i - 1))
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((i) => (i >= productScreens.length - 1 ? 0 : i + 1))
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex])

  useEffect(() => {
    if (lightboxIndex != null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  return (
    <div className="flex min-h-[calc(100vh-4rem-4rem)] flex-col bg-[#F9FAFB]">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#E5EDF3] px-3 py-1 text-xs font-medium text-[#344955] ring-1 ring-[#C3D3E0]">
              Built for FMCG & distribution teams in Pakistan
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Field Sales & Order Booking, Done Right.
            </h1>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
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
            <p className="text-xs text-neutral-500">
              Trusted by distribution and FMCG teams to digitize field
              operations across Pakistan.
            </p>
          </div>

          <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-[#232F34] via-[#344955] to-[#232F34] p-5 text-white shadow-lg shadow-[#1F2933]/40">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-100">
              Live visibility for every stakeholder
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-black/20 px-4 py-3">
                <div>
                  <p className="text-xs text-neutral-100">Order Bookers</p>
                  <p className="text-sm font-semibold text-white">
                    152 in field today
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  89% active today
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-black/10 px-4 py-3">
                <div>
                  <p className="text-xs text-neutral-100">Total orders today</p>
                  <p className="text-lg font-semibold text-white">3,482</p>
                </div>
                <div className="text-right text-xs text-neutral-100/80">
                  <p>+18% vs last week</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-black/10 p-3">
                  <p className="mb-1 text-neutral-100">Coverage</p>
                  <p className="text-lg font-semibold text-white">93%</p>
                </div>
                <div className="rounded-xl bg-black/10 p-3">
                  <p className="mb-1 text-neutral-100">Distributor fill-rate</p>
                  <p className="text-lg font-semibold text-white">97%</p>
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
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                See OrderBooker in action.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-neutral-600">
                Scroll through live screens from the web console to understand how your team and data come together.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

          <div
            className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-4 pb-2 sm:gap-5 sm:px-6"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {productScreens.map((screen, index) => (
              <figure
                key={screen.title}
                role="button"
                tabIndex={0}
                onClick={() => setLightboxIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setLightboxIndex(index)
                  }
                }}
                className="group relative flex min-w-0 cursor-pointer flex-[0_0_calc(50%-0.5rem)] snap-center rounded-xl border border-neutral-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:flex-[0_0_calc(33.333%-0.75rem)] lg:flex-[0_0_calc(25%-0.75rem)]"
              >
                  <div className="relative flex w-full flex-col overflow-hidden rounded-xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                      <img
                        src={screen.image}
                        alt={screen.title}
                        className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-300">
                            Product screen
                          </p>
                          <h3 className="mt-1 text-sm font-semibold text-white">
                            {screen.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-neutral-200">
                            {screen.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex != null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Product screen preview"
          >
            <div
              className="relative flex max-h-[90vh] max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-10 right-0 rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex max-h-[75vh] w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-900">
                <img
                  src={productScreens[lightboxIndex].image}
                  alt={productScreens[lightboxIndex].title}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>
              <div className="mt-4 w-full max-w-2xl text-center">
                <h3 className="text-lg font-semibold text-white">
                  {productScreens[lightboxIndex].title}
                </h3>
                <p className="mt-1 text-sm text-neutral-300">
                  {productScreens[lightboxIndex].description}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxIndex((i) => (i <= 0 ? productScreens.length - 1 : i - 1))
                  }}
                  className="rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
                  aria-label="Previous image"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm text-neutral-400">
                  {lightboxIndex + 1} / {productScreens.length}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxIndex((i) => (i >= productScreens.length - 1 ? 0 : i + 1))
                  }}
                  className="rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
                  aria-label="Next image"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
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


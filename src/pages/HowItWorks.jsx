import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/Button'
import { FadeUp } from '../components/FadeUp'
import dashboardImage from '../assets/dashboard.jpeg'
import dashboard2Image from '../assets/dashboard2.jpeg'
import ordersPageImage from '../assets/orders_page.jpeg'
import ordersTableImage from '../assets/orders_table.jpeg'
import monthlyTargetsImage from '../assets/monthly_targets.jpeg'
import attendanceAppImage from '../assets/attendance_app.jpeg'
import attendancePageImage from '../assets/attendance_page.jpeg'
import realtimeLocationImage from '../assets/realtime_location.jpeg'
import shopsImage from '../assets/shops.jpeg'
import dailyReportImage from '../assets/daily_report.jpeg'
import userReportImage from '../assets/user_report.jpeg'
import stockManagementImage from '../assets/stock_management.jpeg'
import stockEntryImage from '../assets/stock_entry.jpeg'

const sections = [
  {
    divider: 'SALES DASHBOARD',
    accent: 'text-[#c0c1ff]',
    id: 'dashboard',
    rows: [
      {
        title: 'Live Sales Dashboard',
        body: 'Real-time visibility into orders, executions, and revenue across every brand and region. Filter by daily, weekly, monthly, or yearly trends to spot what is actually moving.',
        image: dashboardImage,
        overlay: dashboard2Image,
      },
    ],
  },
  {
    divider: 'SALES',
    accent: 'text-[#4cd7f6]',
    id: 'sales',
    rows: [
      {
        title: 'Order Booking',
        body: 'Field teams capture orders directly from shops, even offline. Every order syncs automatically and shows clear status — pending, completed, or cancelled — the moment connectivity returns.',
        image: ordersPageImage,
        overlay: ordersTableImage,
      },
      {
        title: 'Monthly Targets',
        body: 'Set sales and revenue targets per team member each month, then track performance against those goals in one place — no spreadsheets, no guesswork.',
        image: monthlyTargetsImage,
      },
    ],
  },
  {
    divider: 'ATTENDANCE',
    accent: 'text-[#ffb783]',
    id: 'attendance',
    rows: [
      {
        title: 'GPS Attendance',
        body: 'Sales reps check in with verified GPS location, giving managers a reliable, tamper-proof record of who showed up where and when.',
        image: attendancePageImage,
        overlay: attendanceAppImage,
      },
      {
        title: 'Real-Time Location Tracking',
        body: 'See exactly where your checked-in team members are on a live map throughout the day — useful for coverage planning and accountability.',
        image: realtimeLocationImage,
      },
    ],
  },
  {
    divider: 'REPORTS',
    accent: 'text-[#4cd7f6]',
    id: 'reports',
    rows: [
      {
        title: 'Shop Management',
        body: 'A complete directory of every shop your team has onboarded, with details ready to reference before the next visit.',
        image: shopsImage,
      },
      {
        title: 'Daily Reporting',
        body: 'End-of-day summaries roll up automatically — what was sold, where, and by whom — so reporting never depends on someone remembering to write it up.',
        image: dailyReportImage,
      },
      {
        title: 'HR & Payroll Reports',
        body: 'Everything HR needs for month-end payroll — orders, shop visits, attendance, and sales figures — consolidated into a single report per team member.',
        image: userReportImage,
      },
    ],
  },
  {
    divider: 'STOCK',
    accent: 'text-[#c0c1ff]',
    id: 'stock',
    rows: [
      {
        title: 'Distributor Stock Control',
        body: 'Track distributor inventory in real time and log dispatches as they happen, keeping warehouse stock and field-reported numbers in sync.',
        image: stockManagementImage,
        overlay: stockEntryImage,
      },
    ],
  },
]

function Row({ title, body, image, overlay, index }) {
  const isImageLeft = index % 2 === 0
  const overlayPosition = isImageLeft ? 'bottom-right' : 'bottom-left'

  const imageBlock = (
    <FadeUp variant={isImageLeft ? 'slideRight' : 'slideLeft'} className="relative w-full lg:w-[55%] flex-shrink-0">
      <div className="glass-card rounded-2xl p-2">
        <img src={image} alt={title} className="w-full rounded-xl object-cover" />
      </div>
      {overlay && (
        <motion.div
          className={`glass-card absolute w-24 sm:w-28 rounded-xl p-1 shadow-lg ${
            overlayPosition === 'bottom-right' ? '-bottom-6 -right-4' : '-bottom-6 -left-4'
          }`}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <img src={overlay} alt={`${title} detail`} className="w-full rounded-lg object-cover" />
        </motion.div>
      )}
    </FadeUp>
  )

  const textBlock = (
    <FadeUp variant={isImageLeft ? 'slideLeft' : 'slideRight'} delay={0.1} className="flex-1">
      <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">{title}</h3>
      <p className="mt-4 text-base text-[#6b6b7e] leading-relaxed max-w-md">{body}</p>
    </FadeUp>
  )

  return (
    <div className={`flex flex-col gap-10 lg:gap-16 lg:items-center ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {imageBlock}
      {textBlock}
    </div>
  )
}

export function HowItWorks() {
  let rowIndex = 0

  return (
    <div className="dot-grid min-h-[calc(100vh-4rem)] text-[#0d0d15]">
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-36">
        <section className="text-center mb-24">
          <p className="mx-auto inline-flex rounded-full border border-[#8083ff]/30 bg-[#8083ff]/10 px-4 py-1 text-xs font-medium text-[#c0c1ff]">
            SEE IT IN ACTION
          </p>
          <FadeUp delay={0}>
            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">How Bookflow Works</h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#6b6b7e]">
              A real walkthrough of every screen your team will actually use — from booking orders in the field to tracking stock at the warehouse.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button as={NavLink} to="/contact">Get Started Today</Button>
              <Button as={NavLink} to="/" variant="secondary">Back to Home</Button>
            </div>
          </FadeUp>
        </section>

        <div className="space-y-24">
          {sections.map((section) => (
            <div key={section.divider} id={section.id}>
              <FadeUp>
                <div className="mb-12 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#d0d0dc]/60" />
                  <h2 className={`text-[11px] font-bold tracking-[0.25em] ${section.accent}`}>{section.divider}</h2>
                  <div className="h-px flex-1 bg-[#d0d0dc]/60" />
                </div>
              </FadeUp>
              <div className="space-y-20">
                {section.rows.map((row) => {
                  const currentIndex = rowIndex
                  rowIndex += 1
                  return <Row key={row.title} {...row} index={currentIndex} />
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

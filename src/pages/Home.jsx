import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/Button'
import { FadeUp } from '../components/FadeUp'
import heroDashboard from '../assets/dashboard.jpeg'
import attendanceImage from '../assets/attendance_page.jpeg'
import ordersImage from '../assets/orders_page.jpeg'
import stockManagementImage from '../assets/stock_management.jpeg'
import dailyReportImage from '../assets/daily_report.jpeg'
import realtimeLocationImage from '../assets/realtime_location.jpeg'
import analyticsImage from '../assets/analytics.jpeg'
import attendanceAppImage from '../assets/attendance_app.jpeg'
import homeTabImage from '../assets/home_tab.jpeg'
import metroMilanLogo from '../assets/metromilan.png'
import franscentLogo from '../assets/franscent.png'

const stats = [
  { label: 'Orders Daily', value: 1300, suffix: '+' },
  { label: 'Active Users', value: 200, suffix: '+' },
  { label: 'Offline Ready', value: 100, suffix: '%' },
  { label: 'GPS Tracking', displayValue: 'Real-time' },
]

const showcaseFeatures = [
  { key: 'gps', title: 'GPS Attendance', image: realtimeLocationImage, caption: 'Verifiable location check-ins.' },
  { key: 'orders', title: 'Order Booking', image: ordersImage, caption: 'Intuitive catalog & ordering.' },
  { key: 'distributors', title: 'Distributor Management', image: stockManagementImage, caption: 'Live stock & ledger updates.' },
  { key: 'reports', title: 'Daily Reports', image: dailyReportImage, caption: 'Automated EOD summaries.' },
  { key: 'leave', title: 'Leave Management', image: attendanceImage, caption: 'Attendance-linked approvals.' },
]

function useCountUp(target, duration = 1100) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return undefined

    let frameId
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.round(progress * target))
      if (progress < 1) frameId = window.requestAnimationFrame(tick)
    }

    frameId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frameId)
  }, [duration, isInView, target])

  return { ref, count }
}

function CountUpStat({ value, suffix = '', displayValue = '' }) {
  if (displayValue) {
    return <p className="text-2xl font-semibold text-[#c0c1ff]">{displayValue}</p>
  }

  const { ref, count } = useCountUp(value)

  return (
    <p ref={ref} className="text-2xl font-semibold text-[#c0c1ff]">
      {count}
      {suffix}
    </p>
  )
}

export function Home() {
  const [activeShowcase, setActiveShowcase] = useState(showcaseFeatures[0].key)
  const heroMobileScreens = [analyticsImage, attendanceAppImage, homeTabImage]
  const [heroMobileIndex, setHeroMobileIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShowcase((prev) => {
        const currentIndex = showcaseFeatures.findIndex((feature) => feature.key === prev)
        const nextIndex = currentIndex === -1 || currentIndex === showcaseFeatures.length - 1 ? 0 : currentIndex + 1
        return showcaseFeatures[nextIndex].key
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroMobileIndex((prev) => (prev === heroMobileScreens.length - 1 ? 0 : prev + 1))
    }, 4500)
    return () => clearInterval(interval)
  }, [heroMobileScreens.length])

  return (
    <div className="dot-grid min-h-[calc(100vh-4rem)] overflow-x-hidden text-[#e4e1ed]">
      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 overflow-hidden px-6 pb-14 pt-24 lg:flex-row lg:items-center lg:pt-36">
        <div className="hero-glow left-1/2 top-20 -translate-x-1/2" />
        <div className="z-10 flex-1 space-y-6">
          <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6, ease: 'easeOut' }}
            >
              Field Sales,
            </motion.span>
            <motion.span
              className="block text-[#c0c1ff]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            >
              Simplified.
            </motion.span>
          </h1>
          <motion.p
            className="max-w-xl text-base text-[#c7c4d7]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          >
            GPS attendance, order booking, distributor management and daily reporting — all in one app that works even offline.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
          >
            <Button as={NavLink} to="/contact">Request a Demo</Button>
            <Button as={NavLink} to="/features" variant="secondary">Learn More</Button>
          </motion.div>
        </div>
        <motion.div
          className="relative z-10 flex-1"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="glass-card hidden rounded-xl p-2 lg:block">
            <img src={heroDashboard} alt="OrderBooker web dashboard" className="w-full rounded-lg object-cover opacity-95" />
          </div>
          <motion.div
            className="glass-card absolute -bottom-8 right-0 hidden w-28 rounded-xl p-1 sm:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <img src={heroMobileScreens[heroMobileIndex]} alt="OrderBooker mobile app" className="aspect-[9/18] w-full rounded-lg object-cover" />
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto -mt-2 w-full max-w-7xl px-6">
        <FadeUp>
          <div className="glass-card grid grid-cols-2 gap-6 rounded-xl px-6 py-6 text-center md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label}>
                <CountUpStat value={item.value} suffix={item.suffix} displayValue={item.displayValue} />
                <p className="text-xs text-[#908fa0]">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.22em] text-[#908fa0]">Trusted by FMCG brands</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[{ logo: metroMilanLogo, label: 'Metro Milan' }, { logo: franscentLogo, label: 'Franscent Fragrance' }].map((brand, index) => (
            <FadeUp key={brand.label} delay={index * 0.1}>
              <motion.div whileHover={{ y: -4, scale: 1.02 }} className="glass-card flex items-center gap-3 rounded-xl px-5 py-3">
                <img src={brand.logo} alt={brand.label} className="h-10 w-10 rounded-md bg-white object-contain p-1" />
                <span className="text-sm font-semibold">{brand.label}</span>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">Pro-Grade Execution Modules</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['OrderBooker Field', 'Precision order taking tools that work even without an internet connection.'],
            ['Manager', 'Complete oversight of sales targets, routes, and team performance metrics.'],
            ['Distributor', 'Stock management and delivery tracking for the back-end operation.'],
            ['Insights', 'Real-time data visualization to make informed distribution decisions.'],
          ].map(([title, text], index) => (
            <FadeUp key={title} delay={index * 0.1}>
              <motion.article whileHover={{ y: -4 }} className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-[#c7c4d7]">{text}</p>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="relative w-full overflow-hidden pb-16">
        {/* Mobile & Tablet */}
        <div className="lg:hidden">
          {(() => {
            const total = showcaseFeatures.length
            const currentIndex = Math.max(
              0,
              showcaseFeatures.findIndex((feature) => feature.key === activeShowcase),
            )
            const prevIndex = (currentIndex - 1 + total) % total
            const nextIndex = (currentIndex + 1) % total
            const goPrev = () => setActiveShowcase(showcaseFeatures[prevIndex].key)
            const goNext = () => setActiveShowcase(showcaseFeatures[nextIndex].key)
            const activeFeature = showcaseFeatures[currentIndex]

            return (
              <>
                <div className="relative mx-auto h-[260px] w-full overflow-hidden md:h-[380px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature.key}
                      className="absolute inset-0 bg-[#0a0f1e]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <img
                        src={activeFeature.image}
                        alt={activeFeature.title}
                        className="h-full w-full rounded-lg object-contain"
                      />
                      <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-black/75 via-black/40 to-transparent px-6 pb-5 pt-12">
                        <p className="text-lg font-semibold text-white">{activeFeature.title}</p>
                        <p className="mt-1 text-sm text-white/85">{activeFeature.caption}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-3">
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Previous feature"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#464554] bg-[#1b1b23]/90 text-[#e4e1ed] transition hover:border-[#c0c1ff]/70 hover:text-[#c0c1ff]"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="Next feature"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#464554] bg-[#1b1b23]/90 text-[#e4e1ed] transition hover:border-[#c0c1ff]/70 hover:text-[#c0c1ff]"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-2">
                  {showcaseFeatures.map((feature) => (
                    <button
                      key={feature.key}
                      type="button"
                      onClick={() => setActiveShowcase(feature.key)}
                      aria-label={`Go to ${feature.title}`}
                      className={`h-2 rounded-full bg-white transition-all ${
                        feature.key === activeShowcase ? 'w-4 opacity-100' : 'w-2 opacity-40'
                      }`}
                    />
                  ))}
                </div>
              </>
            )
          })()}
        </div>

        {/* Desktop */}
        <div className="relative mx-auto hidden h-[500px] w-full overflow-hidden lg:block">
          {(() => {
            const total = showcaseFeatures.length
            const currentIndex = Math.max(
              0,
              showcaseFeatures.findIndex((feature) => feature.key === activeShowcase),
            )
            const prevIndex = (currentIndex - 1 + total) % total
            const nextIndex = (currentIndex + 1) % total
            const goPrev = () => setActiveShowcase(showcaseFeatures[prevIndex].key)
            const goNext = () => setActiveShowcase(showcaseFeatures[nextIndex].key)
            const slides = [
              { feature: showcaseFeatures[prevIndex], role: 'prev' },
              { feature: showcaseFeatures[currentIndex], role: 'center' },
              { feature: showcaseFeatures[nextIndex], role: 'next' },
            ]
            const slideAnimation = {
              prev: { x: '-28%', scale: 0.75, opacity: 0.35, filter: 'blur(8px)' },
              center: { x: '27%', scale: 1, opacity: 1, filter: 'blur(0px)' },
              next: { x: '63%', scale: 0.75, opacity: 0.35, filter: 'blur(8px)' },
            }

            return (
              <>
                {slides.map(({ feature, role }) => (
                  <motion.div
                    key={feature.key}
                    className={`absolute left-0 top-0 h-full w-[65%] bg-[#0a0f1e] ${role !== 'center' ? 'cursor-pointer' : ''}`}
                    initial={false}
                    animate={slideAnimation[role]}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{ zIndex: role === 'center' ? 3 : 1 }}
                    onClick={() => {
                      if (role === 'prev') goPrev()
                      if (role === 'next') goNext()
                    }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full rounded-lg object-contain"
                    />
                    {role === 'center' && (
                      <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-black/75 via-black/40 to-transparent px-6 pb-5 pt-12">
                        <p className="text-lg font-semibold text-white">{feature.title}</p>
                        <p className="mt-1 text-sm text-white/85">{feature.caption}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous feature"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#464554] bg-[#1b1b23]/90 text-[#e4e1ed] transition hover:border-[#c0c1ff]/70 hover:text-[#c0c1ff]"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next feature"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#464554] bg-[#1b1b23]/90 text-[#e4e1ed] transition hover:border-[#c0c1ff]/70 hover:text-[#c0c1ff]"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </>
            )
          })()}
        </div>
      </section>

      <section className="px-6 pb-20">
        <FadeUp>
          <div className="mx-auto max-w-7xl rounded-[1.8rem] bg-gradient-to-br from-[#8083ff] via-[#494bd6] to-[#0d0096] p-10 text-center">
            <h2 className="text-4xl font-bold text-[#e1e0ff]">Ready to digitize your field sales?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#e1e0ff]">
              Join the leading FMCG brands already optimizing their distribution with Bookflow. Start your transformation today.
            </p>
            <div className="mt-6">
              <Button as={NavLink} to="/contact" className="bg-[#e1e0ff] text-[#2f2ebe] hover:bg-[#c0c1ff]">Request a Demo</Button>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  )
}

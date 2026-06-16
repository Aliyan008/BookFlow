import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/Button'
import { FadeUp } from '../components/FadeUp'
import { useTilt } from '../hooks/useTilt'
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
    return <p className="text-3xl lg:text-4xl font-bold text-[#c0c1ff]">{displayValue}</p>
  }

  const { ref, count } = useCountUp(value)

  return (
    <p ref={ref} className="text-3xl lg:text-4xl font-bold text-[#c0c1ff]">
      {count}
      {suffix}
    </p>
  )
}

function TiltCard({ children, className }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(8)
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
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
    <div className="dot-grid min-h-[calc(100vh-4rem)] overflow-x-hidden text-[#0d0d15]">
      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 overflow-hidden px-6 pb-20 pt-28 lg:flex-row lg:items-center lg:pt-40">
        <motion.div
          className="hero-glow"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />
        <div className="z-10 flex-1 space-y-6">
          <motion.p
            className="text-xs font-semibold tracking-[0.2em] text-[#4cd7f6] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            FIELD SALES AUTOMATION
          </motion.p>
          <h1 className="text-4xl font-extrabold tracking-tight leading-none lg:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            >
              Field Sales,
            </motion.span>
            <motion.span
              className="block text-[#c0c1ff] drop-shadow-[0_0_32px_rgba(192,193,255,0.25)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6, ease: 'easeOut' }}
            >
              Simplified.
            </motion.span>
          </h1>
          <motion.p
            className="max-w-xl text-base lg:text-lg text-[#6b6b7e] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.6, ease: 'easeOut' }}
          >
            GPS attendance, order booking, distributor management and daily reporting — all in one app that works even offline.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.6, ease: 'easeOut' }}
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
          <div className="glass-card grid grid-cols-2 gap-6 rounded-xl px-8 py-8 text-center md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="[&:not(:last-child)]:border-r [&:not(:last-child)]:border-[#d0d0dc]/40">
                <CountUpStat value={item.value} suffix={item.suffix} displayValue={item.displayValue} />
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#9999aa]">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.22em] text-[#6b6b7e]">Trusted by FMCG brands</p>
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
        <FadeUp variant="fadeIn">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#6b6b7e] mb-3 text-center">PLATFORM MODULES</p>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-center mb-10">Pro-Grade Execution Modules</h2>
        </FadeUp>
        <div className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['OrderBooker Field', 'Precision order taking tools that work even without an internet connection.'],
            ['Manager', 'Complete oversight of sales targets, routes, and team performance metrics.'],
            ['Distributor', 'Stock management and delivery tracking for the back-end operation.'],
            ['Insights', 'Real-time data visualization to make informed distribution decisions.'],
          ].map(([title, text], index) => (
            <FadeUp key={title} delay={index * 0.08} variant="scaleUp" className="h-full">
              <TiltCard className="glass-card rounded-xl p-5 lg:p-6 h-full flex flex-col">
                <h3 className="text-base font-semibold flex items-center"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c0c1ff] mr-2 flex-shrink-0" />{title}</h3>
                <p className="mt-3 text-sm text-[#6b6b7e] leading-relaxed flex-1">{text}</p>
              </TiltCard>
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
                      className="absolute inset-0 bg-[#eeeef4]"
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
                        <p className="mt-1 text-sm text-[#0d0d15]/85">{activeFeature.caption}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-3">
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Previous feature"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0d0dc] bg-[#e8e8f0]/90 text-[#0d0d15] transition hover:border-[#c0c1ff]/70 hover:text-[#c0c1ff]"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="Next feature"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0d0dc] bg-[#e8e8f0]/90 text-[#0d0d15] transition hover:border-[#c0c1ff]/70 hover:text-[#c0c1ff]"
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
                    className={`absolute left-0 top-0 h-full w-[65%] bg-[#eeeef4] ${role !== 'center' ? 'cursor-pointer' : ''}`}
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
                        <p className="mt-1 text-sm text-[#0d0d15]/85">{feature.caption}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous feature"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0d0dc] bg-[#e8e8f0]/90 text-[#0d0d15] transition hover:border-[#c0c1ff]/70 hover:text-[#c0c1ff]"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next feature"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0d0dc] bg-[#e8e8f0]/90 text-[#0d0d15] transition hover:border-[#c0c1ff]/70 hover:text-[#c0c1ff]"
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
          <div className="mx-auto max-w-7xl rounded-[1.8rem] bg-gradient-to-br from-[#8083ff] via-[#494bd6] to-[#0d0096] px-8 py-14 lg:px-16 lg:py-16 text-center shadow-[0_0_80px_rgba(128,131,255,0.2)]">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Ready to digitize your field sales?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
              Join the leading FMCG brands already optimizing their distribution with Bookflow. Start your transformation today.
            </p>
            <div className="mt-6">
              <Button as={NavLink} to="/contact" className="bg-white text-[#0d0096] hover:bg-[#e1e0ff] font-semibold px-7 py-3 text-sm">Request a Demo</Button>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  )
}

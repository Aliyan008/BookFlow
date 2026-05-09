import { Button } from '../components/Button'
import metroMilanLogo from '../assets/metromilan.png'
import franscentLogo from '../assets/franscent.png'

export function Contact() {
  return (
    <div className="dot-grid min-h-[calc(100vh-4rem)] text-[#e4e1ed]">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-36">
        <div className="grid gap-10 lg:grid-cols-2">
          <section className="space-y-8">
            <div>
              <p className="inline-flex rounded-full border border-[#03b5d3]/30 bg-[#03b5d3]/15 px-3 py-1 text-xs font-medium text-[#4cd7f6]">
                GET IN TOUCH
              </p>
              <h1 className="mt-4 text-5xl font-bold">Let&apos;s talk about your field sales.</h1>
              <p className="mt-4 max-w-lg text-[#c7c4d7]">
                Share a few details about your company and we&apos;ll schedule a short demo of Bookflow tailored to your routes, distributors and field team size.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">What to expect</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#c7c4d7]">
                <li className="glass-card rounded-lg px-4 py-3">A 30–45 minute conversation to understand your current field process.</li>
                <li className="glass-card rounded-lg px-4 py-3">A walkthrough of how Bookflow fits your existing routes and distributors.</li>
                <li className="glass-card rounded-lg px-4 py-3">Clear next steps with zero obligation.</li>
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#908fa0]">Contact</p>
                <p className="mt-1 text-sm">Email: text19013@gmail.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#908fa0]">Typical response time</p>
                <p className="mt-1 text-sm">Within one business day.</p>
              </div>
            </div>
          </section>

          <section>
            <form
              className="glass-card space-y-5 rounded-xl p-6"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs text-[#c7c4d7]">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" className="h-10 w-full rounded-lg border border-[#464554] bg-[#13131b] px-3 text-sm outline-none focus:border-[#c0c1ff]" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs text-[#c7c4d7]">Work email</label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" className="h-10 w-full rounded-lg border border-[#464554] bg-[#13131b] px-3 text-sm outline-none focus:border-[#c0c1ff]" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs text-[#c7c4d7]">Company</label>
                  <input id="company" name="company" type="text" required placeholder="Company or distributor name" className="h-10 w-full rounded-lg border border-[#464554] bg-[#13131b] px-3 text-sm outline-none focus:border-[#c0c1ff]" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="teamSize" className="text-xs text-[#c7c4d7]">Approx. field team size</label>
                  <input id="teamSize" name="teamSize" type="text" placeholder="e.g. 25 order bookers" className="h-10 w-full rounded-lg border border-[#464554] bg-[#13131b] px-3 text-sm outline-none focus:border-[#c0c1ff]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs text-[#c7c4d7]">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your routes, distributors, and what you want to improve." className="w-full rounded-lg border border-[#464554] bg-[#13131b] px-3 py-2 text-sm outline-none focus:border-[#c0c1ff]" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] text-[#908fa0]">We&apos;ll get back within one business day with next steps.</p>
                <Button type="submit">Send Message</Button>
              </div>
            </form>

            <div className="glass-card mt-6 rounded-xl p-5">
              <p className="mb-4 text-center text-xs uppercase tracking-[0.22em] text-[#908fa0]">Trusted Brands</p>
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <img src={metroMilanLogo} alt="Metro Milan logo" className="h-8 w-8 rounded bg-white p-1 object-contain" />
                  <span className="text-sm">Metro Milan</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={franscentLogo} alt="Franscent logo" className="h-8 w-8 rounded bg-white p-1 object-contain" />
                  <span className="text-sm">Franscent</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

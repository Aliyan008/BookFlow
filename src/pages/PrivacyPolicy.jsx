import { FadeUp } from '../components/FadeUp'

function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-[#d0d0dc]/40 pt-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-semibold text-[#0d0d15]">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#4a4a5a]">{children}</div>
    </section>
  )
}

function SubHeading({ children }) {
  return <h3 className="text-base font-semibold text-[#0d0d15]">{children}</h3>
}

export function PrivacyPolicy() {
  return (
    <div className="dot-grid min-h-[calc(100vh-4rem)] text-[#0d0d15]">
      <main className="mx-auto w-full max-w-3xl px-6 pb-16 pt-36">
        <FadeUp>
          <header className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4cd7f6]">Legal</p>
            <h1 className="mt-3 text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-4 text-[#4a4a5a]">
              This Privacy Policy explains how Bookflow collects, uses, stores, and protects personal
              information when you use our field sales and distribution platform.
            </p>
          </header>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="glass-card mb-10 rounded-xl p-6 text-sm text-[#4a4a5a]">
            <p className="font-semibold text-[#0d0d15]">About Bookflow</p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <span className="text-[#6b6b7e]">Contact:</span>{' '}
                <a href="mailto:getbookflow@gmail.com" className="text-[#4cd7f6] hover:underline">
                  getbookflow@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[#6b6b7e]">Website:</span>{' '}
                <a
                  href="https://bookflow-mu.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4cd7f6] hover:underline"
                >
                  bookflow-mu.vercel.app
                </a>
              </li>
              <li>
                <span className="text-[#6b6b7e]">Last Updated:</span> June 2025
              </li>
            </ul>
          </div>
        </FadeUp>

        <article className="glass-card space-y-8 rounded-xl p-8">
          <Section id="introduction" title="Introduction">
            <p>
              This policy explains how Bookflow collects, uses, and protects personal information across
              our field sales management platform, covering both the web dashboard and mobile application.
            </p>
          </Section>

          <Section id="who-this-applies-to" title="Who This Policy Applies To">
            <p>This Privacy Policy applies to two types of users:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-[#0d0d15]">Business Clients</strong> — companies that subscribe
                to Bookflow, manage the account, and are responsible for adding their team.
              </li>
              <li>
                <strong className="text-[#0d0d15]">End Users</strong> — sales reps employed by the business
                client who use the Bookflow mobile app on the ground.
              </li>
            </ul>
          </Section>

          <Section id="data-we-collect" title="What Data We Collect and Why">
            <div className="space-y-6">
              <div>
                <SubHeading>Business Clients</SubHeading>
                <p className="mt-2">We collect the following information from business clients:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Company name</li>
                  <li>Contact person name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing details</li>
                </ul>
                <p className="mt-3">
                  This information is used for account creation, communication, and billing.
                </p>
              </div>
              <div>
                <SubHeading>End Users (Sales Reps)</SubHeading>
                <p className="mt-2">We collect the following information from end users:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Account credentials</li>
                  <li>GPS location (background, during active sessions)</li>
                  <li>Attendance records (check-in/check-out times, work hours)</li>
                  <li>Order and transaction data related to field sales activity.</li>
                </ul>
                <p className="mt-3">
                  This information is used for attendance tracking, work location verification, order
                  management, and push notifications.
                </p>
              </div>
            </div>
          </Section>

          <Section id="background-location" title="Background Location Data">
            <p>
              This section provides detailed information about how Bookflow collects and uses location
              data, in compliance with Google Play Store requirements.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Location is collected <strong className="text-[#0d0d15]">only</strong> when a sales rep is
                actively checked in to a work session.
              </li>
              <li>
                Collection begins at check-in and stops immediately at check-out or app termination.
              </li>
              <li>
                Location is recorded approximately every 30 seconds during an active session.
              </li>
              <li>
                Location data is used exclusively for attendance verification and field order management.
              </li>
              <li>
                Location is never collected passively, in the background outside of a session, or for
                advertising purposes.
              </li>
              <li>
                Business clients can view their reps&apos; session location history through the dashboard.
              </li>
              <li>
                Sales reps are informed of location collection by their employer prior to using the app.
              </li>
            </ul>
          </Section>

          <Section id="storage-and-security" title="How We Store and Protect Your Data">
            <p>
              Data is stored on secure cloud infrastructure and managed servers. We apply standard security
              practices to protect your information.
            </p>
            <p>
              No system is perfectly secure and we cannot guarantee absolute security. Data is retained as
              long as the business client account is active or as required to resolve disputes.
            </p>
          </Section>

          <Section id="data-sharing" title="Data Sharing and Third Parties">
            <p>We do not sell personal data.</p>
            <p>
              We use trusted third-party infrastructure providers for authentication and data storage. No
              other third-party data sharing occurs. Business client data is never shared with other
              business clients.
            </p>
          </Section>

          <Section id="business-client-responsibilities" title="Business Client Responsibilities">
            <p>
              Business clients are the data controllers for their employees&apos; personal information.
              Bookflow acts as a data processor on their behalf.
            </p>
            <p>Business clients are solely responsible for:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Informing their sales reps that the Bookflow app collects location and attendance data
              </li>
              <li>Obtaining any necessary consent from employees</li>
              <li>Ensuring lawful use of the platform within their organization</li>
            </ul>
          </Section>

          <Section id="your-rights" title="Your Rights">
            <p>
              Users may request to access, correct, or delete their personal data by emailing{' '}
              <a href="mailto:getbookflow@gmail.com" className="text-[#4cd7f6] hover:underline">
                getbookflow@gmail.com
              </a>
              . We will respond within a reasonable timeframe.
            </p>
            <p>
              Note: end users whose accounts were created by a business client should first contact their
              employer, as the business client controls account management.
            </p>
          </Section>

          <Section id="childrens-data" title="Children&apos;s Data">
            <p>
              Bookflow is intended for professional use only. We do not knowingly collect data from anyone
              under 18 years of age.
            </p>
          </Section>

          <Section id="changes" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy at any time. The &ldquo;Last Updated&rdquo; date at the top
              of this page will reflect the most recent revision. Continued use of the platform after
              changes constitutes acceptance.
            </p>
          </Section>

          <Section id="contact-us" title="Contact Us">
            <p>
              For any questions or requests related to this Privacy Policy, contact us at{' '}
              <a href="mailto:getbookflow@gmail.com" className="text-[#4cd7f6] hover:underline">
                getbookflow@gmail.com
              </a>
              .
            </p>
          </Section>

          <div className="border-t border-[#d0d0dc]/40 pt-8">
            <p className="text-xs text-[#6b6b7e]">
              This Privacy Policy is governed by the laws of Pakistan.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}
